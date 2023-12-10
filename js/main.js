function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can add validation or other logic here

    const responseMessage = document.getElementById("responseMessage");
    responseMessage.innerHTML = `Thank you, ${name}! We received your message.`;
    clearForm();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}