import React, { useState, useEffect } from "react";

const Tab = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleClick = (index) => {
		setActiveTab(index);
	};

	const handleKeyDown = (event, index) => {
		switch (event.key) {
			case "ArrowLeft":
			case "ArrowUp":
				setActiveTab((activeTab + 2) % 3);
				break;
			case "ArrowRight":
			case "ArrowDown":
				setActiveTab((activeTab + 1) % 3);
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		const firstTabItem = document.querySelector("[role='tab']");
		firstTabItem.focus();
	}, []);

	return (
		<div className='bg-white rounded-lg shadow text-black'>
			<ul className='flex border-b' role='tablist'>
				<TabItem
					label='Tab 1'
					index={0}
					activeTab={activeTab}
					handleClick={handleClick}
					handleKeyDown={handleKeyDown}
				/>
				<TabItem
					label='Tab 2'
					index={1}
					activeTab={activeTab}
					handleClick={handleClick}
					handleKeyDown={handleKeyDown}
				/>
				<TabItem
					label='Tab 3'
					index={2}
					activeTab={activeTab}
					handleClick={handleClick}
					handleKeyDown={handleKeyDown}
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

const TabItem = ({ label, index, activeTab, handleClick, handleKeyDown }) => {
	return (
		<li
			className={`p-3 font-medium ${
				activeTab === index ? "bg-gray-200" : "hover:bg-gray-100"
			}`}
			onClick={() => handleClick(index)}
			onKeyDown={(event) => handleKeyDown(event, index)}
			role='tab'
			aria-selected={activeTab === index}
			tabIndex={activeTab === index ? 0 : -1}
			aria-controls={`tab-panel-${index}`}>
			{label}
		</li>
	);
};

const TabPanel = ({ activeTab, index, children }) => {
	return activeTab === index ? (
		<div className='p-5' role='tabpanel' id={`tab-panel-${index}`}>
			{children}
		</div>
	) : null;
};

export default Tab;
