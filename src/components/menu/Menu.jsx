import React, { useEffect, useState } from 'react'
import { menu } from '../../globalDataAssets'
import "./menu.css"
import axios from 'axios'

const Menu = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        const product = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/products', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(res => {
                    setDatas(res.data.data)
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        product()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target.closest('form');
        const id = form.querySelector('input[type="hidden"]').defaultValue;

        console.log(id);

        const cart = async () => {
            const res = await axios.post(`http://127.0.0.1:8000/api/add-cart/${id}`, {
                product_count: 1
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                console.log(res)
            })
                .catch(err => {
                    console.log(err)
                })
        }

        cart()
    }

    return (
        <section className="menu" id="menu">
            <h2 className="section__title" data-title='Menu Tersedia.'>Pilih PesananMu.</h2>

            <div className="menu__grid container grid">
                {datas.map(({ name, description, image, price, id }, index) => {
                    return (
                        <form action="" method='POST' onClick={handleSubmit}>
                            <input type="hidden" name="" defaultValue={id} />
                            <div className="menu__item grid" key={index}>
                                <div className="menu__img-wrapper">
                                    <img src={`http://127.0.0.1:8000/storage/images/${image}`} alt="" className="menu__img" />
                                </div>
                                <div className="menu__data">
                                    <div>
                                        <h3 className="menu__title">{name}</h3>
                                        <p className="menu__description">{description}</p>
                                    </div>

                                    <span className="menu__price">Rp {price.toLocaleString('id-ID', { type: 'currency', currency: 'IDR' })}</span>
                                </div>
                            </div>
                        </form>
                    )
                })}
            </div>
        </section>
    )
}

export default Menu