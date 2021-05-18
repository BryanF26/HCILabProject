
function validate_email(){
    let email = document.querySelector("#email").value;

    if(email.length == 0){
        document.querySelector("#email-check-box").innerHTML = '<span style = "color: red ">Masukkan Email!</span>';
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

    if(confirm.length == 0){
        document.querySelector("#confirm-check-box").innerHTML = '<span style = "color: red"> Masukkan konfirmasi password! </span>';
        return;
    }

    if(confirm.localeCompare(password) != 0) {
        document.querySelector("#confirm-check-box").innerHTML = '<span style = "color: red"> Konfirmasi Password Salah! </span>';
        return;
    }

    document.querySelector("#confirm-check-box").innerHTML = '';
    return;
}

function validate_username(){
    let username = document.querySelector("#username").value;

    if(username.length == 0){
        document.querySelector("#username-check-box").innerHTML =  '<span style = "color: red"> Masukkan username anda! </span>';
        return;
    }

    if(username.length < 6) {
        document.querySelector("#username-check-box").innerHTML =  '<span style = "color: red"> Username harus lebih dari 6 karakter. </span>';
        return;
    }

    let is_contains_symbol = false;

    for(let i = 0; i < username.length; i++){
        if(username.charCodeAt(i) >= 65 && username.charCodeAt(i) <= 90)
            continue;
        else if(username.charCodeAt(i) >= 97 && username.charCodeAt(i) <= 122) continue;
        else if(username.charCodeAt(i) >= 48 && username.charCodeAt(i) <= 57) continue;
        else is_contains_symbol = true;
    }

    if(is_contains_symbol) {
        document.querySelector("#username-check-box").innerHTML =  '<span style = "color: red"> Username tidak boleh mengadung simbol. </span>';
        return;
    }

    
    document.querySelector("#username-check-box").innerHTML = '';
    return;

}

function submit_form(){
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let confirm = document.querySelector("#confirm").value;
    let is_agree = document.querySelector("#agreement").checked;
    let username = document.querySelector("#username").value;

    if(email.length == 0)
        document.querySelector("#email-check-box").innerHTML = '<span style = "color: red"> Masukkan email </span>';

    if(username.length == 0)
        document.querySelector("#username-check-box").innerHTML = '<span style = "color: red"> Masukkan Username </span>';

    if(password.length == 0) 
        document.querySelector("#password-check-box").innerHTML = '<span style = "color: red"> Masukkan Password!</span>';
    
    if(confirm.length == 0)
        document.querySelector("#confirm-check-box").innerHTML = '<span style = "color: red"> Masukkan konfirmasi password! </span>';
    
    if(!is_agree){
        document.querySelector("#agree-check-box").innerHTML = '<span style = "color: red"> Anda harus menyetujui terms and condition </span>';
    }
}
