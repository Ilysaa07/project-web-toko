
//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';


import '../index.css';
import logo from '../assets/im 4.png';
import cart from '../assets/shopping-cart.png';

import mtrhd from '../assets/mtrhd.png';
import acdc from '../assets/acdc.png';
import mistfits from '../assets/mistfits.png';
import br from '../assets/br.png';
import rancid from '../assets/rancid.png';
import rolling from '../assets/rolling.png';
import kiss from '../assets/kiss.png';
import rhcp from '../assets/rhcp.png';

function Shop() {

    return (
            <Row>
            <div class="background1 animate__animated animate__fadeInDown">
      <div
        class="heading animate__animated animate__fadeInRight animate__delay-1s"
      >
        <img class="logo" src={logo} alt="logo" />
        <ul>
          <a href="/">
            <li>HOME</li>
          </a>
          <a href="/Shop">
            <li>SHOP</li>
          </a>
        </ul>
      </div>
      <h1
        class="content animate__animated animate__flash animate__infinite animate__slow 1s">
        BEST SELLER!
      </h1>
      <div class="container-product">
        <div class="product">
          <div class="content-product">
            <img class="baju" src={mtrhd} alt="" />
            <p class="pc">MOTORHEAD</p>
            <p class="ppc">UNOFFICIAL T-SHIRT BY IMMORTAL_SIDE</p>
            <button
              class="b1"
              onClick={() => location.href = "./Product"}
            >
              <img class="cart" src={cart} />
            </button>
          </div>
        </div>
        <div class="product">
          <div class="content-product">
            <img class="baju" src={acdc} alt="" />
            <p class="pc">AC DC</p>
            <p class="ppc">UNOFFICIAL T-SHIRT BY IMMORTAL_SIDE</p>
            <button
              class="b1"
              onClick={() => location.href = "./Product2"}
            >
              <img class="cart" src={cart} />
            </button>
          </div>
        </div>
        <div class="product">
          <div class="content-product">
            <img class="baju" src={mistfits} alt="" />
            <p class="pc">MISTFISTS</p>
            <p class="ppc">UNOFFICIAL T-SHIRT BY IMMORTAL_SIDE</p>
            <button
              class="b1"
              onClick={() => location.href = "./Product3"}
            >
              <img class="cart" src={cart}/>
            </button>
          </div>
        </div>
        <div class="product">
          <div class="content-product">
            <img class="baju" src={br} alt="" />
            <p class="pc">BAD RELIGION</p>
            <p class="ppc">UNOFFICIAL T-SHIRT BY IMMORTAL_SIDE</p>
            <button
              class="b1"
              onClick={() => location.href = "./Product4"}
            >
              <img class="cart" src={cart} />
            </button>
          </div>
        </div>
      </div>
      <div class="container-product">
        <div class="product">
          <div class="content-product">
            <img class="baju" src={rancid} alt="" />
            <p class="pc">RANCID</p>
            <p class="ppc">UNOFFICIAL T-SHIRT BY IMMORTAL_SIDE</p>
            <button
              class="b1"
              onClick={() => location.href = "./Product5"}
            >
              <img class="cart" src={cart} />
            </button>
          </div>
        </div>
        <div class="product">
          <div class="content-product">
            <img class="baju" src={rolling} alt="" />
            <p class="pc">ROLLING STONES</p>
            <p class="ppc">UNOFFICIAL T-SHIRT BY IMMORTAL_SIDE</p>
            <button
              class="b1"
              onClick={() => location.href = "./Product6"}
            >
              <img class="cart" src={cart} />
            </button>
          </div>
        </div>
        <div class="product">
          <div class="content-product">
            <img class="baju" src={kiss} alt="" />
            <p class="pc">KISS</p>
            <p class="ppc">UNOFFICIAL T-SHIRT BY IMMORTAL_SIDE</p>
            <button
              class="b1"
              onClick={() => location.href = "./Product7"}
            >
              <img class="cart" src={cart} />
            </button>
          </div>
        </div>
        <div class="product">
          <div class="content-product">
            <img class="baju" src={rhcp} alt="" />
            <p class="pc">RHCP</p>
            <p class="ppc">UNOFFICIAL T-SHIRT BY IMMORTAL_SIDE</p>
            <button
              class="b1"
              onClick={() => location.href = "./Product8"}
            >
              <img class="cart" src={cart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  
            </Row>
    );
}

export default Shop;