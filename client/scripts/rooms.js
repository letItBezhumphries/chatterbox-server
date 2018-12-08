var Rooms = {
// create add function
  add: function() {
    var room = prompt('What room would you like to add?');
    RoomsView.renderRoom(room);
  }
};

