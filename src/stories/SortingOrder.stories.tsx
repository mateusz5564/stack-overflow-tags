import { Meta, StoryObj } from "@storybook/react";
import SortingOrder from "../Tags/components/SortingOrder";
import { Order } from "../Tags/types";
import { useEffect, useState } from "react";

const meta: Meta<typeof SortingOrder> = {
  title: "Components/SortingOrder",
  component: SortingOrder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      options: ["desc", "asc"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: Order.desc },
  render(args) {
    const [value, setValue] = useState(args.value);

    useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return <SortingOrder {...args} value={value} onChange={(event, value) => setValue(value)} />;
  },
};
