//function for table
function submission () {
  // setting variables
  let input = localStorage.getItem("textvalue");
  let tableContent = "<tbody>";
  let rowNumber = 0;
//loop rows - make as many rows needed depending on the length of the input
  for (rowNumber; rowNumber < input.length; rowNumber++) {
    // create the rows in the table
     tableContent += "<tr>";
    // loop cols - make as many cols needed depending on the length of the input
    for (let colNumber = 0; colNumber < input.length; colNumber++) {
      // create the cols in the table
      tableContent += "<td style='border: solid 1px black;'>";
      // so when col is equal to row which it is...
      if (colNumber === rowNumber) {
        //grab each letter (substring) and put them in a different row.
        tableContent += input.substring(rowNumber, rowNumber + 1);
      }

    }

  }
  // using the id myTable submit the data from the form to the table
  document.getElementById("myTable").innerHTML = tableContent;
}
//run the function
submission();
