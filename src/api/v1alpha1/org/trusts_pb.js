// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/trusts.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Permission } from "../../commons/auth/perms_pb.js";
import { Trust } from "../../commons/org/trusts_pb.js";

/**
 * Request message for the CreateTrust RPC.
 *
 * @generated from message api.v1alpha1.org.CreateTrustRequest
 */
export const CreateTrustRequest = proto3.makeMessageType(
  "api.v1alpha1.org.CreateTrustRequest",
  () => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "permissions", kind: "enum", T: proto3.getEnumType(Permission), repeated: true },
    { no: 5, name: "label_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the CreateTrust RPC.
 *
 * @generated from message api.v1alpha1.org.CreateTrustResponse
 */
export const CreateTrustResponse = proto3.makeMessageType(
  "api.v1alpha1.org.CreateTrustResponse",
  () => [
    { no: 1, name: "trust_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the AcceptTrust RPC.
 *
 * @generated from message api.v1alpha1.org.AcceptTrustRequest
 */
export const AcceptTrustRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AcceptTrustRequest",
  () => [
    { no: 1, name: "trust_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the AcceptTrust RPC.
 *
 * @generated from message api.v1alpha1.org.AcceptTrustResponse
 */
export const AcceptTrustResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AcceptTrustResponse",
  [],
);

/**
 * Request message for the RejectTrust RPC.
 *
 * @generated from message api.v1alpha1.org.RejectTrustRequest
 */
export const RejectTrustRequest = proto3.makeMessageType(
  "api.v1alpha1.org.RejectTrustRequest",
  () => [
    { no: 1, name: "trust_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the RejectTrust RPC.
 *
 * @generated from message api.v1alpha1.org.RejectTrustResponse
 */
export const RejectTrustResponse = proto3.makeMessageType(
  "api.v1alpha1.org.RejectTrustResponse",
  [],
);

/**
 * Response message for the GetTrust RPC.
 *
 * @generated from message api.v1alpha1.org.GetTrustRequest
 */
export const GetTrustRequest = proto3.makeMessageType(
  "api.v1alpha1.org.GetTrustRequest",
  () => [
    { no: 1, name: "trust_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the GetTrust RPC.
 *
 * @generated from message api.v1alpha1.org.GetTrustResponse
 */
export const GetTrustResponse = proto3.makeMessageType(
  "api.v1alpha1.org.GetTrustResponse",
  () => [
    { no: 1, name: "trust", kind: "message", T: Trust },
    { no: 2, name: "grantor_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "grantee_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for the ListIncomingTrusts RPC.
 *
 * @generated from message api.v1alpha1.org.ListIncomingTrustsRequest
 */
export const ListIncomingTrustsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListIncomingTrustsRequest",
  [],
);

/**
 * Response message for the ListIncomingTrusts RPC.
 *
 * @generated from message api.v1alpha1.org.ListIncomingTrustsResponse
 */
export const ListIncomingTrustsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListIncomingTrustsResponse",
  () => [
    { no: 1, name: "trusts", kind: "message", T: ListIncomingTrustsResponse_Payload, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.ListIncomingTrustsResponse.Payload
 */
export const ListIncomingTrustsResponse_Payload = proto3.makeMessageType(
  "api.v1alpha1.org.ListIncomingTrustsResponse.Payload",
  () => [
    { no: 1, name: "trust", kind: "message", T: Trust },
    { no: 2, name: "grantor_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "grantee_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ListIncomingTrustsResponse_Payload"},
);

/**
 * Request message for the ListGivenTrusts RPC.
 *
 * @generated from message api.v1alpha1.org.ListGivenTrustsRequest
 */
export const ListGivenTrustsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListGivenTrustsRequest",
  [],
);

/**
 * Response message for the ListGivenTrusts RPC.
 *
 * @generated from message api.v1alpha1.org.ListGivenTrustsResponse
 */
export const ListGivenTrustsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListGivenTrustsResponse",
  () => [
    { no: 1, name: "trusts", kind: "message", T: ListGivenTrustsResponse_Payload, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.ListGivenTrustsResponse.Payload
 */
export const ListGivenTrustsResponse_Payload = proto3.makeMessageType(
  "api.v1alpha1.org.ListGivenTrustsResponse.Payload",
  () => [
    { no: 1, name: "trust", kind: "message", T: Trust },
    { no: 2, name: "grantor_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "grantee_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ListGivenTrustsResponse_Payload"},
);

/**
 * Request message for the CreateTrust RPC.
 *
 * @generated from message api.v1alpha1.org.ListAssignableTrustsRequest
 */
export const ListAssignableTrustsRequest = proto3.makeMessageType(
  "api.v1alpha1.org.ListAssignableTrustsRequest",
  [],
);

/**
 * Response message for the CreateTrust RPC.
 *
 * @generated from message api.v1alpha1.org.ListAssignableTrustsResponse
 */
export const ListAssignableTrustsResponse = proto3.makeMessageType(
  "api.v1alpha1.org.ListAssignableTrustsResponse",
  () => [
    { no: 1, name: "trusts", kind: "message", T: ListAssignableTrustsResponse_Payload, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.ListAssignableTrustsResponse.Payload
 */
export const ListAssignableTrustsResponse_Payload = proto3.makeMessageType(
  "api.v1alpha1.org.ListAssignableTrustsResponse.Payload",
  () => [
    { no: 1, name: "trust", kind: "message", T: Trust },
    { no: 2, name: "grantor_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "grantee_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ListAssignableTrustsResponse_Payload"},
);

/**
 * Request message for the DeleteTrust RPC.
 *
 * @generated from message api.v1alpha1.org.DeleteTrustRequest
 */
export const DeleteTrustRequest = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteTrustRequest",
  () => [
    { no: 1, name: "trust_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the DeleteTrust RPC.
 *
 * @generated from message api.v1alpha1.org.DeleteTrustResponse
 */
export const DeleteTrustResponse = proto3.makeMessageType(
  "api.v1alpha1.org.DeleteTrustResponse",
  [],
);

/**
 * Request message for the AssignTrust RPC.
 *
 * @generated from message api.v1alpha1.org.AssignTrustRequest
 */
export const AssignTrustRequest = proto3.makeMessageType(
  "api.v1alpha1.org.AssignTrustRequest",
  () => [
    { no: 1, name: "trust_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Response message for the AssignTrust RPC.
 *
 * @generated from message api.v1alpha1.org.AssignTrustResponse
 */
export const AssignTrustResponse = proto3.makeMessageType(
  "api.v1alpha1.org.AssignTrustResponse",
  [],
);

/**
 * Request message for the UnassignTrust RPC.
 *
 * @generated from message api.v1alpha1.org.UnassignTrustRequest
 */
export const UnassignTrustRequest = proto3.makeMessageType(
  "api.v1alpha1.org.UnassignTrustRequest",
  () => [
    { no: 1, name: "trust_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for the UnassignTrust RPC.
 *
 * @generated from message api.v1alpha1.org.UnassignTrustResponse
 */
export const UnassignTrustResponse = proto3.makeMessageType(
  "api.v1alpha1.org.UnassignTrustResponse",
  [],
);

