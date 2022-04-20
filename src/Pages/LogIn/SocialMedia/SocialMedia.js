import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import photo from "../../../img/google.png";
const SocialMedia = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorMessage;
  if (error) {
    errorMessage = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div className="p-5">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary w-25"
      >
        <img style={{ width: "30px" }} src={photo} alt="" />
        <span className="px-2">Sign In With Google</span>
      </button>
      <p>Or</p>
      {errorMessage}
    </div>
  );
};

export default SocialMedia;
