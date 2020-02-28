exports.min = function min(array) {
    if (array != undefined && array.length > 0) {
        array = array.sort(function (a, b) {
            return a - b
        });
        return array[0];
    } else return 0;

}

exports.max = function max(array) {
    if (array != undefined && array.length > 0) {
        array = array.sort(function (a, b) {
            return b - a
        });
        return array[0];
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    let result = 0;
    if (array != undefined && array.length > 0) {
        array.forEach(item => {
            result += parseInt(item);
        });
        result = result / array.length
    }
    return result;

}
