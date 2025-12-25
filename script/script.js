const toggle = document.getElementById('menu-toggle');
if(toggle && toggle.checked){
    document.body.classList.add("no-scroll");
}else{
    document.body.classList.remove("no-scroll");
}
const words=[
    "Sachin Kumar",
    "Front-end Dev.",
    "Frontend Engineer",  
    "Web UI Engineer",
    "Programer", 
    
];
const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex=0;
let isDeleting = false;
let typingDelay=100;
let erasingDelay=100;
let nextWordDelay=1000;


const type =() =>{
    const currentword=words[wordIndex];

    if(!isDeleting){
        typingText.textContent=currentword.substring(0,charIndex +1);
        charIndex++;

        if(charIndex===currentword.length){
            isDeleting=true;
            setTimeout(type,nextWordDelay);

        }else{
            setTimeout(type, typingDelay)
        }
    }else{
        typingText.textContent=currentword.substring(0, charIndex-1);
        charIndex--;

        if(charIndex===0){
            isDeleting=false;
            wordIndex=(wordIndex+1)%words.length;
            setTimeout(type,500);
        }else{
            setTimeout(type,erasingDelay);
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    if(words?.length) type();

});


// const navlinks = document.querySelectorAll('navlink');
//  const tabs= document.querySelectorAll(".  content");


const navlinks= document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();

        navlinks.forEach((l)=>{
            if(l===link){
                l.classList.add("active");
            }else{
                l.classList.remove("active")
            }
        });


       const tabName = link.dataset.tab;
       tabs.forEach((tab)=>{

        if(tab.id === tabName){
            tab.classList.add("active");
        }else{
            tab.classList.remove("active");
        }
       });

       if(tabName==="Services"){
        const Servicelist=[
            {
                id: 1,
                icon:"",
                text:"Frontend Development",
                para:"I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and Node.js",
            },
            {
                id:2,
                icon:"",
                text:"Single Page Applications (SPA)",
                para:"Single Page Applications (SPA) using React ",

            },
            {
                id:3,
                icon:"",
                text:"API Integration",
                para:"API Integration for real-time data apps.",

            },
             {
                id:4,
                icon:"",
                text:" Git & GitHub",
                para:"Version Control with Git and GitHub",

            },
            {
                id:5,
                icon:"",
                text:"Small Backend / App Logic",
                para:"Node.js + Express se simple backend API. JSON data handling etc. "
            },
             {
                id:6,
                icon:"",
                text:"Code Optimization & Debugging",
                para:"I write clean, reusable code and improve website performance by fixing bugs"
            },
             {
                id: 7,
                icon:"",
                text:"UX/UI Design",
                para:"Custom mobile apps for Android and iOS using React Native and Expo, designed to provide excellent UI/UX",
            },
            {
                id: 8,
                icon:"",
                text:"Photography",
                para:"End-to-end delivery of freelance projects — from planning to deployment — with quality assurance and post-launch support.",
            },

             {
                id: 9,
                icon:"",
                text:"SEO Optimization",
                para:"I improve website visibility on search engines with optimized structure, keywords, and performance best",
            },

        ];
         const Services = document.getElementsByClassName("Services-list");

         const innerContent= Servicelist.map((l)=>{
            return`
             <div class="box" key=${l?.id}>
                    <div class="head-icons">
                        <i class="fa-solid fa-code"></i>
                        <span><i class="fa-solid fa-arrow-down"></i>
                        </span>
                    </div>
                    <h3>${l?.text}</h3>
                    <span class="spacer"></span>

                    <p>${l?.para}</p>
                    
                </div>
            `;
         }).join("");
         Array.from(Services).forEach((ele)=>{
            ele.innerHTML=innerContent;

         });


       }

       toggle.checked=false;

    });
});


