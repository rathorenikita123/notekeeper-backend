import Notes from '../models/notes.js';

const remove =async (req, res) => {
    try{
        const {id} = req.params;
        const note = await Notes.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            data: note,
            message: "Note deleted successfully",
        });
    }catch(err){
        return res.status(400).json({
            success: false,
            error: true,
            message: err.message,
        });
    }
}

export default remove;