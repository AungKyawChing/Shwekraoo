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
    data: [
      {
        date: "2025-01-01",
        time: "00:01",
        reason: "As Much Money as there was in 2024",
        url: "2024-fund",
        amount: 0,
        note: "Not Found Any Main Fund Account.",
      },
      {
        date: "2025-02-01",
        time: "00:00",
        reason: "Floorboards replacement",
        url: "floorboards-replacement-2025-February",
        amount: 0,
        note: `Starting floorboards replacement project without fund.`,
      },
      {
        date: "2025-02-28",
        time: "16:15",
        reason: "Return of Floorboards replacement",
        url: "floorboards-replacement-2025-February",
        amount: 100,
        note: "Returned unused funds to main account from Floorboards replacement(2025-02-01 00:00)",
      },
      {
        date: "2025-04-12",
        time: "15:30",
        reason: "2025 নববর্ষ আয়োজন",
        url: "sangrai-2025",
        amount: 0,
        note: `মূল Fund থেকে 0 টাকা প্রাথমিক বাজেট নিয়ে অংক্যছিং ও সুইলাং 2025 সালের নববর্ষের আয়োজন শুরু করে।`,
      },
    ],
    transDetails: {
      "floorboards-replacement-2025-February": {
        title: "Floorboards replacement 2025 February",
        transactions: [
          {
            date: "2025-02-01",
            time: "00:00",
            reason: "Initial Budget",
            amount: 0,
            note: "Initial budget allocation for Floorboards replacement",
          },
          {
            date: "2025-02-02",
            time: "00:00",
            reason: "Donation From Lung Ma Ching",
            amount: 5000,
            note: "Not Found!",
          },
          { date: "2025-02-02", time: "00:00", reason: "Donation From Hla Sen Way", amount: 1000, note: "Not Found!" },
          {
            date: "2025-02-03",
            time: "00:00",
            reason: "Bought 7 pieces of round timber",
            amount: -2100,
            note: "Bought 7 pieces of round timber. Each piece of round timber price BDT 300 ",
          },
          {
            date: "2025-02-03",
            time: "00:00",
            reason: "Truck fare for bringing round timbers",
            amount: -300,
            note: "The transportation cost for bringing seven pieces of round timber from the shop to temple gate is BDT 300",
          },
          {
            date: "2025-02-03",
            time: "00:00",
            reason: "Laborer's wage for carrying round timbers",
            amount: -100,
            note: "The laborer's wage for carrying seven pieces of round timber from the shop to temple gate is BDT 100",
          },
          { date: "2025-02-10", time: "00:00", reason: "Donation From Shang Ma Hri", amount: 3000, note: "Not Found!" },
          {
            date: "2025-02-10",
            time: "16:43",
            reason: "Donation From Ma Cho Meyi",
            amount: 100,
            note: "Donation From Ma Cho Meyi Family.",
          },
          {
            date: "2025-02-15",
            time: "00:00",
            reason: "Convert the temple tree into planks",
            amount: -3000,
            note: "A contract deal has been made for BDT 3000 to convert the temple tree into planks.",
          },
          {
            date: "2025-02-15",
            time: "00:00",
            reason: "Planks processor Laborer tips",
            amount: -200,
            note: "Tips given for tree into planks converter",
          },
          {
            date: "2025-02-23",
            time: "00:00",
            reason: "Bought 1.5 kilograms of nails",
            amount: -210,
            note: "Not Found!",
          },
          {
            date: "2025-02-23",
            time: "00:00",
            reason: "Apion charged, communication and travel expenses of the work",
            amount: -90,
            note: "Apion charged BDT 90 for communication and travel expenses with the workersa for their work.",
          },
          {
            date: "2025-02-23",
            time: "00:00",
            reason: "Replaced the damaged planks",
            amount: -3000,
            note: "A contract deal has been made with the carpenter for BDT 3000 to replace the damaged planks on the floor with new planks.",
          },
          {
            date: "2025-02-28",
            time: "16:15",
            reason: "Return To Main Fund",
            amount: -100,
            note: "Returned unused funds to main account.",
          },
        ],
      },
      "sangrai-2025": {
        title: "2025 সালের নববর্ষের আয়োজন",
        transactions: [
          {
            date: "2025-04-12",
            time: "15:30",
            reason: "Initial Budget",
            amount: 0,
            note: "Initial budget allocation for 2025 সালের নববর্ষের আয়োজন",
          },
          {
            date: "2025-04-12",
            time: "15:51",
            reason: "Donation From ক্যছিং",
            amount: 500,
            note: "Cash collected by Shwe Lung & Aung Kyaw Ching",
          },
          {
            date: "2025-04-12",
            time: "15:54",
            reason: "Donation From ছেংলুংশে",
            amount: 500,
            note: "Cash collected by Shwe Lung & Aung Kyaw Ching",
          },
          {
            date: "2025-04-12",
            time: "15:57",
            reason: "Donation From বুংমে",
            amount: 500,
            note: "Cash collected by Shwe Lung & Aung Kyaw Ching",
          },
          {
            date: "2025-04-12",
            time: "16:02",
            reason: "Donation From উখিংনুং",
            amount: 300,
            note: "Cash collected by Shwe Lung & Aung Kyaw Ching",
          },
          {
            date: "2025-04-12",
            time: "16:07",
            reason: "Donation From চেংম্যা",
            amount: 300,
            note: "Cash collected by Shwe Lung & Aung Kyaw Ching",
          },
          {
            date: "2025-04-12",
            time: "16:12",
            reason: "Donation From চিংনু(গলাফু)",
            amount: 500,
            note: "Cash collected by Shwe Lung & Aung Kyaw Ching",
          },
          {
            date: "2025-04-12",
            time: "16:17",
            reason: "Donation From উমাসাং",
            amount: 500,
            note: "Cash collected by Shwe Lung, Aung Kyaw Ching & Babuya",
          },
          {
            date: "2025-04-12",
            time: "16:26",
            reason: "Donation From চেংছিংমে",
            amount: 200,
            note: "Cash collected by Shwe Lung, Aung Kyaw Ching & Babuya",
          },
          {
            date: "2025-04-12",
            time: "16:32",
            reason: "Donation From এখিং",
            amount: 200,
            note: "Cash collected by Shwe Lung, Aung Kyaw Ching & Babuya",
          },
          {
            date: "2025-04-12",
            time: "16:44",
            reason: "Donation From মাচম্যাইং(মেসাং)",
            amount: 300,
            note: "Cash collected by Shwe Lung, Aung Kyaw Ching & Babuya",
          },
          {
            date: "2025-04-12",
            time: "17:29",
            reason: "Donation From ওয়াংচিং",
            amount: 500,
            note: "Cash collected by Shwe Lung, Aung Kyaw Ching & Babuya",
          },
          {
            date: "2025-04-13",
            time: "08:54",
            reason: "Donation From অংকেছিং",
            amount: 500,
            note: "Cash collected by Shwe Lung",
          },
        				{
            date: "2025-04-13",
            time: "08:54",
            reason: "Donation From মাংছেনহ্লা",
            amount: 500,
            note: "Cash collected by Shwe Lung",
          },
        				{
            date: "2025-04-13",
            time: "11:57",
            reason: "Donation From অংছিংমং",
            amount: 100,
            note: "Cash collected by Aung Kyaw Ching",
          },
        				{
            date: "2025-04-13",
            time: "12:10",
            reason: "Donation From মংক্যজ",
            amount: 100,
            note: "Cash collected by Shwe Lung",
          },
        					{
            date: "2025-04-13",
            time: "03:34",
            reason: "Donation From লুংমাচিং",
            amount: 500,
            note: "Cash collected by Shwe Lung & Aung Kyaw Ching",
          },
        				{
            date: "2025-04-13",
            time: "03:48",
            reason: "Donation From ক্রাছংচিং",
            amount: 500,
            note: "Cash collected by Shwe Lung & Aung Kyaw Ching",
          },
        				{
            date: "2025-04-13",
            time: "16:00",
            reason: "বুড়ির দোকান থেকে রাস্তার মাথা",
            amount: -20,
            note: "সুইলাং ও অংক্যছিং, ২ জন বুড়ির দোকান থেকে রাস্তার মাথা যাওয়ার টমটম ভাড়া",
          },
        				{
            date: "2025-04-13",
            time: "16:30",
            reason: "রাস্তার মাথা থেকে চকরিয়া",
            amount: -40,
            note: "সুইলাং ও অংক্যছিং, ২ জন রাস্তার মাথা থেকে চকরিয়া যাওয়ার গাড়ি ভাড়া",
          },
        				{
            date: "2025-04-13",
            time: "18:30",
            reason: "৬টা ডাব",
            amount: -650,
            note: "সুইলাং ও অংক্যছিং, চকরিয়া থেকে ৬টা ডাব কেনার বিল। ক্রয়ের কোন রশিদ নেই। তাদের বক্তব্য অনুসারে এই সময়ে বাজারে কোথাও ডাব পাওয়া যাচ্ছিলো নাহ, বাজারে ডাব কম থাকার কারণে ডাবের বাজার মূল্য বেড়ে গেছিলো এবং ডাবের বিক্রেতা প্রতিটি ডাব ১২০ টাকা রেইটে বিক্রি করতে চাইলেও তারা Negotiate করে প্রতিটা ডাব ১১০ টাকা রেইটে কিনে এবং ১১০ টাকা রেইটে যেহেতু ৬ টা ডাবের মূল্য ৬৬০ টাকা আসে, তখন তারা বিক্রেতা থেকে ১০ টাকা Discount করতে বলে Finally ৬টা ডাব 650 টাকায় কিনে। এবং কেনার পরে দেখা যায় বিক্রেতার কোন রশিদ ব্যবস্থা ছিল নাহ। তাই রশিদ ছাড়াই এই ৬ টা ডাব কেনা হয়েছে।",
          },
        				{
            date: "2025-04-13",
            time: "19:00",
            reason: "চকরিয়া থেকে হারবাং স্টেশন",
            amount: -60,
            note: "সুইলাং ও অংক্যছিং, ২ জন ৬টা ডাব নিয়ে চকরিয়া থেকে হারবাং স্টেশনে আসার গাড়ি ভাড়া",
          },
        				{
            date: "2025-04-13",
            time: "19:10",
            reason: "হারবাং স্টেশন থেকে হারবাং বাজার",
            amount: -20,
            note: "সুইলাং ও অংক্যছিং, ২ জন ৬টা ডাব নিয়ে হারবাং স্টেশন থেকে হারবাং বাজারে আসার রিকশা ভাড়া",
          },
        				{
            date: "2025-04-13",
            time: "19:25",
            reason: "৬টা মাটির কলসি",
            amount: -480,
            note: "সুইলাং ও অংক্যছিং, বাজারে কুমার পাড়া থেকে মাটির কলসি ৬টা কেনার বিল, তাদের বক্তব্য অনুযায়ী বিক্রেটা প্রতিটা কলসি ১০০ টাকা করে দাবি করেছিল, পরে তারা Negotiate করে প্রতিটা কলসি ৮০ টাকা রেইটে ৬টা মাটির কলসি কিনে ৪৮০ টাকায়।",
          },
        				{
            date: "2025-04-13",
            time: "19:45",
            reason: "৬টা রঙিন কাগজ ও ১টা বড় সাদা কাগজ ",
            amount: -40,
            note: "সুইলাং ও অংক্যছিং বাজারে নাহার লাইব্রেরী থেকে ৬টা রঙিন কাগজ প্রতিটা ৫ টাকা রেইটে ও ১টা বড় সাদা কাগজ ১৫ টাকা রেইটে কিনে মোট ৪৫ টাকার এখানে 45 টাকা থেকে 5 টাকা ডিস্কাউন্ট খুঁজে 40 টাকা কাগজ গুলো কিনে আনা হয়।",
          },
        				{
            date: "2025-04-13",
            time: "20:15",
            reason: "বাজার থেকে বাড়ি আসার রিকশা ভাড়া",
            amount: -50,
            note: "সুইলাং ও অংক্যছিং, ২ জন ৬টা ডাব, ৬টা মাটির কলসি, ও রঙিন কাগজ নিয়ে বাজার থেকে বাড়ি আসার রিকশা ভাড়া",
          },
        					{
            date: "2025-04-14",
            time: "08:47",
            reason: "Donation From লুংচিং",
            amount: 300,
            note: "Cash collected by Shwe Lung",
          },
        				{
            date: "2025-04-14",
            time: "08:47",
            reason: "Donation From মেছিং",
            amount: 500,
            note: "Cash collected by Shwe Lung",
          },
        					{
            date: "2025-04-14",
            time: "11:20",
            reason: "ছোট আঠা(Gum) ১ বোতল ",
            amount: -20,
            note: "অংক্যছিং, হারবাং মগবাজারের ফোরকান দোকান থেকে ১টা ছোট আঠা(Gum) বোতল কিনে।",
          },
        				{
            date: "2025-04-14",
            time: "11:25",
            reason: "১টা সাদা সুতা",
            amount: -5,
            note: "অংক্যছিং, হারবাং মগবাজারের খলিফা আউ দোকান থেকে ১টা সাদা সুতা কিনে আনে ৫ টাকায়।",
          },
        				{
            date: "2025-04-14",
            time: "11:35",
            reason: "১০ টা A4 সাইজের কাগজ ক্রহেলেয়া বানানোর জন্য",
            amount: -20,
            note: "বাজার থেকে ক্রহেলেয়া বানানোর জন্য যেই বড় কাগজ এনেছিলাম সেটা ভূল হয়েছে, ক্রহেলেয়া বানানোর জন্য A4 সাইজের কাগজ Perfect তাই আবার ১০ টা A4 সাইজের কাগজ কিনে আনে অংক্যছিং। ভবিষ্যতে যেন এরকম ভূল নাহ হয় সেটা বিশেষভাবে খেয়াল রাখতে হবে।",
          },
        				{
            date: "2025-04-14",
            time: "12:00",
            reason: "Donation From উছিংমং (খ্যেলুশে)",
            amount: 500,
            note: "Collected by Shwe Lung",
          },
        				{
            date: "2025-04-14",
            time: "12:00",
            reason: "Donation From উহ্লাগ্য",
            amount: 500,
            note: "Collected by Shwe Lung",
          },
        				{
            date: "2025-04-14",
            time: "12:00",
            reason: "Donation From মংক্যজ",
            amount: 100,
            note: "Cash collected by Aung Kyaw Ching, এনারা প্রথমে ১০০ টাকা সুইলাং এর হাতে দেয় এবং এর পরের দিন ১০০ টাকা অংক্যছিং কে দেয়, সুতরাং উনারা মোট ২০০ টাকা ক্যাশ দিয়েছেন।",
          },
        				{
            date: "2025-04-14",
            time: "12:00",
            reason: "Donation From মংক্যছেং",
            amount: 500,
            note: "Collected by Shwe Lung",
          },
        				{
            date: "2025-04-14",
            time: "12:00",
            reason: "Donation From উহ্লামং",
            amount: 1000,
            note: "Collected by Shwe Lung",
          },
        				{
            date: "2025-04-14",
            time: "12:00",
            reason: "Donation From মাংখ্যাই (বান্দরবান)",
            amount: 500,
            note: "Collected by Shwe Lung",
          },
        					{
            date: "2025-04-14",
            time: "12:40",
            reason: "বাঁশ ১টা",
            amount: -50,
            note: "সুইলাং, কোউকা বানানো জন্য অংকেছিং মাস্টার থেকে ১টা বাঁশ কিনে।",
          },
        				{
            date: "2025-04-14",
            time: "14:00",
            reason: "ঢোল বাজকদের চা-নাস্তা খরচ",
            amount: -120,
            note: "সুইলাং, মাংছেনহ্লা সাথে পরামর্শ করে ঢোল বাজকদের চা-নাস্তা খরচ হিসেবে ১২০ টাকা দেয়।",
          },
        				{
            date: "2025-04-14",
            time: "14:46",
            reason: "Donation From ডা: উছেংনু",
            amount: 1000,
            note: "Collected by Aung Kyaw Ching, এখানে অংছিংমং এর সাহায্যে ডাঃ উছেংনু এর সাথে Contact করা হয়, এবং উনি অংছিংমং এর কাছে বিকাশে টাকা পাঠালে সেটা অংছিংমং থেকে অংক্যছিং সংগ্রহ করে।",
          },
        				{
            date: "2025-04-14",
            time: "15:00",
            reason: "ঢোল বাজকদের ভাড়া",
            amount: -5200,
            note: "সুইলাং, ঢোল বাজকদের ভাড়া দেওয়ার দায়িত্ব মাংছেনহ্লাকে দেয় এবং মাংছেনহ্লাকে 5200 টাকা ক্যাশ দেয় ঢোল বাজকদের দেওয়ার জন্য।",
          },
        				{
            date: "2025-04-14",
            time: "19:00",
            reason: "মাংছেনহ্লার অন্যান্য খরচ ",
            amount: -100,
            note: "সুইলাং থেকে ঢোল এর জন্য আরো ৫০ টাকা এবং অন্য কি যেন কাজের জন্য ৫০ টাকা মোট ১০০ টাকা মাংছেংহ্লাকে দেওয়া হয়েছে।",
          },
        ],
      },
    },
  }

  const updateTable = (body, data) => {
    let balance = 0
    body.innerHTML = data.reduce((html, { date, time, reason, url, amount, note }) => {
      balance += amount
      return (
        `
          <tr>
            <td>${date}<br>${time}</td>
            <td>${url ? `<span class="transaction-link" data-url="${url}">${reason}</span>` : reason}</td>
            <td>${amount}</td>
            <td>${balance}</td>
            ${note ? `<td><button onclick="alert('${note}')">View Note</button></td>` : ""}
          </tr>
        ` + html
      )
    }, "")
  }

  updateTable(config.els.fundBody, config.data)

  config.els.fundBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("transaction-link")) {
      const details = config.transDetails[e.target.dataset.url] || {
        title: "Transaction Details Not Found",
        transactions: [],
      }
      config.els.transTitle.textContent = details.title
      updateTable(config.els.transBody, details.transactions)
      config.els.transDetails.style.display = "block"
    }
  })

  config.els.closeBtn.addEventListener("click", () => (config.els.transDetails.style.display = "none"))
})
