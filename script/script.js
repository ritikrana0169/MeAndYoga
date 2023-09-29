/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
// if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
// }

  


/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
var callUs=document.querySelector(".btnAnimate");
callUs.addEventListener("click",()=>{
    console.log("s")
})

var mainContent=document.querySelector(".main");
var mainContent2=document.querySelector(".mainContent");

var aboutUs=document.querySelector(".aboutUs");
aboutUs.addEventListener("click",()=>{
    
mainContent2.innerHTML="";
mainContent.innerHTML="";
mainContent.innerHTML='<div class="aboutUsMain"> <div> <img src="./meAdYogaImage/children.png" alt="" srcset=""> <p>Best for Kids</p></div> <div><img src="./meAdYogaImage/24-hours.png" alt="" srcset=""><p>24 hours Availablity</p></div> <div> <img src="./meAdYogaImage/coach.png" alt="" srcset=""><p>Certified Trainer</p></div> <div> <img src="./meAdYogaImage/classs.png" alt="" srcset=""><p>Online classes</p></div> <div> <img src="./meAdYogaImage/buddy.png" alt="" srcset=""><p>Friendly Environment</p></div></div>';

})
var meets=document.querySelector(".meets");
meets.addEventListener("click",()=>{
    mainContent2.innerHTML="";
mainContent.innerHTML="";

mainContent.innerHTML=`<div class="grid-container">
<div class="grid-item">
    <img src="./meAdYogaImage/meet2.jpeg" alt="Image 1">
</div>
<div class="grid-item">
<img src="./meAdYogaImage/meet4.jpeg" alt="Image 1">
</div>
<div class="grid-item">
<img src="./meAdYogaImage/meet5.jpeg" alt="Image 2">
</div>
<div class="grid-item">
<img src="./meAdYogaImage/meet8.jpeg" alt="Image 2">
</div>
<div class="grid-item">
<img src="./meAdYogaImage/meet1.jpeg" alt="Image 3">
</div>
<div class="grid-item">
<img src="./meAdYogaImage/meet7.jpeg" alt="Image 1">
</div>
<div class="grid-item">
<img src="./meAdYogaImage/meet3.jpeg" alt="Image 2">
</div>
<div class="grid-item">
<img src="./meAdYogaImage/meet9.jpeg" alt="Image 3">
</div>
<div class="grid-item">
<img src="./meAdYogaImage/meet6.jpeg" alt="Image 3">
</div>
<!-- Add more grid items as needed -->
</div>`;

})
var Achievments=document.querySelector(".Achievments");
Achievments.addEventListener("click",()=>{
    mainContent.innerHTML="";mainContent2.innerHTML="";
    mainContent.innerHTML=`<div class="grid-container">
    <div class="grid-item">
        <img src="./meAdYogaImage/ac2.jpeg" alt="Image 1">
    </div>
    <div class="grid-item">
    <img src="./meAdYogaImage/ac7.jpeg" alt="Image 1">
    </div>
    <div class="grid-item">
    <img src="./meAdYogaImage/ac5.jpeg" alt="Image 2">
    </div>
    <div class="grid-item">
    <img src="./meAdYogaImage/ac1.jpeg" alt="Image 2">
    </div>
    <div class="grid-item">
    <img src="./meAdYogaImage/ac3.jpeg" alt="Image 3">
    </div>
    <div class="grid-item">
    <img src="./meAdYogaImage/ac4.jpeg" alt="Image 1">
    </div>
    <div class="grid-item">
    <img src="./meAdYogaImage/ac6.jpeg" alt="Image 2">
    </div>
    <!-- Add more grid items as needed -->
    </div>`;

})
var Events=document.querySelector(".Events");
Events.addEventListener("click",()=>{
    mainContent.innerHTML="";mainContent2.innerHTML="";
    mainContent.innerHTML=`
    <div class="myTag"><h2>Event Videos</h2></div>
    <div class="grid-container">
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev1.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev3.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev4.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev7.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev24.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev25.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev26.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev28.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev29.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev30.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev2.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev5.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev6.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <div class="grid-item">
    <video controls>
    <source src="./videos/ev27.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
    </div>
    <!-- Add more grid items as needed with different video embed URLs -->
</div>
<div class="myTag"><h2>Event Images</h2></div>

<div class="grid-container">
        <div class="grid-item">
            <img src="./videos/ev12.jpeg" alt="Image 1">
        </div>
        <div class="grid-item">
            <img src="./videos/ev10.jpeg" alt="Image 2">
        </div>
        <div class="grid-item">
            <img src="./videos/ev13.jpeg" alt="Image 3">
        </div>
        <div class="grid-item">
            <img src="./videos/ev14.jpeg" alt="Image 2">
        </div>
        <div class="grid-item">
            <img src="./videos/ev8.jpeg" alt="Image 3">
        </div>
        <div class="grid-item">
            <img src="./videos/ev11.jpeg" alt="Image 1">
        </div>
        <div class="grid-item">
            <img src="./videos/ev15.jpeg" alt="Image 2">
        </div>
        <div class="grid-item">
            <img src="./videos/ev16.jpeg" alt="Image 3">
        </div>
        <div class="grid-item">
            <img src="./videos/ev17.jpeg" alt="Image 1">
        </div>
        <div class="grid-item">
            <img src="./videos/ev18.jpeg" alt="Image 2">
        </div>
        <div class="grid-item">
            <img src="./videos/ev19.jpeg" alt="Image 3">
        </div>
        <div class="grid-item">
            <img src="./videos/ev22.jpeg" alt="Image 1">
        </div>
        <div class="grid-item">
            <img src="./videos/ev23.jpeg" alt="Image 2">
        </div>
        <div class="grid-item">
            <img src="./videos/ev20.jpeg" alt="Image 3">
        </div>
        <!-- Add more grid items as needed -->
    </div>

    `;
})
var contact=document.querySelector(".contact");
contact.addEventListener("click",()=>{
    mainContent.innerHTML="";mainContent2.innerHTML="";
    mainContent.innerHTML=`
    <div class="contact-form">
        <h1>Contact Us</h1>
        <form action="https://formspree.io/your-email@example.com" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="_replyto" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <input type="submit" value="Submit">
        </form>
    </div>`;
})

