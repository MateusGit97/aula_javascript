function consultaCEP(){

    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);

    $.ajax({
        url: url,
        type: "GET", 
        success: function(response){
            console.log(response);
            $("#uf").html(response.uf);
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $(".barra-progresso").hide();
            $(".cep").show();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});