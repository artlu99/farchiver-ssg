import {
  DynamicContextProvider,
  SortWallets,
} from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { Route, Switch } from 'wouter'
import LayoutMainPage from 'components/LayoutMainPage'
import Private from 'components/Private'
import Uses from 'components/Uses'

const environmentId = import.meta.env.VITE_DYNAMIC_ENVIRONMENT_ID || ''

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: environmentId,
      walletConnectors: [EthereumWalletConnectors],
      walletsFilter: SortWallets([
        'rainbow',
        'coinbase',
        'dawn',
        'rabby',
        'frame',
        'metamask',
      ]),
    }}
  >
    <Switch>
      <Route path="/private" component={Private} />
      <Route path="/uses" component={Uses} />
      <Route component={LayoutMainPage} />
    </Switch>
  </DynamicContextProvider>
)

export default App
