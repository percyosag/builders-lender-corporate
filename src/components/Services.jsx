import ListGroup from "react-bootstrap/ListGroup";

export default function Services() {
  return (
    <div className="services" id="services">
      <ListGroup horizontal>
        <ListGroup.Item action href="#">
          <i className="fa-solid fa-sack-dollar"></i> Personal Loan
        </ListGroup.Item>
        <ListGroup.Item action href="#">
          <i className="fa-solid fa-car"></i> Vehicle Loan
        </ListGroup.Item>
        <ListGroup.Item action href="#">
          <i className="fa-solid fa-business-time"></i> Business Loan
        </ListGroup.Item>
        <ListGroup.Item action href="#">
          <i className="fa-solid fa-user-graduate"></i> Education Loan
        </ListGroup.Item>
        <ListGroup.Item action href="#">
          <i className="fa-solid fa-comment-dollar"></i> Payday Loan
        </ListGroup.Item>
        <ListGroup.Item action href="#">
          <i className="fa-regular fa-house"></i> Home Buyer Loan
        </ListGroup.Item>
        <ListGroup.Item action href="#">
          <i className="fa-solid fa-money-bills"></i> Investment Loan
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
