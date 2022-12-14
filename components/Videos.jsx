import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import styles from "../styles/Videos.module.css";
import Image from "next/image";
const Videos = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=AIzaSyDwpfRN0fFY1Gs7kEUzaoOY4xOxuVlIt6U`
    )
      .then((res) => res.json())
      .then((res) => res.items)
      .then((res) => setSnippets(res.map((item) => item.snippet)));
  }, []);

  return (
    <div className={styles.videosBlock}>
      
      {snippets.map((i) => (
        <div key={nanoid()}>
          <img
            src={i.thumbnails.standard.url}
            alt="#"
            style={{ width: "100%", objectFit: "cover" }}
          />
          <h2 className={styles.channelTitle}>{i.title}</h2>
          <a href="#" className={styles.videoTitle}>
            {i.channelTitle}
          </a>
          <h6 style={{ color: "#888585" }}>Опубликовано: {i.publishedAt.slice(0,10)}</h6>
        </div>
      ))}
    </div>
  );
};

export default Videos;
