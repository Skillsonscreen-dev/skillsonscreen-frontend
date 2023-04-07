import { useEffect, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';

interface PaystackPaymentInterface {
    reference: string
    email: string
    amount: number
    orderId: string
}

const PaystackPayment: React.FC<PaystackPaymentInterface> = ({reference, email, amount, orderId}) => {
    const [count, setCount] = useState(0)


    // you can call this function anything
    const handleSuccess = (reference: any) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log("lofty res: ", reference);
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
        custom_fields: {
          orderId: orderId
        },
        publicKey: 'pk_test_10693f3b61dcdb189b33bed2bea1a4147c267913',
    };
    

    const initializePayment = usePaystackPayment(config);


    return ( 
        <button className="complete-btn checkout-btn" onClick={() => initializePayment(handleSuccess, handleClose)}>Complete Purchase</button>
     );
}
 
export default PaystackPayment;