
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to={"/new"}>
        <button>Create New Listing</button>
      </Link>
      <Card></Card>
    </div>
  );
}
