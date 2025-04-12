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
            { date: '2025-01-01', time: "00:01", reason: 'As Much Money as there was in 2024', url: '2024-fund', amount: 0, note: "Not Found Any Main Fund Account."},
            { date: '2025-02-01', time: "00:00", reason: 'Floorboards replacement', url: 'floorboards-replacement-2025-February', amount: 0, note: `Starting floorboards replacement project without fund.`},
            { date: '2025-02-28', time: "16:15", reason: 'Return of Floorboards replacement', url: 'floorboards-replacement-2025-February', amount: 100, note: "Returned unused funds to main account from Floorboards replacement(2025-02-01 00:00)"},
            { date: '2025-04-12', time: "15:30", reason: 'নববর্ষের আয়োজন, url: 'নববর্ষ-আয়োজন-২০২৫', amount: 0, note: `Starting নববর্ষ আয়োজন without fund.`},
        ],
        transDetails: {
            'floorboards-replacement-2025-February': {
                title: "Floorboards replacement 2025 February",
                transactions: [
                    { date: '2025-02-01', time: "00:00", reason: "Initial Budget", amount: 0, note: "Initial budget allocation for Floorboards replacement" },
                    { date: "2025-02-02", time: "00:00", reason: "Donation From Lung Ma Ching", amount: 5000, note: "Not Found!" },
                    { date: "2025-02-02", time: "00:00", reason: "Donation From Hla Sen Way", amount: 1000, note: "Not Found!" },
                    { date: "2025-02-03", time: "00:00", reason: "Bought 7 pieces of round timber", amount: -2100, note: "Bought 7 pieces of round timber. Each piece of round timber price BDT 300 " },
                    { date: "2025-02-03", time: "00:00", reason: "Truck fare for bringing round timbers", amount: -300, note: "The transportation cost for bringing seven pieces of round timber from the shop to temple gate is BDT 300" },
                    { date: "2025-02-03", time: "00:00", reason: "Laborer's wage for carrying round timbers", amount: -100, note: "The laborer's wage for carrying seven pieces of round timber from the shop to temple gate is BDT 100" },
                    { date: "2025-02-10", time: "00:00", reason: "Donation From Shang Ma Hri", amount: 3000, note: "Not Found!" },
                    { date: "2025-02-10", time: "16:43", reason: "Donation From Ma Cho Meyi", amount: 100, note: "Donation From Ma Cho Meyi Family." },
                    { date: "2025-02-15", time: "00:00", reason: "Convert the temple tree into planks", amount: -3000, note: "A contract deal has been made for BDT 3000 to convert the temple tree into planks." },
                    { date: "2025-02-15", time: "00:00", reason: "Planks processor Laborer tips", amount: -200, note: "Tips given for tree into planks converter" },
                    { date: "2025-02-23", time: "00:00", reason: "Bought 1.5 kilograms of nails", amount: -210, note: "Not Found!" },
                    { date: "2025-02-23", time: "00:00", reason: "Apion charged, communication and travel expenses of the work", amount: -90, note: "Apion charged BDT 90 for communication and travel expenses with the workersa for their work." },
                    { date: "2025-02-23", time: "00:00", reason: "Replaced the damaged planks", amount: -3000, note: "A contract deal has been made with the carpenter for BDT 3000 to replace the damaged planks on the floor with new planks." },
                    { date: '2025-02-28', time: "16:15", reason: "Return To Main Fund", amount: -100, note: "Returned unused funds to main account." }
                ]
            }
	    'নববর্ষ-আয়োজন-২০২৫': {
				title: "২০২৫ সালে নববর্ষের আয়োজন",
                transactions: [
                    { date: '2025-04-12', time: "15:30", reason: "Initial Budget", amount: 0, note: "Initial budget allocation for ২০২৫ নববর্ষ আয়োজন" },
                    { date: "2025-04-12", time: "15:51", reason: "Donation From ক্যছিং", amount: 500, note: "Cash collected by Shwe Lung & Aung Kyaw Ching" },
                    { date: "2025-04-12", time: "15:54", reason: "Donation From ছেংলুং", amount: 500, note: "Cash collected by Shwe Lung & Aung Kyaw Ching" },
                    { date: "2025-04-12", time: "15:57", reason: "Donation From বুংমে", amount: 500, note: "Cash collected by Shwe Lung & Aung Kyaw Ching" },
                    { date: "2025-04-12", time: "16:02", reason: "Donation From উখিংনুং", amount: 300, note: "Cash collected by Shwe Lung & Aung Kyaw Ching" },
                    { date: "2025-04-12", time: "16:07", reason: "Donation From চেংম্যা", amount: 300, note: "Cash collected by Shwe Lung & Aung Kyaw Ching" },
                    { date: "2025-04-12", time: "16:12", reason: "Donation From চিংনুং(গলাফু)", amount: 500, note: "Cash collected by Shwe Lung & Aung Kyaw Ching" },
                    { date: "2025-04-12", time: "16:17", reason: "Donation From উমাসাং", amount: 500, note: "Cash collected by Shwe Lung, Aung Kyaw Ching & বাবুয়া" },
                    { date: "2025-04-12", time: "16:26", reason: "Donation From চেংছিংমে", amount: 200, note: "Cash collected by Shwe Lung, Aung Kyaw Ching & বাবুয়া" },
                    { date: "2025-04-12", time: "16:32", reason: "Donation From এখিং", amount: 200, note: "Cash collected by Shwe Lung, Aung Kyaw Ching & বাবুয়া" },
                    { date: "2025-04-12", time: "16:44", reason: "Donation From মাচম্যাই(মেসাং)", amount: 500, note: "Cash collected by Shwe Lung, Aung Kyaw Ching & বাবুয়া" },
                    { date: "2025-04-12", time: "17:29", reason: "Donation From ওয়াংচিং", amount: 500, note: "Cash collected by Shwe Lung, Aung Kyaw Ching & বাবুয়া" },
                    
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
