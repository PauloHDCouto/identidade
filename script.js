function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <= 12){  
                //Criança
                img.setAttribute('src','criançamenino.png')
            } else if (idade <= 21){
                //Jovem
                img.setAttribute('src','jovemh.png')
            }else if (idade <= 50){
                //Adulto
                img.setAttribute('src','homemadulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'seniorm.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <= 12){  
                //Criança
                img.setAttribute('src','criançamenina.png')
            } else if (idade <= 21){
                //Jovem
                img.setAttribute('src','jovemm.png')
            }else if (idade <= 50){
                //Adulta
                img.setAttribute('src','mulheradulta.png')
            }else{
                //Idosa
                img.setAttribute('src', 'seniorf.png')
            }
        }
        res.style.textAlign  = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}