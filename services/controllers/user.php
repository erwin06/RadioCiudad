<?php

class User {

    static function login($data) {
        $user = $data->user ? $data->user : null;
        $password = $data->password ? md5($data->password) : null;

        if(isset($user) && isset($password)){
            $mysqli = Connection::getInstance()->getDB();
            if ($stmt = $mysqli->prepare("SELECT iduser, user,password, admin FROM user WHERE user=? AND password=?")) {
                $stmt->bind_param("ss", $user, $password);
                if($stmt->execute()){
                    $stmt->bind_result($idUser, $user,$password, $admin);
                    if ($stmt->fetch()) { 
                        $idsession = md5(date("Y-m-d h:m:s"));
                        $stmt->prepare("UPDATE user SET idsession = '$idsession' WHERE iduser = '$idUser'");
                        if($stmt->execute()){
                            $arr['idsession'] = $idsession;
                            $arr['iduser'] = $idUser;
                            $arr['admin'] = $admin;
                            $response = new Response(true, "Loggin correcto", $arr);
                        }
                    } else {
                        $response = new Response(false, "Usuario o contraseña incorrecta");
                    }
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
    }

    static function checkSession($userdata) {
        $iduser = $userdata->iduser;
        $idsession = $userdata->idsession;
        $result = Connection::getInstance()->select("SELECT * FROM user WHERE iduser = '$iduser' AND idsession = '$idsession'");

        if ($result['result'] == true) {
            $count = $result['resultCount'];
            if ($count > 0) {
                return true;
            }
        }
        return false;
    }

    static function changePassword($userData, $data) {
        // Data
        $iduser = $userData->iduser;
        $newPassword = $data->newPassword;
        $newPassword2 = $data->newPassword2;

        if($newPassword != $newPassword2){
            $resp = new Response(false, "Las contraseñas no coinciden");
            return $resp->getResponse();
        }

        $mysqli = Connection::getInstance()->getDB();

        if ($stmt = $mysqli->prepare("SELECT * FROM user WHERE iduser=? AND password=? AND idsession=?")) {
            $stmt->bind_param("iss",$iduser, md5($data->currentPassword), $userData->idsession);
            if($stmt->execute()){
                if ($stmt->fetch()) { 
                    $newPassword = md5($newPassword);
                    $stmt->prepare("UPDATE user SET password = '$newPassword' WHERE iduser = '$iduser'");
                    if($stmt->execute()){
                        $response = new Response(true, "La contraseña se cambió correctamente");
                    }
                } else {
                    $response = new Response(false, "La contraseña no es válida");
                }
            } else {
                $response = new Response(false, "Ups! Algo no salió como queriamos. Intenta nuevamente");
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
        
    }

}
