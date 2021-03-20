var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', function(event) {
      //  console.log(event);
      var username = event.currentTarget.textContent;
      Friends.toggleStatus(username);
    });
  },

  // render: function() {
  //   // iterate through each message object
  //   // create new messageView for each message with corresponding roomname
  //   // render
  //   MessagesView.$chats.html('');
  //   if (Rooms.getSelectedRoom() === '') {
  //     Messages
  //       .get()
  //       .each(message => MessagesView.renderMessage(message));
  //   } else {
  //     Messages
  //       .get()
  //       .filter(message => message.roomname === Rooms.getSelectedRoom())
  //       .each(message => MessagesView.renderMessage(message));
  //   }
  //   // iterate through each data object
  //   // for (var i = 0; i < data.length; i++) {
  //   //   var message = data[i];
  //   //   MessageView.append(message);
  //   // }


  // },
  // renderMessage: function(message) {
  //   // in case message doesn't give updatedAt value
  //   if (!message.hasOwnProperty('updatedAt')) {
  //     message.updatedAt = '';
  //   }
  //   // prepend each message by calling MessagesView
  //   var $message = MessageView.render(message);
  //   MessagesView.$chats.prepend($message);
  // },

  render: function(data) {
    let messagesHTML = '';
    // iterate over data object
    for (let message of data) {
      // render each message with messageView
      if (message.username === null) {
        message.username = message.github_handle;
      }
      if (message.text === null) {
        message.text = '';
      }
      messagesHTML += MessageView.render(message);
    }
    // append HTML messages to chat
    $('#chats').html(messagesHTML);
  }
};
