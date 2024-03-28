export interface TagsResponse {
  items: Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
  page: number;
  page_size: number;
  total: number;
}

export interface Tag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
  collectives?: Collectives[];
}

export interface Collectives {
  tags: string[];
  external_links: ExternalLink[];
  description: string;
  link: string;
  name: string;
  slug: string;
}

export interface ExternalLink {
  type: string;
  link: string;
}

export enum SortTags {
  popular = "popular",
  activity = "activity",
  name = "name",
}

export enum Order {
  desc = "desc",
  asc = "asc",
}

export interface UseTagOptions {
  page: number;
  pageSize: number;
  sort: SortTags;
  order: Order;
}
