var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      var room = prompt('Please enter your room name');
      Rooms.add(room);
      RoomsView.$select.val(room);
    });
    RoomsView.$select.on('change', Rooms.setSelectedRoom(RoomsView.$select.val()));
  },

  render: function() {
    // re-render the component
    RoomsView.$select.html('');
    var $rooms = Rooms.get();
    _.each($rooms, function(room) {
      RoomsView.renderRoom(room);
    });
  },

  renderRoom: function(room) {
    var $option = $('<option>').val(room).text(room);
    RoomsView.$select.append($option);
  }

};