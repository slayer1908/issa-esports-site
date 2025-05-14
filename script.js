const tournaments = [
  {
    name: "ISSA Showdown",
    date: "June 10, 2025",
    description: "A high-stakes tournament for FPS lovers. Open to all regions."
  },
  {
    name: "Summer Clash",
    date: "July 22, 2025",
    description: "MOBA tournament featuring top amateur teams worldwide."
  }
];

const list = document.getElementById("tournamentList");

tournaments.forEach(t => {
  const div = document.createElement("div");
  div.className = "tournament-card";
  div.innerHTML = `
    <h4>${t.name}</h4>
    <p><strong>Date:</strong> ${t.date}</p>
    <p>${t.description}</p>
    <button onclick="alert('Registration opens soon!')">Register</button>
  `;
  list.appendChild(div);
});

document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Here you could send data to a backend API or use Formspree
  const message = document.getElementById("formMessage");
  message.style.color = "#0f0";
  message.textContent = "Thanks for registering! We'll contact you soon.";
  
  this.reset();
});

const phrases = [
  "India’s #1 BGMI Tournament Hub",
  "Compete. Conquer. Champion.",
  "ISSA – Where BGMI Legends Rise"
];

let currentPhrase = 0;
let charIndex = 0;
const typingTarget = document.getElementById("typing");

function typeEffect() {
  if (charIndex <= phrases[currentPhrase].length) {
    typingTarget.textContent = phrases[currentPhrase].substring(0, charIndex++);
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(() => {
      charIndex = 0;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      typeEffect();
    }, 1500);
  }
}
typeEffect();

const leaderboard = [
  { team: "Team Xtreme", kills: 39, points: 120 },
  { team: "Shadow Squad", kills: 35, points: 115 },
  { team: "BGMI Legends", kills: 30, points: 110 },
  { team: "Killer Instinct", kills: 28, points: 105 },
  { team: "Rogue Nation", kills: 25, points: 100 }
];

const leaderboardTable = document.getElementById("leaderboardData");

leaderboard.forEach((entry, index) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>#${index + 1}</td>
    <td>${entry.team}</td>
    <td>${entry.kills}</td>
    <td>${entry.points}</td>
  `;
  leaderboardTable.appendChild(row);
});

function updateCountdown() {
  const targetDate = new Date("July 6, 2025 18:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("timer").textContent = "Tournament has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

const tournamentsData = [
  {
    name: "ISSA Championship Qualifiers",
    date: "2025-06-20T18:00:00",
    description: "Qualifiers for the grand BGMI showdown.",
    registrationOpen: true,
    registerLink: "https://formspree.io/f/yourFormID"
  },
  {
    name: "Summer BGMI Showdown",
    date: "2025-07-06T18:00:00",
    description: "Top squads compete in the summer heat.",
    registrationOpen: false,
    registerLink: "#"
  }
];

const renderTournaments = () => {
  const container = document.getElementById("dynamicTournaments");
  container.innerHTML = "";

  tournamentsData.forEach(t => {
    const startTime = new Date(t.date).getTime();
    const now = new Date().getTime();
    const distance = startTime - now;

    let countdown = "Event Started";
    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      countdown = `${days}d ${hours}h`;
    }

    const card = document.createElement("div");
    card.className = "tournament-card";
    card.innerHTML = `
      <h4>${t.name}</h4>
      <p><strong>Date:</strong> ${new Date(t.date).toLocaleString()}</p>
      <p>${t.description}</p>
      <p><strong>Countdown:</strong> ${countdown}</p>
      <a href="${t.registerLink}" target="_blank">
        <button ${!t.registrationOpen ? "disabled" : ""}>
          ${t.registrationOpen ? "Register Now" : "Registration Closed"}
        </button>
      </a>
    `;
    container.appendChild(card);
  });
};

renderTournaments();
setInterval(renderTournaments, 60000); // Update every minute
