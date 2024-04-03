import { Meta, StoryObj } from "@storybook/react";
import TagsPagination from "../Tags/components/TagsPagination";
import { useEffect, useState } from "react";

const meta: Meta<typeof TagsPagination> = {
  title: "Components/TagsPagination",
  component: TagsPagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 40,
    page: 2,
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.page);

    useEffect(() => {
      setCurrentPage(args.page);
    }, [args.page]);

    return (
      <TagsPagination
        {...args}
        page={currentPage}
        onChange={(event, newPage) => setCurrentPage(newPage)}
      />
    );
  },
};
