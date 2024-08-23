//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';

//import axios
import axios from 'axios';

import '../../../src/index.css';

import logo from '../../assets/im 4.png';

function PostIndex() {

    //define state
    const [posts, setPosts] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        fectData();

    }, []);

    //function "fetchData"
    const fectData = async () => {
        //fetching
        const response = await axios.get('http://localhost:3000/api/posts');
        //get response data
        const data = await response.data.data;

        //assign response data to state "posts"
        setPosts(data);
    }

//function "deletePost"
const deletePost = async (id) => {

    //sending
    await axios.delete(`http://localhost:3000/api/posts/delete/${id}`);

    //panggil function "fetchData"
    fectData();
}

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
                    <Card className="border-0 rounded shadow-sm bg-transparent" style={{width: '60rem', marginLeft: '16%'}}>
                        <Card.Body>
                            <Button as={Link} to="../Shop" variant="success" className="mb-3 bg-white text-black">TAMBAH PESANAN</Button>
                            <Table striped bordered hover className="mb-1 text-white">
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>NAMA PRODUK</th>
                                        <th>UKURAN</th>
                                        <th>JUMLAH</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { posts.map((post, index) => (
    <tr className='text-white' key={ post.id }>
        <td>{ index + 1 }</td>
        <td>{ post.nama }</td>
        <td>{ post.ukuran }</td>
        <td>{ post.jumlah }</td>
        <td className="text-center">
        	<Button as={Link} to={`/posts/edit/${post.id}`} variant="primary" size="sm" className="me-2">GANTI PESANAN</Button>
        	<Button onClick={() => deletePost(post.id)} variant="danger" size="sm">HAPUS PESANAN</Button>
        </td>
    </tr>
)) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
  </div>
  <div class="copyright">
    <p class="copyright">Copyright © [2023] [Ilyasa Alfaridzi]. All Right Reserved</p>
  </div>
                
            </Row>
    );
}

export default PostIndex;