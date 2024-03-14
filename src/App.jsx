import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Componenets/Header";
import Footer from "./Componenets/Footer";
import Sidebar from "./Componenets/Sidebar";
import CreatePost from "./Componenets/CreatePost";
import PostList from "./Componenets/PostList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />

          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
