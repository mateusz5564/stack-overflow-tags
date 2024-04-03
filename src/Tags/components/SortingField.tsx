import { ToggleButtonGroup, ToggleButton, SxProps } from "@mui/material";
import { SortTags } from "../types";

const SortingField = ({
  value,
  onChange,
  sx,
}: {
  value: SortTags;
  onChange: (event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void;
  sx?: SxProps;
}) => {
  return (
    <ToggleButtonGroup
      sx={sx}
      color="primary"
      value={value}
      exclusive
      onChange={onChange}
      aria-label="Sort field"
      size="small"
    >
      <ToggleButton value={SortTags.popular}>Popular</ToggleButton>
      <ToggleButton value={SortTags.activity}>Activity</ToggleButton>
      <ToggleButton value={SortTags.name}>Name</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SortingField;
