import React, { useEffect, useState } from "react";
import "./AutoComplete.css";
import Suggestions from "./Suggestions";

const AutoComplete = () => {
  const [loading, setLoading] = useState(false); //
  const [errMsg, setErrMsg] = useState(null); //
  const [users, setUsers] = useState([]); //
  const [searchParam, setSearchParam] = useState(""); //
  const [showDropdown, setShowDropdown] = useState(false); //
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    query.length > 1
      ? (setFilteredUsers(
          users.filter((user) => user.toLowerCase().indexOf(query) > -1)
        ),
        setShowDropdown(true))
      : (setShowDropdown(false), setFilteredUsers([]));

  };

  const handleClick = (e) => {
    setSearchParam(e.target.innerText);
    setShowDropdown(false);
  }

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users/search");
      const data = await response.json();

      data?.users?.length && setUsers(data.users.map((user) => user.firstName));
    } catch (e) {
      console.error(e);
      setErrMsg(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users, filteredUsers, showDropdown);
  return (
    <div className="auto-complete-container">

      {loading ? <div>Loading data... Please wait</div> :
      
      <input
      type="text"
      value={searchParam}
      onChange={handleChange}
      className="auto-complete-input"
      name="search-users"
      placeholder="Search Users..."
      />
    }
      {
        showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />
        
      }
    </div>
  );
};

export default AutoComplete;
