// @generated by protoc-gen-connect-es v0.13.0
// @generated from file api/v0alpha/omniapi.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ApproveTaskRequest, ApproveTaskResponse, ArchiveCampaignReq, ArchiveCampaignRes, CannedMessage, CannedMessageGroup, CannedMessageWithGroup, CloseProjectByIdReq, CloseProjectByIdRes, CreateCampaignReq, CreateCannedMessageGroupReq, CreateCannedMessageReq, CreateConnectedInboxRes, CreateCustomUnsubscribeLinkRes, CreateDispositionReq, CreateDispositionRes, CreateProjectReq, CreateProjectRes, CreateSignatureReq, CreateSignatureRes, CreateTasksReq, CreateTasksRes, CreateVerifiedEmailRes, DeleteCannedMessageByIdReq, DeleteCannedMessageByIdRes, DeleteCannedMessageGroupReq, DeleteCannedMessageGroupRes, DeleteConnectedInboxBySidReq, DeleteCustomUnsubscribeLinkReq, DeleteDispositionReq, DeleteSignatureReq, DeleteSignatureRes, DeleteVerifiedEmailReq, EditProjectByIdReq, EditProjectByIdRes, GetAvailableHeadersReq, GetAvailableHeadersRes, GetCampaignByIdReq, GetCannedMessageByIdReq, GetCannedMessageGroupByIdReq, GetConnectedInboxBySidReq, GetNextQueuedTaskRequest, GetNextQueuedTaskResponse, GetOmniAttachmentReq, GetPendingGoogleXOAuth2DataReq, GetPendingGoogleXOAuth2DataRes, GetProjectByIdReq, GetTaskReq, GetVerifiedEmailBySidReq, ListCampaignsReq, ListCampaignsRes, ListCannedMessageGroupsReq, ListCannedMessageGroupsRes, ListCannedMessagesByGroupIdReq, ListCannedMessagesByGroupIdRes, ListCannedMessagesReq, ListCannedMessagesRes, ListConnectedInboxesReq, ListConnectedInboxesRes, ListContactListsReq, ListContactListsRes, ListConversationsReq, ListConversationsRes, ListCustomUnsubscribeLinksRes, ListDispositionsReq, ListDispositionsRes, ListMessagesReq, ListProjectsReq, ListProjectsRes, ListSignaturesReq, ListSignaturesRes, ListTasksReq, ListTasksRes, ListUserSkillsReq, ListUserSkillsRes, ListVerifiedEmailsReq, ListVerifiedEmailsRes, ManagerListMessagesReq, PauseCampaignReq, PauseCampaignRes, Project, RejectTaskRequest, RejectTaskResponse, RequeueTaskRequest, RequeueTaskResponse, ResendVerifiedEmailReq, ResendVerifiedEmailRes, ResumeCampaignReq, ResumeCampaignRes, SendEmailNotificationReq, SendEmailNotificationRes, SendFeedbackEmailReq, SendFeedbackEmailRes, SendgridAccountByClientReq, SendgridAccountByClientRes, SendOmniMessageReq, SuggestResponseReq, SuggestResponseRes, TestConnectedInboxRes, UpdateCampaignPacingSpeedReq, UpdateCampaignPacingSpeedRes, UpdateCampaignReq, UpdateCampaignRes, UpdateCannedMessageGroupReq, UpdateCannedMessageGroupRes, UpdateCannedMessageReq, UpdateConnectedInboxReq, UpdateCustomUnsubscribeLinkReq, UpdateCustomUnsubscribeLinkRes, UpdateDispositionReq, UpdateSignatureReq, UpdateSignatureRes, UpdateVerifiedEmailReq } from "./omniapi_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ConnectedInbox, OmniAttachment, OmniCampaign, OmniCustomUnsubscribeLink, OmniMessage, OmniTask, VerifiedEmail } from "../commons/omnichannel_pb.js";
import { Empty } from "../commons/types_pb.js";

/**
 * Service for interacting with TCN's Omni API system.
 * Accessing all of the methods require an authenticated user with the correct
 * permissions.
 *
 * @generated from service api.v0alpha.OmniApi
 */
export declare const OmniApi: {
  readonly typeName: "api.v0alpha.OmniApi",
  readonly methods: {
    /**
     * archive a campaign
     *
     * @generated from rpc api.v0alpha.OmniApi.ArchiveCampaign
     */
    readonly archiveCampaign: {
      readonly name: "ArchiveCampaign",
      readonly I: typeof ArchiveCampaignReq,
      readonly O: typeof ArchiveCampaignRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create Omni Campaign defined by CreateOmniCampaign message
     * for the name, skill, Hours of operations, and description.
     * the method will return newly created OmniCampaign for this client
     * Required Permission:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateCampaign
     */
    readonly createCampaign: {
      readonly name: "CreateCampaign",
      readonly I: typeof CreateCampaignReq,
      readonly O: typeof OmniCampaign,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get campaign defined by GetChatCampaignById.
     *
     * @generated from rpc api.v0alpha.OmniApi.GetCampaignById
     */
    readonly getCampaignById: {
      readonly name: "GetCampaignById",
      readonly I: typeof GetCampaignByIdReq,
      readonly O: typeof OmniCampaign,
      readonly kind: MethodKind.Unary,
    },
    /**
     * pause a campaign
     *
     * @generated from rpc api.v0alpha.OmniApi.PauseCampaign
     */
    readonly pauseCampaign: {
      readonly name: "PauseCampaign",
      readonly I: typeof PauseCampaignReq,
      readonly O: typeof PauseCampaignRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * resume a campaign
     *
     * @generated from rpc api.v0alpha.OmniApi.ResumeCampaign
     */
    readonly resumeCampaign: {
      readonly name: "ResumeCampaign",
      readonly I: typeof ResumeCampaignReq,
      readonly O: typeof ResumeCampaignRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates a campaign
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCampaign
     */
    readonly updateCampaign: {
      readonly name: "UpdateCampaign",
      readonly I: typeof UpdateCampaignReq,
      readonly O: typeof UpdateCampaignRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * update campaign pacing - speed up/slow down a campaign
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCampaignPacingSpeed
     */
    readonly updateCampaignPacingSpeed: {
      readonly name: "UpdateCampaignPacingSpeed",
      readonly I: typeof UpdateCampaignPacingSpeedReq,
      readonly O: typeof UpdateCampaignPacingSpeedRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Send a chat message
     *
     * @generated from rpc api.v0alpha.OmniApi.SendOmniMessage
     */
    readonly sendOmniMessage: {
      readonly name: "SendOmniMessage",
      readonly I: typeof SendOmniMessageReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Send a chat message
     *
     * @generated from rpc api.v0alpha.OmniApi.ManagerSendOmniMessage
     */
    readonly managerSendOmniMessage: {
      readonly name: "ManagerSendOmniMessage",
      readonly I: typeof SendOmniMessageReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create a disposition
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateDisposition
     */
    readonly createDisposition: {
      readonly name: "CreateDisposition",
      readonly I: typeof CreateDispositionReq,
      readonly O: typeof CreateDispositionRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteDisposition - delete an existing disposition
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteDisposition
     */
    readonly deleteDisposition: {
      readonly name: "DeleteDisposition",
      readonly I: typeof DeleteDispositionReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListDispositions - lists all dispositions
     *
     * @generated from rpc api.v0alpha.OmniApi.ListDispositions
     */
    readonly listDispositions: {
      readonly name: "ListDispositions",
      readonly I: typeof ListDispositionsReq,
      readonly O: typeof ListDispositionsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateDisposition - update an existing disposition
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateDisposition
     */
    readonly updateDisposition: {
      readonly name: "UpdateDisposition",
      readonly I: typeof UpdateDispositionReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListCustomUnsubscribeLinks - retrieves all the custom unsubscribe links
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCustomUnsubscribeLinks
     */
    readonly listCustomUnsubscribeLinks: {
      readonly name: "ListCustomUnsubscribeLinks",
      readonly I: typeof Empty,
      readonly O: typeof ListCustomUnsubscribeLinksRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateUnsubscribeLink - creates a new unsubscribe link
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateCustomUnsubscribeLink
     */
    readonly createCustomUnsubscribeLink: {
      readonly name: "CreateCustomUnsubscribeLink",
      readonly I: typeof OmniCustomUnsubscribeLink,
      readonly O: typeof CreateCustomUnsubscribeLinkRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateCustomUnsubscribeLink - update custom unsubscribe link details
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCustomUnsubscribeLink
     */
    readonly updateCustomUnsubscribeLink: {
      readonly name: "UpdateCustomUnsubscribeLink",
      readonly I: typeof UpdateCustomUnsubscribeLinkReq,
      readonly O: typeof UpdateCustomUnsubscribeLinkRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteCustomUnsubscribeLink - deletes custom unsubscribe link details
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteCustomUnsubscribeLink
     */
    readonly deleteCustomUnsubscribeLink: {
      readonly name: "DeleteCustomUnsubscribeLink",
      readonly I: typeof DeleteCustomUnsubscribeLinkReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List campaigns defined by ListCampaignsReq.
     * The method will return a ListCampaignsReq entity that will contain
     * all the campaigns within the specified filter.
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCampaigns
     */
    readonly listCampaigns: {
      readonly name: "ListCampaigns",
      readonly I: typeof ListCampaignsReq,
      readonly O: typeof ListCampaignsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get a stream of new conversation message for a given conversation. Used
     * only for managers. It is not for customers.
     *
     * @generated from rpc api.v0alpha.OmniApi.ManagerListMessages
     */
    readonly managerListMessages: {
      readonly name: "ManagerListMessages",
      readonly I: typeof ManagerListMessagesReq,
      readonly O: typeof OmniMessage,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * Get a stream of conversation message for a given conversation. Used
     * only for agents/users. It is not for customers.
     *
     * @generated from rpc api.v0alpha.OmniApi.ListMessages
     */
    readonly listMessages: {
      readonly name: "ListMessages",
      readonly I: typeof ListMessagesReq,
      readonly O: typeof OmniMessage,
      readonly kind: MethodKind.ServerStreaming,
    },
    /**
     * lists all conversation and assigned users for a given date range.
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ManagerListConversations
     */
    readonly managerListConversations: {
      readonly name: "ManagerListConversations",
      readonly I: typeof ListConversationsReq,
      readonly O: typeof ListConversationsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListContactLists - retrieves all the contact lists
     *
     * @generated from rpc api.v0alpha.OmniApi.ListContactLists
     */
    readonly listContactLists: {
      readonly name: "ListContactLists",
      readonly I: typeof ListContactListsReq,
      readonly O: typeof ListContactListsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetAvailableHeaders - retrieves all the available headers that could be present on a contact list
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetAvailableHeaders
     */
    readonly getAvailableHeaders: {
      readonly name: "GetAvailableHeaders",
      readonly I: typeof GetAvailableHeadersReq,
      readonly O: typeof GetAvailableHeadersRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ApproveTask approves a task.
     *
     * @generated from rpc api.v0alpha.OmniApi.ApproveTask
     */
    readonly approveTask: {
      readonly name: "ApproveTask",
      readonly I: typeof ApproveTaskRequest,
      readonly O: typeof ApproveTaskResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetNextQueuedTask retrieves the next queued task for the agent.
     *
     * @generated from rpc api.v0alpha.OmniApi.GetNextQueuedTask
     */
    readonly getNextQueuedTask: {
      readonly name: "GetNextQueuedTask",
      readonly I: typeof GetNextQueuedTaskRequest,
      readonly O: typeof GetNextQueuedTaskResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetTask - retrieves a task using the provided criteria
     * Required permissions:
     *    OMNI_AGENT
     *
     * @generated from rpc api.v0alpha.OmniApi.GetTask
     */
    readonly getTask: {
      readonly name: "GetTask",
      readonly I: typeof GetTaskReq,
      readonly O: typeof OmniTask,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListTasks - retrieves tasks using the provided criteria
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListTasks
     */
    readonly listTasks: {
      readonly name: "ListTasks",
      readonly I: typeof ListTasksReq,
      readonly O: typeof ListTasksRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * RejectTask rejects a task.
     *
     * @generated from rpc api.v0alpha.OmniApi.RejectTask
     */
    readonly rejectTask: {
      readonly name: "RejectTask",
      readonly I: typeof RejectTaskRequest,
      readonly O: typeof RejectTaskResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * RequeueTask requeues a task.
     *
     * @generated from rpc api.v0alpha.OmniApi.RequeueTask
     */
    readonly requeueTask: {
      readonly name: "RequeueTask",
      readonly I: typeof RequeueTaskRequest,
      readonly O: typeof RequeueTaskResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateConnectedInbox - create a new connected inbox
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateConnectedInbox
     */
    readonly createConnectedInbox: {
      readonly name: "CreateConnectedInbox",
      readonly I: typeof ConnectedInbox,
      readonly O: typeof CreateConnectedInboxRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteConnectedInboxBySid - deletes a connected inbox given it's identifier
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteConnectedInboxBySid
     */
    readonly deleteConnectedInboxBySid: {
      readonly name: "DeleteConnectedInboxBySid",
      readonly I: typeof DeleteConnectedInboxBySidReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetConnectedInboxBySid - retrieves a connected inbox given it's identifier
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetConnectedInboxBySid
     */
    readonly getConnectedInboxBySid: {
      readonly name: "GetConnectedInboxBySid",
      readonly I: typeof GetConnectedInboxBySidReq,
      readonly O: typeof ConnectedInbox,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Perform sendgrid account check to make sure all the account settings are valid defined by SendgridAccountByClientReq message.
     * The method will return a SendgridAccountByClientRes message/entity that will
     * contain the result true/false verifying account settings with sendgrid for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.PerformSendgridAccountChecks
     */
    readonly performSendgridAccountChecks: {
      readonly name: "PerformSendgridAccountChecks",
      readonly I: typeof SendgridAccountByClientReq,
      readonly O: typeof SendgridAccountByClientRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListConnectedInboxes - retrieves all the connected inboxes for the organization
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListConnectedInboxes
     */
    readonly listConnectedInboxes: {
      readonly name: "ListConnectedInboxes",
      readonly I: typeof ListConnectedInboxesReq,
      readonly O: typeof ListConnectedInboxesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * TestConnectedInbox - check if connected inbox login works for a specified email_address,
     * username, password, server_name, and server_port (other fields from ConnectedInbox are ignored).
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.TestConnectedInbox
     */
    readonly testConnectedInbox: {
      readonly name: "TestConnectedInbox",
      readonly I: typeof ConnectedInbox,
      readonly O: typeof TestConnectedInboxRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateConnectedInbox - update a connected inbox
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateConnectedInbox
     */
    readonly updateConnectedInbox: {
      readonly name: "UpdateConnectedInbox",
      readonly I: typeof UpdateConnectedInboxReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateVerifiedEmail.  this will create a new verified email
     * Required permissions
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateVerifiedEmail
     */
    readonly createVerifiedEmail: {
      readonly name: "CreateVerifiedEmail",
      readonly I: typeof VerifiedEmail,
      readonly O: typeof CreateVerifiedEmailRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Delete verify email record based on verified email id defined by
     * DeleteVerifiedEmailReq for the specified client.
     * This method will return a DeleteVerifiedEmailRes message/entity.
     * DeleteVerifiedEmail - deletes a verified email record using the given identifier
     * Required permissions
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteVerifiedEmail
     */
    readonly deleteVerifiedEmail: {
      readonly name: "DeleteVerifiedEmail",
      readonly I: typeof DeleteVerifiedEmailReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the verified email details based on verified email id defined by
     * GetVerifiedEmailByIdReq for the specified client.
     * This method will return an OmniVerifiedEmail message/entity.
     * Required permissions
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetVerifiedEmailBySid
     */
    readonly getVerifiedEmailBySid: {
      readonly name: "GetVerifiedEmailBySid",
      readonly I: typeof GetVerifiedEmailBySidReq,
      readonly O: typeof VerifiedEmail,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List all the verified emails and their details defined by
     * ListVerifiedEmailsReq for the specified client.
     * This method will return a ListVerifiedEmailsRes message/entity.
     * Required permissions
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListVerifiedEmails
     */
    readonly listVerifiedEmails: {
      readonly name: "ListVerifiedEmails",
      readonly I: typeof ListVerifiedEmailsReq,
      readonly O: typeof ListVerifiedEmailsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Resend verify email record based on verified email id defined by
     * ResendVerifiedEmailReq for the specified client.
     * This method will return a ResendVerifiedEmailRes message/entity.
     * Required permissions
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ResendVerifiedEmail
     */
    readonly resendVerifiedEmail: {
      readonly name: "ResendVerifiedEmail",
      readonly I: typeof ResendVerifiedEmailReq,
      readonly O: typeof ResendVerifiedEmailRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates verified email description
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateVerifiedEmail
     */
    readonly updateVerifiedEmail: {
      readonly name: "UpdateVerifiedEmail",
      readonly I: typeof UpdateVerifiedEmailReq,
      readonly O: typeof Empty,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetPendingGoogleXOAuth2Data - retrieves the pending oauth data required to finish creating a connected inbox
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetPendingGoogleXOAuth2Data
     */
    readonly getPendingGoogleXOAuth2Data: {
      readonly name: "GetPendingGoogleXOAuth2Data",
      readonly I: typeof GetPendingGoogleXOAuth2DataReq,
      readonly O: typeof GetPendingGoogleXOAuth2DataRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Send email notification defined by SendEmailNotificationReq message for the specified
     * subject, message and array of to email addresses.
     * The method will return a stream of SendEmailNotificationRes messages
     * containing result true/false after notified by email for the client_sid.
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.SendEmailNotification
     */
    readonly sendEmailNotification: {
      readonly name: "SendEmailNotification",
      readonly I: typeof SendEmailNotificationReq,
      readonly O: typeof SendEmailNotificationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Send an email to our feedback system. The users email will be populated as the from address to open an email thread with our support.
     *
     * @generated from rpc api.v0alpha.OmniApi.SendFeedbackEmail
     */
    readonly sendFeedbackEmail: {
      readonly name: "SendFeedbackEmail",
      readonly I: typeof SendFeedbackEmailReq,
      readonly O: typeof SendFeedbackEmailRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetOmniAttachment - retrieves the omni attachment details based on the request
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetOmniAttachment
     */
    readonly getOmniAttachment: {
      readonly name: "GetOmniAttachment",
      readonly I: typeof GetOmniAttachmentReq,
      readonly O: typeof OmniAttachment,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create a task with a given contat list .
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateTasks
     */
    readonly createTasks: {
      readonly name: "CreateTasks",
      readonly I: typeof CreateTasksReq,
      readonly O: typeof CreateTasksRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * CreateSignature - creates a new message signature
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateSignature
     */
    readonly createSignature: {
      readonly name: "CreateSignature",
      readonly I: typeof CreateSignatureReq,
      readonly O: typeof CreateSignatureRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * DeleteSignature - deletes a message signature
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteSignature
     */
    readonly deleteSignature: {
      readonly name: "DeleteSignature",
      readonly I: typeof DeleteSignatureReq,
      readonly O: typeof DeleteSignatureRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ListSignatures - retrieves the signatures created by the organization
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListSignatures
     */
    readonly listSignatures: {
      readonly name: "ListSignatures",
      readonly I: typeof ListSignaturesReq,
      readonly O: typeof ListSignaturesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * UpdateSignature - updates a message signature
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateSignature
     */
    readonly updateSignature: {
      readonly name: "UpdateSignature",
      readonly I: typeof UpdateSignatureReq,
      readonly O: typeof UpdateSignatureRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SuggestResponse
     *
     * @generated from rpc api.v0alpha.OmniApi.SuggestResponse
     */
    readonly suggestResponse: {
      readonly name: "SuggestResponse",
      readonly I: typeof SuggestResponseReq,
      readonly O: typeof SuggestResponseRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create/Record project defined by CreateProjectReq message for a specified
     * name, description and status.
     * The method will return a Project message/entity that will
     * contain the newly created project_id value for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateProject
     */
    readonly createProject: {
      readonly name: "CreateProject",
      readonly I: typeof CreateProjectReq,
      readonly O: typeof CreateProjectRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list projects for the current org
     * The method will return a list of Project messages/entities
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListProjects
     */
    readonly listProjects: {
      readonly name: "ListProjects",
      readonly I: typeof ListProjectsReq,
      readonly O: typeof ListProjectsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update project defined by EditProjectByIdReq message for a specified
     * project id.
     * The method will return a Project message/entity that will
     * contain the updated details for the project_id
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.EditProjectById
     */
    readonly editProjectById: {
      readonly name: "EditProjectById",
      readonly I: typeof EditProjectByIdReq,
      readonly O: typeof EditProjectByIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Closes project defined by CloseProjectByIdReq message for a specified
     * project id.
     * The method will stop all child campaigns and return a an empty response
     * if successful
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CloseProjectById
     */
    readonly closeProjectById: {
      readonly name: "CloseProjectById",
      readonly I: typeof CloseProjectByIdReq,
      readonly O: typeof CloseProjectByIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get project details defined by GetProjectByIdReq message for a specified
     * project id.
     * The method will return a GetProjectByIdRes message/entity that will
     * contain all the project details for the project_id
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetProjectById
     */
    readonly getProjectById: {
      readonly name: "GetProjectById",
      readonly I: typeof GetProjectByIdReq,
      readonly O: typeof Project,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create/Record canned message defined by CreateCannedMessageReq message for a specified
     * name, description and message_body.
     * The method will return a CannedMessage message/entity that will
     * contain the newly created canned message details for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateCannedMessage
     */
    readonly createCannedMessage: {
      readonly name: "CreateCannedMessage",
      readonly I: typeof CreateCannedMessageReq,
      readonly O: typeof CannedMessage,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list canned messages for the current org
     * The method will return a list of canned messages/entities
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCannedMessages
     */
    readonly listCannedMessages: {
      readonly name: "ListCannedMessages",
      readonly I: typeof ListCannedMessagesReq,
      readonly O: typeof ListCannedMessagesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update canned message defined by UpdateCannedMessageReq message for a specified
     * name, description and message_body.
     * The method will return a CannedMessage message/entity that will
     * contain the updated canned message details for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCannedMessage
     */
    readonly updateCannedMessage: {
      readonly name: "UpdateCannedMessage",
      readonly I: typeof UpdateCannedMessageReq,
      readonly O: typeof CannedMessage,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get canned message details for the canned_message_id
     * The method will return an canned message/entity
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetCannedMessageById
     */
    readonly getCannedMessageById: {
      readonly name: "GetCannedMessageById",
      readonly I: typeof GetCannedMessageByIdReq,
      readonly O: typeof CannedMessageWithGroup,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Delete canned message details for the canned_message_id
     * The method will delete an canned message/entity
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteCannedMessageById
     */
    readonly deleteCannedMessageById: {
      readonly name: "DeleteCannedMessageById",
      readonly I: typeof DeleteCannedMessageByIdReq,
      readonly O: typeof DeleteCannedMessageByIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create/Record canned message group defined by CreateCannedMessageGroup Req message for a specified
     * name and description.
     * The method will return a CannedMessageGroup message/entity that will
     * contain the newly created canned message group details for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateCannedMessageGroup
     */
    readonly createCannedMessageGroup: {
      readonly name: "CreateCannedMessageGroup",
      readonly I: typeof CreateCannedMessageGroupReq,
      readonly O: typeof CannedMessageGroup,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list canned message groups for the current org
     * The method will return a list of canned message groups/entities
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCannedMessageGroups
     */
    readonly listCannedMessageGroups: {
      readonly name: "ListCannedMessageGroups",
      readonly I: typeof ListCannedMessageGroupsReq,
      readonly O: typeof ListCannedMessageGroupsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update canned message group defined by UpdateCannedMessageGroupReq message for a specified
     * name and description.
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCannedMessageGroup
     */
    readonly updateCannedMessageGroup: {
      readonly name: "UpdateCannedMessageGroup",
      readonly I: typeof UpdateCannedMessageGroupReq,
      readonly O: typeof UpdateCannedMessageGroupRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Delete canned message group and all the related messages for the canned_message_group_id
     * The method will delete an canned message group/entity
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteCannedMessageGroup
     */
    readonly deleteCannedMessageGroup: {
      readonly name: "DeleteCannedMessageGroup",
      readonly I: typeof DeleteCannedMessageGroupReq,
      readonly O: typeof DeleteCannedMessageGroupRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * list canned messages for the group
     * The method will return a list of canned messages/entities
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCannedMessagesByGroupId
     */
    readonly listCannedMessagesByGroupId: {
      readonly name: "ListCannedMessagesByGroupId",
      readonly I: typeof ListCannedMessagesByGroupIdReq,
      readonly O: typeof ListCannedMessagesByGroupIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get canned message group details for the canned_message_group_id
     * The method will return an canned message group/entity
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetCannedMessageGroupById
     */
    readonly getCannedMessageGroupById: {
      readonly name: "GetCannedMessageGroupById",
      readonly I: typeof GetCannedMessageGroupByIdReq,
      readonly O: typeof CannedMessageGroup,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns a list of skills filtered by types given on
     * the request message field type_filter. Leaving the type_filter
     * field empty will return all types of skills.
     *
     * @generated from rpc api.v0alpha.OmniApi.ListUserSkills
     */
    readonly listUserSkills: {
      readonly name: "ListUserSkills",
      readonly I: typeof ListUserSkillsReq,
      readonly O: typeof ListUserSkillsRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

