<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <link rel="stylesheet" href="style.css">

    <title>Test</title>
</head>
<body>

    <div class="container">

        <h1>video gallery</h1>
        <div class="video-container">
            <?php
         
            $servername = "localhost";
            $username = "root";
            $password = "";
            $dbname = "videos";

            $conn = new mysqli($servername, $username, $password, $dbname);

        
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

          
            $sql = "SELECT * FROM videos WHERE title='quads' ";
            $result = $conn->query($sql);

           
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $filename = $row['filename'];
                    $title = $row['title'];
                    $description = nl2br($row['description']);

                    echo "<div class=\"video\">
                            <video src=\"../$filename\" muted></video>
                            <p class=\"description\">$description</p>
                          </div>";
                }
            } else {
                echo "No videos found for the quads category.";
            }

           
            $conn->close();
            ?>
        </div>
        <div class="popup-video">
            <span>&times;</span>
            <video src="../quads1.MOV" muted autoplay controls></video>
            <p class="popup-description"></p>
        </div>

    </div>

    <script>
        document.querySelectorAll('.video-container video').forEach((vid, index) => {
            vid.onclick = () => {
                document.querySelector('.popup-video').style.display = 'block';
                document.querySelector('.popup-video video').src = vid.getAttribute('src');
                document.querySelector('.popup-description').innerHTML = vid.parentNode.querySelector('.description').innerHTML;
            }
        });

        document.querySelector('.popup-video span').onclick = () => {
            document.querySelector('.popup-video').style.display = 'none';
        }

        
    </script>

</body>
</html>
