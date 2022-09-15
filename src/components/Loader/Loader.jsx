import React from 'react';
import styles from './Loader.module.scss';
import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
    const { loader } = styles;

    return (
        <div className={loader}>
            <MagnifyingGlass
                visible={true}
                height="180"
                width="180"
                ariaLabel="MagnifyingGlass-loading"
                wrapperStyle={{}}
                wrapperClass="MagnifyingGlass-wrapper"
                glassColor='#c0efff'
                color='#e15b64'
            />
        </div>
    )
}

export default Loader;