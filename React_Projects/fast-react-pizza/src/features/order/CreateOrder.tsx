//https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

import { Form, useActionData, useNavigation } from "react-router-dom";
import { Errorsype, OrderType } from "../../Types";
import { Button } from "../../ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const formErrors = useActionData() as Errorsype;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" className="input grow" required />
        </div>

        {/* sdsa sc  */}

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" className="input w-full" required />
            {formErrors?.phone && <p className="text-red-700 text-xs mt-2 bg-red-100 p-2 rounded-md">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              placeholder="Enter delivery address"
              name="address"
              className="input w-full"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order....." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const cart = JSON.parse(data.cart as string);

  const order: OrderType = {
    customer: String(data.customer),
    phone: String(data.phone),
    address: String(data.address),
    priority: Boolean(data.priority),
    cart: cart,
  };

  const errors = {} as Errorsype;
  if (!isValidPhone(order.phone))
    errors.phone =
      "please give as your correct phone number. We might need it to contact you";

  if (Object.keys(errors).length > 0) return errors;

  //* IF EVERYTHING IS OKAY, CREATE NEW ORDER AND REDIRECT

  // const newOrder = await createOrder(order);

  // return redirect(`/order/${newOrder.id}`);
  return null;
};
export default CreateOrder;

//in
