// @generated by protoc-gen-es v1.5.1 with parameter "target=js+dts"
// @generated from file api/v1alpha1/tickets/ticket.proto (package api.v1alpha1.tickets, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { ActionType, AssignProjectTemplate, Comment, ConfirmReplyComment, Duration, EditAttribute, ListTemplate, Metadata, ReplyComment, Skills, Sla, SlaConditions, TemplateDescription, Ticket, TicketAction, TicketProjectTemplate, TicketSla, TicketStatus, TicketTemplate } from "../../commons/tickets_pb.js";

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
    { no: 3, name: "project_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 8, name: "due_date", kind: "message", T: Timestamp },
    { no: 9, name: "metadata", kind: "message", T: Metadata, repeated: true },
    { no: 10, name: "ticket_skills", kind: "message", T: Skills, repeated: true },
    { no: 11, name: "status", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "ticket_sla", kind: "message", T: Sla, repeated: true },
    { no: 13, name: "assign_self", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 14, name: "assign_other", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "ticket_action", kind: "message", T: TicketAction, repeated: true },
    { no: 16, name: "ticket_assignee", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CreateTicketTemplateRequest
 */
export const CreateTicketTemplateRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketTemplateRequest",
  () => [
    { no: 1, name: "ticket_template", kind: "message", T: TicketTemplate },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CreateTicketTemplateResponse
 */
export const CreateTicketTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketTemplateResponse",
  () => [
    { no: 1, name: "ticket_template", kind: "message", T: TicketTemplate },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.EditTicketTemplateRequest
 */
export const EditTicketTemplateRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.EditTicketTemplateRequest",
  () => [
    { no: 1, name: "ticket_template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "edit_value", kind: "message", T: TicketTemplate },
    { no: 3, name: "edited_fields_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.EditTicketTemplateResponse
 */
export const EditTicketTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.EditTicketTemplateResponse",
  () => [
    { no: 1, name: "is_edited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ListTicketTemplateRequest
 */
export const ListTicketTemplateRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketTemplateRequest",
  () => [
    { no: 1, name: "ticket_template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "request_mask", kind: "message", T: FieldMask },
    { no: 4, name: "template_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 5, name: "template_project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ListTicketTemplateResponse
 */
export const ListTicketTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketTemplateResponse",
  () => [
    { no: 1, name: "enabled_templates", kind: "message", T: ListTemplate, repeated: true },
    { no: 2, name: "ticket_project_template", kind: "message", T: TicketProjectTemplate, repeated: true },
  ],
);

/**
 * AssignProjectTemplate
 *
 * @generated from message api.v1alpha1.tickets.AssignProjectTemplateRequest
 */
export const AssignProjectTemplateRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignProjectTemplateRequest",
  () => [
    { no: 1, name: "project_template", kind: "message", T: AssignProjectTemplate },
    { no: 2, name: "project_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "template_description", kind: "message", T: TemplateDescription, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AssignProjectTemplateResponse
 */
export const AssignProjectTemplateResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignProjectTemplateResponse",
  () => [
    { no: 1, name: "is_assigned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
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
 * Request all the Action Types
 *
 * @generated from message api.v1alpha1.tickets.GetActionTypeRequest
 */
export const GetActionTypeRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.GetActionTypeRequest",
  [],
);

/**
 * Returns all the Action Types
 *
 * @generated from message api.v1alpha1.tickets.GetActionTypeResponse
 */
export const GetActionTypeResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.GetActionTypeResponse",
  () => [
    { no: 1, name: "action_type", kind: "message", T: ActionType, repeated: true },
  ],
);

/**
 * EditTicketReq - Request for EditTicketReq
 *
 * @generated from message api.v1alpha1.tickets.EditTicketReq
 * @deprecated
 */
export const EditTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.EditTicketReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "edit_value", kind: "message", T: EditAttribute },
  ],
);

/**
 * EditMaskTicketReq - Request for EditMaskTicket
 * EditTicketReq would be deprecated
 *
 * @generated from message api.v1alpha1.tickets.EditMaskTicketReq
 */
export const EditMaskTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.EditMaskTicketReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "edit_value", kind: "message", T: Ticket },
    { no: 3, name: "edited_fields_mask", kind: "message", T: FieldMask, repeated: true },
  ],
);

/**
 * EditMaskTicketRes - Response for EditMaskTicketReq
 * EditTicketRes would be deprecated
 *
 * @generated from message api.v1alpha1.tickets.EditMaskTicketRes
 */
export const EditMaskTicketRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.EditMaskTicketRes",
  () => [
    { no: 1, name: "is_edited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ListAllocatedTicketRes -
 *
 * @generated from message api.v1alpha1.tickets.ListAllocatedTicketRes
 * @deprecated
 */
export const ListAllocatedTicketRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListAllocatedTicketRes",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */, repeated: true },
  ],
);

/**
 * ListAllocatedTicketReq -
 *
 * @generated from message api.v1alpha1.tickets.ListAllocatedTicketReq
 * @deprecated
 */
export const ListAllocatedTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListAllocatedTicketReq",
  [],
);

/**
 * ListAvailableAgentTicketsResponse -
 *
 * @generated from message api.v1alpha1.tickets.ListAvailableAgentTicketsResponse
 */
export const ListAvailableAgentTicketsResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListAvailableAgentTicketsResponse",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */, repeated: true },
    { no: 2, name: "ticket", kind: "message", T: Ticket, repeated: true },
  ],
);

/**
 * ListAvailableAgentTicketsRequest -
 *
 * @generated from message api.v1alpha1.tickets.ListAvailableAgentTicketsRequest
 */
export const ListAvailableAgentTicketsRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListAvailableAgentTicketsRequest",
  [],
);

/**
 * EditTicketRes - Response for EditTicketReq
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
 * AssignTicketReq
 *
 * @generated from message api.v1alpha1.tickets.AssignTicketReq
 */
export const AssignTicketReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignTicketReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "assignee_list", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "assigned_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * AssignTicketRes
 *
 * @generated from message api.v1alpha1.tickets.AssignTicketRes
 */
export const AssignTicketRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignTicketRes",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
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
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
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
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
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
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "from_status", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
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
    { no: 1, name: "sla_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "interval", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "duration", kind: "message", T: Duration },
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
    { no: 1, name: "sla_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
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
    { no: 1, name: "comment_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
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

/**
 * CreateSelfAssignReq -
 *
 * @generated from message api.v1alpha1.tickets.CreateSelfAssignReq
 */
export const CreateSelfAssignReq = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateSelfAssignReq",
  () => [
    { no: 1, name: "ticket_sid", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * CreateSelfAssignRes -
 *
 * @generated from message api.v1alpha1.tickets.CreateSelfAssignRes
 */
export const CreateSelfAssignRes = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateSelfAssignRes",
  () => [
    { no: 1, name: "is_assigned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ListSkillsRequest - request message
 *
 * @generated from message api.v1alpha1.tickets.ListSkillsRequest
 */
export const ListSkillsRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSkillsRequest",
  [],
);

/**
 * ListSkillsResponse - response message wraps p3 skills Id and name
 *
 * @generated from message api.v1alpha1.tickets.ListSkillsResponse
 */
export const ListSkillsResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSkillsResponse",
  () => [
    { no: 1, name: "skills", kind: "message", T: Skill, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.Skill
 */
export const Skill = proto3.makeMessageType(
  "api.v1alpha1.tickets.Skill",
  () => [
    { no: 1, name: "skill_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ListUsersRequest - Users request message
 *
 * @generated from message api.v1alpha1.tickets.ListUsersRequest
 */
export const ListUsersRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListUsersRequest",
  [],
);

/**
 * ListUsersResponse - response wraps userId, first_name, last_name
 *
 * @generated from message api.v1alpha1.tickets.ListUsersResponse
 */
export const ListUsersResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.ListUsersResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: User, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.User
 */
export const User = proto3.makeMessageType(
  "api.v1alpha1.tickets.User",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_active", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CreateTicketActionRequest
 */
export const CreateTicketActionRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketActionRequest",
  () => [
    { no: 1, name: "ticket_action", kind: "message", T: TicketAction },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CreateTicketActionResponse
 */
export const CreateTicketActionResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketActionResponse",
  () => [
    { no: 1, name: "ticket_action", kind: "message", T: TicketAction },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CloseTicketActionRequest
 */
export const CloseTicketActionRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.CloseTicketActionRequest",
  () => [
    { no: 1, name: "ticket_action_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "ticket_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CloseTicketActionResponse
 */
export const CloseTicketActionResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.CloseTicketActionResponse",
  () => [
    { no: 1, name: "is_closed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AssignTicketActionRequest
 */
export const AssignTicketActionRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignTicketActionRequest",
  () => [
    { no: 1, name: "ticket_action_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AssignTicketActionResponse
 */
export const AssignTicketActionResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignTicketActionResponse",
  () => [
    { no: 1, name: "is_assigned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ChangeTicketStatusRequest
 */
export const ChangeTicketStatusRequest = proto3.makeMessageType(
  "api.v1alpha1.tickets.ChangeTicketStatusRequest",
  () => [
    { no: 1, name: "ticket_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "status_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "ticket_status", kind: "enum", T: proto3.getEnumType(TicketStatus) },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ChangeTicketStatusResponse
 */
export const ChangeTicketStatusResponse = proto3.makeMessageType(
  "api.v1alpha1.tickets.ChangeTicketStatusResponse",
  () => [
    { no: 1, name: "is_status_edited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

