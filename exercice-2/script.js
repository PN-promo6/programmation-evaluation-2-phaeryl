let container = document.createElement("div");
document.body.appendChild(container);

let mainTitleElement = document.createElement("h1");
mainTitleElement.textContent = "Cinéma le Dauphin";
container.appendChild(mainTitleElement);

let introductionParagraph = document.createElement("p");
introductionParagraph.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontre;s, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi)."
container.appendChild(introductionParagraph);

let weeklyMoviesButton = document.createElement("button");
weeklyMoviesButton.textContent = "Voir les films à l'affiche cette semaine";
weeklyMoviesButton.style.marginBottom = "50px";
container.appendChild(weeklyMoviesButton)

// Array init
let moviesList = [
    ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
    ["In my room", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
    ["Un violent désir de bonheur", "Clément Schneider", "France", "2018", "1h15", "vf"],
    ["What you honna do when the world's on fire?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
    ["Grass", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];

function displayMoviesList(array) {
    let headerData = array[0];
    let table = document.createElement("table");
    document.body.appendChild(table);
    table.style.border = "1px solid black";
    let tableHeader = document.createElement("thead");
    table.appendChild(tableHeader);
    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    let tableHeaderRow = document.createElement("tr");
    tableHeader.appendChild(tableHeaderRow);
    let i = 0;
    let j = 1;

    // Loop for table header elements
    while (i < headerData.length) {
        let currentElement = headerData[i];
        let tableHeaderCell = document.createElement("th");
        tableHeaderRow.appendChild(tableHeaderCell);
        tableHeaderCell.textContent = currentElement;
        i++;
    }
    // Loop for table body rows
    while (j < array.length) {
        let currentElement2 = array[j];
        let tableBodyRow = document.createElement("tr");
        tableBody.appendChild(tableBodyRow);
        j++;
        let k = 0;

        // Loop for table body elements
        while (k < currentElement2.length) {
            let tableBodyCell = document.createElement("td");
            tableBodyRow.appendChild(tableBodyCell);
            tableBodyCell.textContent = currentElement2[k];
            if (currentElement2[k] == currentElement2[0]) {
                tableBodyCell.style.textTransform = "uppercase";
            }
            k++;
        }
    }
    return;
}

weeklyMoviesButton.addEventListener("click", function () {
    container.style.display = "none";
    displayMoviesList(moviesList);
});