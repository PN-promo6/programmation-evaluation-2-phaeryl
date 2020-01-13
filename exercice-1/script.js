let fishList = [
    ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
    ["Aulopiformes", "Anguiliformes", "Anguille", "Anguilla anguilla"],
    ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
    ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
];

function displayArray(array) {
    let table = document.createElement("table");
    document.body.appendChild(table)
    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    let i = 0;
    let currentElement;
    while (i < array.length) {
        currentElement = array[i];
        let tableBodyRow = document.createElement("tr");
        tableBody.appendChild(tableBodyRow);
        i++;
        let j = 0;
        while (j < currentElement.length) {
            let tableBodyCell = document.createElement("td");
            tableBodyCell.textContent = currentElement[j];
            tableBodyRow.appendChild(tableBodyCell);
            if (currentElement[j] == currentElement[3]) {
                tableBodyCell.style.fontStyle="italic";
            }
            j++;
        }
    }

}
displayArray(fishList);