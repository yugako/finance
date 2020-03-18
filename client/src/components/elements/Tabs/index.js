import React, { useState } from 'react';

import './index.scss';

const tabs = [
    {
        title: 'Tab 1',
        content: 'Tab 1 Content'
    },
    {
        title: 'Tab 2',
        content: 'Tab 2 Content'
    },
]
const Tabs = ({headings, content}) => {
    const [currentTab, setCurrentTab] = useState(0);
    
    const clickHandler = (index) => {
        console.log(index);
        setCurrentTab(index);
    }
    return (
        <div className='tabs'>
            <div className="tabs-header">
                <ul>
                    {headings.map((title, index) => <li onClick={() => clickHandler(index)} key={index}>{title} </li>)}
                
                </ul>
            </div>
            <div className="tabs-content">
                <div className="row">
                    {content.map((content, index) => {
                        if (currentTab === index) {
                            return (
                                <div className="col-12 col-lg-6">
                                    <div key={index} className="tabs-content__item fadeIn">
                                        {content}
                                    </div>
                                </div> 
                            )
                        } else {
                            return null;
                        }
                    })}
                    
                </div>
            </div>
            
            <div className="tabs-content">
                
            </div>
        </div>
    );
}
 
export default Tabs;