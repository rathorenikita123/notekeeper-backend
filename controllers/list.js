import Notes from '../models/notes.js';

const list = async (req, res) => {
    try{

        const notes = await Notes.find();
        const pinnedNotes = notes.filter(note => note.pin === true);
        const unpinnedNotes = notes.filter(note => note.pin === false);
        const sortedNotes = [...pinnedNotes, ...unpinnedNotes];

        console.log(sortedNotes);
        return res.status(200).json({
            success: true,
            data: sortedNotes,
            message: "Notes listed successfully",
        });
    }catch(err){
        return res.status(400).json({
            success: false,
            error: true,
            message: err.message,
        });
    }
}

export default list;