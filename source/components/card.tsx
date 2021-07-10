import React, {FC} from 'react';
import {Box, Text} from 'ink';

type CardProps = {
	title: string;
};

const Card: FC<CardProps> = ({title, children}) => (
	<Box
		flexDirection="column"
		borderStyle="round"
		marginLeft={1}
		marginRight={1}
		paddingLeft={1}
		paddingRight={1}
	>
		<Text bold color="red">
			{title}
		</Text>
		{children}
	</Box>
);

export default Card;
