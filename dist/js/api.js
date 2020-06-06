const randPeople = fetch("https://randomuser.me/api/?results=12");
const mainCard = document.querySelector(".main-card");

// Get the data from the API
randPeople
  .then((response) => response.json())
  .then((data) => getInformation(data.results));

/**loop through each element and  create the HTML markup and store it in the html variable */
function getInformation(data) {
  data.forEach((element) => {
    mainCard.innerHTML += `
    <div class="card">
             <img src='${element.picture.medium}' class='img' alt>
        <div class="group">
               <h2 class="fullname">${element.name.first} ${element.name.last}</h2>
               <p class="email">${element.email}</p>
               <p class="city">${element.location.city}</p>
        </div>
    </div>
       
        `;
  });
/**NOTE: cards cant be in the global space because it would run before the dynamic html was created and show up as an empty nodeList */
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.addEventListener("click", modalDisplay));
}

function modalDisplay() {
  console.log("working");

    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);
    lightbox.classList.add("active");
}

// Event Handlers
