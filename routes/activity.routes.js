const {Router} = require('express');
const Activity  = require('../models/Activity');

const auth = require('../middleware/auth.middleware');

const router = Router();

/**
 * Create activity
 */
router.post('/create', auth, async (req, res) => {
    try {
        const {activityName, activityType, activitySpendings, accountType, activityDate} = req.body;

        const activity = new Activity({
            activityName, 
            activityType, activitySpendings, accountType, activityDate,
            owner: req.user.userId,
            
        });

        await activity.save();

        console.log(res.status);
        res.status(200).json({activity});


	} catch(e) {
        console.log(e.message);
		res.status(500).json({message: 'Smth went wrong! Try again.'})
	}
});

/**
 * Get all activities
 */
router.get('/', auth, async (req, res, next) => {
    try {
		const activities = await Activity.find({
            owner: req.user.userId
        });
        res.json(activities);
		
	} catch(e) {
		res.status(500).json({message: 'Smth went wrong! Try again.'})
	}
});


/**
 * Get activity by id
 */
router.get('/:id', auth, async (req, res, next) => {
    try {
		const activity = await Activity.findById(req.params.id);
        res.json(activity);
		
	} catch(e) {
		res.status(500).json({message: 'Smth went wrong! Try again.'})
	}
});

module.exports = router;