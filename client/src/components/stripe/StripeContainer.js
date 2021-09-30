import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51JejrXDEcxKa4yKXrkIpeNdOpboxcZ8C2NYz8RNZREHCyhk9tANRjpdFVAQu96v9jqGpEdnMbGF1fLaf96lBAe1500xntxIT0o"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer () {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}