var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      var room = prompt('Please enter your room name');
      Rooms.add(room);
      RoomsView.$select.val(room);
      RoomsView.render(Rooms.getRooms());
    });
    // RoomsView.$select.change(function() {
    //   Rooms.setSelectedRoom(RoomsView.$select.val());
    // });
  },

  render: function(roomNames) {
    // re-render the component
    // RoomsView.$select.html('');
    // var $rooms = Rooms.get();
    // $rooms.forEach(function(room) {
    //   RoomsView.renderRoom(room);
    // });
    var room = roomNames.map(function(roomName) {
      return `<option value="${roomName}"> ${roomName} </option> \n`;
    }).join('');
    RoomsView.$select.html(room);
  },

  renderRoom: function(room) {
    var $option = $('<option>').val(room).text(room);
    RoomsView.$select.append($option);
  }

};