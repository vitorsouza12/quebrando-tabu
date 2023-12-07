$(document).ready(function(){
    // Função que valida o formulário
    function validarForm(){
        // Verifica se título NÃO foi preenchido
        if($("#titulo").val() === ""){
            $("#msgErroTitulo").html("Preenchimento obrigatório");
            $("#titulo").addClass("erro");

            return false;
        }

        // Verifica se título é maior que 50 dígitos
        if($("#titulo").val().length > 50){
            $("#msgErroTitulo").html("Seu título não pode ter mais de 50 dígitos");
            $("#titulo").addClass("erro");

            return false;
        }

        // Verifica se categoria NÃO foi selecionada
        if($("#categoria").prop("selectedIndex") === 0){
            $("#msgErroCategoria").html("Selecione uma opção");
            $("#categoria").addClass("erro");

            return false;
        }

        // Verifica se desabafo NÃO foi preenchido
        if($("#desabafo").val() === ""){
            $("#msgErroDesabafo").html("Preenchimento obrigatório");
            $("#desabafo").addClass("erro");

            return false;
        }

        // Verifica se desabafo é maior que 700 dígitos
        if($("#desabafo").val().length > 700){
            $("#msgErroDesabafo").html("Seu desabafo não pode ter mais de 700 dígitos");
            $("#desabafo").addClass("erro");

            return false;
        }
    }

    // Função que limpa os erros dos campos
    function limparErro(event){
        $(this).removeClass("erro");

        // Verifica se campo do evento é o campo de título
        if(event.data.campo === "titulo"){
            $("#msgErroTitulo").html("");
        }

        // Verifica se o campo do evento é o campo de categoria
        if(event.data.campo === "categoria"){
            $("#msgErroCategoria").html("");
        }

        // Verifica se o campo do evento é o campo de desabafo
        if(event.data.campo === "desabafo"){
            $("#msgErroDesabafo").html("");
        }
    }

    // Executa função ao submeter o formulário
    $("#form").on("submit", validarForm);

    // Executa função ao digitar algo no campo de título
    $("#titulo").on("input", {campo: "titulo"}, limparErro);

    // Executa função ao digitar algo no campo de categoria
    $("#categoria").on("change", {campo: "categoria"}, limparErro);

    // Executa função ao digitar algo no campo de desabafo
    $("#desabafo").on("input", {campo: "desabafo"}, limparErro);
});