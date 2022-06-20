import React, { Fragment, useEffect } from 'react';
import Download from '../../components/include/Download';

const Oxworld = () => {
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
      }, []);
    return (
        <Fragment>
            
            <div className="oxworld_section_2">
                <div className="container">
                    <Download />
                </div>
            </div>
        </Fragment>
    )
}

export default Oxworld;