
import { useEffect, useState } from "react";
import superagent from 'superagent';
import * as React from 'react';
import Card from '@mui/material/Card';
import {Button} from '@material-ui/core' 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import Image from '../../assets/search.png';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchForm(props) {
    const [book,setBook] = useState([]);
    const [books,setBooks] = useState([]);
    const handleInput = (e) => {
      setBook(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    superagent.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    .then((res) => {
      const result = res.body.items
      const booksData = result.map((item) => {
        return item;
      })
      setBooks(booksData);
    })
  }

  const sortByTitle = (e) => {
        e.preventDefault();
    superagent.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${book}`)
    .then((res) => {
      const result = res.body.items
      console.log(result);
      const booksData = result.map((item) => {
        return item;
      })
      setBooks(booksData);
    })
}

  const sortByAouthor = (e) => {
    e.preventDefault();
    superagent.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${book}`)
    .then((res) => {
      const result = res.body.items
      console.log(result);
      const booksData = result.map((item) => {
        return item;
      })
      setBooks(booksData);
    })
  }

  useEffect(() => {
  },[books]);

  return (
    <>
    <div >
    <img src={Image} style={{"width":"900px"}} >
        
    </img>
    <Paper
      component="form"
      sx={{ p: '10px 10px', display: 'flex', alignItems: 'center', width: 700 ,margin:"auto" , marginTop:"-10px"}}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for books"
        inputProps={{ 'aria-label': 'search google maps' }}onChange={handleInput}
      />
      <IconButton onClick={handleSubmit} type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
  <Button style={{textTransform: "capitalize"}} onClick={sortByTitle}>Search by Title</Button>
      <Button style={{textTransform: "capitalize"}} onClick={sortByAouthor}>Search by Author</Button>
    </Paper>
         
    </div>
    <div>

    <Grid container spacing={2}  style={{"paddingTop":"5%", "paddingLeft":"1.5%"}}>
    {  
      books.map((book,idx) => {
          return(
              <>
        <Grid  item xs={3}>

        <div>
        <Grid  >
        <Card sx={{ width: 345 }} style={{"height":"700px"}}>
       { book.volumeInfo.imageLinks ? 
      <CardMedia
      style={{"background":"fit", "backgroundImage":""}}
      component="img"
      height="500"
      image={book.volumeInfo.imageLinks.thumbnail}
      />
      : <img src='http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png'></img>
    } 
          <CardContent>
        <Typography gutterBottom variant="h5" component="div" key={idx}>Title : {book.volumeInfo.title}</Typography>
        {
            book.volumeInfo.authors ?  <Typography variant="body2" color="text.secondary"><b>Author :</b> {book.volumeInfo.authors}</Typography> : ['Unknown']
        }
        {
            book.volumeInfo.publishedDate ?  <Typography variant="body2" color="text.secondary"><b> publishedDate : </b> {book.volumeInfo.publishedDate} </Typography> : ['📕📖📒📚📗📘']
        }
         {
            book.volumeInfo.publisher ?  <Typography variant="body2" color="text.secondary"> <b> publisher : </b>{book.volumeInfo.publisher} </Typography> : ['📕📖📒📚📗📘']
        }
        {
            book.volumeInfo.categories ?  <Typography variant="body2" color="text.secondary"> <b> categories : </b>{book.volumeInfo.categories} </Typography> : ['📕📖📒📚📗📘']
        }
        </CardContent>
        </Card>
        </Grid>
        </div>
        </Grid>
        </>
        )
    })
}
</Grid>
    </div>
  </>
  );
}
export default SearchForm;
