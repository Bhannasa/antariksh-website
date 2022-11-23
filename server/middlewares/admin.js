
export const isAdmin = (req, res, next) => {
    try{
        next();
    }catch(e){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}