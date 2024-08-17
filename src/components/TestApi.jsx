import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

const TestApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setData(data);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 p-4 text-blue-500 bg-blue-100 rounded shadow ">
      <h1 className="text-5xl font-bold capitalize text-black text-center mb-10">
        TestApi
      </h1>

      {loading && <CgSpinner className="w-10 h-10 animate-spin" />}
      {!error ? (
        <>
          <ul className="flex  flex-wrap items-center w-3/4 justify-center min-h-screen gap-10 space-x-4 p-4">
            {data.map((item) => (
              <div
                className="card border-2 border-black rounded-3xl p-5 w-96 shadow-xl bg-white"
                key={item.id}
              >
                <li>{item.id}</li>
                <li>{item.username}</li>
                <li>{item.name}</li>
                <li>{item.email}</li>
                <li>{item.phone}</li>
                <li>{item.website}</li>
                <li>{item.company.name}</li>
                <li>{item.company.bs}</li>
                <li>{item.company.catchPhrase}</li>
                <li>{item.address.street}</li>
              </div>
            ))}
          </ul>
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default TestApi;
