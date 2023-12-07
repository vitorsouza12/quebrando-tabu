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

    // Executa função ao clicar no botão de menu
    $("#btnMenu").on("click", exibirNavBar);

    // Executa função ao clicar no botão de expandir
    $("#btnExpandir").on("click", exibirBtns);
});