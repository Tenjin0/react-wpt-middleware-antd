import React from 'react';

import { Tabs } from 'antd';
import { getInitialState, RWMEnum } from "@wynd/redux-wps-middleware"


import UniversalTerminalContainer from "../containers/universalterminal"

const { TabPane } = Tabs;

function callback(key) {
	console.log(key);
}

export interface IAppComponentProps {

}

const AppComponent: React.FC<IAppComponentProps> = (props) => {

	const { plugins } = getInitialState();
	return (
		<Tabs defaultActiveKey="universalterminal" onChange={callback}>

			{plugins[RWMEnum.EPluginName.UNIVERSALTERMINAL] && <TabPane key="universalterminal" tab="UniversalTerminal">
				<UniversalTerminalContainer />
			</TabPane>}

		</Tabs>
	)
}

export default AppComponent
