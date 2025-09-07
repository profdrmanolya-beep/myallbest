const dummyData = [
  {name: "Produkt A", price: "29,99€", link: "#"},
  {name: "Produkt B", price: "49,99€", link: "#"},
  {name: "Produkt C", price: "19,99€", link: "#"},
  {name: "Produkt D", price: "39,99€", link: "#"}
];

document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const filtered = dummyData.filter(item => item.name.toLowerCase().includes(query));

  if (filtered.length === 0) {
    resultsDiv.innerHTML = `<p>Keine Angebote gefunden.</p>`;
  } else {
    filtered.forEach(item => {
      resultsDiv.innerHTML += `
        <div class="result-item">
          <a href="${item.link}" target="_blank">${item.name}</a> – ${item.price}
        </div>
      `;
    });
  }
});
