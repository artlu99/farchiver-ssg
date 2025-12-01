import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import LayoutMainPage from "components/LayoutMainPage";
import Uses from "components/Uses";
import { Route, Switch } from "wouter";

const environmentId = import.meta.env.VITE_DYNAMIC_ENVIRONMENT_ID || "";

const App = () => (
	<DynamicContextProvider
		settings={{
			environmentId: environmentId,
		}}
	>
		<Switch>
			<Route path="/uses" component={Uses} />
			<Route component={LayoutMainPage} />
		</Switch>
	</DynamicContextProvider>
);

export default App;
