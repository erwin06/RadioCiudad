<?php

class Comments {

    static function addComment($data) {

        $name = isset($data->name) ? $data->name : null;
        $email = isset($data->email) ? $data->email : "";
        $subject = isset($data->subject) ? $data->subject : "";
        $message = isset($data->message) ? $data->message : null;

        if(isset($name) && isset($message)){
            $mysqli = Connection::getInstance()->getDB();
            if ($stmt = $mysqli->prepare("INSERT INTO comments (`from`, `email`, `subjet`, `message`) VALUES (?,?,?,?)")) {
                $stmt->bind_param("ssss", $name, $email, $subject, $message);
                if($stmt->execute()){
                    $response = new Response(true, "Comentario enviado. Gracias!");
                }
            }
        }

        if(isset($stmt)) $stmt->close();

        return isset($response) ? $response->getResponse() : Error::genericError();
    }
}