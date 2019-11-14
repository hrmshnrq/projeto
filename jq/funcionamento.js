// Pagina de cadastro
$(document).ready(function(){
    $("#salvar").click(function(){
        fLocalValidaCampos();
    });
});
//adicionar classe erro
function fLocalValidaCampos (){
    var nome = $("#Nome").val();
    var sobrenome = $("#Sobrenome").val();
    var email = $("#E-mail").val();
    var senha = $("#Senha").val();
    var confirmarSenha = $("#ConfirmarSenha").val();

    if(nome==""){
        $("#Nome").addClass("erro");
    }
    if(sobrenome==""){
        $("#Sobrenome").addClass("erro");
    }
    if(email==""){
        $("#E-mail").addClass("erro");
    }
    if(senha==""){
        $("#Senha").addClass("erro");
    }
    if(confirmarSenha==""){
        $("#ConfirmarSenha").addClass("erro");
    }
    /*if(usuario !="" && email !="" && sobrenome !="" && nome !="" && senha == confirmarSenha ){
        $(location).attr('href', '../index.html');
    }*/
}
// salvar em xml o novo usuario
$(document).ready(function(){

	form();

})

function form(){

	$("#salvar").click(function(){

		var email = $("#E-mai").val();
		var nome = $("#Nome").val();
		var sobre = $("#Sobrenome").val();
		var senha = $("#Senha").val();

		$.ajax({
			type: "POST",
			url: "php/php.php",
			dataType: "json",
			data:{

				cpf: cpf,
				email: email,
				nome: nome,
				sobrenome: sobre,
				senha: senha,
			},
			success: function(retorno){

			}
		})
	})














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
    $.ajax({

        type: "POST",
        url: "php/php.php",
        dataType: "json",
        data: {
            pessoa: $("#lusuario").val(),
            senhadapessoa: $("#lsenha").val(),
        },
        success:(function(retorno){
            alert(retorno.mensagem);

        })
    })
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

// Pesquisar no projeto
/*$(document).ready(function(){
    $("#pesquisar").click(function(){
        pesquisarDoProjeto();
    });
});

function pesquisarDoProjeto (){
    var nome = $("#pesquisar").val();
}*/
