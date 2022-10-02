const members = [
  { name: "Ade" },
  { name: "Agung" },
  { name: "Bayu" },
  { name: "Denny" },
  { name: "Eric" },
  { name: "Ersan" },
  { name: "Farizan " },
  { name: "Fikri" },
  { name: "Ikhwan" },
  { name: "Lutfi" },
  { name: "Makmur" },
  { name: "Zul" },
];

const membersElement = document.getElementById("members");

const renderMembers = () => {
  const membersElementAsString = members
    .map((member) => `<li>${member.name}</li>`)
    .join("");

  membersElement.innerHTML = membersElementAsString;
};

const addNewMember = () => {
  // Manipulate the data

  renderMembers();
};

renderMembers();
