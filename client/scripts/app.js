var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  // messages: [], //
  //friends: {}, //

  rooms: { main: 'main' },
  // room property to show our current room (main room with all the messages displayed)
  room: 'main',

  room: 'main',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    $('#chats').on('click', '.username', Friends.toggleStatus);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(()=>{
      App.fetch();
    }, 12000);
    //can use setInterval and polling to re-render updates
  },

  fetch: function(callback = () => {}) {
    // examine the response from the server request:
    // refresh for new chat messages
    var findMessages = function(data) {
      $('#chats').empty();
      var messageArr = data.results;
      // loop through the data
      for (var i = 0; i < messageArr.length; i++) {
        // assign message to data.results[i]?
        var message = messageArr[i];
        // call MessagesView on the data.


        //need to change class for message that has username if that username is in friendsList

        if (Friends.friendList[message.username]) {
          message.friendStatus = 'friend';
        } else {
          message.friendStatus = 'notfriend';
        }

        if (message.friendStatus === 'friend') {
          $('a.username').on('mouseenter', function() {
            $(this).css('color', 'green');
          });
          $('a.username').on('mouseleave', function() {
            $(this).css({'color': 'black'});
          });
        }
        MessagesView.renderMessage(message);
        RoomsView.renderRoom(message.roomname);

      }
      callback();
    };
    if (App.room === 'main') {
      Parse.readAll(findMessages);
    } else {
      Parse.getRoom(App.room, findMessages);
    }
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

