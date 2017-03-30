07455697682


INSTRUCTIONS

Basic instructions:
Feel free to dazzle us in any way that suits you the best, and feel free to use any resources of frameworks you'd like.
If you feel uninspired for one reason or another there are some requirement suggestions that you migth choose to implement.
We want to let you show off your strengths, and if you are very strong in the area of layout and design don't feel held back by our template application.

For you not to have to start from scratch I have created a sample application that is accessible on:
http://test.gphc.com

This points to a directory at C:\Git\GPhCFrontEndTest where the code is located. Go to that folder and make any changes you want.
Feel free to use the existing code, or write your own implementation. I am using Handlebar.js for templating.
My template used for the order presentation is in /js/templates.
The starting point of the javascript is in /js/main.js
The repository that communicates with the API is in /js/OrderRepository.js


Possible Extensions:
- Presentation of full order details.
-  Present all OrderLines along with Name, Price, and Qty (see API SPECIFICATION below for the shape of the data).
- Implement total price for all orders (the price for each order line is available in the response from the API).
- Allow the user to add orders to the order system.
-  All OrderLines have a Name, Price and Qty.
-  The OrderLine.Name should be a free text field allowing 0-30 characters of text.
-  The OrderLine.Price should be a float.
-  The OrderLine.Qty should be an int 1-10.
-  Add error handling for this.
- Implement Update Order.
-  Make each order clickable and open up a UI that takes changes.
-  Send changes to the API.
-  In the repository (/js/OrderRepository.js) there's an empty updateOrder function, implement that and use it when the orders are updated.
- Make it pretty.
-  Make the order listing pretty.
-  You can also create a completely new page to show off your abilities in the areas of design. As long as it's done with HTML and CSS I'll be happy!


Feel free to google and copy paste code to your heart's content.

I've pre-installed Notepad++, Atom and Visual Studio Code, feel free to use any of those.. ..or anything else you want.



API SPECIFICATION
The back-end might have gone into sleep mode, in that case just give it half a minute to start up after you call it the first time.


If the dataset gets too big, or you've deleted all orders, or you want to start over with the default orders, just call:
http://gphctest.azurewebsites.net/Api/Orders/Reset

The template application also has a "Reset"-button that does exactly this.


This is a RESTFul service. You GET/POST/PUT/DELETE requests to communicate with it:
GET - Get Data
POST - Insert Data
PUT - Update Data (don't forget to add the ID
DELETE - Delete Data



GET ALL ORDERS
GET http://gphctest.azurewebsites.net/Api/Orders

Response:
[{
	"Id": 1,
	"Buyer": "Tony",
	"CreatedDate": "2017-03-29T09:35:04.3126997+00:00",
	"OrderLines": [{
		"Name": "Hammer",
		"Price": 12.5,
		"Qty": 1
	},
	{
		"Name": "Nail",
		"Price": 0.1,
		"Qty": 10
	}]
},
{
	"Id": 2,
	"Buyer": "Pierre",
	"CreatedDate": "2017-03-29T09:35:04.3126997+00:00",
	"OrderLines": [{
		"Name": "Screwdriver",
		"Price": 8.0,
		"Qty": 1
	}]
}]




GET ORDER BY ID
GET http://gphctest.azurewebsites.net/Api/Orders/{id}
{id} - Replace with the Order ID.

Response: {
	"Id": 1,
	"Buyer": "Tony",
	"CreatedDate": "2017-03-29T09:35:04.3126997+00:00",
	"OrderLines": [{
		"Name": "Hammer",
		"Price": 12.5,
		"Qty": 1
	},
	{
		"Name": "Nail",
		"Price": 0.1,
		"Qty": 10
	}]
}




STORE ORDER
POST http://gphctest.azurewebsites.net/Api/Orders

{
	"Buyer": "Michaela",
	"CreatedDate": "2017-03-29T09:35:04.3126997+00:00",
	"OrderLines": [{
		"Name": "Cardigan",
		"Price": 15,
		"Qty": 2
	},
	{
		"Name": "Pink Trousers",
		"Price": 18,
		"Qty": 1
	}]
}

Response:
{new_id}




UPDATE ORDER
PUT http://gphctest.azurewebsites.net/Api/Orders/{id}
{id} - Replace with the Order ID.

{
	"OrderLines": [{
		"Name": "Rabbit",
		"Price": 6.5,
		"Qty": 1
	}]
}


Response:
<empty>




DELETE ORDER
DELETE http://gphctest.azurewebsites.net/Api/Orders/{id}
{id} - Replace with the Order ID.

Response:
<empty>
