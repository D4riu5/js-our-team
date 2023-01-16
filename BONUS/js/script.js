// selectors
const mainDom = document.getElementById("main");

// arrays
const team = [
  {
    fullName: 'Wayne Barnett',
    role: 'Founder & CEO',
    profileImg: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    fullName: 'Angela Caroll',
    role: 'Chief Editor',
    profileImg: "img/angela-caroll-chief-editor.jpg"
  },
  {
    fullName: 'Walter Gordon',
    role: 'Office Manager',
    profileImg: "img/walter-gordon-office-manager.jpg"
  },
  {
    fullName: 'Angela Lopez',
    role: 'Social Media Manager',
    profileImg: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    fullName: 'Scott Estrada',
    role: 'Developer',
    profileImg: "img/scott-estrada-developer.jpg"
  },
  {
    fullName: 'Barbara Ramos',
    role: 'Graphic Designer',
    profileImg: "img/barbara-ramos-graphic-designer.jpg"
  },
];

console.log(team);

// events
for (let member of team) {
  console.log("Name: "+ member.fullName + ' Role: ' + member.role + ' picture: ' + member.profileImg);
  
  // card div
  let card = document.createElement("div");
  card.className = 'card';
  mainDom.appendChild(card);

  // img-top inside card
  let img = document.createElement("img");
  img.className = 'card-img-top';
  img.src = member.profileImg;
  img.alt = member.fullName;
  card.appendChild(img);

  // card-body div inside card
  let cardBody = document.createElement("div");
  cardBody.className = 'card-body';
  card.appendChild(cardBody);


  // card-title inside card-body
  let cardTitle = document.createElement("h5")
  cardTitle.className = 'card-title text-center';
  cardTitle.innerText = member.fullName;
  cardBody.appendChild(cardTitle);

  // card-text inside cardbody
  let role = document.createElement("p");
  role.className = 'card-text text-center';
  role.innerText = member.role;
  cardBody.appendChild(role);
}