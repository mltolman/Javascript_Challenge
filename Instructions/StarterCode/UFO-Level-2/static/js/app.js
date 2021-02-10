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

    // Datetime filter 

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufoDate => ufoDate.datetime === inputValue);

    console.log(filteredData);

    tbody.html("");


    filteredData.forEach((ufoDate) => {
        var row = tbody.append("tr");
        Object.entries(ufoDate).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


    // City Filter

    d3.event.preventDefault();

    var inputElement = d3.select("#city");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var dataByCity = tableData.filter(ufoCity => ufoCity.city === inputValue);

    console.log(dataByCity);

    tbody.html("");


    dataByCity.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


    // State Filter

    d3.event.preventDefault();

    var inputElement = d3.select("#state");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var dataByState = tableData.filter(ufoState => ufoState.state === inputValue);

    console.log(dataByState);

    tbody.html("");


    dataByState.forEach((ufoState) => {
        var row = tbody.append("tr");
        Object.entries(ufoState).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


    //Country Filter

    d3.event.preventDefault();

    var inputElement = d3.select("#country");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var dataByCountry = tableData.filter(ufoCountry => ufoCountry.country === inputValue);

    console.log(dataByCountry);

    tbody.html("");


    dataByCountry.forEach((ufoCountry) => {
        var row = tbody.append("tr");
        Object.entries(ufoCountry).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


    // Shape Filter
    
    d3.event.preventDefault();

    var inputElement = d3.select("#shape");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var dataByShape = tableData.filter(ufoShape => ufoShape.shape === inputValue);

    console.log(dataByShape);

    tbody.html("");


    dataByShape.forEach((ufoShape) => {
        var row = tbody.append("tr");
        Object.entries(ufoShape).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};
