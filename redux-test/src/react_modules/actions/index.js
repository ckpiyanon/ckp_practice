export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT = 'CHECKOUT';

export const addToCart = (itemId) => {
	return {type: ADD_TO_CART,itemId}
}
export const removeFromCart = (itemId) => {
	return {type: REMOVE_FROM_CART,itemId}
}
export const checkout = () => {
	return {type: CHECKOUT}
}