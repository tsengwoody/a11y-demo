import React, { useState } from "react";

const Tab = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleClick = (index) => {
		setActiveTab(index);
	};

	return (
		<div className='bg-white rounded-lg shadow text-black'>
			<ul className='flex border-b'>
				<TabItem
					label='Tab 1'
					index={0}
					activeTab={activeTab}
					handleClick={handleClick}
				/>
				<TabItem
					label='Tab 2'
					index={1}
					activeTab={activeTab}
					handleClick={handleClick}
				/>
				<TabItem
					label='Tab 3'
					index={2}
					activeTab={activeTab}
					handleClick={handleClick}
				/>
			</ul>
			<TabPanel activeTab={activeTab} index={0}>
				Tab 1 Content
			</TabPanel>
			<TabPanel activeTab={activeTab} index={1}>
				Tab 2 Content
			</TabPanel>
			<TabPanel activeTab={activeTab} index={2}>
				Tab 3 Content
			</TabPanel>
		</div>
	);
};

const TabItem = ({ label, index, activeTab, handleClick }) => {
	return (
		<li
			className={`p-3 font-medium ${
				activeTab === index ? "bg-gray-200" : "hover:bg-gray-100"
			}`}
			onClick={() => handleClick(index)}>
			{label}
		</li>
	);
};

const TabPanel = ({ activeTab, index, children }) => {
	return activeTab === index ? <div className='p-5'>{children}</div> : null;
};

export default Tab;
