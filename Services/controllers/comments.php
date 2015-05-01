<?php

class Comments {

    /**
     * 
     * 
     */
    public function add($data) {
//        var_dump($data);
        $arr = array();
        $name = $data->name;
        $title = $data->title;
        $message = $data->message;
        $email =  $data->mail;

        $result = Connection::getInstance()->insert("INSERT INTO commets (name,email,message,title, date) VALUES (\"" . $name . "\",\"" . $email . "\",\"" . $message . "\",\"" . $title . "\",now())");

        $arr['success'] = true;
        $arr['message'] = 'some';

        return $arr;
    }

    public function get() {

        $result = Connection::getInstance()->select("SELECT idComm, name, email, message, title, date FROM commets");
        $arr = array();
        if ($result['result'] == true) {
            
            $count = $result['resultCount'];
            $arr['result'] = array();
            for($i = 0; $i < $count; $i++){
                $arn = array();
                
                $arn['idComm'] = $result['resultData'][$i][0];
                $arn['name'] = $result['resultData'][$i][1];
                $arn['email'] = $result['resultData'][$i][2];
                $arn['message'] = $result['resultData'][$i][3];
                $arn['title'] = $result['resultData'][$i][4];
                $arn['date'] = $result['resultData'][$i][5];
                
                array_push($arr['result'], $arn);
            }
            
            $arr['success'] = true;
        } else {
            $arr['success'] = false;
        }

        return $arr;
    }

     public function delete($data) {
        $arr = array();
        $id = $data->id;
        $result = Connection::getInstance()->insert("DELETE FROM commets WHERE idComm=".$id);

        $arr['success'] = true;
        $arr['message'] = 'some';

        return $arr;
    }
}
