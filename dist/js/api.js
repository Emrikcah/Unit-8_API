//for performance resons its better to pull out only the data you need from api
const randPeople = fetch(
  "https://randomuser.me/api/?results=12&inc=name,picture,email,location,phone,dob"
);
const mainCard = document.querySelector(".main-card");
const displayModal = document.querySelector(".display-modal");

// Get the data from the API
randPeople
  .then((response) => response.json())
  .then((returnedData) => getInformation(returnedData.results));

/**loop through each element and  create the HTML markup
 *  and append it to the mainCard.innerHTML. Also push the
 *  array of objects onto an the empty emp array
 * and pass it to createCard() */
function getInformation(data) {
  const emp = [];

  data.forEach((element) => {
    emp.push(element);
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

  createCard(emp);
}

/**NOTE: cards (querySelectorALL) cant be in the global
 * space because it would run before the dynamic html
 * was created and show up as an empty nodeList.
 * NOTE: use index to access the indiviual card
 * Loop through the nodeList and when the user clicks
 * a card call the modalDisplay() and pass the array of
 * objects to it */
function createCard(emp) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) =>
    card.addEventListener("click", () => {
      modalDisplay(emp[index]);
    })
  );
}

function modalDisplay(empData) {
  const {
    name,
    picture,
    email,
    location: { city, street, state, postcode },
    phone,
    dob,
  } = empData;

  let date = new Date(dob.date)

  displayModal.innerHTML += `
    
    <div class="card">
        <img src='${picture.large}' class='img' alt>
        <div class="group">
            <h2 class="fullname">${name.first} ${name.last}</h2>
            <p class="email">${email}</p>
            <p class="city">${city}</p>
            <hr/>
            <p class="phone">${phone}</p>
            <p class="address">${street.number}, ${street.name}, ${state}, ${postcode}</p>
            <p class="dob">Birthday: ${date.toLocaleDateString()}</p>
        </div>
    </div>
    `;

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  document.body.appendChild(overlay);
  overlay.classList.add("active");
  console.log(empData);
}
