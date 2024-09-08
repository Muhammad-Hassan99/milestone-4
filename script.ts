document.getElementById('resumeform')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const contactElement = document.getElementById("contact") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
    const imageElement = document.getElementById("image") as HTMLInputElement;
  
    const name = nameElement.value;
    const email = emailElement.value;
    const contact = contactElement.value;
    const education = educationElement.value;
    const skills=skillsElement.value
    const image = imageElement.files && imageElement.files.length > 0 ? imageElement.files[0].name : 'No image uploaded';

    // Correctly use the extracted values in the template string
    const resOutput = `
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
        <p><strong>Contact:</strong><span id="edit-contact" class="editable"> ${contact}</span></p>
        <h2>Education</h2>
        <p><strong>Education:</strong><span id="edit-education" class="editable"> ${education}</span></p>
          <p><strong>Education:</strong> <span id="edit-skills" class="editable">${skills}</span></p>
        <h2>Image</h2>
        <p><strong>Image:</strong> ${image}</p>
    `

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resOutput;
        makeEdit()
    } else {
        console.error("The resume output element is missing");
    }
})
function makeEdit(){
    const EditElements=document.querySelectorAll(".editable")
EditElements.forEach(element=>{
    element.addEventListener('click',function(){
        const currentElement=element as HTMLElement
        const currentValue=currentElement.textContent||"";
        if(currentElement.tagName==="P" || currentElement.tagName==="SPAN"){
            const input=document.createElement("input")
            input.type="text"
            input.value=currentValue
            input.classList.add('editing-input')
            input.addEventListener('blur',function(){
                currentElement.textContent=input.value
                currentElement.style.display="inline"
            input.remove()
        })
            currentElement.style.display="none"
            currentElement.parentNode?.insertBefore(input,currentElement)
            input.focus()
        }
    })
})
}