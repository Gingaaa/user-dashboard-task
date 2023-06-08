import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import layer from "./assets/images/layer.png";
import home from "./assets/images/home (1).png";
import customer from "./assets/images/customer.png";
import cube from "./assets/images/3d-cube.png";
import shop from "./assets/images/shop-bag.png";
import setting from "./assets/images/setting (1).png";
import file from "./assets/images/file.png";
import bell from "./assets/images/bell (1).png";
import checkbox from "./assets/images/checkbox.png";
import checkmark from "./assets/images/checkmark.png";
import down from "./assets/images/down.png";
import search from "./assets/images/search (1).png";
import next from "./assets/images/next.png";
import selfie from "./assets/images/selfie6.jpg";

function App() {
  const [activec, setActivec] = useState({
    dashboard: false,
    customer: true,
    vendor: false,
    good: false,
    setting: false,
    report: false,
  });
  const [data, setData] = useState([]);

  const onActive = (value) => {
    if (value === "dashboard") {
      setActivec((prevState) => ({
        ...prevState,
        dashboard: true,
        customer: false,
        vendor: false,
        good: false,
        setting: false,
        report: false,
      }));
    } else if (value === "customer") {
      setActivec((prevState) => ({
        ...prevState,
        customer: true,
        dashboard: false,
        vendor: false,
        good: false,
        setting: false,
        report: false,
      }));
    } else if (value === "vendor") {
      setActivec((prevState) => ({
        ...prevState,
        vendor: true,
        customer: false,
        dashboard: false,
        good: false,
        setting: false,
        report: false,
      }));
    } else if (value === "good") {
      setActivec((prevState) => ({
        ...prevState,
        good: true,
        customer: false,
        dashboard: false,
        vendor: false,
        setting: false,
        report: false,
      }));
    } else if (value === "setting") {
      setActivec((prevState) => ({
        ...prevState,
        setting: true,
        customer: false,
        dashboard: false,
        vendor: false,
        good: false,
        report: false,
      }));
    } else {
      setActivec((prevState) => ({
        ...prevState,
        report: true,
        setting: false,
        customer: false,
        dashboard: false,
        vendor: false,
        good: false,
      }));
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      const data = response.data.users;
      setData(data);
      console.log(response.data.users[1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const slicedData = data.slice(0, 8);

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <div className="sidebarh">
            <img className="sideimg" src={layer} />
            <h2 className="sidebarht">Fund Flow 360</h2>
          </div>
          <hr className="line" />
          <div className="sidebarl">
            {/* <div className="sidebarli active"> */}
            <div
              onClick={() => onActive("dashboard")}
              className={`sidebarli ${activec.dashboard ? "active" : ""}`}
            >
              <img className="sidebimg" src={home} />
              <h2 className="sidebarlt">Dashboard</h2>
            </div>
            <div
              onClick={() => onActive("customer")}
              className={`sidebarli ${activec.customer ? "active" : ""}`}
            >
              <img className="sidebimg" src={customer} />
              <h2 className="sidebarlt">Customers</h2>
            </div>
            <div
              onClick={() => onActive("vendor")}
              className={`sidebarli ${activec.vendor ? "active" : ""}`}
            >
              <img className="sidebimg" src={cube} />
              <h2 className="sidebarlt">Vendors</h2>
            </div>
            <div
              onClick={() => onActive("good")}
              className={`sidebarli ${activec.good ? "active" : ""}`}
            >
              <img className="sidebimg" src={shop} />
              <h2 className="sidebarlt">Goods/Services</h2>
            </div>
            <div
              onClick={() => onActive("setting")}
              className={`sidebarli ${activec.setting ? "active" : ""}`}
            >
              <img className="sidebimg" src={setting} />
              <h2 className="sidebarlt">Settings</h2>
              <img className="sidebimga" src={down} />
            </div>
            <div
              onClick={() => onActive("report")}
              className={`sidebarli ${activec.report ? "active" : ""}`}
            >
              <img className="sidebimg" src={file} />
              <h2 className="sidebarlt">Reports</h2>
              <img className="sidebimgar" src={down} />
            </div>
          </div>
          <hr className="line" />
        </div>
        <div className="main">
          <div className="mainh">
            <div className="mainhf">
              <h2 className="mainhft">Application</h2>
              <img className="mainimg" src={next} />
              <h2 className="mainhff">Dashboard</h2>
            </div>
            <div className="mainhs">
              <div className="mainhsf">
                <input
                  className="mainhsi"
                  type="text"
                  placeholder="Search..."
                />
                <img className="mainsimg" src={search} />
              </div>
              <img className="mainnimg" src={bell} />
              <img className="mainpimg" src={selfie} />
            </div>
          </div>
          <hr className="linem" />
          <div className="mainb">
            <div className="mainbf">
              <h2 className="mainbfh">Customer List</h2>
              <button className="mainbfb">Add Customer</button>
            </div>
            <div className="mainbs">
              <table className="mainbtab" cellSpacing="0">
                <thead style={{padding:'10px'}} className="mainbth">
                  <tr className="mainbthr">
                    <th>Customer Name</th>
                    <th>GST Number</th>
                    <th>STATUS</th>
                    <th>TOTAL INVOICES</th>
                    <th>TOTAL INVOICES DUE</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="mainbtb">
                  {slicedData.map((item,index)=>(
                    <tr key={index} className="mainbtbr">
                    <td className="mainbrd">
                      <span className="mainbrdf">
                        <div className="mainbrdfi">
                        <img className="mainbimg" src={item.image}/>
                        </div>
                        <div className="mainbrdfc">
                          <h2>{item.firstName} {item.lastName}</h2>
                          <span>{item.email}</span>
                        </div>
                      </span>
                    </td>
                    <td className="mainbrd">{item.bank.cardNumber}</td>
                    <td className="mainbrd">New York</td>
                    <td className="mainbrd">New York</td>
                    <td className="mainbrd">New York</td>
                    <td className="mainbrd">New York</td>
                  </tr>
                  ))}
                  
                </tbody>
              </table>
              {/* <div className="list-head">
                <th>Customer Name</th>
                <th>GST Number</th>
                <th>STATUS</th>
                <th>TOTAL INVOICES</th>
                <th>TOTAL INVOICES DUE</th>
                <th>ACTIONS</th>
              </div>
              <div className="list-body">
                <td>anshu</td>
                <td>anshu</td>
                <td>anshu</td>
                <td>anshu</td>
                <td>anshu</td>
                <td>anshu</td>
              </div> */}
            </div>
            <div className="mainbt"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
