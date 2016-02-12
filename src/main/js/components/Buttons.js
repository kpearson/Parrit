var React = require('react');

var PrimaryButton = createButtonClass("primary");
var SuccessButton = createButtonClass("success");
var DangerButton = createButtonClass("danger");

function createButtonClass(type) {
    var classes = "btn btn-" + type;
    return React.createClass({
        render: function () {
            return <button className={classes} onClick={this.props.clickFunction}>{this.props.name}</button>
        }
    });
}

module.exports = {
    PrimaryButton: PrimaryButton,
    SuccessButton: SuccessButton,
    DangerButton: DangerButton
};
