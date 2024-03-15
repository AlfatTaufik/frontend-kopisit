import { useEffect, useState } from "react"
import axios from 'axios'
import './cart.css';
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const [datas, setDatas] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [msg, setMsg] = useState(false);
    const navigate = useNavigate()
    const [token, setToken] = useState('')

    console.log(msg !== 'Get My Cart')

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    if (token === '' || token === null) {
        navigate('/login');
    }

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const cart = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/cart', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(res => {
                    setDatas(res.data.datas)
                    setTotalPrice(res.data.total_price)
                    setMsg(res.data.msg)
                    console.log(res)
                })
                .catch(err => console.log(err))
        }

        cart()
    }, [])

    const checkout = async () => {
        const res = await axios.post('http://127.0.0.1:8000/api/checkout', {}, {
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            setMsg(res.data.msg)
            console.log(res)
        })
            .catch(err => {
                console.log(err)
            })
    }

    const checkoutHandle = (e) => {
        e.preventDefault();
        setIsVisible(false);
        checkout()
        localStorage.setItem('msg', msg)
        navigate('/')
    }

    return (
        <div>
            <div className="table-container">
                <h1>My Cart</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas && datas.length > 0 ? (
                            datas.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                </tr>
                            ))
                        ) : (
                            <tr className="loading-row">
                                <td colSpan="2">
                                    {msg ? (
                                        msg
                                    ) : (
                                        "Loading ..."
                                    )}
                                </td>
                            </tr>
                        )}
                        {/* Total */}
                        <tr>
                            <th>Total</th>
                            <th>{totalPrice && totalPrice > 0 ? (
                                totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
                            ) : (
                                <>
                                    {msg ? (
                                        msg
                                    ) : (
                                        "Loading ..."
                                    )}
                                </>
                            )
                            }</th>
                        </tr>
                    </tbody>
                </table>
                <button className={`btn ${msg !== "Get My Cart" ? `visible` : 'no-visible'}`} onClick={checkoutHandle}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;