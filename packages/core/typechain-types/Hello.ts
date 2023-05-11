/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Hello {
  export type EventStructStruct = {
    message: PromiseOrValue<string>;
    timestamp: PromiseOrValue<BigNumberish>;
  };

  export type EventStructStructOutput = [string, BigNumber] & {
    message: string;
    timestamp: BigNumber;
  };
}

export interface HelloInterface extends utils.Interface {
  functions: {
    "message(string)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "message"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "message",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;

  events: {
    "MessageEvent(string)": EventFragment;
    "StructEvent(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MessageEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StructEvent"): EventFragment;
}

export interface MessageEventEventObject {
  message: string;
}
export type MessageEventEvent = TypedEvent<[string], MessageEventEventObject>;

export type MessageEventEventFilter = TypedEventFilter<MessageEventEvent>;

export interface StructEventEventObject {
  eventStruct: Hello.EventStructStructOutput;
}
export type StructEventEvent = TypedEvent<
  [Hello.EventStructStructOutput],
  StructEventEventObject
>;

export type StructEventEventFilter = TypedEventFilter<StructEventEvent>;

export interface Hello extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HelloInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    message(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  message(
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    message(
      _message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "MessageEvent(string)"(message?: null): MessageEventEventFilter;
    MessageEvent(message?: null): MessageEventEventFilter;

    "StructEvent(tuple)"(eventStruct?: null): StructEventEventFilter;
    StructEvent(eventStruct?: null): StructEventEventFilter;
  };

  estimateGas: {
    message(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    message(
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
