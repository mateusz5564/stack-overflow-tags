export const calculateNumberOfPages = (pageSize: number, total: number) => {
  const remainder = total % pageSize;
  const numberOfPages =
    remainder > 0 ? Math.floor(total / pageSize) + 1 : Math.floor(total / pageSize);

  return Math.max(numberOfPages, 1);
}
