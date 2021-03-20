var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    const text = $('#message').val();
    const usernameIndex = window.location.search.search('=');
    let username = window.location.search.slice(usernameIndex + 1);
    username = unescape(username);
    let roomname = Rooms.currentRoom;
    const message = { username, text, roomname, };
    $.ajax({
      url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/hr-sfo',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};