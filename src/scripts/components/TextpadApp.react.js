var React = require("react");

var Header      = require("./Header.react");
var Sidebar     = require("./Sidebar.react");
var PageViewer  = require("./PageViewer.react");
var PageStore   = require("../stores/PageStore");

function getPageState() {
  return {
    allPages: PageStore.getAll(),
    currentPage: PageStore.getCurrent()
  }
}

var TextpadApp = React.createClass({

  getInitialState: function() {
    return getPageState();
  },

  componentDidMount: function() {
    PageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PageStore.removeChangeListener(this._onChange);
  },

  render: function() {

    var pages = this.state.allPages || {};

    return (
      <div>
        <Header />
        <div className="contentWrapper">
          <Sidebar allPages={pages} currentPage={this.state.currentPage} />
          <PageViewer page={this.state.currentPage} />
        </div>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getPageState());
  }
});

module.exports = TextpadApp;
