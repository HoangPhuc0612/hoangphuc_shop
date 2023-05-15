const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

const close = document.getElementById('close');
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}



// login/sign in page
const formLogin=document.querySelectorAll('.form_text input')
        const formLabel=document.querySelectorAll('.form_text label')
        for(let i=0;i<4;i++){
            formLogin[i].addEventListener("mouseover",function(){
                formLabel[i].classList.add("focus")
            })
            formLogin[i].addEventListener("mouseout",function(){
                if(formLogin[i].value ==""){
                    formLabel[i].classList.remove("focus")
                }
            })
        }