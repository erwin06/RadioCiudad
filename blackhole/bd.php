<?
    var_dump($_POST);
	$quer = $_POST["query"];

 

    $dbhost = 'localhost';
	$dbuser = 'm2000315_Radio';
	$dbpass = 'meDUtozu49';
	$dbname = 'm2000315_Radio';


    // $dbhost = 'localhost';
    // $dbuser = 'root';
    // $dbpass = '';
    // $dbname = 'radiociudad';


    $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
    $mysqli->set_charset("utf8");

	// $conn = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Ocurrio un error al conectarse al servidor mysql');
	// mysql_select_db($dbname);

    $quer = "DROP TABLE IF EXISTS 'configuration'; CREATE TABLE 'configuration' ('idconfiguration' int(11) NOT NULL AUTO_INCREMENT,'frontphoto' varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,PRIMARY KEY ('idconfiguration')) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;";

    $result = $mysqli->query($quer);

    if($result === TRUE){
        echo 'Se ejecutó con éxito';
    } else {
       echo $mysqli->error;
    }

    $quer = "LOCK TABLES `configuration` WRITE; INSERT INTO `configuration` VALUES (1,'portada2 (9).jpg'); UNLOCK TABLES;";

    $result = $mysqli->query($quer);

    if($result === TRUE){
        echo 'Se ejecutó con éxito1';
    } else {
       echo $mysqli->error;
    }

    $quer = "LOCK TABLES `configuration` WRITE; INSERT INTO `configuration` VALUES (1,'portada2 (9).jpg'); UNLOCK TABLES;";

    $result = $mysqli->query($quer);

    if($result === TRUE){
        echo 'Se ejecutó con éxito2';
    } else {
       echo $mysqli->error;
    }



    $quer = "DROP TABLE IF EXISTS `user`;CREATE TABLE `user` (`iduser` int(11) NOT NULL AUTO_INCREMENT,`user` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,`admin` int(11) NOT NULL,`password` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,`idsession` varchar(45) COLLATE utf8_spanish2_ci DEFAULT NULL,PRIMARY KEY (`iduser`)) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci; LOCK TABLES `user` WRITE; INSERT INTO `user` VALUES (1,'admin',1,'202cb962ac59075b964b07152d234b70','9d07cbc297ffeb7ca7e3958e99da1b79');UNLOCK TABLES;";


    $result = $mysqli->query($quer);

    if($result === TRUE){
        echo 'Se ejecutó con éxito3';
    } else {
       echo $mysqli->error;
    }


    

    // var_dump($result);
    // // Prepara la consulta
    // if ($result = $mysqli->prepare($query)) {

    //     $stmt->bind_param("s", $city);
    //     /* ejecutar la consulta */
    //     $stmt->execute();


    // }


    // $arr = array();
    // $arr['result'] = $result;
    // if ($result == true) {
    //     $arr['insert_id'] = self::$mysqli->insert_id;
    // }
    // return $arr;
    
?>