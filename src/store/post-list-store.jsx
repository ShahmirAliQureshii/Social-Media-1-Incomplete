import { createContext, useReducer } from "react";

// Post List Create Context
export const PostList = createContext({
  postList: [],
  createPost: () => {},
  deletePost: () => {},
});

// Post List Reducer Function For Use Reducer
const postListReducer = (currPostList, action) => {
  return currPostList;
};

// Post List Provider Component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going To Mumbai',
        body: 'Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
        reactions: 2,
        userId: "user-9",
        tags: ['vacation','Mumbai','Enjoying'],
    },
    {
        id: '2',
        title: 'Pass Ho gaye bhai',
        body: '4 saal ki masti keh baad bhi hogaye hein pass. Hard to believe',
        reactions: 15,
        userId: "user-13",
        tags: ['graduation','unbelievable'],
    },
];

export default PostListProvider;
