import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Step 3- - Now that we've created our `ProductContext` we can import into our `App.js`. Now we can start providing data across our application!
import ProductContext from './contexts/ProductContexts';

// Step 8 - - Let's go ahead and bring our newly created `CartContext` into our `App.js` and wrap all of our components inside of our `CartContext.Provider`. Make sure our `ProductContext.Provider` is still the root provider.
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// Step 1- In `App.js` there is a function called `addItem`. Finish writing the logic in this function to be able to add the given item to the shopping cart
	const addItem = item => {
		setCart([...cart, item]);
		// add the given item to the cart
	};

	return (
		<div className="App"> 
			{/* Step 9- wrap all of our components inside of our `CartContext.Provider`. Make sure our `ProductContext.Provider` is still the root provider. Now pass a value prop to our `CartContext.Provider`, this value prop is going to contain our `cart` state.*/}
			<CartContext.Provider value={cart}>
				{/* Step 11- While were at it let's go ahead and remove the props from our navigation as well.*/}
			<Navigation />

			{/* Routes // Step 4-Wrap all of your components/routes in `App.js` inside of `ProductContext.Provider` component. - Next pass a value prop to your `Provider`.
			 In the value prop we'll pass in the products state, and an addItem function that will allow us to add books to the cart. <ProductContext.Provider value={{ products, addItem }}>*/}
			<ProductContext.Provider value={{ products, addItem}}>
			<Route exact path="/">
				<Products />
			</Route>
			</ProductContext.Provider>

			<Route path="/cart">
				{/* Step 10- Let's start with our `ShoppingCart` component first. Go ahead and refactor the `ShoppingCart` route to no longer use render props. This will throw us an error, but we'll be able to resolve it quickly.*/}
				<ShoppingCart />
			</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
