import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import {Input, Box, Dialog, DialogContent } from '@mui/material';
import craftopiaLogo2 from '../../assets/craftLogo2.png';
//import CraftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
import Auth from '../../components/auth/Auth';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar({
  user,
  handleLogout,
  handleSignIn,
  modal,
  setModal,
  posts,
  // searchResults,
  // setSearchResults,
}) {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  //const [postsAreThere, setPostsAreThere]
  const [tab, setTab] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  //console.log(posts)

  //useEffect(() => { //make function then call it 
    // if (!dataLoader) {
    //   console.log(posts)
    // // const searched = posts.filter((post) => {
    // //   return (
    // //     post.title.toLowerCase().includes(searchText.toLowerCase()) ||
    // //     post.category.toLowerCase().includes(searchText.toLowerCase()) ||
    // //     post.user_id.toLowerCase().incudes(searchText.toLowerCase()) ||
    // //     post.post_id.toLowerCase().includes(searchText.toLowerCase()) ||
    // //     post.created_by.toLowerCase().includes(searchText.toLowerCase())
    // //   );
    // // });
    // // setSearchResults(searched);
    // }

    // posts.map((post, i) => {
    //   if (post.title.includes(searchText) || post.category.includes(searchText) || post.user_id.includes(searchText) || post.post_id.includes(searchText) || post.created_by.includes(searchText)) {
    //     setSearchResults()
    //   }
    // })

  //}, []) //[searchText]

  //console.log(posts)

  function handleSearchInput(event) {
    setSearchText(event.target.value); 
    
    //if (posts.length > 1) {
      //console.log(posts)
    const searched = posts.filter((post) => {
      return (
        post?.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post?.category.toLowerCase().includes(searchText.toLowerCase()) ||
        post?.created_by.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setSearchResults(searched);
    //setDialogOpen(searched.length > 0);
    //}
  }

  console.log(searchResults)

  return (
    <nav>
      <div className='top-left'>
        <Link to='/home'>
          {' '}
          <img
            style={{maxWidth: '100px', maxHeight: '100px'}}
            src={craftopiaLogo2}
            className='nav-logo'
          />{' '}
        </Link>
      </div>
      <h1 className='title'>Craftopia</h1>
      <div className='nav-right-container'>
        <div className='search-sect'>
          <SearchIcon className='search-icon' fontSize='small' sx={{ color: '#1a237e' }} />
          <Input
            type='text'
            placeholder='Search...'
            value={searchText}
            onChange={handleSearchInput}
            size='xsmall'
            sx={{width: '190px', marginBottom: '-4px'}}
            inputProps={{style: {fontSize: '17px', marginBottom: '-2px'}}}
          />
          {
            searchResults.length > 0 ? (
              <div>
                {
                  searchResults.map((result) => (
                    <div>
                      {result.name}
                    </div>
                  ))
                }
              </div>
            ) : (null)
          }
        </div>
        <Auth
          user={user}
          modal={modal}
          tab={tab}
          setTab={setTab}
          setModal={setModal}
          handleLogout={handleLogout}
          handleSignIn={handleSignIn}
        />
      </div>
    </nav>
  );
}
