let nameInput = document.getElementById("nameInput");
let messageInput = document.getElementById("messageInput");
let urlInput = document.getElementById("urlInput");

let titleColor = document.getElementById("titleColor");
let messageColor = document.getElementById("messageColor");
let nameColor = document.getElementById("nameColor");
const card = document.getElementById("card");
let nameError = document.getElementById("nameError");
let messageError = document.getElementById("messageError");


let cardName = document.getElementById("cardName");
let cardMessage = document.getElementById("cardMessage");
let cardTitle = document.getElementById("cardTitle");

let generateBtn = document.getElementById("generateButton");
let downloadBtn = document.getElementById("downloadBtn");
// Create a function for Generate button click
nameInput.addEventListener("blur", function() {

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Required*";
    } else {
        nameError.textContent = "";
    }
})
messageInput.addEventListener("blur", function() {
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Required*";
    } else {
        messageError.textContent = "";
    }
})
generateBtn.onclick = function() {
    if (nameInput !== "" && messageInput !== "") {
        cardName.textContent = nameInput.value;
        cardMessage.textContent = messageInput.value;
    }
    if (urlInput.value.trim() !== "") {
        card.style.backgroundImage = `url(${urlInput.value})`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
    }


    cardTitle.style.color = titleColor.value;
    cardMessage.style.color = messageColor.value;
    cardName.style.color = nameColor.value;



}

downloadBtn.addEventListener("click", () => {
    setTimeout(() => {
        html2canvas(card, {
            useCORS: true
        }).then(canvas => {
            const link = document.createElement("a");
            link.download = "greeting-card.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    }, 300); 
});
