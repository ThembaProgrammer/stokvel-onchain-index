# StokvelOnChain Subgraph

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![The Graph](https://img.shields.io/badge/The%20Graph-Protocol-blue)](https://thegraph.com/)
[![AssemblyScript](https://img.shields.io/badge/AssemblyScript-0.19-blue)](https://www.assemblyscript.org/)
[![Network](https://img.shields.io/badge/Network-Ethereum-purple)](https://ethereum.org/)

A Graph Protocol subgraph for indexing and querying StokvelOnChain smart contract events.

## Overview

This subgraph indexes all events from the StokvelOnChain ecosystem, including the main StokvelOnChain contract and MembershipFactory contract. It provides a GraphQL API to query historical data about stokvel memberships, contributions, governance, and distributions.

## Indexed Contracts

### StokvelOnChain Contract
Main contract managing the stokvel operations, governance, and distributions.

### MembershipFactory Contract
Factory contract for deploying individual Membership contracts.

## Indexed Events

### Membership Events
- **MembershipActivated** - When a new member joins the stokvel
- **MembershipTransferred** - When membership is transferred to a new address
- **MembershipTerminated** - When a membership is terminated
- **MembershipDeployed** - When a new Membership contract is created (from factory)

### Contribution Events
- **ContributionMade** - When a member makes a contribution
- **ContributionAssetSet** - When the contribution ERC20 token is set/updated
- **ContributionDistributed** - When funds are distributed to a member

### Governance Events
- **ApprovedToUseContribution** - When a member votes to approve an operator
- **PermissionGrantedToUseContribution** - When an operator is granted permission after quorum
- **QuorumUpdated** - When the stokvel quorum threshold is changed

### ERC1155 Token Events
- **TransferSingle** - Single token transfer (contribution shares)
- **TransferBatch** - Batch token transfer
- **ApprovalForAll** - Operator approval for all tokens
- **URI** - Token metadata URI update

### Administrative Events
- **OwnershipTransferred** - When contract ownership changes
- **Paused** - When contract is paused
- **Unpaused** - When contract is unpaused

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Graph CLI](https://thegraph.com/docs/en/developing/creating-a-subgraph/)

```bash
npm install -g @graphprotocol/graph-cli
```

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd stokvel-onchain-subgraph

# Install dependencies
npm install
```

## Configuration

Update `subgraph.yaml` with your contract addresses and network details:

```yaml
dataSources:
  - kind: ethereum/contract
    name: StokvelOnChain
    network: sepolia  # or your target network
    source:
      address: "0xYourStokvelContractAddress"
      abi: StokvelOnChain
      startBlock: 123456  # Block when contract was deployed
```

## Build & Deploy

### Authenticate with The Graph

```bash
# For hosted service
graph auth --product hosted-service <ACCESS_TOKEN>

# For decentralized network
graph auth --product subgraph-studio <DEPLOY_KEY>
```

### Build the Subgraph

```bash
# Generate types
npm run codegen

# Build the subgraph
npm run build
```

### Deploy the Subgraph

```bash
# Deploy to hosted service
graph deploy --product hosted-service <GITHUB_USERNAME>/<SUBGRAPH_NAME>

# Deploy to Subgraph Studio
graph deploy --studio <SUBGRAPH_NAME>
```

## Example Queries

### Get All Active Members

```graphql
{
  membershipActivateds(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
    id
    membershipAddress
    ipfsHash
    blockTimestamp
    transactionHash
  }
}
```

### Get Recent Contributions

```graphql
{
  contributionMades(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
    id
    member
    amount
    blockTimestamp
    transactionHash
  }
}
```

### Get Governance Approvals

```graphql
{
  approvedToUseContributions(where: { operator: "0x..." }) {
    id
    voter
    operator
    voterWeight
    currentQuorum
    requiredQuorum
    blockTimestamp
  }
}
```

### Get Distribution History

```graphql
{
  contributionDistributeds(first: 20, orderBy: blockTimestamp, orderDirection: desc) {
    id
    member
    amount
    blockTimestamp
    transactionHash
  }
}
```

### Get Member Token Transfers

```graphql
{
  transferSingles(where: { to: "0xMemberAddress" }) {
    id
    from
    to
    internal_id
    value
    blockTimestamp
  }
}
```

### Get Membership Transfers

```graphql
{
  membershipTransferreds(orderBy: blockTimestamp, orderDirection: desc) {
    id
    newMember
    fromMember
    ipfsHash
    blockTimestamp
  }
}
```

## Schema Entities

The subgraph creates the following entities (see `schema.graphql`):

- **MembershipDeployed** - Membership contract deployments
- **MembershipActivated** - Active memberships
- **MembershipTransferred** - Membership transfers
- **MembershipTerminated** - Terminated memberships
- **ContributionMade** - All contributions
- **ContributionDistributed** - All distributions
- **ApprovedToUseContribution** - Governance votes
- **PermissionGrantedToUseContribution** - Granted permissions
- **TransferSingle** - Individual token transfers
- **TransferBatch** - Batch token transfers
- And more...

## Development

### Local Testing

```bash
# Start local Graph Node (requires Docker)
npm run graph-node

# Create local subgraph
npm run create-local

# Deploy to local node
npm run deploy-local
```

### Update Mappings

Edit files in `src/`:
- `stokvel-onchain.ts` - Main contract event handlers
- `membership-factory.ts` - Factory contract event handlers

After changes:
```bash
npm run codegen
npm run build
```

## Network Support

This subgraph can be deployed to:
- **Ethereum Mainnet**
- **Sepolia Testnet**
- **Goerli Testnet**
- **Polygon**
- **Optimism**
- **Arbitrum**
- **Base**

Update the `network` field in `subgraph.yaml` for your target network.

## Querying the Subgraph

Once deployed, you can query your subgraph using:

- **GraphQL Playground**: Available in Subgraph Studio or Hosted Service
- **HTTP Endpoint**: `https://api.thegraph.com/subgraphs/name/<GITHUB_USERNAME>/<SUBGRAPH_NAME>`
- **JavaScript/TypeScript**: Using `@apollo/client` or similar GraphQL clients

### Example with Apollo Client

```typescript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/<USERNAME>/<SUBGRAPH>',
  cache: new InMemoryCache(),
});

const GET_CONTRIBUTIONS = gql`
  query GetContributions {
    contributionMades(first: 10) {
      member
      amount
      blockTimestamp
    }
  }
`;

const { data } = await client.query({ query: GET_CONTRIBUTIONS });
```

## Useful Commands

```bash
# Generate types from schema and ABIs
npm run codegen

# Build the subgraph
npm run build

# Deploy to hosted service
npm run deploy

# Test the subgraph locally
npm run test
```

## Resources

- [The Graph Documentation](https://thegraph.com/docs/)
- [Subgraph Studio](https://thegraph.com/studio/)
- [AssemblyScript Documentation](https://www.assemblyscript.org/)
- [StokvelOnChain Contract Repository](link-to-contract-repo)

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License

## Support

For issues and questions:
- Open an issue in this repository
- Check [The Graph Discord](https://discord.gg/graphprotocol)
- Review [The Graph Documentation](https://thegraph.com/docs/)

---

<div align="center">

**Built with ❤️ for the Web3 Community**

*Empowering communities through decentralized finance*

[Website](https://yourproject.com) • [Documentation](./docs) • [Twitter](https://twitter.com/yourproject) • [Discord](https://discord.gg/yourserver)

</div>

---

**Note**: Ensure your contract addresses and start blocks are correctly configured in `subgraph.yaml` before deploying.