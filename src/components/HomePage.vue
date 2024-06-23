<template>
    <div class="home">
        <img src="@/assets/passphoto.jpeg" class="img-logo" alt="Logo">
        <h2>Hi, My name is Manasa </h2>
       <h2> Im soon to be grad, I am looking for a Intern opportunites</h2>

        <button class="btn">
            <a href="https://github.com/manasaV16" target="_blank" class="btn-link">
                <i class="fa-brands fa-square-github icon-margin"></i> Github
            </a>
        </button>

        <button class="btn">
            <a href="https://www.linkedin.com/in/manasa-varre-b11609272/" target="_blank" class="btn-link">
                <i class="fa-brands fa-linkedin icon-margin"></i> LinkedIn
            </a>
        </button>

        <button @click="navigateToResume" class="btn">
            <i class="fa-sharp fa-solid fa-file icon-margin"></i> Resume
        </button>
    </div>
</template>


<script scoped>
export default {
    name: 'HomePage',
    methods: {
        navigateToResume() {
            this.$router.push({ name: 'ResumeBuilder' });
        },
    },
};
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import '~@fortawesome/fontawesome-free/css/all.css';
/* Import Font Awesome CSS */

h2 {
    color: white;
}

.btn {
    background-color: rgb(247, 249, 250);
    border: none;
    /* Remove borders */
    color: black;
    /* Text color */
    width: 150px;
    /* Fixed width */
    height: 50px;
    /* Fixed height */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    /* Set font size */
    cursor: pointer;
    /* Pointer cursor on hover */
    margin-top: 20px;
    /* Space between buttons */
    text-decoration: none;
    /* Remove underline from text */
}



.btn-link {
    color: black;
    /* Ensure link text color is the same as button text */
    text-decoration: none;
    /* Remove underline from links */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* Ensure link takes full width of button */
    height: 100%;
    /* Ensure link takes full height of button */


}

.icon-margin {
    margin-right: 12px;
}

.btn-link:hover {
    text-decoration: none;
    /* Keep text decoration on hover */
}

.img-logo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    /* This ensures the image scales correctly within the circle */
}

.home {

    color: rgb(0, 0, 0);
    background-color: rgb(19, 32, 56);
    height: 100vh;
    
    
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
