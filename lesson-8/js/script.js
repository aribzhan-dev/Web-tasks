const products = [
  {
    id: 1,
    title: "Ноутбук Lenovo",
    description: "Отличный вариант для учебы и работы",
    price: 250000,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 2,
    title: "Смартфон Samsung",
    description: "Современный телефон с хорошей камерой",
    price: 180000,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 3,
    title: "Наушники Sony",
    description: "Качественный звук и шумоподавление",
    price: 55000,
    image: "https://via.placeholder.com/250"
  },
  {
    id: 4,
    title: "Колонки Sony",
    description: "Качественные колонки с хорошим звуком",
    price: 100000,
    image: "https://via.placeholder.com/250"
  }
];

const container = document.getElementById("cards-container");

function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p><strong>Цена:</strong> ${product.price} ₸</p>
    <button>Купить</button>
  `;

  return card;
}

function renderCards(data) {
  data.forEach(function(item) {
    const cardElement = createCard(item);
    container.appendChild(cardElement);
  });

}

renderCards(products);
