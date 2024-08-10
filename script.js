function carregar(){
   var msg=window.document.getElementById('msg')
   var img=window.document.getElementById('imagem') 
   var comprimento = window.document.getElementById('bom')
   var h1=window.document.getElementById('hr')
   var data=new Date()
  var hora= data.getHours()
   msg.innerHTML=`Agora são ${hora} horas.`

    if(hora >=5 && hora <12){
        bom.innerHTML='Bom Dia!'
        img.src='manha.png'
        document.body.style.backgroundColor="#fdc714"
    }else if(hora>=12 && hora <=18){
      bom.innerHTML='Boa Tarde!'
      img.src="tarde.png"
        document.body.style.backgroundColor="#e86107"
    }else{
        bom.innerHTML='Boa Noite!'
        img.src="noite.png"
        document.body.style.backgroundColor="#050236"
        document.body.style.color='#fdf6f6'
        document.body.style.color='#fdf6f6'
        msg.style.color='#fdf6f6'
        bom.style.color='#fdf6f6'
        hr.style.color='#fdf6f6'

 
     }
}