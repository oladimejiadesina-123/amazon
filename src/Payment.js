import React, {useState, useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'

function Payment() {
    const [ {basket, user}, dispatch ] = useStateValue()
    const history = useHistory()

    const stripe = useStripe()
    const element = useElements()
    const [error, setError] = useState(null)
    const [disable, setDisable] = useState(true)
    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState("")
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios ({
                method: "post",
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("The secret is >>>", clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
            .collection('user')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })


            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace('/orders')
        })
    }
    const handleChange = event => {
        setDisable(event.empty);
        setError(event.error ? event.error.message : "");

    }
    return (
        <div className="payment">
           <div className="payment__container">
               <h1>Checkout{<Link to="/checkout">({basket?.length} items)</Link>}</h1>
            {/* payment section-delivery address */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles</p>
                </div>

            </div>

            {/* payment section-review items */}

            <div className="payment__section">
                <div className="payment__title">
                        <h3>Review items and delivery</h3>
                </div>
                <div className="payment__items">
                        {basket.map(item => ( 
                            <CheckoutProduct
                            id = {item.id}
                            title= {item.title}
                            image = {item.image}
                            rating = {item.rating} 
                            
                            />
    ))}
                </div>
                </div>


            {/* payment section-payment methods */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    {/* Stripe */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                            <CurrencyFormat
                        renderText={(value) => (
                
                                <h3>
                                Order Total: {value}
                                </h3>   
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)} // Part of the homework
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                        />
                                        <button disabled={ processing || 
                                        disable ||
                                        succeeded }>
                                                 <span>{ processing ? <p>Processing</p>:
                                                 "Buy now" }</span>
                                             </button>
                                      </div>
                                      {/* { error} */} 

                                      {error && <div>{error}</div> }

                        </form>


                </div>
                </div>



           </div>
        </div>
    )
}

export default Payment
