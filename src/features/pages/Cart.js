import { useSelector } from "react-redux";
import { AuthSelector } from "../../app/selector";
import LoginForm from "../components/form/Login/LoginForm";
import CartUi from "../components/ui/Cart/CartUi";

const CartPage = () => {
  const userLogin = useSelector(AuthSelector);

  if (!userLogin.name) {
    return <LoginForm />;
  }
  return <CartUi />;
};

export default CartPage;
