<?php
   $a = file_get_contents("../xml/mensagem.xml");
   $b = simplexml_load_string($a);
   
   $mensagem["email"] = trim($b->email);
   $mensagem["nome"] = trim($b->nome);
   $mensagem["sobrenome"] = trim($b->sobrenome);
   $mensagem["senha"] = trim($b->senha);
?>
