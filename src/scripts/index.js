var React = require("react");
var TextpadApp = require("./components/TextpadApp.react");
var mountNode  = document.getElementById('textpadApp');

React.render(<TextpadApp />, mountNode);
