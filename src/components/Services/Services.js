import React from 'react';
import Card from '../Card/Card';

const Services = () => {
    const services=[
        {id:1, title:'web Development', body:'blog E-Commerce'},
        {id:1, title:'web Development', body:'blog E-Commerce'},
        {id:1, title:'web Development', body:'blog E-Commerce'},
        {id:1, title:'web Development', body:'blog E-Commerce'},
        {id:1, title:'web Development', body:'blog E-Commerce'},
        {id:1, title:'web Development', body:'blog E-Commerce'}
    ]
    return (
        <div>
            <div className='text-center'>
                <h2>My Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque ex asperiores, voluptate sequi praesentium recusandae dolore expedita commodi eius.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {
                services.map(service=><Card/>)

              }
                
            </div>
        </div>
    );
};

export default Services;