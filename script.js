let homeButton = document.getElementById("homeButton")
let aboutButton = document.getElementById("aboutButton")
let worksButton = document.getElementById("worksButton")
let contactButton = document.getElementById("contactButton")

window.onload = function() {
    window.setTimeout(() => { window.scrollTo(0,0); },10);
};

const sections = document.querySelectorAll("div[id]");
const navbarLinks = document.querySelectorAll('.navList #navListItem a');
// console.log(sections)
// console.log(navbarLinks)

// sections.forEach((section,index) => {
//     console.log(section.id)
// });
// console.log(sections)
window.addEventListener("scroll", navHighlighter);
function navHighlighter (){
    navbarLinks.forEach(link => link.classList.remove('active'));
    let windowPosition = window.scrollY;
    sections.forEach((section) => {
        let sectionHeight = section.offsetHeight;
        let sectionTop = section.offsetTop -50;
        if(screen.width>965){
            sectionTop = section.offsetTop -200;
        }
        else if(screen.width>425){
            sectionTop = section.offsetTop -500;
        }
        else{
            sectionTop = section.offsetTop - 300;
        }
        if (windowPosition > sectionTop && windowPosition <= sectionTop + sectionHeight){
            let navName = section.id
            if(navName == "home"){
                homeButton.classList.add('active')
            }
            else if(navName == "aboutMe"){
                aboutButton.classList.add('active')
            }
            else if(navName == "myWorks"){
                worksButton.classList.add('active')
            }
            else if(navName == "contactMe"){
                contactButton.classList.add('active')
            }
        }
    });
};

function sendMail(){
    (function(){
        emailjs.init("qE-CiPgkscNeS-_Hv");
    })();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("text").value;
    if(name == "" || email == "" || msg == ""){
        alert("All fields are required!")
    }
    else{
        var params = {
            name : name,
            email : email,
            message : msg,
        };
        const serviceId = "service_herce7r";
        const templateId = "template_b9tfpje";
        
        emailjs
            .send(serviceId,templateId,params,"qE-CiPgkscNeS-_Hv")
            .then(
                res =>{
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("text").value = "";
                    console.log(res);
                    alert("Your Message has been sent!");
                }
            )
            .catch((err) => console.log(err));
    }
};
