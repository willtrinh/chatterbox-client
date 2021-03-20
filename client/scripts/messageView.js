var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username" id="<%= Friends.isFriend(username) ? 'friend' : '' %>">
          <%- username %>
        </div>
        <div id="message-text">
          <%- text %>
        </div>
      </div>
    `)

};