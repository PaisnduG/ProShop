import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_ERROR,
} from '../constants/productConstants'

export const productListReducer = (
	state = { products: [] },
	{ type, payload } // action = {type, payload}
) => {
	switch (type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] }
		case PRODUCT_LIST_SUCCESS:
			return { loading: false, products: payload }
		case PRODUCT_LIST_ERROR:
			return { loading: false, error: payload }
		default:
			return state
	}
}
