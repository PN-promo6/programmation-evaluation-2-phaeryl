let fishList = [
    ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
    ["Aulopiformes", "Anguiliformes", "Anguille", "Anguilla anguilla"],
    ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
    ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

function displayArray(array) {
    array.unshift(["Ordre", "Famille", "Nom vernaculaire", "Nom binomial"]);
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

    while (i < headerData.length) {
        let currentElement = headerData[i];
        let tableHeaderCell = document.createElement("th");
        tableHeaderRow.appendChild(tableHeaderCell);
        tableHeaderCell.textContent = currentElement;
        tableHeaderCell.style.color = "red";
        i++;
    }

    while (j < array.length) {
        let currentElement2 = array[j];
        let tableBodyRow = document.createElement("tr");
        tableBody.appendChild(tableBodyRow);
        j++;
        let k = 0;

        while (k < currentElement2.length) {
            let tableBodyCell = document.createElement("td");
            tableBodyRow.appendChild(tableBodyCell);
            tableBodyCell.textContent = currentElement2[k];
            if (currentElement2[k] == currentElement2[3]) {
                tableBodyCell.style.fontStyle = "italic";
            }
            k++;
        }

    }
}
displayArray(fishList);