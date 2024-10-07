import { Router } from 'express'
const router = Router();



router.use((req, res, next) => {
    console.log(`user Router ${req.url}`);
    next()
})

router.get('/', (req, res) => {
    res.send('hello from user')
})

export default router;