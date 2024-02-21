// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file services/omnichannel/asm/v1alpha1/entities.proto (package services.omnichannel.asm.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AsmSession, ListAsmUserDetails, VoiceRegistration, VoiceSession } from "../entities/v1alpha1/session_pb.js";

/**
 * @generated from message services.omnichannel.asm.v1alpha1.CreateSessionReq
 */
export declare class CreateSessionReq extends Message<CreateSessionReq> {
  constructor(data?: PartialMessage<CreateSessionReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.CreateSessionReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSessionReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSessionReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSessionReq;

  static equals(a: CreateSessionReq | PlainMessage<CreateSessionReq> | undefined, b: CreateSessionReq | PlainMessage<CreateSessionReq> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.CreateSessionRes
 */
export declare class CreateSessionRes extends Message<CreateSessionRes> {
  /**
   * asm session
   *
   * @generated from field: services.omnichannel.asm.entities.v1alpha1.AsmSession asm_session = 1;
   */
  asmSession?: AsmSession;

  constructor(data?: PartialMessage<CreateSessionRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.CreateSessionRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSessionRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSessionRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSessionRes;

  static equals(a: CreateSessionRes | PlainMessage<CreateSessionRes> | undefined, b: CreateSessionRes | PlainMessage<CreateSessionRes> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.EndSessionReq
 */
export declare class EndSessionReq extends Message<EndSessionReq> {
  /**
   * the asm session sid to be ended
   *
   * @generated from field: int64 asm_session_sid = 1;
   */
  asmSessionSid: bigint;

  /**
   * reason why session is ended
   *
   * @generated from field: string reason = 2;
   */
  reason: string;

  constructor(data?: PartialMessage<EndSessionReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.EndSessionReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EndSessionReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EndSessionReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EndSessionReq;

  static equals(a: EndSessionReq | PlainMessage<EndSessionReq> | undefined, b: EndSessionReq | PlainMessage<EndSessionReq> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.EndSessionRes
 */
export declare class EndSessionRes extends Message<EndSessionRes> {
  constructor(data?: PartialMessage<EndSessionRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.EndSessionRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EndSessionRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EndSessionRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EndSessionRes;

  static equals(a: EndSessionRes | PlainMessage<EndSessionRes> | undefined, b: EndSessionRes | PlainMessage<EndSessionRes> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.GetCurrentSessionReq
 */
export declare class GetCurrentSessionReq extends Message<GetCurrentSessionReq> {
  constructor(data?: PartialMessage<GetCurrentSessionReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.GetCurrentSessionReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCurrentSessionReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCurrentSessionReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCurrentSessionReq;

  static equals(a: GetCurrentSessionReq | PlainMessage<GetCurrentSessionReq> | undefined, b: GetCurrentSessionReq | PlainMessage<GetCurrentSessionReq> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.GetCurrentSessionRes
 */
export declare class GetCurrentSessionRes extends Message<GetCurrentSessionRes> {
  /**
   * current asm session
   *
   * @generated from field: services.omnichannel.asm.entities.v1alpha1.AsmSession asm_session = 1;
   */
  asmSession?: AsmSession;

  constructor(data?: PartialMessage<GetCurrentSessionRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.GetCurrentSessionRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCurrentSessionRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCurrentSessionRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCurrentSessionRes;

  static equals(a: GetCurrentSessionRes | PlainMessage<GetCurrentSessionRes> | undefined, b: GetCurrentSessionRes | PlainMessage<GetCurrentSessionRes> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.EnableVoiceReq
 */
export declare class EnableVoiceReq extends Message<EnableVoiceReq> {
  /**
   * asm session sid to start voice
   *
   * @generated from field: int64 asm_session_sid = 1;
   */
  asmSessionSid: bigint;

  /**
   * hunt group voice session will be assigned to
   *
   * @generated from field: int64 hunt_group_sid = 2;
   */
  huntGroupSid: bigint;

  /**
   * Skills voice session is going to requere.
   *
   * @generated from field: map<string, int64> skills = 3;
   */
  skills: { [key: string]: bigint };

  constructor(data?: PartialMessage<EnableVoiceReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.EnableVoiceReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableVoiceReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableVoiceReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableVoiceReq;

  static equals(a: EnableVoiceReq | PlainMessage<EnableVoiceReq> | undefined, b: EnableVoiceReq | PlainMessage<EnableVoiceReq> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.EnableVoiceRes
 */
export declare class EnableVoiceRes extends Message<EnableVoiceRes> {
  /**
   * voice session that was enabled
   *
   * @generated from field: services.omnichannel.asm.entities.v1alpha1.VoiceSession voice_session = 1;
   */
  voiceSession?: VoiceSession;

  /**
   * the registration with new voice session
   *
   * @generated from field: services.omnichannel.asm.entities.v1alpha1.VoiceRegistration voice_registration = 2;
   */
  voiceRegistration?: VoiceRegistration;

  constructor(data?: PartialMessage<EnableVoiceRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.EnableVoiceRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnableVoiceRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnableVoiceRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnableVoiceRes;

  static equals(a: EnableVoiceRes | PlainMessage<EnableVoiceRes> | undefined, b: EnableVoiceRes | PlainMessage<EnableVoiceRes> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.DisableVoiceReq
 */
export declare class DisableVoiceReq extends Message<DisableVoiceReq> {
  /**
   * asm session to have voice disabled.
   *
   * @generated from field: int64 asm_session_sid = 1;
   */
  asmSessionSid: bigint;

  constructor(data?: PartialMessage<DisableVoiceReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.DisableVoiceReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DisableVoiceReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DisableVoiceReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DisableVoiceReq;

  static equals(a: DisableVoiceReq | PlainMessage<DisableVoiceReq> | undefined, b: DisableVoiceReq | PlainMessage<DisableVoiceReq> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.DisableVoiceRes
 */
export declare class DisableVoiceRes extends Message<DisableVoiceRes> {
  constructor(data?: PartialMessage<DisableVoiceRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.DisableVoiceRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DisableVoiceRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DisableVoiceRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DisableVoiceRes;

  static equals(a: DisableVoiceRes | PlainMessage<DisableVoiceRes> | undefined, b: DisableVoiceRes | PlainMessage<DisableVoiceRes> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.ListAsmUserDetailsReq
 */
export declare class ListAsmUserDetailsReq extends Message<ListAsmUserDetailsReq> {
  constructor(data?: PartialMessage<ListAsmUserDetailsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.ListAsmUserDetailsReq";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAsmUserDetailsReq;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAsmUserDetailsReq;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAsmUserDetailsReq;

  static equals(a: ListAsmUserDetailsReq | PlainMessage<ListAsmUserDetailsReq> | undefined, b: ListAsmUserDetailsReq | PlainMessage<ListAsmUserDetailsReq> | undefined): boolean;
}

/**
 * @generated from message services.omnichannel.asm.v1alpha1.ListAsmUserDetailsRes
 */
export declare class ListAsmUserDetailsRes extends Message<ListAsmUserDetailsRes> {
  /**
   * list of Sessions in the system with enrichments
   *
   * @generated from field: repeated services.omnichannel.asm.entities.v1alpha1.ListAsmUserDetails sessions = 1;
   */
  sessions: ListAsmUserDetails[];

  constructor(data?: PartialMessage<ListAsmUserDetailsRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "services.omnichannel.asm.v1alpha1.ListAsmUserDetailsRes";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAsmUserDetailsRes;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAsmUserDetailsRes;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAsmUserDetailsRes;

  static equals(a: ListAsmUserDetailsRes | PlainMessage<ListAsmUserDetailsRes> | undefined, b: ListAsmUserDetailsRes | PlainMessage<ListAsmUserDetailsRes> | undefined): boolean;
}

