const media= document.querySelector('.contact-media');
const contactList= [
    {
        id:length,
        icon:"fa-solid fa-phone-volume",
        name:"phone",
        value:"+91 6206136626",
        href: "tel:+916206136626",
    },
    {
        id:2,
        icon:"fa-solid fa-envelope",
        name:"E-Mail",
        value: "sachin9973083181@gmail.com",
        href:"mailto: Sachin.Chauhan.sachin9973083181@gmail.com",
    },
    {
        id:3,
        icon:"fa-solid fa-location-dot",
        name: "Country",
        value:"India",
        href:"#"
    },
];
const contactContent= contactList.map((ele)=>{
    return`<div class="media" key=${ele?.id}>
                        <span>
                            <i class="${ele?.icon}"></i>
                        </span>
                        <div class="contact-value">
                            <p>${ele?.name}</p>
                            <a href=${ele?.href}>${ele?.value}</a>
                        </div>
                    </div>`
}).join("");

if(media)media.innerHTML=contactContent;

// send contact massage
const sendBtn = document.querySelector("#send-message");

// const originalText= sendBtn.innerHTMl;
const originalText = sendBtn.innerHTML;
const originalStyle ={
    backgroundColor:sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border:sendBtn.style.border,
    boxShadow:sendBtn.style.boxShadow,
};

document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault();

    sendBtn.innerHTMl ='Sending...';
    sendBtn.style.backgroundColor="gray";
    sendBtn.style.color="white";
    sendBtn.style.border="none";
    sendBtn.style.boxShadow="none";
    sendBtn.disabled=false;

    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const phone= document.getElementById('phone').value;
    const message= document.getElementById('message').value;


    if(!name || !email || !phone || !message){
        sendBtn.innerHTML=originalText;
        Object.assign(sendBtn.style,originalStyle);
        sendBtn.disabled=false;
        
        return Toastify({
         text: "All fields are mandatory !",
         duration: 3000,
 
         gravity: "top", 
         position: "center", 
         close:true,
         stopOnFocus: true, 
         style: {
              background: "rgb(206,16,16)",
            },
  
        }).showToast();

        // setTimeout(()=>{
        //     sendBtn.innerHTML=originalText;

        //     Object.assign(sendBtn.style,originalStyle);
        //     sendBtn.disabled=false;
        // },2000);
        
    }
    emailjs.send("service_oxmj7du","template_e1ywkxt", {
        name,
        email,
        phone,
        message,
    }).then(() => {
                      Toastify({
         text: "Message sent!",
         duration: 3000,
 
         gravity: "top", 
         position: "center", 
         close:true,
         stopOnFocus: true, 
         style: {
              background: "rgb(9,222,38)",
            },
            
  
         }).showToast();
         
    // ✅ Button & form reset after success
    sendBtn.innerHTML = originalText;
    Object.assign(sendBtn.style, originalStyle);
    sendBtn.disabled = false;   // <-- yaha enable karna jaruri hai
    document.getElementById("contact-form").reset();
                    },
                     (error) => {
                        Toastify({
         text: "Message Failed.. !",
         duration: 3000,
 
         gravity: "top", 
         position: "center", 
         close:true,
         stopOnFocus: true, 
         style: {
              background: "rgb(206,16,16)",
            },
  
        }).showToast();
                       console.log('FAILED...', error);

    // ✅ Button reset after error
    sendBtn.innerHTML = originalText;
    Object.assign(sendBtn.style, originalStyle);
    sendBtn.disabled = false;   // <-- yaha bhi enable
                    });
});
// emailjs
//       .send("service_oxmj7du", "template_e1ywkxt", {
//         name,
//         email,
//         phone,
//         message,
//       })
//       .then(
//         () => {
//           Toastify({
//             text: "Message Sent !",
//             duration: 3000,
//             gravity: "top",
//             position: "center",
//             close: true,
//             style: {
//               background: "rgb(9, 222, 38)",
//             },
//           }).showToast();

//           setTimeout(() => {
//             sendBtn.innerHTML = originalText;
//             Object.assign(sendBtn.style, originalStyles);
//             sendBtn.disabled = false;
//           }, 2000);
//         },
//         (error) => {
//           console.log("FAILED...", error);

//           Toastify({
//             text: "Message Failed. Try again.",
//             duration: 3000,
//             gravity: "top",
//             position: "center",
//             close: true,
//             style: {
//               background: "rgb(206, 16, 16)",
//             },
//           }).showToast();

//           sendBtn.innerHTML = originalText;
//           Object.assign(sendBtn.style, originalStyles);
//           sendBtn.disabled = false;
//         }
//       );
//   });
