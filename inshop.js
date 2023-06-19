const bookForm = document.getElementById("bookForm");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const storyInput = document.getElementById("storyInput");
const imageInput = document.getElementById("imageInput");
const searchInput = document.getElementById("searchInput");
const bookList = document.getElementById("bookList");
const modal = document.getElementById("modal");
const eachImageModal = document.getElementById(`eachImageModal`);
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalStory = document.getElementById("modalStory");
const closeBtn = document.getElementsByClassName("close")[0];

// Event listener for form submission
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;
  const story = storyInput.value;
  const image = imageInput.files[0];

  if (title.trim() !== "" && author.trim() !== "" && story.trim() !== "") {
    convertImageToBase64(image)
      .then((base64Image) => {
        const book = {
          title: title,
          author: author,
          story: story,
          image: base64Image,
        };

        saveBook(book);
        displayBooks();
        bookForm.reset();
      })
      .catch((error) => {
        console.error("Error converting image to base64:", error);
      });
  }
  const formBookContainer = document.getElementById(`formBookContainer`);
  formBookContainer.style.display = "none";
});

function convertImageToBase64(image) {
  return new Promise((resolve, reject) => {
    if (!image) {
      resolve("");
    }

    const reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.readAsDataURL(image);
  });
}

// Event listener for search input
searchInput.addEventListener("input", function () {
  displayBooks();
});

// Event listener for book deletion
bookList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const bookIndex = event.target.dataset.index;
    deleteBook(bookIndex);
    displayBooks();
  }
});

// Event listener for modal close button
closeBtn.addEventListener("click", closeModal);

// Save book to localStorage
function saveBook(book) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}

// Delete book from localStorage
function deleteBook(index) {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
}

// Display books from localStorage
function displayBooks() {
  let books = JSON.parse(localStorage.getItem("books")) || [];
  const searchValue = searchInput.value.trim().toLowerCase();

  bookList.innerHTML = "";

  books.forEach(function (book, index) {
    if (
      book.title.toLowerCase().includes(searchValue) ||
      book.author.toLowerCase().includes(searchValue)
    ) {
      const bookItem = document.createElement("div");
      bookItem.className = "eachBook";
      bookItem.innerHTML = `
        <div class="eachBookImage">
          <img src="${book.image}" alt="Book Cover">
        </div>
        <div class="eachBookInfo">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
        <div class="buttonContainer">
          <button class="read-button" data-index="${index}">Read</button>
          <button class="delete-button" data-index="${index}">Delete</button>
        </div>
        </div>
      `;
      bookList.appendChild(bookItem);
    }
  });

  // Attach event listeners to read buttons
  const readButtons = document.getElementsByClassName("read-button");
  Array.from(readButtons).forEach(function (button) {
    button.addEventListener("click", openModal);
  });
}

// Open the modal and display the book details
function openModal(event) {
  const bookIndex = event.target.dataset.index;
  const books = JSON.parse(localStorage.getItem("books")) || [];
  const book = books[bookIndex];
  const contFoot = document.querySelector(`.contFoot`);
  eachImageModal.src = book.image;
  modalTitle.textContent = book.title;
  modalAuthor.textContent = book.author;
  modalStory.innerText = book.story;

  contFoot.style.minHeight = "300vh";
  modal.style.display = "block";
  backToTop();
}
window.addEventListener(`load`, openModal);
// Close the modal
function closeModal() {
  modal.style.display = "none";
}

// Initial display of books
displayBooks();

const addBooksButton = document.getElementById(`addBooksButton`);

addBooksButton.addEventListener(`click`, function () {
  const formBookContainer = document.getElementById(`formBookContainer`);
  formBookContainer.style.display = "block";
});

const closeButton = document.getElementById(`closeButton`);
closeButton.addEventListener(`click`, function () {
  const formBookContainer = document.getElementById(`formBookContainer`);
  formBookContainer.style.display = "none";
});

const backToTop = function () {
  window.scrollTo({
    top: 0,
  });
};
