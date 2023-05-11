<template>
    <div class="left-container">
        <img class="dam-image-logo" src="../assets/dambordlogo.png" alt="Dambord">
    </div>

    <div class="right-container-wrapper">
    <div class="right-container">
        <div class="background-user-lock">
            <svg class="user-lock" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
            </svg>
        </div>
        <div>
            <h1 class="identificeren">
                Identificeren
            </h1>
            <h3 class="guest-id">
                Guest ID
            </h3>
        </div>
        <div class="input-wrapper">
            <svg class="user-lock-input" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
            </svg>
            <input placeholder="Username" class="input" type="text">
            <button class="input-button">
                <div class="background-arrow">
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </div>
            </button>
        </div>
        <p class="copyright">
        Copyright © Dam-It 2023
        </p>
    </div>
    </div>
</template>


<style scoped>
.left-container {
    width: 40%;
    float: left;
    height: 100%;
}

.dam-image-logo {
    max-width: 100%;
    max-height: 100vh;
    margin-top: 3%;
}

.right-container-wrapper {
    height: 95vh;
}

.right-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    float: right;
    top: 8%;
}

.user-lock {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 95vh;
    fill: white;
}

.background-user-lock {
    background-color: #ED135D;
    width: 80px;
    height: 80px;
    margin: auto;
    border-radius: 100%;
    padding: 20px;
}

.identificeren {
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
}

.guest-id {
    text-align: center;
    width: 100%;
    margin-top:0 ;
}

.input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 298px;
    height: 20%;
    border: 1px solid black;
    border-right: 0;
    margin: 0 auto;
    border-radius: 8px;
    margin-top: 10%;
}

.user-lock-input {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    fill: #B6B6B6;
    margin-left : 10px;
}

.input {
    border: none;
    height: 40px;
}

.input:focus {
    outline: none;
}

.input-button {
    padding: 12px 22px;
    background-color: #287695;
    border-radius: 8px;
    border: none;
    margin-left: 5px;
}

.background-arrow {
    background-color: white;
    border-radius: 100%;
    padding: 2px;

}

.arrow {
    width: 20px;
    height: 20px;
    fill: #287695;
}

.copyright{
    text-align: center;
    margin-top: 20%;
    color: black;
}
</style>


