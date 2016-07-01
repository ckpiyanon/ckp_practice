import React from 'react';

class ShopBox extends React.Component {
	render() {
		return (
			<div className='shop-wrapper'>
				<div className='shop-container'>
				</div>
			</div>
			);
	}
}
class ShopItem extends React.Component {
	render() {
		return (
			<div className='shop-item'>
				<ShopItemImage fileName='images/01.png' style={{backgroundImage: 'url(images/01.png)'}} />
				<ShopItemName />
				<ShopItemAdd />
			</div>
			);
	}
}
class ShopItemImage extends React.Component {
	render() {
		return (
			<div className='shop-item-image' style={this.props.style}></div>
			);
	}
}
class ShopItemName extends React.Component {
	render() {
		return (
			<div className='shop-item-name'>
				Strawberry Chocolate Chunk<br />
				<span className='shop-item-price'>3.5$</span>
			</div>
			);
	}
}
class ShopItemAdd extends React.Component {
	render() {
		return (
			<div className='shop-item-add'>
				ADD TO CART
			</div>
			);
	}
}

export default ShopBox;