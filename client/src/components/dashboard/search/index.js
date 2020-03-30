import React, { useState, useContext } from 'react';
import {NavLink} from 'react-router-dom';
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import ActivitySingle from '../activitySingle';

import Input from '../../elements/Forms/input';

import './index.scss';


const targetData = [
    'accounts', 'activities'
];


const Search = ({clickHandler}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState();
    const [target, setTarget] = useState(targetData[0]);
    const [targetIndex, setTargetIndex] = useState(0);

    const {request} = useHttp();
    const {token} = useContext(AuthContext);


    const changeHandler = async event => {
        try {
            setQuery(event.target.value);
            
            const searchResults = await request(`/api/search/${query}`, 'GET', null, {
                Authorization: `Bearer ${token}`,
                Target: target
            });

            console.log(searchResults);
            
            setResults(searchResults);

        } catch (error) {
            console.log(error);
        }
    }

    const targetSearchHandler = async (target, index) => {
        setTarget(target);
        setTargetIndex(index);
        setResults([]);

        try {
            
            const searchResults = await request(`/api/search/${query}`, 'GET', null, {
                Authorization: `Bearer ${token}`,
                Target: target
            });
            
            setResults(searchResults);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='search'>
            <div className="search-toolbar">
                <h4>Search by: </h4>

                <ul className="search-toolbar__items">
                    {targetData.map(
                        (t, index) => <li key={index} onClick={() => targetSearchHandler(t, index)} className={`search-toolbar__item ${targetIndex === index ? 'active' : ''}`}>{t}</li>
                    )}
                </ul>
            </div>
            <Input
                name='query' 
                isRequired={false} 
                type='text'
                value={query} 
                inputHandler={changeHandler}
                label=''
            />
            <div className="search-results">
                {Array.isArray(results) && results.length > 0 
                    ?
                        results.map((r, index) => {
                            if(target === 'accounts') {
                                return (
                                    <div key={index} className='search-results__item'>
                                        
                                        <div className="search-results__item-head">
                                            <NavLink className='search-results__item-link' onClick={clickHandler} to={`/dashboard/accounts/${r._id}`}>
                                                {r.accountName}
                                            </NavLink>
                                            <div className="search-results__item-money">
                                                <span>{r.balance}</span>
                                                <span>{r.accountCurrency}</span>
                                            </div>
                                        
                                        </div>
                                        
                                        {r.accountType}
                                        
                                        
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className='search-results__item'>
                                            <ActivitySingle
                                                title={r.activityName} 
                                                date={r.activityDate}
                                                amount={r.activitySpendings}
                                                account={r.accountName}
                                                icon={r.icon} 
                                            />    
                                    </div>
                                )
                            }
                            
                        })
                    : 'Nothing to show'
                }
            </div>
            <span onClick={clickHandler} className='search-close'>&times;</span>
        </div> 
    );
}
 
export default Search;