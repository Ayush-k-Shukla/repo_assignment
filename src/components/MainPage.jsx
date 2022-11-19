import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import './MainPage.css';
import RepoComponent from './RepoPage/RepoComponent';
import SearchPage from './SearchPage/Search';
import PaginationPage from './PaginationPage/PaginationPage';
import ProfilePage from './ProfilePage/ProfilePage';
function MainPage() {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState('');
  const [reposData, setReposData] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [errors, setErrors] = useState('');

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.key !== 'Enter') {
      return;
    }
    try {
      setLoading(true);

      const profileData = await fetch(
        `https://api.github.com/users/${username}`
      );
      const _profileData = await profileData.json();

      const profileRepoData = await fetch(
        `${_profileData.repos_url}?page=${curPage}&per_page=10`
      );
      const _profileRepoData = await profileRepoData.json();

      if (_profileData) {
        setUserData(_profileData);
        setReposData(_profileRepoData);
      }
      setLoading(false);
      setErrors('');
    } catch (error) {
      setErrors('Please Enter correct Username');
      setLoading(false);
    }
  };

  const setPaginatedData = async (currentPage) => {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=10`
    );
    const curData = await response.json();
    setReposData(curData);
  };

  return (
    <>
      <div className='mainContainer'>
        <div className='searchContainer'>
          <SearchPage
            handleChange={handleChange}
            username={username}
            handleSubmit={handleSubmit}
          />
          {errors && <p>{errors}</p>}
        </div>
        {loading ? (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color='inherit' />
          </Backdrop>
        ) : (
          <>
            <ProfilePage userData={userData} />
            <div className='repoContainer'>
              <RepoComponent repos={reposData} />
            </div>
            <div className='paginationContainer'>
              {userData.name && (
                <PaginationPage
                  repoCount={userData.public_repos}
                  setPaginatedData={setPaginatedData}
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default MainPage;
