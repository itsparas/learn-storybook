import { ReactNode } from "react";
import { Toaster, toast } from "react-hot-toast";

import { RxCross1 } from "react-icons/rx";
import { PiInfoFill } from "react-icons/pi";
import { PiWarningCircleFill } from "react-icons/pi";
import { IoIosWarning } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

export interface CustomToastProps {
  message: string;
  type: "default" | "notification";
  showIcon: boolean;
  showDivider?: boolean;
  showAction?: boolean;
  actionHandler?: () => void;
  showCloseAction?: boolean;
  notificationType: "success" | "error" | "warning" | "info";
  swapIcon?: ReactNode;
}

const notificationStateIcon = {
  success: (
    <IoIosCheckmarkCircle fill="#00A151" className="w-[24px] h-[24px]" />
  ),
  error: <IoIosWarning fill="#F73131" className="w-[24px] h-[24px]" />,
  warning: <PiWarningCircleFill fill="#FFC500" className="w-[24px] h-[24px]" />,
  info: <PiInfoFill fill="#4077FF" className="w-[24px] h-[24px]" />,
};

const CustomToast: React.FC<CustomToastProps> = ({
  message,
  type,
  showIcon,
  showDivider,
  showAction,
  actionHandler,
  showCloseAction,
  notificationType,
  swapIcon,
}) => {
  const showToast = () => {
    toast.custom(
      (t) => (
        <div
          className={`flex items-center w-[343px] gap-[12px] bg-[#282829] px-[12px] py-[16px] rounded-lg ${
            t.visible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transition: "opacity 100ms ease-in-out",
          }}
        >
          <div className="flex items-center flex-grow gap-[8px] text-white text-[16px]">
            {showIcon && (
              <span>
                {type === "notification"
                  ? notificationStateIcon[notificationType]
                  : swapIcon}
              </span>
            )}
            <span>{message}</span>
          </div>
          {showDivider && (
            <div className="w-0 border-r-2 h-full border-[#424242]" />
          )}

          {showAction && (
            <button
              className="h-[32px] p-[4px] bg-[#47B647] text-white rounded-md font-medium"
              onClick={actionHandler}
            >
              Button
            </button>
          )}
          {showCloseAction && (
            <button onClick={() => toast.dismiss(t.id)} type="button" name="actionHandler">
              <RxCross1 className="w-[24px] h-[24px] text-white cursor-pointer" />
            </button>
          )}
        </div>
      ),
      { duration: 1000, position: "bottom-center" }
    );
  };

  return (
    <div>
      <Toaster />
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
};

export default CustomToast;
