<?php

class Connection {

    static private $instancia = null;
    private static $mysqli = null;

    private function __construct($servidor, $usuario, $password, $basedatos) {
        self::$mysqli = new mysqli($servidor, $usuario, $password, $basedatos);
        self::$mysqli->set_charset("utf8");
    }

    static public function getInstance() {
        if (self::$instancia == null) {
            self::$instancia = new Connection("localhost", "root", "", "radio");
        }
        return self::$instancia;
    }

    public function insert($query) {
        $result = self::$mysqli->query($query);
        $arr = array();
        $arr['result'] = $result;
        if ($result == true) {
            $arr['insert_id'] = self::$mysqli->insert_id;
        }
        return $arr;
    }
    
    public function update($query) {
        $result = self::$mysqli->query($query);
        $arr = array();
        $arr['result'] = $result;
        return $arr;
    }

    public function select($query) {
        logg::loggInfo($query, "Select"); 
        $arr = array();
        $arr['result'] = false;
        if ($result = self::$mysqli->query($query)) {
            $arr['result'] = true;
            $arr['resultData'] = array();
            while ($fila = $result->fetch_row()) {

                array_push($arr['resultData'], $fila);
            }
            $arr['resultCount'] = count($arr['resultData']);
        }
        
        return $arr;
    }

}
