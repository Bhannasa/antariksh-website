export const BAD_GATEWAY = ( req, res ) => {
    res.status(404).json({
        "success": false,
        "message": "Bad gateway used!! There may be a typo in the path."
    })
}