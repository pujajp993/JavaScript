function validate(){
    // var a=document.getElementById("uname");
    // var b=document.getElementById("email");
    // var c=document.getElementById("password");

    // if(a.value==""||b.value==""||c.value==""){
    //     alert("not allowed");
    //     return false
    // }
    // else{
    //     alert("Success");   
    //     return true
    // }

    var b=document.getElementById("email");
    var regex=/^([a-zA-Z0-9._%-]+@[a-zA-Z\-]+\.[a-zA-Z]{2,})$/;

//     /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
// Let’s break down this regular expression piece by piece:

// ^ - The beginning of the string.
// ( - Start of a capturing group.
// [a-zA-Z0-9._%-]+ - Matches one or more of the following characters: letters 
// (both uppercase and lowercase), numbers, periods, underscores, percent signs, and hyphens.
// @ - Matches the “@” symbol.
// [a-zA-Z0-9.-]+ - Matches one or more of the following characters: letters (both uppercase and lowercase),
//  numbers, periods, and hyphens.
// \. - Matches a literal period character.
// [a-zA-Z]{2,} - Matches two or more letters (both uppercase and lowercase).
// ) - End of the capturing group.
// $ - The end of the string.
    if(b.value==""){
        alert("not allowed");
        return false;
    }
    if(b.value.match(regex)){
        alert("valid email");
        return true;
    }
    else{
        alert("invalid email")
        return false;
    }

    // var c=document.getElementById("password");
    // if(c.value.trim()==""){
    //     alert("no blank value");
    //     c.style.border="solid 2px red";
    //     return false;
    // }
    // else if(c.value.trim().length<5){
    //     alert("password too short");
    //     return false;
    // }
    // else{
    //     return true;
    // }



    //different password in password and confirm password

    // var first=document.getElementById("password");
    // var second=document.getElementById("cpassword");
    // if(first.value==second.value){
    //     alert("Success");
    //     return true;
    // }
    // else{
    //     alert("password must be same");
    //     return false;
    // }


}