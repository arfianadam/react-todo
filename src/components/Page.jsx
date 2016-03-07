var React = require('react');
var ListManager = require('./ListManager.jsx');

var Page = React.createClass({
	render: function() {
		var marginTop = {
			marginTop: 20
		};
		return(
			<div style={marginTop} className="container">
				<ListManager title="Food" />
				<ListManager title="Beferages" />
				<ListManager title="Others" />
				<ListManager title="ToDo" />
			</div>
		);
	}
});

module.exports = Page;