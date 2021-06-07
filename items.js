var products = [
	{
		name: "Skim Milk",
		lactoseintolerant: true,
		nutFree: true,
        //organic: false,
		price: 4.50
	},
	{
		name: "Protein Bar",
		lactoseintolerant: true,
		nutFree: false,
       // organic: false,
		price: 5.00
	},

    {
		name: "Salad",
		lactoseintolerant: true,
		nutFree: true,
       // organic: true;
		price: 3.00
	},

    {
		name: "Apple",
		lactoseintolerant: true,
		nutFree: true,
        //organic: true,
		price: 1.75
	},



	{
		name: "Cake",
		lactoseintolerant: false,
		nutFree: true,
      //  organic: false,
		price: 17.89
	}
];
	




function restrictListProducts(prods, restriction) {
	let product_names = [];

	for (let i=0; i<prods.length; i+=1) {

		if ((restriction == "LactoseIntolerant") && (prods[i].lactoseintolerant == true)){
			product_names.push(prods[i].name);
		}

		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);

		}


        else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);

		}



		else if (restriction == "None"){
			product_names.push(prods[i].name);

		}
	}
	return product_names;
}



function calculateTotal(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}