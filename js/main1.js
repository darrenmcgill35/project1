
function submission () {
  let input = localStorage.getItem("textvalue");
  let tableContent = "<tbody>";
  let rowNumber = 0;
//loop rows
  for (rowNumber; rowNumber < input.length; rowNumber++) {
    tableContent += "<tr>";
    // loop cells
    for (let colNumber = 0; colNumber < input.length; colNumber++) {
      tableContent += "<td style='border: solid 1px black;'>";
      // should i write in THIS cell
      if (colNumber === rowNumber) {
        tableContent += input.substring(rowNumber, rowNumber + 1);
      }
      tableContent += "</td>";
    }
    tableContent += "</tr>";
  }

  tableContent += "</tbody>";

  document.getElementById("myTable").innerHTML = tableContent;

}

submission();
