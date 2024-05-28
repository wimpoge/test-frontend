import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error.message);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <main className="container mt-5">
        <h1>Error</h1>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="container mt-5">
      <div className="row">
        {data.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {user.email}
                  <br />
                  <strong>Phone:</strong> {user.phone}
                </p>
              </div>
              <Link
                to={`/users/${user.id}`}
                className="border-2 rounded-xl p-2 border-black hover:bg-black hover:text-white hover:border-white"
              >
                Cek Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
