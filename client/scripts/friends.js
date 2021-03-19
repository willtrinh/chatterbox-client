var Friends = {
  _friendsList: new Set(),

  toggleStatus: function(friend) {
    if (!Friends._friendsList.has(friend)) {
      Friends._friendsList.add(friend);
    }

    MessagesView.render();
  }

};