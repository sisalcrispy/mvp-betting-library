import React from 'react';
import './loading-placeholder.component.scss';

const LoadingPlaceholder = () => {
    return (
        <div className="spinner-container">
            <div className="spinner-border text-dark" role="status"/>
            <span>
        Loading...
      </span>
        </div>
    );
};

export default LoadingPlaceholder;
