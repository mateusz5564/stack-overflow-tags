import { Meta, StoryObj } from "@storybook/react";
import SortingField from "../Tags/components/SortingField";
import { SortTags } from "../Tags/types";
import { useEffect, useState } from "react";

const meta: Meta<typeof SortingField> = {
  title: "Components/SortingField",
  component: SortingField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { options: [SortTags.popular, SortTags.activity, SortTags.name], control: "radio" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: SortTags.popular },
  render: args => {
    const [value, setValue] = useState(args.value);

    useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return <SortingField {...args} value={value} onChange={(event, value) => setValue(value)} />;
  },
};
