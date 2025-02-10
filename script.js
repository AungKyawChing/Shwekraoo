// Define the pages and social media links
const pages = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Live CCTV", id: "live-cctv" },
    { name: "Fund Monitor", id: "fund-monitor" },
    { name: "Donation", id: "donation" },
    { name: "History", id: "history" },
    { name: "Gallery", id: "gallery" },
    { name: "Events", id: "events" },
    { name: "Blog", id: "blog" },
    { name: "Forum", id: "forum" },
    { name: "Community Members", id: "community-members" },
    { name: "Contact", id: "contact" },
]

const socialMedia = [
    { name: "Facebook", url: "https://facebook.com/ShwekraooBuddhistTemple" },
    { name: "Twitter", url: "https://twitter.com/" },
    { name: "Instagram", url: "https://instagram.com/" },
]

// Helper functions
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// Function to create navigation and connect bars
const createBars = () => {
    const navbar = $("#navbar")
    const connectBar = $("#connect-bar")
    const currentPage = location.hash.slice(1) || "home"

    navbar.innerHTML = pages
        .map((page) => (page.id !== currentPage ? `<a href="#${page.id}">${page.name}</a>` : ""))
        .join("")

    connectBar.innerHTML = socialMedia
        .map((platform) => `<a href="${platform.url}" target="_blank">${platform.name}</a>`)
        .join("")
}

// Function to show active page
const showActivePage = () => {
    const pageId = location.hash.slice(1) || "home"
    $$(".page").forEach((page) => page.classList.toggle("active", page.id === pageId))
    createBars()
}

// Function to toggle bars
const toggleBar = (barId, toggleId) => {
    const bar = $(barId)
    const toggle = $(toggleId)
    const isActive = bar.classList.toggle("active")

    // Toggle icon
    toggle.querySelector(".fa-bars, .fa-share-alt").style.display = isActive ? "none" : "inline-block"
    toggle.querySelector(".fa-times").style.display = isActive ? "inline-block" : "none"
}

// Function to toggle theme
const toggleTheme = () => {
    const themeSwitch = $("#theme-switch")
    const isDarkMode = document.body.classList.toggle("light-mode")
    themeSwitch.innerHTML = `<i class="fas fa-${isDarkMode ? "moon" : "sun"}"></i>`
    localStorage.setItem("theme", isDarkMode ? "light" : "dark")
}

// Initialize the page
const init = () => {
    try {
        createBars()
        showActivePage()

        // Event listeners
        window.addEventListener("hashchange", showActivePage)
        $("#mobile-nav-toggle").addEventListener("click", () => toggleBar("#navbar", "#mobile-nav-toggle"))
        $("#mobile-connect-toggle").addEventListener("click", () => toggleBar("#connect-bar", "#mobile-connect-toggle"))
        $("#theme-switch").addEventListener("click", toggleTheme)

        // Close menus when clicking outside
        document.addEventListener("click", (event) => {
            if (!event.target.closest("#navbar, #mobile-nav-toggle")) {
                $("#navbar").classList.remove("active")
                const navToggle = $("#mobile-nav-toggle")
                navToggle.querySelector(".fa-bars").style.display = "inline-block"
                navToggle.querySelector(".fa-times").style.display = "none"
            }
            if (!event.target.closest("#connect-bar, #mobile-connect-toggle")) {
                $("#connect-bar").classList.remove("active")
                const connectToggle = $("#mobile-connect-toggle")
                connectToggle.querySelector(".fa-share-alt").style.display = "inline-block"
                connectToggle.querySelector(".fa-times").style.display = "none"
            }
        })

        // Set theme
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "light" || (!savedTheme && window.matchMedia("(prefers-color-scheme: light)").matches)) {
            document.body.classList.add("light-mode")
            $("#theme-switch").innerHTML = '<i class="fas fa-moon"></i>'
        }
    } catch (error) {
        console.error("Initialization error:", error)
    }
}

// Run initialization when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init)