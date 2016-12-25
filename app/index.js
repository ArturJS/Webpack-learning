var component = require('./component');
var app = document.createElement('div');

require('./main.css');

app.appendChild(component());

document.body.appendChild(app);

