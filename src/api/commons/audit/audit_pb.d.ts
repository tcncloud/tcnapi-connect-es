// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/audit/audit.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { EventType } from "./event_types_pb.js";
import type { DummyEvent } from "./events_pb.js";
import type { VanaBillingReportEvent, VanaFlagEvent, VanaFlagReviewEvent, VanaFlagSummaryEvent } from "./vana_events_pb.js";
import type { OmnichannelAgentAssignConversationEvent, OmnichannelAgentMessageUnitsEvent, OmnichannelAgentReassignConversationEvent, OmnichannelAgentSuspendEvent, OmnichannelAgentTextMessageEvent, OmnichannelAgentUnassignConversationEvent, OmnichannelArchiveCampaignEvent, OmnichannelArchiveModuleEvent, OmnichannelBeginWrapUpEvent, OmnichannelCloseConversationEvent, OmnichannelCompleteCampaignEvent, OmnichannelCompleteModuleEvent, OmnichannelConnectedInboxCreatedEvent, OmnichannelConnectedInboxPollEvent, OmnichannelCreateCampaignEvent, OmnichannelCreateConversationEvent, OmnichannelCreateProjectEvent, OmnichannelCustomerMessageUnitsEvent, OmnichannelCustomerTextMessageEvent, OmnichannelDailyConversationReportEvent, OmnichannelDailyProjectReportEvent, OmnichannelErrorModuleEvent, OmnichannelFailModuleEvent, OmnichannelFinishWrapUpEvent, OmnichannelManagerMessageUnitsEvent, OmnichannelManagerTextMessageEvent, OmnichannelModuleInitialReplyEvent, OmnichannelPauseCampaignEvent, OmnichannelPauseModuleEvent, OmnichannelPaymentLinkSentEvent, OmnichannelResumeCampaignEvent, OmnichannelResumeModuleEvent, OmnichannelScheduleModuleEvent, OmnichannelSetConversationCollectedDataEvent, OmnichannelSmsMessageSentModuleEvent, OmnichannelStartCampaignEvent, OmnichannelStartModuleEvent, OmnichannelSuccessModuleEvent, OmnichannelSystemMessageUnitsEvent, OmnichannelT10Event, OmnichannelT11Event, OmnichannelTaskMessageSentEvent, OmnichannelUpdateCampaignEvent, OmnichannelUpdateModuleEvent } from "./omnichannel_events_pb.js";
import type { AsmActivateConversationEvent, AsmAgentLoginEvent, AsmAgentLogoutEvent, AsmAgentStateChangedEvent, AsmConversationPulledEvent, AsmDeactivateConversationEvent, AsmOpenOmniAgentEvent, AsmOpenVoiceEvent, AsmPauseEvent, AsmResumeEvent } from "./asm_events_pb.js";
import type { ScorecardsCloneScorecardEvent, ScorecardsCreateAutoEvaluationEvent, ScorecardsCreateCategoryEvent, ScorecardsCreateEvaluationEvent, ScorecardsCreateEvaluationQuestionEvent, ScorecardsCreateQuestionEvent, ScorecardsCreateScorecardEvent, ScorecardsCreateScorecardQuestionEvent, ScorecardsCreateSectionEvent, ScorecardsDeleteCategoryEvent, ScorecardsDeleteEvaluationEvent, ScorecardsDeleteEvaluationQuestionEvent, ScorecardsDeleteQuestionEvent, ScorecardsDeleteScorecardEvent, ScorecardsDeleteScorecardQuestionEvent, ScorecardsDeleteSectionEvent, ScorecardsUpdateCategoryEvent, ScorecardsUpdateEvaluationEvent, ScorecardsUpdateEvaluationQuestionEvent, ScorecardsUpdateQuestionEvent, ScorecardsUpdateScorecardEvent, ScorecardsUpdateScorecardQuestionEvent, ScorecardsUpdateSectionEvent } from "./scorecards_events_pb.js";
import type { TicketEvent } from "./tickets_events_pb.js";
import type { ComplianceRndQueryEvent } from "./compliance_events_pb.js";
import type { AgentTrainingCreateLearningOpportunityEvent } from "./agent_training_events_pb.js";

/**
 * This represents a generic audit event that is sent to the audit service
 *
 * @generated from message api.commons.audit.AuditEvent
 */
export declare class AuditEvent extends Message<AuditEvent> {
  /**
   * Org ID
   *
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * Region ID
   *
   * @generated from field: string region_id = 2;
   */
  regionId: string;

  /**
   * Cluster ID
   *
   * @generated from field: string cluster_id = 3;
   */
  clusterId: string;

  /**
   * Timestamp when this event has been generated
   *
   * @generated from field: google.protobuf.Timestamp event_time = 4;
   */
  eventTime?: Timestamp;

  /**
   * this is an UUID so we can deduplicate at consumer side
   *
   * @generated from field: string audit_id = 5;
   */
  auditId: string;

  /**
   * Application-specific identifier.
   * All aplications that generate audit events must have a unique numerical ID assigned within a specific event class
   * Vana 200 Omni 300 Asm 400 ....
   * for each event type. (see event_types.proto)
   *
   * @generated from field: api.commons.audit.EventType event_type = 10;
   */
  eventType: EventType;

  /**
   * Actual event payload. This is application specific
   *
   * @generated from oneof api.commons.audit.AuditEvent.event
   */
  event: {
    /**
     * / Dummy Event class 100
     *
     * @generated from field: api.commons.audit.DummyEvent _dummy_event = 100;
     */
    value: DummyEvent;
    case: "DummyEvent";
  } | {
    /**
     * / Voice Analytics Events 200
     *
     * @generated from field: api.commons.audit.VanaFlagEvent vana_flag_event = 200;
     */
    value: VanaFlagEvent;
    case: "vanaFlagEvent";
  } | {
    /**
     * @generated from field: api.commons.audit.VanaFlagReviewEvent vana_flag_review_event = 201;
     */
    value: VanaFlagReviewEvent;
    case: "vanaFlagReviewEvent";
  } | {
    /**
     * @generated from field: api.commons.audit.VanaBillingReportEvent vana_billing_report_event = 202;
     */
    value: VanaBillingReportEvent;
    case: "vanaBillingReportEvent";
  } | {
    /**
     * @generated from field: api.commons.audit.VanaFlagSummaryEvent vana_flag_summary_event = 203;
     */
    value: VanaFlagSummaryEvent;
    case: "vanaFlagSummaryEvent";
  } | {
    /**
     * / Omnichannel Events class 300
     *
     * @generated from field: api.commons.audit.OmnichannelCreateProjectEvent omnichannel_create_project_event = 300;
     */
    value: OmnichannelCreateProjectEvent;
    case: "omnichannelCreateProjectEvent";
  } | {
    /**
     * @generated from field: api.commons.audit.OmnichannelCreateCampaignEvent omnichannel_create_campaign_event = 301;
     */
    value: OmnichannelCreateCampaignEvent;
    case: "omnichannelCreateCampaignEvent";
  } | {
    /**
     * @generated from field: api.commons.audit.OmnichannelDailyProjectReportEvent omnichannel_daily_project_report_event = 302;
     */
    value: OmnichannelDailyProjectReportEvent;
    case: "omnichannelDailyProjectReportEvent";
  } | {
    /**
     * @generated from field: api.commons.audit.OmnichannelDailyConversationReportEvent omnichannel_daily_conversation_report_event = 303;
     */
    value: OmnichannelDailyConversationReportEvent;
    case: "omnichannelDailyConversationReportEvent";
  } | {
    /**
     * agent assign conversation event
     *
     * @generated from field: api.commons.audit.OmnichannelAgentAssignConversationEvent omnichannel_agent_assign_conversation_event = 305;
     */
    value: OmnichannelAgentAssignConversationEvent;
    case: "omnichannelAgentAssignConversationEvent";
  } | {
    /**
     * agent unassign conversation event
     *
     * @generated from field: api.commons.audit.OmnichannelAgentUnassignConversationEvent omnichannel_agent_unassign_conversation_event = 306;
     */
    value: OmnichannelAgentUnassignConversationEvent;
    case: "omnichannelAgentUnassignConversationEvent";
  } | {
    /**
     * agent reassign conversation event
     *
     * @generated from field: api.commons.audit.OmnichannelAgentReassignConversationEvent omnichannel_agent_reassign_conversation_event = 307;
     */
    value: OmnichannelAgentReassignConversationEvent;
    case: "omnichannelAgentReassignConversationEvent";
  } | {
    /**
     * T10 event
     *
     * @generated from field: api.commons.audit.OmnichannelT10Event omnichannel_t10_event = 308;
     */
    value: OmnichannelT10Event;
    case: "omnichannelT10Event";
  } | {
    /**
     * customer sent a text message event
     *
     * @generated from field: api.commons.audit.OmnichannelCustomerTextMessageEvent omnichannel_customer_text_Message_event = 309;
     */
    value: OmnichannelCustomerTextMessageEvent;
    case: "omnichannelCustomerTextMessageEvent";
  } | {
    /**
     * agent sent a text message event
     *
     * @generated from field: api.commons.audit.OmnichannelAgentTextMessageEvent omnichannel_agent_text_message_event = 310;
     */
    value: OmnichannelAgentTextMessageEvent;
    case: "omnichannelAgentTextMessageEvent";
  } | {
    /**
     * finish wrap up event
     *
     * @generated from field: api.commons.audit.OmnichannelFinishWrapUpEvent omnichannel_finish_wrap_up_event = 311;
     */
    value: OmnichannelFinishWrapUpEvent;
    case: "omnichannelFinishWrapUpEvent";
  } | {
    /**
     * conversation closes and moves to wrap up event
     *
     * @generated from field: api.commons.audit.OmnichannelBeginWrapUpEvent omnichannel_begin_wrap_up_event = 312;
     */
    value: OmnichannelBeginWrapUpEvent;
    case: "omnichannelBeginWrapUpEvent";
  } | {
    /**
     * t11 timer went off event
     *
     * @generated from field: api.commons.audit.OmnichannelT11Event omnichannel_t11_event = 313;
     */
    value: OmnichannelT11Event;
    case: "omnichannelT11Event";
  } | {
    /**
     * create conversation when customer sends initial message and T1 starts
     *
     * @generated from field: api.commons.audit.OmnichannelCreateConversationEvent omnichannel_create_conversation_event = 314;
     */
    value: OmnichannelCreateConversationEvent;
    case: "omnichannelCreateConversationEvent";
  } | {
    /**
     * agent suspended the conversation event
     *
     * @generated from field: api.commons.audit.OmnichannelAgentSuspendEvent omnichannel_agent_suspend_event = 315;
     */
    value: OmnichannelAgentSuspendEvent;
    case: "omnichannelAgentSuspendEvent";
  } | {
    /**
     * close conversation
     *
     * @generated from field: api.commons.audit.OmnichannelCloseConversationEvent omnichannel_close_conversation_event = 322;
     */
    value: OmnichannelCloseConversationEvent;
    case: "omnichannelCloseConversationEvent";
  } | {
    /**
     * manager sent a text message event
     *
     * @generated from field: api.commons.audit.OmnichannelManagerTextMessageEvent omnichannel_manager_text_message_event = 332;
     */
    value: OmnichannelManagerTextMessageEvent;
    case: "omnichannelManagerTextMessageEvent";
  } | {
    /**
     * update campaign event
     *
     * @generated from field: api.commons.audit.OmnichannelUpdateCampaignEvent omnichannel_update_campaign_event = 330;
     */
    value: OmnichannelUpdateCampaignEvent;
    case: "omnichannelUpdateCampaignEvent";
  } | {
    /**
     * set conversation collected data details
     *
     * @generated from field: api.commons.audit.OmnichannelSetConversationCollectedDataEvent omnichannel_set_conversation_collected_data_event = 331;
     */
    value: OmnichannelSetConversationCollectedDataEvent;
    case: "omnichannelSetConversationCollectedDataEvent";
  } | {
    /**
     * complete campaign event
     *
     * @generated from field: api.commons.audit.OmnichannelCompleteCampaignEvent omnichannel_complete_campaign_event = 348;
     */
    value: OmnichannelCompleteCampaignEvent;
    case: "omnichannelCompleteCampaignEvent";
  } | {
    /**
     * archive campaign event
     *
     * @generated from field: api.commons.audit.OmnichannelArchiveCampaignEvent omnichannel_archive_campaign_event = 333;
     */
    value: OmnichannelArchiveCampaignEvent;
    case: "omnichannelArchiveCampaignEvent";
  } | {
    /**
     * pause campaign event
     *
     * @generated from field: api.commons.audit.OmnichannelPauseCampaignEvent omnichannel_pause_campaign_event = 334;
     */
    value: OmnichannelPauseCampaignEvent;
    case: "omnichannelPauseCampaignEvent";
  } | {
    /**
     * resume campaign event
     *
     * @generated from field: api.commons.audit.OmnichannelResumeCampaignEvent omnichannel_resume_campaign_event = 335;
     */
    value: OmnichannelResumeCampaignEvent;
    case: "omnichannelResumeCampaignEvent";
  } | {
    /**
     * start campaign event
     *
     * @generated from field: api.commons.audit.OmnichannelStartCampaignEvent omnichannel_start_campaign_event = 336;
     */
    value: OmnichannelStartCampaignEvent;
    case: "omnichannelStartCampaignEvent";
  } | {
    /**
     * schedule module event
     *
     * @generated from field: api.commons.audit.OmnichannelScheduleModuleEvent omnichannel_schedule_module_event = 337;
     */
    value: OmnichannelScheduleModuleEvent;
    case: "omnichannelScheduleModuleEvent";
  } | {
    /**
     * start module event
     *
     * @generated from field: api.commons.audit.OmnichannelStartModuleEvent omnichannel_start_module_event = 338;
     */
    value: OmnichannelStartModuleEvent;
    case: "omnichannelStartModuleEvent";
  } | {
    /**
     * pause module event
     *
     * @generated from field: api.commons.audit.OmnichannelPauseModuleEvent omnichannel_pause_module_event = 339;
     */
    value: OmnichannelPauseModuleEvent;
    case: "omnichannelPauseModuleEvent";
  } | {
    /**
     * resume module event
     *
     * @generated from field: api.commons.audit.OmnichannelResumeModuleEvent omnichannel_resume_module_event = 340;
     */
    value: OmnichannelResumeModuleEvent;
    case: "omnichannelResumeModuleEvent";
  } | {
    /**
     * error module event
     *
     * @generated from field: api.commons.audit.OmnichannelErrorModuleEvent omnichannel_error_module_event = 341;
     */
    value: OmnichannelErrorModuleEvent;
    case: "omnichannelErrorModuleEvent";
  } | {
    /**
     * success module event
     *
     * @generated from field: api.commons.audit.OmnichannelSuccessModuleEvent omnichannel_success_module_event = 342;
     */
    value: OmnichannelSuccessModuleEvent;
    case: "omnichannelSuccessModuleEvent";
  } | {
    /**
     * fail module event
     *
     * @generated from field: api.commons.audit.OmnichannelFailModuleEvent omnichannel_fail_module_event = 343;
     */
    value: OmnichannelFailModuleEvent;
    case: "omnichannelFailModuleEvent";
  } | {
    /**
     * complete module event
     *
     * @generated from field: api.commons.audit.OmnichannelCompleteModuleEvent omnichannel_complete_module_event = 344;
     */
    value: OmnichannelCompleteModuleEvent;
    case: "omnichannelCompleteModuleEvent";
  } | {
    /**
     * archive module event
     *
     * @generated from field: api.commons.audit.OmnichannelArchiveModuleEvent omnichannel_archive_module_event = 345;
     */
    value: OmnichannelArchiveModuleEvent;
    case: "omnichannelArchiveModuleEvent";
  } | {
    /**
     * update module event
     *
     * @generated from field: api.commons.audit.OmnichannelUpdateModuleEvent omnichannel_update_module_event = 346;
     */
    value: OmnichannelUpdateModuleEvent;
    case: "omnichannelUpdateModuleEvent";
  } | {
    /**
     *  SmsMessageSent module event
     *
     * @generated from field: api.commons.audit.OmnichannelSmsMessageSentModuleEvent omnichannel_add_sms_message_sent_module_event = 347;
     */
    value: OmnichannelSmsMessageSentModuleEvent;
    case: "omnichannelAddSmsMessageSentModuleEvent";
  } | {
    /**
     * ModuleInitialReply
     *
     * @generated from field: api.commons.audit.OmnichannelModuleInitialReplyEvent omnichannel_module_initial_reply_event = 349;
     */
    value: OmnichannelModuleInitialReplyEvent;
    case: "omnichannelModuleInitialReplyEvent";
  } | {
    /**
     * a task message was sent for a campaign
     *
     * @generated from field: api.commons.audit.OmnichannelTaskMessageSentEvent omnichannel_task_message_sent_event = 350;
     */
    value: OmnichannelTaskMessageSentEvent;
    case: "omnichannelTaskMessageSentEvent";
  } | {
    /**
     * a connected inbox poll event
     *
     * @generated from field: api.commons.audit.OmnichannelConnectedInboxPollEvent omnichannel_connected_inbox_poll_event = 351;
     */
    value: OmnichannelConnectedInboxPollEvent;
    case: "omnichannelConnectedInboxPollEvent";
  } | {
    /**
     * an event for when a connected inbox is created
     *
     * @generated from field: api.commons.audit.OmnichannelConnectedInboxCreatedEvent omnichannel_connected_inbox_created_event = 352;
     */
    value: OmnichannelConnectedInboxCreatedEvent;
    case: "omnichannelConnectedInboxCreatedEvent";
  } | {
    /**
     * an event for when the message units for an agent omni message were calculated
     *
     * @generated from field: api.commons.audit.OmnichannelAgentMessageUnitsEvent omnichannel_agent_message_units_event = 353;
     */
    value: OmnichannelAgentMessageUnitsEvent;
    case: "omnichannelAgentMessageUnitsEvent";
  } | {
    /**
     * an event for when the message units for a manager omni message were calculated
     *
     * @generated from field: api.commons.audit.OmnichannelManagerMessageUnitsEvent omnichannel_manager_message_units_event = 354;
     */
    value: OmnichannelManagerMessageUnitsEvent;
    case: "omnichannelManagerMessageUnitsEvent";
  } | {
    /**
     * an event for when the message units for a customer omni message were calculated
     *
     * @generated from field: api.commons.audit.OmnichannelCustomerMessageUnitsEvent omnichannel_customer_message_units_event = 355;
     */
    value: OmnichannelCustomerMessageUnitsEvent;
    case: "omnichannelCustomerMessageUnitsEvent";
  } | {
    /**
     * an event for when the message units for a system omni message were calculated
     *
     * @generated from field: api.commons.audit.OmnichannelSystemMessageUnitsEvent omnichannel_system_message_units_event = 356;
     */
    value: OmnichannelSystemMessageUnitsEvent;
    case: "omnichannelSystemMessageUnitsEvent";
  } | {
    /**
     * an event for when a payment link is sent
     *
     * @generated from field: api.commons.audit.OmnichannelPaymentLinkSentEvent omnichannel_payment_link_sent_event = 357;
     */
    value: OmnichannelPaymentLinkSentEvent;
    case: "omnichannelPaymentLinkSentEvent";
  } | {
    /**
     * / Asm events 400
     * agent logged into asm event
     *
     * @generated from field: api.commons.audit.AsmAgentLoginEvent asm_agent_login_event = 400;
     */
    value: AsmAgentLoginEvent;
    case: "asmAgentLoginEvent";
  } | {
    /**
     * agent opens voice event
     *
     * @generated from field: api.commons.audit.AsmOpenVoiceEvent asm_open_voice_event = 401;
     */
    value: AsmOpenVoiceEvent;
    case: "asmOpenVoiceEvent";
  } | {
    /**
     * agent logs into omni event
     *
     * @generated from field: api.commons.audit.AsmOpenOmniAgentEvent asm_open_omni_agent_event = 402;
     */
    value: AsmOpenOmniAgentEvent;
    case: "asmOpenOmniAgentEvent";
  } | {
    /**
     * agent activates conversation event
     *
     * @generated from field: api.commons.audit.AsmActivateConversationEvent asm_activate_conversation_event = 403;
     */
    value: AsmActivateConversationEvent;
    case: "asmActivateConversationEvent";
  } | {
    /**
     * agent deactivates a conversation event
     *
     * @generated from field: api.commons.audit.AsmDeactivateConversationEvent asm_deactivate_conversation_event = 404;
     */
    value: AsmDeactivateConversationEvent;
    case: "asmDeactivateConversationEvent";
  } | {
    /**
     * agent's state changed event
     *
     * @generated from field: api.commons.audit.AsmAgentStateChangedEvent asm_agent_state_changed_event = 405;
     */
    value: AsmAgentStateChangedEvent;
    case: "asmAgentStateChangedEvent";
  } | {
    /**
     * agent logged out of asm event
     *
     * @generated from field: api.commons.audit.AsmAgentLogoutEvent asm_agent_logout_event = 406;
     */
    value: AsmAgentLogoutEvent;
    case: "asmAgentLogoutEvent";
  } | {
    /**
     * asm pause event
     *
     * @generated from field: api.commons.audit.AsmPauseEvent asm_pause_event = 407;
     */
    value: AsmPauseEvent;
    case: "asmPauseEvent";
  } | {
    /**
     * asm resume event
     *
     * @generated from field: api.commons.audit.AsmResumeEvent asm_resume_event = 408;
     */
    value: AsmResumeEvent;
    case: "asmResumeEvent";
  } | {
    /**
     * asm conversation pulled event
     *
     * @generated from field: api.commons.audit.AsmConversationPulledEvent asm_conversation_pulled_event = 409;
     */
    value: AsmConversationPulledEvent;
    case: "asmConversationPulledEvent";
  } | {
    /**
     * Scorecards events class 500
     * question library question created
     *
     * @generated from field: api.commons.audit.ScorecardsCreateQuestionEvent scorecards_create_question_event = 500;
     */
    value: ScorecardsCreateQuestionEvent;
    case: "scorecardsCreateQuestionEvent";
  } | {
    /**
     * question library question updated
     *
     * @generated from field: api.commons.audit.ScorecardsUpdateQuestionEvent scorecards_update_question_event = 501;
     */
    value: ScorecardsUpdateQuestionEvent;
    case: "scorecardsUpdateQuestionEvent";
  } | {
    /**
     * question library question deleted
     *
     * @generated from field: api.commons.audit.ScorecardsDeleteQuestionEvent scorecards_delete_question_event = 502;
     */
    value: ScorecardsDeleteQuestionEvent;
    case: "scorecardsDeleteQuestionEvent";
  } | {
    /**
     * scorecard library scorecard created
     *
     * @generated from field: api.commons.audit.ScorecardsCreateScorecardEvent scorecards_create_scorecard_event = 503;
     */
    value: ScorecardsCreateScorecardEvent;
    case: "scorecardsCreateScorecardEvent";
  } | {
    /**
     * scorecard library scorecard updated
     *
     * @generated from field: api.commons.audit.ScorecardsUpdateScorecardEvent scorecards_update_scorecard_event = 504;
     */
    value: ScorecardsUpdateScorecardEvent;
    case: "scorecardsUpdateScorecardEvent";
  } | {
    /**
     * scorecard library scorecard deleted
     *
     * @generated from field: api.commons.audit.ScorecardsDeleteScorecardEvent scorecards_delete_scorecard_event = 505;
     */
    value: ScorecardsDeleteScorecardEvent;
    case: "scorecardsDeleteScorecardEvent";
  } | {
    /**
     * scorecard library scorecard cloned
     *
     * @generated from field: api.commons.audit.ScorecardsCloneScorecardEvent scorecards_clone_scorecard_event = 506;
     */
    value: ScorecardsCloneScorecardEvent;
    case: "scorecardsCloneScorecardEvent";
  } | {
    /**
     * evaluation library evaluation created
     *
     * @generated from field: api.commons.audit.ScorecardsCreateEvaluationEvent scorecards_create_evaluation_event = 507;
     */
    value: ScorecardsCreateEvaluationEvent;
    case: "scorecardsCreateEvaluationEvent";
  } | {
    /**
     * evaluation library evaluation deleted
     *
     * @generated from field: api.commons.audit.ScorecardsDeleteEvaluationEvent scorecards_delete_evaluation_event = 508;
     */
    value: ScorecardsDeleteEvaluationEvent;
    case: "scorecardsDeleteEvaluationEvent";
  } | {
    /**
     * section library section created
     *
     * @generated from field: api.commons.audit.ScorecardsCreateSectionEvent scorecards_create_section_event = 509;
     */
    value: ScorecardsCreateSectionEvent;
    case: "scorecardsCreateSectionEvent";
  } | {
    /**
     * section library section updated
     *
     * @generated from field: api.commons.audit.ScorecardsUpdateSectionEvent scorecards_update_section_event = 510;
     */
    value: ScorecardsUpdateSectionEvent;
    case: "scorecardsUpdateSectionEvent";
  } | {
    /**
     * section library section deleted
     *
     * @generated from field: api.commons.audit.ScorecardsDeleteSectionEvent scorecards_delete_section_event = 511;
     */
    value: ScorecardsDeleteSectionEvent;
    case: "scorecardsDeleteSectionEvent";
  } | {
    /**
     * category library category created
     *
     * @generated from field: api.commons.audit.ScorecardsCreateCategoryEvent scorecards_create_category_event = 512;
     */
    value: ScorecardsCreateCategoryEvent;
    case: "scorecardsCreateCategoryEvent";
  } | {
    /**
     * category library category updated
     *
     * @generated from field: api.commons.audit.ScorecardsUpdateCategoryEvent scorecards_update_category_event = 513;
     */
    value: ScorecardsUpdateCategoryEvent;
    case: "scorecardsUpdateCategoryEvent";
  } | {
    /**
     * category library category deleted
     *
     * @generated from field: api.commons.audit.ScorecardsDeleteCategoryEvent scorecards_delete_category_event = 514;
     */
    value: ScorecardsDeleteCategoryEvent;
    case: "scorecardsDeleteCategoryEvent";
  } | {
    /**
     * evaluation question created
     *
     * @generated from field: api.commons.audit.ScorecardsCreateEvaluationQuestionEvent scorecards_create_evaluation_question_event = 515;
     */
    value: ScorecardsCreateEvaluationQuestionEvent;
    case: "scorecardsCreateEvaluationQuestionEvent";
  } | {
    /**
     * evaluation question updated
     *
     * @generated from field: api.commons.audit.ScorecardsUpdateEvaluationQuestionEvent scorecards_update_evaluation_question_event = 516;
     */
    value: ScorecardsUpdateEvaluationQuestionEvent;
    case: "scorecardsUpdateEvaluationQuestionEvent";
  } | {
    /**
     * evaluation question deleted
     *
     * @generated from field: api.commons.audit.ScorecardsDeleteEvaluationQuestionEvent scorecards_delete_evaluation_question_event = 517;
     */
    value: ScorecardsDeleteEvaluationQuestionEvent;
    case: "scorecardsDeleteEvaluationQuestionEvent";
  } | {
    /**
     * scorecard question library scorecard question created
     *
     * @generated from field: api.commons.audit.ScorecardsCreateScorecardQuestionEvent scorecards_create_scorecard_question_event = 518;
     */
    value: ScorecardsCreateScorecardQuestionEvent;
    case: "scorecardsCreateScorecardQuestionEvent";
  } | {
    /**
     * scorecard question library scorecard question updated
     *
     * @generated from field: api.commons.audit.ScorecardsUpdateScorecardQuestionEvent scorecards_update_scorecard_question_event = 519;
     */
    value: ScorecardsUpdateScorecardQuestionEvent;
    case: "scorecardsUpdateScorecardQuestionEvent";
  } | {
    /**
     * scorecard question library scorecard question deleted
     *
     * @generated from field: api.commons.audit.ScorecardsDeleteScorecardQuestionEvent scorecards_delete_scorecard_question_event = 520;
     */
    value: ScorecardsDeleteScorecardQuestionEvent;
    case: "scorecardsDeleteScorecardQuestionEvent";
  } | {
    /**
     * auto evaluation library auto evaluation created
     *
     * @generated from field: api.commons.audit.ScorecardsCreateAutoEvaluationEvent scorecards_create_auto_evaluation_event = 521;
     */
    value: ScorecardsCreateAutoEvaluationEvent;
    case: "scorecardsCreateAutoEvaluationEvent";
  } | {
    /**
     * evaluation library evaluation updated
     *
     * @generated from field: api.commons.audit.ScorecardsUpdateEvaluationEvent scorecards_update_evaluation_event = 522;
     */
    value: ScorecardsUpdateEvaluationEvent;
    case: "scorecardsUpdateEvaluationEvent";
  } | {
    /**
     * Tickets Events
     * EDIT update event
     *
     * @generated from field: api.commons.audit.TicketEvent ticket_event = 601;
     */
    value: TicketEvent;
    case: "ticketEvent";
  } | {
    /**
     * Compliance events
     * compliance rnd query event
     *
     * @generated from field: api.commons.audit.ComplianceRndQueryEvent compliance_rnd_query_event = 700;
     */
    value: ComplianceRndQueryEvent;
    case: "complianceRndQueryEvent";
  } | {
    /**
     * compliance rnd query cached event
     *
     * @generated from field: api.commons.audit.ComplianceRndQueryEvent compliance_rnd_query_cached_event = 701;
     */
    value: ComplianceRndQueryEvent;
    case: "complianceRndQueryCachedEvent";
  } | {
    /**
     * Agent Training events class 800
     * learning opportunity created event
     *
     * @generated from field: api.commons.audit.AgentTrainingCreateLearningOpportunityEvent agent_training_create_learning_opportunity_event = 800;
     */
    value: AgentTrainingCreateLearningOpportunityEvent;
    case: "agentTrainingCreateLearningOpportunityEvent";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<AuditEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "api.commons.audit.AuditEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuditEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuditEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuditEvent;

  static equals(a: AuditEvent | PlainMessage<AuditEvent> | undefined, b: AuditEvent | PlainMessage<AuditEvent> | undefined): boolean;
}

