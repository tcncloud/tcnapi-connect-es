// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/tickets/ticket.proto (package api.v1alpha1.tickets, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Comment, ConfirmReplyComment, EditAttribute, Metadata, ReplyComment, Skills, Sla, SlaConditions, Ticket, TicketSla } from "../../commons/tickets_pb.js";

/**
 * @generated from message api.v1alpha1.tickets.PingReq
 */
export const PingReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.PingReq",
  [],
);

/**
 * @generated from message api.v1alpha1.tickets.PingRes
 */
export const PingRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.PingRes",
  [],
);

/**
 * CreateTicketReq - Request for CreateTicket
 *
 * @generated from message api.v1alpha1.tickets.CreateTicketReq
 */
export const CreateTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketReq",
  () => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "project_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "due_date", kind: "message", T: Timestamp },
    { no: 9, name: "metadata", kind: "message", T: Metadata, repeated: true },
    { no: 10, name: "ticket_skills", kind: "message", T: Skills, repeated: true },
    { no: 11, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "ticket_sla", kind: "message", T: Sla, repeated: true },
  ],
);

/**
 * CreateTicketRes - Response from CreateTicket BE API
 *
 * @generated from message api.v1alpha1.tickets.CreateTicketRes
 */
export const CreateTicketRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketRes",
  () => [
    { no: 1, name: "ticket", kind: "message", T: Ticket },
  ],
);

/**
 * EditTicketReq - Request for EditTicketReq
 *
 * @generated from message api.v1alpha1.tickets.EditTicketReq
 */
export const EditTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.EditTicketReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "edit_value", kind: "message", T: EditAttribute },
  ],
);

/**
 * EditTicketReq - Request for EditTicketReq
 *
 * @generated from message api.v1alpha1.tickets.EditTicketRes
 */
export const EditTicketRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.EditTicketRes",
  () => [
    { no: 1, name: "is_edited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ListTicketsReq
 *
 * @generated from message api.v1alpha1.tickets.ListTicketsReq
 */
export const ListTicketsReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketsReq",
  [],
);

/**
 * @generated from message api.v1alpha1.tickets.ListTicketsRes
 */
export const ListTicketsRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketsRes",
  () => [
    { no: 1, name: "tickets", kind: "message", T: Ticket, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AssignTicketReq
 */
export const AssignTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignTicketReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "assignee_list", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "assigned_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AssignTicketRes
 */
export const AssignTicketRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignTicketRes",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "assignee_list", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "assigned_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ViewTicketReq -
 *
 * @generated from message api.v1alpha1.tickets.ViewTicketReq
 */
export const ViewTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.ViewTicketReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ViewTicketRes -
 *
 * @generated from message api.v1alpha1.tickets.ViewTicketRes
 */
export const ViewTicketRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.ViewTicketRes",
  () => [
    { no: 1, name: "ticket", kind: "message", T: Ticket },
    { no: 2, name: "comments", kind: "message", T: Comment, repeated: true },
    { no: 3, name: "reply_comment", kind: "message", T: ReplyComment, repeated: true },
  ],
);

/**
 * Create CommentReq  - Create Comment Request From Client
 *
 * ticket Id of the comment to be created.
 *
 * @generated from message api.v1alpha1.tickets.CreateCommentReq
 */
export const CreateCommentReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateCommentReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * CreateCommenttRes - Response from CreateComment BE API
 *
 * @generated from message api.v1alpha1.tickets.CreateCommentRes
 */
export const CreateCommentRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateCommentRes",
  () => [
    { no: 1, name: "comment", kind: "message", T: Comment },
  ],
);

/**
 * CloseTicketReq - Close Ticket Request Messages
 *
 * @generated from message api.v1alpha1.tickets.CloseTicketReq
 */
export const CloseTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.CloseTicketReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "from_status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * CloseTicketRes - Close Ticket Response Messages
 *
 * @generated from message api.v1alpha1.tickets.CloseTicketRes
 */
export const CloseTicketRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.CloseTicketRes",
  () => [
    { no: 1, name: "is_status", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Create CreateSlaReq  - Create Sla Request From Client
 *
 * @generated from message api.v1alpha1.tickets.CreateSlaReq
 */
export const CreateSlaReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateSlaReq",
  () => [
    { no: 1, name: "sla_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "interval", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * CreateSlaRes - Response from CreateSla BE API
 *
 * @generated from message api.v1alpha1.tickets.CreateSlaRes
 */
export const CreateSlaRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateSlaRes",
  () => [
    { no: 1, name: "sla", kind: "message", T: TicketSla },
  ],
);

/**
 * ListSlaReq -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaReq
 */
export const ListSlaReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSlaReq",
  [],
);

/**
 * ListSlaRes -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaRes
 */
export const ListSlaRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSlaRes",
  () => [
    { no: 1, name: "ticketsSla", kind: "message", T: TicketSla, repeated: true },
  ],
);

/**
 * UpdateSlaReq -
 *
 * @generated from message api.v1alpha1.tickets.UpdateSlaReq
 */
export const UpdateSlaReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.UpdateSlaReq",
  () => [
    { no: 1, name: "sla_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "is_active", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * ListSlaRes -
 *
 * @generated from message api.v1alpha1.tickets.UpdateSlaRes
 */
export const UpdateSlaRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.UpdateSlaRes",
  () => [
    { no: 1, name: "ticketsSla", kind: "message", T: TicketSla },
  ],
);

/**
 * ListSlaConditionReq -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaConditionReq
 */
export const ListSlaConditionReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSlaConditionReq",
  [],
);

/**
 * ListSlaConditionRes -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaConditionRes
 */
export const ListSlaConditionRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSlaConditionRes",
  () => [
    { no: 1, name: "slaCondition", kind: "message", T: SlaConditions, repeated: true },
  ],
);

/**
 * ReplyCommentReq - Reply Comment Request Messages
 *
 * @generated from message api.v1alpha1.tickets.ReplyCommentReq
 */
export const ReplyCommentReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.ReplyCommentReq",
  () => [
    { no: 1, name: "comment_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "reply", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_by_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ReplyCommentRes - Reply Comment Response Messages
 *
 * @generated from message api.v1alpha1.tickets.ReplyCommentRes
 */
export const ReplyCommentRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.ReplyCommentRes",
  () => [
    { no: 1, name: "is_created", kind: "message", T: ConfirmReplyComment },
  ],
);
