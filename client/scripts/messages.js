var Messages = {
  _data: {},

  // return all the message in the storage object
  get: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  update: function(messages, callback = ()=>{}) {
    for (var i = 0; i < messages.length; i++) {
      Messages._data[messages[i].objectId] = Messages.sanitize(messages[i]);
    }

    // invoke callback when something changed
    var length = Object.keys(Messages._data).length;
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }

    MessagesView.render();
  },

  sanitize: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    message.updatedAt = message.updatedAt || new Date();
    return message;
  }

};