import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();

    return (
        <div className='text-center'>
            <div className='my-20'>
                <h1 className='text-sky-800 text-8xl'>404</h1>
                <h3 className='text-4xl mb-7 text-orange-600'>Page Not Found</h3>
                {
                    error && (
                        <div className='flex'>
                        <p className='mr-4'>
                            {error.statusText || error.message}
                        </p>
                        <p> {error.status}</p>
                        </div>
                    )
                }
                <p>The page you are looking for doesn't Exist or an <br/>
                    other error occurred. Go to <Link to='/' className='text-sky-700 font-semibold'>Home Page</Link>.
                </p>
            </div>
        </div>
    );
};

export default NotFound;