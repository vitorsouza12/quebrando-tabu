$(document).ready(function(){
    // Função que exibe e oculta a navbar
    function exibirNavBar(){
        // Verifica se navbar NÃO possui classe 'responsiva'
        if(!$("#navBar").hasClass("responsiva")){
            $("#navBar").addClass("responsiva");
            $("#iconeMenu").removeClass("bi-list");
            $("#iconeMenu").addClass("bi-x");
        }else{
            $("#navBar").removeClass("responsiva");
            $("#iconeMenu").removeClass("bi-x");
            $("#iconeMenu").addClass("bi-list");
        }
    }

    // Função que exibe e oculta os botões de acessibilidade
    function exibirBtns(){
        $(".btn-acessibilidade").toggleClass("btn-ativo");
    }

    // Função que troca o tema da página
    function mudarTema(){
        // Verifica se corpo da página NÃO possui classe 'tema-escuro'
        if(!$(document.body).hasClass("tema-escuro")){
            $(document.body).addClass("tema-escuro");
            $("#iconeTema").removeClass("bi-moon-fill");
            $("#iconeTema").addClass("bi-sun-fill");
        }else{
            $(document.body).removeClass("tema-escuro");
            $("#iconeTema").removeClass("bi-sun-fill");
            $("#iconeTema").addClass("bi-moon-fill");
        }
    }

    // Função que altera o tamanho da fonte
    function alterarTamFonte(event){
        // Verifica se ação definida é de aumentar tamanho
        if(event.data.acao === "aumentar"){
            $(".texto").css("font-size", "+=1px");
        }else{
            $(".texto").css("font-size", "-=1px");
        }
    }

    // Executa função ao clicar no botão de menu
    $("#btnMenu").on("click", exibirNavBar);

    // Executa função ao clicar no botão de expandir
    $("#btnExpandir").on("click", exibirBtns);

    // Executa função ao clicar no botão de mudar o tema
    $("#btnMudarTema").on("click", mudarTema);

    // Executa função ao clicar no botão de aumentar fonte
    $("#btnAumentarFonte").on("click", {acao: "aumentar"}, alterarTamFonte);

    // Executa função ao clicar no botão de diminuir fonte
    $("#btnDiminuirFonte").on("click", {acao: "diminuir"}, alterarTamFonte);
});