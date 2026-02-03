const products = [
  {
    id: 1,
    event: "Футбольный матч: Астана vs Кайрат",
    plays: "12 540 просмотров",
    time: "2026-02-01 18:30",
    image: "img/football.jpg"
  },
  {
    id: 2,
    event: "Концерт классической музыки",
    plays: "8 210 просмотров",
    time: "2026-02-02 19:00",
    image: "img/music.avif"
  },
  {
    id: 3,
    event: "Театральное выступление: Гамлет",
    plays: "5 320 просмотров",
    time: "2026-02-03 17:00",
    image: "img/theater.jpg"
  },
  {
    id: 4,
    event: "Киберспорт турнир CS2",
    plays: "22 100 просмотров",
    time: "2026-02-04 20:00",
    image: "img/cyber.jpeg"
  },
  {
    id: 5,
    event: "Выставка современных технологий",
    plays: "3 870 просмотров",
    time: "2026-02-05 11:00",
    image: "img/tehchnology.png"
  },
  {
    id: 6,
    event: "Мастер-класс по Flutter разработке",
    plays: "6 450 просмотров",
    time: "2026-02-06 15:00",
    image: "img/it.jpeg"
  },
  {
    id: 7,
    event: "Бой MMA: Главный кард",
    plays: "18 900 просмотров",
    time: "2026-02-07 21:30",
    image: "img/mma.jpg"
  },
  {
    id: 8,
    event: "Фестиваль уличной еды",
    plays: "9 120 просмотров",
    time: "2026-02-08 13:00",
    image: "img/food.jpeg"
  },
  {
    id: 9,
    event: "Конференция по кибербезопасности",
    plays: "4 780 просмотров",
    time: "2026-02-09 10:00",
    image: "img/cyber-security.jpeg"
  },
  {
    id: 10,
    event: "Музыкальный фестиваль Open Air",
    plays: "25 300 просмотров",
    time: "2026-02-10 19:30",
    image: "img/music-festival.jpg"
  }
];

const container = document.getElementById("cards-container");

function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.event}">
    <h2>${product.event}</h2>
    <p>${product.plays}</p>
    <p><strong>Дата:</strong> ${product.time}</p>
    <button>Участвовать</button>
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
