import Router from 'express';

const router = Router();

// GET /events
router.get('/', (req, res) => {
    return res.status(200).send("Inicializando gerenciador de eventos!");
})

export default router;