// useTasks.ts
import { useEffect, useState } from 'react';

export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}

const useTasks = () => {
  const [data, setData] = useState<Task[]>([]);
  const [error, setError] = useState<string>("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
      });
      setData((prevData) => prevData.filter((task) => task._id !== id));
      setEditingTask(null);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleUpdate = async (updatedTask: Task) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${updatedTask._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Update the local data with the updated task
      setData((prevData) =>
        prevData.map((task) =>
          task._id === updatedTask._id ? { ...task, ...updatedTask } : task
        )
      );

      // Reset editingTask to null after successful update
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, editingTask, fetchData, handleDelete, handleEdit, handleUpdate };
};

export default useTasks;
