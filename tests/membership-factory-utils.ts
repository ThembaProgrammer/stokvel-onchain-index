import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import { MembershipDeployed } from "../generated/MembershipFactory/MembershipFactory"

export function createMembershipDeployedEvent(
  membership: Address,
  emailHash: Bytes
): MembershipDeployed {
  let membershipDeployedEvent = changetype<MembershipDeployed>(newMockEvent())

  membershipDeployedEvent.parameters = new Array()

  membershipDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "membership",
      ethereum.Value.fromAddress(membership)
    )
  )
  membershipDeployedEvent.parameters.push(
    new ethereum.EventParam(
      "emailHash",
      ethereum.Value.fromFixedBytes(emailHash)
    )
  )

  return membershipDeployedEvent
}
