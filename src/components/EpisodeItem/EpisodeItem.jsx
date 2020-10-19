import React from "react";
import tw from "twin.macro";

const Container = tw.div`max-w-sm rounded overflow-hidden shadow-lg `;
const TagsWrapper = tw.div`px-6 pt-4 pb-2`;
const Tag = tw.span`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`;
const TitleWrapper = tw.div`px-6 py-4 `;
const Title = tw.div`font-normal text-xl mb-2`;

const EpisodeItem = ({ episode }) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{episode.title}</Title>
      </TitleWrapper>
      <TagsWrapper>
        <Tag>{episode.tag}</Tag>
      </TagsWrapper>
    </Container>
  );
};

export default EpisodeItem;
