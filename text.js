const loginbtn=document.querySelector("#login-btn");
loginbtn.addEventListener("click",function click(){
    if(loginbtn.style.backgroundColor=="blue"){
    loginbtn.style.backgroundColor="red";}else{
        loginbtn.style.backgroundColor="blue";
    }
})

const acc=document.querySelectorAll('.accordion')


acc.forEach(function(question){
    acc[0].classList.toggle("show-text")
    const btn=question.querySelector('.quesbtn')
    console.log(btn)
    btn.addEventListener("click",function(){
        acc.forEach(function(item){
            if(item!==question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
       
    })

})

const toggleBtn=document.getElementsByClassName('checkbtn')[0]
const navbar=document.getElementsByClassName('adiv')[0]
toggleBtn.addEventListener('click',()=>{
    navbar.classList.toggle('active')
})

