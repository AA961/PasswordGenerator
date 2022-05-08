let generteButton = document.querySelector('.generate');
let finalpass = document.querySelector('.output')
let copyButton = document.querySelector('.btn-copy')
let copyAlert = document.querySelector('.alert-container')
let passLenght = document.querySelector('.length')
let hashOutput = document.querySelector('.hash-output')
let hashCopyButton = document.querySelector('.hash-copy')
let options = document.getElementById('hash-menu');
let selectHash = document.querySelector('.chose-hash')

function getValue(){
    window.optionsValue = document.getElementById('hash-menu').value;
    updateHashes();
}

selectHash.addEventListener('click',() =>{
    getValue().
    updateHashes();
})
options.addEventListener('click',() =>{
    
    getValue();
    updateHashes();
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
        getValue()
        updateHashes()
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

    let HashesValues = (window.optionsValue)
    let HashesValue = HashesValues.split('"').join('');

    if((HashesValues) == "sha256"){
        hashOutput.value = CryptoJS.SHA256(finalpass.value)
    }else if((HashesValues) == "md5"){
        hashOutput.value = CryptoJS.MD5(finalpass.value)
    }else if ((HashesValues) == "sha1"){
        hashOutput.value = CryptoJS.SHA1(finalpass.value)
    }else if ((HashesValues) == "sha224"){
        hashOutput.value = CryptoJS.SHA224(finalpass.value)
    }else if ((HashesValues) == "sha512"){
        hashOutput.value = CryptoJS.SHA512(finalpass.value)
    }else if ((HashesValues) == "sha384"){
        hashOutput.value = CryptoJS.SHA384(finalpass.value)
    }else if ((HashesValues) == "sha3") {
        hashOutput.value = CryptoJS.SHA3(finalpass.value)
    }else if ((HashesValues) == "ripemd160"){
        hashOutput.value = CryptoJS.RIPEMD160(finalpass.value)
    }
    
    // console.log(HashesValue)
    // hashOutput.value = CryptoJS.HashesV(finalpass.value)
}

