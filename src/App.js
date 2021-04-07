import { BrowserRouter, Route, Switch } from "react-router-dom";
import TrangChu from "./pages/TrangChu/TrangChu";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Switch>
          <Route
            path="/trangchu"
            exact
            render={(propsRoute) => {
              return (
                <div className="container">
                  <h3>Trang chủ</h3>
                </div>
              );
            }}
          />

          <Route path="/dangky" component={DangKy} />
          <Route path="/dangnhap" component={DangNhap} />
          <Route path="/" component={TrangChu} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
