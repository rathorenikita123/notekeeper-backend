import Notes from '../models/notes.js';

const update = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, tagline, description} = req.body;
        const note = await Notes.findByIdAndUpdate(id, {title, tagline, description});
        return res.status(200).json({
            success: true,
            data: note,
            message: "Note updated successfully",
        });
    }catch(err){
        return res.status(400).json({
            success: false,
            error: true,
            message: err.message,
        });
    }
}

export default update;