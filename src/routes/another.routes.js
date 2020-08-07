const express = require('express');

const router = express.Router();
router.get("/", (req, res) => {
    res.json({
        message: "API PIALA!"
    });
});


export default router;