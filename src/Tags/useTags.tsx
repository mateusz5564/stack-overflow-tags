import useSWR from "swr";
import { Order, SortTags, TagsResponse, UseTagOptions } from "./types";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useTag = ({
  page = 1,
  pageSize = 20,
  sort = SortTags.popular,
  order = Order.desc,
}: UseTagOptions) => {

  const url = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow&filter=!nNPvSNVZBz`;

  const { data, error, isLoading } = useSWR<TagsResponse>(url, fetcher);

  return {
    tagsResponse: data,
    error,
    isLoading,
  };
};
