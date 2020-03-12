import React, {useContext, useState, useEffect, useCallback} from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../../context/AuthContext';

import { useData } from '../../../../hooks/data.hook';
import './index.scss';

const UserBar = () => {
	const [accounts, setAccounts] = useState();
    const auth = useContext(AuthContext);
    const [fullName, setFullName] = useState('user');
    const {fetchDataList} = useData();

    const getAccounts = useCallback(async () => {
        const accountsList = await fetchDataList('account');

        setAccounts(accountsList);
    }, []);

    const getFullName = useCallback(() => {    
        if(localStorage.getItem('userName')) {
            const data = localStorage.getItem('userName');
            setFullName(data);
        }
    }, []);

    useEffect(() => {
       getFullName();
        getAccounts();
    }, [getFullName, getAccounts]);
	return (
		<div className='user-bar'>
			<div className="user-bar__image">
				<img src="https://www.unicef.org/montenegro/sites/unicef.org.montenegro/files/styles/hero_desktop/public/Nadja%20mlada%20reporterka%20UNICEFova%20volonterka.jpg?itok=vcOwP46I" alt="User"/>
			</div>
			<div className="user-bar__content">
				<div className="user-bar__content-name">
						Hello, {fullName}
				</div>
				
				<div className="user-bar__content-actions">
					<i title='Search' className="fas fa-search-dollar"></i>
					<NavLink to="/dashboard/edit-profile">
						<i title='Edit profile' class="fas fa-user-edit"></i>
					</NavLink>
					<i title='Log Out' className="fas fa-door-open"  onClick={auth.logout}></i>
				</div>
			</div>
		</div>
	);
}

export default UserBar;