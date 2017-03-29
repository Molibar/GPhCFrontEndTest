
var config = {
    "apiBaseUrl": "http://gphctest.azurewebsites.net/api"
};
var orderRepository = new OrderRepository(config);

var updateOrders = function() {
    orderRepository.getOrders(function (data) {

        $.get('js/templates/orders.hbs', function (templateScript) {
            var template = Handlebars.compile(templateScript);
            $("#orders-body").html(template(data));
            $("#orders-body .delete-order-button")
                .bind("click", function (event) {
                    var jqEl = $(event.target);
                    var altId = jqEl.attr("data-id");
                    orderRepository.deleteOrder(altId, updateOrders);
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
                    orderRepository.deleteOrder(altId, updateOrders);
                });
        }, 'html')
    });
};

$("#reset-data")
    .bind("click", function (event) {
        orderRepository.resetData(updateOrders);
    });


updateOrders();
