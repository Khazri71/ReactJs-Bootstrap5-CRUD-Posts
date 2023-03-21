import { useState } from "react";
import { useNavigate } from "react-router-dom";
//SweetAlert2
import Swal from "sweetalert2";

const PostAdd = () => {
  //Variables
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  const postToAdd = {
    userId,
    title,
    description,
  };
  const navigator = useNavigate();

  //Add Post Data To API JSONPlacehoder
  const addPost = (e) => {
    e.preventDefault();
    setIsWaiting(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "Post",
      body: JSON.stringify(postToAdd),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserId("");
        setTitle("");
        setDescription("");
        setTimeout(() => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Post Added Successfully!",
            showCofirmButton: true,
            confirmButtonText: "Ok",
            showCancelButton: true,
            cancelButtonText: "Cancel",
            showCloseButton: true,
          });
        }, 500);
        navigator("/posts");
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
  };
  return (
    <div className="container mt-3 mb-4">
      {/* Start Add Post */}
      <h2 className="text-center">Add Post</h2>
      <br></br> <br></br>
      <form onSubmit={addPost}>
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
        {!isWaiting && (
          <input
            type="submit"
            className="btn btn-warning text-light"
            value="Add"
          />
        )}

        {isWaiting && (
          <input
            type="submit"
            className="btn btn-warning text-light"
            value="Add"
            disabled
          />
        )}
      </form>
      {/* End Add Post */}
    </div>
  );
};
export default PostAdd;
