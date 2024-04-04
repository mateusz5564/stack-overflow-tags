import { Order, SortTags } from "./types";
import { useTag } from "./useTags";
import TagsTable from "./components/TagsTable";
import TagsPagination from "./components/TagsPagination";
import { Box, CircularProgress, LinearProgress, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { calculateNumberOfPages } from "../utils";
import PageSize from "./components/PageSize";
import SortingField from "./components/SortingField";
import SortingOrder from "./components/SortingOrder";

const Tags = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [sortingField, setSortingField] = useState(SortTags.popular);
  const [sortingOrder, setSortingOrder] = useState(Order.desc);
  const { tagsResponse, error, isLoading } = useTag({
    page: page,
    pageSize: pageSize,
    sort: sortingField,
    order: sortingOrder,
  });
  const theme = useTheme();

  const pagesCount =
    (tagsResponse?.total && calculateNumberOfPages(pageSize, tagsResponse?.total)) ?? 0;

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => setPage(page);
  const handleSortingFieldChange = (
    event: React.MouseEvent<HTMLElement>,
    sortingField: SortTags
  ) => {
    if (sortingField !== null) {
      setSortingField(sortingField);

      if (sortingField === SortTags.name) {
        setSortingOrder(Order.asc);
      }
    }
  };
  const handleSortingOrderChange = (event: React.MouseEvent<HTMLElement>, sortingOrder: Order) => {
    if (sortingOrder !== null) {
      setSortingOrder(sortingOrder);
    }
  };

  if (error) {
    return <h2>Error! ({error?.message})</h2>;
  }

  return (
    <>
      <Typography variant="h5" my={3}>
        Stack Overflow Tags
      </Typography>

      {!tagsResponse?.items && isLoading && (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      )}

      {!tagsResponse?.items && !isLoading && <p>No tags found!</p>}

      {tagsResponse?.items && (
        <>
          <Box sx={theme => ({ display: "flex", flexDirection: "column", alignItems: "flex-end" })}>
            <SortingField
              sx={theme => ({ mb: 1 })}
              value={sortingField}
              onChange={handleSortingFieldChange}
            />
            <SortingOrder value={sortingOrder} onChange={handleSortingOrderChange} />
          </Box>
          <Box
            sx={theme => ({
              my: 2,
              display: "flex",
              flexDirection: "column",
              [theme.breakpoints.up(450)]: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            })}
          >
            <PageSize
              sx={{
                my: 2,
                [theme.breakpoints.up(450)]: { my: 0 },
              }}
              defaultValue={pageSize}
              setPageSize={setPageSize}
              setPage={setPage}
            />
            <TagsPagination page={page} onChange={handlePageChange} count={pagesCount} />
          </Box>
          {isLoading && <LinearProgress />}
          <TagsTable tags={tagsResponse?.items} />
        </>
      )}
    </>
  );
};

export default Tags;
