<?php include("/includes/gradeOptions.php"); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>GPA Calculator</title>
    </head>
    <body>
        <div class="container">
            <select class="" id="numClass" onchange="displayClasses()">
                <option value="1.0">1</option>
                <option value="2.0">2</option>
                <option value="3.0">3</option>
                <option value="4.0">4</option>
                <option value="5.0">5</option>
                <option value="6.0">6</option>
            </select>
            <div class="container" id="grades">
                <select class="" id="grade1" style="display: inline">
                    <?php echo $gradeOps; ?>
                </select>
                <select class="" id="grade2" style="display: none">
                    <?php echo $gradeOps; ?>
                </select>
                <select class="" id="grade3" style="display: none">
                    <?php echo $gradeOps; ?>
                </select>
                <select class="" id="grade4" style="display: none">
                    <?php echo $gradeOps; ?>
                </select>
                <select class="" id="grade5" style="display: none">
                    <?php echo $gradeOps; ?>
                </select>
                <select class="" id="grade6" style="display: none">
                    <?php echo $gradeOps; ?>
                </select>
            </div>
            <button onclick="calc()">Calculate GPA</button>
            <div class="container">
                <p id="GPA"></p>
            </div>
        </div>

        <script src="js/main.js"></script>

    </body>
</html>
