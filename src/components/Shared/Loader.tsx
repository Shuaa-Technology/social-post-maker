import React from 'react';
import classNames from 'classnames';
import styles from './Loader.module.scss';

const Loader = ({ hAuto = false }) => {
    const loaderClasses = classNames(styles.loaderWrapper, { [styles.hAuto]: hAuto });

    return (
        <div className={loaderClasses}>
            <div className={styles.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
