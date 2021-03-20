var MessageView = {
  render: _.template(`
      <div class="chat <%= friend ? 'friend' : '' %>">
        <div class="username"><%= username %></div>
        <div class="message"><%= text %></div>
      </div>
    `)

};