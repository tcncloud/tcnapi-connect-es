// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/commons/tickets.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum api.commons.TimeScale
 */
export const TimeScale = proto3.makeEnum(
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
export const TicketStatus = proto3.makeEnum(
  "api.commons.TicketStatus",
  [
    {no: 0, name: "TICKET_STATUS_NEW", localName: "NEW"},
    {no: 1, name: "TICKET_STATUS_OPEN", localName: "OPEN"},
    {no: 2, name: "TICKET_STATUS_CLOSE", localName: "CLOSE"},
  ],
);

/**
 * Ticket - Fields for Ticket creation, List tickets and view ticket
 *
 * @generated from message api.commons.Ticket
 */
export const Ticket = proto3.makeMessageType(
  "api.commons.Ticket",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "project_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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
 * @generated from message api.commons.TemplateCondition
 */
export const TemplateCondition = proto3.makeMessageType(
  "api.commons.TemplateCondition",
  () => [
    { no: 1, name: "is_mandatory", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "is_editable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.commons.TicketTemplate
 */
export const TicketTemplate = proto3.makeMessageType(
  "api.commons.TicketTemplate",
  () => [
    { no: 1, name: "ticket_template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "template_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "teplate_start_date", kind: "message", T: Timestamp },
    { no: 4, name: "teplate_end_date", kind: "message", T: Timestamp },
    { no: 5, name: "ticket_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "ticket_description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "title_condition", kind: "message", T: TemplateCondition },
    { no: 8, name: "description_condition", kind: "message", T: TemplateCondition },
    { no: 9, name: "ticket_assignee", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "assignee_condition", kind: "message", T: TemplateCondition },
    { no: 11, name: "ticket_sla", kind: "message", T: Sla, repeated: true },
    { no: 12, name: "ticket_sla_condition", kind: "message", T: TemplateCondition },
    { no: 13, name: "action_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "action_skills", kind: "message", T: Skills, repeated: true },
    { no: 15, name: "action_skills_condition", kind: "message", T: TemplateCondition },
    { no: 16, name: "action_start_date", kind: "message", T: Timestamp },
    { no: 17, name: "action_start_date_condition", kind: "message", T: TemplateCondition },
    { no: 18, name: "action_expiry_date", kind: "message", T: Timestamp },
    { no: 19, name: "action_expiry_date_condition", kind: "message", T: TemplateCondition },
    { no: 20, name: "action_sla", kind: "message", T: Sla, repeated: true },
    { no: 21, name: "action_sla_condition", kind: "message", T: TemplateCondition },
    { no: 22, name: "is_valid", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 23, name: "callback_default", kind: "message", T: TicketCallbackTemplate },
    { no: 24, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 25, name: "created_date", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message api.commons.TicketCallbackTemplate
 */
export const TicketCallbackTemplate = proto3.makeMessageType(
  "api.commons.TicketCallbackTemplate",
  () => [
    { no: 1, name: "caller_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "caller_id_condition", kind: "message", T: TemplateCondition },
    { no: 3, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "country_code_condition", kind: "message", T: TemplateCondition },
  ],
);

/**
 * @generated from message api.commons.Duration
 */
export const Duration = proto3.makeMessageType(
  "api.commons.Duration",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "scale", kind: "enum", T: proto3.getEnumType(TimeScale) },
  ],
);

/**
 * TICKET_ACTION - New messgae have actions mapped to tickets
 *
 * @generated from message api.commons.TicketAction
 */
export const TicketAction = proto3.makeMessageType(
  "api.commons.TicketAction",
  () => [
    { no: 1, name: "ticket_action_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "action_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "callback_context", kind: "message", T: CallbackContext },
    { no: 4, name: "ticket_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "start_ts", kind: "message", T: Timestamp },
    { no: 6, name: "expiry_ts", kind: "message", T: Timestamp },
    { no: 8, name: "state", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "action_skills", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 10, name: "action_sla_id", kind: "message", T: Sla, repeated: true },
    { no: 11, name: "work_done_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.commons.CallbackContext
 */
export const CallbackContext = proto3.makeMessageType(
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
 * Metadata - Contains a key value pair of strings, Will have metadata of an agent conversations
 *
 * @generated from message api.commons.Metadata
 */
export const Metadata = proto3.makeMessageType(
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
export const Skills = proto3.makeMessageType(
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
export const Sla = proto3.makeMessageType(
  "api.commons.Sla",
  () => [
    { no: 1, name: "condition_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "sla_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "sla_min", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "sla_duration", kind: "message", T: Duration },
  ],
);

/**
 * Comment - Fields for Comment on a ticket, listing comments of a ticket (ViewComment)
 *
 * @generated from message api.commons.Comment
 */
export const Comment = proto3.makeMessageType(
  "api.commons.Comment",
  () => [
    { no: 1, name: "comment_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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
export const CloseTicket = proto3.makeMessageType(
  "api.commons.CloseTicket",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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
export const ConfirmClose = proto3.makeMessageType(
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
export const TicketProject = proto3.makeMessageType(
  "api.commons.TicketProject",
  () => [
    { no: 1, name: "ticket_project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "project_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "project_title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * TicketSla - Fields for sla on a ticket
 *
 * @generated from message api.commons.TicketSla
 */
export const TicketSla = proto3.makeMessageType(
  "api.commons.TicketSla",
  () => [
    { no: 1, name: "sla_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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
export const SlaConditions = proto3.makeMessageType(
  "api.commons.SlaConditions",
  () => [
    { no: 1, name: "sla_condition_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "sla_condition_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ReplyComment -
 *
 * @generated from message api.commons.ReplyComment
 */
export const ReplyComment = proto3.makeMessageType(
  "api.commons.ReplyComment",
  () => [
    { no: 1, name: "comment_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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
export const ConfirmReplyComment = proto3.makeMessageType(
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
export const TicketAuditLog = proto3.makeMessageType(
  "api.commons.TicketAuditLog",
  () => [
    { no: 1, name: "ticket_audit_event_log_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "event", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
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
export const EditTicket = proto3.makeMessageType(
  "api.commons.EditTicket",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "edit_value", kind: "message", T: EditAttribute },
  ],
);

/**
 * @generated from message api.commons.EditAttribute
 */
export const EditAttribute = proto3.makeMessageType(
  "api.commons.EditAttribute",
  () => [
    { no: 1, name: "col_desc", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "from_val", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "to_val", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_edited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

