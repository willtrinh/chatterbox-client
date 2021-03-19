var Messages = {
  _storage: {},

  // return all the message in the storage object
  get: function() {
    return _.chain(Object.values(Messages._storage)).sortBy('createdAt');
  }

};