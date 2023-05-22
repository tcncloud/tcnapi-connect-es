// @generated by protoc-gen-connect-es v0.9.0
// @generated from file api/v0alpha/emailapi.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AssignEmailConversationReq, AssignEmailConversationRes, CloseEmailConversationReq, CloseEmailConversationRes, CopyEmailTemplateWithAttachmentsReq, CopyEmailTemplateWithAttachmentsRes, CreateEmailMessageAgentReplyAttachmentReq, CreateEmailMessageAgentReplyAttachmentRes, CreateEmailMessageAgentReplyReq, CreateEmailMessageAttachmentReq, CreateEmailMessageAttachmentRes, CreateEmailTemplateAttachmentReq, CreateEmailTemplateAttachmentRes, CreateEmailTemplateReq, CreateEmailTemplateRes, CreateInboundEmailTemplateReq, CreateInboundEmailTemplateRes, DashboardEmailConversationSearchReq, DashboardEmailConversationSearchRes, DeleteEmailTemplateAttachmentByIdReq, DeleteEmailTemplateAttachmentByIdRes, DeleteEmailTemplateReq, DeleteEmailTemplateRes, DeleteInboundEmailTemplateByIdReq, DeleteInboundEmailTemplateByIdRes, DownloadInboundEmailAttachmentReq, DownloadInboundEmailAttachmentRes, EmailGroupDetailsWithAttachments, EmailGroupSearchReq, EmailGroupSearchRes, EmailGroupSendsPerMinuteReq, EmailGroupSendsPerMinuteRes, EmailGroupStatusReq, EmailGroupStatusRes, EmailMessageReplyWithAttachments, EmailTemplateWithAttachments, GetAllEmailTemplatesReq, GetAllEmailTemplatesRes, GetEmailGroupByGroupIdReq, GetEmailGroupByGroupSidReq, GetEmailGroupsByGroupSidsReq, GetEmailGroupsByGroupSidsRes, GetEmailMessageReq, GetEmailMessageRes, GetEmailTasksByGroupSidsReq, GetEmailTasksByGroupSidsRes, GetEmailTemplateByTemplateSidReq, GetInboundEmailTemplateByIdReq, InboundEmailGroup, InboundEmailGroupByIdReq, InboundEmailGroupSearchReq, InboundEmailGroupSearchRes, InboundEmailTemplate, ListActiveInboundEmailGroupsReq, ListActiveInboundEmailGroupsRes, ListCampaignsByConnectedInboxIdReq, ListCampaignsByConnectedInboxIdRes, ListEmailMessageAttachmentsReq, ListEmailMessageAttachmentsRes, ListInboundEmailGroupsByGroupIdsReq, ListInboundEmailGroupsByGroupIdsRes, ListInboundEmailTasksByGroupIdsReq, ListInboundEmailTasksByGroupIdsRes, ListInboundEmailTemplatesReq, ListInboundEmailTemplatesRes, ListNewEmailMessageRepliesReq, ListNewEmailMessageRepliesRes, PureInboundEmailGroupSearchReq, PureInboundEmailGroupSearchRes, ReassignEmailConversationReq, ReassignEmailConversationRes, ScheduleOutboundEmailGroupReq, ScheduleOutboundEmailGroupRes, SchedulePureInboundEmailReq, SchedulePureInboundEmailRes, SchedulePureOmniLinkInboundEmailReq, SchedulePureOmniLinkInboundEmailRes, ScheduleReq, ScheduleRes, SendReplyReq, StopAllInboundEmailGroupsReq, StopInboundEmailGroupReq, StopInboundEmailGroupRes, SuspendEmailConversationReq, SuspendEmailConversationRes, UnassignCurrentUserFromEmailConversationReq, UnassignUserFromEmailConversationRes, UpdateEmailTemplateAttachmentReq, UpdateEmailTemplateAttachmentRes, UpdateEmailTemplateReq, UpdateEmailTemplateRes, UpdateInboundEmailGroupReq, UpdateInboundEmailGroupRes, UpdateInboundEmailGroupStatusReq, UpdateInboundEmailGroupStatusRes, UpdateInboundEmailTemplateReq, UpdateInboundEmailTemplateRes, UpdateOutboundEmailGroupReq, UpdateOutboundEmailGroupRes } from "./emailapi_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.EmailApi
 */
export declare const EmailApi: {
  readonly typeName: "api.v0alpha.EmailApi",
  readonly methods: {
    /**
     * Create/Record email template details defined by CreateEmailTemplateReq message for a specified
     * email_subject, email_body.
     * The method will return a CreateEmailTemplateRes message/entity that will
     * contain the newly created email_template_sid value for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.CreateEmailTemplate
     */
    readonly createEmailTemplate: {
      readonly name: "CreateEmailTemplate",
      readonly I: typeof CreateEmailTemplateReq,
      readonly O: typeof CreateEmailTemplateRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update email template details defined by UpdateEmailTemplateReq message for a specified
     * email_template_sid, email_subject, email_body.
     * The method will return a UpdateEmailTemplateRes message/entity that will
     * contain the true/false after updating template details for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.UpdateEmailTemplate
     */
    readonly updateEmailTemplate: {
      readonly name: "UpdateEmailTemplate",
      readonly I: typeof UpdateEmailTemplateReq,
      readonly O: typeof UpdateEmailTemplateRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create/Record email template attachment details defined by CreateEmailTemplateAttachmentReq message for a specified
     * email_template_sid, file_name, file_size, content_type, hash.
     * The method will return a CreateEmailTemplateAttachmentRes message/entity that will
     * contain the newly created email_template_attachment_sid, fts storage url and gs_path  for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.CreateEmailTemplateAttachment
     */
    readonly createEmailTemplateAttachment: {
      readonly name: "CreateEmailTemplateAttachment",
      readonly I: typeof CreateEmailTemplateAttachmentReq,
      readonly O: typeof CreateEmailTemplateAttachmentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Copy/Record email template with attachment details defined by CopyEmailTemplateWithAttachmentsReq message for a specified
     * email_template_sid and email_body.
     * The method will return a CopyEmailTemplateWithAttachmentsRes message/entity that will
     * contain the newly copied email_template_sid value for this client along with attachments
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.CopyEmailTemplateWithAttachments
     */
    readonly copyEmailTemplateWithAttachments: {
      readonly name: "CopyEmailTemplateWithAttachments",
      readonly I: typeof CopyEmailTemplateWithAttachmentsReq,
      readonly O: typeof CopyEmailTemplateWithAttachmentsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update email template attachment details defined by UpdateEmailTemplateAttachmentReq message for a specified
     * email_template_sid, email_template_attachment_sid, file_name, file_size, content_type, hash.
     * The method will return a UpdateEmailTemplateAttachmentRes message/entity that will
     * contain the true/false after updating template attachment details for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.UpdateEmailTemplateAttachment
     */
    readonly updateEmailTemplateAttachment: {
      readonly name: "UpdateEmailTemplateAttachment",
      readonly I: typeof UpdateEmailTemplateAttachmentReq,
      readonly O: typeof UpdateEmailTemplateAttachmentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets email template along with attachment details defined by GetEmailTemplateByTemplateSidReq message for a specified
     * email_template_sid.
     * The method will return a EmailTemplateWithAttachments message/entity that will
     * contain the email_template_sid, email_subject, email_body, EmailTemplateAttachmentDetails for this client_sid and email_template_sid
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetEmailTemplateByTemplateSid
     */
    readonly getEmailTemplateByTemplateSid: {
      readonly name: "GetEmailTemplateByTemplateSid",
      readonly I: typeof GetEmailTemplateByTemplateSidReq,
      readonly O: typeof EmailTemplateWithAttachments,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of email template along with attachment details defined by GetAllEmailTemplatesReq message.
     * The method will return a GetAllEmailTemplatesRes message/entity that will
     * contain the stream of email_template_sid, email_subject, email_body, EmailTemplateAttachmentDetails for this client_sid
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetAllEmailTemplates
     */
    readonly getAllEmailTemplates: {
      readonly name: "GetAllEmailTemplates",
      readonly I: typeof GetAllEmailTemplatesReq,
      readonly O: typeof GetAllEmailTemplatesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Delete email template details defined by DeleteEmailTemplateReq message for a specified
     * email_template_sid.
     * The method will return a DeleteEmailTemplateRes message/entity that will
     * contain the true/false after deleting template details for this client_sid and email_template_sid
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.DeleteEmailTemplate
     */
    readonly deleteEmailTemplate: {
      readonly name: "DeleteEmailTemplate",
      readonly I: typeof DeleteEmailTemplateReq,
      readonly O: typeof DeleteEmailTemplateRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Delete email template attachments defined by DeleteEmailTemplateAttachmentByIdReq message for a specified
     * email_template_attachment_sid.
     * The method will return a DeleteEmailTemplateAttachmentByIdRes message/entity that will
     * contain the true/false after deleting template attachments for this client_sid and email_template_attachment_sid
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.DeleteEmailTemplateAttachmentById
     */
    readonly deleteEmailTemplateAttachmentById: {
      readonly name: "DeleteEmailTemplateAttachmentById",
      readonly I: typeof DeleteEmailTemplateAttachmentByIdReq,
      readonly O: typeof DeleteEmailTemplateAttachmentByIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Download local inbound file attachment file contents using FTS bucket
     * defined by DownloadInboundEmailAttachmentReq message for a specified
     * email_message_reply_id and email_message_reply_attachment_id.
     * The method will return a DownloadInboundEmailAttachmentRes message/entity that will
     * contain the url where attachment contents are stored
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.DownloadInboundEmailAttachment
     */
    readonly downloadInboundEmailAttachment: {
      readonly name: "DownloadInboundEmailAttachment",
      readonly I: typeof DownloadInboundEmailAttachmentReq,
      readonly O: typeof DownloadInboundEmailAttachmentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of pure email groups based on search criteria defined by EmailGroupSearchReq message for a specified
     * by search_from and search_to or by status or by name and any of these combinations
     * The method will return a EmailGroupSearchRes message/entity that will
     * contain the stream of EmailGroupSearchDetailsRes results
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.PureEmailGroupSearch
     */
    readonly pureEmailGroupSearch: {
      readonly name: "PureEmailGroupSearch",
      readonly I: typeof EmailGroupSearchReq,
      readonly O: typeof EmailGroupSearchRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Retreives a list of email replies for a conversation that come after the given
     * timestamp. Can set a user_id to get conversations for any user.
     * Required permissions:
     *    ??????
     *
     * @generated from rpc api.v0alpha.EmailApi.ManagerListNewEmailMessageReplies
     */
    readonly managerListNewEmailMessageReplies: {
      readonly name: "ManagerListNewEmailMessageReplies",
      readonly I: typeof ListNewEmailMessageRepliesReq,
      readonly O: typeof ListNewEmailMessageRepliesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Retreives a list of email replies for a conversation that come after the given
     * timestamp
     * Required permissions:
     *    ??????
     *
     * @generated from rpc api.v0alpha.EmailApi.ListNewEmailMessageReplies
     */
    readonly listNewEmailMessageReplies: {
      readonly name: "ListNewEmailMessageReplies",
      readonly I: typeof ListNewEmailMessageRepliesReq,
      readonly O: typeof ListNewEmailMessageRepliesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of email tasks defined by GetEmailTasksByGroupSidsReq message for a specified
     * array of email_group_sids
     * The method will return a GetEmailTasksByGroupSidsRes message/entity that will
     * contain the stream of EmailTaskMstrDetails results
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetEmailTasksByGroupSids
     */
    readonly getEmailTasksByGroupSids: {
      readonly name: "GetEmailTasksByGroupSids",
      readonly I: typeof GetEmailTasksByGroupSidsReq,
      readonly O: typeof GetEmailTasksByGroupSidsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update email group status value defined by EmailGroupStatusReq message for a specified
     * email_group_sid and status_id.
     * The method will return a EmailGroupStatusRes message/entity that will
     * contain the true/false after updating status for this clients email_group_sid and status_id
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.UpdateEmailGroupStatus
     */
    readonly updateEmailGroupStatus: {
      readonly name: "UpdateEmailGroupStatus",
      readonly I: typeof EmailGroupStatusReq,
      readonly O: typeof EmailGroupStatusRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets email message details defined by GetEmailMessageReq message for a specified
     * email_message_sid.
     * The method will return a GetEmailMessageRes message/entity that will
     * contains email_subject and email_body for the email_message_sid
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetEmailMessageDetails
     */
    readonly getEmailMessageDetails: {
      readonly name: "GetEmailMessageDetails",
      readonly I: typeof GetEmailMessageReq,
      readonly O: typeof GetEmailMessageRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create/Record inbound email template defined by CreateInboundEmailTemplateReq message for a specified
     *  connected_inbox_id, name.
     * The method will return a CreateInboundEmailTemplateRes message/entity that will
     * contain the newly created inbound_email_template_id value for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.CreateInboundEmailTemplate
     */
    readonly createInboundEmailTemplate: {
      readonly name: "CreateInboundEmailTemplate",
      readonly I: typeof CreateInboundEmailTemplateReq,
      readonly O: typeof CreateInboundEmailTemplateRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update inbound email template details defined by UpdateInboundEmailTemplateReq message for a specified
     *  inbound_email_template_id, connected_inbox_id, name.
     * The method will return a UpdateInboundEmailTemplateRes message/entity that will
     * contain the true/false after updating inbound email template details for inbound_email_template_id
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.UpdateInboundEmailTemplate
     */
    readonly updateInboundEmailTemplate: {
      readonly name: "UpdateInboundEmailTemplate",
      readonly I: typeof UpdateInboundEmailTemplateReq,
      readonly O: typeof UpdateInboundEmailTemplateRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Delete inbound email template details defined by DeleteInboundEmailTemplateByIdReq message for a specified
     *  inbound_email_template_id.
     * The method will return a DeleteInboundEmailTemplateByIdRes message/entity that will
     * contain the true/false after deleting inbound email template details for inbound_email_template_id
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.DeleteInboundEmailTemplateById
     */
    readonly deleteInboundEmailTemplateById: {
      readonly name: "DeleteInboundEmailTemplateById",
      readonly I: typeof DeleteInboundEmailTemplateByIdReq,
      readonly O: typeof DeleteInboundEmailTemplateByIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of inbound email template details defined by ListInboundEmailTemplatesReq message
     * The method will return a ListInboundEmailTemplatesRes message/entity that will
     * contain the stream of inbound_email_template_id, connected_inbox_id, name.
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.ListInboundEmailTemplates
     */
    readonly listInboundEmailTemplates: {
      readonly name: "ListInboundEmailTemplates",
      readonly I: typeof ListInboundEmailTemplatesReq,
      readonly O: typeof ListInboundEmailTemplatesRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets inbound email template details defined by GetInboundEmailTemplateByIdReq message for a specified
     * inbound_email_template_id.
     * The method will return a InboundEmailTemplate message/entity that will
     * contain the inbound email template details for inbound_email_template_id
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetInboundEmailTemplateById
     */
    readonly getInboundEmailTemplateById: {
      readonly name: "GetInboundEmailTemplateById",
      readonly I: typeof GetInboundEmailTemplateByIdReq,
      readonly O: typeof InboundEmailTemplate,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update inbound email group status details defined by UpdateInboundEmailGroupStatusReq
     * status. The method will return a UpdateInboundEmailGroupStatusRes message/entity
     * that will contain the true/false after updating inbound email group details
     * for this org_id, region_id and inbound_email_group_id Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.UpdateInboundEmailGroupStatus
     */
    readonly updateInboundEmailGroupStatus: {
      readonly name: "UpdateInboundEmailGroupStatus",
      readonly I: typeof UpdateInboundEmailGroupStatusReq,
      readonly O: typeof UpdateInboundEmailGroupStatusRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Stop inbound email group defined by StopInboundEmailGroupReq message for a specified
     *  inbound_email_group_id.
     * The method will return a StopInboundEmailGroupRes message/entity that will
     * contain the true/false after updating inbound email group details for inbound_email_group_id
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.StopInboundEmailGroup
     */
    readonly stopInboundEmailGroup: {
      readonly name: "StopInboundEmailGroup",
      readonly I: typeof StopInboundEmailGroupReq,
      readonly O: typeof StopInboundEmailGroupRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Stop all InboundEmail groups defined by StopAllInboundEmailGroupsReq message for the specified
     * array of inbound_email_group_ids
     * The method will mark the InboundEmail groups as completed.
     * Required permissions: VIEW_EMAIL
     *
     * @generated from rpc api.v0alpha.EmailApi.StopAllInboundEmailGroups
     */
    readonly stopAllInboundEmailGroups: {
      readonly name: "StopAllInboundEmailGroups",
      readonly I: typeof StopAllInboundEmailGroupsReq,
      readonly O: typeof StopInboundEmailGroupRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of pure inbound email groups based on search criteria defined by PureInboundEmailGroupSearchReq message for a specified
     *  by search_from and search_to or by status or by name and any of these combinations
     * The method will return a PureInboundEmailGroupSearchRes message/entity that will
     * contain the stream of InboundEmailGroups
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.PureInboundEmailGroupSearch
     */
    readonly pureInboundEmailGroupSearch: {
      readonly name: "PureInboundEmailGroupSearch",
      readonly I: typeof PureInboundEmailGroupSearchReq,
      readonly O: typeof PureInboundEmailGroupSearchRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of inbound email groups based on search criteria defined by
     * InboundEmailGroupSearchReq message for a specified by
     * search_from and search_to or by status or by name and any of these
     * combinations The method will return a InboundEmailGroupSearchRes
     * message/entity that will contain the stream of InboundEmailGroups Required
     * permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.InboundEmailGroupSearch
     */
    readonly inboundEmailGroupSearch: {
      readonly name: "InboundEmailGroupSearch",
      readonly I: typeof InboundEmailGroupSearchReq,
      readonly O: typeof InboundEmailGroupSearchRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of inbound email groups defined by ListInboundEmailGroupsByGroupIdsReq message for a specified
     * array of inbound email groups
     * The method will return a ListInboundEmailGroupsByGroupIdsRes message/entity that will
     * contain the stream of InboundEmailGroup
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.ListInboundEmailGroupsByGroupIds
     */
    readonly listInboundEmailGroupsByGroupIds: {
      readonly name: "ListInboundEmailGroupsByGroupIds",
      readonly I: typeof ListInboundEmailGroupsByGroupIdsReq,
      readonly O: typeof ListInboundEmailGroupsByGroupIdsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of inbound email tasks defined by ListInboundEmailTasksByGroupIdsReq message for a specified
     * array of inbound email groups
     * The method will return a ListInboundEmailTasksByGroupIdsRes message/entity that will
     * contain the stream of InboundEmailTaskDetails along with any file attachments
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.ListInboundEmailTasksByGroupIds
     */
    readonly listInboundEmailTasksByGroupIds: {
      readonly name: "ListInboundEmailTasksByGroupIds",
      readonly I: typeof ListInboundEmailTasksByGroupIdsReq,
      readonly O: typeof ListInboundEmailTasksByGroupIdsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of active/running inbound email groups defined by ListActiveInboundEmailGroupsReq message
     * The method will return a ListActiveInboundEmailGroupsRes message/entity that will
     * contain the stream of active/running InboundEmailGroups
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.ListActiveInboundEmailGroups
     */
    readonly listActiveInboundEmailGroups: {
      readonly name: "ListActiveInboundEmailGroups",
      readonly I: typeof ListActiveInboundEmailGroupsReq,
      readonly O: typeof ListActiveInboundEmailGroupsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Schedule Outbound email campaign defined by ScheduleReq message for the specified
     * email_template_sid, initial_pace, selected_email_col, from_address,
     * allow_duplicates, group_name, contact_group_sid, start_time, stop_time
     * The method will return ScheduleRes message/entity that will
     * contain newly scheduled email_group_sid and email_group_id for this client
     * Required permissions:
     *      EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.EmailApi.Schedule
     */
    readonly schedule: {
      readonly name: "Schedule",
      readonly I: typeof ScheduleReq,
      readonly O: typeof ScheduleRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Schedule Outbound email campaign defined by ScheduleOutboundEmailGroupReq message for the specified
     * subject, email message, initial_pace, selected_email_col, from_address,
     * allow_duplicates, group_name, contact_group_sid, start_time, stop_time
     * The method will return ScheduleOutboundEmailGroupRes message/entity that will
     * contain newly scheduled email_group_sid and email_group_id for this client
     * Required permissions:
     *      EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.EmailApi.ScheduleOutboundEmailGroup
     */
    readonly scheduleOutboundEmailGroup: {
      readonly name: "ScheduleOutboundEmailGroup",
      readonly I: typeof ScheduleOutboundEmailGroupReq,
      readonly O: typeof ScheduleOutboundEmailGroupRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Schedule Pure Inbound email campaign defined by SchedulePureInboundEmailReq message for the specified
     * inbound_email_template_sid
     * The method will return SchedulePureInboundEmailRes message/entity that will
     * contain newly scheduled inbound_email_group_sid for this client
     * Required permissions:
     *      EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.EmailApi.SchedulePureInboundEmail
     */
    readonly schedulePureInboundEmail: {
      readonly name: "SchedulePureInboundEmail",
      readonly I: typeof SchedulePureInboundEmailReq,
      readonly O: typeof SchedulePureInboundEmailRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create/Record inbound agent email reply defined by CreateEmailMessageAgentReplyReq message for a specified
     * inbound_email_group_id, to_address, subject, email_conversation_id, agent_sid .
     * The method will return a EmailMessageReply message/entity that will
     * contain the newly created email_message_reply data
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.CreateEmailMessageAgentReply
     */
    readonly createEmailMessageAgentReply: {
      readonly name: "CreateEmailMessageAgentReply",
      readonly I: typeof CreateEmailMessageAgentReplyReq,
      readonly O: typeof EmailMessageReplyWithAttachments,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create/Record inbound agent email reply attachment defined by CreateEmailMessageAgentReplyAttachmentReq message for a specified
     * file_name, file_size and file_type.
     * The method will return a CreateEmailMessageAgentReplyAttachmentRes message/entity that will
     * contain the newly created email_message_reply_attachment_id, url_path and gs_path for this client
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.CreateEmailMessageAgentReplyAttachment
     */
    readonly createEmailMessageAgentReplyAttachment: {
      readonly name: "CreateEmailMessageAgentReplyAttachment",
      readonly I: typeof CreateEmailMessageAgentReplyAttachmentReq,
      readonly O: typeof CreateEmailMessageAgentReplyAttachmentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Sends email message based on email details defined in SendReplyReq specified by
     * in_reply_to and email_reply_id
     * The method will return a EmailMessageReplyWithAttachments message/entity that will
     * contain the email_message_reply data
     * along with along with attachment details
     * Required permissions:
     *      EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.EmailApi.SendReply
     */
    readonly sendReply: {
      readonly name: "SendReply",
      readonly I: typeof SendReplyReq,
      readonly O: typeof EmailMessageReplyWithAttachments,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of email groups defined by GetEmailGroupsByGroupSidsReq message for a specified
     * array of email_group_sids
     * The method will return a GetEmailGroupsByGroupSidsRes message/entity that will
     * contain the stream of EmailGroupSearchDetailsRes results
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetEmailGroupsByGroupSids
     */
    readonly getEmailGroupsByGroupSids: {
      readonly name: "GetEmailGroupsByGroupSids",
      readonly I: typeof GetEmailGroupsByGroupSidsReq,
      readonly O: typeof GetEmailGroupsByGroupSidsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get outbound email group details defined by GetEmailGroupByGroupSidReq message for a specified
     * email_group_sid
     * The method will return a EmailGroupDetailsWithAttachments message/entity that will
     * contain the outbound email group details
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetEmailGroupByGroupSid
     */
    readonly getEmailGroupByGroupSid: {
      readonly name: "GetEmailGroupByGroupSid",
      readonly I: typeof GetEmailGroupByGroupSidReq,
      readonly O: typeof EmailGroupDetailsWithAttachments,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get outbound email group details defined by GetEmailGroupByGroupIdReq message for a specified
     * email_group_id
     * The method will return a EmailGroupDetailsWithAttachments message/entity that will
     * contain the outbound email group details
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetEmailGroupByGroupId
     */
    readonly getEmailGroupByGroupId: {
      readonly name: "GetEmailGroupByGroupId",
      readonly I: typeof GetEmailGroupByGroupIdReq,
      readonly O: typeof EmailGroupDetailsWithAttachments,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Schedule Pure OmniLink Inbound email campaign defined by SchedulePureOmniLinkInboundEmailReq message for the specified
     * connectedInbox and skills
     * The method will return SchedulePureOmniLinkInboundEmailRes message/entity that will
     * contain newly scheduled inbound_email_group_sid for this client
     * Required permissions:
     *      EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.EmailApi.SchedulePureOmniLinkInboundEmail
     */
    readonly schedulePureOmniLinkInboundEmail: {
      readonly name: "SchedulePureOmniLinkInboundEmail",
      readonly I: typeof SchedulePureOmniLinkInboundEmailReq,
      readonly O: typeof SchedulePureOmniLinkInboundEmailRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates the name, skills, stop time for the inbound email group
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.UpdateInboundEmailGroup
     */
    readonly updateInboundEmailGroup: {
      readonly name: "UpdateInboundEmailGroup",
      readonly I: typeof UpdateInboundEmailGroupReq,
      readonly O: typeof UpdateInboundEmailGroupRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Update email group sendsperminute defined by EmailGroupSendsPerMinuteReq
     * message for a specified email_group_sid and sends_per_minute.
     * The method will return a EmailGroupSendsPerMinuteRes message/entity that
     * will contain the true/false after updating sends_per_minute value for this
     * clients email_group_sid and sends_per_minute Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.UpdateEmailGroupMstrSendsPerMinute
     */
    readonly updateEmailGroupMstrSendsPerMinute: {
      readonly name: "UpdateEmailGroupMstrSendsPerMinute",
      readonly I: typeof EmailGroupSendsPerMinuteReq,
      readonly O: typeof EmailGroupSendsPerMinuteRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Updates the name, start and stop time for the outbound email group
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.UpdateOutboundEmailGroup
     */
    readonly updateOutboundEmailGroup: {
      readonly name: "UpdateOutboundEmailGroup",
      readonly I: typeof UpdateOutboundEmailGroupReq,
      readonly O: typeof UpdateOutboundEmailGroupRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Gets a inbound email group details defined by InboundEmailGroupByIdReq
     * message for the specified inbound_email_group_id, org_id and region_id. The
     * method will return a InboundEmailGroup message/entity. Required
     * permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.GetInboundEmailGroupById
     */
    readonly getInboundEmailGroupById: {
      readonly name: "GetInboundEmailGroupById",
      readonly I: typeof InboundEmailGroupByIdReq,
      readonly O: typeof InboundEmailGroup,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Create/Add email message attachment details defined by CreateEmailMessageAttachmentReq
     * message for the specified client.
     * This method will return a CreateEmailMessageAttachmentRes message/entity. Required
     * permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.CreateEmailMessageAttachment
     */
    readonly createEmailMessageAttachment: {
      readonly name: "CreateEmailMessageAttachment",
      readonly I: typeof CreateEmailMessageAttachmentReq,
      readonly O: typeof CreateEmailMessageAttachmentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List all the email message attachments and their details defined by
     * ListEmailMessageAttachmentsReq for the specified client.
     * permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.ListEmailMessageAttachments
     */
    readonly listEmailMessageAttachments: {
      readonly name: "ListEmailMessageAttachments",
      readonly I: typeof ListEmailMessageAttachmentsReq,
      readonly O: typeof ListEmailMessageAttachmentsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Unassigns a conversation from the current user and puts it back into the matching pool
     * Required permissions:
     *    OMNI_LINK
     *
     * @generated from rpc api.v0alpha.EmailApi.UnassignCurrentUserFromEmailConversation
     */
    readonly unassignCurrentUserFromEmailConversation: {
      readonly name: "UnassignCurrentUserFromEmailConversation",
      readonly I: typeof UnassignCurrentUserFromEmailConversationReq,
      readonly O: typeof UnassignUserFromEmailConversationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Listing all email conversations for the dashboard
     * Required Permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.DashboardEmailConversationSearch
     */
    readonly dashboardEmailConversationSearch: {
      readonly name: "DashboardEmailConversationSearch",
      readonly I: typeof DashboardEmailConversationSearchReq,
      readonly O: typeof DashboardEmailConversationSearchRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * ReassignEmailConversation.  unassign current user and assign
     * new user.
     * This method will return a ReassignEmailConversationRes
     * Required permissions
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.ReassignEmailConversation
     */
    readonly reassignEmailConversation: {
      readonly name: "ReassignEmailConversation",
      readonly I: typeof ReassignEmailConversationReq,
      readonly O: typeof ReassignEmailConversationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * AssignEmailConversation - allowing the manager from the dashboard to assing a email conversation
     * before the matcher assigns it.
     *
     * @generated from rpc api.v0alpha.EmailApi.AssignEmailConversation
     */
    readonly assignEmailConversation: {
      readonly name: "AssignEmailConversation",
      readonly I: typeof AssignEmailConversationReq,
      readonly O: typeof AssignEmailConversationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Suspends an email conversation
     *
     * @generated from rpc api.v0alpha.EmailApi.SuspendEmailConversation
     */
    readonly suspendEmailConversation: {
      readonly name: "SuspendEmailConversation",
      readonly I: typeof SuspendEmailConversationReq,
      readonly O: typeof SuspendEmailConversationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * List stream of inbound and outbound campaigns defined by ListCampaignsByConnectedInboxIdReq message
     * The method will return a ListCampaignsByConnectedInboxIdRes message/entity that will
     * contain the stream of all campaigns along with project details.
     * Required permissions:
     *      OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.ListCampaignsByConnectedInboxId
     */
    readonly listCampaignsByConnectedInboxId: {
      readonly name: "ListCampaignsByConnectedInboxId",
      readonly I: typeof ListCampaignsByConnectedInboxIdReq,
      readonly O: typeof ListCampaignsByConnectedInboxIdRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Close email conversation defined by CloseEmailConversationReq message
     * Required permissions:
     *    OMNI_BOSS
     *
     * @generated from rpc api.v0alpha.EmailApi.CloseEmailConversation
     */
    readonly closeEmailConversation: {
      readonly name: "CloseEmailConversation",
      readonly I: typeof CloseEmailConversationReq,
      readonly O: typeof CloseEmailConversationRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

