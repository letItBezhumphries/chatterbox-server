var Parse = {
  // `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`
  server: 'http://127.0.0.1:3000/classes/messages',

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(message) {
        console.log('chatterbox: Success to Post a message', message);
        if (successCB) {
          successCB(message);
        }
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: function(data) {
        console.log('chatterbox: Success to fetch messages');
        if (successCB) {
          successCB(data);
        }
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  getRoom: function(roomname, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt', where: `{"roomname":"${roomname}"}` },
      contentType: 'application/json',
      success: function(data) {
        console.log('chatterbox: Success you found the rooms!');
        if (successCB) {
          successCB(data);
        }
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch rooms', error);
      }
    });
  }
};

