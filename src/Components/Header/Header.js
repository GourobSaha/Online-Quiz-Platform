import React from 'react';
import image1 from '../../Images/cover-2.png'


const Header = () => {
    return (
        <div className='container mx-auto mb-9'>
            <div className="card w-full image-full">
            <figure><img src={image1} alt="Shoes" className='w-full' /></figure>
                <div className='card-body my-auto'>
                    <h1 className='text-4xl'>Examine Your Limits</h1>
                    <p>This platform is design to test your performance and skills.<br/>
                        Join our programme and reinvent yourself.
                    </p>
                    <div className="justify-center">
                        <button className="btn bg-orange-600 border-0">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;