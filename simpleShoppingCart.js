const someOrder = {
	items: [
		{
			name: "Cat food",
			price: 8,
			quantity: 10
		},
		{
			name: "Cat cage (small)",
			price: 1000,
			quantity: 1
		},
		{
			name: "Shipping",
			price: 40,
			shipping: true
		}
	]
}

// Free shipping over a certain threashold
const freeShippingThreshold = 1000;

const orderTotal = order => {
	// sum up the items price in the cart
	const totalItems = order.items
	// filter if there is a shipping key first
	.filter(x => !x.shipping)
	.reduce((prev, cur) => prev + cur.price, 0);
	console.log(totalItems);
	// find the shipping price
	const shippingCost =
		order.items.find((item) => {
			// console.log(item.name)
			return item.name === "Shipping";
			// return item
		}).price
	// Free shipping if the total order is over 1000
	shipping = totalItems > freeShippingThreshold ? 0 : shippingCost;
	// return the total cost of the order
	return totalItems + shipping
}

const result = orderTotal(someOrder);

console.log("Final:", result);
