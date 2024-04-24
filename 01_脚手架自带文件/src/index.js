import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// React.StrictMode 检查项目中代码是否符合当前react的规范 有些不被推荐的api如果使用会提示
reportWebVitals();
