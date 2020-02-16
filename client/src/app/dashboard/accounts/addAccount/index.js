import React, {useState, useContext} from 'react';
import TopBar from '../../../../components/dashboard/top-bar'; 
import {useHttp} from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const AddAccount = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const [account, setAccount] = useState('');
    const {request} = useHttp();

    const submitHandler = async e => {
        e.preventDefault();

        try {
            const data = await request('/api/account/create', 'POST', {name: account}, {
                Authorization: `Bearer ${auth.token}`
            });
            history.push(`/dashboard/accounts/${data.account._id}`);
        } catch (error) {
            
        }
    };

    return (
        <div className='add-account'>
            <TopBar title='Add Account' />
            
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input 
                        name='account_name' 
                        required 
                        type="text"
                        value={account}
                        onChange={e => setAccount(e.target.value)} />
                    <label 
                        htmlFor="input" 
                        className="control-label"
                        >
                            Account
                    </label>
                    <i className="bar"></i>
                </div>
                <input type="submit"  className='submit' value="Add Account"/>
            </form>
        </div>
    );
}
 
export default AddAccount;