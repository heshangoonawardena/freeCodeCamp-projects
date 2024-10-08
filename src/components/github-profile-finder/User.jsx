import React from "react";

const User = ({ profile }) => {
  const {
    message,
    avatar_url,
    created_at,
    public_repos,
    repos_url,
    name,
    login,
    html_url,
  } = profile;

  const createdDate = new Date(created_at);

  return (
    <div className="profile">
      {login ? (
        <>
          <div>
            <img className="avatar" src={avatar_url} alt="User" />
          </div>
          <div className="profile-name-container">
            <a href={html_url} target="_blank">
              {name || login}
            </a>
            <p>
              Joined on:{" "}
              {`${createdDate.getDate()} ${createdDate.toLocaleDateString(
                "en-us",
                { month: "short" }
              )} ${createdDate.getFullYear()}`}
            </p>
          </div>
          <div className="profile-info">
            <div>
              <p>Public Repos</p>
              <p>{public_repos}</p>
            </div>
            <div>
              <a href={`${html_url}?tab=repositories`} target="_blank">
                Search More
              </a>
            </div>
          </div>
        </>
      ) : message === 'Not Found' ? (
        <div className="profile-no-results">
          <p>No such user ☹️</p>
        </div>
      ) : (
        <div className="profile-no-results">
          <p>API limit exceeded ☹️</p>
        </div>
      )}
    </div>
  );
};

export default User;
