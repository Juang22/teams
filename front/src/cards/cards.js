import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardPlayers = ({title,text,btn}) => {
  console.log(title,text,btn)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.elseptimoarte.net%2Fforo%2Findex.php%3Ftopic%3D19981.0&psig=AOvVaw38FXv8Gjlaq3EJ1GXPe8YZ&ust=1665608280510000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPCds8GI2foCFQAAAAAdAAAAABAK" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">{btn}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPlayers;