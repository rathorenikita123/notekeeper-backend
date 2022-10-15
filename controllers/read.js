import Notes from '../models/notes.js';

const read = (req, res) => {
    try{
        const {id} = req.params;
        const note = Notes.findById(id);
        return res.status(200).json({
            success: true,
            data: note,
            message: "Note read successfully",
        });
    }catch(err){
        return res.status(400).json({
            success: false,
            error: true,
            message: err.message,
        });
    }
}

export default read;