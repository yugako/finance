import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';

import Popup from '../../../../../components/elements/Popup';
import Backdrop from '../../../../../components/elements/Backdrop';
import EditAccount from '../../editAccount';

const AccountActions = ({account}) => {
    let [isPopupOpen, setPopupOpen] = useState(false);

    const togglePopupHandler = () => setPopupOpen(isPopupOpen = !isPopupOpen);

    return (
        <> 
            <div className="account-actions">
                {/* <NavLink to='/dashboard/accounts/add'>
                    Add new
                </NavLink> */}
                <div onClick={togglePopupHandler} className='edit'>
                    Edit
                </div>
                <div className='remove'>
                    Remove
                </div>
            </div>
            {isPopupOpen 
				? 	
					<>
						<Popup open={isPopupOpen}>
							<EditAccount currentAccount={account} />
						</Popup>
						<Backdrop clickHandler={togglePopupHandler} />
					</>
				:
					null
			}
        </>
    );
}
 
export default AccountActions;