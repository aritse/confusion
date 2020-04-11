import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import DishDetail from "../DishDetail/DishDetail";

export default function Menu(props) {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => setSelectedDish(dish);
  const renderDish = (dish) => (dish ? <DishDetail dish={dish}></DishDetail> : <div></div>);

  const menu = props.dishes.map((dish) => (
    <div className="col-12 col-md-5 m-1">
      <Card key={dish.id} onClick={() => onDishSelect(dish)}>
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
      <div>{renderDish(selectedDish)}</div>
    </div>
  );
}
