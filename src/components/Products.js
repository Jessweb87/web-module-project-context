import React,  { useContext } from 'react';

// Step 5- - Now that our `ProductContext` is now providing data we can finally consume it! To do so let's head over to our `Products` component and import the `useContext` hook as well as our `ProductContext`.

import ProductContext from '../contexts/ProductContexts';

// Components
import Product from './Product';

// Step 6- In the component, call the `useContext` hook and pass in the context object we want to use into it.
// - When we do this, `useContext` is going to return value passed by our `ProductContext` Provider `value` prop. In our case we're getting back an object with two properties. A `products` property and a `addItem` property. We can go ahead and destructure those.
// const { products, addItem } = useContext(ProductContext);


const Products = () => {
	const { products } = useContext(ProductContext);


	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
