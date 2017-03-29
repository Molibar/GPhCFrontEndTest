var OrderRepository = function (config) {
    this.getOrder = function (id, callback) {
        $.get(config.apiBaseUrl + "/Orders", function(data) {
            console.log(data);
            callback(data);
        });
    };

    this.getOrders = function (callback) {
        $.get(config.apiBaseUrl + "/Orders", function(data) {
            console.log(data);
            callback(data);
        });
    };

    this.storeOrder = function (order, callback) {
        $.ajax({
            url: config.apiBaseUrl + "/Orders",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(order),
            dataType: "json",
            success: function (data) {
                console.log(data);
                callback(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(textStatus + " " + errorThrown);
            }
        });
    };

    this.updateOrder = function (order, callback) {

    };

    this.deleteOrder = function (id, callback) {
        $.ajax({
            url: config.apiBaseUrl + "/Orders/" + id,
            type: "DELETE",
            success: function (data) {
                console.log(data);
                if (callback) callback(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(textStatus + " " + errorThrown);
            }
        });
    };


    this.resetData = function (callback) {
        $.get(config.apiBaseUrl + "/Orders/Reset", function(data) {
            callback(data);
        });
    };
};
