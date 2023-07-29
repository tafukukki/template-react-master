import React from 'react'
import axios from 'axios'
import { useEffect, useState, useMemo } from 'react';

export default function Tasks({ token }) {
  const [tasks, setTasks] = useState([]);

  const fetchData = useMemo(() => async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [fetchData, token]);

  return (
    <div>ok</div>
  )
}
