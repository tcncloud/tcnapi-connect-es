// @generated by protoc-gen-es v1.5.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/trusts.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Permission } from "../../commons/auth/perms_pb.js";
import type { Trust } from "../../commons/org/trusts_pb.js";

/**
 * Request message for the CreateTrust RPC.
 *
 * @generated from message api.v1alpha1.org.CreateTrustRequest
 */
export declare class CreateTrustRequest extends Message<CreateTrustRequest> {
  /**
   * Org ID of the org recieving the trust.
   *
   * @generated from field: string grantee = 1;
   */
  grantee: string;

  /**
   * Name of the trust.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * Description of the trust.
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * Permissions given through the trust
   *
   * @generated from field: repeated api.commons.auth.Permission permissions = 4;
   */
  permissions: Permission[];

  /**
   * IDs of labels associated with the given permissions.
   * NOTE: All given labels are applied to ALL given permissions.
   *
   * @generated from field: repeated string label_ids = 5;
   */
  labelIds: string[];

  constructor(data?: PartialMessage<CreateTrustRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.CreateTrustRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTrustRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTrustRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTrustRequest;

  static equals(a: CreateTrustRequest | PlainMessage<CreateTrustRequest> | undefined, b: CreateTrustRequest | PlainMessage<CreateTrustRequest> | undefined): boolean;
}

/**
 * Response message for the CreateTrust RPC.
 *
 * @generated from message api.v1alpha1.org.CreateTrustResponse
 */
export declare class CreateTrustResponse extends Message<CreateTrustResponse> {
  /**
   * ID of the created trust.
   *
   * @generated from field: string trust_id = 1;
   */
  trustId: string;

  constructor(data?: PartialMessage<CreateTrustResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.CreateTrustResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTrustResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTrustResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTrustResponse;

  static equals(a: CreateTrustResponse | PlainMessage<CreateTrustResponse> | undefined, b: CreateTrustResponse | PlainMessage<CreateTrustResponse> | undefined): boolean;
}

/**
 * Request message for the AcceptTrust RPC.
 *
 * @generated from message api.v1alpha1.org.AcceptTrustRequest
 */
export declare class AcceptTrustRequest extends Message<AcceptTrustRequest> {
  /**
   * ID of the trust being accepted.
   *
   * @generated from field: string trust_id = 1;
   */
  trustId: string;

  constructor(data?: PartialMessage<AcceptTrustRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AcceptTrustRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AcceptTrustRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AcceptTrustRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AcceptTrustRequest;

  static equals(a: AcceptTrustRequest | PlainMessage<AcceptTrustRequest> | undefined, b: AcceptTrustRequest | PlainMessage<AcceptTrustRequest> | undefined): boolean;
}

/**
 * Response message for the AcceptTrust RPC.
 *
 * @generated from message api.v1alpha1.org.AcceptTrustResponse
 */
export declare class AcceptTrustResponse extends Message<AcceptTrustResponse> {
  constructor(data?: PartialMessage<AcceptTrustResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AcceptTrustResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AcceptTrustResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AcceptTrustResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AcceptTrustResponse;

  static equals(a: AcceptTrustResponse | PlainMessage<AcceptTrustResponse> | undefined, b: AcceptTrustResponse | PlainMessage<AcceptTrustResponse> | undefined): boolean;
}

/**
 * Request message for the RejectTrust RPC.
 *
 * @generated from message api.v1alpha1.org.RejectTrustRequest
 */
export declare class RejectTrustRequest extends Message<RejectTrustRequest> {
  /**
   * ID of the trust being rejected.
   *
   * @generated from field: string trust_id = 1;
   */
  trustId: string;

  constructor(data?: PartialMessage<RejectTrustRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.RejectTrustRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RejectTrustRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RejectTrustRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RejectTrustRequest;

  static equals(a: RejectTrustRequest | PlainMessage<RejectTrustRequest> | undefined, b: RejectTrustRequest | PlainMessage<RejectTrustRequest> | undefined): boolean;
}

/**
 * Response message for the RejectTrust RPC.
 *
 * @generated from message api.v1alpha1.org.RejectTrustResponse
 */
export declare class RejectTrustResponse extends Message<RejectTrustResponse> {
  constructor(data?: PartialMessage<RejectTrustResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.RejectTrustResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RejectTrustResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RejectTrustResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RejectTrustResponse;

  static equals(a: RejectTrustResponse | PlainMessage<RejectTrustResponse> | undefined, b: RejectTrustResponse | PlainMessage<RejectTrustResponse> | undefined): boolean;
}

/**
 * Response message for the GetTrust RPC.
 *
 * @generated from message api.v1alpha1.org.GetTrustRequest
 */
export declare class GetTrustRequest extends Message<GetTrustRequest> {
  /**
   * ID of the trust being retrieved.
   *
   * @generated from field: string trust_id = 1;
   */
  trustId: string;

  constructor(data?: PartialMessage<GetTrustRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetTrustRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTrustRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTrustRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTrustRequest;

  static equals(a: GetTrustRequest | PlainMessage<GetTrustRequest> | undefined, b: GetTrustRequest | PlainMessage<GetTrustRequest> | undefined): boolean;
}

/**
 * Response message for the GetTrust RPC.
 *
 * @generated from message api.v1alpha1.org.GetTrustResponse
 */
export declare class GetTrustResponse extends Message<GetTrustResponse> {
  /**
   * Retrieved trust.
   *
   * @generated from field: api.commons.org.Trust trust = 1;
   */
  trust?: Trust;

  /**
   * Name of the Grantor org.
   *
   * @generated from field: string grantor_name = 2;
   */
  grantorName: string;

  /**
   * Name of the Grantee org.
   *
   * @generated from field: string grantee_name = 3;
   */
  granteeName: string;

  constructor(data?: PartialMessage<GetTrustResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetTrustResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTrustResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTrustResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTrustResponse;

  static equals(a: GetTrustResponse | PlainMessage<GetTrustResponse> | undefined, b: GetTrustResponse | PlainMessage<GetTrustResponse> | undefined): boolean;
}

/**
 * Request message for the ListIncomingTrusts RPC.
 *
 * @generated from message api.v1alpha1.org.ListIncomingTrustsRequest
 */
export declare class ListIncomingTrustsRequest extends Message<ListIncomingTrustsRequest> {
  constructor(data?: PartialMessage<ListIncomingTrustsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListIncomingTrustsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListIncomingTrustsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListIncomingTrustsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListIncomingTrustsRequest;

  static equals(a: ListIncomingTrustsRequest | PlainMessage<ListIncomingTrustsRequest> | undefined, b: ListIncomingTrustsRequest | PlainMessage<ListIncomingTrustsRequest> | undefined): boolean;
}

/**
 * Response message for the ListIncomingTrusts RPC.
 *
 * @generated from message api.v1alpha1.org.ListIncomingTrustsResponse
 */
export declare class ListIncomingTrustsResponse extends Message<ListIncomingTrustsResponse> {
  /**
   * List of trusts.
   *
   * @generated from field: repeated api.v1alpha1.org.ListIncomingTrustsResponse.Payload trusts = 1;
   */
  trusts: ListIncomingTrustsResponse_Payload[];

  constructor(data?: PartialMessage<ListIncomingTrustsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListIncomingTrustsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListIncomingTrustsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListIncomingTrustsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListIncomingTrustsResponse;

  static equals(a: ListIncomingTrustsResponse | PlainMessage<ListIncomingTrustsResponse> | undefined, b: ListIncomingTrustsResponse | PlainMessage<ListIncomingTrustsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.ListIncomingTrustsResponse.Payload
 */
export declare class ListIncomingTrustsResponse_Payload extends Message<ListIncomingTrustsResponse_Payload> {
  /**
   * @generated from field: api.commons.org.Trust trust = 1;
   */
  trust?: Trust;

  /**
   * @generated from field: string grantor_name = 2;
   */
  grantorName: string;

  /**
   * @generated from field: string grantee_name = 3;
   */
  granteeName: string;

  constructor(data?: PartialMessage<ListIncomingTrustsResponse_Payload>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListIncomingTrustsResponse.Payload";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListIncomingTrustsResponse_Payload;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListIncomingTrustsResponse_Payload;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListIncomingTrustsResponse_Payload;

  static equals(a: ListIncomingTrustsResponse_Payload | PlainMessage<ListIncomingTrustsResponse_Payload> | undefined, b: ListIncomingTrustsResponse_Payload | PlainMessage<ListIncomingTrustsResponse_Payload> | undefined): boolean;
}

/**
 * Request message for the ListGivenTrusts RPC.
 *
 * @generated from message api.v1alpha1.org.ListGivenTrustsRequest
 */
export declare class ListGivenTrustsRequest extends Message<ListGivenTrustsRequest> {
  constructor(data?: PartialMessage<ListGivenTrustsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListGivenTrustsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGivenTrustsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGivenTrustsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGivenTrustsRequest;

  static equals(a: ListGivenTrustsRequest | PlainMessage<ListGivenTrustsRequest> | undefined, b: ListGivenTrustsRequest | PlainMessage<ListGivenTrustsRequest> | undefined): boolean;
}

/**
 * Response message for the ListGivenTrusts RPC.
 *
 * @generated from message api.v1alpha1.org.ListGivenTrustsResponse
 */
export declare class ListGivenTrustsResponse extends Message<ListGivenTrustsResponse> {
  /**
   * List of trusts.
   *
   * @generated from field: repeated api.v1alpha1.org.ListGivenTrustsResponse.Payload trusts = 1;
   */
  trusts: ListGivenTrustsResponse_Payload[];

  constructor(data?: PartialMessage<ListGivenTrustsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListGivenTrustsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGivenTrustsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGivenTrustsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGivenTrustsResponse;

  static equals(a: ListGivenTrustsResponse | PlainMessage<ListGivenTrustsResponse> | undefined, b: ListGivenTrustsResponse | PlainMessage<ListGivenTrustsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.ListGivenTrustsResponse.Payload
 */
export declare class ListGivenTrustsResponse_Payload extends Message<ListGivenTrustsResponse_Payload> {
  /**
   * @generated from field: api.commons.org.Trust trust = 1;
   */
  trust?: Trust;

  /**
   * @generated from field: string grantor_name = 2;
   */
  grantorName: string;

  /**
   * @generated from field: string grantee_name = 3;
   */
  granteeName: string;

  constructor(data?: PartialMessage<ListGivenTrustsResponse_Payload>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListGivenTrustsResponse.Payload";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGivenTrustsResponse_Payload;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGivenTrustsResponse_Payload;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGivenTrustsResponse_Payload;

  static equals(a: ListGivenTrustsResponse_Payload | PlainMessage<ListGivenTrustsResponse_Payload> | undefined, b: ListGivenTrustsResponse_Payload | PlainMessage<ListGivenTrustsResponse_Payload> | undefined): boolean;
}

/**
 * Request message for the CreateTrust RPC.
 *
 * @generated from message api.v1alpha1.org.ListAssignableTrustsRequest
 */
export declare class ListAssignableTrustsRequest extends Message<ListAssignableTrustsRequest> {
  constructor(data?: PartialMessage<ListAssignableTrustsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListAssignableTrustsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAssignableTrustsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAssignableTrustsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAssignableTrustsRequest;

  static equals(a: ListAssignableTrustsRequest | PlainMessage<ListAssignableTrustsRequest> | undefined, b: ListAssignableTrustsRequest | PlainMessage<ListAssignableTrustsRequest> | undefined): boolean;
}

/**
 * Response message for the CreateTrust RPC.
 *
 * @generated from message api.v1alpha1.org.ListAssignableTrustsResponse
 */
export declare class ListAssignableTrustsResponse extends Message<ListAssignableTrustsResponse> {
  /**
   * List of trusts.
   *
   * @generated from field: repeated api.v1alpha1.org.ListAssignableTrustsResponse.Payload trusts = 1;
   */
  trusts: ListAssignableTrustsResponse_Payload[];

  constructor(data?: PartialMessage<ListAssignableTrustsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListAssignableTrustsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAssignableTrustsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAssignableTrustsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAssignableTrustsResponse;

  static equals(a: ListAssignableTrustsResponse | PlainMessage<ListAssignableTrustsResponse> | undefined, b: ListAssignableTrustsResponse | PlainMessage<ListAssignableTrustsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.ListAssignableTrustsResponse.Payload
 */
export declare class ListAssignableTrustsResponse_Payload extends Message<ListAssignableTrustsResponse_Payload> {
  /**
   * @generated from field: api.commons.org.Trust trust = 1;
   */
  trust?: Trust;

  /**
   * @generated from field: string grantor_name = 2;
   */
  grantorName: string;

  /**
   * @generated from field: string grantee_name = 3;
   */
  granteeName: string;

  constructor(data?: PartialMessage<ListAssignableTrustsResponse_Payload>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListAssignableTrustsResponse.Payload";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAssignableTrustsResponse_Payload;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAssignableTrustsResponse_Payload;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAssignableTrustsResponse_Payload;

  static equals(a: ListAssignableTrustsResponse_Payload | PlainMessage<ListAssignableTrustsResponse_Payload> | undefined, b: ListAssignableTrustsResponse_Payload | PlainMessage<ListAssignableTrustsResponse_Payload> | undefined): boolean;
}

/**
 * Request message for the DeleteTrust RPC.
 *
 * @generated from message api.v1alpha1.org.DeleteTrustRequest
 */
export declare class DeleteTrustRequest extends Message<DeleteTrustRequest> {
  /**
   * ID of the trust to be deleted.
   *
   * @generated from field: string trust_id = 1;
   */
  trustId: string;

  constructor(data?: PartialMessage<DeleteTrustRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.DeleteTrustRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTrustRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTrustRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTrustRequest;

  static equals(a: DeleteTrustRequest | PlainMessage<DeleteTrustRequest> | undefined, b: DeleteTrustRequest | PlainMessage<DeleteTrustRequest> | undefined): boolean;
}

/**
 * Response message for the DeleteTrust RPC.
 *
 * @generated from message api.v1alpha1.org.DeleteTrustResponse
 */
export declare class DeleteTrustResponse extends Message<DeleteTrustResponse> {
  constructor(data?: PartialMessage<DeleteTrustResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.DeleteTrustResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteTrustResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteTrustResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteTrustResponse;

  static equals(a: DeleteTrustResponse | PlainMessage<DeleteTrustResponse> | undefined, b: DeleteTrustResponse | PlainMessage<DeleteTrustResponse> | undefined): boolean;
}

/**
 * Request message for the AssignTrust RPC.
 *
 * @generated from message api.v1alpha1.org.AssignTrustRequest
 */
export declare class AssignTrustRequest extends Message<AssignTrustRequest> {
  /**
   * ID of the trust being assigned.
   *
   * @generated from field: string trust_id = 1;
   */
  trustId: string;

  /**
   * List of user IDs to assign the trust to.
   *
   * @generated from field: repeated string user_ids = 2;
   */
  userIds: string[];

  constructor(data?: PartialMessage<AssignTrustRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AssignTrustRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignTrustRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignTrustRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignTrustRequest;

  static equals(a: AssignTrustRequest | PlainMessage<AssignTrustRequest> | undefined, b: AssignTrustRequest | PlainMessage<AssignTrustRequest> | undefined): boolean;
}

/**
 * Response message for the AssignTrust RPC.
 *
 * @generated from message api.v1alpha1.org.AssignTrustResponse
 */
export declare class AssignTrustResponse extends Message<AssignTrustResponse> {
  constructor(data?: PartialMessage<AssignTrustResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.AssignTrustResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssignTrustResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssignTrustResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssignTrustResponse;

  static equals(a: AssignTrustResponse | PlainMessage<AssignTrustResponse> | undefined, b: AssignTrustResponse | PlainMessage<AssignTrustResponse> | undefined): boolean;
}

/**
 * Request message for the UnassignTrust RPC.
 *
 * @generated from message api.v1alpha1.org.UnassignTrustRequest
 */
export declare class UnassignTrustRequest extends Message<UnassignTrustRequest> {
  /**
   * ID of the trust being unassigned.
   *
   * @generated from field: string trust_id = 1;
   */
  trustId: string;

  /**
   * User ID to unassign the trust from.
   *
   * @generated from field: string user_id = 2;
   */
  userId: string;

  constructor(data?: PartialMessage<UnassignTrustRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UnassignTrustRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnassignTrustRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnassignTrustRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnassignTrustRequest;

  static equals(a: UnassignTrustRequest | PlainMessage<UnassignTrustRequest> | undefined, b: UnassignTrustRequest | PlainMessage<UnassignTrustRequest> | undefined): boolean;
}

/**
 * Response message for the UnassignTrust RPC.
 *
 * @generated from message api.v1alpha1.org.UnassignTrustResponse
 */
export declare class UnassignTrustResponse extends Message<UnassignTrustResponse> {
  constructor(data?: PartialMessage<UnassignTrustResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UnassignTrustResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnassignTrustResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnassignTrustResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnassignTrustResponse;

  static equals(a: UnassignTrustResponse | PlainMessage<UnassignTrustResponse> | undefined, b: UnassignTrustResponse | PlainMessage<UnassignTrustResponse> | undefined): boolean;
}

