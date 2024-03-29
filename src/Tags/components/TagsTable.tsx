import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tag } from "../types";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function TagsTable({ tags }: { tags: Tag[] | undefined }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="tags table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tag Name</StyledTableCell>
            <StyledTableCell align="right">Posts Count</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags?.map(tag => (
            <StyledTableRow key={tag.name}>
              <TableCell component="th" scope="row">
                {tag.name}
              </TableCell>
              <TableCell align="right">{tag.count}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
