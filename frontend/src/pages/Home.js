import React, { useEffect, useState } from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setWorkouts(json);
      } catch (error) {
        console.error("Failed to fetch workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <h2>Home Page</h2>
      <div className="workouts">
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <div key={workout._id} className="workout">
              <p>{workout.title}</p>
            </div>
          ))
        ) : (
          <p>No workouts available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
