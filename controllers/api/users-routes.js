const router = require('express').Router();
const { Pet, User } = require('../../models');

// Find all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { excluded: ['password'] }
    })
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Find One user
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Pet,
                attributes: ['id', 'pet_name', 'pet_age', 'pet_compatability', 'pet_type', 'pet_health'],
            }
        ]
    })
        .then(dbUser => {
            if (!dbUser) {
                res.status(404).json({ message: "No user found " });
                return;
            }
            res.json(dbUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Create User
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUser => res.json(dbUser))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update User
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbUser => {
            if (!dbUser[0]) {
                res.status(404).json({ message: " No user found " });
                return;
            }
            res.json(dbUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Delete User
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUser => {
            if (!dbUser) {
                res.status(404).json({ message: " No user found " });
                return;
            }
            res.json(dbUser);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;