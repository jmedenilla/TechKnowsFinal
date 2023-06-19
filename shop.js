const product = [
  {
    id: 0,
    image: "images/img1.jpg",
    title: "In Search of Lost Time",
    category: "Marcel Proust",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium provident molestias? Temporibus explicabo, voluptatem adipisci repudiandae commodi exercitationem similique aspernatur harum.",
  },
  {
    id: 1,
    image: "images/img2.jpg",
    title: "Ulysses",
    category: "James Joyce",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium provident molestias? Temporibus explicabo, voluptatem adipisci repudiandae commodi exercitationem similique aspernatur harum.",
  },
  {
    id: 2,
    image: "images/img3.jpg",
    title: "Don Quixote",
    category: "Miguel de Cervantes",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium provident molestias? Temporibus explicabo, voluptatem adipisci repudiandae commodi exercitationem similique aspernatur harum.",
  },
  {
    id: 3,
    image: "images/img4.jpg",
    title: "One Hundred Years of Solitude",
    category: "Gabriel Garcia Marquez",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium provident molestias? Temporibus explicabo, voluptatem adipisci repudiandae commodi exercitationem similique aspernatur harum.",
  },
  {
    id: 4,
    image: "images/img5.jpg",
    title: "The Great Gatsby",
    category: "F. Scott Fitzgerald",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium provident molestias? Temporibus explicabo, voluptatem adipisci repudiandae commodi exercitationem similique aspernatur harum.",
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
    return item.title.toLowerCase().includes(searchData);
  });
  displayItem(filteredData);
});

const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      var { image, title, category, price } = item;
      return `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p class='product-name'>${title}</p>
                    <p class='product-category'>${category}</p>
                <button>Read Now</button>
                </div>
            </div>`;
    })
    .join("");
};
displayItem(categories);

const box = document.querySelectorAll(`.box`);
const rootEach = document.getElementById(`root-each`);

const displayEachItem = (items) => {
  document.getElementById(`root-each`).innerHTML = items
    .map((item) => {
      let { image, title, category, price, info } = item;
      return `<div class="product-info">
    <div class="product-image-container">
    <img src="${image}" alt="" />
    </div>
    <div class="product-info-container">
    <form onsubmit="submitBuy()">
    <h2 id="product-info-name">${title}</h2>
        <p id="product-info-category">${category}</p>
        <p id="product-info-price">₱ ${price}</p>
        <input type="number" max="5" min="0" />
        <p id="product-info-infotext">
          ${info}
        </p>
        <button id="product-info-button" type="submit">BUY</button>
      </form>
    </div>
  </div>`;
    })
    .join(``);
};

displayEachItem(categories);

box.forEach((box) => {
  box.addEventListener(`click`, function () {
    console.log(this);
    const container = document.querySelector(`.container`);
    container.classList.add(`hide`);
    const productInfo = document.querySelectorAll(`.product-info`);
    productInfo.forEach((eachpro) => {
      if (eachpro.contains(box.textContent)) {
      }
    });
  });
});
