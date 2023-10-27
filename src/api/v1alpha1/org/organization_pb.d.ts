// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/org/organization.proto (package api.v1alpha1.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ClientSkin, TimeZone } from "../../commons/org_pb.js";
import type { Country } from "../../commons/country_pb.js";
import type { Organization } from "../../commons/org/organization_pb.js";

/**
 * CreateOrganizationRequest request for creating a new organization.
 *
 * @generated from message api.v1alpha1.org.CreateOrganizationRequest
 */
export declare class CreateOrganizationRequest extends Message<CreateOrganizationRequest> {
  /**
   * The organization name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Salesforce ID used for integrations.
   *
   * @generated from field: string crm_id = 2;
   */
  crmId: string;

  /**
   * Organization's time zone.
   *
   * @generated from field: api.commons.TimeZone time_zone = 3;
   */
  timeZone: TimeZone;

  /**
   * Whether account is manual only.
   *
   * @generated from field: bool is_manual_only_account = 4;
   */
  isManualOnlyAccount: boolean;

  /**
   * Backoffice UI theme/skin.
   *
   * @generated from field: api.commons.ClientSkin backoffice_theme = 5;
   */
  backofficeTheme: ClientSkin;

  /**
   * Allowed countries is used to initialize the organization's list of allowed
   * countries preference. This field is optional.
   *
   * @generated from field: repeated api.commons.Country allowed_countries = 6;
   */
  allowedCountries: Country[];

  /**
   * The ID of new organization's parent account.
   *
   * @generated from field: string p3_parent_account = 7;
   */
  p3ParentAccount: string;

  constructor(data?: PartialMessage<CreateOrganizationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.CreateOrganizationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrganizationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrganizationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrganizationRequest;

  static equals(a: CreateOrganizationRequest | PlainMessage<CreateOrganizationRequest> | undefined, b: CreateOrganizationRequest | PlainMessage<CreateOrganizationRequest> | undefined): boolean;
}

/**
 * CreateOrganizationResponse response after creating a new organization.
 *
 * @generated from message api.v1alpha1.org.CreateOrganizationResponse
 */
export declare class CreateOrganizationResponse extends Message<CreateOrganizationResponse> {
  /**
   * Generated UUID for the organization.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  constructor(data?: PartialMessage<CreateOrganizationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.CreateOrganizationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrganizationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrganizationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrganizationResponse;

  static equals(a: CreateOrganizationResponse | PlainMessage<CreateOrganizationResponse> | undefined, b: CreateOrganizationResponse | PlainMessage<CreateOrganizationResponse> | undefined): boolean;
}

/**
 * GetOrganizationRequest request to get users organization
 *
 * @generated from message api.v1alpha1.org.GetOrganizationRequest
 */
export declare class GetOrganizationRequest extends Message<GetOrganizationRequest> {
  constructor(data?: PartialMessage<GetOrganizationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetOrganizationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationRequest;

  static equals(a: GetOrganizationRequest | PlainMessage<GetOrganizationRequest> | undefined, b: GetOrganizationRequest | PlainMessage<GetOrganizationRequest> | undefined): boolean;
}

/**
 * GetOrganizationResponse a single organization
 *
 * @generated from message api.v1alpha1.org.GetOrganizationResponse
 */
export declare class GetOrganizationResponse extends Message<GetOrganizationResponse> {
  /**
   * Organization filtered by field masks
   *
   * @generated from field: api.commons.org.Organization organization = 1;
   */
  organization?: Organization;

  constructor(data?: PartialMessage<GetOrganizationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetOrganizationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationResponse;

  static equals(a: GetOrganizationResponse | PlainMessage<GetOrganizationResponse> | undefined, b: GetOrganizationResponse | PlainMessage<GetOrganizationResponse> | undefined): boolean;
}

/**
 * GetOrganizationByIdRequest request to get single organization by given id
 *
 * @generated from message api.v1alpha1.org.GetOrganizationByIdRequest
 */
export declare class GetOrganizationByIdRequest extends Message<GetOrganizationByIdRequest> {
  /**
   * OrgID filter
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  constructor(data?: PartialMessage<GetOrganizationByIdRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetOrganizationByIdRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationByIdRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationByIdRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationByIdRequest;

  static equals(a: GetOrganizationByIdRequest | PlainMessage<GetOrganizationByIdRequest> | undefined, b: GetOrganizationByIdRequest | PlainMessage<GetOrganizationByIdRequest> | undefined): boolean;
}

/**
 * GetOrganizationByIdResponse a single organization from given org id
 *
 * @generated from message api.v1alpha1.org.GetOrganizationByIdResponse
 */
export declare class GetOrganizationByIdResponse extends Message<GetOrganizationByIdResponse> {
  /**
   * Organization
   *
   * @generated from field: api.commons.org.Organization organization = 1;
   */
  organization?: Organization;

  constructor(data?: PartialMessage<GetOrganizationByIdResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.GetOrganizationByIdResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationByIdResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationByIdResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationByIdResponse;

  static equals(a: GetOrganizationByIdResponse | PlainMessage<GetOrganizationByIdResponse> | undefined, b: GetOrganizationByIdResponse | PlainMessage<GetOrganizationByIdResponse> | undefined): boolean;
}

/**
 * Request for the ListOrganizations RPC, filtered by region.
 *
 * @generated from message api.v1alpha1.org.ListOrganizationsRequest
 */
export declare class ListOrganizationsRequest extends Message<ListOrganizationsRequest> {
  /**
   * Identifier to list organizations.
   *
   * @generated from oneof api.v1alpha1.org.ListOrganizationsRequest.identifier
   */
  identifier: {
    /**
     * No filter (get all global organizations).
     *
     * @generated from field: bool global = 1;
     */
    value: boolean;
    case: "global";
  } | {
    /**
     * Filter by region.
     *
     * @generated from field: string region_id = 2;
     */
    value: string;
    case: "regionId";
  } | { case: undefined; value?: undefined };

  /**
   * Get only archived or unarchived organizations.
   *
   * @generated from field: bool archived = 3;
   */
  archived: boolean;

  constructor(data?: PartialMessage<ListOrganizationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOrganizationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganizationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganizationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganizationsRequest;

  static equals(a: ListOrganizationsRequest | PlainMessage<ListOrganizationsRequest> | undefined, b: ListOrganizationsRequest | PlainMessage<ListOrganizationsRequest> | undefined): boolean;
}

/**
 * Response for the ListOrganizations RPC, returning all organizations.
 *
 * @generated from message api.v1alpha1.org.ListOrganizationsResponse
 */
export declare class ListOrganizationsResponse extends Message<ListOrganizationsResponse> {
  /**
   * Organizations filtered by identifier.
   *
   * @generated from field: repeated api.v1alpha1.org.OrganizationDetails organization_details = 1;
   */
  organizationDetails: OrganizationDetails[];

  constructor(data?: PartialMessage<ListOrganizationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOrganizationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganizationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganizationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganizationsResponse;

  static equals(a: ListOrganizationsResponse | PlainMessage<ListOrganizationsResponse> | undefined, b: ListOrganizationsResponse | PlainMessage<ListOrganizationsResponse> | undefined): boolean;
}

/**
 * Wrapper for associating non entity fields with an Organization
 *
 * @generated from message api.v1alpha1.org.OrganizationDetails
 */
export declare class OrganizationDetails extends Message<OrganizationDetails> {
  /**
   * Organization core entity.
   *
   * @generated from field: api.commons.org.Organization organization = 1;
   */
  organization?: Organization;

  /**
   * Date the last broadcast was scheduled.
   *
   * @generated from field: google.protobuf.Timestamp last_scheduled_date = 2;
   */
  lastScheduledDate?: Timestamp;

  constructor(data?: PartialMessage<OrganizationDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.OrganizationDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationDetails;

  static equals(a: OrganizationDetails | PlainMessage<OrganizationDetails> | undefined, b: OrganizationDetails | PlainMessage<OrganizationDetails> | undefined): boolean;
}

/**
 * ConvertOrgToManualRequest request to convert a single organization
 * to manual only by org id.
 *
 * @generated from message api.v1alpha1.org.ConvertOrgToManualRequest
 */
export declare class ConvertOrgToManualRequest extends Message<ConvertOrgToManualRequest> {
  /**
   * Org id to convert to manual
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  constructor(data?: PartialMessage<ConvertOrgToManualRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ConvertOrgToManualRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConvertOrgToManualRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConvertOrgToManualRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConvertOrgToManualRequest;

  static equals(a: ConvertOrgToManualRequest | PlainMessage<ConvertOrgToManualRequest> | undefined, b: ConvertOrgToManualRequest | PlainMessage<ConvertOrgToManualRequest> | undefined): boolean;
}

/**
 * ConvertOrgToManualRequest response for converting an organization to manual.
 *
 * @generated from message api.v1alpha1.org.ConvertOrgToManualResponse
 */
export declare class ConvertOrgToManualResponse extends Message<ConvertOrgToManualResponse> {
  constructor(data?: PartialMessage<ConvertOrgToManualResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ConvertOrgToManualResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConvertOrgToManualResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConvertOrgToManualResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConvertOrgToManualResponse;

  static equals(a: ConvertOrgToManualResponse | PlainMessage<ConvertOrgToManualResponse> | undefined, b: ConvertOrgToManualResponse | PlainMessage<ConvertOrgToManualResponse> | undefined): boolean;
}

/**
 * ListOwnedOrgsRequest request for listing p3 owned orgs for a specific org id.
 * Org id is that of the calling user.
 *
 * @generated from message api.v1alpha1.org.ListOwnedOrgsRequest
 */
export declare class ListOwnedOrgsRequest extends Message<ListOwnedOrgsRequest> {
  constructor(data?: PartialMessage<ListOwnedOrgsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOwnedOrgsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOwnedOrgsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOwnedOrgsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOwnedOrgsRequest;

  static equals(a: ListOwnedOrgsRequest | PlainMessage<ListOwnedOrgsRequest> | undefined, b: ListOwnedOrgsRequest | PlainMessage<ListOwnedOrgsRequest> | undefined): boolean;
}

/**
 * ListOwnedOrgsRequest response listing orgs owned by the requested org id.
 *
 * @generated from message api.v1alpha1.org.ListOwnedOrgsResponse
 */
export declare class ListOwnedOrgsResponse extends Message<ListOwnedOrgsResponse> {
  /**
   * List of orgs owned by requested org id.
   *
   * @generated from field: repeated api.v1alpha1.org.OrganizationDetails organization_details = 1;
   */
  organizationDetails: OrganizationDetails[];

  constructor(data?: PartialMessage<ListOwnedOrgsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOwnedOrgsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOwnedOrgsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOwnedOrgsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOwnedOrgsResponse;

  static equals(a: ListOwnedOrgsResponse | PlainMessage<ListOwnedOrgsResponse> | undefined, b: ListOwnedOrgsResponse | PlainMessage<ListOwnedOrgsResponse> | undefined): boolean;
}

/**
 * UpdateOrganizationRequest request to update the mutable fields
 * on the Organization entity using the provided field mask.
 *
 * @generated from message api.v1alpha1.org.UpdateOrganizationRequest
 */
export declare class UpdateOrganizationRequest extends Message<UpdateOrganizationRequest> {
  /**
   * Id of organization to update.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * TimeZone to set.
   *
   * @generated from field: api.commons.TimeZone time_zone = 2;
   */
  timeZone: TimeZone;

  /**
   * BillingId to set.
   *
   * @generated from field: string billing_id = 3;
   */
  billingId: string;

  /**
   * Name to set.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * Update the P3 owning org
   *
   * @generated from field: string p3_owner_id = 5;
   */
  p3OwnerId: string;

  /**
   * Status of being archived to set
   *
   * @generated from field: bool archived = 6;
   */
  archived: boolean;

  /**
   * @generated from field: repeated string field_mask = 10;
   */
  fieldMask: string[];

  constructor(data?: PartialMessage<UpdateOrganizationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateOrganizationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateOrganizationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateOrganizationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateOrganizationRequest;

  static equals(a: UpdateOrganizationRequest | PlainMessage<UpdateOrganizationRequest> | undefined, b: UpdateOrganizationRequest | PlainMessage<UpdateOrganizationRequest> | undefined): boolean;
}

/**
 * UpdateOrganizationResponse response for updating an organization
 * returns the organization.
 *
 * @generated from message api.v1alpha1.org.UpdateOrganizationResponse
 */
export declare class UpdateOrganizationResponse extends Message<UpdateOrganizationResponse> {
  /**
   * @generated from field: api.commons.org.Organization organization = 1;
   */
  organization?: Organization;

  constructor(data?: PartialMessage<UpdateOrganizationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UpdateOrganizationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateOrganizationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateOrganizationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateOrganizationResponse;

  static equals(a: UpdateOrganizationResponse | PlainMessage<UpdateOrganizationResponse> | undefined, b: UpdateOrganizationResponse | PlainMessage<UpdateOrganizationResponse> | undefined): boolean;
}

/**
 * The request for ArchiveOrganization
 *
 * @generated from message api.v1alpha1.org.ArchiveOrganizationRequest
 */
export declare class ArchiveOrganizationRequest extends Message<ArchiveOrganizationRequest> {
  /**
   * Required. Archives the specified organization
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  constructor(data?: PartialMessage<ArchiveOrganizationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ArchiveOrganizationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArchiveOrganizationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArchiveOrganizationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArchiveOrganizationRequest;

  static equals(a: ArchiveOrganizationRequest | PlainMessage<ArchiveOrganizationRequest> | undefined, b: ArchiveOrganizationRequest | PlainMessage<ArchiveOrganizationRequest> | undefined): boolean;
}

/**
 * The response for ArchiveOrganization
 *
 * @generated from message api.v1alpha1.org.ArchiveOrganizationResponse
 */
export declare class ArchiveOrganizationResponse extends Message<ArchiveOrganizationResponse> {
  constructor(data?: PartialMessage<ArchiveOrganizationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ArchiveOrganizationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArchiveOrganizationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArchiveOrganizationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArchiveOrganizationResponse;

  static equals(a: ArchiveOrganizationResponse | PlainMessage<ArchiveOrganizationResponse> | undefined, b: ArchiveOrganizationResponse | PlainMessage<ArchiveOrganizationResponse> | undefined): boolean;
}

/**
 * The request for UnArchiveOrganization
 *
 * @generated from message api.v1alpha1.org.UnArchiveOrganizationRequest
 */
export declare class UnArchiveOrganizationRequest extends Message<UnArchiveOrganizationRequest> {
  /**
   * Required. Unarchives the specified organization
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  constructor(data?: PartialMessage<UnArchiveOrganizationRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UnArchiveOrganizationRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnArchiveOrganizationRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnArchiveOrganizationRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnArchiveOrganizationRequest;

  static equals(a: UnArchiveOrganizationRequest | PlainMessage<UnArchiveOrganizationRequest> | undefined, b: UnArchiveOrganizationRequest | PlainMessage<UnArchiveOrganizationRequest> | undefined): boolean;
}

/**
 * The response for UnArchiveOrganization
 *
 * @generated from message api.v1alpha1.org.UnArchiveOrganizationResponse
 */
export declare class UnArchiveOrganizationResponse extends Message<UnArchiveOrganizationResponse> {
  constructor(data?: PartialMessage<UnArchiveOrganizationResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.UnArchiveOrganizationResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnArchiveOrganizationResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnArchiveOrganizationResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnArchiveOrganizationResponse;

  static equals(a: UnArchiveOrganizationResponse | PlainMessage<UnArchiveOrganizationResponse> | undefined, b: UnArchiveOrganizationResponse | PlainMessage<UnArchiveOrganizationResponse> | undefined): boolean;
}

/**
 * ListOrganizationsGloballyRequest request to list all organizations globally - gets archived and unarchived
 *
 * @generated from message api.v1alpha1.org.ListAllOrganizationsGloballyRequest
 */
export declare class ListAllOrganizationsGloballyRequest extends Message<ListAllOrganizationsGloballyRequest> {
  constructor(data?: PartialMessage<ListAllOrganizationsGloballyRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListAllOrganizationsGloballyRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAllOrganizationsGloballyRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAllOrganizationsGloballyRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAllOrganizationsGloballyRequest;

  static equals(a: ListAllOrganizationsGloballyRequest | PlainMessage<ListAllOrganizationsGloballyRequest> | undefined, b: ListAllOrganizationsGloballyRequest | PlainMessage<ListAllOrganizationsGloballyRequest> | undefined): boolean;
}

/**
 * Response for the ListAllOrganizationsGlobally RPC, returning all organizations globally - gets archived and unarchived
 *
 * @generated from message api.v1alpha1.org.ListAllOrganizationsGloballyResponse
 */
export declare class ListAllOrganizationsGloballyResponse extends Message<ListAllOrganizationsGloballyResponse> {
  /**
   * Organizations filtered by identifier.
   *
   * @generated from field: repeated api.v1alpha1.org.ListAllOrganizationsGloballyResponse.OrganizationDetails organization_details = 1;
   */
  organizationDetails: ListAllOrganizationsGloballyResponse_OrganizationDetails[];

  constructor(data?: PartialMessage<ListAllOrganizationsGloballyResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListAllOrganizationsGloballyResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAllOrganizationsGloballyResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAllOrganizationsGloballyResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAllOrganizationsGloballyResponse;

  static equals(a: ListAllOrganizationsGloballyResponse | PlainMessage<ListAllOrganizationsGloballyResponse> | undefined, b: ListAllOrganizationsGloballyResponse | PlainMessage<ListAllOrganizationsGloballyResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.ListAllOrganizationsGloballyResponse.OrganizationDetails
 */
export declare class ListAllOrganizationsGloballyResponse_OrganizationDetails extends Message<ListAllOrganizationsGloballyResponse_OrganizationDetails> {
  /**
   * An organization's globally unique identifier.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * The organization name.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * First enabled region's clientSid; will be deprecated for
   * enabled_regions map.
   *
   * @generated from field: int64 client_sid = 3;
   */
  clientSid: bigint;

  /**
   * Billing_prefix + clientSid. Used for integrations and billing.
   *
   * @generated from field: string billing_id = 4;
   */
  billingId: string;

  /**
   * Default region org was first enbabled for.
   *
   * @generated from field: string region_id = 5;
   */
  regionId: string;

  /**
   * Date of organization creation.
   *
   * @generated from field: google.protobuf.Timestamp add_date = 6;
   */
  addDate?: Timestamp;

  /**
   * Date the last broadcast was scheduled.
   * last_scheduled_date has three different states.
   * 1. the field is a valid timestamp
   * 2. the field is a zero value timestamp. This
   *    means the organization is in the current region
   *    but does not have a last scheduled date.
   * 3. the field is nil. This means the organization
   *    does not belong to the current region.
   *
   * @generated from field: google.protobuf.Timestamp last_scheduled_date = 7;
   */
  lastScheduledDate?: Timestamp;

  /**
   * Whether the organization is archived.
   *
   * @generated from field: bool archived = 8;
   */
  archived: boolean;

  constructor(data?: PartialMessage<ListAllOrganizationsGloballyResponse_OrganizationDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListAllOrganizationsGloballyResponse.OrganizationDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAllOrganizationsGloballyResponse_OrganizationDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAllOrganizationsGloballyResponse_OrganizationDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAllOrganizationsGloballyResponse_OrganizationDetails;

  static equals(a: ListAllOrganizationsGloballyResponse_OrganizationDetails | PlainMessage<ListAllOrganizationsGloballyResponse_OrganizationDetails> | undefined, b: ListAllOrganizationsGloballyResponse_OrganizationDetails | PlainMessage<ListAllOrganizationsGloballyResponse_OrganizationDetails> | undefined): boolean;
}

/**
 * ListOrganizationsByRegionRequest request to list organizations in the given region - only gets unarchived
 *
 * @generated from message api.v1alpha1.org.ListOrganizationsByRegionRequest
 */
export declare class ListOrganizationsByRegionRequest extends Message<ListOrganizationsByRegionRequest> {
  /**
   * The region to get organizations in
   *
   * @generated from field: string region_id = 1;
   */
  regionId: string;

  constructor(data?: PartialMessage<ListOrganizationsByRegionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOrganizationsByRegionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganizationsByRegionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganizationsByRegionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganizationsByRegionRequest;

  static equals(a: ListOrganizationsByRegionRequest | PlainMessage<ListOrganizationsByRegionRequest> | undefined, b: ListOrganizationsByRegionRequest | PlainMessage<ListOrganizationsByRegionRequest> | undefined): boolean;
}

/**
 * Response for the ListOrganizationsByRegion RPC, lists organizations in the given region - only gets unarchived
 *
 * @generated from message api.v1alpha1.org.ListOrganizationsByRegionResponse
 */
export declare class ListOrganizationsByRegionResponse extends Message<ListOrganizationsByRegionResponse> {
  /**
   * Organizations filtered by identifier.
   *
   * @generated from field: repeated api.v1alpha1.org.ListOrganizationsByRegionResponse.OrganizationDetails organization_details = 1;
   */
  organizationDetails: ListOrganizationsByRegionResponse_OrganizationDetails[];

  constructor(data?: PartialMessage<ListOrganizationsByRegionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOrganizationsByRegionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganizationsByRegionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganizationsByRegionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganizationsByRegionResponse;

  static equals(a: ListOrganizationsByRegionResponse | PlainMessage<ListOrganizationsByRegionResponse> | undefined, b: ListOrganizationsByRegionResponse | PlainMessage<ListOrganizationsByRegionResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.ListOrganizationsByRegionResponse.OrganizationDetails
 */
export declare class ListOrganizationsByRegionResponse_OrganizationDetails extends Message<ListOrganizationsByRegionResponse_OrganizationDetails> {
  /**
   * An organization's globally unique identifier.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * The organization name.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * First enabled region's clientSid; will be deprecated for
   * enabled_regions map.
   *
   * @generated from field: int64 client_sid = 3;
   */
  clientSid: bigint;

  /**
   * Billing_prefix + clientSid. Used for integrations and billing.
   *
   * @generated from field: string billing_id = 4;
   */
  billingId: string;

  /**
   * Default region org was first enbabled for.
   *
   * @generated from field: string region_id = 5;
   */
  regionId: string;

  /**
   * Date of organization creation.
   *
   * @generated from field: google.protobuf.Timestamp add_date = 6;
   */
  addDate?: Timestamp;

  /**
   * Date the last broadcast was scheduled.
   * last_scheduled_date has three different states.
   * 1. the field is a valid timestamp
   * 2. the field is a zero value timestamp. This
   *    means the organization is in the current region
   *    but does not have a last scheduled date.
   * 3. the field is nil. This means the organization
   *    does not belong to the current region.
   *
   * @generated from field: google.protobuf.Timestamp last_scheduled_date = 7;
   */
  lastScheduledDate?: Timestamp;

  constructor(data?: PartialMessage<ListOrganizationsByRegionResponse_OrganizationDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListOrganizationsByRegionResponse.OrganizationDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListOrganizationsByRegionResponse_OrganizationDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListOrganizationsByRegionResponse_OrganizationDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListOrganizationsByRegionResponse_OrganizationDetails;

  static equals(a: ListOrganizationsByRegionResponse_OrganizationDetails | PlainMessage<ListOrganizationsByRegionResponse_OrganizationDetails> | undefined, b: ListOrganizationsByRegionResponse_OrganizationDetails | PlainMessage<ListOrganizationsByRegionResponse_OrganizationDetails> | undefined): boolean;
}

/**
 * Request for the ListArchivedOrganizations RPC, returning archived organizations in the current region.
 *
 * @generated from message api.v1alpha1.org.ListArchivedOrganizationsRequest
 */
export declare class ListArchivedOrganizationsRequest extends Message<ListArchivedOrganizationsRequest> {
  constructor(data?: PartialMessage<ListArchivedOrganizationsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListArchivedOrganizationsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListArchivedOrganizationsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListArchivedOrganizationsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListArchivedOrganizationsRequest;

  static equals(a: ListArchivedOrganizationsRequest | PlainMessage<ListArchivedOrganizationsRequest> | undefined, b: ListArchivedOrganizationsRequest | PlainMessage<ListArchivedOrganizationsRequest> | undefined): boolean;
}

/**
 * Response for the ListArchivedOrganizations RPC, returning archived organizations in the current region.
 *
 * @generated from message api.v1alpha1.org.ListArchivedOrganizationsResponse
 */
export declare class ListArchivedOrganizationsResponse extends Message<ListArchivedOrganizationsResponse> {
  /**
   * Organizations filtered by identifier.
   *
   * @generated from field: repeated api.v1alpha1.org.ListArchivedOrganizationsResponse.OrganizationDetails organization_details = 1;
   */
  organizationDetails: ListArchivedOrganizationsResponse_OrganizationDetails[];

  constructor(data?: PartialMessage<ListArchivedOrganizationsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListArchivedOrganizationsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListArchivedOrganizationsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListArchivedOrganizationsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListArchivedOrganizationsResponse;

  static equals(a: ListArchivedOrganizationsResponse | PlainMessage<ListArchivedOrganizationsResponse> | undefined, b: ListArchivedOrganizationsResponse | PlainMessage<ListArchivedOrganizationsResponse> | undefined): boolean;
}

/**
 * @generated from message api.v1alpha1.org.ListArchivedOrganizationsResponse.OrganizationDetails
 */
export declare class ListArchivedOrganizationsResponse_OrganizationDetails extends Message<ListArchivedOrganizationsResponse_OrganizationDetails> {
  /**
   * An organization's globally unique identifier.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * The organization name.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * Billing_prefix + clientSid. Used for integrations and billing.
   *
   * @generated from field: string billing_id = 3;
   */
  billingId: string;

  /**
   * Date of organization creation.
   *
   * @generated from field: google.protobuf.Timestamp add_date = 4;
   */
  addDate?: Timestamp;

  /**
   * Date the last broadcast was scheduled.
   *
   * @generated from field: google.protobuf.Timestamp last_scheduled_date = 5;
   */
  lastScheduledDate?: Timestamp;

  constructor(data?: PartialMessage<ListArchivedOrganizationsResponse_OrganizationDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.v1alpha1.org.ListArchivedOrganizationsResponse.OrganizationDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListArchivedOrganizationsResponse_OrganizationDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListArchivedOrganizationsResponse_OrganizationDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListArchivedOrganizationsResponse_OrganizationDetails;

  static equals(a: ListArchivedOrganizationsResponse_OrganizationDetails | PlainMessage<ListArchivedOrganizationsResponse_OrganizationDetails> | undefined, b: ListArchivedOrganizationsResponse_OrganizationDetails | PlainMessage<ListArchivedOrganizationsResponse_OrganizationDetails> | undefined): boolean;
}

