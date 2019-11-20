$(document).ready(function(){


	$("#caixaentrada").click(function(){

//para a Lista de Emails da Caixa de Entrada: 
	var remetente = $("#remetente").val();
	var assunto = $("#assunto").val();
	var msg = $("#msg").val();

	$.ajax({
		type: "POST",
		url: "../php/listaremails.php",
		dataType: "json",
		data:{
			ajaxRemetente: remetente,
			ajaxAssunto: assunto,
			ajaxMsg: msg
		},
		success: function(retorno){
			var conteudo = "";
				var c = 0;

				while(c < 13){
					conteudo += "<table>";
					conteudo += "<tr >";
					conteudo += "<td >" + "<img src = '../imagens/usericon.png>" + "</td>";
					conteudo += "<td >" + "<b>" + retorno.remetente + "</b>" + "</td>";
					conteudo += "<td >" + "    " + "</td>";
					conteudo += "<td >" + "<b>" + retorno.assunto + "</b>" + "</td>";
					conteudo += "<td >" + "    " + "</td>";
					conteudo += "<td >" + retorno.msg + "</td>";
					conteudo += "</tr>";

					conteudo += "</table>";

					c++;

		}
		$("#listinha").html(conteudo);
	}
	})

//chama a lista de Emails da Caixa de Entrada:
	$("#caixaenviados").click(function(){

		$.ajax({
			type:"POST",
			dataType: "json",
			url:"../php/listarenviados.php",
			
			success: function(retorno){

				var conteudo = "";
				var c = 0;

				while(c < 13){
					conteudo += "<table>";
					conteudo += "<tr >";
					conteudo += "<td >" + "<img src = '../imagens/usericon.png>" + "</td>";
					conteudo += "<td >" + "<b>" + retorno.destino + "</b>" + "</td>";
					conteudo += "<td >" + "    " + "</td>";
					conteudo += "<td >" + "<b>" + retorno.cc + "</b>" + "</td>";
					conteudo += "<td >" + "    " + "</td>";
					conteudo += "<td >" + "<b>" + retorno.assunto + "</b>" + "</td>";
					conteudo += "<td >" + "    " + "</td>";
					conteudo += "<td >" + retorno.msg + "</td>";
					conteudo += "</tr>";

					conteudo += "</table>";

					c++;
				}

				$("#listinha").html(conteudo);
			}
		})
	})
})
})