module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', productPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, respond) {
        var product_id = msg.productId

        for (x in mockData) {
            if (mockData[x].product_id == product_id) {
                res = mockData[x].product_price
                respond({ result: res });
            }
            // if reach end of file then return null
        }


    }

}