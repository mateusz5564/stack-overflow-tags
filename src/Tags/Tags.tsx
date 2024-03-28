import { Order, SortTags } from "./types";
import { useTag } from "./useTags";

const Tags = () => {
  const { tagsResponse } = useTag({
    page: 2,
    pageSize: 15,
    sort: SortTags.popular,
    order: Order.desc,
  });

  return (
    <>
      <h2>list of tags</h2>
      <div>
        {tagsResponse?.items.map(tag => (
          <p>{tag.name}</p>
        ))}
      </div>
    </>
  );
};

export default Tags;
