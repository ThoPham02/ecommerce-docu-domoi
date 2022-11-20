import { useSelector } from "react-redux";
import { AuthSelector } from "../../app/selector";
import LoginForm from "../components/form/Login/LoginForm";
import OrderUi from "../components/ui/Order/OrderUi";

const OrderPage = () => {
  const userLogin = useSelector(AuthSelector);

  if (!userLogin.name) {
    return <LoginForm />;
  }
  return <OrderUi />;
};

export default OrderPage;
