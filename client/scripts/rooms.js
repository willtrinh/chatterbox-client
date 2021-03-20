var Rooms = {
  // Each room name needs to be unique -> use Set
  _rooms: [],
  _selectedRoom: '',

  get: function() {
    // sort rooms alphabettically
    return [...Rooms._id.values()].sort();
  },
  getRooms: function() {
    return Rooms._rooms;
  },

  add: function(room) {
    // Rooms._id.add(room);
    // Rooms.setSelectedRoom(room);
    // RoomsView.render();
    if (Rooms._rooms.indexOf(room) === -1) {
      Rooms._rooms.push(room);
    }
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

  // setSelectedRoom: function(room) {
  //   Rooms._selectedRoom = room;
  //   MessagesView.render();
  // },

  // getSelectedRoom: function() {
  //   return Rooms._selectedRoom;
  // }

};