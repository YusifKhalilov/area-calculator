var inputs;
var sides = 0;
var area = 0;
var sidesLength = [];

//on click to the calculate button
document.getElementById('calculate').addEventListener('click', function () {
    inputs = document.getElementsByClassName('input');
    document.getElementById('info').classList.add('hide');
    document.getElementById('result').classList.remove('hide');
    var i;

    //calculate entered sides count
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value) {
            sides++;
            sidesLength.push(inputs[i].value);
        }
    }

    //calculate triangle
    if (sides === 3) {
        //sides length
        var a = Number(sidesLength[0]);
        var b = Number(sidesLength[1]);
        var c = Number(sidesLength[2]);

        //formula
        var s = (a + b + c) / 2;
        area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));

        //display result
        document.getElementById('result').innerHTML = `Area of the triangle is: ${area} cm&sup2;`;
    }

    //calculate square or rectangle
    if (sides === 2) {
        var side1 = Number(sidesLength[0]);
        var side2 = Number(sidesLength[1]);

        //formula
        area = side1 * side2;

        //display result
        document.getElementById('result').innerHTML = `Area of the square or rectangle is: ${area} cm&sup2;`;
    }

    //calculate pentagon
    if (sides === 1) {
        var sideLength = Number(sidesLength[0]);

        //formula
        area = Math.round((1 / 4) * (Math.sqrt(5 * (5 + 2 * Math.sqrt(5)))) * sideLength * sideLength);

        //display result
        document.getElementById('result').innerHTML = `Area of the pentagon is: ${area} cm&sup2;`;
    }

    inputs = [];
    sides= 0;
    area = 0;
    sidesLength = [];
});