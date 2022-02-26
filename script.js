// DOM elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content')

const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');

const loginModal = document.querySelector('.login-modal');

const loginFormButton = document.querySelector('.login-form-btn');
const modalX = document.querySelector('.login-modal i'); 




/********************************************/
// main page
const goToLoginPage = () => {
    mainPage.style.display = "none";
    loginPage.style.display = "grid";
}

middleContent.addEventListener('click', e=>{
    if(e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    }
})


btnTop.addEventListener('click', ()=>{
    const userInfo = document.querySelector('.user-info');
    const password = document.querySelector('.password');

    if(userInfo.value !== "" && password.value !== ""){
        mainPage.style.display = "none";
        newsFeedPage.style.display = "block";
    }
    else{
        goToLoginPage();
        loginModal.style.display = "block";
    }
})


// login page
modalX.addEventListener('click',()=>{
    loginModal.style.display = "none";
})

loginFormButton.addEventListener('click', ()=>{
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if(loginUserInfo.value !== "" && loginPassword.value !== ""){
        loginPage.style.display = "none";
        newsFeedPage.style.display = "block";
    }
    else{
        loginModal.style.display = "block";
    }
})