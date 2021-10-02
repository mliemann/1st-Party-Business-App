import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import './PaymentForm.css'
// import CartContext from '../CartContext';


const CARD_OPTIONS = {
    iconStyle: "solid",
    style : {
        base: {
            iconColor: "white",
            color:"white",
            fontWeight: 900,
            fontFamily: "Ubuntu, sans-serif",
            fontSize: "20px",
            textTransform: "lowercase",
            fontSmoothing: "antialiased",
        },
        invalid: {
            iconColor: "red",
            color: "red"
        }
    }
}


// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1099,
//   currency: 'usd',
//   payment_method_types: ['card'],
//   receipt_email: '',
// });

export default function PaymentForm () {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [total, setTotal] = useState(parseFloat(localStorage.getItem("total")))

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod ({
            type:"card",
            card: elements.getElement(CardElement)
        })
  

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post('/api/payment', {
                amount: total * 100,
                id
            })

            if(response.data.success) {
                console.log("successful payment")
                setSuccess(true)
            }
        } catch (error) {
            console.log(error.message)
        }
    } else {
        console.log("error", )
    }




}

    return (
        <div id="checkoutPage">
            {!success ? 
            <form onSubmit={handleSubmit} id="checkoutForm">
                <div>
                    <h1 id="totalToPay">total: $ {total} </h1>
                </div>

                <div id="customerInfo">
                    <input 
                    type="text" 
                    class="field" 
                    id="checkoutInfo" 
                    placeholder="first name">
                    </input>
                    <input 
                    type="text" 
                    class="field" 
                    id="checkoutInfo" 
                    placeholder="last name">
                    </input>
              
                
            
                    <input 
                    type="email" 
                    class="field" 
                    id="checkoutInfo" 
                    placeholder="email">
                    </input>
                </div>
                <fieldset className="FormGroupPay">
                    <div className="FormRowPay">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <button id="buttonPay">pay</button>
            </form>
            : 
            <div>
                <h2 className="successful" id="successPayment">enjoy your meal!</h2>
                <h4 className="successful" id="preparingOrder">preparing order</h4>
                <i className="successful fas fa-pepper-hot" id="preparingIcon"></i>
            <div id="dottie">
                <div className="loadingDots"></div>
                <div className="loadingDots"></div>
                <div className="loadingDots"></div>
                <div className="loadingDots"></div>
                <div className="loadingDots"></div>
            </div>
                <h4 className="successful" id="orderReady">your order should be ready in 15-20 minutes</h4>

            </div>
            }
        </div>
    )
}