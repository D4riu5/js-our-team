// selectors
const teamList = document.getElementById("TeamList");


// counters 



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

// functions (independent)


// functions (dependent)



// events
for (let member of team) {
  console.log("Name: "+ member.fullName + ' Role: ' + member.role + ' picture: ' + member.profileImg);
  
  let li = document.createElement("li");
  let img = document.createElement("img");
  li.innerHTML = "Name: " + member.fullName + ' Role: ' + member.role;
  img.src = member.profileImg;
  img.alt = member.fullName;

  li.appendChild(img);
  teamList.appendChild(li);
  
}