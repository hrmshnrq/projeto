<?php
	$xml_string = file_get_contents("novoemail.xml");

	$xml_objeto = simplexml_load_string($xml_string);

	$retorno["destinatario"] = trim($xml_objeto->destinatario);
	$retorno["assunto"] = trim($xml_objeto->assunto);
	$retorno["filtro"] = trim($xml_objeto->filtro);
	$retorno["mensage"] = trim($xml_objeto->sobrenome);

	echo json_encode($retorno);
?>
