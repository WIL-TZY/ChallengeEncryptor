const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const rightSidebar = document.getElementById("right-sidebar");
const h2 = document.getElementById("overwritten");
const paragraph = document.getElementById("old-text");
const newParagraph = document.getElementById("new-text");
const charaImg = document.getElementById("chara-img");
const copyButton = document.getElementById("option3");
const textToTransform = document.getElementById("text-to-transform");


// Form Submission Event Listener
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const text = textToTransform.value;
    let messages = [];

    if (text.length <= 3) {
        messages.push("Please type a longer text.");
    }

    // If the array isn't empty, it means there's an error
    if (messages.length > 0) {
        errorElement.textContent = messages.join(', ');
    } else {
        errorElement.textContent = ""; // Clear the error message if there are no errors

        // Handle the form submission here
        console.log("Form successfully submitted.\nText: " + text);

        // Clearing the previous content in the right sidebar & hiding the image element using CSS
        charaImg.style.display = "none";
        h2.innerHTML = "";
        paragraph.innerHTML = "";

        // Add the new content to the right sidebar
        newParagraph.textContent = text;

        // Show the copy button
        copyButton.style.display = "block";
    }
});


// Encrypt / Decrypt Event Listeners

// Encrypt Button Event Listener
document.getElementById("option1").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default button behavior

    const text = textToTransform.value;

    // Check if the text has less than 3 characters
    if (text.length <= 3) {
        errorElement.textContent = "Please type a longer text.";
        return; // Exit the event listener if there's an error
    }

    const encryptedText = encrypt(text);

    // Clear the error message
    errorElement.textContent = "";

    // Clearing the previous content in the right sidebar & hiding the image element using CSS
    charaImg.style.display = "none";
    h2.innerHTML = "";
    paragraph.innerHTML = "";

    // Add the new content to the right sidebar
    newParagraph.textContent = encryptedText;

    // Show the copy button
    copyButton.style.display = "block";
});



// Decrypt Button Event Listener
document.getElementById("option2").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default button behavior

    const text = textToTransform.value;

    // Check if the text has less than 3 characters
    if (text.length <= 3) {
        errorElement.textContent = "Please type a longer text.";
        return; // Exit the event listener if there's an error
    }

    const decryptedText = decrypt(text);

    // Clear the error message
    errorElement.textContent = "";

    // Clearing the previous content in the right sidebar & hiding the image element using CSS
    charaImg.style.display = "none";
    h2.innerHTML = "";
    paragraph.innerHTML = "";

    // Add the new content to the right sidebar
    newParagraph.textContent = decryptedText;

    // Show the copy button
    copyButton.style.display = "block";
});


// Encrypt / Decrypt Functions

function encrypt(encryptedString){
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    encryptedString = encryptedString.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if (encryptedString.includes(matrixCode[i][0])) {
            encryptedString = encryptedString.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }

    return encryptedString;
}


function decrypt(decryptedString){
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    decryptedString = decryptedString.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++) {
        if (decryptedString.includes(matrixCode[i][0])) {
            decryptedString = decryptedString.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }

    return decryptedString;
}



// Copying the text variable to the clipboard (Using the Clipboard API)
copyButton.addEventListener("click", () => {
    const text = document.getElementById("new-text").textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch((error) => {
            console.error("Error copying text to clipboard:", error);
        });
});



// OLD FUNCTIONS
/*
function buttonEncrypt() {
    const text = textToTransform.value;
    const encryptedText = encrypt(text);
    newParagraph.textContent = encryptedText;
    paragraph.textContent = "";
}
*/

/*
function buttonDecrypt() {
    const text = textToTransform.value;
    const decryptedText = decrypt(text);
    newParagraph.textContent = decryptedText;
    paragraph.textContent = ""; 
}
*/

