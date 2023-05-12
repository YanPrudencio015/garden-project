
var servbtn = document.getElementById("servbtn");
var contbtn = document.getElementById("contbtn");
var voltarbtn = document.querySelectorAll("voltar");

var menuMain = document.getElementById("menu1");
var menuServ = document.getElementById("menu2");
var menuCont = document.getElementById("menu3");








document.addEventListener("click",e=>{
    if(e.target == servbtn ){
        var menuMobile = document.getElementsByClassName("menu-mobile")[0];

        if(window.innerWidth <=500){
            menuServ.style.cssText = "right:0.9em; transition:600ms;"
            menuMain.style.cssText = "right:-60em; transition:600ms;"
        } else{
            menuServ.style.cssText = "right:1.9em; transition:600ms;"
            menuMain.style.cssText = "right:-60em; transition:600ms;"
        }

        
    } else if(e.target == contbtn){
        var menuMobile = document.getElementsByClassName("menu-mobile")[0];

        if(window.innerWidth <=500){
            menuCont.style.cssText = "right:0.9em; transition:600ms;"
            menuMain.style.cssText = "right:60em; transition:600ms;"
        }else{ 
            menuCont.style.cssText = "right:1.9em; transition:600ms;"
            menuMain.style.cssText = "right:60em; transition:600ms;"
        }
    } 

     
})

function voltar(){
    if(window.innerWidth <=500){
        menuServ.style.cssText = "right:60em; transition:600ms;"
        menuCont.style.cssText = "right:-60em; transition:600ms;"
        menuMain.style.cssText = "right:0.9em; transition:600ms;" 
    } else{
        menuServ.style.cssText = "right:60em; transition:600ms;"
        menuCont.style.cssText = "right:-60em; transition:600ms;"
        menuMain.style.cssText = "right:1.9em; transition:600ms;" 
    }
}




let menuMobile =  function(icon){
    icon.classList.toggle("fa-x")
    // var menuMobile = document.getElementById("menu-mobile");
    var menuMobile = document.getElementsByClassName("menu-mobile")[0];

    if(window.innerWidth <= 850 && window.innerWidth >500){
      menuMobile.classList.toggle("menu-mobile-appers");

    } else if(window.innerWidth <=500){
        menuMobile.classList.toggle("menu-mobile-appers2");

    } 

    var body = document.body;

    body.style.opacity = "0.8"
  }



  document.addEventListener("click", e =>{
    var servico1 = document.getElementById("servebtn1")
    var servico2 = document.getElementById("servebtn2")

    let container1 = document.getElementsByClassName("servicos-container")[0]
    let container2 = document.getElementsByClassName("servicos-container")[1]

    if(window.innerWidth >850){
        if(e.target == servico2){
            container2.classList.remove("servicos-container-ativado")
            container1.classList.add("servicos-container-ativado")
            console.log("Yan")
        } else if(e.target == servico1){
            container2.classList.add("servicos-container-ativado")
            container1.classList.remove("servicos-container-ativado")
            console.log("Yan")
    
        } 

    } else if(window.innerWidth <= 850 && window.innerWidth > 500 ){
        if(e.target == servico2){
            container2.classList.remove("servicos-container-ativado-mobile-first")
            container1.classList.add("servicos-container-ativado-mobile-first")
            console.log("Yan")
        } else if(e.target == servico1){
            container2.classList.add("servicos-container-ativado-mobile-first")
            container1.classList.remove("servicos-container-ativado-mobile-first")
            console.log("Yan")
    
        } 

    }
    
    
    else if(window.innerWidth <=500){
        if(e.target == servico2){
            container2.classList.remove("servicos-container-ativado-mobile-second")
            container1.classList.add("servicos-container-ativado-mobile-second")
        } else if(e.target == servico1){
            container2.classList.add("servicos-container-ativado-mobile-second")
            container1.classList.remove("servicos-container-ativado-mobile-second")
    
        }  
    }


  })




  function closeletter(){

    let mensagem = document.getElementsByClassName("newsletter-info")[0];

    mensagem.classList.add("remove");
    console.log("abc")

    

  }


