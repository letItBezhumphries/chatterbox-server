var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', Rooms.add);
    this.$select.on('change', RoomsView.render);
  },

  render: function() {
    //when we run the render function we want to get the value from the $select dropdown
    App.room = RoomsView.$select.val();
    App.fetch();
  },

  renderRoom: function(roomname) {
    if (roomname && !App.rooms[roomname]) {
      App.rooms[roomname] = roomname;
      this.$select.append(`<option> ${roomname} </option>`);
    }
  }
};

