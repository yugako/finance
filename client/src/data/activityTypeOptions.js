const activityTypeOptions = [
    {
        value: 'Food & Drinks',
        label: 'Food & Drinks',
        icon: require('../assets/images/icons/food.png'),
        subOptions: [
            {
                value: 'Food & Drinks - General',
                label: 'Food & Drinks - General',
                icon: require('../assets/images/icons/food.png')
            },
            {
                value: 'Bar, cafe',
                label: 'Bar, cafe',
                icon: require('../assets/images/icons/starbucks.png')
            },
            {
                value: 'Groceries',
                label: 'Groceries',
                icon: require('../assets/images/icons/grocery-bag.png'),
            },
            {
                value: 'Restaurant, fast-food',
                label: 'Restaurant, fast-food',
                icon: require('../assets/images/icons/french-fries.png'),
            }
        ],
    },
    {
        value: 'Shopping',
        label: 'Shopping',
        icon: require('../assets/images/icons/shopping-general.png'),
        subOptions: [
            {
                value: 'Shopping - General',
                label: 'Shopping - General',
                icon: require('../assets/images/icons/shopping-general.png'),
            },
            {
                value: 'Clothes & Shoes',
                label: 'Clothes & Shoes',
                icon: require('../assets/images/icons/clothes.png'),
            },
            {
                value: 'Drug-store, chemist',
                label: 'Drug-store, chemist',
                icon: require('../assets/images/icons/pills.png'),
            },
            {
                value: 'Electronics, accessories',
                label: 'Electronics, accessories',
                icon: require('../assets/images/icons/electronics.png'),
            },
            {
                value: 'Free Time',
                label: 'Free Time',
                icon: require('../assets/images/icons/free-time.png'),
            },
            {
                value: 'Gifts, Joy',
                label: 'Gifts, Joy',
                icon: require('../assets/images/icons/gift.png'),
            },
            {
                value: 'Health and beauty',
                label: 'Health and beauty',
                icon: require('../assets/images/icons/beauty.png'),
            },
            {
                value: 'Home, garden',
                label: 'Home, garden',
                icon: require('../assets/images/icons/home.png'),
            },
            {
                value: 'Jewels, accessories',
                label: 'Jewels, accessories',
                icon: require('../assets/images/icons/jewels.png'),
            },
            {
                value: 'Kids',
                label: 'Kids',
                icon: require('../assets/images/icons/kids.png'),
            },
            {
                value: 'Pets, animals',
                label: 'Pets, animals',
                icon: require('../assets/images/icons/pets.png'),
            },
            {
                value: 'Stationery, tools',
                label: 'Stationery, tools',
                icon: require('../assets/images/icons/tools.png'),
            }
        ], 
    },
    {
        value: 'Housing',
        label: 'Housing',
        icon: require('../assets/images/icons/housing.png'),
        subOptions: [
            {
                value: 'Housing - General',
                label: 'Housing - General',
                icon: require('../assets/images/icons/housing.png'),
            },
            {
                value: 'Energy, utilities',
                label: 'Energy, utilities',
                icon: require('../assets/images/icons/energy.png'),
            },
            {
                value: 'Maintenance, repairs',
                label: 'Maintenance, repairs',
                icon: require('../assets/images/icons/maintenance.png'),
            },
            {
                value: 'Mortgage',
                label: 'Mortgage',
                icon: require('../assets/images/icons/mortgage.png'),
            },
            {
                value: 'Property insurance',
                label: 'Property insurance',
                icon: require('../assets/images/icons/insurance.png'),
            },
            {
                value: 'Rent',
                label: 'Rent',
                icon: require('../assets/images/icons/rent.png'),
            },
            {
                value: 'Services',
                label: 'Services',
                icon: require('../assets/images/icons/services.png'),
            },
        ]
    },
    {
        value: 'Transportation',
        label: 'Transportation',
        icon: require('../assets/images/icons/transportation.png'),
        subOptions: [
            {
                value: 'Transportation - General',
                label: 'Transportation - General',
                icon: require('../assets/images/icons/transportation.png'),
            },
            {
                value: 'Business Trips',
                label: 'Business Trips',
                icon: require('../assets/images/icons/business-trips.png'),
            },
            {
                value: 'Long distance',
                label: 'Long distance',
                icon: require('../assets/images/icons/long-distance.png'),
            },
            {
                value: 'Public Transport',
                label: 'Public Transport',
                icon: require('../assets/images/icons/public-transport.png'),
            },
            {
                value: 'Taxi',
                label: 'Taxi',
                icon: require('../assets/images/icons/taxi.png'),
            },
        ]
    },
    {
        value: 'Vehicle',
        label: 'Vehicle',
        icon: require('../assets/images/icons/vehicle.png'),
        subOptions: [
            {
                value: 'Vehicle - General',
                label: 'Vehicle - General',
                icon: require('../assets/images/icons/vehicle.png'),
            },
            {
                value: 'Fuel',
                label: 'Fuel',
                icon: require('../assets/images/icons/fuel.png'),
            },
            {
                value: 'Leasing',
                label: 'Leasing',
                icon: require('../assets/images/icons/leasing.png'),
            },
            {
                value: 'Parking',
                label: 'Parking',
                icon: require('../assets/images/icons/parking.png'),
            },
            {
                value: 'Rentals',
                label: 'Rentals',
                icon: require('../assets/images/icons/rentals.png'),
            },
            {
                value: 'Vehicle insurance',
                label: 'Vehicle insurance',
                icon: require('../assets/images/icons/vehicle-insurance.png'),
            },
            {
                value: 'Vehicle maintenance',
                label: 'Vehicle maintenance',
                icon: require('../assets/images/icons/vehicle-maintenance.png'),
            },
        ]
    },
    {
        value: 'Life & Entertainment',
        label: 'Life & Entertainment',
        icon: require('../assets/images/icons/life.png'),
        subOptions: [
            {
                value: 'Life & Entertainment - General',
                label: 'Life & Entertainment - General',
                icon: require('../assets/images/icons/life.png'),
            },
            {
                value: 'Active sport, fitness',
                label: 'Active sport, fitness',
                icon: require('../assets/images/icons/fitness.png'),
            },
            {
                value: 'Alcohol, tobacco',
                label: 'Alcohol, tobacco',
                icon: require('../assets/images/icons/alcohol.png'),
            },
            {
                value: 'Books, audio, subscriptions',
                label: 'Books, audio, subscriptions',
                icon: require('../assets/images/icons/books.png'),
            },
            {
                value: 'Charity, gifts',
                label: 'Charity, gifts',
                icon: require('../assets/images/icons/charity.png'),
            },
            {
                value: 'Culture, sport events',
                label: 'Culture, sport events',
                icon: require('../assets/images/icons/sport-events.png'),
            },
            {
                value: 'Education, development',
                label: 'Education, development',
                icon: require('../assets/images/icons/development.png'),
            },
            {
                value: 'Health care, doctor',
                label: 'Health care, doctor',
                icon: require('../assets/images/icons/development.png'),
            },
            {
                value: 'Hobbies',
                label: 'Hobbies',
                icon: require('../assets/images/icons/hobbies.png'),
            },
            {
                value: 'Holiday trips, hotel',
                label: 'Holiday trips, hotel',
                icon: '',
            },
            {
                value: 'Life events',
                label: 'Life events',
                icon: '',
            },
            {
                value: 'Lottery, gambling',
                label: 'Lottery, gambling',
                icon: '',
            },
            {
                value: 'TV, streaming',
                label: 'TV, streaming',
                icon: '',
            },
            {
                value: 'Wellness, beauty',
                label: 'Wellness, beauty',
                icon: '',
            },

        ]
    },
    {
        value: 'Communication, PC',
        label: 'Communication, PC',
        icon: '',
        subOptions: [
            {
                value: 'Communication, PC - General',
                label: 'Communication, PC - General',
                icon: '',
            },
            {
                value: 'Internet',
                label: 'Internet',
                icon: '',
            },
            {
                value: 'Phone, cell phone',
                label: 'Phone, cell phone',
                icon: '',
            },
            {
                value: 'Postal services',
                label: 'Postal services',
                icon: '',
            },
            {
                value: 'Software, apps, games',
                label: 'Software, apps, games',
                icon: '',
            },
        ]
    },
    {
        value: 'Financial Expenses',
        label: 'Financial Expenses',
        icon: '',
        subOptions: [
            {   
                value: 'Financial Expenses - General',
                label: 'Financial Expenses - General',
                icon: '',
            },
            {   
                value: 'Advisory',
                label: 'Advisory',
                icon: '',
            },
            {   
                value: 'Charges, Fees',
                label: 'Charges, Fees',
                icon: '',
            },
            {   
                value: 'Child Support',
                label: 'Child Support',
                icon: '',
            },
            {   
                value: 'Fines',
                label: 'Fines',
                icon: '',
            },
            {   
                value: 'Insurances',
                label: 'Insurances',
                icon: '',
            },
            {   
                value: 'Loan, interests',
                label: 'Loan, interests',
                icon: '',
            },
            {   
                value: 'Taxes',
                label: 'Taxes',
                icon: '',
            },
        ]
    },
    {
        value: 'Investments',
        label: 'Investments',
        icon: '',
        subOptions: [
            {
                value: 'Investments - General',
                label: 'Investments - General',
                icon: '',
            },
            {
                value: 'Collections',
                label: 'Collections',
                icon: '',
            },
            {
                value: 'Financial Investments',
                label: 'Financial Investments',
                icon: '',
            },
            {
                value: 'Realty',
                label: 'Realty',
                icon: '',
            },
            {
                value: 'Savings',
                label: 'Savings',
                icon: '',
            },
            {
                value: 'Vehicles, chattels',
                label: 'Vehicles, chattels',
                icon: '',
            },
        ]
    },
    {
        value: 'Income',
        label: 'Income',
        icon: '',
        subOptions: [
            {
                value: 'Income - General',
                label: 'Income - General',
                icon: '',
            },
            {
                value: 'Checks, coupons',
                label: 'Checks, coupons',
                icon: '',
            },
            {
                value: 'Child Support',
                label: 'Child Support',
                icon: '',
            },
            {
                value: 'Dues & Grants',
                label: 'Dues & Grants',
                icon: '',
            },
            {
                value: 'Gifts',
                label: 'Gifts',
                icon: '',
            },
            {
                value: 'Interests, dividends',
                label: 'Interests, dividends',
                icon: '',
            },
            {
                value: 'Lending, renting',
                label: 'Lending, renting',
                icon: '',
            },
            {
                value: 'Lottery, gambling',
                label: 'Lottery, gambling',
                icon: '',
            },
            {
                value: 'Refunds (tax, purchase)',
                label: 'Refunds (tax, purchase)',
                icon: '',
            },
            {
                value: 'Rental income',
                label: 'Rental income',
                icon: '',
            },
            {
                value: 'Sale',
                label: 'Sale',
                icon: '',
            },
            {
                value: 'Wage, invoices',
                label: 'Wage, invoices',
                icon: '',
            }
        ]
    },
    {
        value: 'Others',
        label: 'Others',
        icon: '',
    },
];

export default activityTypeOptions;