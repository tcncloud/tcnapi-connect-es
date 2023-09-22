// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/tickets.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

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
 * SlaConditions - Condition Fields for sla on a ticket
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
 *
 * Description = 1
 * Skills = 2
 * Status = 3
 * Due Date = 4
 * SLA = 5
 * All Values must come as String. BE to convert values to int64, JSON and DateTime
 *
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

