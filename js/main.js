function displayClasses() {
    var num = parseInt(document.getElementById('numClass').value);

    if (num == 1) {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "none";
        document.getElementById('grade3').style.display = "none";
        document.getElementById('grade4').style.display = "none";
        document.getElementById('grade5').style.display = "none";
        document.getElementById('grade6').style.display = "none";
        document.getElementById('credit1').style.display = "inline";
        document.getElementById('credit2').style.display = "none";
        document.getElementById('credit3').style.display = "none";
        document.getElementById('credit4').style.display = "none";
        document.getElementById('credit5').style.display = "none";
        document.getElementById('credit6').style.display = "none";
    } else if (num == 2)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "none";
        document.getElementById('grade4').style.display = "none";
        document.getElementById('grade5').style.display = "none";
        document.getElementById('grade6').style.display = "none";
        document.getElementById('credit1').style.display = "inline";
        document.getElementById('credit2').style.display = "inline";
        document.getElementById('credit3').style.display = "none";
        document.getElementById('credit4').style.display = "none";
        document.getElementById('credit5').style.display = "none";
        document.getElementById('credit6').style.display = "none";
    } else if (num == 3)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "inline";
        document.getElementById('grade4').style.display = "none";
        document.getElementById('grade5').style.display = "none";
        document.getElementById('grade6').style.display = "none";
        document.getElementById('credit1').style.display = "inline";
        document.getElementById('credit2').style.display = "inline";
        document.getElementById('credit3').style.display = "inline";
        document.getElementById('credit4').style.display = "none";
        document.getElementById('credit5').style.display = "none";
        document.getElementById('credit6').style.display = "none";
    } else if (num == 4)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "inline";
        document.getElementById('grade4').style.display = "inline";
        document.getElementById('grade5').style.display = "none";
        document.getElementById('grade6').style.display = "none";
        document.getElementById('credit1').style.display = "inline";
        document.getElementById('credit2').style.display = "inline";
        document.getElementById('credit3').style.display = "inline";
        document.getElementById('credit4').style.display = "inline";
        document.getElementById('credit5').style.display = "none";
        document.getElementById('credit6').style.display = "none";
    } else if (num == 5)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "inline";
        document.getElementById('grade4').style.display = "inline";
        document.getElementById('grade5').style.display = "inline";
        document.getElementById('grade6').style.display = "none";
        document.getElementById('credit1').style.display = "inline";
        document.getElementById('credit2').style.display = "inline";
        document.getElementById('credit3').style.display = "inline";
        document.getElementById('credit4').style.display = "inline";
        document.getElementById('credit5').style.display = "inline";
        document.getElementById('credit6').style.display = "none";
    } else if (num == 6)  {
        document.getElementById('grade1').style.display = "inline";
        document.getElementById('grade2').style.display = "inline";
        document.getElementById('grade3').style.display = "inline";
        document.getElementById('grade4').style.display = "inline";
        document.getElementById('grade5').style.display = "inline";
        document.getElementById('grade6').style.display = "inline";
        document.getElementById('credit1').style.display = "inline";
        document.getElementById('credit2').style.display = "inline";
        document.getElementById('credit3').style.display = "inline";
        document.getElementById('credit4').style.display = "inline";
        document.getElementById('credit5').style.display = "inline";
        document.getElementById('credit6').style.display = "inline";
    }
}

function calc() {
    var num = document.getElementById('numClass').value;
    var sum = 0.0;
    var tot = 0.0;
    var gpa;
    var credit1, credit2, credit3, credit4, credit5, credit6;
    var  grade1,  grade2,  grade3,  grade4,  grade5,  grade6;

    if (num == 1) {
        credit1 = parseFloat(document.getElementById('credit1').value);
        tot = credit1;

    } else if (num == 2)  {
        credit1 = parseFloat(document.getElementById('credit1').value);
        credit2 = parseFloat(document.getElementById('credit2').value);
        tot = credit1 + credit2;

    } else if (num == 3)  {
        credit1 = parseFloat(document.getElementById('credit1').value);
        credit2 = parseFloat(document.getElementById('credit2').value);
        credit3 = parseFloat(document.getElementById('credit3').value);
        tot = credit1 + credit2 + credit3;

    } else if (num == 4)  {
        credit1 = parseFloat(document.getElementById('credit1').value);
        credit2 = parseFloat(document.getElementById('credit2').value);
        credit3 = parseFloat(document.getElementById('credit3').value);
        credit4 = parseFloat(document.getElementById('credit4').value);
        tot = credit1 + credit2 + credit3 + credit4;

    } else if (num == 5)  {
        credit1 = parseFloat(document.getElementById('credit1').value);
        credit2 = parseFloat(document.getElementById('credit2').value);
        credit3 = parseFloat(document.getElementById('credit3').value);
        credit4 = parseFloat(document.getElementById('credit4').value);
        credit5 = parseFloat(document.getElementById('credit5').value);
        tot = credit1 + credit2 + credit3 + credit4 + credit5;

    } else if (num == 6)  {
        credit1 = parseFloat(document.getElementById('credit1').value);
        credit2 = parseFloat(document.getElementById('credit2').value);
        credit3 = parseFloat(document.getElementById('credit3').value);
        credit4 = parseFloat(document.getElementById('credit4').value);
        credit5 = parseFloat(document.getElementById('credit5').value);
        credit6 = parseFloat(document.getElementById('credit6').value);
        tot = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;

    }

    if (num == 1) {
        sum += parseFloat(document.getElementById('grade1').value) * credit1;

    } else if (num == 2)  {
        sum += parseFloat(document.getElementById('grade1').value) * credit1;
        sum += parseFloat(document.getElementById('grade2').value) * credit2;

    } else if (num == 3)  {
        sum += parseFloat(document.getElementById('grade1').value) * credit1;
        sum += parseFloat(document.getElementById('grade2').value) * credit2;
        sum += parseFloat(document.getElementById('grade3').value) * credit3;

    } else if (num == 4)  {
        sum += parseFloat(document.getElementById('grade1').value) * credit1;
        sum += parseFloat(document.getElementById('grade2').value) * credit2;
        sum += parseFloat(document.getElementById('grade3').value) * credit3;
        sum += parseFloat(document.getElementById('grade4').value) * credit4;

    } else if (num == 5)  {
        sum += parseFloat(document.getElementById('grade1').value) * credit1;
        sum += parseFloat(document.getElementById('grade2').value) * credit2;
        sum += parseFloat(document.getElementById('grade3').value) * credit3;
        sum += parseFloat(document.getElementById('grade4').value) * credit4;
        sum += parseFloat(document.getElementById('grade5').value) * credit5;

    } else if (num == 6)  {
        sum += parseFloat(document.getElementById('grade1').value) * credit1;
        sum += parseFloat(document.getElementById('grade2').value) * credit2;
        sum += parseFloat(document.getElementById('grade3').value) * credit3;
        sum += parseFloat(document.getElementById('grade4').value) * credit4;
        sum += parseFloat(document.getElementById('grade5').value) * credit5;
        sum += parseFloat(document.getElementById('grade6').value) * credit6;
    }

    gpa = sum / tot;
    gpa = parseFloat(Math.round(gpa * 100) / 100).toFixed(2);
    document.getElementById('GPA').innerHTML = gpa;
}
