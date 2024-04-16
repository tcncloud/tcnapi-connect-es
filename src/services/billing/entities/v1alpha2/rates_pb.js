// @generated by protoc-gen-es v1.8.0 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha2/rates.proto (package services.billing.entities.v1alpha2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { EventType } from "../../../../api/commons/audit/event_types_pb.js";
import { MatchingConfig, MatchingRule } from "./matching_pb.js";
import { BasicConfig, BasicUnitConfig } from "./modules_pb.js";

/**
 * RateDefinitionConfigType defines the type of configuration for a rate definition.
 *
 * @generated from enum services.billing.entities.v1alpha2.RateDefinitionConfigType
 */
export const RateDefinitionConfigType = /*@__PURE__*/ proto3.makeEnum(
  "services.billing.entities.v1alpha2.RateDefinitionConfigType",
  [
    {no: 0, name: "RATE_DEFINITION_CONFIG_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "RATE_DEFINITION_CONFIG_TYPE_NOOP", localName: "NOOP"},
    {no: 1000, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_SEATS", localName: "OMNI_AGENT_SEATS"},
    {no: 1500, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CONNECTED_INBOX_POLL", localName: "OMNI_CONNECTED_INBOX_POLL"},
    {no: 1501, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CONNECTED_INBOX_CREATED", localName: "OMNI_CONNECTED_INBOX_CREATED"},
    {no: 1600, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_CHAT", localName: "OMNI_AGENT_MESSAGE_CHAT"},
    {no: 1601, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_CHAT_SIZE", localName: "OMNI_AGENT_MESSAGE_CHAT_SIZE"},
    {no: 1602, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_CHAT_UNITS", localName: "OMNI_AGENT_MESSAGE_CHAT_UNITS"},
    {no: 1610, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_EMAIL", localName: "OMNI_AGENT_MESSAGE_EMAIL"},
    {no: 1611, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_EMAIL_SIZE", localName: "OMNI_AGENT_MESSAGE_EMAIL_SIZE"},
    {no: 1612, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_EMAIL_UNITS", localName: "OMNI_AGENT_MESSAGE_EMAIL_UNITS"},
    {no: 1620, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_SMS", localName: "OMNI_AGENT_MESSAGE_SMS"},
    {no: 1621, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_SMS_SIZE", localName: "OMNI_AGENT_MESSAGE_SMS_SIZE"},
    {no: 1622, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_AGENT_MESSAGE_SMS_UNITS", localName: "OMNI_AGENT_MESSAGE_SMS_UNITS"},
    {no: 1700, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_CHAT", localName: "OMNI_MANAGER_MESSAGE_CHAT"},
    {no: 1701, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_CHAT_SIZE", localName: "OMNI_MANAGER_MESSAGE_CHAT_SIZE"},
    {no: 1702, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_CHAT_UNITS", localName: "OMNI_MANAGER_MESSAGE_CHAT_UNITS"},
    {no: 1710, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_EMAIL", localName: "OMNI_MANAGER_MESSAGE_EMAIL"},
    {no: 1711, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_EMAIL_SIZE", localName: "OMNI_MANAGER_MESSAGE_EMAIL_SIZE"},
    {no: 1712, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_EMAIL_UNITS", localName: "OMNI_MANAGER_MESSAGE_EMAIL_UNITS"},
    {no: 1720, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_SMS", localName: "OMNI_MANAGER_MESSAGE_SMS"},
    {no: 1721, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_SMS_SIZE", localName: "OMNI_MANAGER_MESSAGE_SMS_SIZE"},
    {no: 1722, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_MANAGER_MESSAGE_SMS_UNITS", localName: "OMNI_MANAGER_MESSAGE_SMS_UNITS"},
    {no: 1800, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_CHAT", localName: "OMNI_SYSTEM_MESSAGE_CHAT"},
    {no: 1801, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_CHAT_SIZE", localName: "OMNI_SYSTEM_MESSAGE_CHAT_SIZE"},
    {no: 1802, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_CHAT_UNITS", localName: "OMNI_SYSTEM_MESSAGE_CHAT_UNITS"},
    {no: 1810, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_EMAIL", localName: "OMNI_SYSTEM_MESSAGE_EMAIL"},
    {no: 1811, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_EMAIL_SIZE", localName: "OMNI_SYSTEM_MESSAGE_EMAIL_SIZE"},
    {no: 1812, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_EMAIL_UNITS", localName: "OMNI_SYSTEM_MESSAGE_EMAIL_UNITS"},
    {no: 1820, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_SMS", localName: "OMNI_SYSTEM_MESSAGE_SMS"},
    {no: 1821, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_SMS_SIZE", localName: "OMNI_SYSTEM_MESSAGE_SMS_SIZE"},
    {no: 1822, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_SYSTEM_MESSAGE_SMS_UNITS", localName: "OMNI_SYSTEM_MESSAGE_SMS_UNITS"},
    {no: 1900, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_CHAT", localName: "OMNI_CUSTOMER_MESSAGE_CHAT"},
    {no: 1901, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_CHAT_SIZE", localName: "OMNI_CUSTOMER_MESSAGE_CHAT_SIZE"},
    {no: 1902, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_CHAT_UNITS", localName: "OMNI_CUSTOMER_MESSAGE_CHAT_UNITS"},
    {no: 1910, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_EMAIL", localName: "OMNI_CUSTOMER_MESSAGE_EMAIL"},
    {no: 1911, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_EMAIL_SIZE", localName: "OMNI_CUSTOMER_MESSAGE_EMAIL_SIZE"},
    {no: 1912, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_EMAIL_UNITS", localName: "OMNI_CUSTOMER_MESSAGE_EMAIL_UNITS"},
    {no: 1920, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_SMS", localName: "OMNI_CUSTOMER_MESSAGE_SMS"},
    {no: 1921, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_SMS_SIZE", localName: "OMNI_CUSTOMER_MESSAGE_SMS_SIZE"},
    {no: 1922, name: "RATE_DEFINITION_CONFIG_TYPE_OMNI_CUSTOMER_MESSAGE_SMS_UNITS", localName: "OMNI_CUSTOMER_MESSAGE_SMS_UNITS"},
    {no: 2000, name: "RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY", localName: "COMPLIANCE_RND_QUERY"},
    {no: 2001, name: "RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY_CACHED", localName: "COMPLIANCE_RND_QUERY_CACHED"},
  ],
);

/**
 * RateSnapshot represents a snapshot of rates for a given time period.
 *
 * @generated from message services.billing.entities.v1alpha2.RateSnapshot
 */
export const RateSnapshot = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha2.RateSnapshot",
  () => [
    { no: 1, name: "start_date", kind: "message", T: Timestamp },
    { no: 2, name: "end_date", kind: "message", T: Timestamp },
    { no: 3, name: "rates", kind: "message", T: RateDefinition, repeated: true },
  ],
);

/**
 * @generated from message services.billing.entities.v1alpha2.RateDefinition
 */
export const RateDefinition = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha2.RateDefinition",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "event_type", kind: "enum", T: proto3.getEnumType(EventType) },
    { no: 3, name: "config_type", kind: "enum", T: proto3.getEnumType(RateDefinitionConfigType) },
    { no: 4, name: "matching_rule", kind: "enum", T: proto3.getEnumType(MatchingRule) },
    { no: 5, name: "matching_config", kind: "message", T: MatchingConfig },
    { no: 6, name: "matching_sha", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "create_time", kind: "message", T: Timestamp },
    { no: 8, name: "update_time", kind: "message", T: Timestamp },
    { no: 9, name: "delete_time", kind: "message", T: Timestamp },
    { no: 10, name: "effective_time", kind: "message", T: Timestamp },
    { no: 11, name: "config", kind: "message", T: RateDefinitionConfig },
    { no: 12, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "config_sha", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "thread_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message services.billing.entities.v1alpha2.RateDefinitionConfig
 */
export const RateDefinitionConfig = /*@__PURE__*/ proto3.makeMessageType(
  "services.billing.entities.v1alpha2.RateDefinitionConfig",
  () => [
    { no: 1000, name: "agent_seats", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1500, name: "connected_inbox_poll", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1501, name: "connected_inbox_created", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1600, name: "agent_message_chat", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1601, name: "agent_message_chat_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1602, name: "agent_message_chat_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1610, name: "agent_message_email", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1611, name: "agent_message_email_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1612, name: "agent_message_email_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1620, name: "agent_message_sms", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1621, name: "agent_message_sms_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1622, name: "agent_message_sms_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1700, name: "manager_message_chat", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1701, name: "manager_message_chat_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1702, name: "manager_message_chat_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1710, name: "manager_message_email", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1711, name: "manager_message_email_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1712, name: "manager_message_email_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1720, name: "manager_message_sms", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1721, name: "manager_message_sms_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1722, name: "manager_message_sms_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1800, name: "system_message_chat", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1801, name: "system_message_chat_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1802, name: "system_message_chat_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1810, name: "system_message_email", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1811, name: "system_message_email_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1812, name: "system_message_email_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1820, name: "system_message_sms", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1821, name: "system_message_sms_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1822, name: "system_message_sms_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1900, name: "customer_message_chat", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1901, name: "customer_message_chat_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1902, name: "customer_message_chat_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1910, name: "customer_message_email", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1911, name: "customer_message_email_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1912, name: "customer_message_email_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1920, name: "customer_message_sms", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 1921, name: "customer_message_sms_size", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 1922, name: "customer_message_sms_units", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 2000, name: "compliance_rnd_query", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 2001, name: "compliance_rnd_query_cached", kind: "message", T: BasicConfig, oneof: "config" },
  ],
);

