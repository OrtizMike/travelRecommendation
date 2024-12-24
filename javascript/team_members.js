var xhr = new XMLHttpRequest();

var url = '../team_members_api.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
  const members = xhr.response.members;

  const membersContainer = document.getElementById('team-members');

  members.forEach(function(member){
    const memberCard = document.createElement('div');
    memberCard.classList.add('team-member-card');
    const membersPhoto = document.createElement('div')
    membersPhoto.classList.add('team-member-photo')

    const memberPhoto = document.createElement('i')
    memberPhoto.classList.add("fa-solid", "fa-user")

    const memberName = document.createElement('span');
    memberName.classList.add('team-member-name')
    memberName.textContent = member.name;

    const memberDescription = document.createElement('p');
    memberDescription.classList.add('team-member-description')
    memberDescription.textContent = member.description;

    const memberPosition = document.createElement('h3');
    memberPosition.classList.add('team-member-position')
    memberPosition.textContent = member.position;


    membersPhoto.appendChild(memberPhoto);
    memberCard.appendChild(membersPhoto);
    memberCard.appendChild(memberName);
    memberCard.appendChild(memberDescription);
    memberCard.appendChild(memberPosition);
    membersContainer.appendChild(memberCard);
  });

}

xhr.send();