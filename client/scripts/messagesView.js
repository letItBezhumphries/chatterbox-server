var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('a.username').on('click', 'username', Friends.toggleStatus);  
  },

  renderMessage: function(message) {
    if (message.text && message.username) {
      this.$chats.append(MessageView.render(message));
      Friends.friendList[message.username] = true;
    }
    console.log(Friends.friendList);
  }
};

