import { Button } from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

type ItemType = {
  pizzaId:number;
  name:string;
  quantity:number;
  totalPrice:number
}

type CartItemType  ={
  item:ItemType
}

function CartItem({ item }:CartItemType) {
  const {  name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
         <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
