import { useSelector } from "react-redux";
import { AuthSelector } from "../../app/selector";
import LoginForm from "../components/form/Login/LoginForm";
import NotificationUi from "../components/ui/Notification/NotificationUi";

const NotificationPage = () => {
  const userLogin = useSelector(AuthSelector);

  if (!userLogin.name) {
    return <LoginForm />;
  }
  return <NotificationUi />;
};

export default NotificationPage;
