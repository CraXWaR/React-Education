import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformedTasks = (taskObject) => {
    const loadedTasks = [];

    for (const taskKey in taskObject) {
      loadedTasks.push({ id: taskKey, text: taskObject[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(
    {
      url:
        "https://react-practice-10998-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    },
    transformedTasks
  );

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
