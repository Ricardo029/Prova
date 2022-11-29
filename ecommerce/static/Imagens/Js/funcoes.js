let temErro = 0; //Variavel que controla a existencia de erro nos campos
let tudoCerto = 0;
let i = 2;
let permissao = 0; //Variavel que controla se o botao cadastre-se funciona
let p = 0; //Determina o valor do projeto escolhido
let l1 = 0; //Determina o valor da lingua escolhida
let l2 = 0; //Determina o valor da lingua 2 escolhida
let l3 = 0; //Determina o valor da lingua 3 escolhida
let l4 = 0; //Determina o valor da lingua 4 escolhida
var l5 = 0; //Determina o valor da lingua 5 escolhida

function verificar(campo){
    switch(campo){
        case"email":
            let email = document.getElementById("email").value.trim();
            let alertaEmail = document.getElementById("alertaEmail");
            
            if(email == ""){ //Checa se o email está vazio
                document.getElementById("email").style.borderColor = "red";
                document.getElementById("email").style.borderWidth = "2px";
                alertaEmail.innerHTML = "Digite algo neste campo";
                alertaEmail.style.color = "red";
                temErro = 1;
            }
            else{
                if(email.length < 5){ //Checa se o email tem menos de 5 caracteres
                    document.getElementById("email").style.borderColor = "red";
                    document.getElementById("email").style.borderWidth = "2px";
                    alertaEmail.innerHTML = "Digite um email maior";
                    alertaEmail.style.color = "red";
                    temErro = 1;
                }
                else{
                    if(email.indexOf("@") !== email.lastIndexOf("@")){ //Checa se o email tem mais de um "@"
                        document.getElementById("email").style.borderColor = "red";
                        document.getElementById("email").style.borderWidth = "2px";
                        alertaEmail.innerHTML = "O email só pode conter um '@'";
                        alertaEmail.style.color = "red";
                        temErro = 1;
                    }
                    else{
                        if(email.includes(" ")){ //Checa se o email tem espacos vazios
                            document.getElementById("email").style.borderColor = "red";
                            document.getElementById("email").style.borderWidth = "2px";
                            alertaEmail.innerHTML = "O campo email não permite espaços em branco";
                            alertaEmail.style.color = "red";
                            temErro = 1;
                        }
                        else{
                            if(email.indexOf("@") == "-1" || email.indexOf(".com") == "-1"){ //Checa se o email contem os requisitos "@" e ".com"
                                document.getElementById("email").style.borderColor = "red";
                                document.getElementById("email").style.borderWidth = "2px";
                                alertaEmail.innerHTML = "Email inválido";
                                alertaEmail.style.color = "red";
                                temErro = 1;
                            }
                            else{
                                if(email.indexOf(".com") !== email.lastIndexOf(".com")){ //Checa se o email tem dois ".com"
                                    document.getElementById("email").style.borderColor = "red";
                                    document.getElementById("email").style.borderWidth = "2px";
                                    alertaEmail.innerHTML = "O email só pode conter um '.com'";
                                    alertaEmail.style.color = "red";
                                    temErro = 1;
                                }
                                else{
                                    if(email.indexOf(".com") < email.indexOf("@")){ //Checa se o .com vem depois do @
                                        document.getElementById("email").style.borderColor = "red";
                                        document.getElementById("email").style.borderWidth = "2px";
                                        alertaEmail.innerHTML = "Email inválido";
                                        alertaEmail.style.color = "red";
                                        temErro = 1;
                                    }
                                    else{
                                        if(email.indexOf(".com") == 0||email.indexOf("@") == 0||email.includes("..")||email.indexOf(".") == 0||email.indexOf(".")<email.indexOf("@")
                                        ||email.lastIndexOf(".")>email.indexOf(".com")){ //Checa se o email comeca com .com ou @
                                            document.getElementById("email").style.borderColor = "red";
                                            document.getElementById("email").style.borderWidth = "2px";
                                            alertaEmail.innerHTML = "Email inválido";
                                            alertaEmail.style.color = "red";
                                            temErro = 1;
                                        }
                                        else{ //Confere se tem caractere especial
                                            if(email.includes("$")||email.includes("*")||email.includes("&")||email.includes("%")||email.includes("!")||email.includes("ˆ")||email.includes("{")
                                            ||email.includes("`")||email.includes("-")||email.includes("=")||email.includes("+")||email.includes("|")||email.includes("}")
                                            ||email.includes("[")||email.includes("]")||email.includes(";")||email.includes(":")||email.includes("?")||email.includes("#")||email.includes("˜")
                                            ||email.includes(",")){
                                                document.getElementById("email").style.borderColor = "red";
                                                document.getElementById("email").style.borderWidth = "2px";
                                                alertaEmail.innerHTML = "Este campo não permite caracteres especiais";
                                                alertaEmail.style.color = "red";
                                                temErro = 1;
                                            }
                                            else{ //Tudo ok
                                                document.getElementById("email").style.borderColor = "";
                                                document.getElementById("email").style.borderWidth = "1px";
                                                alertaEmail.innerHTML = "";
                                                alertaEmail.style.color = "";
                                                temErro = 0;
                                                permissao++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            break;

        case"nome":
            let nome = document.getElementById("nome").value.trim();
            let alertaNome = document.getElementById("alertaNome");

            while(nome.includes("  ")){ //Corrige o nome caso o usuario tenha digitado mais de um espaço entre eles
                nome = nome.replace("  "," ");
            }

            if(nome == ""){ //Checa se o nome está vazio
                document.getElementById("nome").style.borderColor = "red";
                document.getElementById("nome").style.borderWidth = "2px";
                alertaNome.innerHTML = "Digite algo neste campo";
                alertaNome.style.color = "red";
                temErro = 1;
            }
            else{
                if(nome.length < 3){ //Caso o nome seja pequeno demais
                    document.getElementById("nome").style.borderColor = "red";
                    document.getElementById("nome").style.borderWidth = "2px";
                    alertaNome.innerHTML = "Digite um nome maior";
                    alertaNome.style.color = "red";
                    temErro = 1;
                }
                else{
                    if(nome.indexOf(" ") == "-1"){ //Caso o sobrenome nao seja digitado
                        document.getElementById("nome").style.borderColor = "red";
                        document.getElementById("nome").style.borderWidth = "2px";
                        alertaNome.innerHTML = "Digite seu sobrenome";
                        alertaNome.style.color = "red";
                        temErro = 1;
                    }
                    else{ //Confere se o campo tem algum caractere especial
                        if(nome.includes("$")||nome.includes("*")||nome.includes("&")||nome.includes("%")||nome.includes("!")||nome.includes("ˆ")||nome.includes("{")
                        ||nome.includes("`")||nome.includes("@")||nome.includes("-")||nome.includes("=")||nome.includes("+")||nome.includes("|")||nome.includes("}")
                        ||nome.includes("[")||nome.includes("]")||nome.includes(";")||nome.includes(":")||nome.includes("?")||nome.includes("#")||nome.includes("˜")
                        ||nome.includes(",")){
                            document.getElementById("nome").style.borderColor = "red";
                            document.getElementById("nome").style.borderWidth = "2px";
                            alertaNome.innerHTML = "Este campo não permite caracteres especiais";
                            alertaNome.style.color = "red";
                            temErro = 1;
                        }
                        else{ //Confere se o campo tem números
                            if(nome.includes("1")||nome.includes("2")||nome.includes("3")||nome.includes("4")||nome.includes("5")
                            ||nome.includes("6")||nome.includes("7")||nome.includes("8")||nome.includes("9")||nome.includes("0")){
                                document.getElementById("nome").style.borderColor = "red";
                                document.getElementById("nome").style.borderWidth = "2px";
                                alertaNome.innerHTML = "Este campo não permite números";
                                alertaNome.style.color = "red";
                                temErro = 1;
                            }
                            else{ //Tudo ok
                                document.getElementById("nome").style.borderColor = "";
                                document.getElementById("nome").style.borderWidth = "1px";    
                                alertaNome.innerHTML = "&nbsp";                            
                                alertaNome.style.color = "";
                                temErro = 0;
                                permissao++;
                                document.getElementById("nome").value = nome;

                            }
                        }
                    }
                }
            }
            break;
        
        case"usuario": 
            let usuario = document.getElementById("usuario").value.trim();
            let alertaUsuario = document.getElementById("alertaUsuario");

            if(usuario == ""){ //Checa se usuario está vazio
                document.getElementById("usuario").style.borderColor = "red";
                document.getElementById("usuario").style.borderWidth = "2px";
                alertaUsuario.innerHTML = "Digite algo neste campo";
                alertaUsuario.style.color = "red";
                temErro = 1;
            }
            else{
                if(usuario.length < 5){ //Confere se o nome de usuário tem no mínimo 5 caracteres
                    document.getElementById("usuario").style.borderColor = "red";
                    document.getElementById("usuario").style.borderWidth = "2px";
                    alertaUsuario.innerHTML = "Este campo deve conter mais de 5 caracteres";
                    alertaUsuario.style.color = "red";
                    temErro = 1;
                }
                else{
                    if(usuario.includes(" ")){ //Confere se o nome de usuario tem algum espaco
                        document.getElementById("usuario").style.borderColor = "red";
                        document.getElementById("usuario").style.borderWidth = "2px";
                        alertaUsuario.innerHTML = "Este campo não permite espaços em branco";
                        alertaUsuario.style.color = "red";
                        temErro = 1;
                    }
                    else{ //Confere se o nome de usuario contem algum caractere especial
                        if(usuario.includes("$")||usuario.includes("*")||usuario.includes("&")||usuario.includes("%")||usuario.includes("!")||usuario.includes("ˆ")||usuario.includes("{")
                        ||usuario.includes("`")||usuario.includes("@")||usuario.includes("-")||usuario.includes("=")||usuario.includes("+")||usuario.includes("|")||usuario.includes("}")
                        ||usuario.includes("[")||usuario.includes("]")||usuario.includes(";")||usuario.includes(":")||usuario.includes("?")||usuario.includes("#")||usuario.includes("˜")
                        ||usuario.includes(",")){
                            document.getElementById("usuario").style.borderColor = "red";
                            document.getElementById("usuario").style.borderWidth = "2px";
                            alertaUsuario.innerHTML = "Este campo não permite caracteres especiais";
                            alertaUsuario.style.color = "red";
                            temErro = 1;
                        }
                        else{ //Tudo certo
                            document.getElementById("usuario").style.borderColor = "";
                            document.getElementById("usuario").style.borderWidth = "1px";
                            alertaUsuario.innerHTML = "";
                            alertaUsuario.style.color = "";
                            temErro = 0;
                            permissao++;
                        }
                    }
                }
            }
            break;
        
        case"senha":
            let senha = document.getElementById("senha").value;
            let alertaSenha = document.getElementById("alertaSenha");

            if(senha == ""){ //Confere se o campo senha está em branco
                document.getElementById("senha").style.borderColor = "red";
                document.getElementById("senha").style.borderWidth = "2px";
                alertaSenha.innerHTML = "Digite algo neste campo";
                alertaSenha.style.color = "red";
                temErro = 1;
            }
            else{
                if(senha.length < 5){ //Confere se a senha tem mais de 5 digitos
                    document.getElementById("senha").style.borderColor = "red";
                    document.getElementById("senha").style.borderWidth = "2px";
                    alertaSenha.innerHTML = "Sua senha deve conter mais de 5 caracteres";
                    alertaSenha.style.color = "red";
                    temErro = 1;
                }
                else{
                    if(senha.includes("123")||senha.includes("321")){ //Confere se a senha é obvia (123)
                        document.getElementById("senha").style.borderColor = "red";
                        document.getElementById("senha").style.borderWidth = "2px";
                        alertaSenha.innerHTML = "Senha muito fraca";
                        alertaSenha.style.color = "red";
                        temErro = 1;
                    }
                    else{ //Tudo certo
                        document.getElementById("senha").style.borderColor = "";
                        document.getElementById("senha").style.borderWidth = "1px";
                        alertaSenha.innerHTML = "";
                        alertaSenha.style.color = "";
                        temErro = 0;
                        permissao++;
                    }
                }
            }
            break;

        case"cpf":
            let cpf = document.getElementById("cpf").value.trim().toUpperCase();

            while(cpf.includes(" ")||cpf.includes(".")||cpf.includes("-")){ //Corrige o cpf caso o usuario tenha digitado um espaço entre eles
                cpf = cpf.replace(" ","");
                cpf = cpf.replace(".","");
                cpf = cpf.replace("-","");
            }

            if(cpf == ""){ //Checa se o campo está vazio
                document.getElementById("cpf").style.borderColor = "red";
                document.getElementById("cpf").style.borderWidth = "2px";
                alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                temErro = 1;
            }
            else{
                if(cpf.length !== 11){ //Checa se o cpf tem 11 dígitos
                    document.getElementById("cpf").style.borderColor = "red";
                    document.getElementById("cpf").style.borderWidth = "2px";
                    alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                    temErro = 1;
                }
                else{ //Checa se o cpf contem caractere especial ou letras
                    if(cpf.includes("$")||cpf.includes("*")||cpf.includes("&")||cpf.includes("%")||cpf.includes("!")||cpf.includes("ˆ")||cpf.includes("{")
                    ||cpf.includes("`")||cpf.includes("-")||cpf.includes("=")||cpf.includes("+")||cpf.includes("|")||cpf.includes("}")||cpf.includes(".")
                    ||cpf.includes("[")||cpf.includes("]")||cpf.includes(";")||cpf.includes(":")||cpf.includes("?")||cpf.includes("#")||cpf.includes("˜")
                    ||cpf.includes(",")||cpf.includes("A")||cpf.includes("B")||cpf.includes("C")||cpf.includes("D")||cpf.includes("E")||cpf.includes("F")
                    ||cpf.includes("G")||cpf.includes("H")||cpf.includes("I")||cpf.includes("J")||cpf.includes("K")||cpf.includes("L")||cpf.includes("M")
                    ||cpf.includes("N")||cpf.includes("O")||cpf.includes("P")||cpf.includes("Q")||cpf.includes("R")||cpf.includes("S")||cpf.includes("T")
                    ||cpf.includes("U")||cpf.includes("V")||cpf.includes("W")||cpf.includes("X")||cpf.includes("Y")||cpf.includes("Z")||cpf.includes("Ç")){
                        document.getElementById("cpf").style.borderColor = "red";
                        document.getElementById("cpf").style.borderWidth = "2px";
                        alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                        temErro = 1;
                    }
                    else{
                        if(cpf.includes("11111")||cpf.includes("22222")||cpf.includes("33333")||cpf.includes("44444")||cpf.includes("55555")||
                        cpf.includes("66666")||cpf.includes("77777")||cpf.includes("88888")||cpf.includes("99999")||cpf.includes("00000")){
                            document.getElementById("cpf").style.borderColor = "red";
                            document.getElementById("cpf").style.borderWidth = "2px";
                            alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                            temErro = 1;
                        }
                        else{ //Tudo ok e poe a máscara no cpf
                            let cpf1 = cpf.substring(0,3);
                            let cpf2 = cpf.substring(3,6);
                            let cpf3 = cpf.substring(6,9);
                            let cpf4 = cpf.substring(9,11);
                            cpf = cpf1+"."+cpf2+"."+cpf3+"-"+cpf4;   
                            document.getElementById("cpf").value = cpf;
                            document.getElementById("cpf").style.borderColor = "";
                            document.getElementById("cpf").style.borderWidth = "1px";
                            alertaGeral.innerHTML = "";
                            temErro = 0;
                            permissao++;
                        }
                    }
                }
            }
        break;

        case"numero":
            let numero = document.getElementById("numero").value.trim().toUpperCase();

            while(numero.includes(" ")||numero.includes("(")||numero.includes(")")||numero.includes("-")){ //Corrige o cpf caso o usuario tenha digitado um espaço entre eles
                numero = numero.replace(" ","");
                numero = numero.replace("(","");
                numero = numero.replace(")","");
                numero = numero.replace("-","");
            }

            while(numero.indexOf("0") == 0){
                numero = numero.substring(1, numero.length);
            }

            if(numero == ""){ //Checa se o campo está vázio
                document.getElementById("numero").style.borderColor = "red";
                document.getElementById("numero").style.borderWidth = "2px";
                alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                temErro = 1;
            }
            else{
                if(numero.length !== 11){ //Checa se o numero tem 11 digitos
                    document.getElementById("numero").style.borderColor = "red";
                    document.getElementById("numero").style.borderWidth = "2px";
                    alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                    temErro = 1;
                }
                else{
                    if(numero.includes("$")||numero.includes("*")||numero.includes("&")||numero.includes("%")||numero.includes("!")||numero.includes("ˆ")||numero.includes("{")
                    ||numero.includes("`")||numero.includes("-")||numero.includes("=")||numero.includes("+")||numero.includes("|")||numero.includes("}")||numero.includes(".")
                    ||numero.includes("[")||numero.includes("]")||numero.includes(";")||numero.includes(":")||numero.includes("?")||numero.includes("#")||numero.includes("˜")
                    ||numero.includes(",")||numero.includes("A")||numero.includes("B")||numero.includes("C")||numero.includes("D")||numero.includes("E")||numero.includes("F")
                    ||numero.includes("G")||numero.includes("H")||numero.includes("I")||numero.includes("J")||numero.includes("K")||numero.includes("L")||numero.includes("M")
                    ||numero.includes("N")||numero.includes("O")||numero.includes("P")||numero.includes("Q")||numero.includes("R")||numero.includes("S")||numero.includes("T")
                    ||numero.includes("U")||numero.includes("V")||numero.includes("W")||numero.includes("X")||numero.includes("Y")||numero.includes("Z")||numero.includes("Ç")){
                    //Checa se tem algum caractere especial ou letra no numero
                        document.getElementById("numero").style.borderColor = "red";
                        document.getElementById("numero").style.borderWidth = "2px";
                        alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                        temErro = 1;
                    }
                    else{ //Checa se tem muitos caracteres repetidos
                        if(numero.includes("11111111")||numero.includes("22222222")||numero.includes("33333333")||numero.includes("44444444")||numero.includes("55555555")||
                        numero.includes("66666666")||numero.includes("77777777")||numero.includes("88888888")||numero.includes("99999999")||numero.includes("00000000")){
                            document.getElementById("numero").style.borderColor = "red";
                            document.getElementById("numero").style.borderWidth = "2px";
                            alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                            temErro = 1;
                        }
                        else{ //Tudo ok e coloca a máscara no número
                            let n1 = numero.substring(0,2);
                            let n2 = numero.substring(2,7);
                            let n3 = numero.substring(7,11);
                            numero = "(0"+n1+")"+" "+n2+"-"+n3;
                            document.getElementById("numero").style.borderColor = "";
                            document.getElementById("numero").style.borderWidth = "1px";
                            alertaGeral.innerHTML = "";
                            temErro = 0;
                            permissao++;
                            document.getElementById("numero").value = numero;
                        } 
                    }
                }
            }
        break;

        case"cidade":
            let cidade = document.getElementById("cidade").value.trim();

            while(cidade.includes("  ")){ //Corrige o campo caso o usuario tenha digitado um duplo espaço entre eles
                cidade = cidade.replace("  "," ");
            }

            if(cidade.length == 2){
                cidade = cidade.toUpperCase();
            }

            if(cidade == ""){
                document.getElementById("cidade").style.borderColor = "red";
                document.getElementById("cidade").style.borderWidth = "2px";
                alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                temErro = 1;
            }
            else{
                if(cidade.length < 2){
                    document.getElementById("cidade").style.borderColor = "red";
                    document.getElementById("cidade").style.borderWidth = "2px";
                    alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                    temErro = 1;
                }
                else{
                    if(cidade.includes("$")||cidade.includes("*")||cidade.includes("&")||cidade.includes("%")||cidade.includes("!")||cidade.includes("ˆ")||cidade.includes("{")
                    ||cidade.includes("`")||cidade.includes("-")||cidade.includes("=")||cidade.includes("+")||cidade.includes("|")||cidade.includes("}")||cidade.includes(".")
                    ||cidade.includes("[")||cidade.includes("]")||cidade.includes(";")||cidade.includes(":")||cidade.includes("?")||cidade.includes("#")||cidade.includes("˜")
                    ||cidade.includes(",")||cidade.includes("2")||cidade.includes("3")||cidade.includes("4")||cidade.includes("5")||cidade.includes("6")||cidade.includes("7")
                    ||cidade.includes("8")||cidade.includes("9")||cidade.includes("0")){
                        document.getElementById("cidade").style.borderColor = "red";
                        document.getElementById("cidade").style.borderWidth = "2px";
                        alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                        temErro = 1;
                    }
                    else{
                        document.getElementById("cidade").style.borderColor = "";
                        document.getElementById("cidade").style.borderWidth = "1px";
                        alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                        temErro = 0;
                        document.getElementById("cidade").value = cidade;
                        permissao++;
                    }
                }
            }
            break;

        case"faleConosco":
            let faleConosco = document.getElementById("faleConosco").value.trim();

            while(faleConosco.includes("  ")){ //Substitui duplos espaços
                faleConosco = faleConosco.replace("  "," ");
            }

            if(faleConosco == ""){ //Checa se o campo está vazio
                document.getElementById("faleConosco").style.borderColor = "red";
                document.getElementById("faleConosco").style.borderWidth = "2px";
                alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                temErro = 1;
            }
            else{
                if(faleConosco.length < 5){ //Checa se tem no mínimo 5 caracteres
                    document.getElementById("faleConosco").style.borderColor = "red";
                    document.getElementById("faleConosco").style.borderWidth = "2px";
                    alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                    temErro = 1;
                }
                else{ //Tudo ok
                    document.getElementById("faleConosco").style.borderColor = "";
                    document.getElementById("faleConosco").style.borderWidth = "1px";
                    alertaGeral.innerHTML = "";
                    temErro = 0;
                    permissao++;
                    document.getElementById("faleConosco").value = faleConosco;
                }
            }
            break;

            case"select0":
                let selecte0 = document.getElementById("select0").value;

                if(selecte0 == 1){
                    document.getElementById("select0").style.borderColor = "red";
                    document.getElementById("select0").style.borderWidth = "2px";
                    alertaGeral.innerHTML = "Corrija o(s) campo(s) inválidos";
                    temErro = 1;
                }
                else{
                    document.getElementById("select0").style.color = "";
                    alertaGeral.innerHTML = "";
                    temErro = 0;
                }
            break;
        }
    }

var auxiliar = 0; //Variavel que verifica se algum dos campos foi preenchido para permitir o botao de enviar
var auxiliar2 = 0; //Variavel que verifica se algum dos campos foi preenchido para permitir o botao de enviar
var auxiliar3 = 0; //Variavel que verifica se algum dos campos foi preenchido para permitir o botao de enviar
var project;

function orcamento(projeto){
    switch(projeto){
        case"app":
            p = 6000;
            document.getElementById("valor").innerHTML = p+l1+l2+l3+l4+l5+",00";
            auxiliar = 1;
            document.getElementById("falaProjeto").innerHTML = "aplicativo:";
            document.getElementById("falaProjeto2").innerHTML = "aplicativo";
            document.getElementById("fraseProjetoValor").innerHTML = "aplicativo";
            project = 1;
            console.log(project)
            break;
            
        case"site":
            p = 3000;
            document.getElementById("valor").innerHTML = p+l1+l2+l3+l4+l5+",00";
            auxiliar = 1;
            document.getElementById("falaProjeto").innerHTML = "site:";
            document.getElementById("falaProjeto2").innerHTML = "site";
            document.getElementById("fraseProjetoValor").innerHTML = "site";
            project = 2;
            console.log(project)
            break;
                  
        case"programa":
            p = 4000;
            document.getElementById("valor").innerHTML = p+l1+l2+l3+l4+l5+",00";
            auxiliar = 1;
            document.getElementById("falaProjeto").innerHTML = "programa:";
            document.getElementById("falaProjeto2").innerHTML = "programa";
            document.getElementById("fraseProjetoValor").innerHTML = "programa";
            project = 3;
            console.log(project)
            break;
            
        case"l1": 
            l1 = 300;
            document.getElementById("valor").innerHTML = p+l1+l2+l3+l4+l5+",00";  
            auxiliar2 = 1; 
            break;

        case"l2":
            l2 = 0;
            document.getElementById("valor").innerHTML = p+l1+l2+l3+l4+l5+",00"; 
            auxiliar2 = 1;   
            break;
        
        case"l3":
            l3 = 300;
            document.getElementById("valor").innerHTML = p+l1+l2+l3+l4+l5+",00"; 
            auxiliar2 = 1;   
            break;  
            
        case"l4":
            l4 = 400;
            document.getElementById("valor").innerHTML = p+l1+l2+l3+l4+l5+",00";  
            auxiliar2 = 1;  
            break;

        case"l5":
            l5 = 600;
            document.getElementById("valor").innerHTML = p+l1+l2+l3+l4+l5+",00"; 
            auxiliar2 = 1;   
            break;  

        case"p":
            auxiliar3 = 1;
    }
    if(auxiliar == 1 && auxiliar2 == 1 && auxiliar3 == 1){
        permissao++;
    }
}

function enviar(){
    if(temErro == 0 && permissao == 1){
        window.open("fale_conosco_page2.html");
    }
}

function radios(){
    if(document.getElementById("tipo1").checked == false || document.getElementById("tipo2").checked == false ||
    document.getElementById("tipo3").checked == false){
        document.getElementById("fraseOrcamento").style.color = 'red';
    }
    else{
        document.getElementById("fraseOrcamento").style.color = '';
    }
    
    if(document.getElementById("tipo4").checked == false || document.getElementById("tipo5").checked == false ||
    document.getElementById("tipo6").checked == false ||document.getElementById("tipo7").checked == false||
    document.getElementById("tipo8").checked == false){
        document.getElementById("fraseLinguas").style.color = 'red';
    }
    else{
        document.getElementById("fraseLinguas").style.color = '';
    }

    if(document.getElementById("2tipo4").checked == false || document.getElementById("2tipo5").checked == false ||
    document.getElementById("2tipo6").checked == false ||document.getElementById("2tipo7").checked == false ||
    document.getElementById("2tipo8").checked == false){
        document.getElementById("fraseProjetoPara").style.color = 'red';
    }
    else{
        document.getElementById("fraseProjetoPara").style.color = '';
    }
}

function prosseguir(){
    verificar("nome");
    verificar("email");
    verificar("numero");
    verificar("cpf");
    verificar("cidade");
    verificar("faleConosco");
    verificar("select0");
    radios();

    if(temErro == 0 && document.getElementById("nome").value !== "" && document.getElementById("email").value !== "" &&
    document.getElementById("numero").value !== "" && document.getElementById("cpf").value !== "" && document.getElementById("cidade").value !== "" &&
    document.getElementById("faleConosco").value !== "" && document.getElementById("select0").value !== "1"){
        if(document.getElementById("tipo1").checked == true || document.getElementById("tipo2").checked == true ||
        document.getElementById("tipo3").checked == true){
            if(document.getElementById("tipo4").checked == true || document.getElementById("tipo5").checked == true ||
            document.getElementById("tipo6").checked == true ||document.getElementById("tipo7").checked == true||
            document.getElementById("tipo8").checked == true){
                if(document.getElementById("2tipo4").checked == true || document.getElementById("2tipo5").checked == true ||
                document.getElementById("2tipo6").checked == true ||document.getElementById("2tipo7").checked == true ||
                document.getElementById("2tipo8").checked == true){
                    window.open("orcamento_page2.html");
                }
            }
        }            
    }
}