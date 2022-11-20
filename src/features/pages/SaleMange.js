import { useSelector } from "react-redux";
import { AuthSelector } from "../../app/selector";
import LoginForm from "../components/form/Login/LoginForm";
import SaleManageUi from "../components/ui/SaleManage/SaleManageUi";

const SaleManagePage = () => {
  const userLogin = useSelector(AuthSelector);

  if (!userLogin.name) {
    return <LoginForm />;
  }
  return <SaleManageUi />;
};

export default SaleManagePage;
