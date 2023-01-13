

function UI(){
   this.btnLogin= document.querySelector(".btn1"),
   this.createAcunt= document.querySelector("#createAccount"),
   this.forgetPassword = document.querySelector("#forgetPassword"),
   this.confirm= document.querySelector("#confirm"),
   this.loginEnter= document.querySelector("#loginEnter")

  this.password1= document.querySelector("#password1")
   this.showError = document.querySelector(".f-input")
   this.login1=document.querySelector("#login1")
}
 

UI.prototype.setMessage = function(formElement, type, message){
    
        const messageElement = formElement.querySelector(".f-message")
        messageElement.textContent = message;
        messageElement.classList.remove("f-message-success", "f-message-error");
        messageElement.classList.add(`f-message-${type}`)


       
// setTimeout(()=>{
//     document.querySelector("#f-input-error-message").remove()
// },3000)

}








UI.prototype.clearInput = function (){
    this.login1.value = "";
    this.password1.value = "";

    

}

UI.prototype.showInputError=function(showElement,message) {
    showElement.classList.add("f-input-error");
   
    showElement.parentElement.querySelector("#f-input-error-message").textContent=message;
}

UI.prototype.deleteInputError=function(showElement){
    showElement.classList.remove("f-input-error");
    showElement.parentElement.querySelector("#f-input-error-message").textContent="";
}

const ui = new UI()

     document.addEventListener("DOMContentLoaded", ()=>{
        const loginForm = document.querySelector("#loginArea")
        const createNewAccount = document.querySelector("#accountArea")

        ui.createAcunt.addEventListener("click", e =>{
            e.preventDefault()
            loginForm.classList.add("f-none");
            
            ui.clearInput()
            createNewAccount.classList.remove("f-none")
        });


        ui.loginEnter.addEventListener('click', e =>{
            e.preventDefault();
            loginForm.classList.remove("f-none");
            loginForm.classList.add("animationLog")
            createNewAccount.classList.add("f-none")
        })

    
        loginForm.addEventListener("submit", e =>{
           e.preventDefault();
           
        
            if(this.login1.value==="" & this.password1.value ===""){

               
                    ui.setMessage(loginForm,"error", "Kullanıcı Adı ve Parolanızı Girmediniz")
               
                
                 
                 
               
            }else{
                 ui.setMessage(loginForm,"success"," Hoşgeldiniz")
                 ui.clearInput()
            }
          
           
        })



    



    document.querySelectorAll(".f-input").forEach(showElement=>{
        showElement.addEventListener("blur", e=>{
        
          

            var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;
          
                if(e.target.id==="login1"  && regex.test(e.target.value)==false){
                    
                    ui.showInputError(showElement,"Yanlış e-mail adresi girdniz")
               
                        
                   
                }
             
         
          
                if(e.target.id==="login1" && e.target.value === ""){
                 
                        ui.showInputError(showElement,"E-mail adresi girmediniz")
                 
                        
                        
                    
                }
       
              

            if(e.target.id==="password1" && e.target.value.length<7 && e.target.value.length<12){
                ui.showInputError(showElement,"Yanlış şifre girdiniz")
            }




            /*create account area */ 


            if(e.target.id==="firstName"  && e.target.value.length < 3){
                ui.showInputError(showElement,"Kullaıcı adı uzunluğu en az 3karakter olmalı")
            }
            

            if(e.target.id==="signUsername"  && e.target.value.length>0 && e.target.value.length<6){
                ui.showInputError(showElement,"Kullanıcı adı en az 6 karakterli olmalı")
            }



            if(e.target.id==="signEmail"  && regex.test(e.target.value)==false){
                ui.showInputError(showElement,"email adresini  yanlış girdiniz")
            }

            

            if(e.target.id==="signPassword" && e.target.value.length < 6 && e.target.value.length<10){
                ui.showInputError( showElement," Şifreniz en az 6 karakter en fazla 12 karakter olamalı")
            }

        
           const password= document.querySelector("#signPassword").value.length;
           const confirmPassword = document.querySelector("#confirmPassword").value.length
        

            if(e.target.id==="confirmPassword" && password !== confirmPassword ){
                ui.showInputError(showElement,"Parololar benzer değil")
            }

            if(e.target.id==="agee" && e.target.value<18){
                ui.showInputError(showElement,"18 yaşından küçüksünüz")
            }

        //   if(e.target.id === "man"  && e.target.click()){
            
        //   }

          document.querySelector("#man").addEventListener("click",()=>{
            document.querySelector("#woman").disabled = true
                
  
           
            
          document.querySelector("#man").checked = true
            
          })
          document.querySelector("#woman").addEventListener("click",()=>{
            document.querySelector("#man").disabled = true
            
            document.querySelector("#woman").checked = true
          })

        })
        showElement.addEventListener("input", e => {
            ui.deleteInputError(showElement);


        })
    })
   

  

   
        
  
     })

  

   


function showPassword(){
    const password = document.querySelector("#signPassword")
    const eye = document.querySelector(".hide1")
    const eyeSlash = document.querySelector(".hide2")


    if(password.type==="password"){

        password.type = "text";
        eye.style.display="block";
        eyeSlash.style.display= "none"
    }else{
        password.type = "password";
        eye.style.display="none";
        eyeSlash.style.display= "block"
    }
}

function confirmPassword(){
    const confirmPassword = document.querySelector("#confirmPassword")
    const eye1 = document.querySelector(".hide3")
    const eyeSlash2 = document.querySelector(".hide4")

    if(confirmPassword.type==="password"){
        confirmPassword.type="text"
        eye1.style.display="block"
        eyeSlash2.style.display="none"
    }else{
        confirmPassword.type="password"
        eye1.style.display="none"
        eyeSlash2.style.display="block"
    }
}
