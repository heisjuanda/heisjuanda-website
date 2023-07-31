import PropTypes from 'prop-types';

import './Button.css';

export const Button = (props) => {
    const {
        text,
        className,
        children,
        ...moreProps
    } = props;
    return (
        <button 
            className={`fancy ${className}`}
            {...moreProps}
        >
            <span className="top-key"></span>
            <span className="text">{text}</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
            {children}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.object,
};