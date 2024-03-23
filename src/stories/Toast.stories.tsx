import { Meta, StoryObj } from "@storybook/react";
import CustomToast, { CustomToastProps } from "../components/toast";
import { PiTrash } from "react-icons/pi";

const meta: Meta<CustomToastProps> = {
  title: "Components/Toast",
  component: CustomToast,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["default", "notification"],
    },
    notificationType: {
      control: {
        type: "select",
      },
      options: ["success", "error", "warning", "info"],
    },

    actionHandler: {
      action: "actionHandler",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NotificationSuccess: Story = {
  args: {
    message: "Message here",
    type: "notification",
    notificationType: "success",
    showIcon: true,
    showAction: true,
    showDivider: true,
    showCloseAction: true,

    swapIcon: <PiTrash fill="#fff" className="w-[24px] h-[24px]" />,
  },
};

export const NotificationError: Story = {
  args: {
    message: "Message here",
    type: "notification",
    notificationType: "error",
    showIcon: true,
    showAction: true,
    showDivider: true,
    showCloseAction: true,

    swapIcon: <PiTrash fill="#fff" className="w-[24px] h-[24px]" />,
  },
};

export const NotificationInfo: Story = {
  args: {
    message: "Message here",
    type: "notification",
    notificationType: "info",
    showIcon: true,
    showAction: true,
    showDivider: true,
    showCloseAction: true,

    swapIcon: <PiTrash fill="#fff" className="w-[24px] h-[24px]" />,
  },
};

export const NotificationWarning: Story = {
  args: {
    message: "Message here",
    type: "notification",
    notificationType: "warning",
    showIcon: true,
    showAction: true,
    showDivider: true,
    showCloseAction: true,

    swapIcon: <PiTrash fill="#fff" className="w-[24px] h-[24px]" />,
  },
};

export const Default: Story = {
  args: {
    message: "Message here",
    type: "default",
    showIcon: true,
    showAction: true,
    showDivider: true,
    showCloseAction: true,

    swapIcon: <PiTrash fill="#fff" className="w-[24px] h-[24px]" />,
  },
};
