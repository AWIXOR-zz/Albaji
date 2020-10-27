import React from 'react';
import tw from 'twin.macro';
import Episodes from '../components/Episodes/Episodes';
import ResponsiveVideoEmbed from '../helpers/ResponsiveVideoEmbed';
import Categories from '../components/Categories/Categories';
const Container = tw.div`relative`;

const TopColumn = tw.div`flex justify-center mb-5`;

const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`lg:w-4/12 max-w-lg lg:max-w-none mr-4 sm:mt-5 sm:mr-12`;
const RightColumn = tw.div`relative  lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Home = () => {
	return (
		<Container>
			<TwoColumn>
				<RightColumn>
					<TopColumn>
						<Categories />
					</TopColumn>
					<ResponsiveVideoEmbed videoId={'ihRQfjOgRSM'} />
				</RightColumn>
				<LeftColumn>
					<Episodes />
				</LeftColumn>
			</TwoColumn>
		</Container>
	);
};

export default Home;
