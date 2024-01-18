//navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height) {
            //navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +  id  + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        } 
        else {
            sec.classList.remove('show-animate');
        }
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const form = document.querySelector("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "vinyrbe@gmail.com",
        Password: "D875C37C2381BE50015095C4C55A84AAE620",
        To: 'vtan6762@gmail.com',
        From: "vinyrbe@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit" , (e) => {
    e.preventDefault();

    sendEmail();
});