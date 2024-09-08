var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var imageInput = document.getElementById("profileImage");
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById("email");
    var contactElement = document.getElementById("contact");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var imageElement = document.getElementById("image");
    var name = nameElement.value;
    var email = emailElement.value;
    var contact = contactElement.value;
    var education = educationElement.value;
    var skills = skillsElement.value;
    var profileImageFIle = (_a = imageInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profileImageURL = profileImageFIle ? URL.createObjectURL(profileImageFIle) : "";
    // Correctly use the extracted values in the template string
    var resOutput = "\n        <h2>Personal Information</h2>\n           ".concat(profileImageURL ? "<img src=".concat(profileImageURL, " alt=\"profile picture\" class=\"profileImage\">") : '', "\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name, "</span></p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n        <p><strong>Contact:</strong><span id=\"edit-contact\" class=\"editable\"> ").concat(contact, "</span></p>\n        <h2>Education</h2>\n        <p><strong>Education:</strong><span id=\"edit-education\" class=\"editable\"> ").concat(education, "</span></p>\n          <p><strong>Education:</strong> <span id=\"edit-skills\" class=\"editable\">").concat(skills, "</span></p>\n    ");
    var resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resOutput;
        makeEdit();
    }
    else {
        console.error("The resume output element is missing");
    }
});
function makeEdit() {
    var EditElements = document.querySelectorAll(".editable");
    EditElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
