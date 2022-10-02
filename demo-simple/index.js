const dataMembers = [
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

const renderMembers = (members) => {
  const membersElementAsString = members
    .map((member) => `<li>${member.name}</li>`)
    .join("");
  membersElement.innerHTML = membersElementAsString;
};

const searchMemberByName = (members, name) => {
  const foundMember = members.find((member) => {
    return member.name === name;
  });
  renderMembers([foundMember]);
};

const filterMembersByCharacter = (members, char) => {
  const foundMembers = members.filter((member) => {
    return member.name.toLowerCase().includes(char);
  });
  renderMembers(foundMembers);
};

renderMembers(dataMembers);
filterMembersByCharacter(dataMembers, "i");
searchMemberByName(dataMembers, "Zul");
