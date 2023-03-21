const About = () => {
  return (
    <div className="container mt-3 mb-4">
      {/* Start About */}
      <h2 className="text-center ">About</h2>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height="500"
              src="https://source.unsplash.com/random/?travel"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Lorem Ipsum</h5>
              <p>
                Some representative placeholder content for the first Lorem
                Ipsum.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height="500"
              src="https://source.unsplash.com/random/?countries"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Lorem Ipsum</h5>
              <p>
                Some representative placeholder content for the second Lorem
                Ipsum.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              height="500"
              src="https://source.unsplash.com/random/?work"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Lorem Ipsum</h5>
              <p>
                Some representative placeholder content for the third Lorem
                Ipsum.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* End About */}
    </div>
  );
};
export default About;
