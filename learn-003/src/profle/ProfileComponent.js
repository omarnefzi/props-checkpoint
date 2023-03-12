
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";




const CardProfile=({name ='user',age='unkown',country,img, handleAge})=> {
  const handleClick=()=>{
    handleAge(age )
  }
 const objStyle={
  color: 'mediumvioletred'
 }



  return (
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>my name is <span style={objStyle}>{name}</span> </Card.Title>
        <Card.Text>
        my age is <span style={objStyle}>{age}</span> <br />
        i live in <span style={objStyle}>{country}</span>
        </Card.Text>
        <Button onClick={handleClick} variant="primary">handle age</Button> <br />
      </Card.Body>
    </Card>



  );
  
  CardProfile.propTypes={
    name:PropTypes.string,
    age: PropTypes.number
  }

}

export default CardProfile
