import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//SweetAlert2
import Swal from "sweetalert2";

const PostEdit = () => {
  //Parameter Id From URL
  const { id } = useParams();
  //Variables
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);
  const [isWaitingBtn, setIsWaitingBtn] = useState(false);

  const postUpdate = {
    userId,
    title,
    description,
  };
  const navigator = useNavigate();

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
        setUserId(data.userId);
        setTitle(data.title);
        setDescription(data.body);
        console.log(postUpdate);
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
        }, 500);
      });
  }, []);

  //Update Post Data
  const updatePost = (e) => {
    setIsWaitingBtn(true);
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "PUT",
      body: JSON.stringify(postUpdate),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setIsWaiting(false);
        console.log(post);
        setTimeout(() => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Post Updated Successfully!",
            showCofirmButton: true,
            confirmButtonText: "Ok",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            showCloseButton: true,
          });
        }, 1000);

        navigator("/posts");
      });
  };

  return (
    <div className="container mt-3 mb-4">
      {/* Start Edit Post*/}
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
      <h2 className="text-center mb-3">Edit Post - {id}</h2>
      {post && (
        <div>
          <form onSubmit={updatePost}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter UserID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            {!isWaitingBtn && (
              <input
                type="submit"
                className="btn btn-success text-light"
                value="Edit"
              />
            )}
            {isWaitingBtn && (
              <input
                type="submit"
                className="btn btn-success text-light"
                value="Edit"
                disabled
              />
            )}
          </form>
        </div>
      )}
      {/* End Edit Post */}
    </div>
  );
};
export default PostEdit;
