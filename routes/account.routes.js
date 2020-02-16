const {Router} = require('express');
const Account  = require('../models/Account');

const auth = require('../middleware/auth.middleware');

const router = Router();

/**
 * Create account
 */
router.post('/create', auth, async (req, res) => {
    try {
        const {name} = req.body;

        const existing =  await Account.findOne({name});

        if(existing) {
            return res.json({
                account: existing
            });
        }

        const account = new Account({
            name, owner: req.user.userId
        });

        await account.save();

        res.status.json({account});


	} catch(e) {
		res.status(500).json({message: 'Smth went wrong! Try again.'})
	}
});

/**
 * Get all accounts
 */
router.get('/', auth, async (req, res) => {
    try {
		const accounts = await Account.find({
            owner: req.user.userId
        });
        res.json(accounts);
		
	} catch(e) {
		res.status(500).json({message: 'Smth went wrong! Try again.'})
	}
});


/**
 * Get account by id
 */
router.get('/:id', auth, async (req, res) => {
    try {
		const account = await Account.findById(req.params.id);
        res.json(account);
		
	} catch(e) {
		res.status(500).json({message: 'Smth went wrong! Try again.'})
	}
});

module.exports = router;