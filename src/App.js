import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    bioPurpose: '',
    jobTitle: '',
    department: '',
    headshot: null,
    education: '',
    certifications: '',
    funFact: '',
    bio: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! (Check console for now)");
  };

  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>InfusionPoints Team Page Bios Form</h2>
      <p><strong>*PLEASE ANSWER IN THIRD PERSON FOR #7 & #10*</strong></p>
      <form onSubmit={handleSubmit}>

        <label>1. First Name (required)</label>
        <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} /><br />

        <label>2. Last Name (required)</label>
        <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} /><br />

        <label>3. Are you looking to:</label><br />
        <label><input type="radio" name="bioPurpose" value="Create an initial bio" onChange={handleChange} required /> Create an initial bio</label><br />
        <label><input type="radio" name="
#test
