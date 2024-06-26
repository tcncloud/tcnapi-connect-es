// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/organization.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { ClientSkin, TimeZone } from "../../commons/org_pb.js";
import { Country } from "../../commons/country_pb.js";
import { Organization } from "../../commons/org/organization_pb.js";

/**
 * CreateOrganizationRequest request for creating a new organization.
 *
 * @generated from message api.v1alpha1.org.CreateOrganizationRequest
 */
export const CreateOrganizationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateOrganizationRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "crm_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "time_zone", kind: "enum", T: proto3.getEnumType(TimeZone) },
    { no: 4, name: "is_manual_only_account", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "backoffice_theme", kind: "enum", T: proto3.getEnumType(ClientSkin) },
    { no: 6, name: "allowed_countries", kind: "enum", T: proto3.getEnumType(Country), repeated: true },
    { no: 7, name: "p3_parent_account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * CreateOrganizationResponse response after creating a new organization.
 *
 * @generated from message api.v1alpha1.org.CreateOrganizationResponse
 */
export const CreateOrganizationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.CreateOrganizationResponse",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetOrganizationRequest request to get users organization
 *
 * @generated from message api.v1alpha1.org.GetOrganizationRequest
 */
export const GetOrganizationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetOrganizationRequest",
  [],
);

/**
 * GetOrganizationResponse a single organization
 *
 * @generated from message api.v1alpha1.org.GetOrganizationResponse
 */
export const GetOrganizationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetOrganizationResponse",
  () => [
    { no: 1, name: "organization", kind: "message", T: Organization },
  ],
);

/**
 * GetOrganizationByIdRequest request to get single organization by given id
 *
 * @generated from message api.v1alpha1.org.GetOrganizationByIdRequest
 */
export const GetOrganizationByIdRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetOrganizationByIdRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GetOrganizationByIdResponse a single organization from given org id
 *
 * @generated from message api.v1alpha1.org.GetOrganizationByIdResponse
 */
export const GetOrganizationByIdResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.GetOrganizationByIdResponse",
  () => [
    { no: 1, name: "organization", kind: "message", T: Organization },
  ],
);

/**
 * Request for the ListOrganizations RPC, filtered by region.
 *
 * @generated from message api.v1alpha1.org.ListOrganizationsRequest
 */
export const ListOrganizationsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListOrganizationsRequest",
  () => [
    { no: 1, name: "global", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "identifier" },
    { no: 2, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "identifier" },
    { no: 3, name: "archived", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Response for the ListOrganizations RPC, returning all organizations.
 *
 * @generated from message api.v1alpha1.org.ListOrganizationsResponse
 */
export const ListOrganizationsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListOrganizationsResponse",
  () => [
    { no: 1, name: "organization_details", kind: "message", T: OrganizationDetails, repeated: true },
  ],
);

/**
 * Wrapper for associating non entity fields with an Organization
 *
 * @generated from message api.v1alpha1.org.OrganizationDetails
 */
export const OrganizationDetails = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.OrganizationDetails",
  () => [
    { no: 1, name: "organization", kind: "message", T: Organization },
    { no: 2, name: "last_scheduled_date", kind: "message", T: Timestamp },
  ],
);

/**
 * ConvertOrgToManualRequest request to convert a single organization
 * to manual only by org id.
 *
 * @generated from message api.v1alpha1.org.ConvertOrgToManualRequest
 */
export const ConvertOrgToManualRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ConvertOrgToManualRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ConvertOrgToManualRequest response for converting an organization to manual.
 *
 * @generated from message api.v1alpha1.org.ConvertOrgToManualResponse
 */
export const ConvertOrgToManualResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ConvertOrgToManualResponse",
  [],
);

/**
 * ListOwnedOrgsRequest request for listing p3 owned orgs for a specific org id.
 * Org id is that of the calling user.
 *
 * @generated from message api.v1alpha1.org.ListOwnedOrgsRequest
 */
export const ListOwnedOrgsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListOwnedOrgsRequest",
  [],
);

/**
 * ListOwnedOrgsRequest response listing orgs owned by the requested org id.
 *
 * @generated from message api.v1alpha1.org.ListOwnedOrgsResponse
 */
export const ListOwnedOrgsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListOwnedOrgsResponse",
  () => [
    { no: 1, name: "organization_details", kind: "message", T: OrganizationDetails, repeated: true },
  ],
);

/**
 * UpdateOrganizationRequest request to update the mutable fields
 * on the Organization entity using the provided field mask.
 *
 * @generated from message api.v1alpha1.org.UpdateOrganizationRequest
 */
export const UpdateOrganizationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateOrganizationRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "time_zone", kind: "enum", T: proto3.getEnumType(TimeZone) },
    { no: 3, name: "billing_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "p3_owner_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "archived", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "field_mask", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * UpdateOrganizationResponse response for updating an organization
 * returns the organization.
 *
 * @generated from message api.v1alpha1.org.UpdateOrganizationResponse
 */
export const UpdateOrganizationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UpdateOrganizationResponse",
  () => [
    { no: 1, name: "organization", kind: "message", T: Organization },
  ],
);

/**
 * The request for ArchiveOrganization
 *
 * @generated from message api.v1alpha1.org.ArchiveOrganizationRequest
 */
export const ArchiveOrganizationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ArchiveOrganizationRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The response for ArchiveOrganization
 *
 * @generated from message api.v1alpha1.org.ArchiveOrganizationResponse
 */
export const ArchiveOrganizationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ArchiveOrganizationResponse",
  [],
);

/**
 * The request for UnArchiveOrganization
 *
 * @generated from message api.v1alpha1.org.UnArchiveOrganizationRequest
 */
export const UnArchiveOrganizationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UnArchiveOrganizationRequest",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The response for UnArchiveOrganization
 *
 * @generated from message api.v1alpha1.org.UnArchiveOrganizationResponse
 */
export const UnArchiveOrganizationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.UnArchiveOrganizationResponse",
  [],
);

/**
 * ListOrganizationsGloballyRequest request to list all organizations globally - gets archived and unarchived
 *
 * @generated from message api.v1alpha1.org.ListAllOrganizationsGloballyRequest
 */
export const ListAllOrganizationsGloballyRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListAllOrganizationsGloballyRequest",
  [],
);

/**
 * Response for the ListAllOrganizationsGlobally RPC, returning all organizations globally - gets archived and unarchived
 *
 * @generated from message api.v1alpha1.org.ListAllOrganizationsGloballyResponse
 */
export const ListAllOrganizationsGloballyResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListAllOrganizationsGloballyResponse",
  () => [
    { no: 1, name: "organization_details", kind: "message", T: ListAllOrganizationsGloballyResponse_OrganizationDetails, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.ListAllOrganizationsGloballyResponse.OrganizationDetails
 */
export const ListAllOrganizationsGloballyResponse_OrganizationDetails = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListAllOrganizationsGloballyResponse.OrganizationDetails",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "billing_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "add_date", kind: "message", T: Timestamp },
    { no: 7, name: "last_scheduled_date", kind: "message", T: Timestamp },
    { no: 8, name: "archived", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "ListAllOrganizationsGloballyResponse_OrganizationDetails"},
);

/**
 * ListOrganizationsByRegionRequest request to list organizations in the given region - only gets unarchived
 *
 * @generated from message api.v1alpha1.org.ListOrganizationsByRegionRequest
 */
export const ListOrganizationsByRegionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListOrganizationsByRegionRequest",
  () => [
    { no: 1, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response for the ListOrganizationsByRegion RPC, lists organizations in the given region - only gets unarchived
 *
 * @generated from message api.v1alpha1.org.ListOrganizationsByRegionResponse
 */
export const ListOrganizationsByRegionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListOrganizationsByRegionResponse",
  () => [
    { no: 1, name: "organization_details", kind: "message", T: ListOrganizationsByRegionResponse_OrganizationDetails, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.ListOrganizationsByRegionResponse.OrganizationDetails
 */
export const ListOrganizationsByRegionResponse_OrganizationDetails = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListOrganizationsByRegionResponse.OrganizationDetails",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "billing_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "add_date", kind: "message", T: Timestamp },
    { no: 7, name: "last_scheduled_date", kind: "message", T: Timestamp },
  ],
  {localName: "ListOrganizationsByRegionResponse_OrganizationDetails"},
);

/**
 * Request for the ListArchivedOrganizations RPC, returning archived organizations in the current region.
 *
 * @generated from message api.v1alpha1.org.ListArchivedOrganizationsRequest
 */
export const ListArchivedOrganizationsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListArchivedOrganizationsRequest",
  [],
);

/**
 * Response for the ListArchivedOrganizations RPC, returning archived organizations in the current region.
 *
 * @generated from message api.v1alpha1.org.ListArchivedOrganizationsResponse
 */
export const ListArchivedOrganizationsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListArchivedOrganizationsResponse",
  () => [
    { no: 1, name: "organization_details", kind: "message", T: ListArchivedOrganizationsResponse_OrganizationDetails, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.org.ListArchivedOrganizationsResponse.OrganizationDetails
 */
export const ListArchivedOrganizationsResponse_OrganizationDetails = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.org.ListArchivedOrganizationsResponse.OrganizationDetails",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "billing_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "add_date", kind: "message", T: Timestamp },
    { no: 5, name: "last_scheduled_date", kind: "message", T: Timestamp },
    { no: 6, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ListArchivedOrganizationsResponse_OrganizationDetails"},
);

