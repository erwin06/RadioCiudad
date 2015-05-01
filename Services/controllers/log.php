<?php

class Log {

    /**
     * 
     * 
     */
    public function login($data) {
        $arr = array();
        $user = $data->password ? $data->password : "";

        $result = Connection::getInstance()->select("SELECT user FROM user WHERE user = '$user'");

        if ($result['result'] == true) {

            $count = $result['resultCount'];

            // No encontró ningun usuario con esas caracteristicas
            if ($count == 0) {
                $arr['success'] = false;
                $arr['message'] = 'Contraseña incorrecta';
            } else {
                $arr['success'] = true;
                $arr['message'] = 'Contraseña incorrecta';
            }
        } else {
            $arr['success'] = false;
            $arr['message'] = 'Contraseña incorrecta';
        }

        return $arr;
    }

    public function logout() {
        session_destroy();
    }
    
    
    public function changePassword($data){
        $arr = array();
        $user = $data->password ? $data->password : "";
        $newPass = $data->newPass;

        $result = Connection::getInstance()->select("SELECT user FROM user WHERE user = '$user'");

        if ($result['result'] == true) {

            $count = $result['resultCount'];

            // No encontró ningun usuario con esas caracteristicas
            if ($count == 0) {
                $arr['success'] = false;
                $arr['message'] = 'Contraseña incorrecta';
            } else {
                
                Connection::getInstance()->insert("DELETE FROM user");
                Connection::getInstance()->insert("INSERT INTO user (user) VALUES (\"" . $newPass . "\")");
                
                $arr['success'] = true;
                $arr['message'] = 'Contraseña incorrecta';
            }
        } else {
            $arr['success'] = false;
            $arr['message'] = 'Contraseña incorrecta';
        }

        return $arr;
    }

}
