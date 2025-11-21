<html>
    <body>
        <?php
            // Outputs a welcome message:
            echo "<h1>Welcome Home!\n</h1>";

            $x = 5;
            $y = 6;
            $txt = "W3Schools.com";
            echo "I love $txt! \n";
            echo "I love " . $txt . "!\n";
            echo $x + $y;


            $x = 5;      // $x is an integer
            $y = "John\n"; // $y is a string
            echo $x;
            echo $y;

            var_dump(5);
            var_dump("John");
            var_dump(3.14);
            var_dump(true);
            var_dump([2, 3, 56]);
            var_dump(NULL);

            $x = $y = $z = "Fruit";

            $x = 5; // global scope

            function myTest() {
            // using x inside this function will generate an error
            echo "<p>Variable x inside function is: $x</p>";
            }
            myTest();

            echo "<p>Variable x outside function is: $x</p>";

            $txt1 = "Learn PHP";
            $txt2 = "W3Schools.com";

            print "<h2>$txt1</h2>";
            print "<p>Study PHP at $txt2</p>";

            print '<h2>' . $txt1 . '</h2>';
            print '<p>Study PHP at ' . $txt2 . '</p>';

            $x = "Hello";
            $y = "World";
            $z = $x . " " . $y;
            echo $z;

            $x = "<p>We are the so-called \"Vikings\" from the north.</p>";
            echo $x;

            $x = 5985;
            var_dump(is_int($x));
        ?>
    </body>
</html>

