import { useState } from "react";

const users = [
  {
    Name: "Harsh",
    Id: 1,
    Email: "harsh@gmail.com",
    ContactNo: "1234567890",
    Age: 30,
  },
  {
    Name: "Kunal",
    Id: 2,
    Email: "kunal@gmail.com",
    ContactNo: "9876543210",
    Age: 25,
  },
  {
    Name: "Nikhil",
    Id: 3,
    Email: "nikhil@gmail.com",
    ContactNo: "4561237890",
    Age: 35,
  },
  {
    Name: "Darshan",
    Id: 4,
    Email: "darshan@gmail.com",
    ContactNo: "1234567890",
    Age: 30,
  },
  {
    Name: "Abhishek",
    Id: 5,
    Email: "abhishek@gmail.com",
    ContactNo: "9876543210",
    Age: 25,
  },
  {
    Name: "Rajat",
    Id: 6,
    Email: "rajat@gmail.com",
    ContactNo: "4561237890",
    Age: 21,
  },
  {
    Name: "Pranav",
    Id: 7,
    Email: "pranav@gmail.com",
    ContactNo: "1234567890",
    Age: 23,
  },
];

function Main() {
  const [searchId, setSearchId] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const handleSearch = () => {
    const userId = parseInt(searchId);
    const user = users.find((u) => u.Id === userId);

    if (user) {
      setUserDetails(user);
    } else {
      setUserDetails(null);
    }
  };

  return (
    <div>
      <h2>User Search</h2>
      <label htmlFor="userId">Enter User ID:</label>
      <input
        type="text"
        id="userId"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userDetails && (
        <div>
          <h3>User Details</h3>
          <p>
            <strong>Name:</strong>
            {userDetails.Name}
          </p>
          <p>
            <strong>Email:</strong> {userDetails.Email}
          </p>
          <p>
            <strong>Contact No:</strong> {userDetails.ContactNo}
          </p>
          <p>
            <strong>Age:</strong> {userDetails.Age}
          </p>
        </div>
      )}

      {!userDetails && <p>User not found!</p>}
    </div>
  );
}

export default Main;
