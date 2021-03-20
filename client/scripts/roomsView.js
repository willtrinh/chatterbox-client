var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.click(() => {
      var response = prompt('Please enter a new room name: ');
      Rooms.addRoom(response);
      RoomsView.render(Rooms.getRoomNames());
    });

    RoomsView.$select.change(event => {
      Rooms.currentRoom = Rooms.rooms[event.target.value];
      MessagesView.render();
    });
  },

  render: function(roomNames) {
    var roomHTML = roomNames.map(function(roomName, index) {
      return `<option value="${index}"> ${roomName} </option> \n`;
    }).join('');
    RoomsView.$select.html(roomHTML);
  }


};