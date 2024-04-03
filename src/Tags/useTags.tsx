import useSWR from "swr";
import { Order, SortTags, TagsResponse, UseTagOptions } from "./types";

const fetcher = (url: string) =>
  fetch(url).then(res => {
    if (!res.ok) {
      throw new Error("An error occured while fetching the data");
    }

    return res.json();
  });

export const useTag = ({
  page = 1,
  pageSize = 20,
  sort = SortTags.popular,
  order = Order.desc,
}: UseTagOptions) => {
  const url = `https://api.stackexchange.com/2.3/tags?key=${process.env.REACT_APP_API_KEY}&page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZBz`;

  const { data, error, isLoading } = useSWR<TagsResponse>(url, fetcher, { keepPreviousData: true });

  return {
    tagsResponse: data,
    error,
    isLoading,
  };
};
