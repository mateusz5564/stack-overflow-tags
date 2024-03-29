import { Order, SortTags } from "./types";
import { useTag } from "./useTags";
import TagsTable from "./components/TagsTable";
import TagsPagination from "./components/TagsPagination";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import { useState } from "react";
import { calculateNumberOfPages } from "../utils";

const Tags = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const { tagsResponse, error, isLoading } = useTag({
    page: page,
    pageSize: pageSize,
    sort: SortTags.popular,
    order: Order.desc,
  });

  const count = (tagsResponse?.total && calculateNumberOfPages(pageSize, tagsResponse?.total)) ?? 0;
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => setPage(page);

  if (error) {
    return <h2>Error!</h2>;
  }

  return (
    <>
      <h2>Stack Overflow Tags</h2>

      {!tagsResponse?.items && isLoading && (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress />
        </Box>
      )}

      {!tagsResponse?.items && !isLoading && <p>No tags found!</p>}

      {tagsResponse?.items && (
        <>
          <Box my={2} display={"flex"} justifyContent={"right"}>
            <TagsPagination page={page} onChange={handlePageChange} count={count} />
          </Box>
          {isLoading && <LinearProgress />}
          <TagsTable tags={tagsResponse?.items} />
        </>
      )}
    </>
  );
};

export default Tags;
