
// salvar em xml o novo usuario
$(document).ready(function(){
    $("#salvar").click(function(){
	

		var email = $("#E-mai").val();
		var nome = $("#Nome").val();
		var sobre = $("#Sobrenome").val();
		var senha = $("#Senha").val();

		$.ajax({
			type: "POST",
            url: "../php/php.php",
			success: function(retorno){
                
            }
	    })  
    });
});


// usuario e senha suspenso em ajax -> mudar para xml
$(document).ready(function(){
    $("#botao1").click(function(){
        validalogin();
    });
});

function validalogin (){
    var lusuario = $("#lusuario").val();
    var lsenha = $("#lsenha").val();
    
    if(lusuario==""){
        $("#lusuario").addClass("erro");
    }
       
    if(lsenha==""){
        $("#lsenha").addClass("erro");
    }
    if(lusuario !="" && lsenha != ""){
        $.ajax({

        type: "POST",
        url: "php/criarusuario.php",
        dataType: "json",
        data: {
            usuario: lusuario,
            senha: lsenha
        },
        success:(function(retorno){
            var emailxml = "";
            emailxml += retorno.email;
            var senhaxml = "";
            senhaxml += retorno.senha;
            
            if (lusuario == emailxml && lsenha == senhaxml){
                $(location).attr('href', 'sites/projeto.html');
            }
        })
        })
    }
}

$(document).ready(function(){
    $("#botao2").click(function(){
        passarpagina1();
    });
});
function passarpagina1 (){
    $(location).attr('href', 'sites/cadastro.html');
}



// função do botão cancelar em login
$(document).ready(function(){
    $("#cancelar").click(function(){
        passarpagina2();
    });
});
function passarpagina2 (){
    $(location).attr('href', '../index.html');
}