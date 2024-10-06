import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Album } from "./pages/Album/Album";
import MainPage from "./pages/main_page/MainPage";
import MyBlogPostPage from "./pages/MyBlogPage/MyBlogPage";
import MyBlogPage from "./pages/blog_page/MyBlogPage"
import MyBlogEditPage from "./pages/blog_page/MyBlogEditPage"

import { Quest } from "./pages/Quest/Quest";
interface IPath {
  element: ReactElement;
  path: string;
}

const paths: IPath[] = [
  { element: <MainPage />, path: "tracked" },
  { element: <Quest />, path: "quests" },
  { element: <MyBlogPage />, path: "my-blog" },
  { element: <MyBlogEditPage />, path: "my-blog/edit" },
  { element: <MyBlogPostPage />, path: "collection" },
  { element: <MyBlogPostPage />, path: "ratings" },
  { element: <MyBlogPostPage />, path: "company" },
  { element: <MyBlogPostPage />, path: "blog" },
  { element: <MyBlogPostPage />, path: "contests" },
  { element: <MyBlogPostPage />, path: "albums" },
  { element: <Album />, path: "album" }
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        {paths.map(({ element, path }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
