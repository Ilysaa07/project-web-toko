
//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';


import '../index.css';
import logo from '../assets/im 4.png';
import cart from '../assets/shopping-cart.png';

import br from '../assets/br.png';

function Product4() {
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

  <div class="yow">
  <img  class="mtr" src={br}></img>
    <div class="container">
      <h1 class="title">BAD RELIGION</h1>
      <hr></hr>
      <div class="no">
        <h1 class="text-decoration-line-through"><s>Rp 249.000</s></h1>
      <h2>Rp 149.000</h2>
      </div>
     
       <div class="deskripsi">    
      <div>
        <li><b>Weight</b></li>
        <li><b>Dimensions</b></li>
        <li><b>Size</b></li>
      </div>
        <div>
          <li>0,3 Kg</li>
          <li>31.0000 × 20.0000 × 2.0000 cm</li>
          <li>S, M, L, XL, XXL</li>
        </div>
       </div>
       <button type="button" class="btn1" onClick={() => location.href = "/posts/create"}><img src={cart} alt="" class="cart"></img></button>
    </div> 
  </div>
  </div>
            </Row>
    );
}

export default Product4;