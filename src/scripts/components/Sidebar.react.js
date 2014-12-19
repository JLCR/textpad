var React = require("react");
var ReactPropTypes = React.PropTypes;
var PageActions = require("../actions/PageActions");
var PageListElement = require("./PageListElement.react");


var Sidebar = React.createClass({

  propTypes: {
    allPages: ReactPropTypes.object.isRequired,
    currentPage: ReactPropTypes.object
  },

  getInitialState: function() {
    return { currentTitle: '' };
  },

  render: function() {
    var pages = [],
        page = null,
        currentPage = this.props.currentPage;

    for( var key in this.props.allPages ) {
      var page = this.props.allPages[key];
      pages.push(
        <PageListElement key={page.id} page={page} />
      )
    }

    return (
      <div className="sidebar">
        <div className="sidebarHeader">Pages</div>
        <div className="sidebarContent">
          <input
            id="newPageInput"
            type="text"
            value={this.state.currentTitle}
            onChange={this._handleChange}
          />
          <span
            className="oi"
            data-glyph="plus"
            title="create new page"
            onClick={this._onNewPage}
          >
          </span>
          <ul>{pages}</ul>
        </div>
      </div>
    )
  },

  _onNewPage: function() {
    var title = this.state.currentTitle;
    if ( title && title.length >= 1 ) {
      PageActions.create(title);
    }
  },

  _handleChange: function(event) {
    this.setState({ currentTitle: event.target.value });
  }
});

module.exports = Sidebar;
