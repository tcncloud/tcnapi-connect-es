// @generated by protoc-gen-es v1.7.1 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/rates.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { EventType } from "../../../../api/commons/audit/event_types_pb.js";
import { MatchingConfig, MatchingRule } from "./matching_pb.js";
import { BasicConfig, BasicUnitConfig } from "./modules_pb.js";

/**
 * RateDefinitionConfigType defines the type of configuration for a rate definition.
 *
 * @generated from enum services.billing.entities.v1alpha1.RateDefinitionConfigType
 */
export const RateDefinitionConfigType = proto3.makeEnum(
  "services.billing.entities.v1alpha1.RateDefinitionConfigType",
  [
    {no: 0, name: "RATE_DEFINITION_CONFIG_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "RATE_DEFINITION_CONFIG_TYPE_NOOP", localName: "NOOP"},
    {no: 2, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_SEATS", localName: "AGENT_SEATS"},
    {no: 100, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT", localName: "AGENT_TEXT_MESSAGE_CHAT"},
    {no: 101, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_MESSAGE", localName: "AGENT_TEXT_MESSAGE_EMAIL_MESSAGE"},
    {no: 102, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_EMAIL_SIZE", localName: "AGENT_TEXT_MESSAGE_EMAIL_SIZE"},
    {no: 103, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS", localName: "AGENT_TEXT_MESSAGE_SMS"},
    {no: 104, name: "RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_MESSAGE", localName: "TASK_MESSAGE_SENT_EMAIL_MESSAGE"},
    {no: 105, name: "RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_EMAIL_SIZE", localName: "TASK_MESSAGE_SENT_EMAIL_SIZE"},
    {no: 106, name: "RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS", localName: "TASK_MESSAGE_SENT_SMS"},
    {no: 107, name: "RATE_DEFINITION_CONFIG_TYPE_CONNECTED_INBOX_POLL", localName: "CONNECTED_INBOX_POLL"},
    {no: 108, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT", localName: "MANAGER_TEXT_MESSAGE_CHAT"},
    {no: 109, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE", localName: "MANAGER_TEXT_MESSAGE_EMAIL_MESSAGE"},
    {no: 110, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_EMAIL_SIZE", localName: "MANAGER_TEXT_MESSAGE_EMAIL_SIZE"},
    {no: 111, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS", localName: "MANAGER_TEXT_MESSAGE_SMS"},
    {no: 112, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT", localName: "CUSTOMER_TEXT_MESSAGE_CHAT"},
    {no: 113, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE", localName: "CUSTOMER_TEXT_MESSAGE_EMAIL_MESSAGE"},
    {no: 114, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE", localName: "CUSTOMER_TEXT_MESSAGE_EMAIL_SIZE"},
    {no: 115, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS", localName: "CUSTOMER_TEXT_MESSAGE_SMS"},
    {no: 116, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_CHAT_SIZE", localName: "AGENT_TEXT_MESSAGE_CHAT_SIZE"},
    {no: 117, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_CHAT_SIZE", localName: "MANAGER_TEXT_MESSAGE_CHAT_SIZE"},
    {no: 118, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_CHAT_SIZE", localName: "CUSTOMER_TEXT_MESSAGE_CHAT_SIZE"},
    {no: 119, name: "RATE_DEFINITION_CONFIG_TYPE_CONNECTED_INBOX_CREATED", localName: "CONNECTED_INBOX_CREATED"},
    {no: 120, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_TEXT_MESSAGE_SMS_SIZE", localName: "AGENT_TEXT_MESSAGE_SMS_SIZE"},
    {no: 121, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_TEXT_MESSAGE_SMS_SIZE", localName: "MANAGER_TEXT_MESSAGE_SMS_SIZE"},
    {no: 122, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_TEXT_MESSAGE_SMS_SIZE", localName: "CUSTOMER_TEXT_MESSAGE_SMS_SIZE"},
    {no: 123, name: "RATE_DEFINITION_CONFIG_TYPE_TASK_MESSAGE_SENT_SMS_SIZE", localName: "TASK_MESSAGE_SENT_SMS_SIZE"},
    {no: 124, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_CHAT_MESSAGE_UNITS", localName: "AGENT_CHAT_MESSAGE_UNITS"},
    {no: 125, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_EMAIL_MESSAGE_UNITS", localName: "AGENT_EMAIL_MESSAGE_UNITS"},
    {no: 126, name: "RATE_DEFINITION_CONFIG_TYPE_AGENT_SMS_MESSAGE_UNITS", localName: "AGENT_SMS_MESSAGE_UNITS"},
    {no: 127, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_CHAT_MESSAGE_UNITS", localName: "MANAGER_CHAT_MESSAGE_UNITS"},
    {no: 128, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_EMAIL_MESSAGE_UNITS", localName: "MANAGER_EMAIL_MESSAGE_UNITS"},
    {no: 129, name: "RATE_DEFINITION_CONFIG_TYPE_MANAGER_SMS_MESSAGE_UNITS", localName: "MANAGER_SMS_MESSAGE_UNITS"},
    {no: 130, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_CHAT_MESSAGE_UNITS", localName: "CUSTOMER_CHAT_MESSAGE_UNITS"},
    {no: 131, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_EMAIL_MESSAGE_UNITS", localName: "CUSTOMER_EMAIL_MESSAGE_UNITS"},
    {no: 132, name: "RATE_DEFINITION_CONFIG_TYPE_CUSTOMER_SMS_MESSAGE_UNITS", localName: "CUSTOMER_SMS_MESSAGE_UNITS"},
    {no: 133, name: "RATE_DEFINITION_CONFIG_TYPE_SYSTEM_CHAT_MESSAGE_UNITS", localName: "SYSTEM_CHAT_MESSAGE_UNITS"},
    {no: 134, name: "RATE_DEFINITION_CONFIG_TYPE_SYSTEM_EMAIL_MESSAGE_UNITS", localName: "SYSTEM_EMAIL_MESSAGE_UNITS"},
    {no: 135, name: "RATE_DEFINITION_CONFIG_TYPE_SYSTEM_SMS_MESSAGE_UNITS", localName: "SYSTEM_SMS_MESSAGE_UNITS"},
    {no: 200, name: "RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY", localName: "COMPLIANCE_RND_QUERY"},
    {no: 201, name: "RATE_DEFINITION_CONFIG_TYPE_COMPLIANCE_RND_QUERY_CACHED", localName: "COMPLIANCE_RND_QUERY_CACHED"},
  ],
);

/**
 * RateDefinition defines a rating configuration.
 *
 * @generated from message services.billing.entities.v1alpha1.RateDefinition
 */
export const RateDefinition = proto3.makeMessageType(
  "services.billing.entities.v1alpha1.RateDefinition",
  () => [
    { no: 1, name: "rate_definition_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "rate_definition_feature_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "rate_definition_group_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "event_type", kind: "enum", T: proto3.getEnumType(EventType) },
    { no: 5, name: "config_type", kind: "enum", T: proto3.getEnumType(RateDefinitionConfigType) },
    { no: 6, name: "matching_rule", kind: "enum", T: proto3.getEnumType(MatchingRule) },
    { no: 7, name: "matching_config", kind: "message", T: MatchingConfig },
    { no: 8, name: "config", kind: "message", T: RateDefinitionConfig },
    { no: 9, name: "create_time", kind: "message", T: Timestamp },
    { no: 10, name: "update_time", kind: "message", T: Timestamp },
    { no: 11, name: "delete_time", kind: "message", T: Timestamp },
    { no: 12, name: "matching_sha", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * RateDefinitionConfig defines the configuration for a rate definition.
 *
 * @generated from message services.billing.entities.v1alpha1.RateDefinitionConfig
 */
export const RateDefinitionConfig = proto3.makeMessageType(
  "services.billing.entities.v1alpha1.RateDefinitionConfig",
  () => [
    { no: 2, name: "agent_seats_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 100, name: "agent_text_message_chat_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 101, name: "agent_text_message_email_message_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 102, name: "agent_text_message_email_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 103, name: "agent_text_message_sms_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 104, name: "task_message_sent_email_message_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 105, name: "task_message_sent_email_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 106, name: "task_message_sent_sms_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 107, name: "connected_inbox_poll_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 108, name: "manager_text_message_chat_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 109, name: "manager_text_message_email_message_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 110, name: "manager_text_message_email_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 111, name: "manager_text_message_sms_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 112, name: "customer_text_message_chat_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 113, name: "customer_text_message_email_message_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 114, name: "customer_text_message_email_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 115, name: "customer_text_message_sms_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 116, name: "agent_text_message_chat_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 117, name: "manager_text_message_chat_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 118, name: "customer_text_message_chat_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 119, name: "connected_inbox_created_config", kind: "message", T: BasicConfig, oneof: "config" },
    { no: 120, name: "agent_text_message_sms_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 121, name: "manager_text_message_sms_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 122, name: "customer_text_message_sms_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
    { no: 123, name: "task_message_sent_sms_size_config", kind: "message", T: BasicUnitConfig, oneof: "config" },
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

