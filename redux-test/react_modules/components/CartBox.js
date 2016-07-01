import React from 'react';

class CartBox extends React.Component {
	render() {
		return(
			<div className='cart-wrapper'>
				<div className='cart-header'>
					<span className='cart-header-text'>Your Cart</span>
					<span className='cart-icon'></span>
					<CartCheckout />
				</div>
				<ul className='cart-container'>
				</ul>
			</div>
			);
	}
}

class CartCheckout extends React.Component {
	render() {
		return (
			<div className='cart-checkout'>
				<CartPrice />
				<CartCheckoutButton />
			</div>
			);
	}
}

class CartPrice extends React.Component {
	render() {
		return (
			<div className='cart-checkout-price'>
				Total price: $7
			</div>
			);
	}
}

class CartCheckoutButton extends React.Component {
	render() {
		return (
			<div className='cart-checkout-button'>
				Check out
			</div>
			);
	}
}

class CartRemove extends React.Component {
	render() {
		return (
			<div className='cart-item-delete'>
				<table><tbody>
					<tr><td>REMOVE</td></tr>
				</tbody></table>
			</div>
			);
	}
}

class CartItem extends React.Component {
	render() {
		return (
			<li className='cart-item'>
				<CartList />
				<CartForm />
			</li>
			);
	}
}

class CartList extends React.Component {
	render() {
		return (
			<div className='cart-item-left'>
				<div className='cart-item-name'>Strawberry Chocolate Trunk</div>
				<div className='cart-item-price'>$3.5</div>
			</div>
			);
	}
}

class CartForm extends React.Component {
	render() {
		return (
			<div className='cart-item-right'>
				<button className='cart-amt'>&#9660;</button>
				<input type="text" maxLength='2' value='1' disabled='true' />
				<button className='cart-amt'>&#9650;</button>
				<button className='cart-rm'>X</button>
			</div>
			);
	}
}

export default CartBox;