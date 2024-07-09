import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main/index";
import Home from "./page/Home/index";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {  
    margin: 0;
    padding: 0;
    font-family: NanumGothic;
    line-height: normal;
    font-style: normal;
    white-space: nowrap;
  }
`;
export default App;
