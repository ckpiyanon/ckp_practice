import React from 'react';
import ShopBox from './ShopBox';
import CartBox from './CartBox';

class App extends React.Component {
	render() {
		return (
			<div className='wrapper'>
				<ShopBox />
				<CartBox />
			</div>
		);
	}
}

export default App;