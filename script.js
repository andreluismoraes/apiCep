$(document).ready(()=>{

  $('form').off()

  $('#cep').on('blur', () =>{
    let cep = $('#cep').val()
    //console.log(cep)
    $.ajax({
      type: 'GET',
      url: 'https://viacep.com.br/ws/' + cep + '/json/',
      success: dados => {
        //console.log(dados)
        $('#logradouro').html(dados.logradouro)
        $('#bairro').html(dados.bairro)
        $('#cidade').html(dados.localidade)
      },
      error: erro => { console.log(erro) }
    })
  })

})
