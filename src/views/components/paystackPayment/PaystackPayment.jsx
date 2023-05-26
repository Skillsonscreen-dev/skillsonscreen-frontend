import { useEffect, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import Loader from '../Loader/Loader';
import AxiosCall from '../../../utils/axios';
import Message from '../message/Message';


// interface PaystackPaymentInterface {
//     reference: string
//     email: string
//     amount: number
//     orderId: string
// }

const PaystackPayment = ({reference, email, amount, orderId}) => {
    const [count, setCount] = useState(0)
    const [isVerifying, setIsVerifying] = useState(false);

    const validatePayment = async (paystackReference) => {
      setIsVerifying(true)
      try {
          const res = await AxiosCall({
              method: "POST",
              path: "/student/order/validate/"+reference,
              data: {
                paystackReference: paystackReference.reference
              }
          });

          if (res.status == 1) {
              setIsVerifying(false)
              Message.success("Order validated");
          } else {
              setIsVerifying(false)
              Message.error(res.message)
          }
      } catch (err) {
          setIsVerifying(false)
          Message.error(err?.response.data.message)
      }
    }
    // you can call this function anything
    const handleSuccess = (paystackReference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log("lofty res: ", paystackReference);
      validatePayment(paystackReference)
    };
  
    // you can call this function anything
    const handleClose = () => {
      // implementation for  whatever you want to do when the  dialog closed.
      console.log('closed')
    }

    const config = {
        reference: reference,
        email: email,
        amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        metadata: {
          orderId: orderId,
          custom_fields: []
        },
        publicKey: 'pk_test_10693f3b61dcdb189b33bed2bea1a4147c267913',
    };
    

    const initializePayment = usePaystackPayment(config);

    useEffect(() => {
      initializePayment(handleSuccess, handleClose)
    }, [])


    return ( 
        <button onClick={() => initializePayment(handleSuccess, handleClose)} className="complete-btn checkout-btn">{isVerifying ? <Loader /> : "Complete Purchase"}</button>
     );
}
 
export default PaystackPayment;