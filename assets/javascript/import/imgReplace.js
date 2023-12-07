function imgReplace(){
    const icons = document.querySelectorAll("#menu-lateral img")
    const links = document.querySelectorAll("#menu-lateral a")
    const menuLateral = document.querySelector("#menu-lateral")
    const home = document.querySelector("#icon-home img")
    function iconOn(index){
      icons.forEach(icon =>{
        if(icon.classList.contains('icon-ativo')){
          icon.setAttribute('src','assets/img/icone d&d off.png')
          icon.classList.remove('icon-ativo')
          }
      })
      icons[index].setAttribute('src','assets/img/icone d&d on.png')
      icons[index].classList.add('icon-ativo')
    }   

    links.forEach((a,index) =>{
      a.addEventListener("click", ()=>{
        
        iconOn(index)
      })  
    })

    window.addEventListener("scroll", function(){
     let value = window.scrollY;
     if(value > 600){
      iconOn(0)
      menuLateral.classList.add("menu-lateral-on")  
      home.classList.add("menu-lateral-on") 
     }else if(value < 600){
        menuLateral.classList.remove("menu-lateral-on")
        home.classList.remove("menu-lateral-on") 
     }

    })
    
}
imgReplace();