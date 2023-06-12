import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import SearchForm from './components/SearchForm';
import employeesData from './employees.json';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const [value, setValue] = useState("");


  useEffect(() => {
    setEmployees(employeesData);
  }, []);



  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    setShowForm(false);
  };

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEditClick = (employee) => {
    setShowForm(true);
    setSelectedEmployee(employee);
    
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    setEmployees(updatedEmployees);
    setSelectedEmployee(null);
    setShowForm(false);
  };
  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const clearForm = () => {
    setSelectedEmployee(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setSelectedEmployee( null);
    setShowForm(false);
  }

  const handleSearch = (searchId) => {
    setValue(searchId)
    if(searchId === "") {
      setSearchResults([])
    }
    else {
      const searchResults = employees.filter((employee) => employee.id === searchId);
      setSearchResults(searchResults);
    }
  };

  return (
    <div>
      <h1>Employee Registration</h1>
      <SearchForm onSearch={handleSearch} value={value} />
      {!showForm && (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>
          Add Employee
        </button>
      )}
      {showForm && (
        <EmployeeForm
          onAdd={addEmployee}
          selectedEmployee={selectedEmployee}
          employee={selectedEmployee}
          onUpdateEmployee={handleUpdateEmployee}
          clearForm={clearForm}
          handleCancel={handleCancel}
        />
      )}
      <EmployeeList
        employees={searchResults.length > 0 ? searchResults : employees}
        onDelete={handleDelete}
        onEditClick={handleEditClick}
        setShowForm={setShowForm}
      />
    </div>
  );
};

export default App;
