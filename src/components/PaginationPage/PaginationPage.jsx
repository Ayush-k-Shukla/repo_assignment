import React from 'react';
import Pagination from '@mui/material/Pagination';

const PaginationPage = ({ repoCount, setPaginatedData }) => {
  return (
    <>
      <Pagination
        count={parseInt(repoCount / 10) + 1}
        variant='outlined'
        onChange={(e, value) => setPaginatedData(value)}
      />
    </>
  );
};

export default PaginationPage;
