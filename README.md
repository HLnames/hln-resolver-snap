# Hyperliquid Names Resolver - Metamask Snap
This MetaMask Snap lets users to resolve their `.hl` names on HyperEVM. See https://hlnames.xyz for more details.

## Snap installation
To install Hyperliquid Names Resolver, see `<link to snap install page>`

## Details
This snap uses the Hyperliquid Names REST API endpoint for resolution: https://hyperliquid-names.gitbook.io/hyperliquid-names/dapp-integration/dapp-integration#rest-api.

The `snap.manifest.json` restricts this snap to only run on HyperEVM (chainId: 999) and the `.hl` TLD.

## Development
`yarn install & yarn build`
See https://docs.metamask.io/snaps/ for more more details.

Fix the manifest with `yarn mm-snap manifest --fix`

## Testing
`yarn test`