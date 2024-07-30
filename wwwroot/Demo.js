function helloFunction() {
    alert("Hello Blazor Web Assembly");
}

function multiplyNumbers(a, b) {
    return a * b;
}

window.reverseString = function (input) {
    // Call the C# method using DotNet.invokeMethodAsync
    DotNet.invokeMethodAsync("InteropDemo", "InteropReverse", input)
        .then(function (result) {
            alert(result);
        });
}

//Chart demo
window.showChart = (chartType, dataOptions) => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var options = {
        type: chartType,
        data: {
            labels: dataOptions.labels,
            datasets: [{
                label: dataOptions.label,
                data: dataOptions.data,
                backgroundColor: dataOptions.color,
                borderColor: dataOptions.color,
                fill: dataOptions.fill
            }]
        }
    };
    new Chart(ctx, options);
}

// JavaScript function
window.displayPerson = function (myObject) {
    // Parse the JSON string back into a JavaScript object
    const person = JSON.parse(myObject);
    console.log("Name:", person.Name);
    console.log("Age:", person.Age);
};

