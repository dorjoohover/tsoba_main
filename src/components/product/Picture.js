import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ width: "auto", height: 600, overflowX: "scroll" }}>
      <ImageList variant="masonry" cols={6} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "/img/extra/childRoom.jpg",
    title: "Child Room",
    author: "Хүүхдийн өрөө",
  },
  {
    img: "/img/extra/childRoom2.jpg",
    title: "Books",
    author: "Хүүхдийн өрөө",
  },
  {
    img: "/img/extra/childRoom3.jpg",
    title: "Sink",
    author: "Хүүхдийн өрөө",
  },
  {
    img: "/img/extra/bathroom1.jpg",
    title: "Kitchen",
    author: "Ариун цэврийн өрөө",
  },
  {
    img: "/img/extra/bathroom1.jpg",
    title: "Blinds",
    author: "Ариун цэврийн өрөө",
  },
  {
    img: "/img/extra/bedroom1.jpg",
    title: "Chairs",
    author: "Унтлагын өрөө",
  },
  {
    img: "/img/extra/bedroom2.jpg",
    title: "Laptop",
    author: "Унтлагын өрөө",
  },
  {
    img: "/img/extra/1floor4.jpg",
    title: "Laptop",
    author: "Үүдний өрөө",
  },
  {
    img: "/img/extra/1floor1.jpg",
    title: "Laptop",
    author: "Үүдний өрөө",
  },
  {
    img: "/img/extra/1floor2.jpg",
    title: "Laptop",
    author: "Зочны өрөө",
  },
  {
    img: "/img/extra/1floor3.jpg",
    title: "Laptop",
    author: "Зочны өрөө",
  },

  {
    img: "/img/extra/1floor5.jpg",
    title: "Laptop",
    author: "Гал тогоо",
  },
];
