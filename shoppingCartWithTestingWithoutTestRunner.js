
// create the function that sum the item's price in the cart
function orderTotal(order) {
	return order.items
	.reduce((sum, item)=> sum + item.price * (item.quantity || 1), 0);
}

// ===================
//     Unit Test
// ===================

// Quantity Test
if (orderTotal({
	items: [
		{
			name: "Cat litter",
			price: 400,
			quantity: 2
		},
		{
			name: "Cat food",
			price: 12,
			quantity: 7
		}
	]
}) !== 884){
	throw new Error("Check fail: Quantity 1")
}

// No quantity test case
if (orderTotal({
	items: [
		{
			name: "Cat food",
			price: 12
		}
	]
}) !== 12){
	throw new Error("Check fail: No quantity specified!")
}

// First Test
if (orderTotal({
	items: [
		{
			name: "Cat food",
			price: 12,
			quantity: 1
		},
		{
			name: "Cat cage (small)",
			price: 300,
			quantity: 1
		}
	]
}) !== 312){
	throw new Error("Check fail: Text Example 1")
}

// Second Test
if (orderTotal({
	items: [
		{
			name: "Cat litter",
			price: 400,
			quantity: 1
		},
		{
			name: "Cat cookies",
			price: 3,
			quantity: 1
		}
	]
}) !== 403){
	throw new Error("Check fail: Text Example 2")
}
