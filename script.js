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
