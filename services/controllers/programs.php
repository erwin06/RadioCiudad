<?php

class Programs {

    static function addProgram($userData, $data) {

        if(!User::checkSession($userData))
            return Error::noPermission();

        $title = isset($data->title) ? $data->title : null;
        $description = isset($data->description) ? $data->description : null;
        $picture = isset($data->picture) ? $data->picture : null;
        $time = isset($data->time) ? $data->time : null;

        if(isset($title) && isset($description) && isset($time)){
            $mysqli = Connection::getInstance()->getDB();
            if(isset($picture)){
                if ($stmt = $mysqli->prepare("INSERT INTO programs (title, time, picture, description) VALUES (?,?,?,?)")) {
                    $stmt->bind_param("ssss", $title, $time, $picture, $description);
                    if($stmt->execute()){
                        $response = new Response(true, "Programa guardado");
                    }
                }
            } else {
                if ($stmt = $mysqli->prepare("INSERT INTO programs (title, time, description) VALUES (?,?,?)")) {
                    $stmt->bind_param("sss", $title, $time, $description);
                    if($stmt->execute()){
                        $response = new Response(true, "Programa guardado");
                    }
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
    }

    static function getPrograms(){
        
        $mysqli = Connection::getInstance()->getDB();
        $query = "SELECT idprograms, title, time, description, picture FROM programs";
        if ($stmt = $mysqli->prepare($query)) {
            if($stmt->execute()){
                $stmt->bind_result($idprograms, $title, $time, $description, $picture);
                $result = array();
                while($stmt->fetch()){
                    $item = array();
                    $item["idProgram"] = $idprograms;
                    $item["title"] = $title;
                    $item["time"] = $time;
                    $item["description"] = $description;
                    $item["picture"] = $picture;
                    array_push($result, $item);
                }

                $response = new Response(true, "Programas recuperados", $result);

            } else {
                $response = new Response(false, "Ups! Algo no salió bien :(");
            }
        }

        if(isset($stmt)) $stmt->close();
        return isset($response) ? $response->getResponse() : Error::genericError();
    }

    static function delProgram($userData, $data) {

        if(!User::checkSession($userData))
            return Error::noPermission();

        $idProgram = isset($data->idProgram) ? $data->idProgram : null;

        if(isset($idProgram)){
            $mysqli = Connection::getInstance()->getDB();
            if ($stmt = $mysqli->prepare("DELETE FROM programs WHERE idprograms = ?")) {
                $stmt->bind_param("i", $idProgram);
                if($stmt->execute()){
                    $response = new Response(true, "Programa eliminado");
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
    }
}