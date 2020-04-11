import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default function DishDetail({ dish }) {
  function renderComments(comments) {
    if (comments.length < 1) {
      return <div></div>;
    } else {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => (
              <li>
                <p>{comment.comment}</p>
                <p>
                  --{comment.author}, {comment.date.split("T")[0]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1">{renderComments(dish.comments)}</div>
    </div>
  );
}
