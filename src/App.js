import { BrowserRouter, Route, Switch } from "react-router-dom";
import TrangChu from "./pages/TrangChu/TrangChu";
import DangKy from "./pages/DangKy/DangKy";
import DangNhap from "./pages/DangNhap/DangNhap";
import "./App.css";
import Header from "./components/Header/Header";
import UseStateDemo from "./pages/Hooks/UseStateDemo/UseStateDemo"
import UseEffectDemo from "./pages/Hooks/UseEffectDemo/UseEffectDemo";

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
                  <TrangChu {...propsRoute} />
                </div>
              );
            }}
          />

          <Route path="/dangky" exact component={DangKy} />
          <Route path="/dangnhap" exact component={DangNhap} />
          <Route path="/usestatedemo" exact component={UseStateDemo} />
          <Route path="/useeffectdemo" exact component={UseEffectDemo} />
          <Route path="/" exact component={TrangChu} />
        
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
