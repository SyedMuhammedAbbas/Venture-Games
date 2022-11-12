import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { clearCart } from '../../features/counter/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function CheckOut() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [total_items, setTotal_Items] = useState(0);
  const [total_weight, setTotal_Weight] = useState(0);
  const [total_amount, setTotal_Amount] = useState(0);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [shipping_fee, setShippingFee] = useState();
  const user = useSelector((state) => state.user.userDetails);
  const region = useSelector((state) => state.cart.region);
  const information = useSelector((state) => state.checkout.billingInfo);
  console.log(information);
  async function getCart() {
    let jwtToken = JSON.parse(localStorage.getItem('token'));
    let config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };
    let response = await axios.get(
      'https://api.venturegames.pk/GetCart?ShippingRegion=' + region,
      config
    );
    setTotal_Items(response.data.CartItems.length);
    setTotal_Amount(response.data.CartPrice);
    setTotal_Weight(response.data.CartWeight);
    setShippingFee(response.data.ShippingCharges);
  }

  useEffect(() => {
    getCart();
    if (user.FullName) {
      setEmail(user.EmailAddress);
      const [first, last] = user.FullName.split(' ');
      setFirstName(first);
      setLastName(last);
    }
  }, [Object.values(cartItems)]);
  const order_summary = [
    'total items:',
    'total amount:',
    'total weight:',
    'shipping fee:',
    'total',
  ];
  const order_summary_values = [
    total_items,
    total_amount,
    total_weight,
    shipping_fee,
    total_amount,
  ];
  const [getDebitValue, setDebitValue] = useState(false);
  const [getCODvalue, setCODvalue] = useState(true);

  function handleDebitCard() {
    if (getCODvalue) {
      setCODvalue(false);
      if (!getDebitValue) {
        setDebitValue(true);
      }
    } else {
      setDebitValue(true);
    }
  }

  async function submitDelivery() {
    if(getCODvalue) {
      console.log("Inside");
      let jwtToken = JSON.parse(localStorage.getItem('token'));
      let config = {
        headers: {
          Authorization: 'Bearer ' + jwtToken,
          'Content-Type': 'application/json',
        },
      };
      let data = JSON.stringify({
        BillingAddress1: information.BillingAddress1,
        BillingAddress2: information.BillingAddress2,
        ShippingAddress1: information.ShippingAddress1,
        ShippingAddress2: information.ShippingAddress2,
        ShippingRegion: information.ShippingRegion,
        PaymentMethod: 'COD',
        ShippingPhone: information.ShippingPhone,
        BillingPhone: information.BillingPhone,
      });
      // console.log(data);
      let response = await axios.post(
        'https://api.venturegames.pk/Order/Checkout',
        data,
        config
      );
      console.log(response);
      if(response.data = 'Success') {
        toast.success("Order Successful", {
          className: "toast-message",
        })
        dispatch(clearCart());
        router.push("/thankyou");
      }
    }
  }

  async function handleCOD() {
    if (getDebitValue) {
      setDebitValue(false);
      if (!getCODvalue) {
        setCODvalue(true);
      }
    } else {
      setCODvalue(true);
    }
  }

  return (
    <>
      <div className='bg-[#FFB636] pb-20 h-[100%]'>
        <div className='flex xl3:grid w-[100%]'>
          <div className='pt-[5%] pb-[5%] xl3:pt-[7%] tablet:pt-[7%] w-[55%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[100%]'>
            <h1 className='text-black font-semibold text-[60px] xl3:text-[50px] mobile:text-[40px] pl-10 capitalize'>
              Delivery Information
            </h1>

            <div className='bg-gradient-to-tl from-[#b58126] via-black to-[#b58126] w-[100%] p-10  mobile1:w-[95%] rounded-tr-[40px] rounded-br-[40px] '>
              <div className='grid gap-10'>
                <div className='grid gap-6'>
                  <h1 className='text-white text-[60px] mobile:text-[40px]'>
                    Consignee Details
                  </h1>
                  <div className='grid gap-8'>
                    <div>
                      <input
                        className='w-[70%] mobile2:w-[90%] placeholder:text-white text-[23px] text-white p-2 border-[1px] bg-transparent border-white rounded-lg'
                        placeholder='Email Address'
                        value={email}></input>
                    </div>
                    <div className='flex gap-[2%] mobile2:grid mobile2:gap-8'>
                      <input
                        className='w-[34%] mobile2:w-[90%] placeholder:text-white text-[23px] text-white p-2 border-[1px] bg-transparent border-white rounded-lg'
                        placeholder='First Name'
                        value={firstName}></input>
                      <input
                        className='w-[34%] mobile2:w-[90%] placeholder:text-white text-[23px] text-white p-2 border-[1px] bg-transparent border-white rounded-lg'
                        placeholder='Last Name'
                        value={lastName}></input>
                    </div>
                  </div>
                </div>
                <div className='grid gap-2'>
                  <h1 className='text-white text-[60px] mobile:text-[40px]'>
                    Payment Method
                  </h1>

                  <div className='grid gap-8'>
                    <div className='flex gap-[4%] mobile2:grid mobile2:gap-7'>
                      <button
                        onClick={handleCOD}
                        className={`w-[33%] mobile2:w-[90%] py-10 text-white border-white text-[20px] rounded-xl    ${
                          getCODvalue === true
                            ? ' bg-black bg-opacity-70 border-[4px] border-opacity-100'
                            : 'bg-transparent border  border-opacity-70'
                        }`}>
                        Cash On Delivery
                      </button>
                      <button
                        onClick={handleDebitCard}
                        className={`w-[33%] mobile2:w-[90%] py-10 text-white border-white text-[20px] rounded-xl    ${
                          getDebitValue === true
                            ? ' bg-black bg-opacity-70 border-[4px] border-opacity-100'
                            : 'bg-transparent border  border-opacity-70'
                        }`}>
                        Debit/Credit Card
                      </button>
                    </div>
                    {getDebitValue ? (
                      <div
                        id='PGWHPCCARDContainer2'
                        className='grid gap-7 transition-all'>
                        <div>
                          <input
                            className='w-[70%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] text-[23px] text-white p-2 border-[1px] bg-transparent border-white rounded-lg'
                            placeholder='Name On Card'></input>
                        </div>
                        <div>
                          <input
                            className='w-[70%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] text-[23px] text-white p-2 border-[1px] bg-transparent border-white rounded-lg'
                            placeholder='Card Number'></input>
                        </div>
                        <div className='flex gap-[2%] mobile2:grid mobile2:gap-7'>
                          <input
                            className='w-[34%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] text-[23px] text-white p-2 border-[1px] bg-transparent border-white rounded-lg'
                            placeholder='Expiry Date'></input>
                          <input
                            className='w-[34%] mobile2:w-[90%] placeholder:text-white placeholder:text-[20px] text-[23px] text-white p-2 border-[1px] bg-transparent border-white rounded-lg'
                            placeholder='CVV'></input>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    <div>
                      <button className='uppercase text-white text-[25px] mobile:text-[20px] font-semibold tracking-wider w-[70%] mobile2:w-[90%] py-4 rounded-lg bg-[#68BA01]'
                              onClick={() => {submitDelivery()}}>
                          <a>pay now - pkr {total_amount + shipping_fee}</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid pt-[5%] xl3:pt-[7%] tablet:pt-[7%]  tablet1:pt-0 absolute right-0 tablet1:relative tablet1:left-0 w-[40%] tablet1:w-[80%] mobile:w-[90%] mobile1:w-[95%]'>
            <h1 className='text-black font-semibold text-right tablet1:text-left mr-10 text-[60px] xl3:text-[50px] mobile:text-[40px] tablet1:pl-10  capitalize'>
              order summary
            </h1>
            <div className='w-auto '>
              <table className='bg-gradient-to-tl from-[#b58126] via-black to-[#b58126]  rounded-tl-[35px] rounded-bl-[35px] tablet1:rounded-tl-none tablet1:rounded-tr-[35px] tablet1:rounded-bl-none tablet1:rounded-br-[35px] w-[100%]  mobile1:w-[100%]'>
                {order_summary.map((order_summary, index) => {
                  {
                    if (index === 0) {
                      return (
                        <tr key={index} className=''>
                          <td className='pt-10 pl-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]'>
                            {order_summary}
                          </td>
                          <td className='pt-10 absolute right-0 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12'>
                            {order_summary_values[index]}
                          </td>
                        </tr>
                      );
                    } else if (order_summary === 'total weight:') {
                      return (
                        <tr key={index} className=''>
                          <td className='pt-5 pl-10 pb-0 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]'>
                            {order_summary}
                          </td>
                          <td className='pt-5 absolute right-0 pb-0 text-right font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12'>
                            {order_summary_values[index] + ' g'}
                          </td>
                        </tr>
                      );
                    } else if (order_summary === 'shipping fee:') {
                      return (
                        <tr key={index} className=''>
                          <td className='pt-5 pl-10 pb-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]'>
                            {order_summary}
                          </td>
                          <td className='pt-5 absolute right-0 pb-0 text-right font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12'>
                            {order_summary_values[index]} Rs
                          </td>
                        </tr>
                      );
                    } else if (order_summary === 'total') {
                      return (
                        <tr
                          key={index}
                          className='  border-t-[1px] border-blackOpac'>
                          <td className='py-4 pl-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]'>
                            {order_summary}
                          </td>
                          <td className='py-3 absolute pt-3 right-0 font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12'>
                            {order_summary_values[index] + shipping_fee + ' Rs'}
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr key={index} className=''>
                          <td className='pt-5 pl-10 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px]'>
                            {order_summary}
                          </td>
                          <td className='pt-5 pl-10 absolute right-0 uppercase font-medium text-white text-[20px] mobile1.1:text-[17px] pr-5 tablet1:pr-20 mobile1.1:pr-12'>
                            {order_summary_values[index]}
                          </td>
                        </tr>
                      );
                    }
                  }
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
