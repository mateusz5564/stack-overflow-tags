import { Meta, StoryObj } from "@storybook/react";
import PageSize from "../Tags/components/PageSize";

const meta: Meta<typeof PageSize> = {
  title: "Components/PageSize",
  component: PageSize,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockSetPage = () => {
  console.log("Page changed");
};

const mockSetPageSize = () => {
  console.log("Page changed");
};

export const Default: Story = {
  args: { defaultValue: 20, setPage: mockSetPage, setPageSize: mockSetPageSize },
};
