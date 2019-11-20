<?php
    // Salvando dados em variáveis php
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $xml = new DOMDocument("1.0");
    $xml->formatOutput = true;

    // elementos
    $xml_usuario = $xml->createElement("usuarior");
    $xml_nome = $xml->createElement("nome", $nome);
    $xml_sobrenome = $xml->createElement("sobrenome", $sobrenome);
    $xml_email = $xml->createElement("email", $email);
    $xml_senha = $xml->createElement("sennha", $senha);

    // crinaças
    $xml_usuario->appendChild( $xml_nome );
    $xml_usuario->appendChild( $xml_sobrenome );
    $xml_usuario->appendChild( $xml_email );
    $xml_usuario->appendChild( $xml_senha );

    $xml->appendChild( $xml_user );

    $xml->save("../xml/".$email.".xml");
    echo json_encode("Conta criada com sucesso!!");

?>
