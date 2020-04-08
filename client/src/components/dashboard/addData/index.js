import React, {useState, useEffect, useCallback} from 'react';

import Popup from '../../elements/Popup';
import AddAccount from '../../../app/dashboard/accounts/addAccount';
import AddActivity from '../../../app/dashboard/activity/addActivity';
import Backdrop from '../../elements/Backdrop';

import { useData } from '../../../hooks/data.hook';
import './index.scss';

const AddData = () => {
	const [accounts, setAccounts] = useState();
	const {fetchDataList} = useData();
	
	let [isOpen, setOpen] = useState(false);
	let [isPopupOpen, setPopupOpen] = useState(false);
	
	const[currentComponent, setCurrentComponent] = useState(<AddAccount />);

	const toggleMenuHandler = () => setOpen(isOpen = !isOpen);
	
    const togglePopupHandler = (component = currentComponent) => {
		setPopupOpen(isPopupOpen = !isPopupOpen);
		setCurrentComponent(component);
	}

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
						<span onClick={() => togglePopupHandler(<AddAccount />)}>Add account</span>
					</li>
					{accounts && accounts.length ?
						<li>
							<span onClick={() => togglePopupHandler(<AddActivity />)}>Add activity</span>
						</li> : null
					}	
				</ul>
			</div>
			{isPopupOpen 
				? 	
					<>
						<Popup open={isPopupOpen}>
							{currentComponent}
						</Popup>
						<Backdrop clickHandler={togglePopupHandler} />
					</>
				:
					null
			}
		</>
		
	);
}

export default AddData;