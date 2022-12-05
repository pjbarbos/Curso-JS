function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verificar os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'img/menino.jpg')
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/jovemmenino.jpg')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/homem.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //Criança
                img.setAttribute('src', 'img/menina.jpg')
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img/jovemmenina.jpg')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/mulher.jpg')
            }else{
                // Idoso
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}