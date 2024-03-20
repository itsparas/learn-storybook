import { ToastType, Toaster, toast } from "react-hot-toast";

export interface CustomToastProps {
  message: string;
  type?: ToastType;
}

const CustomToast: React.FC<CustomToastProps> = ({
  message,
  type = "success",
}) => {
  const showToast = () => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast.custom((t) => (
          <div
            className={`bg-white px-6 py-4 shadow-md rounded-full ${
              t.visible ? "animate-enter" : "animate-leave"
            }`}
          >
            Hello TailwindCSS! 👋
          </div>
        ));
    }
  };

  return (
    <div>
      <Toaster />
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
};

export default CustomToast;
