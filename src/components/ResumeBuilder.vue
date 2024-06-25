<template>
    <main>
        <div id="resume" class="resume-container">
            <div class="resume-content d-flex">
                <div class="left-col">
                    <div class="resume-section">
                        <img :src="imageUrl" class="profile-pic-small" alt="profile picture">
                        <h4 class="section-headline">About me</h4>

                    </div>
                    <div class="resume-section">
                        <h4 class="section-headline">Contact</h4>
                        <ul class="dot">


                            <li><i class="fa-solid fa-phone icon-margin"></i>669-264-0970</li>
                            <li><i class="fa-solid fa-envelope icon-margin"></i>manasavarre16@gmail.com</li>
                            <li><i class="fa-brands fa-linkedin icon-margin"></i><a
  href="https://www.linkedin.com/in/mvarre" target="_blank"
  style="color: white;">LinkedIn</a></li>

                            <li><i class="fa-solid fa-location-dot icon-margin"></i> Sunnyvale, CA</li>
                        </ul>
                    </div>
                    <div class="resume-section">
                        <h4 class="section-headline1">Skills</h4>

                        <h5>Languages</h5>
                        <a href="#" class="btn btn-outline-dark btn-like" tabindex="-1" role="button"
                            aria-disabled="true">Python</a>
                        <a href="#" class="btn btn-outline-dark btn-like" tabindex="-1" role="button"
                            aria-disabled="true">SQL</a>



                        <h5 class="section-headline2">Web Frameworks:</h5>

                        <a href="#" class="btn btn-outline-dark btn-like" tabindex="-1" role="button"
                            aria-disabled="true">HTML</a>
                        <a href="#" class="btn btn-outline-dark btn-like" tabindex="-1" role="button"
                            aria-disabled="true">CSS</a>
                        <a href="#" class="btn btn-outline-dark btn-like" tabindex="-1" role="button"
                            aria-disabled="true">Javascript</a>



                    </div>




                    <div>
                        <h5 class="section-headline2">IDE</h5>

                        <a href="#" class="btn btn-outline-dark btn-like" tabindex="-1" role="button"
                            aria-disabled="true">vscode</a>

                        <a href="#" class="btn btn-outline-dark btn-like" tabindex="-1" role="button"
                            aria-disabled="true">MySQl
                            Workbench
                        </a>
                        <a href="#" class="btn btn-outline-dark btn-like" tabindex="-1" role="button"
                            aria-disabled="true">MySQl
                            Jyupter
                        </a>
                    </div>





                </div>
                <div class="right-col">
                    <div class="personal-info">
                        <div class="  personal-name  ">{{ name }}</div>
                       
                    </div>
                    <div class="resume-section">
                        <h4> <i class=" fw-bold section-headline "></i>Experience</h4>

                        <div>
                            <h5 class="fw-bold">UST Global, Trivandrum, India - FullTime</h5>
                        </div>
                        <ul>
                            <li>Developed SQL queries and worked on database technologies like MySQL and Postgres.</li>
                            <li>Helped develop Python scripts to import and export large datasets for services.</li>
                            <li>Worked on data migration between different databases for releases.</li>
                            <li>Helped support day-to-day support tickets in production to solve user issues.</li>
                        </ul>
                        <div>
                            <h5 class="fw-bold">IPAASYS Technologies, Hyderabad, India - Internship</h5>
                        </div>
                        <ul>
                            <li>Created a school management system as part of the project.</li>
                            <li>Successfully completed the project using Python, HTML, JavaScript, CSS, and jQuery.</li>
                            <li>Presented successfully to the team and received appreciation.</li>
                        </ul>
                    </div>
                    <div class="resume-section">
                        <h4> <i class=" fw-bold section-headline "></i>Education</h4>
                        <div class="fw-bold">
                            Master of Science in Information Studies
                        </div>
                        <ul>
                            <li>Trine University, CA - Jan, 2023 to Dec 2024 (Expected graduation date)</li>
                        </ul>
                        <div class="fw-bold">Bachelor of Technology
                        </div>
                        <ul>
                            <li>JNTU, Hyderabad, India - 2016 to 2020 (Computer Science and Engineering)</li>
                        </ul>
                    </div>
                    <div class="resume-section">
                        <h4 class=" fw-bold section-headline">Academic Projects</h4>
                        <div class="fw-bold">USA Housing Analysis</div>
                        <ul>
                            <li>Performed data cleaning to remove anomalies.</li>
                            <li>Performed the housing analysis based on Income, population, house prices and Geography
                                parameters.</li>
                            <li>Developed a GUI to search and visualize the data for any given query.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            name: "Manasa Varre",
         

            imageUrl: require("@/assets/photo.jpg")  // Adjust the image path as necessary
        };
    }
};
</script>

### Updated Styles
```css
<style scoped>

.btn-like {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    margin-right: 10px;
    margin-top: 5px;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    cursor: not-allowed;
    /* Ensures the cursor shows as not-allowed */
    border: 1px solid;
    border-color: white;
    color: white;
    background-color: transparent;
    /* Ensures the background remains transparent */
    opacity: 1;
    /* Remove the default opacity */
}

.btn-dis {
    color: #f9f9f9;
    border-color: white;
}

.icon-margin {
    margin-right: 20px;

}

.dot {
    list-style-type: none;
} 

.resume-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Adjust as necessary */
}

.resume-content {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    width: 100%;
    max-width: 1200px;
    /* Adjust as necessary */
    background-color: #f9f9f9;
    /* Adjust background color as necessary */
    padding: 30px;
}

.d-flex {
    display: flex;
}

.left-col {
    width: 30%;
    background-color: #6f5ea7;
    color: #ffffff;
    border-right: 1px solid #82C0CC;
    padding: 30px;
    padding-top: 5px;

}


.right-col {
    width: 70%;
    background-color: #ffffff;
    color: #0c0a0a;
    padding: 30px;
}

.section-headline {
    font-size: 20px;
    margin-bottom: 15px;
    margin-top: 0;
}

.section-headline1 {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;


}

.section-headline2 {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;


}

.right-col .section-headline {
    color: #0c0a0a;
}

.left-col .section-headline {
    color: #ffffff;
}



.personal-info {
    margin-bottom: 20px;
}

.personal-name {
    font-weight: 700;
    color: #0c0a0a;
    font-size: 28px;
    border-bottom: 1px solid #382183;
    margin: 0;
    padding-bottom: 15px;
    white-space: nowrap;
    /* Ensures the name doesn't wrap to a new line */
    overflow: hidden;
    /* Ensures the name doesn't overflow the container */
    text-overflow: ellipsis;
    /* Adds ellipsis if the name is too long */
}


.profile-pic-small {
    width: 150px;
    height: 150px;
    margin-left: 50px;
    border-radius: 50%;

}

#resume ul {
    padding-inline-start: 16px;
    margin-block-end: 0px;
    margin-block-start: 5px;
}

main {
    font-family: sans-serif;
    font-size: 16px;
}
</style>
