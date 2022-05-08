let generteButton = document.querySelector('.generate');
let finalpass = document.querySelector('.output')
let copyButton = document.querySelector('.btn-copy')
let copyAlert = document.querySelector('.alert-container')
let passLenght = document.querySelector('.length')

generteButton.addEventListener('click',() =>{
    createPassword();
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