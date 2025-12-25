const projectList = [
  {
    id: 1,
    number: "01",
    dev:"Front-end Project.",
    title: "Weather-app projects",
    description:
      "A responsive Weather App that provides real-time weather updates including temperature, humidity, wind speed, and conditions using HTML, CSS, JavaScript & OpenWeatherMap API.!",
    techStack: ["HTML", "CSS", "and JavaScript"],
    image: "assets/projects/weather-app.webp",
    liveLink: "https://sachin-lkr.github.io/weather-app/",
    githubLink: "https://github.com/sachin-lkr/weather-app",
  },
  {
    id: 2,
    number: "02",
    title: "Calculator",
    description:
      "This project is a responsive calculator application created with HTML, CSS, and JavaScript. It allows users to perform fundamental arithmetic operations including addition, subtraction, multiplication, and division. The design is minimalistic with a modern UI, and the project demonstrates core JavaScript concepts such as DOM manipulation, event handling, and dynamic updates. It is fully responsive, ensuring smooth functionality on both desktop and mobile devices.",
    techStack: ["HTML", "CSS" , "and JavaScript"],
    image: "assets/projects/colculator.webp",
    liveLink: "https://sachin-lkr.github.io/calculator/",
    githubLink: "https://github.com/sachin-lkr/calculator",
  },
  {
    id: 3,
    number: "03",
    title: "To-Do List",
    description:
      "Task management app built with HTML, CSS, and JavaScript, allowing users to add, mark complete, and delete tasks with local storage support.",
    techStack: ["HTML", "CSS" , "and JavaScript"],
    image: "assets/projects/to-do.JPG",
    liveLink: "https://sachin-lkr.github.io/To-Do-List/",
    githubLink: "https://github.com/sachin-lkr/To-Do-List",
  },
  {
    id: 4,
    number: "04",
    title: "Quiz-App",
    description:
      "A web-based quiz app where users can attempt multiple-choice questions, receive instant feedback on answers, and view their final score. Designed with a responsive interface and developed using HTML, CSS, and JavaScript for smooth performance on desktop and mobile.",
    techStack: ["HTML", "CSS" , "and JavaScript"],
    image: "assets/projects/quiz-app.JPG",
    liveLink: "https://sachin-lkr.github.io/Quiz-app/",
    githubLink: "https://github.com/sachin-lkr/Quiz-app",
  },
  {
    id: 5,
    number: "05",
    title: "Search GitHub Profile",
    description:
      "A clean and responsive GitHub Profile Search application built with HTML, CSS, and JavaScript, leveraging the GitHub Public API to show real-time user details.",
    techStack: ["HTML", "CSS" , "and JavaScript"],
    image: "assets/projects/searchgithub.JPG",
    liveLink: "https://sachin-lkr.github.io/github-profile-search/",
    githubLink: "https://github.com/sachin-lkr/github-profile-search",
  },
  {
    id: 6,
    number: "06",
    title: "Notes App",
    description:
      "A Notes application built using HTML, CSS, and JavaScript that allows users to create, edit, delete, and manage notes with a simple and user-friendly interface.",
    techStack: ["HTML", "CSS" , "and JavaScript"],
    image: "assets/projects/notes.JPG",
    liveLink: "https://sachin-lkr.github.io/notes-apps/",
    githubLink: "https://github.com/sachin-lkr/notes-apps",
  },
  {
    id: 7,
    number: "07",
    title: "Text QR code Generator",
    description:
      "A Text QR Code Generator built using HTML, CSS, and JavaScript that converts user-entered text into a QR code instantly with a clean and responsive interface.",
    techStack: ["HTML", "CSS" , "and JavaScript"],
    image: "assets/projects/qr.JPG",
    liveLink: "https://sachin-lkr.github.io/text_qr_code/",
    githubLink: "https://github.com/sachin-lkr/text_qr_code",
  },
  {
    id: 8,
    number: "08",
    title: "Life-Timer",
    description:
      "A Life Timer web application built using HTML, CSS, and JavaScript that calculates and displays a user’s age in years, months, days, hours, minutes, and seconds in real time.",
    techStack: ["HTML", "CSS" , "and JavaScript"],
    image: "assets/projects/lifetimer.JPG",
    liveLink: "https://sachin-lkr.github.io/lifeTimer/",
    githubLink: "https://github.com/sachin-lkr/lifeTimer",
  },
];

const projects= document.querySelector(".projects");
let currentIndex =0;
const renderProject =(index)=>{
    const projectContent= projectList[index];

    const previousDisabled = currentIndex===0;

    const nextDisabled = currentIndex===projectList.length-1;

    projects.innerHTML= `
    <div class="projects-info">
                    <h2>Front-end
                      <span>Projects</span>
                    </h2>
                    <h3>${projectContent?.number}</h3>
                    <h4>${projectContent?.title}</h4>
                    <p>
                        ${projectContent?.description}
                    </p>
                    <div class="tech-stack">
                        ${projectContent?.techStack?.map((tech, i)=>{
                          return`
                          <span key =${i}>${tech} </span>`;
                        })}
                        

                    </div>
                    <hr/>
                    <div class="links">
                        <div class="live">
                          <a href=${projectContent?.liveLink} target="_blank">
                             <i class="fa-solid fa-arrow-right"></i>
                              
                          </a>
                           <p> Live </p>
                        </div>
                        <a href=${projectContent.githubLink} target="_blank">
                         <i class="fa-brands fa-github"></i>
                         
                        </a>
                    </div>
                </div>

                <div class="right-section">
                    <a href=${projectContent?.liveLink} target="_blank">
                     <img src=${projectContent.image} alt="project" title="Click-here"loading="lazy">
                    </a>
                    
                    <div class="arrows">
                        <a href="#" id="previous" class=${previousDisabled? "disabled-btn":""}><i class="fa-solid fa-arrow-left"></i></a>
                        <a href="#" id="next" class=${nextDisabled? "disabled-btn":""}><i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>




    `;

    document.getElementById("previous").addEventListener("click",(e)=>{
        e.preventDefault();

        if(currentIndex>0){
          currentIndex--;
          renderProject(currentIndex);
        }
    });

     document.getElementById("next").addEventListener("click",(e)=>{
        e.preventDefault();

        if(currentIndex<projectList.length-1){
          currentIndex++;
          renderProject(currentIndex);
        }
    });
   

    
  
};
renderProject(currentIndex);


