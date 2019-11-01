import React from 'react';
import { Row, Col, Container } from "react-bootstrap";

import footerLogo from '../static/footer.png'

const newNavDesc = [
  {
    "label": "ลงทะเบียนเข้าร่วมมาตรการ",
    "href": "https://regist.ชิมช้อปใช้.com/Register/"
  },
  {
    "label": "ขั้นตอนการเข้าร่วมทั้งหมด",
    "href": "https://www2.ชิมช้อปใช้.com/howto-register"
  },
  {
    "label": "รายชื่อร้านค้าที่เข้าร่วมรายการ",
    "href": "https://www2.ชิมช้อปใช้.com/thung-ngern-shop-province"
  }
]
const footerDesc = [
  {
    'title': 'ข้อมูลลงทะเบียนประชาชน',
    'desc': 'การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน” ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144'
  },
  {
    'title': 'ข้อมูลลงทะเบียนผู้ประกอบการ',
    'desc': 'เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ ติดต่อ โทร.0 2270 6400 กด 7'
  },
  {
    'title': 'ข้อมูลเที่ยวชิมช้อปใช้',
    'desc': 'ติดต่อ ททท. โทร 1672'
  }
]

function Footer(props) {
  // const { } = props;
  return (
    <Container className='footer-container' fluid>
      <Row className='all-footer' style={{ margin: '0 auto' }}>
        <Col md={3} sm={12} xs={12}>
          <a href='#'>
            <img src={footerLogo} style={{ width: '108px' }} />
          </a>
        </Col>
        {footerDesc.map((d, i) => (
          <Col key={'co'+i} md={3} sm={12} xs={12} style={{ padding: '0 15px', marginTop: '30px' }}>
            <p style={{ color: 'red' }}>{d['title']}</p>
            <p>{d['desc']}</p>
          </Col>
        ))}
      </Row>
      <div className='copyright-footer'>
        <Row className='all-copy' style={{ margin: '0 auto' }}>
          <Col className='footer-text' md={3} sm={12} xs={12} style={{ fontWeight: 'bold' }}>
            {`Copyright © 2003-${new Date().getFullYear()}`}
          </Col>
          {newNavDesc.map((d, i) => (
            <Col className='footer-text' key={'f'+i} md={3} sm={12} xs={12} style={{ fontWeight: 'bold' }}>
              <a href={d['href']}>{d['label']}</a>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Footer;
