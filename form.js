
function validate_email(){
    let email = document.querySelector("#email").value;

    if(email.length == 0){
        document.querySelector("#email-check-box").innerHTML = '<span style = "color: red   "> x Masukkan Email!</span>';
        return;
        
    } 

    if(email.length < 5){
        document.querySelector("#email-check-box").innerHTML = '<span style = "color: red"> Email harus lebih dari 5 karakter!</span>';
        return;
    }

    if(!email.includes("@")){
        document.querySelector("#email-check-box").innerHTML = '<span style = "color: red"> Email harus mengandung \'@\'</span>';
        return;
    }

    document.querySelector("#email-check-box").innerHTML = '';
    return;
}

function validate_password(){
    let password = document.querySelector("#password").value;

    let is_contains_number = false;
    let is_contains_uppercase = false;
    let is_contains_lowercase = false;


    for(let i = 0; i < password.length; i++){
        if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) is_contains_uppercase = true;
        if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) is_contains_lowercase = true;
        if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) is_contains_number = true;
    }


    if(password.length == 0) {
        document.querySelector("#password-check-box").innerHTML = '<span style = "color: red"> Masukkan Password!</span>';
        return;
    }

    if(password.length < 6) {
        document.querySelector("#password-check-box").innerHTML = '<span style = "color: red"> Password harus lebih dari 6 karakter. </span>';
        return;
    }


    if(!is_contains_number){
        document.querySelector("#password-check-box").innerHTML = '<span style = "color: red"> Password harus mengandung angka! </span>';
        return;
    }

    if(!is_contains_uppercase || !is_contains_lowercase){
        document.querySelector("#password-check-box").innerHTML = '<span style = "color: red"> Password harus mengandung huruf besar dan huruf kecil! </span>';
        return;
    }

    document.querySelector("#password-check-box").innerHTML = '';
    return;
}

function validate_confirm_password(){
    let confirm = document.querySelector("#confirm").value;
    let password = document.querySelector("#password").value;

    if(confirm.localeCompare(password) != 0) {
        document.querySelector("#confirm-check-box").innerHTML = '<span style = "color: red"> Konfirmasi Password Salah! </span>';
        return;
    }

    document.querySelector("#confirm-check-box").innerHTML = '';
    return;
}

function submit_form(){
    
}