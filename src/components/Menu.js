import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export default function Menu(props) {
  const menu = props.dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card key={dish.id} onClick={() => props.onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle className="bold">{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{menu} </div>
    </div>
  );
}