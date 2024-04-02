import { SxProps, TextField } from "@mui/material";
import { useState } from "react";

const PageSize = ({
  defaultValue,
  setPageSize,
  setPage,
  sx,
}: {
  defaultValue: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sx: SxProps;
}) => {
  const [error, setError] = useState("");

  const handleChangeWithValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pageSize = parseInt(event.target.value);

    if (pageSize >= 5 && pageSize <= 100) {
      setPageSize(pageSize);
      setPage(1);
      setError("");
    } else {
      setError("Only 5-100");
    }
  };

  return (
    <TextField
      id="page-size"
      label="Page size"
      size="small"
      sx={{ width: "5.5rem", ...sx }}
      defaultValue={defaultValue}
      onChange={handleChangeWithValidation}
      error={!!error}
      helperText={error ? error : ""}
    />
  );
};

export default PageSize;
