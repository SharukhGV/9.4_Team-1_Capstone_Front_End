//POST BOX COMPONENT IS HERE

import {useState} from 'react';

export default function PostBox() {
  const [postModalOpen, setPostModalOpen] = useState(false);

  return (
    <>
      <Modal open={postModalOpen} onClose={() => setPostModalOpen(false)}>
        <Box sx={stylePostModel}>
          <button
            className='close-modal'
            onClick={() => setPostModalOpen(false)}
          >
            {' '}
            &times;{' '}
          </button>
          <Textarea
            minRows={9}
            sx={{width: '100%'}}
            placeholder='Share your creative know-how...'
            onChange={event => setPost({...post, body: event.target.value})}
            startDecorator={
              <div>
                <div className='upperLeft-txtSect'>
                  <Button
                    component='label'
                    variant='contained'
                    href='#file-upload'
                    startDecorator={<img src={cameraImg} width='30px' />}
                    size='small'
                    sx={{backgroundColor: 'white'}}
                  >
                    <VisuallyHiddenInput
                      multiple
                      type='file'
                      name='file'
                      onChange={handleFileSelection}
                    />
                    {/* if issue check mui usage or wrap around form*/}
                  </Button>

                  {/* <button onClick={sendToServer}> send to server test btn </button> */}
                  <Input
                    placeholder='Title'
                    focused
                    onChange={event =>
                      setPost({...post, title: event.target.value})
                    }
                  />
                </div>
                {/* <div>
                                        {file.map((iFile, index) => (
                                            <img key={index} src={iFile} alt={`File ${index}`} style={{ width: '30px' }} />
                                        ))}
                                    </div> */}
                <div className='bottomLeft-txtSect'>
                  <FormControl variant='standard' sx={{minWidth: 170}}>
                    <InputLabel sx={{fontFamily: 'Lato'}}>
                      {' '}
                      Category{' '}
                    </InputLabel>
                    <Select
                      value={postCtaCategory}
                      onChange={event => setPostCtaCategory(event.target.value)}
                    >
                      <MenuItem value='Photography'> Photography </MenuItem>
                      <MenuItem value='Filmmaking'> Filmmaking </MenuItem>
                      <MenuItem value='Digital Arts'> Digital Arts </MenuItem>
                      <MenuItem value='Ceramics'> Ceramics </MenuItem>
                      <MenuItem value='Drawing'> Drawing </MenuItem>
                      <MenuItem value='Sculpture'> Sculpture </MenuItem>
                      <MenuItem value='Printmaking'> Printmaking </MenuItem>
                      <MenuItem value='Painting'> Painting </MenuItem>
                      <MenuItem value='Fashion Design'>
                        {' '}
                        Fashion Design{' '}
                      </MenuItem>
                      <MenuItem value='Graffiti'> Graffiti </MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    variant='standard'
                    label='Tags'
                    className='txt-tags'
                    onChange={event =>
                      setPost({...post, tags: event.target.value})
                    }
                  />
                </div>
                <div className='bottomRight-actionBtns'>
                  <button className='preview-btn' onClick={previewPost}>
                    {' '}
                    Preview{' '}
                  </button>
                  <button className='post-btn' onClick={sendToServer}>
                    {' '}
                    Post{' '}
                  </button>
                </div>
              </div>
            }
          ></Textarea>
        </Box>
      </Modal>
    </>
  );
}
