document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // PAGE DE RÉSULTATS DE RECHERCHE
    // =========================

    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");

    const resultsContainer = document.getElementById("search-results");

    if (!resultsContainer) return;

    // Aucune recherche
    if (!query) {
        resultsContainer.innerHTML = "<p>Aucune recherche fournie.</p>";
        return;
    }

    const q = query.toLowerCase();

    // =========================
    // FILTRAGE + PRIORISATION
    // =========================

    const results = SEARCH_INDEX
        .map(item => {
            const titleMatch = item.title.toLowerCase().includes(q);
            const contentMatch = item.content.toLowerCase().includes(q);

            if (!titleMatch && !contentMatch) return null;

            return {
                ...item,
                score: titleMatch ? 2 : 1
            };
        })
        .filter(Boolean)
        .sort((a, b) => b.score - a.score);

    // =========================
    // AFFICHAGE
    // =========================

    if (results.length === 0) {
    const noResultMessage = document.createElement("p");

    noResultMessage.textContent =
        `Aucun résultat trouvé pour "${query}".`;

    resultsContainer.innerHTML = "";
    resultsContainer.appendChild(noResultMessage);

    return;
}

    // Nettoyage
    resultsContainer.innerHTML = "";

    // ===== Compteur =====
    const countInfo = document.createElement("p");
    countInfo.className = "search-count";
    countInfo.innerHTML = `
    <strong>${results.length}</strong>
    résultat${results.length > 1 ? "s" : ""}
    trouvé${results.length > 1 ? "s" : ""}
    pour "<span class="search-query"></span>"
`;

countInfo.querySelector(".search-query").textContent = query;
    resultsContainer.appendChild(countInfo);

    // ===== Liste =====
    const list = document.createElement("ul");
    list.className = "search-results-list";

    results.forEach(item => {
        const li = document.createElement("li");
        li.className = "search-result-item";

        li.innerHTML = `
            <a href="${item.url}">
                <strong>${item.title}</strong>
            </a>
        <div class="search-result-types">
  ${
    Array.isArray(item.type)
      ? item.type.map(t => `<span class="search-result-type type-${t.toLowerCase()}">${t}</span>`).join(" ")
      : `<span class="search-result-type type-${item.type.toLowerCase()}">${item.type}</span>`
  }
</div>

        `;

        list.appendChild(li);
    });

    resultsContainer.appendChild(list);
});
