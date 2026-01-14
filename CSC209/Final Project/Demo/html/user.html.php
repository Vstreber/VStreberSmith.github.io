<html>
    <head>
        <script src="../js/functions.js"></script>
        <?php include('../php/reader.php'); ?>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link id="theme" rel="stylesheet" type="text/css" href="../css/textBox.css" />
        <link rel="stylesheet" href="../css/bg.css">
    </head>

    <body>

        <canvas id="canvas1"></canvas>
        <script src="../js/bg.js"></script>
        <div class="blur">
        
        <!-- Start the timeLoggedIn clock. -->
        <script>timeLoggedIn("start");</script>

        <!-- Storing path for use in javascript. -->
        <script>     
            let path = "../html/Users/user/notes.json";
        </script>

        <!-- Header HTML -->
        <h2>Welcome, User!</h2>
        <br></br>

        <!-- Note Tab Bar -->
        <div id="tabBar" class="tab">
        </div>
        
        <div class="text-editor-header">

            <button type="button" class="save" onclick="saveNote(document.getElementsByClassName('tablinks active')[0].innerHTML, path)">
                Save Note
            </button>
            <!-- Start of formatting buttons -->
            <button type="button" class="btn" data-element="bold">
                <i class="fa fa-bold" > </i>
            </button>
            <button type="button" class="btn" data-element="italic">
                <i class="fa fa-italic" > </i>
            </button>
            <button type="button" class="btn" data-element="underline">
                <i class="fa fa-underline" > </i>
            </button>
            <button type="button" class="btn" data-element="insertUnorderedList">
                <i class="fa fa-list-ul" > </i>
            </button>
            <button type="button" class="btn" data-element="insertOrderedList">
                <i class="fa fa-list-ol" > </i>
            </button>
            <button type="button" class="btn" data-element="justifyLeft">
                <i class="fa fa-align-left" > </i>
            </button>
            <button type="button" class="btn" data-element="justifyCenter">
                <i class="fa fa-align-center" > </i>
            </button>
            <button type="button" class="btn" data-element="justifyRight">
                <i class="fa fa-align-right" > </i>
            </button>
            <button type="button" class="delete" onclick="deleteNote(document.getElementsByClassName('tablinks active')[0].innerHTML, path)">
                Delete Note
            </button>
            <!-- End of formatting buttons -->
        </div>

        <!-- Editable content -->
        <div class="content" id="content" contenteditable="true">""</div>


        <!-- Initializing all JS files used. -->
        <script src="../js/notepad.js"></script>
        <script src="../js/app.js"></script>
        <script src="https://use.fontawesome.com/a31a3f8384.js"></script>

        <script>
            /** Loading notes if there are pre-existing ones on acc, OR
             * creating user's first note.
             */
            loadNotes(path);

            /** Once document is loaded, making first tab active by default. */
            window.addEventListener('load', function () {
                activateFirstTab(path);
            })
        </script>


        </div>
    </body>
</html>
