var textSyncInstance = new TextSync({
  instanceLocator: "v1:us1:27293868-2246-4359-baa9-0ff2a8fe02ce",
})

var docID = document.URL.slice(document.URL.lastIndexOf('/') + 1);

var editor = textSyncInstance.createEditor({
  docId : docID,
  element: "#text_editor",
  cursorLabelsAlwaysOn: true,
  authEndpoint : "https://push-note-collab.herokuapp.com/textsync/tokens",
  userName : user,

  onCollaboratorsJoined : function(users) {
    const activeUsers = document.querySelector('.active_users ul');
    users.forEach(function(value){
      activeUsers.insertAdjacentHTML('beforeend', `<li id="${value.siteId}">${value.name}</li>`);
    })
  },

  onCollaboratorsLeft : function(users) {
    const activeUsers = document.querySelectorAll('.active_users ul li');
    users.forEach(function(value) {
      activeUsers.forEach(function(element){
        if( element.id == value.siteId ) element.remove();
      })
    })
  }
})