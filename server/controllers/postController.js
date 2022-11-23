// import Post from "../models/Post.js"

export const allPosts = async (req, res) => {
    try{
        // const posts = await Post.find();
        const posts = []
        // !sort this according to next upcoming posts then prev posts
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all posts',
            posts
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const addPost = async (req, res) => {
    try{
        
    }catch(e){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}