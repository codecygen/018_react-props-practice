import React from 'react';

const Detail = (props) => {
    return(
        <div>
            <p className="info">{props.phone}</p>
            <p className="info">{props.email}</p>
        </div>
    );
}

export default Detail;