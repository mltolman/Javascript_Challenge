// from data.js
var tableData = data;

// To fill in the table
var tbody = d3.select("tbody");

tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Form filter to handle event and search through date/time column

//select button
var button = d3.select("#filter-btn");

//select form
var form = d3.select("#form");


//Event handlers

button.on("click", runEnter);
form.on("submit", runEnter);

// complete the event handler function for the formation

function runEnter() {

    // Prevent page from reloading
    d3.event.preventDefault();

    // select input element and value
    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);

    // Clear table body
    tbody.html("");

    // insert filtered data into table body
    
    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};
