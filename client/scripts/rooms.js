var Rooms = {
  currentRoom: null,
  rooms: [null],
  addRoom: function(roomName) {
    if (Rooms.rooms.indexOf(roomName) === -1) {
      Rooms.rooms.push(roomName);
    }
  },

  getRoomNames: function() {
    return Rooms.rooms;
  }
};