// api url
const api_url =
	"https://s3.amazonaws.com/open-to-cors/assignment.json";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url);

	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {

	let tab =
		`<tr>
		<th>SubCategory</th>
		<th>Title</th>
		<th>Price</th>
		<th>Popularity</th>
		</tr>`;

	// let tab = JSON.stringify(data['products']);

	for (var key in data['products']) {
		// do smt with SubObject
		// tab += data['products'][key]['subcategory'];

		tab += `<tr>
 	<td>${data['products'][key]['subcategory']} </td>
 	<td>${data['products'][key]['title']}</td>
 	<td>${data['products'][key]['price']}</td>
 	<td>${data['products'][key]['popularity']}</td>		
 </tr>`;
	

	console.log(data['products'][key]['subcategory']); 
	// Result: typeA
}
// 	let tab =
// 		`<tr>
// 		<th>SubCategory</th>
// 		<th>Title</th>
// 		<th>Price</th>
// 		<th>Popularity</th>
// 		</tr>`;

// 	// Loop to access all rows
// 	for (var i=0; i < (data.products).length; i++) {
// 		tab += `<tr>
// 	<td>${data.products} </td>
// 	<td>${r.title}</td>
// 	<td>${r.price}</td>
// 	<td>${r.popularity}</td>		
// </tr>`;
// 	}
// Setting innerHTML as tab variable
document.getElementById("products").innerHTML = tab;
}
