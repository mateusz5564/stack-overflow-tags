import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Order } from "../types";

const SortingOrder = ({
  value,
  onChange,
}: {
  value: Order;
  onChange: (event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void;
}) => {
  return (
    <ToggleButtonGroup
      value={value}
      color="primary"
      exclusive
      onChange={onChange}
      aria-label="sorting order"
      size="small"
    >
      <ToggleButton value={Order.desc} aria-label="sort descending">
        <TrendingDownIcon />
      </ToggleButton>
      <ToggleButton value={Order.asc} aria-label="sort ascending">
        <TrendingUpIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SortingOrder;
