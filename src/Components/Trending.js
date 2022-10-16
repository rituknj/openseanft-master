import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from 'react-bootstrap/Table';

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


            <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>



          </Tab>
          <Tab eventKey="profile" title="Top">
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
