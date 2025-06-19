import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState([
    { id: 1, name: "Hemant", email: "yhemant@gmail.com", age: "27" },
  ]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [isEditing, setIsEditing] = useState(false);

  useState(() => {
    let Formdata = JSON.parse(localStorage.getItem("form")) || [];
    console.log(Formdata, "FormData");
    setFormData(Formdata);
  }, []);

  console.log(isEditing, "isEditing");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!isEditing) {
      let data = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        age: form.age,
      };
      console.log(data, "SEt from dAta");
      localStorage.setItem("form", JSON.stringify([...formData, data]));
      setFormData([...formData, data]);
    } else {
      console.log(form, "Updated Form");
      const updatedData = formData.map((ele) => {
        if (ele.id == form.id) {
          return { name: form.name, email: form.email, age: form.age, ...ele };
        }
        return ele;
      });
      console.log(updatedData, "formData");
      localStorage.setItem("form", JSON.stringify(updatedData));
      setFormData(updatedData);
    }
    setIsEditing(false);
    setForm({ name: "", email: "", age: "" });
  };

  const handleEdit = (data) => {
    console.log(data, "HandleEdit");
    setIsEditing(true);
    setForm({ name: data.name, email: data.email, age: data.age, id: data.id });
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            placeholder="Enter Your Age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>SNo</th>

                <th>Name</th>

                <th>Email</th>

                <th>Age</th>

                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((ele, index) => (
                <tr key={ele.id}>
                  <th>{index + 1}</th>
                  <th>{ele.name}</th>
                  <th>{ele.email}</th>
                  <th>{ele.age}</th>
                  <th>
                    <button onClick={() => handleEdit(ele)}>
                      Edit Profile
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1> No Data</h1>
      )}
    </div>
  );
}

export default App;
