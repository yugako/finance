const {Router} = require('express');
const Account  = require('../models/Account');
const Activity  = require('../models/Activity');

const auth = require('../middleware/auth.middleware');

const router = Router();

/**
 * Get account by id
 */
router.get('/:query', auth, async (req, res) => {
    try {
        const reg = new RegExp(req.params.query, 'gi');
        const searchTarget = req.headers.target;
        
        let resData = null;

        switch (searchTarget) {
            case 'activities':
                resData = await Activity.find({activityName: reg, owner: req.user.userId});
                break;
            default:
                resData = await Account.find({accountName: reg, owner: req.user.userId});
                break;
        }        
        
        res.json(resData);


		
	} catch(e) {
       
		res.status(500).json({message: 'Smth went wrong! Try again.'})
	}
});

module.exports = router;