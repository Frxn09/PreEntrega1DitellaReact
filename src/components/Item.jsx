import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({ item }) => (
  <div>
    <Card className="Cards" style={{ width: "240px", height: "470px" }}>
      <Card.Img variant="top" style={{height:250}} src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>${item.price}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button className="buton" style={{marginTop:6, marginRight: 4}}>🔍</Button>
        </Link>
        <Button className="buton" style={{marginTop:6}}>Añadir al carro</Button>
      </Card.Body>
    </Card>
  </div>
);
