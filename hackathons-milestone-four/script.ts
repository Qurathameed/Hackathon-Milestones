// Get reference to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Hnadle form submission 
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    //Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const contant = (document.getElementById('contant') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value

   //generate the resume content dynamilcally
   const resumeHTML = `
   <h2><b>Editable Resume</b></h2>
   <h3>Personal Information</h3>
   <p><b>Name:</b><span contenteditable="true">${name}</span></p>
   <p><b>Contact:</b><span contenteditable="true">${contant}</span></p>
   <p><b>Email:</b><span contenteditable="true">${email}</span></p>

   <h3>Education</h3>
   <p contenteditable="true">${education}</p>

   <h3>Skills</h3>
   <p contenteditable="true">${skills}</p>

   <h3>Experience</h3>
   <p contenteditable="true">${education}</p>  
    `;

    //Display generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error(`The resume display element is missing.`)
    };
})