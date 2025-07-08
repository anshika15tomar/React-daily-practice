import React, { useState } from 'react';

export default function ProfileUpdater() {
  const [profile, setProfile] = useState({
    name: 'Anshika',
    age: 21,
    location: 'Bhopal'
  });

  const updateName = () => {
    setProfile({
      ...profile,
      name: 'Anshika Tomar'
    });
  };

  const increaseAge = () => {
    setProfile({
      ...profile,
      age: profile.age + 1
    });
  };

  const updateLocation = () => {
    setProfile({
      ...profile,
      location: 'Noida'
    });
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Profile Updater</h1>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Location:</strong> {profile.location}</p>

      <button onClick={updateName} style={{ margin: '5px' }}>Update Name</button>
      <button onClick={increaseAge} style={{ margin: '5px' }}>Increase Age</button>
      <button onClick={updateLocation} style={{ margin: '5px' }}>Update Location</button>
    </div>
  );
}
