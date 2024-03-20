import { Toaster } from "react-hot-toast";
import CustomToast from "./components/toast";

const App = () => {
  return (
    <div>
      <CustomToast message="Message here" type="custom" />
      <Toaster />
    </div>
  );
};

export default App;
