var Messages = {
  messages: [],

  addMessages: function (data) {
    for (var i = data.length - 1; i >= 0; i--) {
      let newMessage;
      if (Messages.messages.length === 0) {
        newMessage = true;
      } else {
        let newMessageID = Messages.messages.slice(-1)[0]['message_id'];
        let currentMessageID = data[i]['message_id'];
        newMessage = newMessageID < currentMessageID;
      }
      if (newMessage) {
        Messages.messages.push(data[i]);
      }
    }
  },

  getMessages: function () {
    return Messages.messages.slice(-100).reverse();
  },


};