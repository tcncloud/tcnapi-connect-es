// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/commons/org/organization.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { ClientSkin, TimeZone } from "../org_pb.js";

/**
 * Organization contains the basic properties for an organization.
 *
 * @generated from message api.commons.org.Organization
 */
export const Organization = proto3.makeMessageType(
  "api.commons.org.Organization",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "enabled_regions", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 3 /* ScalarType.INT64 */} },
    { no: 3, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "billing_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "add_date", kind: "message", T: Timestamp },
    { no: 8, name: "is_manual_only_account", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "backoffice_theme", kind: "enum", T: proto3.getEnumType(ClientSkin) },
    { no: 10, name: "archived", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "crm_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "time_zone", kind: "enum", T: proto3.getEnumType(TimeZone) },
    { no: 13, name: "callbacks_service_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "p3_owner_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.org.OrganizationDetails
 */
export const OrganizationDetails = proto3.makeMessageType(
  "api.commons.org.OrganizationDetails",
  () => [
    { no: 1, name: "organization", kind: "message", T: Organization },
    { no: 2, name: "last_scheduled_date", kind: "message", T: Timestamp },
  ],
);

