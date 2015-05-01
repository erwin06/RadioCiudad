<?php

class News {

    /**
     * 
     * 
     */
    public function addNew($data) {
        $arr = array();
        $title = $data->title;
        $description = $data->description;
        $url = $data->imgName;

        $result = Connection::getInstance()->insert("INSERT INTO news (title,description,url,date) VALUES (\"" . $title . "\",\"" . $description . "\",\"" . $url . "\",now())");

        $arr['success'] = true;
        $arr['message'] = 'some';

        return $arr;
    }

    public function getNews() {

        $result = Connection::getInstance()->select("SELECT idNew, title, description, url, date FROM news");
        $arr = array();
        if ($result['result'] == true) {
            
            $count = $result['resultCount'];
            $arr['result'] = array();
            for($i = 0; $i < $count; $i++){
                $arn = array();
                
                $arn['idNew'] = $result['resultData'][$i][0];
                $arn['title'] = $result['resultData'][$i][1];
                $arn['description'] = $result['resultData'][$i][2];
                $arn['url'] = $result['resultData'][$i][3];
                $arn['date'] = $result['resultData'][$i][4];
                
                array_push($arr['result'], $arn);
            }
            
            $arr['success'] = true;
        } else {
            $arr['success'] = false;
        }

        return $arr;
    }

     public function deleteNew($data) {
        $arr = array();
        $id = $data->id;
        Logg::loggInfo("DELETE FROM news WHERE idNew=".$id);
        $result = Connection::getInstance()->insert("DELETE FROM news WHERE idNew=".$id);

        $arr['success'] = true;
        $arr['message'] = 'some';

        return $arr;
    }
}
