import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import car from '../../img/img_car.png'
import './ContentHome.css'
export const ContentHome = () => {
    return (
        <div>
            <Container className='container-content'>
                <Row>
                    <Col md={6}>
                        <div className='txt'>

                            <h3 className='txt-title'>
                                Sewa & Rental Mobil Terbaik di kawasan Malang
                            </h3>

                            <p className='txt-content'>
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div>
                            <img alt='' src={car} className='img-car' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
