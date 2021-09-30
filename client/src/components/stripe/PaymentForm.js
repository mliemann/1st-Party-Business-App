import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import './PaymentForm.css'

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
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm () {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod ({
            type:"card",
            card: elements.getElement(CardElement)
        })
  

    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post('http://localhost:3000/checkout', {
                amount: 1000,
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
                    <h1 id="totalToPay">total is: </h1>
                </div>
                <fieldset className="FormGroupPay">
                    <div className="FormRowPay">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <button id="buttonPay">Pay</button>
            </form>
            : 
            <div>
                <h2>Enjoy your meal</h2>
            </div>
            }
        </div>
    )
}