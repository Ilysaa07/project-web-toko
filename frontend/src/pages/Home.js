
//import component Bootstrap React
import { Card, Container, Row, Col , Form, Button, Alert } from 'react-bootstrap';


import '../index.css';
import logo from '../assets/im 4.png';

function Home() {
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
    <h1 class="content">IMMORTALL_SIDE666</h1>
    <h1 class="content2">WE ARE AVAILABLE</h1>
    <div class="sosmed">
      <img class="imgsosmed"
          src="https://cdn-icons-png.flaticon.com/512/3621/3621435.png" alt="instagram" onclick="redirectFunc()"></img>
      <img class="imgsosmed"
          src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="whatsapp" onclick="redirectFunct()"></img>
    </div>
  </div>
  <div class="copyright">
    <p class="copyright">Copyright © [2023] [Ilyasa Alfaridzi]. All Right Reserved</p>
  </div>
  
            </Row>
    );
}

export default Home;