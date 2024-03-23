import { Toaster } from "react-hot-toast";
import CustomToast from "./components/toast";

const App = () => {
  return (
    <div>
      <CustomToast
        message="Message here"
        type="notification"
        showIcon
        showAction
        showCloseAction
        showDivider
        notificationType="success"
      />
      <Toaster />
    </div>
  );
};

export default App;
