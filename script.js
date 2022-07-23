const ball = window.document.getElementById("div1");
ball.style.backgroundColor = "red";
ball.style.blockSize = "150px ";
ball.style.width = "150px";
ball.style.border = "1px solid black ";
ball.style.borderRadius = "50%";
ball.style.background = "linear-gradient(44deg, blue, red)";

const ul = window.document.getElementById("div2");
ul.innerHTML = `<ul>
<li>David Zuk</li>
<li>28</li>
<li>Israel</li>
</ul>`;
const carCard = document.getElementById("div3");
carCard.className = "bg-danger";
const carName = "merkava mk4";
let car = {
  cardTitle: "vehicle sale",
  title: carName,
  price: 200_00000,
  hand: 0,
  km: 100_403,
  year: 2020,
};
carCard.innerHTML =
  ` <div class="card" style="width: 18rem">
<div class="card-body bg-info" >
  <h2 class="card-title" id="headLine">` +
  car.cardTitle +
  `</h2>

  <p class="card-text" id="carInfo">
    <h3 id="nameOfCar">` +
  car.title +
  `</h3>
    <h3 id="price">` +
  car.price +
  `</h3>
      <h3 id="hand">hand: ` +
  car.hand +
  `</h3>
       <h3 id="milage">km: ` +
  car.km +
  `</h3>
        <h3 id="year">year: ` +
  car.year +
  `</h3>
  </p>
</div>
</div>`;
