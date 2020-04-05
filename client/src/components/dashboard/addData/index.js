import React, {useState, useEffect, useCallback} from 'react';
import {NavLink} from 'react-router-dom';

import Popup from '../../elements/Popup';
import AddAccount from '../../../app/dashboard/accounts/addAccount';
import AddActivity from '../../../app/dashboard/activity/addActivity';

import { useData } from '../../../hooks/data.hook';
import './index.scss';

const popupContent = [
	{
		component: <AddAccount />,
		label: 'Add account',
	},
	// {
	// 	component: <AddActivity />,
	// 	label: 'Add activity',
	// }
];



const AddData = () => {
	const [accounts, setAccounts] = useState();
    const {fetchDataList} = useData();
	let [isOpen, setOpen] = useState(false);
	let [isPopupOpen, setPopupOpen] = useState(false);

    const toggleMenuHandler = () => setOpen(isOpen = !isOpen);
    const togglePopupHandler = () => setPopupOpen(isPopupOpen = !isPopupOpen);

    const getAccounts = useCallback( async () => {
        const accountsList = await fetchDataList('account');

        setAccounts(accountsList);
    }, [fetchDataList]);

    useEffect(() => {
       getAccounts();
    }, [getAccounts]);

	return (
		<>
			<div className="add-data">
				<i onClick={toggleMenuHandler} className="fas fa-plus-circle"></i>
			
				<ul className={`add-data__dropdown dropdown ${isOpen ? 'open' : 'closed'}`}>
					<li>
						<span onClick={togglePopupHandler}>Add Account</span>
						{/* <NavLink onClick={toggleMenuHandler} to="/dashboard/accounts/add"></NavLink> */}
					</li>
					

					{/* {accounts && accounts.length ?
						<li>
							<NavLink onClick={toggleMenuHandler} to="/dashboard/activity/add">Add activity</NavLink>
						</li> : null
					} */}
					
				</ul>
			</div>
			{isPopupOpen 
				? 
					<Popup open={isPopupOpen}>
						<AddAccount />
					</Popup>
				:
					null
			}
		</>
		
	);
}

export default AddData;