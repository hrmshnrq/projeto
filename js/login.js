$("#botao1").click(function() {
        var empty = 0;
        $("input").each(function(){
            if (!$(this).val()){
                empty = 1;
            }
        });


        // Fazendo chamada ajax caso os inputs estejam corretos
        if (empty == 1) {
            alert("Usuário ou senha em branco!")
        } else {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "php/login.php",
                data: {

                    //mudar dados





                    //


                    //mudar dados


                    //
                    email: $("#idx-mMail").val(),
                    senha: $("#idx-pPass").val()
                
                
                
                    //mudar dados

                    //mudar dados
                
                
                    //
                },
                success: function(retorno){
                    if (retorno == 1){
                        window.location.href="view/mailbox/mailbox.html";
                    } else {
                        alert("Usuário ou senha incorretos!");
                    }
                }
                
            });
        }
    });

    // Definindo caminho a ser seguido quando o botão Cadastrar for selecionado
    $("#idx-btnSign").click(function(){
        window.location.href="view/register/register.html";
    });