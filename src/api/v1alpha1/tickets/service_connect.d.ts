// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v1alpha1/tickets/service.proto (package api.v1alpha1.tickets, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddEntityRefRequest, AddEntityRefResponse, AssignProjectTemplateRequest, AssignProjectTemplateResponse, AssignTicketActionRequest, AssignTicketActionResponse, AssignTicketReq, AssignTicketRes, ChangeTicketStatusRequest, ChangeTicketStatusResponse, CloseTicketActionRequest, CloseTicketActionResponse, CloseTicketReq, CloseTicketRes, CreateCommentReq, CreateCommentRes, CreateSelfAssignReq, CreateSelfAssignRes, CreateSlaReq, CreateSlaRes, CreateTicketActionRequest, CreateTicketActionResponse, CreateTicketReq, CreateTicketRes, CreateTicketTemplateRequest, CreateTicketTemplateResponse, EditMaskTicketReq, EditMaskTicketRes, EditTicketReq, EditTicketRes, EditTicketTemplateRequest, EditTicketTemplateResponse, GetActionTypeRequest, GetActionTypeResponse, GetPhoneNumberTypeRequest, GetPhoneNumberTypeResponse, ListAllocatedTicketReq, ListAllocatedTicketRes, ListAvailableAgentTicketsRequest, ListAvailableAgentTicketsResponse, ListEntityRefsByTicketRequest, ListEntityRefsByTicketResponse, ListSkillsRequest, ListSkillsResponse, ListSlaConditionReq, ListSlaConditionRes, ListSlaReq, ListSlaRes, ListTicketsByEntityRefRequest, ListTicketsByEntityRefResponse, ListTicketsReq, ListTicketsRes, ListTicketTemplateRequest, ListTicketTemplateResponse, ListUsersRequest, ListUsersResponse, ReplyCommentReq, ReplyCommentRes, UpdateSlaReq, UpdateSlaRes, ViewTicketReq, ViewTicketRes } from "./ticket_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { EnableProjectReq, EnableProjectRes, ListEnabledProjectsReq, ListEnabledProjectsRes, ListTicketAuditLogReq, ListTicketAuditLogRes } from "./project_pb.js";

/**
 * Tickets service is the public api for the tickets service., for public integrations to manage tickets / customer service requests. Can be used by any authorized frontend-app.
 *
 * @generated from service api.v1alpha1.tickets.Tickets
 */
export declare const Tickets: {
  readonly typeName: "api.v1alpha1.tickets.Tickets",
  readonly methods: {
    /**
     * Public Method to create a ticket.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateTicket
     */
    readonly createTicket: {
      readonly name: "CreateTicket",
      readonly I: typeof CreateTicketReq,
      readonly O: typeof CreateTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to edit a ticket.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.EditTicket
     */
    readonly editTicket: {
      readonly name: "EditTicket",
      readonly I: typeof EditTicketReq,
      readonly O: typeof EditTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list tickets
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListTickets
     */
    readonly listTickets: {
      readonly name: "ListTickets",
      readonly I: typeof ListTicketsReq,
      readonly O: typeof ListTicketsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to assign ticket
     * Would be deprecated
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AssignTicket
     */
    readonly assignTicket: {
      readonly name: "AssignTicket",
      readonly I: typeof AssignTicketReq,
      readonly O: typeof AssignTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to Close a ticket
     * Any agent can close the ticket. No BE validation required
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CloseTicket
     */
    readonly closeTicket: {
      readonly name: "CloseTicket",
      readonly I: typeof CloseTicketReq,
      readonly O: typeof CloseTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to view ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ViewTicket
     */
    readonly viewTicket: {
      readonly name: "ViewTicket",
      readonly I: typeof ViewTicketReq,
      readonly O: typeof ViewTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to create a Comment.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateComment
     */
    readonly createComment: {
      readonly name: "CreateComment",
      readonly I: typeof CreateCommentReq,
      readonly O: typeof CreateCommentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to Enable Project for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.EnableProject
     */
    readonly enableProject: {
      readonly name: "EnableProject",
      readonly I: typeof EnableProjectReq,
      readonly O: typeof EnableProjectRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to List projects enabled for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListEnabledProjects
     */
    readonly listEnabledProjects: {
      readonly name: "ListEnabledProjects",
      readonly I: typeof ListEnabledProjectsReq,
      readonly O: typeof ListEnabledProjectsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to create a sla.
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateSLA
     */
    readonly createSLA: {
      readonly name: "CreateSLA",
      readonly I: typeof CreateSlaReq,
      readonly O: typeof CreateSlaRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListSLA
     */
    readonly listSLA: {
      readonly name: "ListSLA",
      readonly I: typeof ListSlaReq,
      readonly O: typeof ListSlaRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to update sla
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.UpdateSLA
     */
    readonly updateSLA: {
      readonly name: "UpdateSLA",
      readonly I: typeof UpdateSlaReq,
      readonly O: typeof UpdateSlaRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla_condition
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListSLACondition
     */
    readonly listSLACondition: {
      readonly name: "ListSLACondition",
      readonly I: typeof ListSlaConditionReq,
      readonly O: typeof ListSlaConditionRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list sla_condition
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ReplyComment
     */
    readonly replyComment: {
      readonly name: "ReplyComment",
      readonly I: typeof ReplyCommentReq,
      readonly O: typeof ReplyCommentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to List audit log for Ticketing system
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListTicketAuditLog
     */
    readonly listTicketAuditLog: {
      readonly name: "ListTicketAuditLog",
      readonly I: typeof ListTicketAuditLogReq,
      readonly O: typeof ListTicketAuditLogRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to assign a ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AssignSelf
     */
    readonly assignSelf: {
      readonly name: "AssignSelf",
      readonly I: typeof CreateSelfAssignReq,
      readonly O: typeof CreateSelfAssignRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public Method to edit a ticket.
     * EditTicket would be deprecated
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.EditMaskTicket
     */
    readonly editMaskTicket: {
      readonly name: "EditMaskTicket",
      readonly I: typeof EditMaskTicketReq,
      readonly O: typeof EditMaskTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListAllocatedTickets
     * @deprecated
     */
    readonly listAllocatedTickets: {
      readonly name: "ListAllocatedTickets",
      readonly I: typeof ListAllocatedTicketReq,
      readonly O: typeof ListAllocatedTicketRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * public method - to return list of available tickets to pick for an Agent
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListAvailableAgentTickets
     */
    readonly listAvailableAgentTickets: {
      readonly name: "ListAvailableAgentTickets",
      readonly I: typeof ListAvailableAgentTicketsRequest,
      readonly O: typeof ListAvailableAgentTicketsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * public method to fetch list of skills for a tickets user
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListSkills
     */
    readonly listSkills: {
      readonly name: "ListSkills",
      readonly I: typeof ListSkillsRequest,
      readonly O: typeof ListSkillsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * public method to fetch list of users for a tickets user
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListUsers
     */
    readonly listUsers: {
      readonly name: "ListUsers",
      readonly I: typeof ListUsersRequest,
      readonly O: typeof ListUsersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Any agent can close the ticket. No BE validation required
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CloseTicketAction
     */
    readonly closeTicketAction: {
      readonly name: "CloseTicketAction",
      readonly I: typeof CloseTicketActionRequest,
      readonly O: typeof CloseTicketActionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to assign a ticket action
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AssignTicketAction
     */
    readonly assignTicketAction: {
      readonly name: "AssignTicketAction",
      readonly I: typeof AssignTicketActionRequest,
      readonly O: typeof AssignTicketActionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to assign a ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateTicketAction
     */
    readonly createTicketAction: {
      readonly name: "CreateTicketAction",
      readonly I: typeof CreateTicketActionRequest,
      readonly O: typeof CreateTicketActionResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to change the Status of a ticket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ChangeTicketStatus
     */
    readonly changeTicketStatus: {
      readonly name: "ChangeTicketStatus",
      readonly I: typeof ChangeTicketStatusRequest,
      readonly O: typeof ChangeTicketStatusResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to create a Ticket Template
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.CreateTicketTemplate
     */
    readonly createTicketTemplate: {
      readonly name: "CreateTicketTemplate",
      readonly I: typeof CreateTicketTemplateRequest,
      readonly O: typeof CreateTicketTemplateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to Edit a Ticket Template
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.EditTicketTemplate
     */
    readonly editTicketTemplate: {
      readonly name: "EditTicketTemplate",
      readonly I: typeof EditTicketTemplateRequest,
      readonly O: typeof EditTicketTemplateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to all Ticket Templates
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListTicketTemplate
     */
    readonly listTicketTemplate: {
      readonly name: "ListTicketTemplate",
      readonly I: typeof ListTicketTemplateRequest,
      readonly O: typeof ListTicketTemplateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to assign a Template To a Project
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AssignTicketTemplate
     */
    readonly assignTicketTemplate: {
      readonly name: "AssignTicketTemplate",
      readonly I: typeof AssignProjectTemplateRequest,
      readonly O: typeof AssignProjectTemplateResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list all Action Types
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.GetAllActionType
     */
    readonly getAllActionType: {
      readonly name: "GetAllActionType",
      readonly I: typeof GetActionTypeRequest,
      readonly O: typeof GetActionTypeResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to list all Action Types
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.GetPhoneNumberType
     */
    readonly getPhoneNumberType: {
      readonly name: "GetPhoneNumberType",
      readonly I: typeof GetPhoneNumberTypeRequest,
      readonly O: typeof GetPhoneNumberTypeResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to addEntityRef
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.AddEntityRef
     */
    readonly addEntityRef: {
      readonly name: "AddEntityRef",
      readonly I: typeof AddEntityRefRequest,
      readonly O: typeof AddEntityRefResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to listTicketsByEntityRef
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListTicketsByEntityRef
     */
    readonly listTicketsByEntityRef: {
      readonly name: "ListTicketsByEntityRef",
      readonly I: typeof ListTicketsByEntityRefRequest,
      readonly O: typeof ListTicketsByEntityRefResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Public method to listEntityRefsByTicket
     *
     * @generated from rpc api.v1alpha1.tickets.Tickets.ListEntityRefsByTicket
     */
    readonly listEntityRefsByTicket: {
      readonly name: "ListEntityRefsByTicket",
      readonly I: typeof ListEntityRefsByTicketRequest,
      readonly O: typeof ListEntityRefsByTicketResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

