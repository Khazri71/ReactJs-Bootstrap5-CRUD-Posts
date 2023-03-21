import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//SweetAlert2
import Swal from "sweetalert2";
const PostShow = () => {
  //Parameter Id From URL
  const { id } = useParams();

  //Variables
  const [post, setPost] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);

  //Get Post Data From API JSONPlacehoder By Id
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        if (!response.ok) {
          throw Error("Cannot Connect To The Server!");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setIsWaiting(false);
        console.log(post);
      })
      .catch((er) => {
        setIsWaiting(false);
        setTimeout(() => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: er.message,
            showCofirmButton: true,
            confirmButtonText: "Ok",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            showCloseButton: true,
          });
        }, 1000);
      });
  }, []);

  return (
    <div className="container text-center mt-3 mb-4">
      {/* Start Card More Info About Post */}
      {isWaiting && (
        <div class="loading-overlay">
          <main>
            <div class="snake-loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </main>
        </div>
      )}
      <h2 className="mb-3">Post - {id}</h2>
      {post && (
        <div className="card">
          <img
            height={300}
            src="https://source.unsplash.com/random/?notes"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-muted"> UserID : {post.userId}</h5>
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text">{post.body}</p>
            <Link to="/posts" className="btn btn-primary">
              Back
            </Link>
          </div>
        </div>
      )}
      {/* End Card More Info About Post */}
    </div>
  );
};
export default PostShow;
