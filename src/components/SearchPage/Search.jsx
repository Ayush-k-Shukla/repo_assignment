import { TextField, InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react';
function SearchPage({ handleChange, username, handleSubmit }) {
  return (
    <>
      <div className='container'>
        <TextField
          id='outlined-basic'
          label='Start typing username...'
          variant='outlined'
          value={username}
          onChange={handleChange}
          fullWidth
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
    </>
  );
}
export default SearchPage;
