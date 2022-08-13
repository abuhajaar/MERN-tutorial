exports.createProduct = (req, res, next) => {

    
    res.json(
        {
            message: 'Create product Successfully',
            data: {
                name: 'Product 1',
                price: '100'

            }
        }
    );
    next();
}
exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: 'Create product Successfully',
            data: {
                name: 'Product 1',
                price: '100'

            }
        }
    );
    next();
}