<html>
    <head>
        <script src="../../../js/functions.js"></script>
        <?php include('../../../php/reader.php'); ?>
    </head>

    <body>
        <h1>WELCOME!</h1>
        
        <script> 
            timeLoggedIn("start");
        </script>

        <form action="../../logoutPage.html.php" method="POST">
            <input type="hidden" name="folder" value= <?php extractFolderNumber('user.html.php'); ?>>
            <input type="hidden" name="time" id="timeElapsed" value="placeholder">
            <input type="submit" onclick='timeLoggedIn("end")' value="Log Out">
        </form>

        
    </body>
</html>