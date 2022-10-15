import Notes from '../models/notes.js';

const create = (req, res) => {
    try{
        
        const {title, tagline, description} = req.body;
        const note = new Notes({title, tagline, description});
        note.save();
        return res.status(201).json({
            success: true,
            data: note,
            message: "Note created successfully",
        });
    }catch(err){
        return res.status(400).json({
            success: false,
            error: true,
            message: err.message,
        });
    }
}

export default create;