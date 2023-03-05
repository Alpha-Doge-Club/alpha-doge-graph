// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get poolIndex_(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get who_(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount_(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get poolIndex_(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get who_(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get share_(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawReady extends ethereum.Event {
  get params(): WithdrawReady__Params {
    return new WithdrawReady__Params(this);
  }
}

export class WithdrawReady__Params {
  _event: WithdrawReady;

  constructor(event: WithdrawReady) {
    this._event = event;
  }

  get poolIndex_(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get who_(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get requestIndex_(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get share_(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get amount_(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Pool__getPoolByAdminResultValue0Struct extends ethereum.Tuple {
  get totalShare(): BigInt {
    return this[0].toBigInt();
  }

  get pendingShare(): BigInt {
    return this[1].toBigInt();
  }

  get amountPerShare(): BigInt {
    return this[2].toBigInt();
  }

  get wallet(): Address {
    return this[3].toAddress();
  }

  get lastTime(): BigInt {
    return this[4].toBigInt();
  }

  get waitDays(): BigInt {
    return this[5].toBigInt();
  }

  get gapDays(): BigInt {
    return this[6].toBigInt();
  }

  get openDays(): BigInt {
    return this[7].toBigInt();
  }

  get admin(): Address {
    return this[8].toAddress();
  }

  get name(): string {
    return this[9].toString();
  }
}

export class Pool__getPoolByIndexResultValue0Struct extends ethereum.Tuple {
  get totalShare(): BigInt {
    return this[0].toBigInt();
  }

  get pendingShare(): BigInt {
    return this[1].toBigInt();
  }

  get amountPerShare(): BigInt {
    return this[2].toBigInt();
  }

  get wallet(): Address {
    return this[3].toAddress();
  }

  get lastTime(): BigInt {
    return this[4].toBigInt();
  }

  get waitDays(): BigInt {
    return this[5].toBigInt();
  }

  get gapDays(): BigInt {
    return this[6].toBigInt();
  }

  get openDays(): BigInt {
    return this[7].toBigInt();
  }

  get admin(): Address {
    return this[8].toAddress();
  }

  get name(): string {
    return this[9].toString();
  }
}

export class Pool__poolInfoArrayResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: Address;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: Address;
  value9: string;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: Address,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: Address,
    value9: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromString(this.value9));
    return map;
  }

  getTotalShare(): BigInt {
    return this.value0;
  }

  getPendingShare(): BigInt {
    return this.value1;
  }

  getAmountPerShare(): BigInt {
    return this.value2;
  }

  getWallet(): Address {
    return this.value3;
  }

  getLastTime(): BigInt {
    return this.value4;
  }

  getWaitDays(): BigInt {
    return this.value5;
  }

  getGapDays(): BigInt {
    return this.value6;
  }

  getOpenDays(): BigInt {
    return this.value7;
  }

  getAdmin(): Address {
    return this.value8;
  }

  getName(): string {
    return this.value9;
  }
}

export class Pool__userInfoMapResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getShare(): BigInt {
    return this.value0;
  }

  getPendingShare(): BigInt {
    return this.value1;
  }
}

export class Pool__withdrawRequestMapResult {
  value0: BigInt;
  value1: BigInt;
  value2: boolean;

  constructor(value0: BigInt, value1: BigInt, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }

  getShare(): BigInt {
    return this.value0;
  }

  getTime(): BigInt {
    return this.value1;
  }

  getExecuted(): boolean {
    return this.value2;
  }
}

export class Pool extends ethereum.SmartContract {
  static bind(address: Address): Pool {
    return new Pool("Pool", address);
  }

  baseToken(): Address {
    let result = super.call("baseToken", "baseToken():(address)", []);

    return result[0].toAddress();
  }

  try_baseToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("baseToken", "baseToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getNow(): BigInt {
    let result = super.call("getNow", "getNow():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getNow(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNow", "getNow():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoolByAdmin(admin_: Address): Pool__getPoolByAdminResultValue0Struct {
    let result = super.call(
      "getPoolByAdmin",
      "getPoolByAdmin(address):((uint256,uint256,uint256,address,uint256,uint256,uint256,uint256,address,string))",
      [ethereum.Value.fromAddress(admin_)]
    );

    return changetype<Pool__getPoolByAdminResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getPoolByAdmin(
    admin_: Address
  ): ethereum.CallResult<Pool__getPoolByAdminResultValue0Struct> {
    let result = super.tryCall(
      "getPoolByAdmin",
      "getPoolByAdmin(address):((uint256,uint256,uint256,address,uint256,uint256,uint256,uint256,address,string))",
      [ethereum.Value.fromAddress(admin_)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Pool__getPoolByAdminResultValue0Struct>(value[0].toTuple())
    );
  }

  getPoolByIndex(poolIndex_: BigInt): Pool__getPoolByIndexResultValue0Struct {
    let result = super.call(
      "getPoolByIndex",
      "getPoolByIndex(uint256):((uint256,uint256,uint256,address,uint256,uint256,uint256,uint256,address,string))",
      [ethereum.Value.fromUnsignedBigInt(poolIndex_)]
    );

    return changetype<Pool__getPoolByIndexResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getPoolByIndex(
    poolIndex_: BigInt
  ): ethereum.CallResult<Pool__getPoolByIndexResultValue0Struct> {
    let result = super.tryCall(
      "getPoolByIndex",
      "getPoolByIndex(uint256):((uint256,uint256,uint256,address,uint256,uint256,uint256,uint256,address,string))",
      [ethereum.Value.fromUnsignedBigInt(poolIndex_)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Pool__getPoolByIndexResultValue0Struct>(value[0].toTuple())
    );
  }

  getPoolInfoArrayLength(): BigInt {
    let result = super.call(
      "getPoolInfoArrayLength",
      "getPoolInfoArrayLength():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPoolInfoArrayLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPoolInfoArrayLength",
      "getPoolInfoArrayLength():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isTest(): boolean {
    let result = super.call("isTest", "isTest():(bool)", []);

    return result[0].toBoolean();
  }

  try_isTest(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isTest", "isTest():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolIndexPlusOneMap(param0: Address): BigInt {
    let result = super.call(
      "poolIndexPlusOneMap",
      "poolIndexPlusOneMap(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_poolIndexPlusOneMap(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "poolIndexPlusOneMap",
      "poolIndexPlusOneMap(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  poolInfoArray(param0: BigInt): Pool__poolInfoArrayResult {
    let result = super.call(
      "poolInfoArray",
      "poolInfoArray(uint256):(uint256,uint256,uint256,address,uint256,uint256,uint256,uint256,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Pool__poolInfoArrayResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toAddress(),
      result[9].toString()
    );
  }

  try_poolInfoArray(
    param0: BigInt
  ): ethereum.CallResult<Pool__poolInfoArrayResult> {
    let result = super.tryCall(
      "poolInfoArray",
      "poolInfoArray(uint256):(uint256,uint256,uint256,address,uint256,uint256,uint256,uint256,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__poolInfoArrayResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toAddress(),
        value[9].toString()
      )
    );
  }

  positionRouter(): Address {
    let result = super.call("positionRouter", "positionRouter():(address)", []);

    return result[0].toAddress();
  }

  try_positionRouter(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "positionRouter",
      "positionRouter():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reader(): Address {
    let result = super.call("reader", "reader():(address)", []);

    return result[0].toAddress();
  }

  try_reader(): ethereum.CallResult<Address> {
    let result = super.tryCall("reader", "reader():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  router(): Address {
    let result = super.call("router", "router():(address)", []);

    return result[0].toAddress();
  }

  try_router(): ethereum.CallResult<Address> {
    let result = super.tryCall("router", "router():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timeExtra(): BigInt {
    let result = super.call("timeExtra", "timeExtra():(uint256)", []);

    return result[0].toBigInt();
  }

  try_timeExtra(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("timeExtra", "timeExtra():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userInfoMap(param0: BigInt, param1: Address): Pool__userInfoMapResult {
    let result = super.call(
      "userInfoMap",
      "userInfoMap(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new Pool__userInfoMapResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_userInfoMap(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<Pool__userInfoMapResult> {
    let result = super.tryCall(
      "userInfoMap",
      "userInfoMap(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__userInfoMapResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  withdrawRequestCount(poolIndex_: BigInt, who_: Address): BigInt {
    let result = super.call(
      "withdrawRequestCount",
      "withdrawRequestCount(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(poolIndex_),
        ethereum.Value.fromAddress(who_)
      ]
    );

    return result[0].toBigInt();
  }

  try_withdrawRequestCount(
    poolIndex_: BigInt,
    who_: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdrawRequestCount",
      "withdrawRequestCount(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(poolIndex_),
        ethereum.Value.fromAddress(who_)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdrawRequestMap(
    param0: BigInt,
    param1: Address,
    param2: BigInt
  ): Pool__withdrawRequestMapResult {
    let result = super.call(
      "withdrawRequestMap",
      "withdrawRequestMap(uint256,address,uint256):(uint256,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return new Pool__withdrawRequestMapResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBoolean()
    );
  }

  try_withdrawRequestMap(
    param0: BigInt,
    param1: Address,
    param2: BigInt
  ): ethereum.CallResult<Pool__withdrawRequestMapResult> {
    let result = super.tryCall(
      "withdrawRequestMap",
      "withdrawRequestMap(uint256,address,uint256):(uint256,uint256,bool)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Pool__withdrawRequestMapResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBoolean()
      )
    );
  }
}

export class CreatePoolCall extends ethereum.Call {
  get inputs(): CreatePoolCall__Inputs {
    return new CreatePoolCall__Inputs(this);
  }

  get outputs(): CreatePoolCall__Outputs {
    return new CreatePoolCall__Outputs(this);
  }
}

export class CreatePoolCall__Inputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get waitDays_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get gapDays_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get openDays_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get name_(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class CreatePoolCall__Outputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get poolIndex_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get baseToken_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isTest_(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get positionRouter_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get router_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get reader_(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetTimeExtraCall extends ethereum.Call {
  get inputs(): SetTimeExtraCall__Inputs {
    return new SetTimeExtraCall__Inputs(this);
  }

  get outputs(): SetTimeExtraCall__Outputs {
    return new SetTimeExtraCall__Outputs(this);
  }
}

export class SetTimeExtraCall__Inputs {
  _call: SetTimeExtraCall;

  constructor(call: SetTimeExtraCall) {
    this._call = call;
  }

  get timeExtra_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTimeExtraCall__Outputs {
  _call: SetTimeExtraCall;

  constructor(call: SetTimeExtraCall) {
    this._call = call;
  }
}

export class StartPoolCall extends ethereum.Call {
  get inputs(): StartPoolCall__Inputs {
    return new StartPoolCall__Inputs(this);
  }

  get outputs(): StartPoolCall__Outputs {
    return new StartPoolCall__Outputs(this);
  }
}

export class StartPoolCall__Inputs {
  _call: StartPoolCall;

  constructor(call: StartPoolCall) {
    this._call = call;
  }
}

export class StartPoolCall__Outputs {
  _call: StartPoolCall;

  constructor(call: StartPoolCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get poolIndex_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get share_(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawReadyCall extends ethereum.Call {
  get inputs(): WithdrawReadyCall__Inputs {
    return new WithdrawReadyCall__Inputs(this);
  }

  get outputs(): WithdrawReadyCall__Outputs {
    return new WithdrawReadyCall__Outputs(this);
  }
}

export class WithdrawReadyCall__Inputs {
  _call: WithdrawReadyCall;

  constructor(call: WithdrawReadyCall) {
    this._call = call;
  }

  get poolIndex_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get who_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get requestIndex_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class WithdrawReadyCall__Outputs {
  _call: WithdrawReadyCall;

  constructor(call: WithdrawReadyCall) {
    this._call = call;
  }
}
