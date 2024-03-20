import { Meta, StoryObj } from "@storybook/react";
import CustomToast, { CustomToastProps } from "../components/toast";

const meta: Meta<CustomToastProps> = {
  title: "Components/Toast",
  component: CustomToast,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["success", "error", "blank", "custom"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Message here",
    type: "custom",
  },
};
