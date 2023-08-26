import React, { useState } from 'react';
import { useCart } from 'react-use-cart';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast } from 'react-toastify'; // Import only toast from react-toastify

function Login(props) {
  const navigate = useNavigate(); // Use useNavigate to get navigation function


  const [display, setdisplay] = useState('hidden');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const { addItem } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Assuming successful login/registration
    // You can customize the item data that you want to add to the cart
    const itemToAdd = {
      id: 123, // Replace with actual product ID
      name: 'Sample Product', // Replace with actual product name
      price: 10.99, // Replace with actual product price
     
    };

    addItem(itemToAdd); // Add item to cart

    // Navigate to the home page
    navigate('/'); 

    // Display a notification
    notify('Data saved and item added to cart!');
  };

  const handleRegisterToggle = () => {
    setdisplay(display === 'hidden' ? 'inline-block' : 'hidden');
  };

  const notify = (message) => {
    toast(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };


  return (
    <div className="grid">
      <div className={`flex flex-col ${props.mode === 'dark' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-black'} shadow-xl align-middle my-36 md:w-80 md:mx-auto rounded-xl mx-10`}>
        <h2 className='text-center mt-2'>
          {display === 'hidden' ? 'Not Registered?' : 'Already have an account?'}
          <span className={`${props.mode === 'dark' ? 'text-blue-300' : 'text-blue-600 cursor-pointer'}`} onClick={handleRegisterToggle}>Click here</span>
        </h2>
        <h1 className='text-2xl my-4 text-center font-semibold'>Sign in</h1>

        <form onSubmit={handleSubmit} className='mx-4'>
          <h3 className='my-2'>Email address</h3>
          <input type="text"className='my-2 rounded-md w-full p-2 text-black'  value={email} onChange={(e) => setEmail(e.target.value)} />


          <h3 className='my-2'>Password</h3>
          <input type="password" className='my-2 rounded-md w-full p-2 text-black' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className={`${display} w-full`}>
            <h3 className='my-2'>Confirm Password</h3>
            <input type="password" placeholder='Confirm password' className='my-2 rounded-md w-full p-2 text-black' />
            <h3 className='my-2'>Enter Full Name</h3>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      

          </div>

          <h1 className="flex my-2">
            <input type="checkbox" name="Remember me" id="" placeholder='' />
            <h2 className='mx-3'>Remember me</h2>
          </h1>
          
          <button className='my-3 text-center bg-blue-600 w-full rounded-lg text-white p-2' type="submit">Submit</button>
        </form>

        <h5 className={`text-right my-2 ${display === 'hidden' ? 'inline-block' : 'hidden'}`}>
          Forgot <span className={`${props.mode === 'dark' ? 'text-blue-300' : 'text-blue-600 cursor-pointer'}`} >password?</span>
        </h5>
      </div>
    </div>
  );
  }
export default Login;
