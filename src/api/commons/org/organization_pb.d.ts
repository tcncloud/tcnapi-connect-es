// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/org/organization.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ClientSkin, TimeZone } from "../org_pb.js";

/**
 * Organization contains the basic properties for an organization.
 *
 * @generated from message api.commons.org.Organization
 */
export declare class Organization extends Message<Organization> {
  /**
   * An organization's globally unique identifier.
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Map of regionId to clientSid. Shows an org's enabled regions.
   *
   * @generated from field: map<string, int64> enabled_regions = 2;
   */
  enabledRegions: { [key: string]: bigint };

  /**
   * Default region org was first enbabled for.
   *
   * @generated from field: string region_id = 3;
   */
  regionId: string;

  /**
   * Billing_prefix + clientSid. Used for integrations and billing.
   *
   * @generated from field: string billing_id = 4;
   */
  billingId: string;

  /**
   * First enabled region's clientSid; will be deprecated for
   * enabled_regions map.
   *
   * @generated from field: int64 client_sid = 5;
   */
  clientSid: bigint;

  /**
   * The organization name.
   *
   * @generated from field: string name = 6;
   */
  name: string;

  /**
   * Date of organization creation.
   *
   * @generated from field: google.protobuf.Timestamp add_date = 7;
   */
  addDate?: Timestamp;

  /**
   * Whether account is manual only.
   *
   * @generated from field: bool is_manual_only_account = 8;
   */
  isManualOnlyAccount: boolean;

  /**
   * Backoffice UI theme/skin.
   *
   * @generated from field: api.commons.ClientSkin backoffice_theme = 9;
   */
  backofficeTheme: ClientSkin;

  /**
   * Archived specifies this organization as no longer active.
   *
   * @generated from field: bool archived = 10;
   */
  archived: boolean;

  /**
   * Salesforce ID used for integrations.
   *
   * @generated from field: string crm_id = 11;
   */
  crmId: string;

  /**
   * Organization's time zone.
   *
   * @generated from field: api.commons.TimeZone time_zone = 12;
   */
  timeZone: TimeZone;

  /**
   * Organization callbacks service ID.
   *
   * @generated from field: string callbacks_service_id = 13;
   */
  callbacksServiceId: string;

  /**
   * Organization that is the parent.
   *
   * @generated from field: string p3_owner_id = 14;
   */
  p3OwnerId: string;

  constructor(data?: PartialMessage<Organization>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.Organization";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization;

  static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean;
}

/**
 * @generated from message api.commons.org.OrganizationDetails
 */
export declare class OrganizationDetails extends Message<OrganizationDetails> {
  /**
   * @generated from field: api.commons.org.Organization organization = 1;
   */
  organization?: Organization;

  /**
   * @generated from field: google.protobuf.Timestamp last_scheduled_date = 2;
   */
  lastScheduledDate?: Timestamp;

  constructor(data?: PartialMessage<OrganizationDetails>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.org.OrganizationDetails";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationDetails;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationDetails;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationDetails;

  static equals(a: OrganizationDetails | PlainMessage<OrganizationDetails> | undefined, b: OrganizationDetails | PlainMessage<OrganizationDetails> | undefined): boolean;
}

