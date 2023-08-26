import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Msg = () => (
  <div className='text-center'>
    <h1 className='text-lg font-bold'>Added To Cart</h1>
    <Link to='/cart'>
      <button className='my-2 bg-black text-white p-2 rounded-md'>Go to Cart</button>
    </Link>
  </div>
);

function ProductDetails(props) {
  props.myFun(false);

  const { addItem } = useCart();

  const [Items, setItems] = useState({});
  
  useEffect(() => {
    const updateItems = async () => {
      const url = `https://fakestoreapi.com/products/${from}`;
      const data = await fetch(url);
      const parseData = await data.json();
  
      setItems(parseData);
    };
  
    updateItems();
  }, []);

  const location = useLocation();
  const { from } = location.state;

  const notify = () => {
    toast(<Msg />, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <div className='lg:my-40 my:20 mx-8'>
      <div
        className={`${
          props.mode === 'dark' ? 'text-white' : 'text-black'
        } p-3 flex flex-col transition-all mt-20 mx-auto md:w-96 lg:w-full justify-center`}
      >
        <div className='product flex flex-col lg:flex-row'>
          <div className='img lg:mx-4'>
            <img
              src={Items.image}
              alt='Loading'
              className='mx-auto bg-white shadow-lg rounded-2xl p-8'
            />
          </div>
          <div className='desc lg:mx-4'>
            <p className='title font-semibold text-3xl my-7'>{Items.title}</p>
            <p className='my-3 box-border'>{Items.description}</p>
            <p className='my-6  text-2xl'>
              $ <b>{Items.price}</b>
            </p>
            <button
              className='bg-gray-500 text-white text-center rounded-xl my-3 px-4 py-2 hover:scale-95'
              id='add'
              onClick={() => {
                addItem(Items);
                notify();
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
