import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUserStore } from "@store/userStore";

export default function Profile() {
  const { id } = useParams();
  const { user } = useUserStore();
  const [loading, setLoading] = useState(true);
  const [userExists, setUserExists] = useState(true);


  useEffect(() => {
    // Check if user exists in userStore
    if (!user || user.id !== id) {
      setUserExists(false);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/users/${id}/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!res.ok) throw new Error(`HTTP error! Status ${res.status}`);

        const data = await res.json();
        setProfileData(data);
      } catch (error) {
        console.error("Login error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, user]);

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!userExists) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-500">User does not exist.</div>
      </div>
    );
  }



  return (
    <div className="row-start-2 col-start-2 bg-gray-100 p-6 overflow-y-auto">
     
    </div>
  );
}
