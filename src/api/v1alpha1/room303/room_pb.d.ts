// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/room303/room.proto (package api.v1alpha1.room303, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Room, RoomType } from "../../commons/room303_pb.js";

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
