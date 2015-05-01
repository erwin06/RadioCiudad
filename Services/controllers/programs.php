<?php

class Programs {

    /**
     * 
     * 
     */
    public function add($data) {
        $arr = array();
        $title = $data->title;
        $description = $data->description;
        $url = $data->url;
        $time = $data->time;

        $result = Connection::getInstance()->insert("INSERT INTO programs (title,description,url,time) VALUES (\"" . $title . "\",\"" . $description . "\",\"" . $url . "\",\"" . $time . "\")");

        $arr['success'] = true;
        $arr['message'] = 'some';

        return $arr;
    }

    public function get() {

        $result = Connection::getInstance()->select("SELECT idProgram, title, description, url, time FROM programs");
        $arr = array();
        if ($result['result'] == true) {
            
            $count = $result['resultCount'];
            $arr['result'] = array();
            for($i = 0; $i < $count; $i++){
                $arn = array();
                
                $arn['idProgram'] = $result['resultData'][$i][0];
                $arn['title'] = $result['resultData'][$i][1];
                $arn['description'] = $result['resultData'][$i][2];
                $arn['url'] = $result['resultData'][$i][3];
                $arn['time'] = $result['resultData'][$i][4];
                
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
        $result = Connection::getInstance()->insert("DELETE FROM programs WHERE idProgram=".$id);

        $arr['success'] = true;
        $arr['message'] = 'some';

        return $arr;
    }
}