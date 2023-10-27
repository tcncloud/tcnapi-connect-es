// @generated by protoc-gen-es v1.4.1 with parameter "target=js+dts"
// @generated from file api/commons/billing/detail.proto (package api.commons.billing, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { EventType } from "../audit/event_types_pb.js";
import { BasicAmountConfig, BasicConfig } from "./modules/modules_pb.js";

/**
 * DetailConfigType - the types of billing detail configurations available
 *
 * @generated from enum api.commons.billing.DetailConfigType
 */
export const DetailConfigType = proto3.makeEnum(
  "api.commons.billing.DetailConfigType",
  [
    {no: 0, name: "DETAIL_CONFIG_TYPE_UNSPECIFIED"},
    {no: 1, name: "DETAIL_CONFIG_TYPE_NOOP"},
    {no: 2, name: "DETAIL_CONFIG_TYPE_AGENT_SEATS"},
    {no: 100, name: "DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT"},
    {no: 101, name: "DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_MESSAGE"},
    {no: 102, name: "DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_SIZE"},
    {no: 103, name: "DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS"},
    {no: 104, name: "DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_MESSAGE"},
    {no: 105, name: "DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_SIZE"},
    {no: 106, name: "DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS"},
    {no: 107, name: "DETAIL_CONFIG_TYPE_CONNECTED_INBOX_POLL"},
    {no: 108, name: "DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT"},
    {no: 109, name: "DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE"},
    {no: 110, name: "DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_SIZE"},
    {no: 111, name: "DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS"},
    {no: 112, name: "DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT"},
    {no: 113, name: "DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE"},
    {no: 114, name: "DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE"},
    {no: 115, name: "DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS"},
    {no: 116, name: "DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT_SIZE"},
    {no: 117, name: "DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT_SIZE"},
    {no: 118, name: "DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT_SIZE"},
    {no: 119, name: "DETAIL_CONFIG_TYPE_CONNECTED_INBOX_CREATED"},
    {no: 120, name: "DETAIL_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS_SIZE"},
    {no: 121, name: "DETAIL_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS_SIZE"},
    {no: 122, name: "DETAIL_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS_SIZE"},
    {no: 123, name: "DETAIL_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS_SIZE"},
    {no: 124, name: "DETAIL_CONFIG_TYPE_AGENT_CHAT_MESSAGE_UNITS"},
    {no: 125, name: "DETAIL_CONFIG_TYPE_AGENT_EMAIL_MESSAGE_UNITS"},
    {no: 126, name: "DETAIL_CONFIG_TYPE_AGENT_SMS_MESSAGE_UNITS"},
    {no: 127, name: "DETAIL_CONFIG_TYPE_MANAGER_CHAT_MESSAGE_UNITS"},
    {no: 128, name: "DETAIL_CONFIG_TYPE_MANAGER_EMAIL_MESSAGE_UNITS"},
    {no: 129, name: "DETAIL_CONFIG_TYPE_MANAGER_SMS_MESSAGE_UNITS"},
    {no: 130, name: "DETAIL_CONFIG_TYPE_CUSTOMER_CHAT_MESSAGE_UNITS"},
    {no: 131, name: "DETAIL_CONFIG_TYPE_CUSTOMER_EMAIL_MESSAGE_UNITS"},
    {no: 132, name: "DETAIL_CONFIG_TYPE_CUSTOMER_SMS_MESSAGE_UNITS"},
    {no: 133, name: "DETAIL_CONFIG_TYPE_SYSTEM_CHAT_MESSAGE_UNITS"},
    {no: 134, name: "DETAIL_CONFIG_TYPE_SYSTEM_EMAIL_MESSAGE_UNITS"},
    {no: 135, name: "DETAIL_CONFIG_TYPE_SYSTEM_SMS_MESSAGE_UNITS"},
    {no: 200, name: "BillingDetailConfigType_COMPLIANCE_RND_QUERY"},
    {no: 201, name: "BillingDetailConfigType_COMPLIANCE_RND_QUERY_CACHED"},
  ],
);

/**
 * Plan - a collection of details belongind to a single organization.
 *
 * @generated from message api.commons.billing.Plan
 */
export const Plan = proto3.makeMessageType(
  "api.commons.billing.Plan",
  () => [
    { no: 1, name: "details", kind: "message", T: Detail, repeated: true },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "billing_plan_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "create_time", kind: "message", T: Timestamp },
    { no: 5, name: "update_time", kind: "message", T: Timestamp },
    { no: 6, name: "start_time", kind: "message", T: Timestamp },
    { no: 7, name: "end_time", kind: "message", T: Timestamp },
  ],
);

/**
 * Detail - all the data required to configure a rating module
 *
 * @generated from message api.commons.billing.Detail
 */
export const Detail = proto3.makeMessageType(
  "api.commons.billing.Detail",
  () => [
    { no: 1, name: "billing_detail_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "event_type", kind: "enum", T: proto3.getEnumType(EventType) },
    { no: 3, name: "config_type", kind: "enum", T: proto3.getEnumType(DetailConfigType) },
    { no: 4, name: "config", kind: "message", T: DetailConfig },
    { no: 5, name: "date_created", kind: "message", T: Timestamp },
    { no: 6, name: "date_modified", kind: "message", T: Timestamp },
    { no: 7, name: "deleted_on", kind: "message", T: Timestamp },
    { no: 8, name: "billing_plan_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * DetailConfig - contains the data specific to the rating module,
 * so that it may rate events correctly
 *
 * @generated from message api.commons.billing.DetailConfig
 */
export const DetailConfig = proto3.makeMessageType(
  "api.commons.billing.DetailConfig",
  () => [
    { no: 2, name: "agent_seats_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 100, name: "agent_text_message_chat_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 101, name: "agent_text_message_email_message_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 102, name: "agent_text_message_email_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 103, name: "agent_text_message_sms_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 104, name: "task_message_sent_email_message_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 105, name: "task_message_sent_email_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 106, name: "task_message_sent_sms_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 107, name: "connected_inbox_poll_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 108, name: "manager_text_message_chat_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 109, name: "manager_text_message_email_message_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 110, name: "manager_text_message_email_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 111, name: "manager_text_message_sms_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 112, name: "customer_text_message_chat_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 113, name: "customer_text_message_email_message_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 114, name: "customer_text_message_email_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 115, name: "customer_text_message_sms_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 116, name: "agent_text_message_chat_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 117, name: "manager_text_message_chat_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 118, name: "customer_text_message_chat_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 119, name: "connected_inbox_created_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 120, name: "agent_text_message_sms_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 121, name: "manager_text_message_sms_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 122, name: "customer_text_message_sms_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 123, name: "task_message_sent_sms_size_config", kind: "message", T: BasicAmountConfig, oneof: "config" },
    { no: 124, name: "agent_chat_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 125, name: "agent_email_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 126, name: "agent_sms_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 127, name: "manager_chat_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 128, name: "manager_email_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 129, name: "manager_sms_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 130, name: "customer_chat_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 131, name: "customer_email_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 132, name: "customer_sms_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 133, name: "system_chat_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 134, name: "system_email_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 135, name: "system_sms_message_units_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 200, name: "compliance_rnd_query_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 201, name: "compliance_rnd_query_cached_config", kind: "message", T: BasicConfig, oneof: "config" },
  ],
);

