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
