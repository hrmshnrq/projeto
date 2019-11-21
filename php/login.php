<?php

$email = $_POST["usuario"];
$senha = $_POST["senha"];

session_start();
$_SESSION['signedIn'] = $email;

$xml_string = file_get_contents("../xml/dados.xml");
$xml_object = simplexml_load_string($xml_string);

// abrindo elemento senha
$retorno["senha"] = trim($b->senha);

echo json_encode($retono);
?>