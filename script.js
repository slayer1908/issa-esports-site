const tournaments = [
  { name: "ISSA Showdown", date: "June 10, 2025" },
  { name: "Summer Clash", date: "July 22, 2025" }
];

const list = document.getElementById("tournamentList");

tournaments.forEach(t => {
  const li = document.createElement("li");
  li.textContent = `${t.name} - ${t.date}`;
  list.appendChild(li);
});
