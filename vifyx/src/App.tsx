import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import MyBlogPage from "./pages/MyBlogPage/MyBlogPage";
import CreateBlogPage from "./pages/CreateBlogPage/CreateBlogPage";
import EditorContextProvider from "./pages/CreateBlogPage/Editor/EditorContextProvider";

function App() {
  return (
    <EditorContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="tracked" element={<MainPage />} />
          <Route path="my-blog" element={<MyBlogPage />} />
          <Route path="collection" element={<MyBlogPage />} />
          <Route path="company" element={<MyBlogPage />} />
          <Route path="ratings" element={<MyBlogPage />} />
          <Route path="create-blog" element={<CreateBlogPage />} />
        </Route>
      </Routes>
    </EditorContextProvider>
  );
}

export default App;
