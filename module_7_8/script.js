"use strict";

// Что такое DOM?

// DOM это JS?

// Какие бывает ноды?

// Как мы можем выбрать что то в DOM?

// Какие свойства могут быть у НОД?

// ------------------------------------------------------------------------

// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const p = document.createElement("p");

// block.appendChild(span);
// block.insertBefore(p, null);

// ------------------------------------------------------------------------

// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const p = document.createElement("p");

// block.appendChild(span);
// block.insertBefore(p, null);
// block.insertBefore(p, null);
// block.appendChild(span);

// ------------------------------------------------------------------------
// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const secondSpan = span;

// const p = document.createElement("p");

// block.appendChild(secondSpan);
// block.insertBefore(p, null);
// block.appendChild(span);

// ------------------------------------------------------------------------

// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const secondSpan = span.cloneNode();

// const p = document.createElement("p");

// block.appendChild(secondSpan);
// block.insertBefore(p, null);
// block.appendChild(span);

// ------------------------------------------------------------------------
// Куда вставится эллемент р?
// const block = document.querySelector(".example");
// const span = document.createElement("span");
// span.textContent = "Lorem";

// const secondSpan = span;

// const p = document.createElement("p");

// block.appendChild(secondSpan);
// block.insertBefore(p, null);
// span.remove();
// block.appendChild(span);

// ------------------------------------------------------------------------

// Какой эллемент будет внутри div?
// const block = document.querySelector(".example");
// const span = "<span>123</span>";
// const p = "<p>123</p>";

// block.innerHTML = span;
// block.innerHTML = p;

// ------------------------------------------------------------------------

// Какие эллементы будут внутри div?
// const block = document.querySelector(".example");
// const span = "<span>123</span>";
// const p = "<p>123</p>";

// block.insertAdjacentHTML("beforeend", span);
// block.insertAdjacentHTML("beforeend", p);
// block.insertAdjacentHTML("afterend", span);
// block.insertAdjacentHTML("beforeend", p);

// ------------------------------------------------------------------------
// Какие цыфры будут выведеные?

// const block = document.querySelector(".example_2");
// const p = block.querySelector("#p");
// const span = block.querySelector("#span");

// span.innerHTML = "<span>5</span>";
// p.innerHTML = "<span>6</span>";
// p.outerHTML = "<section>4</section>";

// ------------------------------------------------------------------------
// const btn = document.getElementById("example_3");

// const handler = () => {
//   console.log(this);

//   console.log("CLICK!");
// };

// btn.addEventListener("click", handler());

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelectorAll(".block");

// const handler = (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);
// };

// container.addEventListener("click", handler);

// block.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.stopPropagation();
//   });
// });

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// const handler = (e) => {
//   console.log(this);
//   console.log(e.target);
//   console.log(e.currentTarget);
// };

// container.addEventListener("click", handler);

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// function handler(e) {
//   console.log(this);
//   console.log(e.target);
//   console.log(e.currentTarget);
// }

// container.addEventListener("click", handler);

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// function handler() {
//   console.log(1);
// }

// function handler2(e) {
//   e.preventDefault();
//   console.log(2);
// }

// function handler3(e) {
//   console.log(3);
// }

// container.addEventListener("click", handler);
// container.addEventListener("click", handler2);
// container.addEventListener("click", handler3);

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// function handler() {
//   console.log(1);
// }

// function handler2(e) {
//   e.stopPropagation();
//   console.log(2);
// }

// function handler3() {
//   console.log(3);
// }

// container.addEventListener("click", handler);
// container.addEventListener("click", handler2);
// container.addEventListener("click", handler3);

// ------------------------------------------------------------------------

// const container = document.querySelector(".container");
// const block = document.querySelector(".block");

// function handler() {
//   console.log(1);
// }

// function handler2(e) {
//   e.stopImmediatePropagation();
//   console.log(2);
// }

// function handler3() {
//   console.log(3);
// }

// container.addEventListener("click", handler);
// container.addEventListener("click", handler2);
// container.addEventListener("click", handler3);

// ------------------------------------------------------------------------
// const input = document.querySelector("#input");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log(input.value);
// });

// ------------------------------------------------------------------------
// const form = document.querySelector("form");

// function handler(e) {
//   e.preventDefault();

//   console.log(this.inputName.value);
// }

// form.addEventListener("submit", handler);

// ------------------------------------------------------------------------
// Практика
// ------------------------------------------------------------------------

// 1. Выведите в консоль каждое второе имя
// <ul>
// <li>Василий</li>
// <li>Андрей</li>
// <li>Иван</li>
// <li>Антон</li>
// </ul>

// 2. Вставьте после каждым второго имени -> <li><span> ----------------- </span></li>
// <ul>
// <li>Василий</li>
// <li>Андрей</li>
// <li>Иван</li>
// <li>Антон</li>
// </ul>

// 3. Выведите в консоль число если по нему кликнуть

{
  /* <div class="container">
  <div class="block">1</div>
  <div class="block">2</div>
  <div class="block">3</div>
  <div class="block">4</div>
  <div class="block">5</div>
</div> */
}

// 4. Вывидите данные в виде
{
  /* <article>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedit
          aspernatur!
        </p>
        <span>Date</span>
          <ul class="coments">
            <li>coment1</li>
            <li>coment2</li>
            <li>coment3</li>
          </ul>
      </article> */
}

// const articles = [
//   {
//     title: "123",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
//     date: "321",
//     comments: [{ comment: coment }, { comment: coment }],
//   },
//   {
//     title: "123",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, asperiores optio obcaecati illum nobis aspernatur, suscipit numquam odio quaerat aperiam magni! Aut laboriosam tempore quis placeat esse non impedi aspernatur!",
//     date: "321",
//     comments: [{ comment: coment }, { comment: coment }, { comment: coment }],
//   },
// ];

const gallery = [
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryRef = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".js-lightbox");
const closeBtn = document.querySelector(".js-close");
const modalImg = document.querySelector(".js-lightbox__image");

const getTemplateString = (href, src, original, alt, index) =>
  `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${href}"
  >
    <img
      class="gallery__image"
      src="${src}"
      data-source="${original}"
      data-index="${index}"
      alt="${alt}"
    />
  </a>
</li>`;

const getTemplateList = () => gallery.reduce((acc, { preview, original, description }, index) => acc + getTemplateString(original, preview, original, description, index), "");

galleryRef.innerHTML = getTemplateList();

const setImgToModal = (src = "", alt = "", index = "") => {
  modalImg.setAttribute("src", src);
  modalImg.setAttribute("alt", alt);
  modalImg.setAttribute("data-index", index);
};

const openModal = (e) => {
  e.preventDefault();

  const { dataset = {}, alt = "" } = e.target;

  setImgToModal(dataset.source, alt, dataset.index);
  lightBox.classList.toggle("is-open");
};

const closeModal = () => {
  setImgToModal();
  lightBox.classList.toggle("is-open");
};

const showNextImg = () => {
  const nextImgIndex = +modalImg.dataset.index + 1;

  if (nextImgIndex < gallery.length) {
    setImgToModal(gallery[nextImgIndex].original, gallery[nextImgIndex].alt, nextImgIndex);
  }
};

const showPrevImg = () => {
  const prevImgIndex = modalImg.dataset.index - 1;

  if (prevImgIndex >= 0) {
    setImgToModal(gallery[prevImgIndex].original, gallery[prevImgIndex].alt, prevImgIndex);
  }
};

galleryRef.addEventListener("click", openModal);
closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  closeModal();
});
modalImg.addEventListener("click", (e) => {
  e.stopPropagation();
});
lightBox.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
  e.keyCode === 27 && closeModal();
  e.keyCode === 37 && showPrevImg();
  e.keyCode === 39 && showNextImg();
});
