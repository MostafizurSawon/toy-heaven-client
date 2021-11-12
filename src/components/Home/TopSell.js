import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TopSell() {
  return (
    <>
    <h1 className=" text-center mt-5">Our Top Selling toys</h1>

    <ImageList sx={{ height: 600, marginTop: 5}}>
      <ImageListItem key="Subheader" cols={2}>
        {/* <ListSubheader component="div"><h2 className="text-primary">Top Selling Toys</h2></ListSubheader> */}
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

const itemData = [
  {
    img: 'https://image.freepik.com/free-vector/red-robot-transformer-car-cartoon-illustration_107791-519.jpg',
    title: 'Car',
    author: '@Justin',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    title: 'Train',
    author: '@Amber',
  },
  {
    img: 'https://images.unsplash.com/photo-1595707678349-4b3f482bfbd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Alphabet',
    author: '@jack',
  },
  {
    img: 'https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    title: 'Puzzle',
    author: '@samira',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@Rocky',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1588348442528-85c6fa3b0440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    title: 'Worker',
    author: '@saitama',
    rows: 2,
    cols: 2,
    featured: true,
  }
];
