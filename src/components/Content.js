import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Container, Modal, Button, Spinner } from "react-bootstrap";

const contacts = Array.from({ length: 3 }).map((_, i) => [require(`../static/c${i+1}.png`)]);
const tels = ['tel:022706400', 'tel:022706400', 'tel:1672']
const sponsors = Array.from({ length: 6 }).map((_, i) => [require(`../static/${i+1}.png`)]);
const sites = [
  'https://www.mof.go.th/th/home',
  'http://www.fpo.go.th/',
  'https://www.cgd.go.th/',
  'https://www.newcb.ktb.co.th/',
  'https://www.mots.go.th/',
  'https://thai.tourismthailand.org/'
]

function Content(props) {

  const { duration, detail, condition } = props.data;
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const secondsPassed = useRef(0);
  const timeLeft = useRef(10);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date()
      secondsPassed.current = secondsPassed.current + 1;
      setTime(date.toLocaleTimeString());
      if (timeLeft.current - secondsPassed.current <= 0) {
        timeLeft.current = 10;
        setOpen(false);
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [time]);

  return (
    <>
      <Modal show={open} onHide={() => setOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>โปรดรอคิว</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <p>คุณเป็นคิวที่ {timeLeft.current - Math.floor(secondsPassed.current)}</p><br/>
          <p>เมื่อถึงคิวระบบจะพาท่านไปยังหน้าลงทะเบียน</p>
          <br/>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setOpen(false)}>
            ยกเลิก
          </Button>
        </Modal.Footer>
      </Modal>
      <Container fluid>
        {(duration != null) && (duration.trim().length > 0) && (
          <div className='content-register'>
            <p className='text-center font-weight-bold'>ตั้งแต่วันที่</p>
            <h1 className='text-center font-weight-bold text-danger' dangerouslySetInnerHTML={{ __html: duration }}>
            </h1>
          </div>
        )}
        <div className='text-center'>
          <button className='register-btn' onClick={() => setOpen(true)}>
            {'ลงทะเบียน เฟส 2'}
            <br />
            {'ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.'}
            <br />
            {'(จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)'}
          </button>
          <hr className='btn-divider' />
        </div>
      </Container>
      <Container className='main-content-container'>
        <h2 className='text-left font-weight-bold text-danger'>
          {'มาตรการส่งเสริมการบริโภค'}
          <br />
          {'ในประเทศ "ชิมช้อปใช้"'}
        </h2>
        <p className='text-left' dangerouslySetInnerHTML={{ __html: detail ? detail : '' }} />
        {(condition != null) && (condition.trim().length > 0) && (
          <>
            <p className='text-left font-weight-bold'>เงื่อนไขการเข้าร่วมมาตรการ</p>
            <p className='text-left' dangerouslySetInnerHTML={{ __html: condition }} />
          </>
        )}
      </Container>
      <Container className='content-container'>
        <Row>
          {contacts.map((c, i) => (
            <Col key={'con' + i} md={4} sm={12} className='text-center'>
              <a href={tels[i]} className='text-center'>
                <img className='contact-img' src={c} />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className='content-container'>
        <Row>
          {sponsors.map((s, i) => (
            <Col key={'spon' + i} md={2} sm={4} xs={4} className='text-center'>
              <a href={sites[i]} className='text-center'>
                <img className='spon-img' src={s} />
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Content;
