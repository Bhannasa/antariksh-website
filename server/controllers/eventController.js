import Event from "../models/Event.js"

export const allEvents = async (req, res) => {
    try{
        const events = await Event.find();
        // !sort this according to next upcoming events then prev events
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all events',
            events
        })
    }catch(e){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}

export const addEvent = async (req, res) => {
    try{
        
    }catch(e){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}