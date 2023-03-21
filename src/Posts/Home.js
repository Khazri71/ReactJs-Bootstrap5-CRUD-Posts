import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5 mb-4">
      {/* Start Home */}
      <div className="card text-center">
        <h2 className="mt-3">Home</h2>
        <div class="card-body">
          <h5 className="card-title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h5>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummyLorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
          </p>
          <Link to="/posts" class="btn btn-primary">
            Posts
          </Link>
        </div>
        <div class="card-footer text-muted">Lorem Ipsum</div>
      </div>
      {/* End Home */}
    </div>
  );
};
export default Home;
