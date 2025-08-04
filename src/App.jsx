import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import { useState } from "react";
import PostListProvider from "./store/post-list-store.jsx";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  return (
    <PostListProvider>
      <div className="flex">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="w-full">
          <Header />
          {selectedTab === "Home" ? <CreatePost /> : <PostList />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
