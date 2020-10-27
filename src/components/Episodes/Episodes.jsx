import React, { useContext, useEffect } from 'react';
import tw from 'twin.macro';
import EpisodeItem from '../EpisodeItem/EpisodeItem';
import Context from '../../Context';

const Container = tw.div`relative`;

const Episodes = () => {
	const { state, methods } = useContext(Context);
	// const activeTag = state.activeTag.toString();
	useEffect(() => {
		console.log('rerendering Episodes');
	}, [state.activeTag]);

	//
	console.log(state);
	return (
		<Container>
			{state.eps
				.filter((ep) => ep.tag === state.activeTag)
				.map((episode, id) => (
					<EpisodeItem key={id} episode={episode} />
				))}
		</Container>
	);
};

export default Episodes;
