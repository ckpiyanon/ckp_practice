export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export function addToCart(txt) {
	return {type: ADD_TO_CART,txt}
}
export function removeFromCart(txt) {
	return {type: REMOVE_FROM_CART,txt}
}