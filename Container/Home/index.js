import React from 'react';
import { Button, Input } from 'antd';
import './HomeContainer.css';

const HomeContainer = () => {
  const handleSearch = (value) => {
    console.log('Поиск:', value);
  };

  return (
    <div className="home-container">
      <h1>Home</h1>
      <div className="search-container">
        <Input.Search
          placeholder="Search"
          enterButton={<Button type="primary">Search</Button>}
          size="large"
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default HomeContainer;


