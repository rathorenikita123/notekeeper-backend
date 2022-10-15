
import { Router } from 'express';
import create from '../controllers/create.js';
import remove from '../controllers/delete.js';
import list from '../controllers/list.js';
import pinned from '../controllers/pinned.js';
import read from '../controllers/read.js';
import update from '../controllers/update.js';
const router = Router();


router.get('/', list);
router.post('/', create );
router.get('/:id', read );
router.put('/:id', update );
router.delete('/:id', remove);
router.put('/pin/:id', pinned );


export default router;
