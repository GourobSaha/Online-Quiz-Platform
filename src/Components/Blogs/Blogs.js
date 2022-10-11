import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-9'>
            <h1 className="text-center text-3xl font-bold text-sky-900 mb-9">Welcome to QnA</h1>
            <div className='grid grid-cols-1 my-7 mx-5 md:mx-32 lg:mx-56 shadow-lg p-5 rounded-xl'>
                <h2 className='text-3xl font-semibold text-orange-600 mb-4'>What is the purpose of React Router?</h2>
                <p className='text-justify'>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
            </div>
            <div className='grid grid-cols-1 my-7 mx-5 md:mx-32 lg:mx-56 shadow-xl p-5 rounded-lg'>
                <h2 className='text-3xl font-semibold text-orange-600 mb-4'>How does Context API work?</h2>
                <p className='text-justify'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='grid grid-cols-1 my-7 mx-5 md:mx-32 lg:mx-56 shadow-xl p-5 rounded-lg'>
                <h2 className='text-3xl font-semibold text-orange-600 mb-4'>What is React useRef hook?</h2>
                <p className='text-justify'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in it's current property. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue);</p>
            </div>
        </div>
    );
};

export default Blogs;