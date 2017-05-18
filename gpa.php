<?php include("includes/gradeOptions.php"); ?>
<?php include("includes/creditOptions.php"); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name = "viewport" content = "width=device-width">
        <title>GPA Calculator</title>
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <div class="page">
            <h1 align="center">GPA Calculator</h1>
            <div class="container">
                <h4 class="subtitle " align="center">How many classes?</h4>
                <div class="numClassSelect">
                    <select class="" id="numClass" onchange="displayClasses()">
                        <option value="1.0">1</option>
                        <option value="2.0">2</option>
                        <option value="3.0">3</option>
                        <option selected="selected" value="4.0">4</option>
                        <option value="5.0">5</option>
                        <option value="6.0">6</option>
                    </select>
                </div>
                <h4 class="subtitle" align="center">Enter your grades and credits</h4>
                <div class="gradeOps" id="grades">
                    <select class="op" id="grade1" style="display: inline">
                        <?php echo $gradeOps; ?>
                    </select>
                    <select class="op" id="grade2" style="display: inline">
                        <?php echo $gradeOps; ?>
                    </select>
                    <select class="op" id="grade3" style="display: inline">
                        <?php echo $gradeOps; ?>
                    </select>
                    <select class="op" id="grade4" style="display: inline">
                        <?php echo $gradeOps; ?>
                    </select>
                    <select class="op" id="grade5" style="display: none">
                        <?php echo $gradeOps; ?>
                    </select>
                    <select class="op" id="grade6" style="display: none">
                        <?php echo $gradeOps; ?>
                    </select>
                </div>
                <div class="creditOps" id="credits">
                    <select class="op" id="credit1" style="display: inline">
                        <?php echo $creditOps; ?>
                    </select>
                    <select class="op" id="credit2" style="display: inline">
                        <?php echo $creditOps; ?>
                    </select>
                    <select class="op" id="credit3" style="display: inline">
                        <?php echo $creditOps; ?>
                    </select>
                    <select class="op" id="credit4" style="display: inline">
                        <?php echo $creditOps; ?>
                    </select>
                    <select class="op" id="credit5" style="display: none">
                        <?php echo $creditOps; ?>
                    </select>
                    <select class="op" id="credit6" style="display: none">
                        <?php echo $creditOps; ?>
                    </select>
                </div>
                <div class="calcButton">
                    <button class="but" onclick="calc()">Calculate GPA</button>
                </div>

                <div class="gpaDisplay">
                    <p id="GPA"></p>
                </div>
            </div>
            <div class="footer">
                <p class="foot">Clemann Developments</p>
            </div>
        </div>


        <script src="js/main.js"></script>

    </body>
</html>
