var Rooms = {
  // Each room name needs to be unique -> use Set
  _id: new Set(),
  _selectedRoom: '',

  get: function() {
    return [...Rooms._id.values()];
  },

  add: function(room) {
    Rooms._id.add(room);
    Rooms.setSelectedRoom(room);

    RoomsView.render();
  },

  update: function() {
    // get messages that exist in all rooms
    Messages.get().forEach(function(message) {
      // add the message exists in that specific roomname
      Rooms._id.add(message.roomname);
    });
    // render rooms list
    RoomsView.render();
  },

  setSelectedRoom: function(room) {
    Rooms._selectedRoom = room;
    MessagesView.render();
  },

  getSelectedRoom: function() {
    return Rooms._selectedRoom;
  }

};