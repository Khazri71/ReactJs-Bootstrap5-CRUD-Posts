import { useEffect, useState } from "react";
//SweetAlert2
import Swal from "sweetalert2";

const PostsSearch = () => {
  //Variables
  const [searchValue, setSearchValue] = useState("");

  const [posts, setPosts] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);
  console.log(posts);

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
    <div className="container  mt-5">
      {/* Start Search */}
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
      <form class="d-flex col-6 mx-auto">
        <input
          className="form-control me-2"
          type="search"
          placeholder=" Search Post"
          aria-label=" Search Post"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>

      {posts &&
        posts
          .filter((post) => {
            if (searchValue == "") {
              return posts;
            } else if (
              post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              post.body.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return posts;
            }
          })
          .map((post) => (
            <div class="shadow p-3 mb-5 bg-body rounded mt-4 mb-1">
              <h6>Id : {post.id}</h6>
              <h6> User Id : {post.userId} </h6>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
      {/* End Search */}
    </div>
  );
};
export default PostsSearch;
