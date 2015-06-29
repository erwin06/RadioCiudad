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


    $result = $mysqli->query($quer);

    var_dump($result);
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