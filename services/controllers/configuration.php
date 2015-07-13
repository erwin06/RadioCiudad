<?php

class Configuration {

	static function setFrontPhoto ($dataUser, $data) {
		$imageUrl = isset($data->imageUrl) ? $data->imageUrl : null;
		
        if(!User::checkSession($dataUser))
            return Error::noPermission();

        if(isset($imageUrl)){
            $mysqli = Connection::getInstance()->getDB();
            if ($stmt = $mysqli->prepare("UPDATE configuration SET frontphoto=?")) {
                $stmt->bind_param("s", $imageUrl);
                if($stmt->execute()){
                    $response = new Response(true, "Foto guardada");
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
	}

    static function getFrontPhoto(){
        $mysqli = Connection::getInstance()->getDB();
        if ($stmt = $mysqli->prepare("SELECT frontphoto FROM configuration LIMIT 1")) {
            if($stmt->execute()){
                $stmt->bind_result($frontphoto);
                if($stmt->fetch()){
                    $arr['frontphoto'] = $frontphoto;
                    $response = new Response(true, "Foto recuperada", $arr);
                }
            } else {
                $response = new Response(false, "Ups! Algo no salió bien :(");
            }
        }

        if(isset($stmt)) $stmt->close();
        return isset($response) ? $response->getResponse() : Error::genericError();
    }

}
