function displayClasses() {
    var num = parseInt(document.getElementById('numClass').value);

    if (num == 1) {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "none";
        document.getElementById('grade3').style.display = "none";
        document.getElementById('grade4').style.display = "none";
        document.getElementById('grade5').style.display = "none";
        document.getElementById('grade6').style.display = "none";
    } else if (num == 2)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "none";
        document.getElementById('grade4').style.display = "none";
        document.getElementById('grade5').style.display = "none";
        document.getElementById('grade6').style.display = "none";
    } else if (num == 3)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "inline";
        document.getElementById('grade4').style.display = "none";
        document.getElementById('grade5').style.display = "none";
        document.getElementById('grade6').style.display = "none";
    } else if (num == 4)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "inline";
        document.getElementById('grade4').style.display = "inline";
        document.getElementById('grade5').style.display = "none";
        document.getElementById('grade6').style.display = "none";
    } else if (num == 5)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "inline";
        document.getElementById('grade4').style.display = "inline";
        document.getElementById('grade5').style.display = "inline";
        document.getElementById('grade6').style.display = "none";
    } else if (num == 6)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "inline";
        document.getElementById('grade4').style.display = "inline";
        document.getElementById('grade5').style.display = "inline";
        document.getElementById('grade6').style.display = "inline";
    }
}

function calc() {
    var num = document.getElementById('numClass').value;
    var sum = 0.0;
    var gpa;

    if (num == 1) {
        sum += parseFloat(document.getElementById('grade1').value);

    } else if (num == 2)  {
        sum += parseFloat(document.getElementById('grade1').value);
        sum += parseFloat(document.getElementById('grade2').value);

    } else if (num == 3)  {
        sum += parseFloat(document.getElementById('grade1').value);
        sum += parseFloat(document.getElementById('grade2').value);
        sum += parseFloat(document.getElementById('grade3').value);

    } else if (num == 4)  {
        sum += parseFloat(document.getElementById('grade1').value);
        sum += parseFloat(document.getElementById('grade2').value);
        sum += parseFloat(document.getElementById('grade3').value);
        sum += parseFloat(document.getElementById('grade4').value);

    } else if (num == 5)  {
        sum += parseFloat(document.getElementById('grade1').value);
        sum += parseFloat(document.getElementById('grade2').value);
        sum += parseFloat(document.getElementById('grade3').value);
        sum += parseFloat(document.getElementById('grade4').value);
        sum += parseFloat(document.getElementById('grade5').value);

    } else if (num == 6)  {
        sum += parseFloat(document.getElementById('grade1').value);
        sum += parseFloat(document.getElementById('grade2').value);
        sum += parseFloat(document.getElementById('grade3').value);
        sum += parseFloat(document.getElementById('grade4').value);
        sum += parseFloat(document.getElementById('grade5').value);
        sum += parseFloat(document.getElementById('grade6').value);
    }

    gpa = sum / num;
    gpa = parseFloat(Math.round(gpa * 100) / 100).toFixed(2);
    document.getElementById('GPA').innerHTML = gpa;
}
