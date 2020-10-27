import React from "react";
import tw from "twin.macro";
import EpisodeItem from "../EpisodeItem/EpisodeItem";
import { useCategory } from "../../providers/CategoryProvider";
import { useEpisodes } from "../../providers/EpisodesProvider";

const Container = tw.div`relative`;

const Episodes = () => {
  const { state } = useEpisodes();
  const categoryState = useCategory().state;
  const activeCategory = categoryState.activeCategory.toString();

  return (
    <Container>
      {state.eps
        .filter((ep) => ep.tag === activeCategory)
        .map((episode, id) => (
          <EpisodeItem key={id} episode={episode} />
        ))}
    </Container>
  );
};

export default Episodes;
