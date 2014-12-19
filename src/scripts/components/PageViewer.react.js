var React = require("react");
var ReactPropTypes = React.PropTypes;

var PageElement = require("./PageElement.react");


var PageViewer = React.createClass({

  propTypes: {
    page: ReactPropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="pageViewer">
        <PageElement page={this.props.page} />
      </div>
    )
  }
});

module.exports = PageViewer;
