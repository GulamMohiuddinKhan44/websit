let contactObj=[];

let Fullname = document.querySelector('#name');
let subject = document.querySelector('#subject');
let email = document.querySelector('#email');
let textarea = document.querySelector('#textarea');
let submit = document.querySelector('#submit');


submit.addEventListener("click",()=>{

    
    Fullname=Fullname.value;
    subject=subject.value;
    email=email.value;
    textarea=textarea.value;
        
    

  
  
       
        contactObj.push(
            Fullname,
           email,
            subject,
            textarea
    )
    localStorage.setItem('contactObj', JSON.stringify(contactObj))
    
    
         
   
console.log(contactObj);
let form = document.querySelector('#myform').reset();

//    console.log(Fullname);
//    console.log(email);
//    console.log(textarea);
})
