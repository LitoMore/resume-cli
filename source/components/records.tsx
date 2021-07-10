import React, {FC} from 'react';
import {Box, Text} from 'ink';
import ColorPipe from 'ink-color-pipe';

type TextType =
	| string
	| {
			text: string;
			color?: string;
	  };

export type RecordType = {
	name?: TextType & {remark?: TextType};
	description?: TextType & {remark?: TextType};
};

type RecordProps = RecordType & {
	marginTop?: number;
};

type RecordsProps = {
	data: RecordType[];
};

const getText = (t: TextType) => (typeof t === 'string' ? t : t.text);
const getColor = (t: TextType) => (typeof t === 'string' ? t : t.color);

const Record: FC<RecordProps> = ({name, description, marginTop}) => (
	<>
		<Box justifyContent="space-between" marginTop={marginTop}>
			{name && <Text bold>{getText(name)}</Text>}
			{name?.remark && (
				<Text>
					<ColorPipe styles={getColor(name.remark)}>
						{getText(name.remark)}
					</ColorPipe>
				</Text>
			)}
		</Box>
		<Box justifyContent="space-between">
			{description && <Text>{getText(description)}</Text>}
			{description?.remark && (
				<Text>
					<ColorPipe styles={getColor(description.remark)}>
						{getText(description.remark)}
					</ColorPipe>
				</Text>
			)}
		</Box>
	</>
);

const Records: FC<RecordsProps> = ({data}) => (
	<>
		{data.map((record, index) => (
			<Record
				key={`record-${String(index)}`}
				{...record}
				marginTop={index > 0 ? 1 : 0}
			/>
		))}
	</>
);

export default Records;
