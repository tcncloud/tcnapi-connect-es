// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/delivery/service.proto (package api.v1alpha1.delivery, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { OperatorApplications } from "../../commons/org_pb.js";
import { Encryption, TransferStatus } from "../../commons/delivery_pb.js";

/**
 * @generated from message api.v1alpha1.delivery.CreateTransferConfigReq
 */
export const CreateTransferConfigReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.CreateTransferConfigReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: TransferConfig },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.CreateTransferConfigRes
 */
export const CreateTransferConfigRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.CreateTransferConfigRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: ID },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListTransferConfigsReq
 */
export const ListTransferConfigsReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListTransferConfigsReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: TransferConfig },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
    { no: 3, name: "list_req", kind: "message", T: ListReq },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListTransferConfigsRes
 */
export const ListTransferConfigsRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListTransferConfigsRes",
  () => [
    { no: 1, name: "entities", kind: "message", T: TransferConfig, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq
 */
export const ListTransferConfigsByCredentialIDReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListTransferConfigsByCredentialIDReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: TransferConfig },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
    { no: 3, name: "credential_sid", kind: "message", T: ID },
    { no: 4, name: "list_req", kind: "message", T: ListReq },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes
 */
export const ListTransferConfigsByCredentialIDRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListTransferConfigsByCredentialIDRes",
  () => [
    { no: 1, name: "entities", kind: "message", T: TransferConfig, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.UpdateTransferConfigReq
 */
export const UpdateTransferConfigReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.UpdateTransferConfigReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: TransferConfig },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.UpdateTransferConfigRes
 */
export const UpdateTransferConfigRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.UpdateTransferConfigRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: ID },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.DeleteTransferConfigReq
 */
export const DeleteTransferConfigReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.DeleteTransferConfigReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: TransferConfig },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.DeleteTransferConfigRes
 */
export const DeleteTransferConfigRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.DeleteTransferConfigRes",
  [],
);

/**
 * @generated from message api.v1alpha1.delivery.GetTransferConfigReq
 */
export const GetTransferConfigReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.GetTransferConfigReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: TransferConfig },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.GetTransferConfigRes
 */
export const GetTransferConfigRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.GetTransferConfigRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: TransferConfig },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.GetTransferConfigByNameReq
 */
export const GetTransferConfigByNameReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.GetTransferConfigByNameReq",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
    { no: 3, name: "entity", kind: "message", T: TransferConfig },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.GetTransferConfigByNameRes
 */
export const GetTransferConfigByNameRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.GetTransferConfigByNameRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: TransferConfig },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListHistoryReq
 */
export const ListHistoryReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListHistoryReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: History },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
    { no: 3, name: "list_req", kind: "message", T: ListReq },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListHistoryRes
 */
export const ListHistoryRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListHistoryRes",
  () => [
    { no: 1, name: "entities", kind: "message", T: History, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListHistoryByTransferConfigReq
 */
export const ListHistoryByTransferConfigReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListHistoryByTransferConfigReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: ListByIDReq },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListHistoryByTransferConfigRes
 */
export const ListHistoryByTransferConfigRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListHistoryByTransferConfigRes",
  () => [
    { no: 1, name: "entities", kind: "message", T: History, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.CreateHistoryReq
 */
export const CreateHistoryReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.CreateHistoryReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: History },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.CreateHistoryRes
 */
export const CreateHistoryRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.CreateHistoryRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: ID },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.GetHistoryReq
 */
export const GetHistoryReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.GetHistoryReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: ID },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.GetHistoryRes
 */
export const GetHistoryRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.GetHistoryRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: History },
  ],
);

/**
 * entity types
 *
 * @generated from message api.v1alpha1.delivery.TransferConfig
 */
export const TransferConfig = proto3.makeMessageType(
  "api.v1alpha1.delivery.TransferConfig",
  () => [
    { no: 1, name: "sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "ttl", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "credential", kind: "message", T: Credential },
    { no: 9, name: "destination", kind: "message", T: Destination },
    { no: 10, name: "source", kind: "message", T: Source },
    { no: 11, name: "created_on", kind: "message", T: Timestamp },
    { no: 12, name: "last_edited", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ID
 */
export const ID = proto3.makeMessageType(
  "api.v1alpha1.delivery.ID",
  () => [
    { no: 1, name: "sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListReq
 */
export const ListReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListReq",
  () => [
    { no: 2, name: "before_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.History
 */
export const History = proto3.makeMessageType(
  "api.v1alpha1.delivery.History",
  () => [
    { no: 1, name: "sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "transfer_config_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "transfer_config_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "delivery_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "created_on", kind: "message", T: Timestamp },
    { no: 9, name: "transfer_start", kind: "message", T: Timestamp },
    { no: 10, name: "transfer_complete", kind: "message", T: Timestamp },
    { no: 11, name: "origin", kind: "enum", T: proto3.getEnumType(OperatorApplications) },
    { no: 12, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "message_payload", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "message_payload_len", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 15, name: "status", kind: "enum", T: proto3.getEnumType(TransferStatus) },
    { no: 16, name: "is_inbound", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "transaction_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListByIDReq
 */
export const ListByIDReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListByIDReq",
  () => [
    { no: 2, name: "before_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "other_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.Credential
 */
export const Credential = proto3.makeMessageType(
  "api.v1alpha1.delivery.Credential",
  () => [
    { no: 1, name: "sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "data", kind: "message", T: CredentialData },
    { no: 10, name: "created_on", kind: "message", T: Timestamp },
    { no: 11, name: "last_edited", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.Destination
 */
export const Destination = proto3.makeMessageType(
  "api.v1alpha1.delivery.Destination",
  () => [
    { no: 1, name: "encryption", kind: "message", T: Encryption },
    { no: 2, name: "email", kind: "message", T: EmailDestination, oneof: "value" },
    { no: 3, name: "room303", kind: "message", T: Room303Destination, oneof: "value" },
    { no: 4, name: "sms", kind: "message", T: SmsDestination, oneof: "value" },
    { no: 5, name: "sftp", kind: "message", T: SftpDestination, oneof: "value" },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.SftpDestination
 */
export const SftpDestination = proto3.makeMessageType(
  "api.v1alpha1.delivery.SftpDestination",
  () => [
    { no: 2, name: "base_directory", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "port", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.Room303Destination
 */
export const Room303Destination = proto3.makeMessageType(
  "api.v1alpha1.delivery.Room303Destination",
  () => [
    { no: 1, name: "room", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.SmsDestination
 */
export const SmsDestination = proto3.makeMessageType(
  "api.v1alpha1.delivery.SmsDestination",
  () => [
    { no: 1, name: "destination_phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "source_phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.EmailDestination
 */
export const EmailDestination = proto3.makeMessageType(
  "api.v1alpha1.delivery.EmailDestination",
  () => [
    { no: 1, name: "to_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "cc_addrs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "from_addr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.CredentialData
 */
export const CredentialData = proto3.makeMessageType(
  "api.v1alpha1.delivery.CredentialData",
  () => [
    { no: 1, name: "user_password", kind: "message", T: UserPassword, oneof: "data" },
    { no: 2, name: "password", kind: "message", T: Password, oneof: "data" },
    { no: 3, name: "ssh_key_pair", kind: "message", T: SSHKeyPair, oneof: "data" },
    { no: 4, name: "pgp_key_pair", kind: "message", T: PGPKeyPair, oneof: "data" },
    { no: 5, name: "aes_password", kind: "message", T: AESPassword, oneof: "data" },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.UserPassword
 */
export const UserPassword = proto3.makeMessageType(
  "api.v1alpha1.delivery.UserPassword",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.Password
 */
export const Password = proto3.makeMessageType(
  "api.v1alpha1.delivery.Password",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.SSHKeyPair
 */
export const SSHKeyPair = proto3.makeMessageType(
  "api.v1alpha1.delivery.SSHKeyPair",
  () => [
    { no: 1, name: "public_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "private_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.PGPKeyPair
 */
export const PGPKeyPair = proto3.makeMessageType(
  "api.v1alpha1.delivery.PGPKeyPair",
  () => [
    { no: 1, name: "public_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "private_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.AESPassword
 */
export const AESPassword = proto3.makeMessageType(
  "api.v1alpha1.delivery.AESPassword",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.Source
 */
export const Source = proto3.makeMessageType(
  "api.v1alpha1.delivery.Source",
  () => [
    { no: 1, name: "encryption", kind: "message", T: Encryption },
    { no: 2, name: "sftp", kind: "message", T: SftpSource, oneof: "value" },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.SftpSource
 */
export const SftpSource = proto3.makeMessageType(
  "api.v1alpha1.delivery.SftpSource",
  () => [
    { no: 2, name: "directory", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.GetCredentialReq
 */
export const GetCredentialReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.GetCredentialReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: Credential },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.GetCredentialRes
 */
export const GetCredentialRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.GetCredentialRes",
  () => [
    { no: 1, name: "credential", kind: "message", T: Credential },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListCredentialsReq
 */
export const ListCredentialsReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListCredentialsReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: ListReq },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.ListCredentialsRes
 */
export const ListCredentialsRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.ListCredentialsRes",
  () => [
    { no: 1, name: "credentials", kind: "message", T: Credentials },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.CreateCredentialReq
 */
export const CreateCredentialReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.CreateCredentialReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: Credential },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.CreateCredentialRes
 */
export const CreateCredentialRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.CreateCredentialRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: ID },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.DeleteCredentialReq
 */
export const DeleteCredentialReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.DeleteCredentialReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: ID },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.DeleteCredentialRes
 */
export const DeleteCredentialRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.DeleteCredentialRes",
  [],
);

/**
 * @generated from message api.v1alpha1.delivery.UpdateCredentialReq
 */
export const UpdateCredentialReq = proto3.makeMessageType(
  "api.v1alpha1.delivery.UpdateCredentialReq",
  () => [
    { no: 1, name: "entity", kind: "message", T: Credential },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.UpdateCredentialRes
 */
export const UpdateCredentialRes = proto3.makeMessageType(
  "api.v1alpha1.delivery.UpdateCredentialRes",
  () => [
    { no: 1, name: "entity", kind: "message", T: ID },
  ],
);

/**
 * @generated from message api.v1alpha1.delivery.Credentials
 */
export const Credentials = proto3.makeMessageType(
  "api.v1alpha1.delivery.Credentials",
  () => [
    { no: 1, name: "entities", kind: "message", T: Credential, repeated: true },
  ],
);

