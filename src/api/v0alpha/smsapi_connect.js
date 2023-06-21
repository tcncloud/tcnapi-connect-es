// @generated by protoc-gen-connect-es v0.10.0
// @generated from file api/v0alpha/smsapi.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateInboundSmsGroupReq, CreateInboundSmsGroupRes, CreateInboundSmsTemplateReq, CreateInboundSmsTemplateRes, CreateSmsConversationAssignedAgentRes, CreateSmsConversationAuditRes, CreateSmsConversationReq, CreateSmsConversationRes, CreateSmsIntentTemplateRes, CreateSmsSourceNumberReq, CreateSmsSourceNumberRes, CreateSmsTemplateReq, CreateSmsTemplateRes, DeleteInboundSmsGroupReq, DeleteInboundSmsGroupRes, DeleteInboundSmsTemplateReq, DeleteInboundSmsTemplateRes, DeleteSmsConversationReq, DeleteSmsConversationRes, DeleteSmsIntentTemplateReq, DeleteSmsIntentTemplateRes, DeleteSmsSourceNumberReq, DeleteSmsSourceNumberRes, DeleteSmsTemplateReq, DeleteSmsTemplateRes, GetInboundSmsGroupByIdReq, GetInboundSmsGroupByIdRes, GetInboundSmsTemplateByIdReq, GetInboundSmsTemplateByIdRes, GetSmsConversationAssignedAgentByIdReq, GetSmsConversationAssignedAgentByIdRes, GetSmsConversationAuditByIdReq, GetSmsConversationAuditByIdRes, GetSmsConversationByIdReq, GetSmsConversationByIdRes, GetSmsIntentTemplateBySidReq, GetSmsMessageReq, GetSmsMessageRes, GetSmsSourceNumberBySidReq, GetSmsTemplateBySidReq, GetSmsTemplateBySidRes, ListActiveInboundSmsGroupsReq, ListActiveInboundSmsGroupsRes, ListInboundSmsGroupByFiltersReq, ListInboundSmsGroupByFiltersRes, ListInboundSmsGroupsByGroupIdsReq, ListInboundSmsGroupsByGroupIdsRes, ListInboundSmsGroupsReq, ListInboundSmsGroupsRes, ListInboundSmsTasksByGroupIdsReq, ListInboundSmsTasksByGroupIdsRes, ListInboundSmsTemplatesReq, ListInboundSmsTemplatesRes, ListSmsConversationAssignedAgentsReq, ListSmsConversationAssignedAgentsRes, ListSmsConversationAuditsReq, ListSmsConversationAuditsRes, ListSmsConversationsReq, ListSmsConversationsRes, ListSmsGroupByFiltersReq, ListSmsGroupByFiltersRes, ListSmsGroupsByGroupSidsReq, ListSmsGroupsByGroupSidsRes, ListSmsIntentTemplatesReq, ListSmsIntentTemplatesRes, ListSmsSourceNumbersReq, ListSmsSourceNumbersRes, ListSmsTasksByGroupSidsReq, ListSmsTasksByGroupSidsRes, ListSmsTasksWithDetailedStatusReq, ListSmsTasksWithDetailedStatusRes, ListSmsTemplatesReq, ListSmsTemplatesRes, ResendUnconnectedSmsReq, ResendUnconnectedSmsRes, ScheduleInboundSmsReq, ScheduleInboundSmsRes, ScheduleSmsReq, ScheduleSmsRes, SendSmsNotificationReq, SendSmsNotificationRes, SmsActivitySearchReq, SmsActivitySearchRes, SmsConversationAssignedAgent, SmsConversationAudit, SmsGroupInfo, SmsIntentTemplate, SmsNumbers, StopAllInboundSmsGroupsReq, StopAllInboundSmsGroupsRes, StopAllOutboundSmsGroupsReq, StopAllOutboundSmsGroupsRes, StopInboundSmsGroupReq, StopInboundSmsGroupRes, UpdateInboundSmsGroupReq, UpdateInboundSmsGroupRes, UpdateInboundSmsTemplateReq, UpdateInboundSmsTemplateRes, UpdateSmsConversationReq, UpdateSmsConversationRes, UpdateSmsGroupRes, UpdateSmsIntentTemplateRes, UpdateSmsSourceNumberReq, UpdateSmsSourceNumberRes, UpdateSmsTemplateReq, UpdateSmsTemplateRes } from "./smsapi_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service for interacting with TCN's SMS API system.
 * Accessing all of the methods require an authenticated user with the correct
 * permissions.
 *
 * @generated from service api.v0alpha.SmsApi
 */
export const SmsApi = {
  typeName: "api.v0alpha.SmsApi",
  methods: {
    /**
     * List Sms Templates  defined by ListSmsTemplatesReq message.
     * Gets all details belong to the clientsid
     * The method will return a stream of ListSmsTemplatesRes messages
     * containing SmsTemplates with SmsIntents
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsTemplates
     */
    listSmsTemplates: {
      name: "ListSmsTemplates",
      I: ListSmsTemplatesReq,
      O: ListSmsTemplatesRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a SmsTemplate defined by CreateSmsTemplateReq message.
     * The method will return a CreateSmsTemplateRes message that will
     * contain the newly created values of the sms_template_id
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.CreateSmsTemplate
     */
    createSmsTemplate: {
      name: "CreateSmsTemplate",
      I: CreateSmsTemplateReq,
      O: CreateSmsTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update a SmsTemplate defined by UpdateSmsTemplateReq message for
     * the specified sms_template_sid
     * will update the following
     * sms template fields:
     *    MessageSid
     *    SmsTemplateIntentSid
     * The method will return a UpdateSmsTemplateRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateSmsTemplate
     */
    updateSmsTemplate: {
      name: "UpdateSmsTemplate",
      I: UpdateSmsTemplateReq,
      O: UpdateSmsTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a SmsTemplate defined by DeleteSmsTemplateReq message for
     * the specified sms_template_id
     * The method will return a DeleteSmsTemplateRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.DeleteSmsTemplate
     */
    deleteSmsTemplate: {
      name: "DeleteSmsTemplate",
      I: DeleteSmsTemplateReq,
      O: DeleteSmsTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets an SmsTemplate defined by GetSmsTemplateBySidReq message for the specified
     * sms_template_sid.
     * The method will return a SmsTemplate group.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetSmsTemplateBySid
     */
    getSmsTemplateBySid: {
      name: "GetSmsTemplateBySid",
      I: GetSmsTemplateBySidReq,
      O: GetSmsTemplateBySidRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms IntentTemplates  defined by ListSmsIntentTemplatesReq message.
     * Gets all details belong to the clientsid
     * The method will return a stream of ListSmsIntentTemplatesRes messages
     * containing ActionKey, ActionDetails, ActionTriggers, ActionPriority
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsIntentTemplates
     */
    listSmsIntentTemplates: {
      name: "ListSmsIntentTemplates",
      I: ListSmsIntentTemplatesReq,
      O: ListSmsIntentTemplatesRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a SmsIntentTemplate defined by SmsIntentTemplate message.
     * The method will return a CreateSmsIntentTemplateRes message that will
     * contain the newly created values of the sms_intent_template_sid
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.CreateSmsIntentTemplate
     */
    createSmsIntentTemplate: {
      name: "CreateSmsIntentTemplate",
      I: SmsIntentTemplate,
      O: CreateSmsIntentTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update a SmsIntentTemplate defined by SmsIntentTemplate message for
     * the specified sms_intent_template_sid
     * will update the following
     * sms intent template fields:
     *    ActionKey
     *    ActionDetails
     *    ActionTrigger
     * The method will return a UpdateSmsIntentTemplateRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateSmsIntentTemplate
     */
    updateSmsIntentTemplate: {
      name: "UpdateSmsIntentTemplate",
      I: SmsIntentTemplate,
      O: UpdateSmsIntentTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a SmsIntentTemplate defined by DeleteSmsIntentTemplateReq message for
     * the specified sms_intent_template_id
     * The method will return a DeleteSmsIntentTemplateRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.DeleteSmsIntentTemplate
     */
    deleteSmsIntentTemplate: {
      name: "DeleteSmsIntentTemplate",
      I: DeleteSmsIntentTemplateReq,
      O: DeleteSmsIntentTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets an SmsIntentTemplate group defined by GetSmsIntentTemplateBySidReq message for the specified
     * sms_intent_template_sid.
     * The method will return a SmsIntentTemplate group.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetSmsIntentTemplateBySid
     */
    getSmsIntentTemplateBySid: {
      name: "GetSmsIntentTemplateBySid",
      I: GetSmsIntentTemplateBySidReq,
      O: SmsIntentTemplate,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms SourceNumbers  defined by ListSmsSourceNumbersReq message.
     * Gets all source numbers belong to the clientsid
     * The method will return a stream of ListSmsSourceNumbersRes messages
     * containing providername, providertype
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsSourceNumbers
     */
    listSmsSourceNumbers: {
      name: "ListSmsSourceNumbers",
      I: ListSmsSourceNumbersReq,
      O: ListSmsSourceNumbersRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a SmsSourceNumber defined by CreateSmsSourceNumberReq message.
     * The method will return a CreateSmsSourceNumberRes message that will
     * contain the newly created values of the sms_number_id
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.CreateSmsSourceNumber
     */
    createSmsSourceNumber: {
      name: "CreateSmsSourceNumber",
      I: CreateSmsSourceNumberReq,
      O: CreateSmsSourceNumberRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update a SmsSourceNumber defined by UpdateSmsSourceNumberReq message for
     * the specified sms_number_sid
     * will update the following
     * sms number fields:
     *    CountrySid
     *    ProviderName
     *    NumberType
     * The method will return a UpdateSmsSourceNumberRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateSmsSourceNumber
     */
    updateSmsSourceNumber: {
      name: "UpdateSmsSourceNumber",
      I: UpdateSmsSourceNumberReq,
      O: UpdateSmsSourceNumberRes,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a SmsSourceNumber defined by DeleteSmsSourceNumberReq message for
     * the specified sms_number_id
     * The method will return a DeleteSmsSourceNumberRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.DeleteSmsSourceNumber
     */
    deleteSmsSourceNumber: {
      name: "DeleteSmsSourceNumber",
      I: DeleteSmsSourceNumberReq,
      O: DeleteSmsSourceNumberRes,
      kind: MethodKind.Unary,
    },
    /**
     * get sms source number for the particular sid
     * Gets an SmsSource Number defined by GetSmsSourceNumberBySidReq message for the specified
     * sms_number_sid.
     * The method will return a SmsNumbers group.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetSmsSourceNumberBySid
     */
    getSmsSourceNumberBySid: {
      name: "GetSmsSourceNumberBySid",
      I: GetSmsSourceNumberBySidReq,
      O: SmsNumbers,
      kind: MethodKind.Unary,
    },
    /**
     * Send sms notification defined by SendSmsNotificationReq message for the specified
     * message and array of phone num.
     * The method will return a stream of SendSmsNotificationRes messages
     * containing result true/false after notified by sms for the client.
     * Required permissions:
     *      VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.SendSmsNotification
     */
    sendSmsNotification: {
      name: "SendSmsNotification",
      I: SendSmsNotificationReq,
      O: SendSmsNotificationRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms Group defined by ListSmsGroupByFiltersReq message.
     * Gets all details belong to the clientsid  with filters
     * The method will return a stream of ListSmsGroupByFiltersRes messages
     * containing SmsGroup Info and SMSIntent
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsGroupByFilters
     */
    listSmsGroupByFilters: {
      name: "ListSmsGroupByFilters",
      I: ListSmsGroupByFiltersReq,
      O: ListSmsGroupByFiltersRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms Group defined by ListSmsGroupsByGroupSidsReq message.
     * Gets all details for the array of group sids
     * The method will return a stream of ListSmsGroupsByGroupSidsRes messages
     * containing SmsGroup Info and SMSIntent
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsGroupsByGroupSids
     */
    listSmsGroupsByGroupSids: {
      name: "ListSmsGroupsByGroupSids",
      I: ListSmsGroupsByGroupSidsReq,
      O: ListSmsGroupsByGroupSidsRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms Task  defined by ListSmsTasksByGroupSidsReq message.
     * Gets all details for the array of group sids
     * The method will return a stream of ListSmsTasksByGroupSidsRes messages
     * containing delivery status, msg_time, cost
     * belonging to the smsgroup.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsTasksByGroupSids
     */
    listSmsTasksByGroupSids: {
      name: "ListSmsTasksByGroupSids",
      I: ListSmsTasksByGroupSidsReq,
      O: ListSmsTasksByGroupSidsRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms Group defined by ListSmsGroupByFiltersReq message.
     * Gets all details belong to the owner path with filters for audit
     * The method will return a stream of ListSmsGroupByFiltersRes messages
     * containing SmsGroup Info and SMSIntent
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsGroupByFiltersForAudit
     */
    listSmsGroupByFiltersForAudit: {
      name: "ListSmsGroupByFiltersForAudit",
      I: ListSmsGroupByFiltersReq,
      O: ListSmsGroupByFiltersRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms Group defined by ListSmsGroupsByGroupSidsReq message.
     * Gets all details for the array of group sids for audit
     * The method will return a stream of ListSmsGroupsByGroupSidsRes messages
     * containing SmsGroup Info and SMSIntent
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsGroupsByGroupSidsForAudit
     */
    listSmsGroupsByGroupSidsForAudit: {
      name: "ListSmsGroupsByGroupSidsForAudit",
      I: ListSmsGroupsByGroupSidsReq,
      O: ListSmsGroupsByGroupSidsRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms Task  defined by ListSmsTasksByGroupSidsReq message.
     * Gets all details for the array of group sids for audit
     * The method will return a stream of ListSmsTasksByGroupSidsRes messages
     * containing delivery status, msg_time, cost
     * belonging to the smsgroup.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsTasksByGroupSidsForAudit
     */
    listSmsTasksByGroupSidsForAudit: {
      name: "ListSmsTasksByGroupSidsForAudit",
      I: ListSmsTasksByGroupSidsReq,
      O: ListSmsTasksByGroupSidsRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Sms Task  defined by ListSmsTasksWithDetailedStatusReq message.
     * Gets all details for the specified sms group sid.
     * The method will return a stream of ListSmsTasksWithDetailedStatusRes messages
     * containing delivery status, msg_time, cost
     * belonging to the smsgroup.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsTasksWithDetailedStatus
     */
    listSmsTasksWithDetailedStatus: {
      name: "ListSmsTasksWithDetailedStatus",
      I: ListSmsTasksWithDetailedStatusReq,
      O: ListSmsTasksWithDetailedStatusRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update the Scheduled Sms group defined by SmsGroupInfo message for the specified
     * paused/unpaused/cancel status
     * The method will return a UpdateSmsGroupRes message with true or false .
     * Required permissions: EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateSmsGroupStatus
     */
    updateSmsGroupStatus: {
      name: "UpdateSmsGroupStatus",
      I: SmsGroupInfo,
      O: UpdateSmsGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update the Scheduled Sms group defined by SmsGroupInfo message for the specified
     * pacing
     * The method will return a UpdateSmsGroupRes message with true or false .
     * Required permissions: EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateSmsGroupSendsPerMinute
     */
    updateSmsGroupSendsPerMinute: {
      name: "UpdateSmsGroupSendsPerMinute",
      I: SmsGroupInfo,
      O: UpdateSmsGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update the Scheduled Sms group defined by SmsGroupInfo message for the specified
     * schedule_time
     * The method will return a UpdateSmsGroupRes message with true or false .
     * Required permissions: EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateSmsGroupScheduleTimes
     */
    updateSmsGroupScheduleTimes: {
      name: "UpdateSmsGroupScheduleTimes",
      I: SmsGroupInfo,
      O: UpdateSmsGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * Schedule Sms group defined by ScheduleSmsReq message for the specified
     * sms_template_id with initialpace, sourcenumber, contactgroupsid
     * The method will return a Sms group.
     * Required permissions: EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.SmsApi.ScheduleSms
     */
    scheduleSms: {
      name: "ScheduleSms",
      I: ScheduleSmsReq,
      O: ScheduleSmsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Re-Schedule Sms group defined by ResendUnconnectedSmsReq message for the specified
     * sms_group_id and start/stop time.
     * The method will return a Sms group.
     * Required permissions: EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.SmsApi.ResendUnconnectedSms
     */
    resendUnconnectedSms: {
      name: "ResendUnconnectedSms",
      I: ResendUnconnectedSmsReq,
      O: ResendUnconnectedSmsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Search SMS activity defined by SmsActivitySearchReq message for
     * any of the following filters:
     * ClientSid, ToNumber and FromNumber, FromDate, ToDate, SentOnly
     * The method will return the Sms Group with Sms Task & Sms Intent Info
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.SmsActivitySearch
     */
    smsActivitySearch: {
      name: "SmsActivitySearch",
      I: SmsActivitySearchReq,
      O: SmsActivitySearchRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a InboundSmsTemplate defined by CreateInboundSmsTemplateReq message.
     * The method will return a CreateInboundSmsTemplateRes message that will
     * contain the newly created values of the inbound_sms_template_id
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.CreateInboundSmsTemplate
     */
    createInboundSmsTemplate: {
      name: "CreateInboundSmsTemplate",
      I: CreateInboundSmsTemplateReq,
      O: CreateInboundSmsTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update a InboundSmsTemplate defined by UpdateInboundSmsTemplateReq message for
     * the specified sms_template_id, region_id and org_id
     * will update the following
     * inbound sms template fields:
     *    TemplateId
     *    SmsTemplateIntentId
     * The method will return a UpdateInboundSmsTemplateRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateInboundSmsTemplate
     */
    updateInboundSmsTemplate: {
      name: "UpdateInboundSmsTemplate",
      I: UpdateInboundSmsTemplateReq,
      O: UpdateInboundSmsTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a InboundSmsTemplate defined by DeleteInboundSmsTemplateReq message for
     * the specified inbound_sms_template_id, region_id and org_id
     * The method will return a DeleteInboundSmsTemplateRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.DeleteInboundSmsTemplate
     */
    deleteInboundSmsTemplate: {
      name: "DeleteInboundSmsTemplate",
      I: DeleteInboundSmsTemplateReq,
      O: DeleteInboundSmsTemplateRes,
      kind: MethodKind.Unary,
    },
    /**
     * List InboundSmsTemplate  defined by ListInboundSmsTemplatesReq message.
     * Gets all of the Inbound sms template specified according to the filters.
     * The method will return a stream of ListInboundSmsTemplatesRes messages
     * containing InboundSmsTemplate, and SMSIntent
     * belonging to the inbound smstemplate.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListInboundSmsTemplates
     */
    listInboundSmsTemplates: {
      name: "ListInboundSmsTemplates",
      I: ListInboundSmsTemplatesReq,
      O: ListInboundSmsTemplatesRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets an InboundSmsTemplate group defined by GetInboundSmsTemplateByIdReq message for the specified
     * inbound_sms_template_id, region_id and org_id.
     * The method will return a InboundTemplate group.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetInboundSmsTemplateById
     */
    getInboundSmsTemplateById: {
      name: "GetInboundSmsTemplateById",
      I: GetInboundSmsTemplateByIdReq,
      O: GetInboundSmsTemplateByIdRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a InboundSmsGroup defined by CreateInboundSmsGroupReq message.
     * The method will return a CreateInboundSmsGroupRes message that will
     * contain the newly created values of the inbound_sms_group_id
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.CreateInboundSmsGroup
     */
    createInboundSmsGroup: {
      name: "CreateInboundSmsGroup",
      I: CreateInboundSmsGroupReq,
      O: CreateInboundSmsGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update a InboundSmsGroup defined by UpdateInboundSmsGroupReq message for
     * the specified sms_group_id, region_id and org_id
     * will update the following
     * inbound sms group fields:
     *    TemplateId
     *    SmsNumber
     * The method will return a UpdateInboundSmsGroupRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateInboundSmsGroup
     */
    updateInboundSmsGroup: {
      name: "UpdateInboundSmsGroup",
      I: UpdateInboundSmsGroupReq,
      O: UpdateInboundSmsGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a InboundSmsGroup defined by DeleteInboundSmsGroupReq message for
     * the specified inbound_sms_group_id, region_id and org_id
     * The method will return a DeleteInboundSmsGroupRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.DeleteInboundSmsGroup
     */
    deleteInboundSmsGroup: {
      name: "DeleteInboundSmsGroup",
      I: DeleteInboundSmsGroupReq,
      O: DeleteInboundSmsGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * List InboundSmsGroup  defined by ListInboundSmsGroupsReq message.
     * Gets all of the Inbound sms group specified according to the filters.
     * The method will return a stream of ListInboundSmsGroupsRes messages
     * containing InboundSmsGroup, and SMSIntent
     * belonging to the inbound smsgroup.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListInboundSmsGroups
     */
    listInboundSmsGroups: {
      name: "ListInboundSmsGroups",
      I: ListInboundSmsGroupsReq,
      O: ListInboundSmsGroupsRes,
      kind: MethodKind.Unary,
    },
    /**
     * List Active InboundSmsGroup  defined by ListActiveInboundSmsGroupsReq message.
     * Gets active Inbound sms group specified according to the filters.
     * The method will return a stream of ListActiveInboundSmsGroupsRes messages
     * containing InboundSmsGroup, and SMSIntent
     * belonging to the inbound smsgroup.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListActiveInboundSmsGroups
     */
    listActiveInboundSmsGroups: {
      name: "ListActiveInboundSmsGroups",
      I: ListActiveInboundSmsGroupsReq,
      O: ListActiveInboundSmsGroupsRes,
      kind: MethodKind.Unary,
    },
    /**
     * List InboundSmsGroup  defined by InboundSmsGroupByFiltersReq message.
     * Gets all of the Inbound sms group specified according to the filters.
     * The method will return a stream of InboundSmsGroupByFiltersRes messages
     * containing InboundSmsGroup, and SMSIntent
     * belonging to the inbound smsgroup.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListInboundSmsGroupByFilters
     */
    listInboundSmsGroupByFilters: {
      name: "ListInboundSmsGroupByFilters",
      I: ListInboundSmsGroupByFiltersReq,
      O: ListInboundSmsGroupByFiltersRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets an InboundSms group defined by GetInboundSmsGroupByIdReq message for the specified
     * inbound_sms_group_id, region_id and org_id.
     * The method will return a InboundSms group.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetInboundSmsGroupById
     */
    getInboundSmsGroupById: {
      name: "GetInboundSmsGroupById",
      I: GetInboundSmsGroupByIdReq,
      O: GetInboundSmsGroupByIdRes,
      kind: MethodKind.Unary,
    },
    /**
     * List InboundSmsGroup  defined by ListInboundSmsGroupsByGroupIdsReq message.
     * Gets all of the Inbound sms group specified for the groupids array.
     * The method will return a stream of ListInboundSmsGroupsByGroupIdsRes messages
     * containing InboundSmsGroup, and SMSIntent
     * belonging to the inbound smsgroup.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListInboundSmsGroupsByGroupIds
     */
    listInboundSmsGroupsByGroupIds: {
      name: "ListInboundSmsGroupsByGroupIds",
      I: ListInboundSmsGroupsByGroupIdsReq,
      O: ListInboundSmsGroupsByGroupIdsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Stop an InboundSms group defined by StopInboundSmsGroupReq message for the specified
     * inbound_sms_group_id, region_id and org_id.
     * The method will mark the InboundSms group completed.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.StopInboundSmsGroup
     */
    stopInboundSmsGroup: {
      name: "StopInboundSmsGroup",
      I: StopInboundSmsGroupReq,
      O: StopInboundSmsGroupRes,
      kind: MethodKind.Unary,
    },
    /**
     * Schedule InboundSms group defined by ScheduleInboundSmsReq message for the specified
     * inbound_sms_template_id and sms_number_sid.
     * The method will return a InboundSms group.
     * Required permissions: EXECUTE_SEND_BROADCAST
     *
     * @generated from rpc api.v0alpha.SmsApi.ScheduleInboundSms
     */
    scheduleInboundSms: {
      name: "ScheduleInboundSms",
      I: ScheduleInboundSmsReq,
      O: ScheduleInboundSmsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a SmsConversation defined by CreateSmsConversationReq message.
     * The method will return a CreateSmsConversationRes message that will
     * contain the newly created values of the sms_conversation_id
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.CreateSmsConversation
     */
    createSmsConversation: {
      name: "CreateSmsConversation",
      I: CreateSmsConversationReq,
      O: CreateSmsConversationRes,
      kind: MethodKind.Unary,
    },
    /**
     * Update a SmsConversation defined by UpdateSmsConversationReq message for
     * the specified sms_conversation_id, region_id and org_id
     * will update the following
     * conversation fields:
     *    InboundSmsGroupId
     *    SmsTaskParent
     * The method will return a UpdateSmsConversationRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.UpdateSmsConversation
     */
    updateSmsConversation: {
      name: "UpdateSmsConversation",
      I: UpdateSmsConversationReq,
      O: UpdateSmsConversationRes,
      kind: MethodKind.Unary,
    },
    /**
     * Delete a SmsConversation defined by DeleteSmsConversationReq message for
     * the specified sms_conversation_id, region_id and org_id
     * The method will return a DeleteSmsConversationRes message with true or false .
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.DeleteSmsConversation
     */
    deleteSmsConversation: {
      name: "DeleteSmsConversation",
      I: DeleteSmsConversationReq,
      O: DeleteSmsConversationRes,
      kind: MethodKind.Unary,
    },
    /**
     * List SmsConversation profiles defined by ListSmsConversationsReq message.
     * Gets all of the unique sms conversations.
     * The method will return a stream of ListSmsConversationsRes messages
     * containing InboundSmsGroupId, and SmsTaskParent
     * belonging to the smsconversations.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsConversations
     */
    listSmsConversations: {
      name: "ListSmsConversations",
      I: ListSmsConversationsReq,
      O: ListSmsConversationsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a SmsConversation defined by GetSmsConversationByIdReq message for the specified
     * sms_conversation_id, region_id and org_id.
     * The method will return a SmsConversation.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetSmsConversationById
     */
    getSmsConversationById: {
      name: "GetSmsConversationById",
      I: GetSmsConversationByIdReq,
      O: GetSmsConversationByIdRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets SmsMessage defined by GetSmsMessageReq message for the specified
     * sms_message_sid.
     * The method will return a SmsMessage.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetSmsMessage
     */
    getSmsMessage: {
      name: "GetSmsMessage",
      I: GetSmsMessageReq,
      O: GetSmsMessageRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a SmsConversationAudit defined by SmsConversationAudit message.
     * The method will return a CreateSmsConversationAuditRes message that will
     * contain the newly created values of the sms_conversation_audit_id
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.CreateSmsConversationAudit
     */
    createSmsConversationAudit: {
      name: "CreateSmsConversationAudit",
      I: SmsConversationAudit,
      O: CreateSmsConversationAuditRes,
      kind: MethodKind.Unary,
    },
    /**
     * List SmsConversationAudit profiles defined by ListSmsConversationAuditsReq message.
     * Gets all of the values for sms conversations id.
     * The method will return a stream of ListSmsConversationAuditsRes messages
     * containing SmsTaskSid, SmsReceivedReplySid and AgentId
     * belonging to the smsconversationsaudit.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsConversationAudits
     */
    listSmsConversationAudits: {
      name: "ListSmsConversationAudits",
      I: ListSmsConversationAuditsReq,
      O: ListSmsConversationAuditsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a SmsConversationAudit defined by GetSmsConversationAuditByIdReq message for the specified
     * sms_conversation_audit_id.
     * The method will return a SmsConversationAudit.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetSmsConversationAuditById
     */
    getSmsConversationAuditById: {
      name: "GetSmsConversationAuditById",
      I: GetSmsConversationAuditByIdReq,
      O: GetSmsConversationAuditByIdRes,
      kind: MethodKind.Unary,
    },
    /**
     * Create/Record a SmsConversationAssignedAgent defined by SmsConversationAssignedAgent message.
     * The method will return a CreateSmsConversationAssignedAgentRes message with true or false
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.CreateSmsConversationAssignedAgent
     */
    createSmsConversationAssignedAgent: {
      name: "CreateSmsConversationAssignedAgent",
      I: SmsConversationAssignedAgent,
      O: CreateSmsConversationAssignedAgentRes,
      kind: MethodKind.Unary,
    },
    /**
     * List SmsConversationAssignedAgent profiles defined by ListSmsConversationAssignedAgentsReq message.
     * Gets all of the values for sms conversations id.
     * The method will return a stream of ListSmsConversationAssignedAgentsRes messages
     * containing Assigned AgentId, Primary Agent, and Notiify
     * belonging to the smsconversationassignedagent.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListSmsConversationAssignedAgents
     */
    listSmsConversationAssignedAgents: {
      name: "ListSmsConversationAssignedAgents",
      I: ListSmsConversationAssignedAgentsReq,
      O: ListSmsConversationAssignedAgentsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Gets a SmsConversationAssignedAgent defined by GetSmsConversationAssignedAgentByIdReq message for the specified
     * conversation_id & assigned_agent_id
     * The method will return a SmsConversationAssignedAgent.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.GetSmsConversationAssignedAgentById
     */
    getSmsConversationAssignedAgentById: {
      name: "GetSmsConversationAssignedAgentById",
      I: GetSmsConversationAssignedAgentByIdReq,
      O: GetSmsConversationAssignedAgentByIdRes,
      kind: MethodKind.Unary,
    },
    /**
     * List InboundSmsTasks defined by ListInboundSmsTasksByGroupIdsReq message.
     * Gets all of the Inbound sms tasks for the groupids.
     * The method will return a stream of ListInboundSmsTasksByGroupIdsRes messages
     * containing InboundSmsTask
     * belonging to the inbound smsgroup.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.ListInboundSmsTasksByGroupIds
     */
    listInboundSmsTasksByGroupIds: {
      name: "ListInboundSmsTasksByGroupIds",
      I: ListInboundSmsTasksByGroupIdsReq,
      O: ListInboundSmsTasksByGroupIdsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Stop all OutboundSms groups defined by StopAllOutboundSmsGroupsReq message for the specified
     * array of outbound groups and client_sid.
     * The method will mark the OutboundSms groups as completed.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.StopAllOutboundSmsGroups
     */
    stopAllOutboundSmsGroups: {
      name: "StopAllOutboundSmsGroups",
      I: StopAllOutboundSmsGroupsReq,
      O: StopAllOutboundSmsGroupsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Stop all InboundSms groups defined by StopAllInboundSmsGroupsReq message for the specified
     * array of inbound groups, region_id and org_id.
     * The method will mark the InboundSms groups as completed.
     * Required permissions: VIEW_SMS
     *
     * @generated from rpc api.v0alpha.SmsApi.StopAllInboundSmsGroups
     */
    stopAllInboundSmsGroups: {
      name: "StopAllInboundSmsGroups",
      I: StopAllInboundSmsGroupsReq,
      O: StopAllInboundSmsGroupsRes,
      kind: MethodKind.Unary,
    },
  }
};

