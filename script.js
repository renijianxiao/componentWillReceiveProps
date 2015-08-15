/** @jsx React.DOM */
var Photo = React.createClass({
	componentWillMount: function(){
		console.log('componentWillMount');  // Before rendering 
	},
	componentDidMount: function(){
		console.log('componentDidMount');  //After Rendering
	},
	componentWillReceiveProps: function(nextProps){
		console.log(newProps);
		console.log("componentWillReceiveProps");
	},
	shouldComponentUpdate: function(){
		console.log('shouldComponentUpdate');
		return true;
	},
	componentWillUpdate: function(){
		console.log('componentWillUpdate');  // Update after component rendered
	},
	componentDidUpdate: function(){
		console.log('componentDidUpdate');  // Triggered after update is done
	},
	componentWillUnmount: function(){
		console.log('componentWillUnmount');
	},
	togglelike: function(){
		this.setState({
			liked: !this.state.liked
		});
	},
	getInitialState: function(){
		console.log("initial state");
		return{
			liked: true
		}
	},
	getDefaultProps: function(){
		return {
			caption: "default caption"
		}
	},
	render: function() {
		var buttonClass = this.state.liked ? 'active' : '' ;
		return (
			<div className='photo'>
						<span>{this.props.caption}</span>
			<button onClick={this.togglelike} className={buttonClass}>Like</button>
		
			<span>{this.props.caption}</span>
			</div>
		)
	}
});
React.render(<Photo imageURL='http://tinyurl.com/lkevsb9' />, document.body);

