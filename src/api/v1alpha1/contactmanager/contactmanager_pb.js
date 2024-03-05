// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/v1alpha1/contactmanager/contactmanager.proto (package api.v1alpha1.contactmanager, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { ContactManagerEntry as ContactManagerEntry$1, ContactManagerEntryVal as ContactManagerEntryVal$1, ContactManagerList as ContactManagerList$1 } from "../../commons/contactmanager_pb.js";

/**
 * New Proto's For Get and List - Contact List and Contact Entries
 *
 * @generated from message api.v1alpha1.contactmanager.GetContactListRequest
 */
export const GetContactListRequest = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.GetContactListRequest",
  () => [
    { no: 1, name: "request_mask", kind: "message", T: FieldMask },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.GetContactListResponse
 */
export const GetContactListResponse = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.GetContactListResponse",
  () => [
    { no: 1, name: "contact_list", kind: "message", T: ContactManagerList$1, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.ListContactEntryListRequest
 */
export const ListContactEntryListRequest = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.ListContactEntryListRequest",
  () => [
    { no: 1, name: "contact_manager_list_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * List all Unencrypted Data. Encrypted Data would be sent On Double Click of the Record
 * Seperate API to List All Encrypted Data
 *
 * @generated from message api.v1alpha1.contactmanager.ListContactEntryListResponse
 */
export const ListContactEntryListResponse = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.ListContactEntryListResponse",
  () => [
    { no: 1, name: "contact_entry", kind: "message", T: ContactManagerEntry$1, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.GetEncContactEntryRequest
 */
export const GetEncContactEntryRequest = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.GetEncContactEntryRequest",
  () => [
    { no: 1, name: "contact_manager_entry_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.GetEncContactEntryResponse
 */
export const GetEncContactEntryResponse = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.GetEncContactEntryResponse",
  () => [
    { no: 1, name: "contact_entry", kind: "message", T: ContactManagerEntry$1, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.GetKYCEncContactEntryRequest
 */
export const GetKYCEncContactEntryRequest = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.GetKYCEncContactEntryRequest",
  () => [
    { no: 1, name: "project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "entry_val", kind: "message", T: ContactManagerEntryVal$1, repeated: true },
    { no: 3, name: "min_kyc_limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.GetKYCEncContactEntryResponse
 */
export const GetKYCEncContactEntryResponse = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.GetKYCEncContactEntryResponse",
  () => [
    { no: 1, name: "verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.GetKYCKeysRequest
 */
export const GetKYCKeysRequest = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.GetKYCKeysRequest",
  [],
);

/**
 * @generated from message api.v1alpha1.contactmanager.GetKYCKeysResponse
 */
export const GetKYCKeysResponse = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.GetKYCKeysResponse",
  () => [
    { no: 1, name: "entry_val", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "kyc_limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Common messages deprecated
 *
 * @generated from message api.v1alpha1.contactmanager.ContactManagerEntry
 */
export const ContactManagerEntry = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.ContactManagerEntry",
  () => [
    { no: 1, name: "contact_manager_entry_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "contact_manager_entry_list_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "date_created", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.ContactManagerList
 */
export const ContactManagerList = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.ContactManagerList",
  () => [
    { no: 1, name: "contact_manager_list_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "file_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "list_details", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "ttl", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 8, name: "date_created", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message api.v1alpha1.contactmanager.ContactManagerEntryVal
 */
export const ContactManagerEntryVal = proto3.makeMessageType(
  "api.v1alpha1.contactmanager.ContactManagerEntryVal",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

