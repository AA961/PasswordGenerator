let generteButton = document.querySelector('.generate');
let finalpass = document.querySelector('.output')
let copyButton = document.querySelector('.btn-copy')
let copyAlert = document.querySelector('.alert-container')
let passLenght = document.querySelector('.length')
let hashOutput = document.querySelector('.hash-output')
let hashCopyButton = document.querySelector('.hash-copy')
let options = document.getElementById('hash-menu');

function getValue(){
    window.optionsValue = document.getElementById('hash-menu').value;
    // console.log(optionsValue)
}

options.addEventListener('click',() =>{
    options.addEventListener('click',() =>{
        getValue();
    updateHashes();
})
    })
    

generteButton.addEventListener('click',() =>{
    
    createPassword();
    getValue();
    updateHashes();
})

function createPassword() {
    const char = 
    "abcdeklm678novw2xyz8ABCPQR1Sgh9ijXYZ!@3TUVWf0#$%5^pqrstu&*()_+:;]4[/.,12FGHI6JKL345E7DMNO90";
    let passwordLenght = 9
    if (passLenght.value){
        passwordLenght = passLenght.value;
        
    } else{
        passwordLenght = 9
    }
    let passWord = "";
    for (let index = 0; index < passwordLenght; index++) {
        const randomNumbers = Math.floor(Math.random() * char.length)
        passWord += char.substring (randomNumbers ,randomNumbers + 1)
        finalpass.value = passWord;

}
}
copyButton.addEventListener('click',() =>{
    copyPassword();
    if(finalpass.value){
        copyAlert.classList.remove('active')
        copyAlert.innerHTML = "Password Copied"
    }
    setTimeout(() => {
        copyAlert.classList.add('active')
    }, 2000);
});

function copyPassword(){
    finalpass.select();
    finalpass.setSelectionRange(0,9999);
    navigator.clipboard.writeText(finalpass.value);
}

hashCopyButton.addEventListener('click',() =>{
    copyHash();
    if (hashOutput.value){
        copyAlert.classList.remove('active')
        copyAlert.innerHTML = "Hash Copied"
        setTimeout(() => {
            copyAlert.classList.add('active')
        }, 2000);
    }
})


function copyHash(){
    hashOutput.select();
    hashOutput.setSelectionRange(0,9999);
    navigator.clipboard.writeText(hashOutput.value)
}

function updateHashes(){
    if((window.optionsValue) == "sha256"){
        hashOutput.value = CryptoJS.SHA256(finalpass.value)
    }else if((window.optionsValue) == "md5"){
        hashOutput.value = CryptoJS.MD5(finalpass.value)
    }else if ((window.optionsValue) == "sha1"){
        hashOutput.value = CryptoJS.SHA1(finalpass.value)
    }else if ((window.optionsValue) == "sha224"){
        hashOutput.value = CryptoJS.SHA224(finalpass.value)
    }else if ((window.optionsValue) == "sha512"){
        hashOutput.value = CryptoJS.SHA512(finalpass.value)
    }else if ((window.optionsValue) == "sha384"){
        hashOutput.value = CryptoJS.SHA384(finalpass.value)
    }else if ((window.optionsValue) == "sha3") {
        hashOutput.value = CryptoJS.SHA3(finalpass.value)
    }else if ((window.optionsValue) == "ripemd160"){
        hashOutput.value = CryptoJS.RIPEMD160(finalpass.value)
    }
}

