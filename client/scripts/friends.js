
var Friends = {

  friendList: {},

  toggleStatus: function(event) {
    //store the 'clicked' element's innerText
    var username = $(event.target).data('username');
    console.log('I have been clicked!!!', username);

    if (username !== undefined) {
      Friends.friendList[username] = !Friends.friendList[username];
    
      var selector = '[data-username="' + username + '"]';
      var $usernames = $(selector).toggleClass('friend');
    }

    if (!Friends.friendList[username]) {
      Friends.friendList[username] = true;
      $(this).toggleClass('friend');
    } else {
      delete Friends.friendList[username];
      $(this).toggleClass('friend');
    }
    console.log(Friends.friendList);
  }
};

