import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { MembershipDeployed } from "../generated/schema"
import { MembershipDeployed as MembershipDeployedEvent } from "../generated/MembershipFactory/MembershipFactory"
import { handleMembershipDeployed } from "../src/membership-factory"
import { createMembershipDeployedEvent } from "./membership-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#tests-structure

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let membership = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let emailHash = Bytes.fromI32(1234567890)
    let newMembershipDeployedEvent = createMembershipDeployedEvent(
      membership,
      emailHash
    )
    handleMembershipDeployed(newMembershipDeployedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#write-a-unit-test

  test("MembershipDeployed created and stored", () => {
    assert.entityCount("MembershipDeployed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MembershipDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "membership",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MembershipDeployed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "emailHash",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/subgraphs/developing/creating/unit-testing-framework/#asserts
  })
})
