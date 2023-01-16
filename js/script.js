// selectors



// counters 



// arrays
const team = [
  {
    fullName: 'Wayne Barnett',
    role: 'Founder & CEO',
    profileImg: "wayne-barnett-founder-ceo.jpg"
  },
  {
    fullName: 'Angela Caroll',
    role: 'Chief Editor',
    profileImg: "angela-caroll-chief-editor.jpg"
  },
  {
    fullName: 'Walter Gordon',
    role: 'Office Manager',
    profileImg: "walter-gordon-office-manager.jpg"
  },
  {
    fullName: 'Angela Lopez',
    role: 'Social Media Manager',
    profileImg: "angela-lopez-social-media-manager.jpg"
  },
  {
    fullName: 'Scott Estrada',
    role: 'Developer',
    profileImg: "scott-estrada-developer.jpg"
  },
  {
    fullName: 'Barbara Ramos',
    role: 'Graphic Designer',
    profileImg: "barbara-ramos-graphic-designer.jpg"
  },
];

console.log(team);

// functions (independent)


// functions (dependent)



// events
for (let member of team) {
  console.log("Name: "+ member.fullName + ' Role: ' + member.role + ' picture: ' + member.profileImg);
}