import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
