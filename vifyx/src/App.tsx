import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import { Album } from "./pages/Album/Album";
import MainPage from "./pages/MainPage/MainPage";
import MyBlogPage from "./pages/MyBlogPage/MyBlogPage";
import { Quest } from "./pages/Quest/Quest";
interface IPath {
  element: ReactElement;
  path: string;
}

const paths: IPath[] = [
  { element: <MainPage />, path: "tracked" },
  { element: <Quest />, path: "quest" },
  { element: <MyBlogPage />, path: "my-blog" },
  { element: <MyBlogPage />, path: "collection" },
  { element: <MyBlogPage />, path: "ratings" },
  { element: <MyBlogPage />, path: "company" },
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
