import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Icon1 from "./Images/duck.png";
import "./Trending.css";

// import Sonnet from "../../components/Sonnet";

function UncontrolledExample() {
  return (
    <section>
      <div className="container py-5">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Trending">
            {/* <Sonnet /> */}

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Top">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                      </td>
                      <td>Down Market Ducks</td>
                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            {/* <Sonnet /> */}
          </Tab>
          {/* <Tab eventKey="contact" title="Contact" disabled>
        <Sonnet />
      </Tab> */}
        </Tabs>
      </div>
    </section>
  );
}

export default UncontrolledExample;
