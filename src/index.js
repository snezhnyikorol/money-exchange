// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) {
        return {}
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    let obj = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0,
    };
    let val = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1,
    }
    function find(coin) {
        value = val[coin];
        res = (currency - currency % value) / value;
        currency = currency % value;
        obj[coin] = res;
        if (res == 0) {
            delete(obj[coin]);
        }
    }
    find("H");
    find("Q");
    find("D");
    find("N");
    find("P");
    return obj;
}
