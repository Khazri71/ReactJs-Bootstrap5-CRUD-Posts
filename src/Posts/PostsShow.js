import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//SweetAlert2
import Swal from "sweetalert2";

const PostsShow = () => {
  //Variables
  const [posts, setPosts] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);
  //Delete Post By Id
  const deletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Delete This!",
      icon: "warning",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const upPosts = posts.filter((post) => post.id != id);
        setPosts(upPosts);
        Swal.fire("Deleted!", "Post Deleted successfully!", "success");
      }
    });

    /*fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE",
    }).then(() => console.log("Post Deleted successfully!"));*/
  };

  //Get Posts Data From API JSONPlacehoder
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw Error("Cannot Connect To The Server!");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setIsWaiting(false);
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
    <div className="container mt-3">
      {/* Start Posts */}
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
      <h2 className="text-center">Posts</h2>
      <Link to={"/post-add"} className="btn btn-warning text-light  mb-3">
        Add Post
      </Link>
      <table className="table table-hover table-bordered">
        <thead className="text-center">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr key={post.id}>
                <td scope="row">{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link
                    to={"/post-show/" + post.id}
                    className="btn btn-primary"
                  >
                    Info
                  </Link>
                </td>
                <td>
                  <Link
                    to={"/post-edit/" + post.id}
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* End Posts */}
    </div>
  );
};
export default PostsShow;
