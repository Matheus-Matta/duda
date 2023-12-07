function scrollParalax(){
   const centro = document.querySelector("#bg-centro")
   const bgRight = document.querySelector("#bg-right")
   const bgLeft = document.querySelector("#bg-left")
   const bgLogo =  document.querySelector("#logo-dd")
   const Bg = document.querySelector(".conteiner-bg")
   const imgPosition = document.querySelectorAll(".conteiner-bg img")
   const opBg = document.querySelector(".conteiner-bg span")
   const h1Bg = document.querySelector(".conteiner-bg h1")


   window.addEventListener("scroll", function(){
    let value = window.scrollY;
    centro.style.transform = `scale(${1 + value / 5000})`
    bgRight.style.left = value / 5 + "px"
    bgLeft.style.left = "-" + value / 5 + "px"
    bgLogo.style.opacity = "1" - value / 800
    bgLogo.style.top = "120" - value / 5 + "px"
    opBg.style.opacity = "0" + value / 700
    if(value > 600){
        h1Bg.style.display = "none"
        opBg.style.display = "none"
        Bg.style.zIndex = 0
        Bg.classList.remove("conteiner-before")
        imgPosition.forEach(img => {
            img.style.display = "none"
        });
        
    }
    if(value < 600){
        Bg.style.zIndex = 9
        Bg.classList.add("conteiner-before")
        h1Bg.style.display = "block"
        opBg.style.display = "block"
        imgPosition.forEach(img => {
            img.style.display = "block"
        });
       
    }
    
   })
}
scrollParalax();