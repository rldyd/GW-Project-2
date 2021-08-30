const router = require('express').Router();
const db = require('../../models');


// The '/api/name' endpoint

// FindAll name
router.get('/', (req, res) => {
    db.Pet.findAll({
        include: [db.User]
    }).then(dbPet => {
        res.json(dbPet);
    });
});

// Find one name by its 'id' value
router.get('/:id', (req, res) => {
    db.Pet.findOne({
        where: {
            id: req.params.id
        },
        include: [db.User]
    }).then(dbPet => {
        res.json(dbPet);
    });
});

// Create a new name
router.post('/', (req, res) => {
    db.Pet.create(req.body).then(dbPet => {
        res.json(dbPet);
    });
});


// Update a name by its 'id' value
router.put('/:id', (req, res) => {
    db.Pet.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbPet => {
        if(!dbPet) {
            res.status(404).json({ message: " No pet found "});
            return;
        }
        res.json(dbPet);
    })
    .catch((err) => res.status(500).json(err));
});

// Delete a name
router.delete('/:id', (req, res) => {
    dbPet.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPet => {
        if(!dbPet) {
            res.status(404).json({ message: " No pet found with this id "});
            return;
        }
        res.json(dbPet);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;