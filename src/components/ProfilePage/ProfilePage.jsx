import './ProfilePage.css';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ProfilePage = ({ userData }) => {
  return (
    <>
      {' '}
      <div className='profileContainer'>
        <div className='profileContainerleft'>
          {userData.name && (
            <img
              src={userData.avatar_url}
              alt='profileimage'
              className='roundImg'
            />
          )}
        </div>
        <div className='profileContainerright'>
          <h1>{userData.name}</h1>
          <p>{userData.bio}</p>
          {userData.location && (
            <p className='info'>
              <LocationOnOutlinedIcon />
              {userData.location}
            </p>
          )}
          {userData.twitter_username && (
            <p className='info'>
              <TwitterIcon />
              <a href={'https://twitter.com/' + userData.twitter_username}>
                {'@' + userData.twitter_username}
              </a>
            </p>
          )}
          {userData.html_url && (
            <p className='info'>
              <InsertLinkOutlinedIcon />
              {userData.html_url}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
