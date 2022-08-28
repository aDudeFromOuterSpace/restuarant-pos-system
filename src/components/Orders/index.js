import React from "react";
import Order from "../Order"
function Orders(props) {
    let test = [];
    props.foods.map((el) => {
        if(props.order[el.id] > 0){
            test.push(<Order 
                ner={el.foodName} 
                order={props.order[el.id]} 
                url={el.ImgUrl} 
                price={el.price} 
                AddFood={props.AddFood} 
                id={el.id} 
                RemoveFood={props.RemoveFood}/>)
        }
    });
    return <div>{test}
    <p>Total Price : {props.TotalPrice}</p>
    </div>;
}

export default Orders;