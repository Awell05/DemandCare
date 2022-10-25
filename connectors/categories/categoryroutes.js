const router = require('express').Router();
const Category = require('../../models/Category');

const Op = db.Sequelize.Op;


// localhost:3030/category/
router.get('/', (req, res) => {
        Category.findAll().then((categoryData) =>{
            res.status(200).json(categoryData);
        });
});

router.post('/school_closures', async (req,res) => {
    try{
        let newSchoolClosure = await Category.create({
           school_closures: req.body.school_closure,
        },
        {where: {school_closure: null},
    })
        res.json(newSchoolClosure)
    } catch (error) {
        res.json(err)
    }
});

module.exports = router;
