let friends = [
  {
      firstName: 'Artsiom',
      lastName: 'Mezin'
  },
  {
      firstName: 'Ilia',
      lastName: 'Kantor'
  },
  {
      firstName: 'Christopher',
      lastName: 'Michael'
  }
];

function makeFriendsList(friends) {
  const ul = document.createElement('ul');

  ul.innerHTML = friends.map(friend => `<li>${friend.firstName} ${friend.lastName}</li>`).join("");

  return ul;
}

document.body.append(makeFriendsList(friends));