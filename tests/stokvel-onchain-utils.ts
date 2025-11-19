import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/stokvel-onchain/stokvel-onchain"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createApprovedToUseContributionEvent(
  voter: Address,
  operator: Address,
  voterWeight: BigInt,
  currentQuorum: BigInt,
  requiredQuorum: BigInt
): ApprovedToUseContribution {
  let approvedToUseContributionEvent =
    changetype<ApprovedToUseContribution>(newMockEvent())

  approvedToUseContributionEvent.parameters = new Array()

  approvedToUseContributionEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  approvedToUseContributionEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvedToUseContributionEvent.parameters.push(
    new ethereum.EventParam(
      "voterWeight",
      ethereum.Value.fromUnsignedBigInt(voterWeight)
    )
  )
  approvedToUseContributionEvent.parameters.push(
    new ethereum.EventParam(
      "currentQuorum",
      ethereum.Value.fromUnsignedBigInt(currentQuorum)
    )
  )
  approvedToUseContributionEvent.parameters.push(
    new ethereum.EventParam(
      "requiredQuorum",
      ethereum.Value.fromUnsignedBigInt(requiredQuorum)
    )
  )

  return approvedToUseContributionEvent
}

export function createContributionAssetSetEvent(
  asset: Address
): ContributionAssetSet {
  let contributionAssetSetEvent =
    changetype<ContributionAssetSet>(newMockEvent())

  contributionAssetSetEvent.parameters = new Array()

  contributionAssetSetEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )

  return contributionAssetSetEvent
}

export function createContributionDistributedEvent(
  member: Address,
  amount: BigInt
): ContributionDistributed {
  let contributionDistributedEvent =
    changetype<ContributionDistributed>(newMockEvent())

  contributionDistributedEvent.parameters = new Array()

  contributionDistributedEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )
  contributionDistributedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return contributionDistributedEvent
}

export function createContributionMadeEvent(
  member: Address,
  amount: BigInt
): ContributionMade {
  let contributionMadeEvent = changetype<ContributionMade>(newMockEvent())

  contributionMadeEvent.parameters = new Array()

  contributionMadeEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )
  contributionMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return contributionMadeEvent
}

export function createMembershipActivatedEvent(
  membershipAddress: Address,
  ipfsHash: string
): MembershipActivated {
  let membershipActivatedEvent = changetype<MembershipActivated>(newMockEvent())

  membershipActivatedEvent.parameters = new Array()

  membershipActivatedEvent.parameters.push(
    new ethereum.EventParam(
      "membershipAddress",
      ethereum.Value.fromAddress(membershipAddress)
    )
  )
  membershipActivatedEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )

  return membershipActivatedEvent
}

export function createMembershipTerminatedEvent(
  member: Address,
  ipfsHash: string
): MembershipTerminated {
  let membershipTerminatedEvent =
    changetype<MembershipTerminated>(newMockEvent())

  membershipTerminatedEvent.parameters = new Array()

  membershipTerminatedEvent.parameters.push(
    new ethereum.EventParam("member", ethereum.Value.fromAddress(member))
  )
  membershipTerminatedEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )

  return membershipTerminatedEvent
}

export function createMembershipTransferredEvent(
  newMember: Address,
  fromMember: Address,
  ipfsHash: string
): MembershipTransferred {
  let membershipTransferredEvent =
    changetype<MembershipTransferred>(newMockEvent())

  membershipTransferredEvent.parameters = new Array()

  membershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newMember", ethereum.Value.fromAddress(newMember))
  )
  membershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "fromMember",
      ethereum.Value.fromAddress(fromMember)
    )
  )
  membershipTransferredEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )

  return membershipTransferredEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createPermissionGrantedToUseContributionEvent(
  operator: Address,
  amount: BigInt,
  asset: Address,
  achievedQuorum: BigInt,
  requiredQuorum: BigInt
): PermissionGrantedToUseContribution {
  let permissionGrantedToUseContributionEvent =
    changetype<PermissionGrantedToUseContribution>(newMockEvent())

  permissionGrantedToUseContributionEvent.parameters = new Array()

  permissionGrantedToUseContributionEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  permissionGrantedToUseContributionEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  permissionGrantedToUseContributionEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  permissionGrantedToUseContributionEvent.parameters.push(
    new ethereum.EventParam(
      "achievedQuorum",
      ethereum.Value.fromUnsignedBigInt(achievedQuorum)
    )
  )
  permissionGrantedToUseContributionEvent.parameters.push(
    new ethereum.EventParam(
      "requiredQuorum",
      ethereum.Value.fromUnsignedBigInt(requiredQuorum)
    )
  )

  return permissionGrantedToUseContributionEvent
}

export function createQuorumUpdatedEvent(
  oldQuorum: BigInt,
  newQuorum: BigInt
): QuorumUpdated {
  let quorumUpdatedEvent = changetype<QuorumUpdated>(newMockEvent())

  quorumUpdatedEvent.parameters = new Array()

  quorumUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldQuorum",
      ethereum.Value.fromUnsignedBigInt(oldQuorum)
    )
  )
  quorumUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newQuorum",
      ethereum.Value.fromUnsignedBigInt(newQuorum)
    )
  )

  return quorumUpdatedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
