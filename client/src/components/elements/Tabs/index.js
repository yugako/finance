import React, { useState } from 'react';

import './index.scss';

const Tabs = ({headings, content}) => {
    const [currentTab, setCurrentTab] = useState(0);
    
    const clickHandler = (index) => {
        setCurrentTab(index);
    }

    return (
        <div className='tabs'>
            <div className="tabs-header">
                <ul>
                    {headings.map((title, index) => <li className={currentTab === index ? 'active': ''} onClick={() => clickHandler(index)} key={index}>{title} </li>)}
                </ul>
            </div>
            <div className="tabs-content">
                {content.map((content, index) => {
                    if (currentTab === index) {
                        return (
                            <div key={index} className="tabs-content__item fadeIn">
                                {content}
                            </div> 
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}
 
export default Tabs;