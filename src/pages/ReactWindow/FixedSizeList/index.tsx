import { FixedSizeList as List } from "react-window";

import SingleComponent from "../Component/SingleComponent";

const FixedSizeList = () => {
	const itemSize = 125;
	const totalItems = 1000;
	const itemPerScroll = 3;
	const visibleHeight = itemSize * itemPerScroll;

	return (
		<List
			width="100%"
			height={visibleHeight}
			itemCount={totalItems}
			itemSize={itemSize}
		>
			{SingleComponent}
		</List>
	);
};

export default FixedSizeList;
