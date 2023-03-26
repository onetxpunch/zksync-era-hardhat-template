# hardhat-zksync-template


## Setup

```sh
git clone https://github.com/onetxpunch/zksync-era-hardhat-template
cd zksync-era-hardhat-template
yarn && echo 'DEPLOY_KEY=' > .env
```

## Usage

`yarn compile` Solidity contracts.

Edit `hardhat.config.ts`, `deploy/deploy.ts` and use `yarn deploy` for deploying, currently configured for the testnet.

## Testing

Uses `forge test` for testing. See https://getfoundry.sh to install.

```sh
forge test -vv
```

## References

https://era.zksync.io/docs/dev/building-on-zksync/hello-world.html#initializing-the-project-deploying-a-smart-contract - The template walkthrough

https://era.zksync.io/docs/dev/ - Important caveats about old versions