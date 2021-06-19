
function validate_email(){
    let email = document.querySelector("#email").value;
    let countAt = 0;
    let length_before_at = 0;

    if(email.length == 0){
        document.querySelector("#email-check-box").innerHTML = 'Masukkan Email!';
        return;
    } 

    if(!email.includes("@")){
        document.querySelector("#email-check-box").innerHTML = 'Email harus mengandung \'@\'';
        return;
    }

    if(!email.endsWith(".com")){
        document.querySelector("#email-check-box").innerHTML = 'Harus diakhiri oleh .com';
        return;
    }

    for(let i = 0; i < email.length; i++){
        if(email.charCodeAt(i) == 64){
            countAt++;
            length_before_at = i;
        }
    }

    if(countAt > 1) {
        document.querySelector("#email-check-box").innerHTML = 'Email anda harus mengandung 1 buah @ saja.';
        return;
    }

    if(email.length < 5 || length_before_at < 5){
        document.querySelector("#email-check-box").innerHTML = 'Email harus lebih dari 5 karakter!';
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
        document.querySelector("#password-check-box").innerHTML = 'Masukkan Password!';
        return;
    }

    if(password.length < 6) {
        document.querySelector("#password-check-box").innerHTML = 'Password harus lebih dari 6 karakter.';
        return;
    }


    if(!is_contains_number){
        document.querySelector("#password-check-box").innerHTML = 'Password harus mengandung angka!';
        return;
    }

    if(!is_contains_uppercase || !is_contains_lowercase){
        document.querySelector("#password-check-box").innerHTML = 'Password harus mengandung huruf besar dan huruf kecil!';
        return;
    }

    document.querySelector("#password-check-box").innerHTML = '';
    return;
}

function validate_confirm_password(){
    let confirm = document.querySelector("#confirm").value;
    let password = document.querySelector("#password").value;

    if(confirm.length == 0){
        document.querySelector("#confirm-check-box").innerHTML = 'Masukkan konfirmasi password!';
        return;
    }

    if(confirm.localeCompare(password) != 0) {
        document.querySelector("#confirm-check-box").innerHTML = 'Konfirmasi Password Salah!';
        return;
    }

    document.querySelector("#confirm-check-box").innerHTML = '';
    return;
}

function validate_username(){
    let username = document.querySelector("#username").value;

    if(username.length == 0){
        document.querySelector("#username-check-box").innerHTML =  'Masukkan username anda!';
        return;
    }

    if(username.length < 6) {
        document.querySelector("#username-check-box").innerHTML =  'Username harus lebih dari 6 karakter.';
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
        document.querySelector("#username-check-box").innerHTML =  'Username tidak boleh mengadung simbol.';
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
    let isValid = true;

    if(email.length == 0){
        document.querySelector("#email-check-box").innerHTML = 'Masukkan email';
        isValid = false;
    } else{
        document.querySelector("#email-check-box").innerHTML = '';
    }


    if(username.length == 0){
        document.querySelector("#username-check-box").innerHTML = 'Masukkan Username';
        isValid = false;
    } else{
        document.querySelector("#username-check-box").innerHTML = '';
    }

    if(password.length == 0){
        document.querySelector("#password-check-box").innerHTML = 'Masukkan Password!';
        isValid = false;
    } else{
        document.querySelector("#password-check-box").innerHTML = '';
    }
    
    if(confirm.length == 0){
        document.querySelector("#confirm-check-box").innerHTML = 'Masukkan konfirmasi password!';
        isValid = false;
    } else{
        document.querySelector("#confirm-check-box").innerHTML = '';
    }
    
    if(!is_agree){
        document.querySelector("#agree-check-box").innerHTML = 'Anda harus menyetujui terms and condition';
        isValid = false;
    } else{
        document.querySelector("#agree-check-box").innerHTML = '';
    }

    if(isValid){
        sessionStorage.setItem("username",username);
        window.location.href = './landingpage.html';
    } 
}
