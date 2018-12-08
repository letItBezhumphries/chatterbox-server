var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //create a variable to store a message to pass into invocation of Parse.create()
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#rooms select').val()
    };
    //send Post request to save to server
    Parse.create(message);

    //fetch down from server updated messages
    App.fetch();

    //need to clear the input field after posting to the server
    $('form #message').val('');
    console.log('click!');
  },

  setStatus: function(active) {
    //line 20 finds the input element with a attr value of 'disabled' and sets it's status to active
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

