import React from 'react';
import { useParams } from 'react-router-dom';

const Detrails = () => {
    const {detailsId} = useParams ();

    return (
        <div>
            <h2>Details: {detailsId}</h2>
        </div>
    );
};

export default Detrails;