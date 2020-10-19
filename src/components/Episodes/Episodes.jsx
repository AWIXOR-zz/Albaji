import React from "react";
import tw from "twin.macro";
import EpisodeItem from "../EpisodeItem/EpisodeItem";
const Container = tw.div`relative`;

const Episodes = () => {
  return (
    <Container>
      {eps.map((episode, id) => (
        <EpisodeItem key={id} episode={episode} />
      ))}
    </Container>
  );
};

export default Episodes;

const eps = [
  {
    id: 1,
    title: "محاضرة 1",
    tag: "فقه",
  },
  {
    id: 1,
    title: "محاضرة 2",
    tag: "فقه",
  },
  {
    id: 1,
    title: "محاضرة 3",
    tag: "فقه",
  },
  {
    id: 1,
    title: "محاضرة 4",
    tag: "فقه",
  },
];
