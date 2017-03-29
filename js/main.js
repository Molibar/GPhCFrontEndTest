
var config = {
    "apiBaseUrl": "http://gphctest.azurewebsites.net/api"
};
var orderRepository = new OrderRepository(config);
orderRepository.getOrders(function (data) {

    $.get('js/templates/orders.hbs', function (templateScript) {
        var template=Handlebars.compile(templateScript);
        $("#orders-body").html(template(data));
    }, 'html')
});
