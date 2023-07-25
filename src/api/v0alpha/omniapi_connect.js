// @generated by protoc-gen-connect-es v0.12.0
// @generated from file api/v0alpha/omniapi.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ArchiveCampaignReq, ArchiveCampaignRes, CannedMessage, CannedMessageGroup, CannedMessageWithGroup, CloseProjectByIdReq, CloseProjectByIdRes, CreateCampaignReq, CreateCannedMessageGroupReq, CreateCannedMessageReq, CreateConnectedInboxRes, CreateCustomUnsubscribeLinkRes, CreateDispositionReq, CreateDispositionRes, CreateProjectReq, CreateProjectRes, CreateSignatureReq, CreateSignatureRes, CreateTasksReq, CreateTasksRes, CreateVerifiedEmailRes, DeleteCannedMessageByIdReq, DeleteCannedMessageByIdRes, DeleteCannedMessageGroupReq, DeleteCannedMessageGroupRes, DeleteConnectedInboxBySidReq, DeleteCustomUnsubscribeLinkReq, DeleteDispositionReq, DeleteSignatureReq, DeleteSignatureRes, DeleteVerifiedEmailReq, EditProjectByIdReq, EditProjectByIdRes, GetAvailableHeadersReq, GetAvailableHeadersRes, GetCampaignByIdReq, GetCannedMessageByIdReq, GetCannedMessageGroupByIdReq, GetConnectedInboxBySidReq, GetOmniAttachmentReq, GetPendingGoogleXOAuth2DataReq, GetPendingGoogleXOAuth2DataRes, GetProjectByIdReq, GetTaskReq, GetVerifiedEmailBySidReq, ListCampaignsReq, ListCampaignsRes, ListCannedMessageGroupsReq, ListCannedMessageGroupsRes, ListCannedMessagesByGroupIdReq, ListCannedMessagesByGroupIdRes, ListCannedMessagesReq, ListCannedMessagesRes, ListConnectedInboxesReq, ListConnectedInboxesRes, ListContactListsReq, ListContactListsRes, ListConversationsReq, ListConversationsRes, ListCustomUnsubscribeLinksRes, ListDispositionsReq, ListDispositionsRes, ListMessagesReq, ListProjectsReq, ListProjectsRes, ListSignaturesReq, ListSignaturesRes, ListTasksReq, ListTasksRes, ListUserSkillsReq, ListUserSkillsRes, ListVerifiedEmailsReq, ListVerifiedEmailsRes, ManagerListMessagesReq, PauseCampaignReq, PauseCampaignRes, Project, ResendVerifiedEmailReq, ResendVerifiedEmailRes, ResumeCampaignReq, ResumeCampaignRes, SendEmailNotificationReq, SendEmailNotificationRes, SendFeedbackEmailReq, SendFeedbackEmailRes, SendgridAccountByClientReq, SendgridAccountByClientRes, SendOmniMessageReq, SuggestResponseReq, SuggestResponseRes, TestConnectedInboxRes, UpdateCampaignPacingSpeedReq, UpdateCampaignPacingSpeedRes, UpdateCampaignReq, UpdateCampaignRes, UpdateCannedMessageGroupReq, UpdateCannedMessageGroupRes, UpdateCannedMessageReq, UpdateConnectedInboxReq, UpdateCustomUnsubscribeLinkReq, UpdateCustomUnsubscribeLinkRes, UpdateDispositionReq, UpdateSignatureReq, UpdateSignatureRes, UpdateVerifiedEmailReq } from "./omniapi_pb.js";
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
export const OmniApi = {
  typeName: "api.v0alpha.OmniApi",
  methods: {
    /**
     * archive a campaign
     *
     * @generated from rpc api.v0alpha.OmniApi.ArchiveCampaign
     */
    archiveCampaign: {
      name: "ArchiveCampaign",
      I: ArchiveCampaignReq,
      O: ArchiveCampaignRes,
      kind: MethodKind.Unary,
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
    createCampaign: {
      name: "CreateCampaign",
      I: CreateCampaignReq,
      O: OmniCampaign,
      kind: MethodKind.Unary,
    },
    /**
     * Get campaign defined by GetChatCampaignById.
     *
     * @generated from rpc api.v0alpha.OmniApi.GetCampaignById
     */
    getCampaignById: {
      name: "GetCampaignById",
      I: GetCampaignByIdReq,
      O: OmniCampaign,
      kind: MethodKind.Unary,
    },
    /**
     * pause a campaign
     *
     * @generated from rpc api.v0alpha.OmniApi.PauseCampaign
     */
    pauseCampaign: {
      name: "PauseCampaign",
      I: PauseCampaignReq,
      O: PauseCampaignRes,
      kind: MethodKind.Unary,
    },
    /**
     * resume a campaign
     *
     * @generated from rpc api.v0alpha.OmniApi.ResumeCampaign
     */
    resumeCampaign: {
      name: "ResumeCampaign",
      I: ResumeCampaignReq,
      O: ResumeCampaignRes,
      kind: MethodKind.Unary,
    },
    /**
     * Updates a campaign
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCampaign
     */
    updateCampaign: {
      name: "UpdateCampaign",
      I: UpdateCampaignReq,
      O: UpdateCampaignRes,
      kind: MethodKind.Unary,
    },
    /**
     * update campaign pacing - speed up/slow down a campaign
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCampaignPacingSpeed
     */
    updateCampaignPacingSpeed: {
      name: "UpdateCampaignPacingSpeed",
      I: UpdateCampaignPacingSpeedReq,
      O: UpdateCampaignPacingSpeedRes,
      kind: MethodKind.Unary,
    },
    /**
     * Send a chat message
     *
     * @generated from rpc api.v0alpha.OmniApi.SendOmniMessage
     */
    sendOmniMessage: {
      name: "SendOmniMessage",
      I: SendOmniMessageReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Send a chat message
     *
     * @generated from rpc api.v0alpha.OmniApi.ManagerSendOmniMessage
     */
    managerSendOmniMessage: {
      name: "ManagerSendOmniMessage",
      I: SendOmniMessageReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * Create a disposition
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateDisposition
     */
    createDisposition: {
      name: "CreateDisposition",
      I: CreateDispositionReq,
      O: CreateDispositionRes,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteDisposition - delete an existing disposition
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteDisposition
     */
    deleteDisposition: {
      name: "DeleteDisposition",
      I: DeleteDispositionReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * ListDispositions - lists all dispositions
     *
     * @generated from rpc api.v0alpha.OmniApi.ListDispositions
     */
    listDispositions: {
      name: "ListDispositions",
      I: ListDispositionsReq,
      O: ListDispositionsRes,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateDisposition - update an existing disposition
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateDisposition
     */
    updateDisposition: {
      name: "UpdateDisposition",
      I: UpdateDispositionReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * ListCustomUnsubscribeLinks - retrieves all the custom unsubscribe links
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCustomUnsubscribeLinks
     */
    listCustomUnsubscribeLinks: {
      name: "ListCustomUnsubscribeLinks",
      I: Empty,
      O: ListCustomUnsubscribeLinksRes,
      kind: MethodKind.Unary,
    },
    /**
     * CreateUnsubscribeLink - creates a new unsubscribe link
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateCustomUnsubscribeLink
     */
    createCustomUnsubscribeLink: {
      name: "CreateCustomUnsubscribeLink",
      I: OmniCustomUnsubscribeLink,
      O: CreateCustomUnsubscribeLinkRes,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateCustomUnsubscribeLink - update custom unsubscribe link details
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCustomUnsubscribeLink
     */
    updateCustomUnsubscribeLink: {
      name: "UpdateCustomUnsubscribeLink",
      I: UpdateCustomUnsubscribeLinkReq,
      O: UpdateCustomUnsubscribeLinkRes,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteCustomUnsubscribeLink - deletes custom unsubscribe link details
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteCustomUnsubscribeLink
     */
    deleteCustomUnsubscribeLink: {
      name: "DeleteCustomUnsubscribeLink",
      I: DeleteCustomUnsubscribeLinkReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * List campaigns defined by ListCampaignsReq.
     * The method will return a ListCampaignsReq entity that will contain
     * all the campaigns within the specified filter.
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCampaigns
     */
    listCampaigns: {
      name: "ListCampaigns",
      I: ListCampaignsReq,
      O: ListCampaignsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Get a stream of new conversation message for a given conversation. Used
     * only for managers. It is not for customers.
     *
     * @generated from rpc api.v0alpha.OmniApi.ManagerListMessages
     */
    managerListMessages: {
      name: "ManagerListMessages",
      I: ManagerListMessagesReq,
      O: OmniMessage,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * Get a stream of conversation message for a given conversation. Used
     * only for agents/users. It is not for customers.
     *
     * @generated from rpc api.v0alpha.OmniApi.ListMessages
     */
    listMessages: {
      name: "ListMessages",
      I: ListMessagesReq,
      O: OmniMessage,
      kind: MethodKind.ServerStreaming,
    },
    /**
     * lists all conversation and assigned users for a given date range.
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ManagerListConversations
     */
    managerListConversations: {
      name: "ManagerListConversations",
      I: ListConversationsReq,
      O: ListConversationsRes,
      kind: MethodKind.Unary,
    },
    /**
     * ListContactLists - retrieves all the contact lists
     *
     * @generated from rpc api.v0alpha.OmniApi.ListContactLists
     */
    listContactLists: {
      name: "ListContactLists",
      I: ListContactListsReq,
      O: ListContactListsRes,
      kind: MethodKind.Unary,
    },
    /**
     * GetAvailableHeaders - retrieves all the available headers that could be present on a contact list
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetAvailableHeaders
     */
    getAvailableHeaders: {
      name: "GetAvailableHeaders",
      I: GetAvailableHeadersReq,
      O: GetAvailableHeadersRes,
      kind: MethodKind.Unary,
    },
    /**
     * GetTask - retrieves a task using the provided criteria
     * Required permissions:
     *    OMNI_AGENT
     *
     * @generated from rpc api.v0alpha.OmniApi.GetTask
     */
    getTask: {
      name: "GetTask",
      I: GetTaskReq,
      O: OmniTask,
      kind: MethodKind.Unary,
    },
    /**
     * ListTasks - retrieves tasks using the provided criteria
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListTasks
     */
    listTasks: {
      name: "ListTasks",
      I: ListTasksReq,
      O: ListTasksRes,
      kind: MethodKind.Unary,
    },
    /**
     * CreateConnectedInbox - create a new connected inbox
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateConnectedInbox
     */
    createConnectedInbox: {
      name: "CreateConnectedInbox",
      I: ConnectedInbox,
      O: CreateConnectedInboxRes,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteConnectedInboxBySid - deletes a connected inbox given it's identifier
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteConnectedInboxBySid
     */
    deleteConnectedInboxBySid: {
      name: "DeleteConnectedInboxBySid",
      I: DeleteConnectedInboxBySidReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * GetConnectedInboxBySid - retrieves a connected inbox given it's identifier
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetConnectedInboxBySid
     */
    getConnectedInboxBySid: {
      name: "GetConnectedInboxBySid",
      I: GetConnectedInboxBySidReq,
      O: ConnectedInbox,
      kind: MethodKind.Unary,
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
    performSendgridAccountChecks: {
      name: "PerformSendgridAccountChecks",
      I: SendgridAccountByClientReq,
      O: SendgridAccountByClientRes,
      kind: MethodKind.Unary,
    },
    /**
     * ListConnectedInboxes - retrieves all the connected inboxes for the organization
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListConnectedInboxes
     */
    listConnectedInboxes: {
      name: "ListConnectedInboxes",
      I: ListConnectedInboxesReq,
      O: ListConnectedInboxesRes,
      kind: MethodKind.Unary,
    },
    /**
     * TestConnectedInbox - check if connected inbox login works for a specified email_address,
     * username, password, server_name, and server_port (other fields from ConnectedInbox are ignored).
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.TestConnectedInbox
     */
    testConnectedInbox: {
      name: "TestConnectedInbox",
      I: ConnectedInbox,
      O: TestConnectedInboxRes,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateConnectedInbox - update a connected inbox
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateConnectedInbox
     */
    updateConnectedInbox: {
      name: "UpdateConnectedInbox",
      I: UpdateConnectedInboxReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * CreateVerifiedEmail.  this will create a new verified email
     * Required permissions
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateVerifiedEmail
     */
    createVerifiedEmail: {
      name: "CreateVerifiedEmail",
      I: VerifiedEmail,
      O: CreateVerifiedEmailRes,
      kind: MethodKind.Unary,
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
    deleteVerifiedEmail: {
      name: "DeleteVerifiedEmail",
      I: DeleteVerifiedEmailReq,
      O: Empty,
      kind: MethodKind.Unary,
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
    getVerifiedEmailBySid: {
      name: "GetVerifiedEmailBySid",
      I: GetVerifiedEmailBySidReq,
      O: VerifiedEmail,
      kind: MethodKind.Unary,
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
    listVerifiedEmails: {
      name: "ListVerifiedEmails",
      I: ListVerifiedEmailsReq,
      O: ListVerifiedEmailsRes,
      kind: MethodKind.Unary,
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
    resendVerifiedEmail: {
      name: "ResendVerifiedEmail",
      I: ResendVerifiedEmailReq,
      O: ResendVerifiedEmailRes,
      kind: MethodKind.Unary,
    },
    /**
     * Updates verified email description
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateVerifiedEmail
     */
    updateVerifiedEmail: {
      name: "UpdateVerifiedEmail",
      I: UpdateVerifiedEmailReq,
      O: Empty,
      kind: MethodKind.Unary,
    },
    /**
     * GetPendingGoogleXOAuth2Data - retrieves the pending oauth data required to finish creating a connected inbox
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetPendingGoogleXOAuth2Data
     */
    getPendingGoogleXOAuth2Data: {
      name: "GetPendingGoogleXOAuth2Data",
      I: GetPendingGoogleXOAuth2DataReq,
      O: GetPendingGoogleXOAuth2DataRes,
      kind: MethodKind.Unary,
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
    sendEmailNotification: {
      name: "SendEmailNotification",
      I: SendEmailNotificationReq,
      O: SendEmailNotificationRes,
      kind: MethodKind.Unary,
    },
    /**
     * Send an email to our feedback system. The users email will be populated as the from address to open an email thread with our support.
     *
     * @generated from rpc api.v0alpha.OmniApi.SendFeedbackEmail
     */
    sendFeedbackEmail: {
      name: "SendFeedbackEmail",
      I: SendFeedbackEmailReq,
      O: SendFeedbackEmailRes,
      kind: MethodKind.Unary,
    },
    /**
     * GetOmniAttachment - retrieves the omni attachment details based on the request
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetOmniAttachment
     */
    getOmniAttachment: {
      name: "GetOmniAttachment",
      I: GetOmniAttachmentReq,
      O: OmniAttachment,
      kind: MethodKind.Unary,
    },
    /**
     * Create a task with a given contat list .
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateTasks
     */
    createTasks: {
      name: "CreateTasks",
      I: CreateTasksReq,
      O: CreateTasksRes,
      kind: MethodKind.Unary,
    },
    /**
     * CreateSignature - creates a new message signature
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.CreateSignature
     */
    createSignature: {
      name: "CreateSignature",
      I: CreateSignatureReq,
      O: CreateSignatureRes,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteSignature - deletes a message signature
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteSignature
     */
    deleteSignature: {
      name: "DeleteSignature",
      I: DeleteSignatureReq,
      O: DeleteSignatureRes,
      kind: MethodKind.Unary,
    },
    /**
     * ListSignatures - retrieves the signatures created by the organization
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListSignatures
     */
    listSignatures: {
      name: "ListSignatures",
      I: ListSignaturesReq,
      O: ListSignaturesRes,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateSignature - updates a message signature
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateSignature
     */
    updateSignature: {
      name: "UpdateSignature",
      I: UpdateSignatureReq,
      O: UpdateSignatureRes,
      kind: MethodKind.Unary,
    },
    /**
     * SuggestResponse
     *
     * @generated from rpc api.v0alpha.OmniApi.SuggestResponse
     */
    suggestResponse: {
      name: "SuggestResponse",
      I: SuggestResponseReq,
      O: SuggestResponseRes,
      kind: MethodKind.Unary,
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
    createProject: {
      name: "CreateProject",
      I: CreateProjectReq,
      O: CreateProjectRes,
      kind: MethodKind.Unary,
    },
    /**
     * list projects for the current org
     * The method will return a list of Project messages/entities
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListProjects
     */
    listProjects: {
      name: "ListProjects",
      I: ListProjectsReq,
      O: ListProjectsRes,
      kind: MethodKind.Unary,
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
    editProjectById: {
      name: "EditProjectById",
      I: EditProjectByIdReq,
      O: EditProjectByIdRes,
      kind: MethodKind.Unary,
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
    closeProjectById: {
      name: "CloseProjectById",
      I: CloseProjectByIdReq,
      O: CloseProjectByIdRes,
      kind: MethodKind.Unary,
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
    getProjectById: {
      name: "GetProjectById",
      I: GetProjectByIdReq,
      O: Project,
      kind: MethodKind.Unary,
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
    createCannedMessage: {
      name: "CreateCannedMessage",
      I: CreateCannedMessageReq,
      O: CannedMessage,
      kind: MethodKind.Unary,
    },
    /**
     * list canned messages for the current org
     * The method will return a list of canned messages/entities
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCannedMessages
     */
    listCannedMessages: {
      name: "ListCannedMessages",
      I: ListCannedMessagesReq,
      O: ListCannedMessagesRes,
      kind: MethodKind.Unary,
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
    updateCannedMessage: {
      name: "UpdateCannedMessage",
      I: UpdateCannedMessageReq,
      O: CannedMessage,
      kind: MethodKind.Unary,
    },
    /**
     * Get canned message details for the canned_message_id
     * The method will return an canned message/entity
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetCannedMessageById
     */
    getCannedMessageById: {
      name: "GetCannedMessageById",
      I: GetCannedMessageByIdReq,
      O: CannedMessageWithGroup,
      kind: MethodKind.Unary,
    },
    /**
     * Delete canned message details for the canned_message_id
     * The method will delete an canned message/entity
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteCannedMessageById
     */
    deleteCannedMessageById: {
      name: "DeleteCannedMessageById",
      I: DeleteCannedMessageByIdReq,
      O: DeleteCannedMessageByIdRes,
      kind: MethodKind.Unary,
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
    createCannedMessageGroup: {
      name: "CreateCannedMessageGroup",
      I: CreateCannedMessageGroupReq,
      O: CannedMessageGroup,
      kind: MethodKind.Unary,
    },
    /**
     * list canned message groups for the current org
     * The method will return a list of canned message groups/entities
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCannedMessageGroups
     */
    listCannedMessageGroups: {
      name: "ListCannedMessageGroups",
      I: ListCannedMessageGroupsReq,
      O: ListCannedMessageGroupsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update canned message group defined by UpdateCannedMessageGroupReq message for a specified
     * name and description.
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.UpdateCannedMessageGroup
     */
    updateCannedMessageGroup: {
      name: "UpdateCannedMessageGroup",
      I: UpdateCannedMessageGroupReq,
      O: UpdateCannedMessageGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * Delete canned message group and all the related messages for the canned_message_group_id
     * The method will delete an canned message group/entity
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.DeleteCannedMessageGroup
     */
    deleteCannedMessageGroup: {
      name: "DeleteCannedMessageGroup",
      I: DeleteCannedMessageGroupReq,
      O: DeleteCannedMessageGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * list canned messages for the group
     * The method will return a list of canned messages/entities
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.ListCannedMessagesByGroupId
     */
    listCannedMessagesByGroupId: {
      name: "ListCannedMessagesByGroupId",
      I: ListCannedMessagesByGroupIdReq,
      O: ListCannedMessagesByGroupIdRes,
      kind: MethodKind.Unary,
    },
    /**
     * Get canned message group details for the canned_message_group_id
     * The method will return an canned message group/entity
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.OmniApi.GetCannedMessageGroupById
     */
    getCannedMessageGroupById: {
      name: "GetCannedMessageGroupById",
      I: GetCannedMessageGroupByIdReq,
      O: CannedMessageGroup,
      kind: MethodKind.Unary,
    },
    /**
     * Returns a list of skills filtered by types given on
     * the request message field type_filter. Leaving the type_filter
     * field empty will return all types of skills.
     *
     * @generated from rpc api.v0alpha.OmniApi.ListUserSkills
     */
    listUserSkills: {
      name: "ListUserSkills",
      I: ListUserSkillsReq,
      O: ListUserSkillsRes,
      kind: MethodKind.Unary,
    },
  }
};

