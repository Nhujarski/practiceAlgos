function createMatrix(inputString) {
  // Split the string into groups based on ';'
  const groups = inputString.split(';').filter(Boolean);

  // Initialize an empty matrix
  const matrix = [];

  // Process each group
  for (const group of groups) {
    // Split the group into columns based on ':'
    const parts = group.split(':');

    // Extract the row header (e.g., 'L10')
    const rowHeader = parts[1];

    // Split the data part into columns based on ','
    const columns = parts[0].split(',');

    // Initialize a new row for the matrix
    const newRow = [];

    // Add null as the first element of the row
    newRow.push(null);

    // Add the row header as the second element of the row (if available)
    if (rowHeader) {
      newRow.push(parseInt(rowHeader.substring(1)));
    } else {
      newRow.push(null);
    }

    // Add the data columns to the row
    newRow.push(...columns.map((value) => parseFloat(value)));

    // Push the row to the matrix
    matrix.push(newRow);
  }

  // Remove the first row (header row)
  matrix.shift();

  return matrix;
}

const inputString = '5.0,100,5.5,101,6.0,102:L10;5.0,99,5.5,100,6.0,101:L20;';
const resultMatrix = createMatrix(inputString);

console.log(resultMatrix);
