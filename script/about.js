const aboutTabs=document.querySelectorAll (".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded',()=> {
    if(aboutTabs){
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
        e.preventDefault();

        aboutTabs.forEach((a)=>{
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c)=>{
            c.classList.remove("active");
        });

        const activeTab= tab.dataset.section;
        document.getElementById(activeTab).classList.add("active");

        if(activeTab=== "experience"){
            const experience=document.querySelector(".experience-list");

           const experienceList = [
           {
          id:1,
          date: "Experience",
          position: "Front-end Developer",
          company: "Learning Project (2025)",
          details:
            "I have completed 8+ projects, including a Weather App, Calculator, To-Do App, Notes App, MCQ Quiz, Sign-In UI, Life Timer, GitHub Profile Search, and an E-commerce Website. These projects helped me understand real-world problem solving, API usage, UI/UX, and clean code practices.",
          },
          {
          id: 2,
          date: "Looking for Freelance Opportunities",
          position: "Freelance Web Developer",
          company: "Open to Collaborations & Freelance Work",
          details:
            "I’m a passionate web developer (Frontend ) currently open for freelance projects. I help businesses and individuals build fast, responsive, and user-friendly websites.  Developed custom websites for local businesses using HTML, CSS, JavaScript.",
        },
       {
          id: 3,
          date: "2024-2025",
          position: "Frontend Developer",
          company: "Self-Employed",
          details:
            "Built responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
        },
        
        
        
            ];

            const experienceContent= experienceList.map((ele)=>{
                return`
                <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                
                `;
            }).join(" ");

            if(experience){
                experience.innerHTML= experienceContent;
            }
        }else if(activeTab==="education"){
           const education = document.querySelector(".education-list");

           const educationList=[
               {
            id: 1,
          date: "2023 - 2026",
          degree: "Bachelor of Computer Applications (BCA)",
          institution: "Internation college Ghosait, Lakhisari (Munger university)",
          details:
            "Studied core subjects like Data Structures, Web Development, and Operating Systems. Built multiple academic projects using JavaScript and the MERN stack.",
        },
        {
          id: 2,
          date: "2017 - 2019",
          degree: "Higher Secondary Education (PCM - Science)",
          institution: "BSEB(S.R.S +2 H/S Persaban, Lakhisarai)",
          details:
            "Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in logical thinking and problem-solving.",
        },
        {
          id: 3,
          date: "2016 - 2017",
          degree: "Secondary School Certificate (10th)",
          institution: "BSEB(U.M.S. Surari (Lakhisarai))",
          details:
            "Completed basic schooling with distinction. Actively participated in computer clubs and tech-related events.",
        },
         ];

         const educationContent= educationList.map((ele)=>{
            return`
             <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
             `
         }).join(" ");

         if(education){
            education.innerHTML=educationContent;
         }
        }else if(activeTab==="skills"){
            const skills = document.querySelector(".skill-list");

            const skillList=[
                {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/html.png",
        },
        {
          id: 2,
          name: "CSS - Cascading Style Sheet",
          icon: "assets/skills/css.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "assets/skills/js.png",
        },
        {
          id: 4,
          name: "MongoDB",
          icon: "assets/skills/mongodb.png",
        },
        {
          id: 5,
          name: "Bootstrap",
          icon: "assets/skills/bootstrap.png",
        },
        {
          id: 6,
          name: "Node JS",
          icon: "assets/skills/node.png",
        },
        {
          id: 7,
          name: "React JS",
          icon: "assets/skills/react.png",
        },
         ];

         const skillContent = skillList.map((ele)=>{
            return`
            <div class="skill-box" key=${ele?.id}>
                        <img src=${ele?.icon} 
                        alt=${ele?.name}
                        title=${ele?.id}
                        loading="lazy">
                    </div>
            `
         }).join("");

         if(skills){
            skills.innerHTML=skillContent;
         }
        }else if(activeTab==="about-me"){
            const myInfo= document.querySelector(".my-info");

            const infoList=[

                {
          id: 1,
          key: "Name : ",
          value: "Sachin Kumar",
        },
        {
          id: 2,
          key: "Country : ",
          value: "India",
        },
        {
          id: 3,
          key: "Industry : ",
          value: "Software & IT",
        },
        {
          id: 4,
          key: "Experience : ",
          value: "Fresher",
        },
        {
          id: 5,
          key: "Address : ",
          value:"Vill-Bakiya bad, Post- Surari Imamnagar, PS- halsi, Dist-Lakhisarai, State-Bihar(811107)"
        },
            ];
            const infoContent = infoList.map((ele)=>{
                return`
                <div class="info-box" key=${ele?.id}>
                <span>${ele?.key}</span>
                <span>${ele?.value}</span>
                </div>
                `
            }).join("");
            if(myInfo){
                myInfo.innerHTML=infoContent;
            }
        }
    });
});