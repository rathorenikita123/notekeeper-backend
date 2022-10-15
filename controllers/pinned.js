import Notes from "../models/notes.js";
const pinned = async (req, res) => {
    try{
        const {id} = req.params;
        const note = await Notes.findById(id);
        note.pin = !note.pin;
        console.log(note, "pinned");
        await note.save();
        return res.status(200).json({
            success: true,
            data: note,
            message: "Note pinned successfully",
        });
    }catch(err){
        return res.status(400).json({
            success: false,
            error: true,
            message: err.message,
        });
    }
}

export default pinned;