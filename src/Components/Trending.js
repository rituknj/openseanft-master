import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Icon1 from "./Images/duck.png";
import "./Trending.css";

function UncontrolledExample() {
  return (
    <section>
      <div className="container-fluid py-5">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3 uncontrolled"
        >
          <Tab eventKey="home" title="Trending">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>COLLECTION</th>
                      <th></th>

                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

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
                      <th>COLLECTION</th>
                      <th>First Name</th>

                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

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
                      <th>COLLECTION</th>
                      <th>First Name</th>

                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

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
                      <th>COLLECTION</th>
                      <th>First Name</th>

                      <th>FLOOR PRICE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img src={Icon1} alt="" className="icons" />
                        <p className="down-1">Down Market Ducks</p>
                      </td>

                      <td>0.04ETH</td>
                      <td>225ETH</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default UncontrolledExample;
