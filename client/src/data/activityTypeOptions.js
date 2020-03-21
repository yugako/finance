const activityTypeOptions = [
    {
        value: 'Food & Drinks',
        label: 'Food & Drinks',
        subOptions: [
            {
                value: 'Food & Drinks - General',
                label: 'Food & Drinks - General',
            },
            {
                value: 'Bar, cafe',
                label: 'Bar, cafe',
            },
            {
                value: 'Groceries',
                label: 'Groceries',
            },
            {
                value: 'Restaurant, fast-food',
                label: 'Restaurant, fast-food',
            }
        ],
    },
    {
        value: 'Shopping',
        label: 'Shopping',
        subOptions: [
            {
                value: 'Shopping - General',
                label: 'Shopping - General',
            },
            {
                value: 'Clothes & Shoes',
                label: 'Clothes & Shoes',
            },
            {
                value: 'Drug-store, chemist',
                label: 'Drug-store, chemist',
            },
            {
                value: 'Electronics, accessories',
                label: 'Electronics, accessories',
            },
            {
                value: 'Free Time',
                label: 'Free Time',
            },
            {
                value: 'Gifts, Joy',
                label: 'Gifts, Joy',
            },
            {
                value: 'Health and beauty',
                label: 'Health and beauty',
            },
            {
                value: 'Home, garden',
                label: 'Home, garden'
            },
            {
                value: 'Jewels, accessories',
                label: 'Jewels, accessories'
            },
            {
                value: 'Kids',
                label: 'Kids'
            },
            {
                value: 'Pets, animals',
                label: 'Pets, animals'
            },
            {
                value: 'Stationery, tools',
                label: 'Stationery, tools'
            }
        ], 
    },
    {
        value: 'Housing',
        label: 'Housing',
        subOptions: [
            {
                value: 'Housing - General',
                label: 'Housing - General',
            },
            {
                value: 'Energy, utilities',
                label: 'Energy, utilities',
            },
            {
                value: 'Maintenance, repairs',
                label: 'Maintenance, repairs',
            },
            {
                value: 'Mortgage',
                label: 'Mortgage',
            },
            {
                value: 'Property insurance',
                label: 'Property insurance',
            },
            {
                value: 'Rent',
                label: 'Rent',
            },
            {
                value: 'Services',
                label: 'Services',
            },
        ]
    },
    {
        value: 'Transportation',
        label: 'Transportation',
        subOptions: [
            {
                value: 'Transportation - General',
                label: 'Transportation - General',
            },
            {
                value: 'Business Trips',
                label: 'Business Trips',
            },
            {
                value: 'Long distance',
                label: 'Long distance',
            },
            {
                value: 'Public Transport',
                label: 'Public Transport',
            },
            {
                value: 'Taxi',
                label: 'Taxi',
            },
        ]
    },
    {
        value: 'Vehicle',
        label: 'Vehicle',
        subOptions: [
            {
                value: 'Vehicle - General',
                label: 'Vehicle - General'
            },
            {
                value: 'Fuel',
                label: 'Fuel'
            },
            {
                value: 'Leasing',
                label: 'Leasing'
            },
            {
                value: 'Parking',
                label: 'Parking'
            },
            {
                value: 'Rentals',
                label: 'Rentals'
            },
            {
                value: 'Vehicle insurance',
                label: 'Vehicle insurance'
            },
            {
                value: 'Vehicle maintenance',
                label: 'Vehicle maintenance'
            },
        ]
    },
    {
        value: 'Life & Entertainment',
        label: 'Life & Entertainment',
        subOptions: [
            {
                value: 'Life & Entertainment - General',
                label: 'Life & Entertainment - General',
            },
            {
                value: 'Active sport, fitness',
                label: 'Active sport, fitness',
            },
            {
                value: 'Alcohol, tobacco',
                label: 'Alcohol, tobacco',
            },
            {
                value: 'Books, audio, subscriptions',
                label: 'Books, audio, subscriptions',
            },
            {
                value: 'Charity, gifts',
                label: 'Charity, gifts',
            },
            {
                value: 'Culture, sport events',
                label: 'Culture, sport events',
            },
            {
                value: 'Education, development',
                label: 'Education, development',
            },
            {
                value: 'Health care, doctor',
                label: 'Health care, doctor',
            },
            {
                value: 'Hobbies',
                label: 'Hobbies',
            },
            {
                value: 'Holiday trips, hotel',
                label: 'Holiday trips, hotel',
            },
            {
                value: 'Life events',
                label: 'Life events',
            },
            {
                value: 'Lottery, gambling',
                label: 'Lottery, gambling',
            },
            {
                value: 'TV, streaming',
                label: 'TV, streaming',
            },
            {
                value: 'Wellness, beauty',
                label: 'Wellness, beauty',
            },

        ]
    },
    {
        value: 'Communication, PC',
        label: 'Communication, PC',
        subOptions: [
            {
                value: 'Communication, PC - General',
                label: 'Communication, PC - General',
            },
            {
                value: 'Internet',
                label: 'Internet',
            },
            {
                value: 'Phone, cell phone',
                label: 'Phone, cell phone',
            },
            {
                value: 'Postal services',
                label: 'Postal services',
            },
            {
                value: 'Software, apps, games',
                label: 'Software, apps, games',
            },
        ]
    },
    {
        value: 'Financial Expenses',
        label: 'Financial Expenses',
        subOptions: [
            {   
                value: 'Financial Expenses - General',
                label: 'Financial Expenses - General',
            },
            {   
                value: 'Advisory',
                label: 'Advisory',
            },
            {   
                value: 'Charges, Fees',
                label: 'Charges, Fees',
            },
            {   
                value: 'Child Support',
                label: 'Child Support',
            },
            {   
                value: 'Fines',
                label: 'Fines',
            },
            {   
                value: 'Insurances',
                label: 'Insurances',
            },
            {   
                value: 'Loan, interests',
                label: 'Loan, interests',
            },
            {   
                value: 'Taxes',
                label: 'Taxes',
            },
        ]
    },
    {
        value: 'Investments',
        label: 'Investments',
        subOptions: [
            {
                value: 'Investments - General',
                label: 'Investments - General'
            },
            {
                value: 'Collections',
                label: 'Collections'
            },
            {
                value: 'Financial Investments',
                label: 'Financial Investments'
            },
            {
                value: 'Realty',
                label: 'Realty'
            },
            {
                value: 'Savings',
                label: 'Savings'
            },
            {
                value: 'Vehicles, chattels',
                label: 'Vehicles, chattels'
            },
        ]
    },
    {
        value: 'Income',
        label: 'Income',
        subOptions: [
            {
                value: 'Income - General',
                label: 'Income - General',
            },
            {
                value: 'Checks, coupons',
                label: 'Checks, coupons',
            },
            {
                value: 'Child Support',
                label: 'Child Support',
            },
            {
                value: 'Dues & Grants',
                label: 'Dues & Grants',
            },
            {
                value: 'Gifts',
                label: 'Gifts',
            },
            {
                value: 'Interests, dividends',
                label: 'Interests, dividends',
            },
            {
                value: 'Lending, renting',
                label: 'Lending, renting',
            },
            {
                value: 'Lottery, gambling',
                label: 'Lottery, gambling',
            },
            {
                value: 'Refunds (tax, purchase)',
                label: 'Refunds (tax, purchase)',
            },
            {
                value: 'Rental income',
                label: 'Rental income',
            },
            {
                value: 'Sale',
                label: 'Sale',
            },
            {
                value: 'Wage, invoices',
                label: 'Wage, invoices',
            }
        ]
    },
    {
        value: 'Others',
        label: 'Others',
    },
];

export default activityTypeOptions;