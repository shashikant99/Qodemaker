import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loder';
import './UserList.css';

const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setRows(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error in fetching data', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  if (loading) {
    return <Loader />;
  }

  const filteredUsers = rows.filter((user) => {
    const nameMatch = user.username.toLowerCase().includes(search.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(search.toLowerCase());
    return nameMatch || emailMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="user-list-container">
      <h1 className="user-list-header">User List</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.company?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => handlePaginationClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserList;
