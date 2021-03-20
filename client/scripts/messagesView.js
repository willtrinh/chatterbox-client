const sanitize = str => {
  const targetChars = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    '\'': '&#x27',
  };

  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] in targetChars ? targetChars[str[i]] : str[i];
  }

  return result;
};

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },
  onChatMessageClick: function() {
    let friendToAdd = $(this).find('.username').text();
    console.log(friendToAdd);
    Friends.friendList.add(friendToAdd);
    MessagesView.render();
  },

  render: function() {
    let data = Messages.getMessages();
    let messagesHTML = '';
    // iterate over data object
    let userInRoom = Rooms.currentRoom !== null;
    for (let message of data) {
      // iterate through each message, render each with messageView.render(message)
      let msgInCurrentRoom = message.roomname === Rooms.currentRoom;
      if (userInRoom && !msgInCurrentRoom) {
        continue;
      }
      if (message.username === null) {
        message.username = message.github_handle;
      }

      message.friend = Friends.friendList.has(message.username);

      if (message.text === null) {
        message.text = '';
      }
      for (let key of ['username', 'text']) {
        message[key] = sanitize(message[key]);
      }
      messagesHTML += MessageView.render(message);
    }
    // append HTML messages to #chats
    $('#chats').html(messagesHTML);
    // handle username click event (add friend)
    $('.chat').click(MessagesView.onChatMessageClick);

  }
};

