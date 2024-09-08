var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById("email");
    var contactElement = document.getElementById("contact");
    var educationElement = document.getElementById("education");
    var imageElement = document.getElementById("image");
    var name = nameElement.value;
    var email = emailElement.value;
    var contact = contactElement.value;
    var education = educationElement.value;
    var image = imageElement.files && imageElement.files.length > 0 ? imageElement.files[0].name : 'No image uploaded';
    // Correctly use the extracted values in the template string
    var resOutput = "\n        <h2>Personal Information</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <h2>Education</h2>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <h2>Image</h2>\n        <p><strong>Image:</strong> ").concat(image, "</p>\n    ");
    var resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
});
