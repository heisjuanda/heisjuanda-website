import PropTypes from 'prop-types';

import {LoaderCircle} from '../Modal/component/Loader/Loader';

import './Loader.css';

const Loader = ({ color }) => {
    return (
        <div 
            className='loader-component__suspense'
            style={
                {backgroundColor: color}
            }
        >
            <LoaderCircle />
        </div>
    );
};

Loader.propTypes = {
    color: PropTypes.string,
};

export default Loader;