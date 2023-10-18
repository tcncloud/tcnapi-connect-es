// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/v1alpha1/room303/room.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { GlobalConfig, Room, RoomConfig, RoomType } from "../../commons/room303_pb.js";
import type { UserArchivedStateFilter } from "../../commons/user_pb.js";

/**
 * @generated from message api.v1alpha1.room303.CreateRoomRequest
 */
export declare class CreateRoomRequest extends Message<CreateRoomRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: api.commons.RoomType type = 2;
   */
  type: RoomType;

  /**
   * @generated from field: repeated string members = 3;
   */
  members: string[];

  constructor(data?: PartialMessage<CreateRoomRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.CreateRoomRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRoomRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRoomRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRoomRequest;

  static equals(a: CreateRoomRequest | PlainMessage<CreateRoomRequest> | undefined, b: CreateRoomRequest | PlainMessage<CreateRoomRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.GetRoomRequest
 */
export declare class GetRoomRequest extends Message<GetRoomRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  constructor(data?: PartialMessage<GetRoomRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetRoomRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRoomRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRoomRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRoomRequest;

  static equals(a: GetRoomRequest | PlainMessage<GetRoomRequest> | undefined, b: GetRoomRequest | PlainMessage<GetRoomRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ListAllRoomsRequest
 */
export declare class ListAllRoomsRequest extends Message<ListAllRoomsRequest> {
  constructor(data?: PartialMessage<ListAllRoomsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListAllRoomsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAllRoomsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAllRoomsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAllRoomsRequest;

  static equals(a: ListAllRoomsRequest | PlainMessage<ListAllRoomsRequest> | undefined, b: ListAllRoomsRequest | PlainMessage<ListAllRoomsRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ListRoomsForMemberRequest
 */
export declare class ListRoomsForMemberRequest extends Message<ListRoomsForMemberRequest> {
  constructor(data?: PartialMessage<ListRoomsForMemberRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListRoomsForMemberRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRoomsForMemberRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRoomsForMemberRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRoomsForMemberRequest;

  static equals(a: ListRoomsForMemberRequest | PlainMessage<ListRoomsForMemberRequest> | undefined, b: ListRoomsForMemberRequest | PlainMessage<ListRoomsForMemberRequest> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ListRoomsResponse
 */
export declare class ListRoomsResponse extends Message<ListRoomsResponse> {
  /**
   * @generated from field: repeated api.commons.Room rooms = 1;
   */
  rooms: Room[];

  constructor(data?: PartialMessage<ListRoomsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListRoomsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRoomsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRoomsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRoomsResponse;

  static equals(a: ListRoomsResponse | PlainMessage<ListRoomsResponse> | undefined, b: ListRoomsResponse | PlainMessage<ListRoomsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.room303.ArchiveRoomRequest
 */
export declare class ArchiveRoomRequest extends Message<ArchiveRoomRequest> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  constructor(data?: PartialMessage<ArchiveRoomRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ArchiveRoomRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArchiveRoomRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArchiveRoomRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArchiveRoomRequest;

  static equals(a: ArchiveRoomRequest | PlainMessage<ArchiveRoomRequest> | undefined, b: ArchiveRoomRequest | PlainMessage<ArchiveRoomRequest> | undefined): boolean;
}

/**
 * Request message for the ListUsersNames rpc.
 *
 * @generated from message api.v1alpha1.room303.ListUsersNamesRequest
 */
export declare class ListUsersNamesRequest extends Message<ListUsersNamesRequest> {
  /**
   * Filter by org ID.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Return a list of only user agents (users whose default app is agent). When this is false all users are returned.
   *
   * @generated from field: bool agent = 2;
   */
  agent: boolean;

  /**
   * Filter by the user's archived status
   *
   * @generated from field: api.commons.UserArchivedStateFilter archived_filter = 3;
   */
  archivedFilter: UserArchivedStateFilter;

  constructor(data?: PartialMessage<ListUsersNamesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListUsersNamesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUsersNamesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUsersNamesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUsersNamesRequest;

  static equals(a: ListUsersNamesRequest | PlainMessage<ListUsersNamesRequest> | undefined, b: ListUsersNamesRequest | PlainMessage<ListUsersNamesRequest> | undefined): boolean;
}

/**
 * Response message for the ListUsersNames rpc.
 *
 * @generated from message api.v1alpha1.room303.ListUsersNamesResponse
 */
export declare class ListUsersNamesResponse extends Message<ListUsersNamesResponse> {
  /**
   * List of returned users with names and ids
   *
   * @generated from field: repeated api.v1alpha1.room303.UserDetails user_details = 1;
   */
  userDetails: UserDetails[];

  constructor(data?: PartialMessage<ListUsersNamesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.ListUsersNamesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListUsersNamesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListUsersNamesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListUsersNamesResponse;

  static equals(a: ListUsersNamesResponse | PlainMessage<ListUsersNamesResponse> | undefined, b: ListUsersNamesResponse | PlainMessage<ListUsersNamesResponse> | undefined): boolean;
}

/**
 * wrapper for listing user names with ids
 *
 * @generated from message api.v1alpha1.room303.UserDetails
 */
export declare class UserDetails extends Message<UserDetails> {
  /**
   * The ID of the user
   *
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * The name of the user.
   *
   * @generated from field: string user_name = 2;
   */
  userName: string;

  /**
   * user first name
   *
   * @generated from field: string first_name = 3;
   */
  firstName: string;

  /**
   * user last name
   *
   * @generated from field: string last_name = 4;
   */
  lastName: string;

  constructor(data?: PartialMessage<UserDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.UserDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserDetails;

  static equals(a: UserDetails | PlainMessage<UserDetails> | undefined, b: UserDetails | PlainMessage<UserDetails> | undefined): boolean;
}

/**
 * request to update room configuration
 *
 * @generated from message api.v1alpha1.room303.UpdateRoomConfigRequest
 */
export declare class UpdateRoomConfigRequest extends Message<UpdateRoomConfigRequest> {
  /**
   * room id
   *
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * room configuration details
   *
   * @generated from field: api.commons.RoomConfig config = 2;
   */
  config?: RoomConfig;

  /**
   * list of config options to be updated
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 100;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateRoomConfigRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.UpdateRoomConfigRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateRoomConfigRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateRoomConfigRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateRoomConfigRequest;

  static equals(a: UpdateRoomConfigRequest | PlainMessage<UpdateRoomConfigRequest> | undefined, b: UpdateRoomConfigRequest | PlainMessage<UpdateRoomConfigRequest> | undefined): boolean;
}

/**
 * request to update global configuration
 *
 * @generated from message api.v1alpha1.room303.UpdateGlobalConfigRequest
 */
export declare class UpdateGlobalConfigRequest extends Message<UpdateGlobalConfigRequest> {
  /**
   * global configuration details
   *
   * @generated from field: api.commons.GlobalConfig config = 1;
   */
  config?: GlobalConfig;

  /**
   * list of global config options to be updated
   *
   * @generated from field: google.protobuf.FieldMask field_mask = 100;
   */
  fieldMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateGlobalConfigRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.UpdateGlobalConfigRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateGlobalConfigRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateGlobalConfigRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateGlobalConfigRequest;

  static equals(a: UpdateGlobalConfigRequest | PlainMessage<UpdateGlobalConfigRequest> | undefined, b: UpdateGlobalConfigRequest | PlainMessage<UpdateGlobalConfigRequest> | undefined): boolean;
}

/**
 * response to update global configuration
 *
 * @generated from message api.v1alpha1.room303.UpdateGlobalConfigResponse
 */
export declare class UpdateGlobalConfigResponse extends Message<UpdateGlobalConfigResponse> {
  /**
   * global configuration details
   *
   * @generated from field: api.commons.GlobalConfig config = 1;
   */
  config?: GlobalConfig;

  constructor(data?: PartialMessage<UpdateGlobalConfigResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.UpdateGlobalConfigResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateGlobalConfigResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateGlobalConfigResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateGlobalConfigResponse;

  static equals(a: UpdateGlobalConfigResponse | PlainMessage<UpdateGlobalConfigResponse> | undefined, b: UpdateGlobalConfigResponse | PlainMessage<UpdateGlobalConfigResponse> | undefined): boolean;
}

/**
 * request to get global configuration
 *
 * @generated from message api.v1alpha1.room303.GetGlobalConfigRequest
 */
export declare class GetGlobalConfigRequest extends Message<GetGlobalConfigRequest> {
  /**
   * global configuration details
   *
   * @generated from field: api.commons.GlobalConfig config = 1;
   */
  config?: GlobalConfig;

  constructor(data?: PartialMessage<GetGlobalConfigRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetGlobalConfigRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGlobalConfigRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGlobalConfigRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGlobalConfigRequest;

  static equals(a: GetGlobalConfigRequest | PlainMessage<GetGlobalConfigRequest> | undefined, b: GetGlobalConfigRequest | PlainMessage<GetGlobalConfigRequest> | undefined): boolean;
}

/**
 * response to get global configuration
 *
 * @generated from message api.v1alpha1.room303.GetGlobalConfigResponse
 */
export declare class GetGlobalConfigResponse extends Message<GetGlobalConfigResponse> {
  /**
   * global configuration details
   *
   * @generated from field: api.commons.GlobalConfig config = 1;
   */
  config?: GlobalConfig;

  constructor(data?: PartialMessage<GetGlobalConfigResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.room303.GetGlobalConfigResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGlobalConfigResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGlobalConfigResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGlobalConfigResponse;

  static equals(a: GetGlobalConfigResponse | PlainMessage<GetGlobalConfigResponse> | undefined, b: GetGlobalConfigResponse | PlainMessage<GetGlobalConfigResponse> | undefined): boolean;
}

