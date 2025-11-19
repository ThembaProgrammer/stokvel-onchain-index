import { MembershipDeployed as MembershipDeployedEvent } from "../generated/MembershipFactory/MembershipFactory"
import { MembershipDeployed } from "../generated/schema"

export function handleMembershipDeployed(event: MembershipDeployedEvent): void {
  let entity = new MembershipDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.membership = event.params.membership
  entity.emailHash = event.params.emailHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
