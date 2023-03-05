import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  Deposit,
  Initialized,
  OwnershipTransferred,
  Withdraw,
  WithdrawReady
} from "../generated/Pool/Pool"

export function createDepositEvent(
  poolIndex_: BigInt,
  who_: Address,
  amount_: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex_",
      ethereum.Value.fromUnsignedBigInt(poolIndex_)
    )
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("who_", ethereum.Value.fromAddress(who_))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam(
      "amount_",
      ethereum.Value.fromUnsignedBigInt(amount_)
    )
  )

  return depositEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

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

export function createWithdrawEvent(
  poolIndex_: BigInt,
  who_: Address,
  share_: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex_",
      ethereum.Value.fromUnsignedBigInt(poolIndex_)
    )
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("who_", ethereum.Value.fromAddress(who_))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("share_", ethereum.Value.fromUnsignedBigInt(share_))
  )

  return withdrawEvent
}

export function createWithdrawReadyEvent(
  poolIndex_: BigInt,
  who_: Address,
  requestIndex_: BigInt,
  share_: BigInt,
  amount_: BigInt
): WithdrawReady {
  let withdrawReadyEvent = changetype<WithdrawReady>(newMockEvent())

  withdrawReadyEvent.parameters = new Array()

  withdrawReadyEvent.parameters.push(
    new ethereum.EventParam(
      "poolIndex_",
      ethereum.Value.fromUnsignedBigInt(poolIndex_)
    )
  )
  withdrawReadyEvent.parameters.push(
    new ethereum.EventParam("who_", ethereum.Value.fromAddress(who_))
  )
  withdrawReadyEvent.parameters.push(
    new ethereum.EventParam(
      "requestIndex_",
      ethereum.Value.fromUnsignedBigInt(requestIndex_)
    )
  )
  withdrawReadyEvent.parameters.push(
    new ethereum.EventParam("share_", ethereum.Value.fromUnsignedBigInt(share_))
  )
  withdrawReadyEvent.parameters.push(
    new ethereum.EventParam(
      "amount_",
      ethereum.Value.fromUnsignedBigInt(amount_)
    )
  )

  return withdrawReadyEvent
}
