import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from "reactstrap";

import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

export default function CommentForm({ postComment, dishId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = (values) => {
    toggleModal();
    postComment(dishId, values.rating, values.author, values.comment);
  };

  return (
    <div>
      <Button outline onClick={toggleModal}>
        <span className="fa fa-pencil fa-lg"></span>Submit Comment
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Col>
                <Label htmlFor="rating">Rating</Label>
                <Control.select model=".rating" name="rating" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col>
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea rows="6" model=".comment" id="comment" name="comment" className="form-control" />
              </Col>
            </Row>
            <Button type="submit" value="submit" color="primary">
              Submit
            </Button>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}
