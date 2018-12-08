var MessageView = {

  render: _.template(`
      <div class="chat" data-username=<%-username%> >
        <a class="username" data-username=<%-username%> > <%- username %> </a>
        <div class="message" data-username=<%-username%> > <%- text %> </div>
      </div>
    `)
};

