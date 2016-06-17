import React from 'react';

var idx = 0;

class App extends React.Component {
	render() {
		return (
			<div>
				<InputGroup />
			</div>
		);
	}
}

class InputGroup extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [
			]
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<TextBox id="form_msg" />
					<SubmitButton id="submit" />
				</form>
				<ul className="list">
					{this.state.data.map((d,i) => <ListItem onClick={this.onClick} key={i} item={d} />)}
				</ul>
			</div>
		);
	}
	onClick(e) {
		this.setState({data: this.state.data.filter((d,i) => d.index !== e.target.id)});
	}
	onSubmit(e) {
		e.preventDefault();
		var ns = this.state.data.slice();
		ns.push({"index": "msg" + (idx++),"text": document.getElementById("form_msg").value});
		this.setState({data: ns});
		document.getElementById("form_msg").value = "";
	}
}

class TextBox extends React.Component {
	render() {
		return (<input type="text" id={this.props.id} />);
	}
}

class SubmitButton extends React.Component {
	render() {
		return (<button type="submit" id={this.props.id}>SUBMIT</button>);
	}
}

class ListItem extends React.Component {
	render() {
		return (
			<li onClick={this.props.onClick} id={this.props.item.index}>
				{this.props.item.text}
			</li>
		);
	}
}

export default App;