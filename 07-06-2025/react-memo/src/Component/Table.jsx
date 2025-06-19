import React from "react";

export default React.memo(function Table({ data }) {
  //   console.log(data, "Data");
  console.log("Table component rendered");
  return (
    <div style={{ marginTop: "20px" }}>
      <table outline="1" border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
