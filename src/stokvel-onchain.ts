import {
  ApprovalForAll as ApprovalForAllEvent,
  ApprovedToUseContribution as ApprovedToUseContributionEvent,
  ContributionAssetSet as ContributionAssetSetEvent,
  ContributionDistributed as ContributionDistributedEvent,
  ContributionMade as ContributionMadeEvent,
  MembershipActivated as MembershipActivatedEvent,
  MembershipTerminated as MembershipTerminatedEvent,
  MembershipTransferred as MembershipTransferredEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  PermissionGrantedToUseContribution as PermissionGrantedToUseContributionEvent,
  QuorumUpdated as QuorumUpdatedEvent,
  TransferBatch as TransferBatchEvent,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent,
  Unpaused as UnpausedEvent
} from "../generated/stokvel-onchain/stokvel_onchain"
import {
  ApprovalForAll,
  ApprovedToUseContribution,
  ContributionAssetSet,
  ContributionDistributed,
  ContributionMade,
  MembershipActivated,
  MembershipTerminated,
  MembershipTransferred,
  OwnershipTransferred,
  Paused,
  PermissionGrantedToUseContribution,
  QuorumUpdated,
  TransferBatch,
  TransferSingle,
  URI,
  Unpaused
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovedToUseContribution(
  event: ApprovedToUseContributionEvent
): void {
  let entity = new ApprovedToUseContribution(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter = event.params.voter
  entity.operator = event.params.operator
  entity.voterWeight = event.params.voterWeight
  entity.currentQuorum = event.params.currentQuorum
  entity.requiredQuorum = event.params.requiredQuorum

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContributionAssetSet(
  event: ContributionAssetSetEvent
): void {
  let entity = new ContributionAssetSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.asset = event.params.asset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContributionDistributed(
  event: ContributionDistributedEvent
): void {
  let entity = new ContributionDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.member = event.params.member
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContributionMade(event: ContributionMadeEvent): void {
  let entity = new ContributionMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.member = event.params.member
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMembershipActivated(
  event: MembershipActivatedEvent
): void {
  let entity = new MembershipActivated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.membershipAddress = event.params.membershipAddress
  entity.ipfsHash = event.params.ipfsHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMembershipTerminated(
  event: MembershipTerminatedEvent
): void {
  let entity = new MembershipTerminated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.member = event.params.member
  entity.ipfsHash = event.params.ipfsHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMembershipTransferred(
  event: MembershipTransferredEvent
): void {
  let entity = new MembershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newMember = event.params.newMember
  entity.fromMember = event.params.fromMember
  entity.ipfsHash = event.params.ipfsHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermissionGrantedToUseContribution(
  event: PermissionGrantedToUseContributionEvent
): void {
  let entity = new PermissionGrantedToUseContribution(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.amount = event.params.amount
  entity.asset = event.params.asset
  entity.achievedQuorum = event.params.achievedQuorum
  entity.requiredQuorum = event.params.requiredQuorum

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuorumUpdated(event: QuorumUpdatedEvent): void {
  let entity = new QuorumUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldQuorum = event.params.oldQuorum
  entity.newQuorum = event.params.newQuorum

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferBatch(event: TransferBatchEvent): void {
  let entity = new TransferBatch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.ids = event.params.ids
  entity.values = event.params.values

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  let entity = new TransferSingle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.internal_id = event.params.id
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleURI(event: URIEvent): void {
  let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.value = event.params.value
  entity.internal_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
