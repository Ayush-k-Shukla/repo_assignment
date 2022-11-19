import './RepoComponent.css';

function RepoComponent({ repos }) {


  return (
    <>
      <div className='mainRepoContainer'>
        {repos.map((repo) => {
          return (
            <>
              <div className='insideRepo'>
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
                {repo.language && <p className='language'>{repo.language}</p>}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default RepoComponent;
