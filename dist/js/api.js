const results = document.querySelector(".results");
const randPeople = fetch("https://randomuser.me/api/?results=12");

randPeople
  .then((response) => response.json())
  .then((data) => getInformation(data.results));

function getInformation(data) {
  
  let html = "";
  data.forEach((element) => {
    html += `
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
  results.innerHTML = html;
}
