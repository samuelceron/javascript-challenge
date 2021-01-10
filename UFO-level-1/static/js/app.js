// from data.js
var tableData = data;

// Set the table body
var tbody = d3.select("tbody");

// Set UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
});


// Set the button
var button = d3.select("#filter-btn");

//Build function on click
button.on("click", function() {
    tbody.html("");

    // Set input data
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    
    // Filter data 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    //console.log(filteredData);


    filteredData.forEach(function(selections) {

        console.log(selections);
        // Append one table row `tr` for each UFO Sighting object
        var row = tbody.append("tr");
        // Use `Object.entries` to console.log each UFO Sighting value
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

