//import hook useState from react
import { useState } from 'react';

//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';

//import axios
import axios from 'axios';

//import hook history dari react router dom
import { useHistory } from "react-router-dom";

import '../../../src/index.css';
import logo from '../../assets/im 4.png';
function CreatePost() {

    //state
    const [nama, setNama] = useState('');
    const [ukuran, setUkuran] = useState('');
    const [jumlah, setJumlah] = useState('');

    //state validation
    const [validation, setValidation] = useState({});

    //history
    const history = useHistory();

    //method "storePost"
    const storePost = async (e) => {
        e.preventDefault();
        
        //send data to server
        await axios.post('http://localhost:3000/api/posts/store', {
            nama: nama,
            ukuran: ukuran,
            jumlah: jumlah
        })
        .then(() => {

            //redirect
            history.push('/posts');

        })
        .catch((error) => {

            //assign validation on state
            setValidation(error.response.data);
        })
        
    };

    return (
        
            <Row>
           
            <div class="background1 animate__animated animate__fadeInDown">
    <div class="heading animate__animated animate__fadeInRight animate__delay-1s">
      <img class="logo" src={logo} alt="logo"></img>
      <ul>
        <a href="/">
          <li>HOME</li>
        </a>
        <a href="/Shop">
          <li>SHOP</li>
        </a>
      </ul>
    </div>
    <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm bg-transparent" style={{ width: '20rem', marginLeft: '40%'}}>
                        <Card.Body>
                        
                            {
                                validation.errors &&
                                    <Alert variant="danger">
                                        <ul class="mt-0 mb-0">
                                            { validation.errors.map((error, index) => (
                                                <li key={index}>{ `${error.param} : ${error.msg}` }</li>
                                            )) }
                                        </ul>
                                    </Alert>
                            }
                            
                            <Form onSubmit={ storePost }>
                                <Form.Group className="mb-2 text-white" controlId="formBasicEmail">
                                    <Form.Label>Nama Produk</Form.Label>
                                    <Form.Control type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan Nama Produk" />
                                </Form.Group>

                                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                                    <Form.Label>Ukuran</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={ukuran} onChange={(e) => setUkuran(e.target.value)} placeholder="Masukkan Ukuran Produk" />
                                </Form.Group>

                                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                                    <Form.Label>Jumlah</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={jumlah} onChange={(e) => setJumlah(e.target.value)} placeholder="Masukkan Jumlah" />
                                </Form.Group>

                                <Button style={{backgroundColor: 'white', color: 'black', width: '18rem'}}  variant="primary" type="submit">
                                    SIMPAN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
  </div>




                
            </Row>
        
    );
}

export default CreatePost;