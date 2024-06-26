// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/v1alpha1/tickets/ticket.proto (package api.v1alpha1.tickets, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3, Timestamp } from "@bufbuild/protobuf";
import { ActionType, AssignProjectTemplate, Comment, ConfirmReplyComment, Duration, EditAttribute, ListTemplate, Metadata, PhoneNumberType, ReplyComment, Skills, Sla, SlaConditions, TemplateDescription, Ticket, TicketAction, TicketProjectTemplate, TicketSla, TicketStatus, TicketTemplate } from "../../commons/tickets_pb.js";

/**
 * @generated from message api.v1alpha1.tickets.PingReq
 */
export const PingReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.PingReq",
  [],
);

/**
 * @generated from message api.v1alpha1.tickets.PingRes
 */
export const PingRes = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.PingRes",
  [],
);

/**
 * CreateTicketReq - Request for CreateTicket
 *
 * @generated from message api.v1alpha1.tickets.CreateTicketReq
 */
export const CreateTicketReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateTicketTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketTemplateRequest",
  () => [
    { no: 1, name: "ticket_template", kind: "message", T: TicketTemplate },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CreateTicketTemplateResponse
 */
export const CreateTicketTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketTemplateResponse",
  () => [
    { no: 1, name: "ticket_template", kind: "message", T: TicketTemplate },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.EditTicketTemplateRequest
 */
export const EditTicketTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const EditTicketTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.EditTicketTemplateResponse",
  () => [
    { no: 1, name: "is_edited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ListTicketTemplateRequest
 */
export const ListTicketTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListTicketTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
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
export const AssignProjectTemplateRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const AssignProjectTemplateResponse = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateTicketRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const GetActionTypeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.GetActionTypeRequest",
  [],
);

/**
 * Returns all the Action Types
 *
 * @generated from message api.v1alpha1.tickets.GetActionTypeResponse
 */
export const GetActionTypeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.GetActionTypeResponse",
  () => [
    { no: 1, name: "action_type", kind: "message", T: ActionType, repeated: true },
  ],
);

/**
 * Reqiest For Phone Number Validation - Mobile/Other/Invalid
 *
 * @generated from message api.v1alpha1.tickets.GetPhoneNumberTypeRequest
 */
export const GetPhoneNumberTypeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.GetPhoneNumberTypeRequest",
  () => [
    { no: 1, name: "phone_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.GetPhoneNumberTypeResponse
 */
export const GetPhoneNumberTypeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.GetPhoneNumberTypeResponse",
  () => [
    { no: 1, name: "phone_type", kind: "enum", T: proto3.getEnumType(PhoneNumberType) },
  ],
);

/**
 * EditTicketReq - Request for EditTicketReq
 *
 * @generated from message api.v1alpha1.tickets.EditTicketReq
 * @deprecated
 */
export const EditTicketReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const EditMaskTicketReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const EditMaskTicketRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListAllocatedTicketRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListAllocatedTicketReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListAllocatedTicketReq",
  [],
);

/**
 * ListAvailableAgentTicketsResponse -
 *
 * @generated from message api.v1alpha1.tickets.ListAvailableAgentTicketsResponse
 */
export const ListAvailableAgentTicketsResponse = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListAvailableAgentTicketsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListAvailableAgentTicketsRequest",
  () => [
    { no: 1, name: "select_field_mask", kind: "message", T: FieldMask },
    { no: 2, name: "available_filter", kind: "message", T: AvailableTicketsFilter },
    { no: 3, name: "agent_view_limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * AvailableTicketsFilter
 *
 * @generated from message api.v1alpha1.tickets.AvailableTicketsFilter
 */
export const AvailableTicketsFilter = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.AvailableTicketsFilter",
  () => [
    { no: 1, name: "agent_skill_id", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * EditTicketRes - Response for EditTicketReq
 *
 * @generated from message api.v1alpha1.tickets.EditTicketRes
 */
export const EditTicketRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListTicketsReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketsReq",
  [],
);

/**
 * @generated from message api.v1alpha1.tickets.ListTicketsRes
 */
export const ListTicketsRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const AssignTicketReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const AssignTicketRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const ViewTicketReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const ViewTicketRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateCommentReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateCommentRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const CloseTicketReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const CloseTicketRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateSlaReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateSlaRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListSlaReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSlaReq",
  [],
);

/**
 * ListSlaRes -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaRes
 */
export const ListSlaRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const UpdateSlaReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const UpdateSlaRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListSlaConditionReq = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSlaConditionReq",
  [],
);

/**
 * ListSlaConditionRes -
 *
 * @generated from message api.v1alpha1.tickets.ListSlaConditionRes
 */
export const ListSlaConditionRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const ReplyCommentReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const ReplyCommentRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateSelfAssignReq = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateSelfAssignRes = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListSkillsRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSkillsRequest",
  [],
);

/**
 * ListSkillsResponse - response message wraps p3 skills Id and name
 *
 * @generated from message api.v1alpha1.tickets.ListSkillsResponse
 */
export const ListSkillsResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListSkillsResponse",
  () => [
    { no: 1, name: "skills", kind: "message", T: Skill, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.Skill
 */
export const Skill = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListUsersRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListUsersRequest",
  [],
);

/**
 * ListUsersResponse - response wraps userId, first_name, last_name
 *
 * @generated from message api.v1alpha1.tickets.ListUsersResponse
 */
export const ListUsersResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListUsersResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: User, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.User
 */
export const User = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateTicketActionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketActionRequest",
  () => [
    { no: 1, name: "ticket_action", kind: "message", T: TicketAction },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CreateTicketActionResponse
 */
export const CreateTicketActionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.CreateTicketActionResponse",
  () => [
    { no: 1, name: "ticket_action", kind: "message", T: TicketAction },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.CloseTicketActionRequest
 */
export const CloseTicketActionRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const CloseTicketActionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.CloseTicketActionResponse",
  () => [
    { no: 1, name: "is_closed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AssignTicketActionRequest
 */
export const AssignTicketActionRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignTicketActionRequest",
  () => [
    { no: 1, name: "ticket_action_id", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AssignTicketActionResponse
 */
export const AssignTicketActionResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.AssignTicketActionResponse",
  () => [
    { no: 1, name: "is_assigned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ChangeTicketStatusRequest
 */
export const ChangeTicketStatusRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const ChangeTicketStatusResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ChangeTicketStatusResponse",
  () => [
    { no: 1, name: "is_status_edited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AddEntityRefRequest
 */
export const AddEntityRefRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.AddEntityRefRequest",
  () => [
    { no: 1, name: "entity_ref", kind: "message", T: EntityRef },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.AddEntityRefResponse
 */
export const AddEntityRefResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.AddEntityRefResponse",
  [],
);

/**
 * @generated from message api.v1alpha1.tickets.ListEntityRefsByTicketRequest
 */
export const ListEntityRefsByTicketRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListEntityRefsByTicketRequest",
  () => [
    { no: 1, name: "ticket_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ListEntityRefsByTicketResponse
 */
export const ListEntityRefsByTicketResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListEntityRefsByTicketResponse",
  () => [
    { no: 1, name: "entity_ref", kind: "message", T: EntityRef, repeated: true },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ListTicketsByEntityRefRequest
 */
export const ListTicketsByEntityRefRequest = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketsByEntityRefRequest",
  () => [
    { no: 1, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message api.v1alpha1.tickets.ListTicketsByEntityRefResponse
 */
export const ListTicketsByEntityRefResponse = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.ListTicketsByEntityRefResponse",
  () => [
    { no: 1, name: "tickets", kind: "message", T: Ticket, repeated: true },
  ],
);

/**
 * should this be in a separate folder / file
 *
 * @generated from message api.v1alpha1.tickets.EntityRef
 */
export const EntityRef = /*@__PURE__*/ proto3.makeMessageType(
  "api.v1alpha1.tickets.EntityRef",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "ticket_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

