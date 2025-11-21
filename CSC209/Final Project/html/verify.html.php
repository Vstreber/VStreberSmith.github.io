<html>
    <body>
        <?php
            session_start();

            $_SESSION["jsonFile"] = '../json/users.json';
            $_SESSION["username"] = $_POST["username"];
            $_SESSION["password"] = $_POST["password"];

            include('../php/reader.php');
            
            if (strcmp(verify($_SESSION["username"], $_SESSION["password"], $_SESSION["jsonFile"]),"admin") == 0) {
                header("Location: Admin/admin.html.php");
                die();
            } else if (strcmp(verify($_SESSION["username"], $_SESSION["password"], $_SESSION["jsonFile"]),"user") == 0) { 
                $_SESSION["index"] = findIndex('../json/users.json', $_SESSION["username"]) + 1;
                header("Location: user.html.php");
                die();
            } else {
                $_SESSION["index"] = findIndex('../json/users.json', $_SESSION["username"]) + 1;
                echo "<h1>Login Failed</h1>";
                echo "<p>Your username and/or password didn't match any account in database.</p>";
                echo '<a href="loginPage.html.php" class="button">Try Again</a>';
                echo $_SESSION["index"];
                echo $_SESSION["username"];
                echo $_SESSION["password"];
                session_unset();
                session_destroy();
            }
        ?>
    </body>
</html>