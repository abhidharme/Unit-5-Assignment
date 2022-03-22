import React from 'react';

import styled from 'styled-components';
const Primary = styled.button`
	background-color: #2490ff;
	color: white;
	padding: 8px 15px;
	border: none;
	border-radius: 3px;
`;
const Default = styled.button`
	background-color: white;
	color: black;
	border: 1px solid black;
	padding: 8px 15px;
	margin-left: 15px;
	border-radius: 3px;
`;
const Dashed = styled.button`
	background-color: white;
	color: black;
	border: 1px dashed black;
	padding: 8px 15px;
	margin-left: 15px;
	border-radius: 4px;
`;
const Text = styled.button`
	margin-left: 15px;
	border: none;
	background-color: white;
	color: black;
	padding: 8px 15px;
`;
const Link = styled.button`
	margin-left: 15px;
	background-color: white;
	color: #2490ff;
	border: none;
	padding: 8px 15px;
	
`;

const App = () => {
	return (
		<div className="App">
			<Primary>Primary Button</Primary>
			<Default>Default Button</Default>
			<Dashed>Dashed Button</Dashed>
			<Text>Text Button</Text>
			<Link>Link Button</Link>
		</div>
	);
};
export default App;
