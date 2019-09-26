import React from 'react';

export default props => (
<div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
   
        <a href = {'https://maps.google.com/?q'+ props.location} className="btn btn-info" role="button"> Location </a>

</div>
);