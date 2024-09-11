
import Client from "../components/Clients";
import Project from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
        <div className="d-flex gap-3 mb-4">
            <AddClientModal />
            <AddProjectModal />
        </div>
        <Project />
        <hr />
        <Client />
    </>
  )
}
