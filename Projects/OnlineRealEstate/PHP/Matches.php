<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <link type="text/css" rel="stylesheet" href="../CSS/ORE_Style.css">
    <script type="text/javascript" src="../JavaScript/ORE_Functions2.js"></script>
    <title>Matches</title>
    <?php
        session_start();
        if(!isset($_SESSION['user_id'])) { 
            header('Location: LoginPage.php?msg=3');
        }
    ?>
</head>
<body onload="buildTemplate()">
    <header id="header" class="banner"> </header>
    <div id="content">
        <div id="leftPanel" class="sideBanner"> </div>
        <div id="mainPanel">
            <nav id="navPanel"><script>buildNavPanel()</script></nav>
            <div style="text-align: right">
            <?php
                require 'Database.php';
                $query = 'SELECT * FROM user_prefs WHERE user_id='.$_SESSION['user_id'];
                $result = mysqli_query($con, $query) or die('Unable to access user\'s preferences');
                $prefs = mysqli_fetch_assoc($result);
                $query = 'SELECT * FROM properties';
                $result = mysqli_query($con, $query);

                function hasYesOrNo($pref, $prop, $name) {
                    if ($pref == 'Any' || $pref == $prop) {
                        echo $name . ' ok<br/>';
                    } else {
                        echo $name . ' not ok<br/>';
                    }
                }

                while ($properties = mysqli_fetch_assoc($result)) {
                    echo $properties['address'] . '<br/>';
                    if ($properties['city'] == $prefs['city']) {
                        echo 'city ok<br/>';       
                    } else {
                        echo 'city not ok<br>';
                    }

                    if ($properties['cost'] >= $prefs['min_cost']) {
                        echo 'min_cost ok<br/>';    
                    } else {
                        echo 'min_cost not ok<br/>';
                    }

                    if ($prefs['max_cost'] == '5000+' || $properties['cost'] <= $prefs['max_cost']) {
                        echo 'max_cost ok<br/>';    
                    } else {
                        echo 'max_cost not ok<br/>';
                    }

                    if ($prefs['num_bedrooms'] == 'Any'
                        || $properties['num_bedrooms'] == $prefs['num_bedrooms']) {
                        echo 'num_bedrooms ok<br/>';
                    } else {
                        echo 'num_bedrooms not ok<br/>';
                    }

                    if ($prefs['num_bathrooms'] == 'Any' 
                        || $properties['num_bathrooms'] == $prefs['num_bathrooms']) {
                        echo 'num_bathrooms ok<br/>';
                    } else {
                        echo 'num_bathrooms not ok<br/>';
                    }

                    if ($properties['sq_ft'] >= $prefs['min_sq_ft']) {
                        echo 'min_sq_ft ok<br/>';
                    } else {
                        echo 'min_sq_ft not ok<br/>';
                    }

                    if ($prefs['min_sq_ft'] == '100'
                        || $properties['sq_ft'] < $prefs['max_sq_ft']) {
                        echo 'max_sq_ft ok<br/>';
                    } else {
                        echo 'max_sq_ft not ok</br>';
                    }
                    
                    hasYesOrNo($prefs['has_balcony'], $properties['has_balcony'], 'has_balcony');
                    hasYesOrNo($prefs['has_dishwasher'], $properties['has_dishwasher'], 'has_dishwasher');
                    hasYesOrNo($prefs['is_furnished'], $properties['is_furnished'], 'is_furnished');
                    hasYesOrNo($prefs['allows_pets'], $properties['allows_pets'], 'allows_pets');
                    hasYesOrNo($prefs['allows_smoking'], $properties['allows_smoking'], 'allows_smoking');

                    echo '<br/><br/>';
                }
                ?>
            </div>
        </div>
        <div id="rightPanel" class="sideBanner"> </div>
    </div>
    <footer id="footer" class="banner"> </footer>
</body>
</html>
