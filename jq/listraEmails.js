$(document).ready(function(){

	$("#bListar").click(function(){

		$.ajax({
			type: "POST",
			dataType: "json",
			url: "php/listarXML.php",
			success: function(retorno) {

				var conteudo = "";
				conteudo += "<table>";
				conteudo += "<tr>";
				conteudo += "<td>" + retorno.destinatario + "</td>";

				conteudo += "<td>" + retorno.assunto + "</td>";

				conteudo += "<td>" + retorno. + "</td>";
				conteudo += "</tr>";

				conteudo += "</table>";

				$("#divEmail").html(conteudo);

			}
		});

	});


});
