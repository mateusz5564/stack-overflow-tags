import { Pagination } from "@mui/material";

const TagsPagination = ({
  page,
  count,
  onChange,
}: {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}) => {
  return (
    <Pagination
      page={page}
      onChange={onChange}
      count={count}
      size="small"
      color="primary"
      variant="text"
    />
  );
};

export default TagsPagination;
