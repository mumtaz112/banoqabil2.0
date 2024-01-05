import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Propsvalue(props) {
  return (
    <div className='container'>
        <div className='row'>
         <div className='col-md-4'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div> 
            <div className='col-md-4'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div> 
            <div className='col-md-4'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div> 
        </div>
        </div>
  )
}

export default Propsvalue