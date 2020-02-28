const {Router} = require('express');
const Account  = require('../models/Account');

const auth = require('../middleware/auth.middleware');

const router = Router();

/**
 * Create account
 */
router.post('/create', auth, async (req, res) => {
    try {
        const {accountName, accountType, accountCurrency, balance} = req.body;

        const existing =  await Account.findOne({accountName});

        if(existing) {
            return res.json({
                account: existing
            });
        }

        const account = new Account({
            accountName, 
            owner: req.user.userId,
            accountType,
            accountCurrency,
            balance,
        });

        await account.save();

        res.status(200).json({account});


	} catch(e) {
        console.log(e);
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

/**
*   Update account
*/

router.put('/:id', auth, async(req, res) => {
    try {
        const account = await Account.findByIdAndUpdate(req.params.id, req.body);

        res.json(account);
    } catch {
        res.status(500).json({message: 'Smth went wrong! Try again.'})
    }
})

module.exports = router;