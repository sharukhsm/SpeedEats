import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function FoodItem({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");

  //   React Bootstrap Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>{food.name}</h1>
      <img
        onClick={handleShow} //onClick image popup(React Bootstrap Modal)
        src={food.image}
        alt=""
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {food.variants.map((variant) => {
              return <option value={variant}>{variant}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-10 w-100">
          <h1 className="mt-3">
            Price : ${food.prices[0][variant] * quantity}
          </h1>
        </div>

        <div className="m-10 w-100">
          <button className="btn mt-2">ADD TO CART</button>
        </div>
      </div>

      {/* Popup when you chick the food Image. This code is from React Bootstrap Modal*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={food.image}
            className="img-fluid"
            style={{ height: "400px" }}
            alt=""
          />
          <p>{food.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FoodItem;
