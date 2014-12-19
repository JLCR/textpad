var React = require("react");
var ReactPropTypes = React.PropTypes;
var PageActions = require("../actions/PageActions");
var ContentEditable = require("./ContentEditable.react");
var PageEmpty = require("./PageEmpty.react");


var PageElement = React.createClass({

  propTypes: {
    page: ReactPropTypes.object
  },

  render: function() {
    var page = this.props.page;

    if ( page ) {
      return (
        <div className="pageElement">
          <div className="pageElement--header">
            <span>{page.title}</span>
            <span>({page.id})</span>
            <div className="pageElement--actions">
              <button id="pageElement--actions-clear" onClick={this._onClear}>clear</button>
            </div>
          </div>
          <div className="pageElement--body">
            <ContentEditable id="pageElement--content" html={page.text} onChange={this._onSave} />
          </div>
        </div>)
    }

    return (
      <div className="pageElement">
        <div className="pageElement--header"></div>
        <div className="pageElement--body-empty">
          <PageEmpty />
        </div>
      </div>
    )
  },

  _onClear: function(event) {
    PageActions.clear(this.props.page.id);
  },

  _onSave: function(event) {
    var inputText = event.target.value;
    PageActions.save(this.props.page.id, inputText)
  }
});

module.exports = PageElement;
