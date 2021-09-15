const menu=document.querySelector(".menu");
const openMenuBtn=document.querySelector(".open-menu");
const closeMenuBtn=document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("opened_menu");
}
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const $form = document.querySelector("#form")

$form.addEventListener("submit",handleSubmit)

async function handleSubmit(event){
    
    event.preventDefault();
    
    const form= new FormData(this)
    
    const response= await fetch(this.action, {
        method:this.method,
        body:form,
        headers:{
            'Accept':'application/json'
        }
    })
    
    if (response.ok) {
        
    this.reset()
     Swal.fire({
       title:'Gracias!!',
       text:'Te escribire pronto',
       icon:'success',
       width:'90%',
       padding:'1rem',
       confirmButtonColor: '#124f88',
       confirmButtonAriaLabel:'Confirmar'
    })
    }else{
       Swal.fire({
           title:'Lo Siento!!',
           text:'El correo no se ha enviado',
           icon:'error',
           width:'90%',
           padding:'1rem',
           confirmButtonColor: '#124f88',
           confirmButtonAriaLabel:'Confirmar'
    })
    }
    
}

const menuLinks= document.querySelectorAll(".menu a[href^='#']");

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", function(){
            menu.classList.remove("opened_menu");
        })
    })