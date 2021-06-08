//Rest Parameter Function
function add() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    for (var i = 0; i < item.length; i++) {
        console.log(item[i]);
    }
}
add(10, 12, 13, 14, 15);
