    import React from "react";
    import "./Subtotal.css";
    import { useStateValue } from "./StateProvider";

    function Subtotal() {
    const [{ basket }] = useStateValue();

    // Calculate the subtotal of the items in the basket
    const subtotal = basket.reduce((total, item) => total + item.price, 0);

    // Format the subtotal as a currency string
    const subtotalString = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(subtotal);

    return (
        <div className="subtotal">
        <p>
            Subtotal ({basket.length} items): <strong>{subtotalString}</strong>
        </p>
        <small className="subtotal__gift">
            <input type="checkout" /> This order contains a gift
        </small>
        <button>Proceed to Checkout</button>
        </div>
    );
    }

    export default Subtotal;
