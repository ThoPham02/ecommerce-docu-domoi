import { useSelector } from "react-redux";
import { AuthSelector } from "../../app/selector";
import LoginForm from "../components/form/Login/LoginForm";
import PaymentForm from "../components/form/Payment/PaymentForm";

const PaymentPage = () => {
  const userLogin = useSelector(AuthSelector);

  if (!userLogin.name) {
    return <LoginForm />;
  }
  return <PaymentForm />;
};

export default PaymentPage;
