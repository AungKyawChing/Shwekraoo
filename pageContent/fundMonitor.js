document.addEventListener("DOMContentLoaded", () => {
  const $ = document.querySelector.bind(document)

  const config = {
    els: {
      fundBody: $("#fundTableBody"),
      transDetails: $("#transaction-details"),
      transTitle: $("#transaction-title"),
      transBody: $("#transactionTableBody"),
      closeBtn: $("#close-details"),
    },
    urls: {
      // Replace with your actual Google Sheets web app URLs
      mainFund:
        "https://script.google.com/macros/s/AKfycbz4GbaM-v8PdkOkNoEDptCeL4EKd2m94fkg0cr_64Ptg5vHTV7m7S_jxCsBj7Xpk3-6SQ/exec",
      // Add your Projects spreadsheet URL here
      projectsList: "https://script.google.com/macros/s/AKfycbwxYiWJmLxhQ1Zf0DVgcMWrrUoYx-n1Cj7j1muQ17Tqv__7oOU8eVyntjcgu2Y1f7Kh1w/exec",
    },
    projects: {}, // Will be populated from Projects spreadsheet
    data: [], // Will be populated from Google Sheets
    transDetails: {}, // Will be populated from Google Sheets
  }

  // Function to update table with data
  const updateTable = (body, data) => {
    if (!Array.isArray(data) || data.length === 0) {
      body.innerHTML = `<tr><td colspan="5">No data available</td></tr>`
      return
    }

    body.innerHTML = data.reduce((html, item) => {
      // Extract properties with fallbacks for missing data
      const date = item.date || "N/A"
      const time = item.time || "N/A"
      const reason = item.reason || "Unknown"
      const url = item.url || null
      const amount = item.amount || 0
      const balance = item.balance || 0
      const note = item.note || ""

      return (
        `
        <tr>
          <td>${date}<br>${time}</td>
          <td>${url ? `<span class="transaction-link" data-url="${url}">${reason}</span>` : reason}</td>
          <td>${amount}</td>
          <td>${balance}</td>
          ${note ? `<td><button onclick="alert('${note.replace(/'/g, "\\'").replace(/\n/g, "\\n")}')">View Note</button></td>` : "<td>No note</td>"}
        </tr>
      ` + html
      )
    }, "")
  }

  // Function to fetch projects data
  const fetchProjectsData = async () => {
    try {
      const response = await fetch(config.urls.projectsList)
      const data = await response.json()

      if (!data || !Array.isArray(data.projects)) {
        throw new Error("Invalid projects data format")
      }

      // Transform projects array into an object for easier lookup
      const projectsObj = {}
      data.projects.forEach((project) => {
        projectsObj[project.project_id] = {
          url: project.project_url,
          title: project.project_title,
        }
      })

      config.projects = projectsObj
      console.log("Projects loaded:", config.projects)

      // After projects are loaded, fetch the main fund data
      await fetchMainFundData()
    } catch (error) {
      console.error("Error fetching projects data:", error)
      config.els.fundBody.innerHTML = `<tr><td colspan="5">Error loading projects data. Please try again later.</td></tr>`
    }
  }

  // Function to fetch data from Google Sheets
  const fetchMainFundData = async () => {
    try {
      const response = await fetch(config.urls.mainFund)
      const data = await response.json()

      // Update the config data
      config.data = data.data

      // Update the table
      updateTable(config.els.fundBody, config.data)

      // Add event listener for transaction links
      config.els.fundBody.addEventListener("click", handleTransactionClick)
    } catch (error) {
      console.error("Error fetching main fund data:", error)
      config.els.fundBody.innerHTML = `<tr><td colspan="5">Error loading data. Please try again later.</td></tr>`
    }
  }

  // Function to fetch project data
  const fetchProjectData = async (projectId) => {
    try {
      const projectInfo = config.projects[projectId]

      if (!projectInfo || !projectInfo.url) {
        throw new Error(`Project URL not found for: ${projectId}`)
      }

      const response = await fetch(projectInfo.url)
      const data = await response.json()

      // Add the title from our projects list if not provided by the API
      if (!data.title && projectInfo.title) {
        data.title = projectInfo.title
      }

      return data
    } catch (error) {
      console.error("Error fetching project data:", error)
      return {
        title: "Error Loading Data",
        transactions: [],
      }
    }
  }

  // Function to handle transaction link clicks
  const handleTransactionClick = async (e) => {
    if (e.target.classList.contains("transaction-link")) {
      const projectId = e.target.dataset.url

      // Show the transaction details container
      config.els.transDetails.style.display = "block"

      // Show loading state
      config.els.transTitle.textContent = "Loading..."
      config.els.transBody.innerHTML = `<tr><td colspan="5">Loading transaction details...</td></tr>`

      try {
        // Fetch project data
        const projectData = await fetchProjectData(projectId)

        console.log("Project data received:", projectData) // Debug log

        // Check if the data has the expected structure
        if (!projectData || !Array.isArray(projectData.transactions)) {
          throw new Error("Invalid data format received from API")
        }

        // Use title from the API or from our projects list
        config.els.transTitle.textContent = projectData.title || projectId

        if (projectData.transactions.length === 0) {
          config.els.transBody.innerHTML = `<tr><td colspan="5">No transactions found for this project</td></tr>`
        } else {
          updateTable(config.els.transBody, projectData.transactions)
        }
      } catch (error) {
        console.error("Error processing project data:", error)
        config.els.transTitle.textContent = "Error Loading Data"
        config.els.transBody.innerHTML = `<tr><td colspan="5">Failed to load transaction details: ${error.message}</td></tr>`
      }
    }
  }

  // Close button event listener
  config.els.closeBtn.addEventListener("click", () => {
    config.els.transDetails.style.display = "none"
  })

  // Initialize by fetching projects data first, then main fund data
  fetchProjectsData()
})
