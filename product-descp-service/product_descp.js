module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
        var product_id = msg.productId

        for (x in mockData) {
            if (mockData[x].product_id == product_id) {
                res = mockData[x].product_url
                respond({ result: res });
            }
        }
    }

    function productName(msg, respond) {
        var product_id = msg.productId

        for (x in mockData) {
            if (mockData[x].product_id == product_id) {
                res = mockData[x].product_name
                respond({ result: res });
            }
        }

    }

}