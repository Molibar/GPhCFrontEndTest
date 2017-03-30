
var config = {
    "apiBaseUrl": "http://gphctest.azurewebsites.net/api"
};
var orderRepository = new OrderRepository(config);

var populateOrders = function() {
    orderRepository.getOrders(function (data) {
var total = 0;
total = data.reduce(function(prev, next){
    var fn = function(prev, next){
        return prev.Price + next.Price;
    };
    return prev.OrderLines.reduce(fn) + next.OrderLines.reduce(fn);
});
console.log(total);
        $.get('js/templates/orders.hbs', function (templateScript) {
            var template = Handlebars.compile(templateScript);
            $("#orders-body").html(template(data));
            $("#orders-body .delete-order-button")
                .bind("click", function (event) {
                    var jqEl = $(event.target);
                    var altId = jqEl.attr("data-id");
                    orderRepository.deleteOrder(altId, populateOrders);
                });
        }, 'html')
    });
};

var resetData = function() {
    orderRepository.getOrders(function (data) {

        $.get('js/templates/orders.hbs', function (templateScript) {
            var template = Handlebars.compile(templateScript);
            $("#orders-body").html(template(data));
            $("#orders-body .delete-order-button")
                .bind("click", function (event) {
                    var jqEl = $(event.target);
                    var altId = jqEl.attr("data-id");
                    orderRepository.deleteOrder(altId, populateOrders);
                });
        }, 'html')
    });
};

$("#reset-data")
    .bind("click", function (event) {
        orderRepository.resetData(populateOrders);
    });


$('#add-data').bind('click', function(event){

})

populateOrders();
