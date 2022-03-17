import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <i className="fa-brands fa-old-republic fa-7x"/>
            <span>
                Republic has been fallen
            </span>
            <span>
                (but we already sent an army of Jedi to fix it)
            </span>
        </div>
    )
}
export default ErrorIndicator;