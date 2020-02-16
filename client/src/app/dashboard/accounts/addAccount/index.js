import React, {useState, useContext} from 'react';
import {useHttp} from '../../../../hooks/http.hook';
import { AuthContext } from '../../../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import TopBar from '../../../../components/dashboard/top-bar';

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
            <TopBar title='Add account' />            
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