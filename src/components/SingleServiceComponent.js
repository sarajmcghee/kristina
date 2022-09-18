
import { CartState } from "../context/Context";
import {Card, CardImg, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import Rating from "./RatingComponent";


const SingleService = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
      } = CartState();
    
      return (
        <div className="products">
          <Card>
            <CardImg variant="top" src={prod.image} alt={prod.name} />
            <CardBody>
              <CardTitle>{prod.name}</CardTitle>
              <CardSubtitle style={{ paddingBottom: 10 }}>
                <span>₹ {prod.price.split(".")[0]}</span>
                {prod.fastDelivery ? (
                  <div>Fast Delivery</div>
                ) : (
                  <div>4 days delivery</div>
                )}
                <Rating rating={prod.ratings} />
              </CardSubtitle>
              {cart.some((p) => p.id === prod.id) ? (
                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    })
                  }
                  disabled={!prod.inStock}
                >
                  {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                </Button>
              )}
            </CardBody>
          </Card>
        </div>
      );
    };
export default SingleService