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
 $xml_email = $xml->createElement("email");
 $xml_assunto = $xml->createElement("assunto");
 $xml_destinatario = $xml->createElement("destinatario");
 $xml_mensagem = $xml->createElement("mensagem");
 $xml_filtro = $xml->createElement("filtro");


 //destinatario, titulo e texto recebidos no teclado
 $xml_titulo = $xml->createElement("titulo", "nome do titulo");
 $xml_texto = $xml->createElement("texto", "texto que entra no teclado");
 $xml_destinatario = $xml->createElement("nome", "nome recebido no teclado");
 $xml_filtroNome = $xml->createElement("nome", "nome recebido no teclado");
 
 //criancas
 $xml_email->appendChild($xml_assunto);
 $xml_email->appendChild($xml_destinatario);
 $xml_email->appendChild($xml_titulo);
 $xml_email->appendChild($xml_mensagem);
 $xml_filtro->appendChild($xml_filtroNome);
 $xml_email->appendChild($xml_filtro);

 $xml->appendChild($xml_email);
 $xml->save("novoemail.xml");



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
 $xml_matricula = $xml->createElement("matricula", $matricula);

 
 //criancas
 $xml_usuario->appendChild($xml_conteudoEmail);
 $xml_usuario->appendChild($xml_nome);
 $xml_nome->appendChild($xml_nome1);
 $xml_nome->appendChild($xml_sobrenome);
 $xml_usuario->appendChild($xml_matricula);
 $xml_usuario->appendChild($xml_senha);
 $xml_dados->appendChild($usuario);
 $xml_dados->appendChild($nome);

 $xml->appendChild($xml_dados);

 $xml->save("novoemail.xml");
?>