<?php
    $pessoa = $_POST["pessoa"];
    $senhadapessoa = $_POST["senhadapessoa"];
    
    if($pessoa == "exemplo@gmail.com" && $senhadapessoa == 12345){
        $retorno["status"] = "s";
        $retorno["mensagem"] = "usuario autenticado";
    }
    
    else{
        $retorno["status"] = "n";
        $retorno["mensagem"] = "usuario nao autenticado";
    }

    $retorno_json = json_encode($retorno);
    echo $retorno_json;



    $xml = new DOMDocument("1.0");

 //estruturas
 $cpf = $_POST["cpf"];
 $mail = $_POST["email"];
 $nome = $_POST["nome"];
 $sobre = $_POST["sobrenome"];
 $senha = $_POST["senha"];

 $xml = new DOMDocument("1.0");

 $dados = $xml->createElement("dados");

 $xml_cpf = $xml->createElement("cpf", $cpf);
 $xml_email = $xml->createElement("email", $mail);
 $xml_nome = $xml->createElement("nome", $nome);
 $xml_sobre = $xml->createElement("sobrenome", $sobre);
 $xml_num = $xml->createElement("senha", $senha);

 $dados->appendChild($xml_cpf);
 $dados->appendChild($xml_email);
 $dados->appendChild($xml_nome);
 $dados->appendChild($xml_sobre);
 $dados->appendChild($xml_end);
 $dados->appendChild($xml_num);

 $xml->appendChild($dados);

 $xml->save("dados.xml");

 echo json_encode("xml criado");



// novo usuario, pagina de cadastro
 $xml = new DOMDocument("1.0");

 //estruturas
 $xml_dados = $xml->creatElement("dados");
 $xml_conteudoEmail = $xml->createElement("email");
 $xml_senha = $xml->createElement("senha");
 $xml_usuario = $xml->createElement("usuario");
 $xml_nome = $xml->createElement("nome");

 //destinatario, titulo e texto recebidos no teclado
 $xml_nome1 = $xml->createElement("nome", $nome);
 $xml_senha = $xml->createElement("senha", $senha);
 $xml_sobrenome = $xml->createElement("sobrenome", $sobrenome);

 
 //criancas
 $xml_usuario->appendChild($xml_conteudoEmail);
 $xml_usuario->appendChild($xml_nome);
 $xml_nome->appendChild($xml_nome1);
 $xml_nome->appendChild($xml_sobrenome);
 $xml_usuario->appendChild($xml_senha);
 $xml_dados->appendChild($usuario);
 $xml_dados->appendChild($nome);

 $xml->appendChild($xml_dados);

 $xml->save("novousuario.xml");
?>
