document.addEventListener('DOMContentLoaded', () => {
    const $ = document.querySelector.bind(document);

    const config = {
        els: {
            fundBody: $('#fundTableBody'),
            transDetails: $('#transaction-details'),
            transTitle: $('#transaction-title'),
            transBody: $('#transactionTableBody'),
            closeBtn: $('#close-details')
        },
        data: [
            { date: '2021-12-31', time: "16:30", reason: 'As Much Money as there was in 2021', url: '2021-fund', amount: 1000 },
            { date: '2022-01-04', time: "13:15", reason: 'Rebuild room Project Budget', url: 'rebuild-room', amount: -200 },
            { date: '2022-01-18', time: "18:00", reason: 'Wall Setup Project Budget', url: 'wall-setup', amount: -500 },
            { date: '2022-01-23', time: "10:30", reason: 'Return From Rebuild Room Project', url: 'rebuild-room', amount: 50 },
            { date: '2022-01-29', time: "09:30", reason: 'Return From Wall Setup Project', url: 'wall-setup', amount: 100 },
        ],
        transDetails: {
            'wall-setup': {
                title: "Wall Setup Project",
                transactions: [
                    { date: "2022-01-18", time: "16:30", reason: "Initial Budget", amount: 500, note: "Initial budget allocation for wall setup project" },
                    { date: "2022-01-20", time: "13:15", reason: "Bought Brick", amount: -250, note: "Purchased 1000 bricks from ABC Suppliers. Invoice #12345" },
                    { date: "2022-01-22", time: "18:00", reason: "Got Donation From Government", amount: 50, note: "Additional funding received from local government. Grant #G-789" },
                    { date: "2022-01-28", time: "18:30", reason: "Laborer", amount: -200, note: "Paid wages to 5 laborers for 4 days of work. Voucher #L-001" },
                    { date: "2022-01-29", time: "09:30", reason: "Return To Fund", amount: -100, note: "Returned unused funds to main account. Transfer #T-456" }
                ]
            },
            'rebuild-room': {
                title: "Rebuild Room",
                transactions: [
                    { date: "2022-01-04", time: "13:15", reason: "Initial Budget", amount: 200, note: "Initial budget allocation for rebuild room project" },
                    { date: "2022-01-04", time: "13:15", reason: "Got Donation", amount: 200, note: "XYZ" },
                    { date: "2022-01-04", time: "13:15", reason: "Got Donation", amount: 200, note: "XYZ" },
                    { date: "2022-01-04", time: "13:15", reason: "Laborer", amount: -600, note: "XYZ" },
                    { date: "2022-01-04", time: "13:15", reason: "Total Budget", amount: 200, note: "XYZ" },
                    { date: "2022-01-10", time: "09:30", reason: "Bought Materials", amount: -150, note: "Purchased construction materials from XYZ Store. Invoice #67890" },
                    { date: "2022-01-15", time: "14:00", reason: "Got Donation From Local Business", amount: 100, note: "Donation received from Local Business Co. Receipt #D-123" },
                    { date: "2022-01-20", time: "11:45", reason: "Contractor Payment", amount: -100, note: "Paid to ABC Contractors for room rebuild. Invoice #CON-001" },
                    { date: "2022-01-23", time: "10:30", reason: "Return To Fund", amount: -50, note: "Returned unused funds to main account. Transfer #T-789" }
                ]
            }
        }
    };

    const updateTable = (body, data) => {
        let balance = 0;
        body.innerHTML = data.reduce((html, { date, time, reason, url, amount, note }) => {
            balance += amount;
            return `
          <tr>
            <td>${date}<br>${time}</td>
            <td>${url ? `<span class="transaction-link" data-url="${url}">${reason}</span>` : reason}</td>
            <td>${amount}</td>
            <td>${balance}</td>
            ${note ? `<td><button onclick="alert('${note}')">View Note</button></td>` : ''}
          </tr>
        ` + html;
        }, '');
    };

    updateTable(config.els.fundBody, config.data);

    config.els.fundBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('transaction-link')) {
            const details = config.transDetails[e.target.dataset.url] || { title: "Transaction Details Not Found", transactions: [] };
            config.els.transTitle.textContent = details.title;
            updateTable(config.els.transBody, details.transactions);
            config.els.transDetails.style.display = 'block';
        }
    });

    config.els.closeBtn.addEventListener('click', () => config.els.transDetails.style.display = 'none');
});

// Here at data can you change cost keyword to amount Keyword same as transDetails.transactions, at functionalities also you have to update it for no compromize any data to show and 
// You can use only Vanila Javascript, Dont Use Any Library or framework