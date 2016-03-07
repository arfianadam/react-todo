var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
	getInitialState: function() {
		return {
			items: [],
			newItemText: ''
		}
	},
	onChange: function(e) {
		this.setState({
			newItemText: e.target.value
		});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var currentItems = this.state.items;
		if (this.state.newItemText === '') {
			return;
		} else {
			currentItems.push(this.state.newItemText);
			this.setState({
				items: currentItems,
				newItemText: ''
			});
		}
	},
	render: function() {
		return(
			<div className="col-md-4">
				<div className="panel panel-primary">
					<div className="panel-heading">
						<h4>{this.props.title}</h4>
					</div>
					<div className="panel-body">
						<form onSubmit={this.handleSubmit}>
							<div className="input-group">
								<input onChange={this.onChange} value={this.state.newItemText} className="form-control" />
								<span className="input-group-btn">
									<button className="btn btn-default" type="submit">Add</button>
								</span>
							</div>
						</form>
						<List items={this.state.items} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = ListManager;