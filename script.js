function reg(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var pn=document.getElementById('pn').value;
    var idn=document.getElementById('idn').value;


    var errorn=document.getElementById('errorn');
    var errore=document.getElementById('errore');
    var errorp=document.getElementById('errorp');
    var errori=document.getElementById('errori');

    var regi=document.getElementById('regi');


    errorn.innerText='';
    errore.innerText='';
    errorp.innerText='';
    errori.innerText='';


   if(!validatename(name)){
    errorn.innerText="Nname must contane A-Z a-z only";
    return;
   }

   if(!validateemail(email)){
    errore.innerText="Nname must contane @ only";
    return;
   }

   if(!validatepn(pn)){
    errorp.innerText="Nname must contane 10 digit only";
    return;
   }

   if(!validateidn(idn)){
    errori.innerText="Nname must contane 6 digit only";
    return;
   }

   regi.innerText='registor successful'

}

function validatename(name){
    var re = /^[A-Za-z]+$/;
    return re.test(name);
}
function validateemail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatepn(pn){
    var re = /^\d{10}$/;
    return re.test(pn);
}
function validateidn(idn){
    var re = /^\d{6}$/;
    return re.test(idn);
}

function cont(){
    var fullname=document.getElementById('fname').value;
    var email=document.getElementById('email').value;
    var subject=document.getElementById('sub').value;
    var message=document.getElementById('msg').value;


    var errorf=document.getElementById('errorf');
    var errore=document.getElementById('errore');
    var errors=document.getElementById('errors');
    var errorm=document.getElementById('errorm');

    var cont=document.getElementById('cont');


    errorf.innerText='';
    errore.innerText='';
    errors.innerText='';
    errorm.innerText='';

    if(!validatename(fullname)){
        errorn.innerText="Nname must contane A-Z a-z only";
        return;
       }
    
       if(!validateemail(email)){
        errore.innerText="Nname must contane @ only";
        return;
       }

       if(!validatesubject(subject)){
        errors.innerText="Nsub must contane A-Z a-z only";
        return;
       }
       if(!validatesubject(msg)){
        errorm.innerText="Nmsg must contane A-Z a-z only";
        return;
       }

       cont.innerText='registor successful'


       function validatename(Fullname){
        var re = /^[A-Za-z]+$/;
        return re.test(fullname);
       }

       function validateemail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
       }

       function validatename(Subject){
        var re = /^[A-Za-z]+$/;
        return re.test(Subject);
       }

       function validatename(msg){
        var re = /^[A-Za-z]+$/;
        return re.test(msg);
       }

 }
 const slides=document.querySelector(".slider").children;
 const indicatorImages=document.querySelector(".slider-indicator").children;

  for(let i=0; i<indicatorImages.length; i++)
      indicatorImages[i].addEventListener("click",function(){
       
         for(let j=0; j<indicatorImages.length; j++){
           indicatorImages[j].classList.remove("active");
         }
          this.classList.add("active");
          const id=this.getAttribute("data-id");
         for(let j=0; j<slides.length; j++){
             slides[j].classList.remove("active");
         }

          slides[id].classList.add("active");

      })



