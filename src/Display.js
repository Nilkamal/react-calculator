import React from 'react';

const Display = ({result}) => {
    const output = result.join('');
    return (<div className='Display' style={{fontSize:'15px'}}>{output}</div>);
}

export default Display;