import React, { useState, useEffect } from 'react';
import Flickr from 'flickr-sdk';
import SearchBar from './components/searchBar';
import ImagesList from './components/imagesList';


import { Container, Row } from 'reactstrap';

const SearchPage = (props) => {
  // const flickr = new Flickr(process.env.FLICKR_API_KEY);
  // console.log(process.env.FLICKR_API_KEY);
  const key = '4d71162c1ece56ad858c3cxxxxxxxxxx'; // personal KEY
  const flickr = new Flickr(key);

  let imagesListDefault = [];
  const [input, setInput] = useState('');
  flickr.photos.getRecent().then((res) => {
    imagesListDefault = res.body.photos.photo;
  });

  const [imagesList, setImagesList] = useState(imagesListDefault);

  const fetchData = async () => {
    const response = await flickr.photos.search({ text: `${input}` });
    setImagesList(response.body.photos.photo);
  }

  const updateInput = async (input) => {
    console.log(input);
    setInput(input);
    await fetchData();
  }

  useEffect(() => { fetchData() }, []);
  const searchStyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "Arial",
    position: "absolute",
    width: "100%", justifyContent: 'center',
    alignSelf: 'center',
    height: '20%',
    alignContent :'center',
    margin: 20,
    borderWidth: 1,
    borderColor: 'red',
  };
  return (
    <>
   

      {/* <Container > */}
        {/* <Row>
          <h1 style={{
            position: 'absolute', color: 'red', justifyContent: 'center',
            width: '80%',
            alignSelf: 'center',
            margin: 20,
            borderWidth: 1,
            borderColor: 'red',
          }}>Search Photos</h1>
        </Row> */}
        <div   id='a'  style={{width: '100%', height: '200px', backgroundColor:'black'}}>
        {/* <Row style={searchStyle}> */}
          <h1 style={{justifyContent:'center',color:'white'}}>search Photos</h1>
          <SearchBar
            placeholder={input}
            onChange={e => updateInput(e.target.value)}
          />
          </div>
        {/* </Row> */}
        {/* <Row  style={{height:'80%'}}> */}
        <div   id='aa'  style={{width: '100px', height: '200px'}}>
          <ImagesList data={imagesList} />
          </div>
        {/* </Row> */}
      {/* </Container> */}
    </>
  );
}


export default SearchPage
