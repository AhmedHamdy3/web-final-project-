const form=document.getElementById("form");
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const phone=document.getElementById("phone");
const address=document.getElementById("address");
const warning=document.getElementById("warning");
   // var check1,check2,check3,check4,check5,check6;

form.addEventListener('submit', e => {
    let checks= checkInputs();
  //  console.log(checks[0]);
    if(checks[0]===0 ||checks[1]===0 ||checks[2]===0 ||checks[3]===0 ||checks[4]===0 || checks[5]===0|| checks[6] ==0){
        e.preventDefault();
        warning.style.visibility="visible";
    }
});
function checkInputs(){
    let check1=1;
    let check2=1;
    let check3=1;
    let check4=1;
    let check5=1;
    let check6=1;

    let fnameValue=fname.value.trim();
    let lnameValue=lname.value.trim();
    let emailValue=email.value.trim();
    let passwordValue=password.value.trim();
    let phoneValue=phone.value.trim();
    let addressValue=address.value.trim();


 //  first name validation
    if(fnameValue===""){
        setError(fname,"first name cannot be blank");
        check1=0;
    }
    else{
        if(!fnameValue.match(/^[A-za-z ]+$/)){
            setError(fname,"first name accept only letter or spaces");
            check1=0;
        }
        else{
            setSuccess(fname);
        }
    }

//  last name validation 
    if(lnameValue===""){
        setError(lname,"last name cannot be blank");
        check2=0;
    }
    else{
    if(!lnameValue.match(/^[A-za-z ]+$/)){
            setError(lname,"last name accept only letter or spaces");
            check2=0;
        }
        else{
            setSuccess(lname);
        }
    }

//  emai is blank
    if(emailValue===""){
        setError(email,"email cannot be blank");
        check3=0;
    }
    else{
        if(!emailValue.match(/^[A-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)){
            setError(email,"enter email in the pattern example@text.com");
            check3=0;
        }else{
            setSuccess(email);
        }   
    }

// password validation
    if(passwordValue===""){
        setError(password,"password cannot be blank");
        check4=0;
    }
    else{
        if(!passwordValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-z0-9])(?!.*\s).{8,15}$/)){
            setError(password,"Password is Not Valid, It must contain 8 characters: one uppercase, one lowercase, one number and one special character at least");
            check4=0;
        }
        else{
            setSuccess(password);
        }
    }

    //phone validation
    if(phoneValue===""){
        setError(phone,"phone number cannot be blank");
        check5=0;
    }
    else{
        if(!phoneValue.match(/[0-9]{11}/)){
            setError(phone,"enter phone number consist of 11 digit");
            check5=0;
        }else{
            setSuccess(phone);
        }
    }

    // addres validations
    if(addressValue===""){
        setError(address,"addres cannot be blank");
        check6=0;
    }
    else{
        setSuccess(address);
    }

    return [check1,check2,check3,check4,check5,check6];
    
}

// set Error function
function setError(input, message){
    const formControl=input.parentElement;
    const span=formControl.querySelector('span');
    formControl.className="form-control error";
    span.innerText = message;
}
// set success function
function setSuccess(input){
    var formControl=input.parentElement;
    formControl.className='form-control success';
}


// function to show the password
var icon=document.getElementById("icon");
icon.onclick= function(){
    if(this.getAttribute("class")=="fas fa-eye")
    {
        this.nextElementSibling.setAttribute("type","text");
        this.setAttribute("class","fas fa-eye-slash");
    }
    else{
        this.nextElementSibling.setAttribute("type","password");
        this.setAttribute("class","fas fa-eye"); 
    }

}


// function to remove the placeholder when focus
var inputs = document.getElementsByTagName("input");
for(i=0; i<inputs.length ;++i)
{
    inputs[i].onfocus=function(){
        this.setAttribute("backup",this.getAttribute("placeholder"))
        this.setAttribute("placeholder","");
    }

    inputs[i].onblur=function(){
        this.setAttribute("placeholder",this.getAttribute("backup"));
        this.setAttribute("backup","");
    }
}
