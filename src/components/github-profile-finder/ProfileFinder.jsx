import React, { useEffect, useRef, useState } from "react";
import "./ProfileFinder.css";
import User from "./User";

const ProfileFinder = () => {
  const [userName, setUserName] = useState("heshangoonawardena");
  const [profileData, setProfileData] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const handleSubmit = () => {
    userName ? fetchGitHubProfile() : inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [userName]);

  const fetchGitHubProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      data && setProfileData(data);

      // console.log(data);
    } catch (e) {
      setErrMsg("Error Fetching GitHub Profile");
      console.error(e);
    } finally {
      setUserName("");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubProfile();
  }, []);

  const handleKeyDown = (e) => {
    userName && e.key === "Enter" && handleSubmit();
  };

  if (errMsg) return <div className="status">{errMsg}</div>;
  if (loading) return <div className="status">Loading.. Please wait</div>;

  return (
    <div className="github-profile-container">
      <div className="github-profile-input-wrapper">
        <input
          type="text"
          ref={inputRef}
          name="search-by-username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search Github Username..."
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {profileData && <User profile={profileData} />}
    </div>
  );
};

export default ProfileFinder;
