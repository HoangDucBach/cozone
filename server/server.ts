import express from "express";

const router = express.Router();

router.get('/myzone/watch', (req, res) => {
    res.json([
        {
            id: "bach",
            age: 26,

        },
        {
            id: "hoc",
            age: 26,

        }
    ])
});
module.exports = router;