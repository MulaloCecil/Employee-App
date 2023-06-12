
import React from 'react';

const EmployeeList = ({ employees, onDelete, onEditClick }) => {
  const handleEditClick = (employee) => {
    onEditClick(employee);
  };
  return (
    <div>
      <h2 className="h1">Employee List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.position}</td>
              <td>
               
                <button className="btn btn-primary" onClick={() => handleEditClick(employee)}>Edit</button>

                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
