import { formatCurrency } from "../../utils/helpers";

type OrderItemPropsType = {
  item:{
    quantity:number;
    name:string;
    totalPrice:number
  },
  isLoadingIngredients:boolean
  ingredients:string
}

function OrderItem({ item, isLoadingIngredients, ingredients }:OrderItemPropsType) {
  console.log(isLoadingIngredients,ingredients)
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
