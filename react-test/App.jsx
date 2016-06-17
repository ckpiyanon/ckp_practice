import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [
				{"text":"Hello"},
				{"text":"Hi"},
				{"text":"Vola"}
			]
		}
	}
	render() {
		return (
			<div>
				<InputGroup />
				<ul className="list">
					{this.state.data.map((d,i) => <ListItem key={i} item={d} />)}
				</ul>
			</div>
		);
	}
}

class InputGroup extends React.Component {
	render() {
		return (
			<div>
				<TextBox id="msg" />
				<SubmitButton id="submit" />
			</div>
		);
	}
}

class TextBox extends React.Component {
	render() {
		return (<input type="text" id={this.props.id} />);
	}
}

class SubmitButton extends React.Component {
	render() {
		return (<button id={this.props.id}>SUBMIT</button>);
	}
}

class ListItem extends React.Component {
	render() {
		return (
			<li>
				{this.props.item.text}
			</li>
		);
	}
}

export default App;