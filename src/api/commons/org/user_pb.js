// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/commons/org/user.proto (package api.commons.org, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, StringValue, Timestamp } from "@bufbuild/protobuf";
import { OperatorApplications, TimeZoneWrapper } from "../org_pb.js";

/**
 * User represents a user of the system.
 *
 * @generated from message api.commons.org.User
 */
export const User = proto3.makeMessageType(
  "api.commons.org.User",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "p3_permission_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "login_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "partner_agent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "region_sid_map", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: User_RegionSids} },
    { no: 101, name: "api_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 104, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 112, name: "login_disabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 115, name: "caller_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 116, name: "linkback_numbers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 118, name: "auth_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 123, name: "enable_mfa", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 161, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 162, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 163, name: "created", kind: "message", T: Timestamp },
    { no: 164, name: "last_updated", kind: "message", T: Timestamp },
    { no: 165, name: "password_reset_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 166, name: "connection_id", kind: "message", T: StringValue },
    { no: 167, name: "time_zone_override", kind: "message", T: TimeZoneWrapper },
    { no: 200, name: "permission_group_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 209, name: "trust_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 202, name: "default_region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 203, name: "default_application", kind: "enum", T: proto3.getEnumType(OperatorApplications) },
    { no: 205, name: "user_caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 207, name: "agent_profile_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 208, name: "skills", kind: "message", T: Skill, repeated: true },
    { no: 300, name: "agent", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 400, name: "account_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 401, name: "email_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 500, name: "mfa_info", kind: "message", T: UserMfaInfo },
  ],
);

/**
 * The entity object used in the region_sid_map.
 *
 * @generated from message api.commons.org.User.RegionSids
 */
export const User_RegionSids = proto3.makeMessageType(
  "api.commons.org.User.RegionSids",
  () => [
    { no: 1, name: "login_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "agent_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "client_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
  {localName: "User_RegionSids"},
);

/**
 * User's mfa/2fa information.
 *
 * @generated from message api.commons.org.UserMfaInfo
 */
export const UserMfaInfo = proto3.makeMessageType(
  "api.commons.org.UserMfaInfo",
  () => [
    { no: 1, name: "mfa_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "mfa_locked_out", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 10, name: "none", kind: "message", T: UserMfaInfo_NoneSelected, oneof: "mfa_type" },
    { no: 11, name: "otp", kind: "message", T: UserMfaInfo_OtpType, oneof: "mfa_type" },
  ],
);

/**
 * @generated from message api.commons.org.UserMfaInfo.NoneSelected
 */
export const UserMfaInfo_NoneSelected = proto3.makeMessageType(
  "api.commons.org.UserMfaInfo.NoneSelected",
  () => [
    { no: 1, name: "timeout", kind: "message", T: Timestamp },
  ],
  {localName: "UserMfaInfo_NoneSelected"},
);

/**
 * @generated from message api.commons.org.UserMfaInfo.OtpType
 */
export const UserMfaInfo_OtpType = proto3.makeMessageType(
  "api.commons.org.UserMfaInfo.OtpType",
  () => [
    { no: 1, name: "email", kind: "message", T: UserMfaInfo_OtpType_EmailDeliveryMethod, oneof: "delivery_method" },
  ],
  {localName: "UserMfaInfo_OtpType"},
);

/**
 * @generated from message api.commons.org.UserMfaInfo.OtpType.EmailDeliveryMethod
 */
export const UserMfaInfo_OtpType_EmailDeliveryMethod = proto3.makeMessageType(
  "api.commons.org.UserMfaInfo.OtpType.EmailDeliveryMethod",
  [],
  {localName: "UserMfaInfo_OtpType_EmailDeliveryMethod"},
);

/**
 * Agent skill
 *
 * @generated from message api.commons.org.Skill
 */
export const Skill = proto3.makeMessageType(
  "api.commons.org.Skill",
  () => [
    { no: 1, name: "level", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "skill_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * PasswordResetLink defines a link for the given user to reset their password.
 *
 * @generated from message api.commons.org.PasswordResetLink
 */
export const PasswordResetLink = proto3.makeMessageType(
  "api.commons.org.PasswordResetLink",
  () => [
    { no: 1, name: "link_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "expiration", kind: "message", T: Timestamp },
  ],
);

