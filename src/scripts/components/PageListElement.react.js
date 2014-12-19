var React = require("react");
var ReactPropTypes = React.PropTypes;
var PageActions = require("../actions/PageActions");

var PageListElement = React.createClass({

  propTypes: {
    page: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <li className="pageListElement">
      <div className="pageListElement--title" onClick={this._onShow}>
        {this.props.page.title}
      </div>
      <div className="pageListElement--delete">
        <button onClick={this._onDeletePage}>delete</button>
      </div>
      <div className="clearfix"></div>
      </li>
    )
  },

  _onDeletePage: function(event) {
    // todo: add confirmation
    PageActions.destroy(this.props.page.id);
  },

  _onShow: function(event) {
    PageActions.show(this.props.page.id);
  }
});

module.exports = PageListElement;
