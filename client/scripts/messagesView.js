var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', function(event) {
      console.log(event);
      var username = event.currentTarget.textContent;
      Friends.toggleStatus(username);
    });
  },

  render: function() {
    // iterate through each message object
    // create new messageView for each message with corresponding roomname
    // render
    MessagesView.$chats.html('');
    // if (Rooms.getSelectedRoom() === '') {
    //   Messages.get().each(message => MessagesView.renderMessage(message));
    // } else {
    //   Messages.get()
    //     .filter(messsage => message.roomname === Rooms.getSelectedRoom())
    //     .each(message => MessagesView.renderMessage(message));
    // }

  },
  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  }

};