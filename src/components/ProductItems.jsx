import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollAnimation from 'react-animate-on-scroll';

function ProductItems(props) {
  const { addItem } = useCart();

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    addItem(props.item);
    notify('Item added to cart!');
  };

  // Function to display a notification
  const notify = (message) => {
    toast(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  return (
    <>
      <ScrollAnimation animateIn='fadeIn'>
        <div className={`bg-white shadow-lg rounded-2xl p-3 flex flex-col transition-all `}>
          <div className='product'>
            <Link to='/productDetails' state={{ from: props.id }}>
              <img src={props.image} alt='Loading' className='w-36 h-40 mx-auto' />
              <p className='title font-semibold text-lg h-20 my-3'>{props.title.slice(0, 25)}...</p>
              <p className='my-3 h-20 hidden sm:inline-flex'>{props.description.slice(0, 70)}...</p>
              <p className='my-3'>Price - $ <b>{props.price}</b></p>
            </Link>
            <h1>
              <button
                className='bg-black text-white text-center w-full rounded-xl my-3 p-2 md:hover:scale-95'
                id='add'
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </h1>
            <ToastContainer autoClose={1500} />
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
}

export default ProductItems;
