/* Handler Example */
/*
const handlerExample = async(req, res) => {
    const { session: { user } } = req;
    ...
    return res.status(200).json(JSON_DATA);
}
*/
const withProtect = (handler) => { // takes handler functions
    return async(req, res) => {
        // Do whatever you want to do...
        return handler(req, res);
    }
}

export default withProtect;