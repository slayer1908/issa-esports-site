// ====== Fade-in page transition ======
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// ====== Typing Animation ======
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

// ====== Countdown Timer to Next Tournament ======
function updateCountdown() {
  const targetDate = new Date("July 6, 2025 18:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const countdownBox = document.getElementById("timer");

  if (distance <= 0) {
    countdownBox.textContent = "Tournament has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownBox.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ====== Dynamic Tournament Cards ======
const tournamentsData = [
  {
    name: "ISSA Championship Qualifiers",
    date: "2025-06-20T18:00:00",
    description: "Qualifiers for the grand BGMI showdown.",
    registrationOpen: true,
    registerLink: "https://formspree.io/f/xvgawkdr"
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

    const countdown = distance > 0
      ? `${Math.floor(distance / (1000 * 60 * 60 * 24))}d ${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h`
      : "Event Started";

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

// ====== Leaderboard ======
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

// ====== Particles Background ======
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#0ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 4, random: true },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.7 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const matchSchedule = [
  { date: "2025-06-25T18:00:00", match: "Team Alpha vs Team Beta", status: "Scheduled" },
  { date: "2025-06-26T20:00:00", match: "Team Gamma vs Team Delta", status: "Scheduled" }
];

const scheduleTable = document.getElementById("scheduleData");

matchSchedule.forEach((match) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${new Date(match.date).toLocaleString()}</td>
    <td>${match.match}</td>
    <td>${match.status}</td>
  `;
  scheduleTable.appendChild(row);
});

const matchHistory = [
  { date: "2025-06-20T18:00:00", match: "Team Alpha vs Team Beta", winner: "Team Alpha" },
  { date: "2025-06-21T20:00:00", match: "Team Gamma vs Team Delta", winner: "Team Delta" }
];

const historyTable = document.getElementById("historyData");

matchHistory.forEach((match) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${new Date(match.date).toLocaleDateString()}</td>
    <td>${match.match}</td>
    <td>${match.winner}</td>
  `;
  historyTable.appendChild(row);
});
