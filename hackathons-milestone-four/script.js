// Get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Hnadle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //Collect input values
    var name = document.getElementById('name').value;
    var contant = document.getElementById('contant').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //generate the resume content dynamilcally
    var resumeHTML = "\n   <h2><b>Editable Resume</b></h2>\n   <h3>Personal Information</h3>\n   <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n   <p><b>Contact:</b><span contenteditable=\"true\">").concat(contant, "</span></p>\n   <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n\n   <h3>Education</h3>\n   <p contenteditable=\"true\">").concat(education, "</p>\n\n   <h3>Skills</h3>\n   <p contenteditable=\"true\">").concat(skills, "</p>\n\n   <h3>Experience</h3>\n   <p contenteditable=\"true\">").concat(education, "</p>  \n    ");
    //Display generated resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
    ;
});
