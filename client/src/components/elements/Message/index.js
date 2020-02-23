import React from 'react';
import './index.scss';

const Message = ({message}) => {
    const isJSON = (message) => {
        try {
            JSON.parse(message);
        } catch (e) {
            return false;
        }
        return true;
    }
    
    if(isJSON(message)) {
        return (
            <div className='message-wrapper'>
                <ul className='messages-list'>
                    {JSON.parse(message).map(m => <li className='message-item' key={m.msg}>{m.msg}</li>)}
                </ul>
            </div>
            
            
        )
    } else {
        return (
            <div className='message-wrapper'>
                <div className='message-item'>{message}</div>
            </div>
            
        );
    }

    
}
 
export default Message;