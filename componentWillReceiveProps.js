/** @jsx React.DOM */

var Mainmodule = React.createClass({
	getInitialState: function(){
		return{
			showModule: false	
		}
	},
	render: function(){
		console.log(this.state.showModule);
		return( 
			<div className="main">
				<div className="clickMe" onClick={this.showmodule}>Click me to see module</div>
				<Submodule show={this.state.showModule} />
			</div> 
		)
	},
	showmodule: function(){
		this.setState({
			showModule: true
		});
	},
});

var Submodule = React.createClass({
	getInitialState: function(){
		return{
			show: this.props.show
		}
	},
	componentWillReceiveProps: function(nextProps){
		console.log(nextProps);
		this.setState({
			show: nextProps.show
		})
	},
	hideModule: function(){
		this.setState({
			show: false
		})
	},
	render: function(){
		console.log(this.state.show);
		return( this.state.show ?
			 <div className="module" onClick={this.hideModule}>I am the module</div> : null
		)
	}
})
React.render(<Mainmodule />, document.getElementById('Mainmodule'));