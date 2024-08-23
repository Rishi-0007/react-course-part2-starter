import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page) =>
          page.map((posts) => (
            <li key={posts.id} className="list-group-item">
              {posts.title}
            </li>
          ))
        )}
      </ul>
      <button
        className="btn btn-primary me-1 my-3"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage || pageSize === data?.pageParams.length}
      >
        {isFetchingNextPage ? "Lodaing.." : "Load more"}
      </button>
    </>
  );
};

export default PostList;
