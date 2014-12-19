var React = require("react/addons");
var ReactPropTypes = React.PropTypes;
var PageActions = require("../actions/PageActions");

var PageListElement = React.createClass({

  propTypes: {
    page: ReactPropTypes.object.isRequired
  },

  render: function() {
    var cx = React.addons.classSet;

    var classes = cx({
      'pageListElement' : true,
      'pageListElement--active' : this.props.page.active
    })

    return (
      <li className={classes}>
      <div className="pageListElement--title" onClick={this._onShow}>
        {this.props.page.title}
      </div>
      <div className="pageListElement--delete">
        <a onClick={this._onDeletePage} className="pageListeElement--deleteButton">
          <span className="oi" data-glyph="x" title="delete page"></span>
        </a>
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
