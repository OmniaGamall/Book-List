function addBook() {
    var bookInput = document.getElementById("bookInput");
    var bookList = document.getElementById("bookList");

    if (bookInput.value === "") {
        alert("Please enter a Book!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = bookInput.value + "<button onclick=\"completeBook(this)\">Done</button>";
    bookList.appendChild(li);

    bookInput.value = "";
}

function completeBook(button) {
    var li = button.parentElement;
    li.classList.toggle("completed");
}
