// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/room303/member.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Member } from "../../commons/room303_pb.js";

/**
 * @generated from message api.v1alpha1.room303.AddRoomMemberRequest
 */
export declare class AddRoomMemberRequest extends Message<AddRoomMemberRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * @generated from field: bool admin = 3;
   */
  admin: boolean;

  constructor(data?: PartialMessage<AddRoomMemberRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.AddRoomMemberRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddRoomMemberRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddRoomMemberRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddRoomMemberRequest;

  static equals(a: AddRoomMemberRequest | PlainMessage<AddRoomMemberRequest> | undefined, b: AddRoomMemberRequest | PlainMessage<AddRoomMemberRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.RemoveRoomMemberRequest
 */
export declare class RemoveRoomMemberRequest extends Message<RemoveRoomMemberRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string room_id = 2;
   */
  roomId: string;

  constructor(data?: PartialMessage<RemoveRoomMemberRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.RemoveRoomMemberRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveRoomMemberRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveRoomMemberRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveRoomMemberRequest;

  static equals(a: RemoveRoomMemberRequest | PlainMessage<RemoveRoomMemberRequest> | undefined, b: RemoveRoomMemberRequest | PlainMessage<RemoveRoomMemberRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.RemoveRoomMemberResponse
 */
export declare class RemoveRoomMemberResponse extends Message<RemoveRoomMemberResponse> {
  constructor(data?: PartialMessage<RemoveRoomMemberResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.RemoveRoomMemberResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveRoomMemberResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveRoomMemberResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveRoomMemberResponse;

  static equals(a: RemoveRoomMemberResponse | PlainMessage<RemoveRoomMemberResponse> | undefined, b: RemoveRoomMemberResponse | PlainMessage<RemoveRoomMemberResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ListRoomMembersRequest
 */
export declare class ListRoomMembersRequest extends Message<ListRoomMembersRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  constructor(data?: PartialMessage<ListRoomMembersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListRoomMembersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRoomMembersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRoomMembersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRoomMembersRequest;

  static equals(a: ListRoomMembersRequest | PlainMessage<ListRoomMembersRequest> | undefined, b: ListRoomMembersRequest | PlainMessage<ListRoomMembersRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ListRoomMembersResponse
 */
export declare class ListRoomMembersResponse extends Message<ListRoomMembersResponse> {
  /**
   * @generated from field: repeated api.commons.Member members = 1;
   */
  members: Member[];

  constructor(data?: PartialMessage<ListRoomMembersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListRoomMembersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRoomMembersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRoomMembersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRoomMembersResponse;

  static equals(a: ListRoomMembersResponse | PlainMessage<ListRoomMembersResponse> | undefined, b: ListRoomMembersResponse | PlainMessage<ListRoomMembersResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.SetAdminForRoomMemberRequest
 */
export declare class SetAdminForRoomMemberRequest extends Message<SetAdminForRoomMemberRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  constructor(data?: PartialMessage<SetAdminForRoomMemberRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.SetAdminForRoomMemberRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetAdminForRoomMemberRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetAdminForRoomMemberRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetAdminForRoomMemberRequest;

  static equals(a: SetAdminForRoomMemberRequest | PlainMessage<SetAdminForRoomMemberRequest> | undefined, b: SetAdminForRoomMemberRequest | PlainMessage<SetAdminForRoomMemberRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.SetAdminForRoomMemberResponse
 */
export declare class SetAdminForRoomMemberResponse extends Message<SetAdminForRoomMemberResponse> {
  constructor(data?: PartialMessage<SetAdminForRoomMemberResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.SetAdminForRoomMemberResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetAdminForRoomMemberResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetAdminForRoomMemberResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetAdminForRoomMemberResponse;

  static equals(a: SetAdminForRoomMemberResponse | PlainMessage<SetAdminForRoomMemberResponse> | undefined, b: SetAdminForRoomMemberResponse | PlainMessage<SetAdminForRoomMemberResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.JoinRoomRequest
 */
export declare class JoinRoomRequest extends Message<JoinRoomRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  constructor(data?: PartialMessage<JoinRoomRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.JoinRoomRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinRoomRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinRoomRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinRoomRequest;

  static equals(a: JoinRoomRequest | PlainMessage<JoinRoomRequest> | undefined, b: JoinRoomRequest | PlainMessage<JoinRoomRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.GetRoomMemberRequest
 */
export declare class GetRoomMemberRequest extends Message<GetRoomMemberRequest> {
  /**
   * @generated from field: string room_id = 2;
   */
  roomId: string;

  /**
   * @generated from field: string user_id = 3;
   */
  userId: string;

  constructor(data?: PartialMessage<GetRoomMemberRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetRoomMemberRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRoomMemberRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRoomMemberRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRoomMemberRequest;

  static equals(a: GetRoomMemberRequest | PlainMessage<GetRoomMemberRequest> | undefined, b: GetRoomMemberRequest | PlainMessage<GetRoomMemberRequest> | undefined): boolean;
}

