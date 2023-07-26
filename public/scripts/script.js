gsap.registerPlugin(ScrollTrigger);

// Hero section 
gsap.to('.d', {
    scrollTrigger: {
        trigger: '.d',
        scrub: 1,
        pin: true,
    },
    duration: '2',
    ease: 'ease',
    scale: .5,
})

// Hero Question 
gsap.to('#question > div', {
    scrollTrigger: {
        trigger: '.d',
        scrub: 1,
        pin: true  
    },
    duration: '2',
    ease: 'ease',
    // y: "-15vh",
    scale: .35,
})

// Hero question content fade out behaviour
gsap.to('#question .content', {
    scrollTrigger: {
        trigger: '#main',
        scrub: 1,
        start: "80% 90%",
        end: "90% 100%",
    },
    ease: 'ease',
    opacity: 0
})

// Hero section main content fade-in behaviour
gsap.to('#main', {
    scrollTrigger: {
        scrub: 1,
        start: "10% 40%",
        end: "13% 30%",
    },
    ease: "ease",
    opacity: 1
})


let stagger = .1
let displacement = 50
let shareArtDefaults = {
    scrollTrigger: {
        trigger: '#share-art .img-showcase',
        start: "50% 80%",
        toggleActions: "play pause resume",
    },
    ease: 'elastic'
}

//Image 3
var mapImageC = gsap.timeline({
    ...shareArtDefaults
});

mapImageC.to('.map-img.c', {  
    x: displacement,
    duration: .5,   
});

mapImageC.to('.map-img.c', {  
    x: displacement * -1,
    duration: .5,
});

mapImageC.to('.map-img.c', {  
    x: 0,
    duration: .5,
});

// move around
mapImageC.to('.map-img.c', {
    scale: .2,
    x: "24%",
    y: "-60%",
    delay: .2
})

mapImageC.to('.map-img.c', {
    scale: .2,
    x: "44%",
    y: "-30%",
    delay: .2
})

mapImageC.to('.map-img.c', {
    scale: .2,
    x: "-33%",
    y: "-110%",
    delay: 1   
})


// Image 2
var mapImageB = gsap.timeline({
    ...shareArtDefaults,
    delay: .1
});

mapImageB.to('.map-img.b', {  
    x: displacement,
    duration: .5,   
});

mapImageB.to('.map-img.b', {  
    x: displacement * -1,
    duration: .5,
});

mapImageB.to('.map-img.b', {  
    x: 0,
    duration: .5,
});


// move around
mapImageB.to('.map-img.b', {
    scale: .2,
    x: "-34%",
    y: "-80%",
    delay: .3
})

mapImageB.to('.map-img.b', {
    scale: .2,
    x: "10%",
    y: "80%",
    delay: 1
})

mapImageB.to('.map-img.b', {
    scale: .2,
    x: "30%",
    y: "10%",
    delay: 1.5
})


// Image 1
var mapImageA = gsap.timeline({
    ...shareArtDefaults,
    delay: .2
});

mapImageA.to('.map-img.a', {  
    x: displacement,
    duration: .5,   
});

mapImageA.to('.map-img.a', {  
    x: displacement * -1,
    duration: .5,
});

mapImageA.to('.map-img.a', {  
    x: 0,
    duration: .5,
});

// move around
mapImageA.to('.map-img.a', {
    scale: .2,
    x: "4%",
    y: "80%",
})

mapImageA.to('.map-img.a', {
    scale: .2,
    x: "24%",
    y: "-50%",
    ease: "circ.inOut",
    delay: 1
})

mapImageA.to('.map-img.a', {
    scale: .2,
    x: "-20%",
    y: "-10%",
    ease: "circ",
    className: "in-place",
    delay: 1
})

// Call to action
const joinFormSection = document.querySelector("#join-form");

const joinCtas = document.querySelectorAll("button.call-to-action");
joinCtas.forEach(button => {
    button.addEventListener("click", () => {
        joinFormSection.classList.remove("hide-overflow")
        document.body.classList.add("hide-overflow")
        joinFormSection.classList.add("show");
    })
})

const formSectionOverlay = document.querySelector("#join-form .overlay");
const formCloseButton = document.querySelector("#join-form .close-modal");
[formSectionOverlay, formCloseButton].forEach( element => {
        element.addEventListener("click", () => {
            joinFormSection.classList.add("hide-overflow")
            document.body.classList.remove("hide-overflow")
            joinFormSection.classList.remove("show");
        })
    }
)

// Form controls

// const baseURL = "https://artmyspace.herokuapp.com/"

// // To keep the api awake while the user is still on the page 
// // (API is hosted on heroku hobby dev plan and it sleeps every 30mins)
// function keepAPIAlive() {
//     var xhr = new XMLHttpRequest();

//     xhr.addEventListener("readystatechange", function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log('%cAPI awake!', 'color: green;font-weight: bold')
//         } else if (this.readyState == 4 && this.status != 200) {
//             console.error("Something went wrong", this.status)
//         }
//     });

//     xhr.open("GET", baseURL);
//     xhr.send();
// }
// setInterval(keepAPIAlive(), 29 * 60 * 1000)

const joinForm = document.querySelector("#join-form form");

// Gets user input from for in api ready way
function getFormData () {
    let hasArt;
    hasArtworkFormValue = joinForm["have-artwork"].value;
    if (hasArtworkFormValue === "") {
        hasArt = null;
    } else if (hasArtworkFormValue === "1") {
        hasArt = "Yes";
    } else {
        hasArt = "No";
    }

    function getHomeOffice() {
        let homeOfficeFormValue = joinForm["home-or-office"].value;
        if (homeOfficeFormValue === "") {
            return {
                isPrivate: null,
                isOffice: null
            }
        } else if (homeOfficeFormValue === "home") {
            return {
                artLocation: 'Home',
            }
        } else {
            return {
                artLocation: 'Office',
            }
        }
    }
    return {
        firstName: joinForm.firstname.value,
        lastName: joinForm.lastname.value,
        email: joinForm.email.value,
        ...{hasArt},
        ...getHomeOffice()
    }
}

//UI update a successful or failed request
const formSuccessContent = document.querySelector("#form-success");
function updateFormUi(status) {
    if (status === 200) {
        name = joinForm.firstname.value;
        email = joinForm.email.value,
        formSuccessContent.innerHTML = `<span class="big">Great ${name}!</span>
        <p>We just sent you a mail at ${email}. ArtMySpace is launching soon so we'll keep you posted through your mail on new updates about the product. Till then, you can follow us on <a href="https://web.facebook.com/artmyspacenig/" target="_blank">Facebook</a>, <a href="https://www.instagram.com/artmyspacenig/" target="_blank">Instagram</a> and <a href="https://twitter.com/ArtMySpaceNig" target="_blank">Twitter</a>. Stay awesome!😊</p>`
        joinFormSection.dataset.state="success";
    } else {
        joinFormSection.dataset.state="fail"
    }
}

joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    var data = JSON.stringify(getFormData());

    var xhr = new XMLHttpRequest();
    xhr.timeout = 10 * 1000;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState == 4 && this.status == 201) {
            updateFormUi(this.status);
        } else if (this.readyState == 4 && this.status != 201) {
            updateFormUi(this.status);
        }
    });

    xhr.open("POST", "https://europe-west3-iron-radio-357421.cloudfunctions.net/ams-subscribe");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}) 

formTryAgain = document.querySelector("#form-try-again");
formTryAgain.addEventListener("click", () => {
    joinFormSection.dataset.state="0";
})

// Form home or office question behaviour
const formHomeOrOffice = document.querySelector("#form-home-or-office");
const formHomeOrOfficeQuestion = document.querySelector("#form-home-or-office p");
const haveArtworkChoices = document.querySelectorAll("input[name='have-artwork']");
haveArtworkChoices.forEach(element => {
    element.addEventListener("change", () => {
        formHomeOrOffice.classList.add("show");
        if (element.id === "has-artwork-yes" && element.value === "1") {
            formHomeOrOfficeQuestion.innerHTML = "Great! Are they for your home or office?";
        } else {
            formHomeOrOfficeQuestion.innerText = "Great! Where would you like your new artworks?"
        }
    })
})

// Weird behvaiour fix for moblie devices
const joinFormInputs = document.querySelectorAll("#join-form input");
joinFormInputs.forEach(input => {
    input.addEventListener("focus", () => {
        document.querySelector("#join-form").scrollIntoView()
    })
})