import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
const Home = () => {
  return (
    <>
      <div className="d-flex gap-3">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
