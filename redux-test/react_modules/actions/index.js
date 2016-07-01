export const addToCart = (itemId) => {
	return {
		type: 'ADD_TO_CART',
		itemId
	}
}

export const removeFromCart = (itemId) => {
	return {
		type: 'REMOVE_FROM_CART',
		itemId
	}
}