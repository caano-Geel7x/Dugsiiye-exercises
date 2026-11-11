import React, { useState } from "react";

export default function Formcantrolled() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.userName === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      alert("Please enter all inputs");
      return;
    }

    if (!isChecked) {
      alert("Please check the box");
      return;
    }

    if (selected === "") {
      alert("Please select an option");
      return;
    }

    console.log(formData, isChecked, selected);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "320px",
        margin: "40px auto",
        padding: "24px",
        backgroundColor: "#f8fafc",
        border: "1px solid #cbd5e1",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#1e293b" }}>
        Registration Form
      </h2>

      <label htmlFor="userName">Username:</label>
      <input
        id="userName"
        type="text"
        name="userName"
        value={formData.userName}
        onChange={handleInput}
        style={inputStyle}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInput}
        style={inputStyle}
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInput}
        style={inputStyle}
      />

      <label
        htmlFor="checkbox"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "8px",
        }}
      >
        <input
          id="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.target.checked)}
          style={{ accentColor: "#4be82c" }}
        />
        Accept the terms
      </label>

      <label htmlFor="selected">Select an option:</label>
      <select
        id="selected"
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
        style={inputStyle}
      >
        <option value="">Select an option</option>
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
      </select>

      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
}

const inputStyle = {
  padding: "10px",
  border: "1px solid #94a3b8",
  borderRadius: "6px",
  backgroundColor: "#ffffff",
  color: "#1e293b",
  fontSize: "14px",
};

const buttonStyle = {
  marginTop: "12px",
  padding: "11px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#2563eb",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};


