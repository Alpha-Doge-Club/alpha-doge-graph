import {
  Deposit as DepositEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Withdraw as WithdrawEvent,
  WithdrawReady as WithdrawReadyEvent
} from "../generated/Pool/Pool"
import {
  Deposit,
  Initialized,
  OwnershipTransferred,
  Withdraw,
  WithdrawReady
} from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolIndex_ = event.params.poolIndex_
  entity.who_ = event.params.who_
  entity.amount_ = event.params.amount_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

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

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolIndex_ = event.params.poolIndex_
  entity.who_ = event.params.who_
  entity.share_ = event.params.share_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawReady(event: WithdrawReadyEvent): void {
  let entity = new WithdrawReady(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolIndex_ = event.params.poolIndex_
  entity.who_ = event.params.who_
  entity.requestIndex_ = event.params.requestIndex_
  entity.share_ = event.params.share_
  entity.amount_ = event.params.amount_

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
