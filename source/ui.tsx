import React, {FC} from 'react';
import {Text, Box} from 'ink';
import {Card, Records, RecordType} from './components/index.js';

const mockData: RecordType[] = [
	{
		name: 'name text',
		description: 'description text',
	},
	{
		name: {text: 'name text', color: 'blue.bold', remark: 'name remark'},
		description: {
			text: 'descrption',
			remark: {
				text: 'description remark',
				color: 'bgYellow.black',
			},
		},
	},
];

const App: FC = () => (
	<Box flexDirection="column" borderStyle="classic">
		<Box justifyContent="center">
			<Text>
				{'Jiong '}
				<Text bold color="red">
					Huang
				</Text>
			</Text>
		</Box>

		<Card title="Education">
			<Records data={mockData} />
		</Card>

		<Card title="Education">
			<Records data={mockData} />
		</Card>
	</Box>
);

export default App;
