// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/tickets.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.TimeScale
 */
export const TimeScale = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.TimeScale",
  [
    {no: 0, name: "TIME_SCALE_MINUTE", localName: "MINUTE"},
    {no: 1, name: "TIME_SCALE_HOUR", localName: "HOUR"},
    {no: 2, name: "TIME_SCALE_DAY", localName: "DAY"},
    {no: 3, name: "TIME_SCALE_WEEK", localName: "WEEK"},
    {no: 4, name: "TIME_SCALE_MONTH", localName: "MONTH"},
    {no: 5, name: "TIME_SCALE_YEAR", localName: "YEAR"},
  ],
);

/**
 * @generated from enum api.commons.TicketStatus
 */
export const TicketStatus = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.TicketStatus",
  [
    {no: 0, name: "TICKET_STATUS_NEW", localName: "NEW"},
    {no: 1, name: "TICKET_STATUS_OPEN", localName: "OPEN"},
    {no: 2, name: "TICKET_STATUS_CLOSE", localName: "CLOSE"},
  ],
);

/**
 * @generated from enum api.commons.PhoneNumberType
 */
export const PhoneNumberType = /*@__PURE__*/ proto3.makeEnum(
  "api.commons.PhoneNumberType",
  [
    {no: 0, name: "MOBILE"},
    {no: 1, name: "OTHER"},
    {no: 2, name: "INVALID_ERROR"},
  ],
);

/**
 * Ticket - Fields for Ticket creation, List tickets and view ticket
 *
 * @generated from message api.commons.Ticket
 */
export const Ticket = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.Ticket",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "project_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "project_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ticket_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "created_by_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "created_by_date", kind: "message", T: Timestamp },
    { no: 11, name: "due_date", kind: "message", T: Timestamp },
    { no: 12, name: "assignee_list", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "metadata", kind: "message", T: Metadata, repeated: true },
    { no: 15, name: "ticket_skills", kind: "message", T: Skills, repeated: true },
    { no: 16, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 17, name: "ticket_sla", kind: "message", T: Sla, repeated: true },
    { no: 18, name: "assignee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "ticket_action", kind: "message", T: TicketAction, repeated: true },
    { no: 20, name: "ticket_status", kind: "enum", T: proto3.getEnumType(TicketStatus) },
    { no: 21, name: "ticket_assignee", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 22, name: "ticket_participant", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Ticket Template
 *
 * @generated from message api.commons.TicketTemplate
 */
export const TicketTemplate = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TicketTemplate",
  () => [
    { no: 1, name: "ticket_template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "template_entity_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "template_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "modified_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "created_date", kind: "message", T: Timestamp },
    { no: 9, name: "modified_date", kind: "message", T: Timestamp },
    { no: 10, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * Mapping of Template to a Project
 * Each Ticket Template Can be mapped to Multiple Projects - In ListTicketTemplateRequest we need all Template To
 * Project Mapping
 *
 * @generated from message api.commons.TicketProjectTemplate
 */
export const TicketProjectTemplate = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TicketProjectTemplate",
  () => [
    { no: 1, name: "ticket_template", kind: "message", T: TicketTemplate },
    { no: 2, name: "project_description", kind: "message", T: ProjectDescription, repeated: true },
  ],
);

/**
 * Project Description
 *
 * @generated from message api.commons.ProjectDescription
 */
export const ProjectDescription = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.ProjectDescription",
  () => [
    { no: 1, name: "project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "project_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Deprecated and will not be used
 *
 * @generated from message api.commons.ListTemplate
 * @deprecated
 */
export const ListTemplate = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.ListTemplate",
  () => [
    { no: 1, name: "ticket_template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "template_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "template", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "template_entity_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "created_date", kind: "message", T: Timestamp },
    { no: 9, name: "project_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "assigned_project", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ],
);

/**
 * Deprecated and will not be used
 *
 * @generated from message api.commons.AssignProjectTemplate
 * @deprecated
 */
export const AssignProjectTemplate = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.AssignProjectTemplate",
  () => [
    { no: 1, name: "ticket_template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 2, name: "project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.Duration
 */
export const Duration = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.Duration",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "scale", kind: "enum", T: proto3.getEnumType(TimeScale) },
  ],
);

/**
 * TICKET_ACTION - New messgae have actions mapped to tickets
 *
 * @generated from message api.commons.TicketAction
 */
export const TicketAction = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TicketAction",
  () => [
    { no: 1, name: "ticket_action_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "action_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "callback_context", kind: "message", T: CallbackContext },
    { no: 4, name: "ticket_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 5, name: "start_ts", kind: "message", T: Timestamp },
    { no: 6, name: "expiry_ts", kind: "message", T: Timestamp },
    { no: 8, name: "state", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "action_skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "action_sla_id", kind: "message", T: Sla, repeated: true },
    { no: 11, name: "work_done_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "voice_context", kind: "message", T: CallbackContext, oneof: "context" },
    { no: 13, name: "sms_context", kind: "message", T: SmsbackContext, oneof: "context" },
    { no: 14, name: "email_context", kind: "message", T: EmailbackContext, oneof: "context" },
    { no: 15, name: "action_type", kind: "message", T: ActionType },
  ],
);

/**
 * Message for Voice Callback Context
 *
 * @generated from message api.commons.CallbackContext
 */
export const CallbackContext = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.CallbackContext",
  () => [
    { no: 1, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phone_no", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "caller_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "caller_country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Message for SMS Callback Context
 *
 * @generated from message api.commons.SmsbackContext
 */
export const SmsbackContext = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.SmsbackContext",
  () => [
    { no: 1, name: "contact_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_sms", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "from_sms", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "to_country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "from_country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.ActionType
 */
export const ActionType = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.ActionType",
  () => [
    { no: 1, name: "action_type_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "action_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Message for EMAIL Callback Context
 *
 * @generated from message api.commons.EmailbackContext
 */
export const EmailbackContext = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.EmailbackContext",
  () => [
    { no: 1, name: "contact_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "from_email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Metadata - Contains a key value pair of strings, Will have metadata of an agent conversations
 *
 * @generated from message api.commons.Metadata
 */
export const Metadata = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.Metadata",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Skills - Field for a skill set assigned to a ticket
 *
 * @generated from message api.commons.Skills
 */
export const Skills = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.Skills",
  () => [
    { no: 1, name: "skill_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_preferred", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Sla - Field for a sla set assigned to a ticket
 *
 * @generated from message api.commons.Sla
 */
export const Sla = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.Sla",
  () => [
    { no: 1, name: "condition_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "sla_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "sla_min", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "sla_duration", kind: "message", T: Duration },
  ],
);

/**
 * Comment - Fields for Comment on a ticket, listing comments of a ticket (ViewComment)
 *
 * @generated from message api.commons.Comment
 */
export const Comment = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.Comment",
  () => [
    { no: 1, name: "comment_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "created_by_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "created_by_date", kind: "message", T: Timestamp },
  ],
);

/**
 * CloseTicket - Fields for closing a Ticket
 *
 * @generated from message api.commons.CloseTicket
 */
export const CloseTicket = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.CloseTicket",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "from_status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ConfirmClose - Boolean response for closing a Ticket
 *
 * @generated from message api.commons.ConfirmClose
 */
export const ConfirmClose = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.ConfirmClose",
  () => [
    { no: 1, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * TicketProject - Fields for Project setting in ticketing system
 *
 * @generated from message api.commons.TicketProject
 */
export const TicketProject = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TicketProject",
  () => [
    { no: 1, name: "ticket_project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "project_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "project_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "template_desc", kind: "message", T: TemplateDescription, repeated: true },
  ],
);

/**
 * @generated from message api.commons.TemplateDescription
 */
export const TemplateDescription = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TemplateDescription",
  () => [
    { no: 1, name: "ticket_template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "template_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * TicketSla - Fields for sla on a ticket
 *
 * @generated from message api.commons.TicketSla
 */
export const TicketSla = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TicketSla",
  () => [
    { no: 1, name: "sla_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "interval", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "is_active", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "ticket_sla_duration", kind: "message", T: Duration },
  ],
);

/**
 * SlaConditions - Condition Fields for sla on a ticket
 *
 * @generated from message api.commons.SlaConditions
 */
export const SlaConditions = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.SlaConditions",
  () => [
    { no: 1, name: "sla_condition_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "sla_condition_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ReplyComment -
 *
 * @generated from message api.commons.ReplyComment
 */
export const ReplyComment = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.ReplyComment",
  () => [
    { no: 1, name: "comment_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "reply", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "created_by_date", kind: "message", T: Timestamp },
  ],
);

/**
 * ConfirmReplyComment -
 *
 * @generated from message api.commons.ConfirmReplyComment
 */
export const ConfirmReplyComment = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.ConfirmReplyComment",
  () => [
    { no: 1, name: "is_created", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * TicketAuditLog -
 *
 * @generated from message api.commons.TicketAuditLog
 */
export const TicketAuditLog = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.TicketAuditLog",
  () => [
    { no: 1, name: "ticket_audit_event_log_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "event", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 5, name: "event_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "created_by_date", kind: "message", T: Timestamp },
  ],
);

/**
 * EditTicket - Fields for Edit Ticket , listing attributes of a ticket which can be edited
 *
 * @generated from message api.commons.EditTicket
 */
export const EditTicket = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.EditTicket",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "edit_value", kind: "message", T: EditAttribute },
  ],
);

/**
 * @generated from message api.commons.EditAttribute
 */
export const EditAttribute = /*@__PURE__*/ proto3.makeMessageType(
  "api.commons.EditAttribute",
  () => [
    { no: 1, name: "col_desc", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "from_val", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "to_val", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_edited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

