// @generated by protoc-gen-es v1.7.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/audit.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { EventType } from "./event_types_pb.js";
import { DummyEvent } from "./events_pb.js";
import { VanaBillingReportEvent, VanaFlagEvent, VanaFlagReviewEvent, VanaFlagSummaryEvent, VanaPhraseCorrectionEvent } from "./vana_events_pb.js";
import { OmnichannelAgentAssignConversationEvent, OmnichannelAgentMessageUnitsEvent, OmnichannelAgentReassignConversationEvent, OmnichannelAgentSuspendEvent, OmnichannelAgentTextMessageEvent, OmnichannelAgentUnassignConversationEvent, OmnichannelArchiveCampaignEvent, OmnichannelArchiveModuleEvent, OmnichannelBeginWrapUpEvent, OmnichannelCloseConversationEvent, OmnichannelCompleteCampaignEvent, OmnichannelCompleteModuleEvent, OmnichannelConnectedInboxCreatedEvent, OmnichannelConnectedInboxPollEvent, OmnichannelCreateCampaignEvent, OmnichannelCreateConversationEvent, OmnichannelCreateProjectEvent, OmnichannelCustomerMessageUnitsEvent, OmnichannelCustomerTextMessageEvent, OmnichannelDailyConversationReportEvent, OmnichannelDailyProjectReportEvent, OmnichannelErrorModuleEvent, OmnichannelFailModuleEvent, OmnichannelFinishWrapUpEvent, OmnichannelManagerMessageUnitsEvent, OmnichannelManagerTextMessageEvent, OmnichannelManualApproveTaskAcceptedEvent, OmnichannelManualApproveTaskRejectedEvent, OmnichannelManualApproveTaskRequeueEvent, OmnichannelManualApproveTaskTimeoutEvent, OmnichannelModuleInitialReplyEvent, OmnichannelPauseCampaignEvent, OmnichannelPauseModuleEvent, OmnichannelPaymentLinkSentEvent, OmnichannelResumeCampaignEvent, OmnichannelResumeModuleEvent, OmnichannelScheduleModuleEvent, OmnichannelSetConversationCollectedDataEvent, OmnichannelSmsMessageSentModuleEvent, OmnichannelStartCampaignEvent, OmnichannelStartModuleEvent, OmnichannelSuccessModuleEvent, OmnichannelSystemMessageUnitsEvent, OmnichannelT10Event, OmnichannelT11Event, OmnichannelTaskMessageSentEvent, OmnichannelUpdateCampaignEvent, OmnichannelUpdateModuleEvent } from "./omnichannel_events_pb.js";
import { AsmActivateConversationEvent, AsmAgentLoginEvent, AsmAgentLogoutEvent, AsmAgentStateChangedEvent, AsmConversationPulledEvent, AsmDeactivateConversationEvent, AsmOpenOmniAgentEvent, AsmOpenVoiceEvent, AsmPauseEvent, AsmResumeEvent } from "./asm_events_pb.js";
import { ScorecardsCloneScorecardEvent, ScorecardsCreateAutoEvaluationEvent, ScorecardsCreateCategoryEvent, ScorecardsCreateEvaluationEvent, ScorecardsCreateEvaluationQuestionEvent, ScorecardsCreateQuestionEvent, ScorecardsCreateScorecardEvent, ScorecardsCreateScorecardQuestionEvent, ScorecardsCreateSectionEvent, ScorecardsDeleteCategoryEvent, ScorecardsDeleteEvaluationEvent, ScorecardsDeleteEvaluationQuestionEvent, ScorecardsDeleteQuestionEvent, ScorecardsDeleteScorecardEvent, ScorecardsDeleteScorecardQuestionEvent, ScorecardsDeleteSectionEvent, ScorecardsUpdateCategoryEvent, ScorecardsUpdateEvaluationEvent, ScorecardsUpdateEvaluationQuestionEvent, ScorecardsUpdateQuestionEvent, ScorecardsUpdateScorecardEvent, ScorecardsUpdateScorecardQuestionEvent, ScorecardsUpdateSectionEvent } from "./scorecards_events_pb.js";
import { TicketEvent } from "./tickets_events_pb.js";
import { ComplianceRndQueryEvent } from "./compliance_events_pb.js";
import { AgentTrainingCreateLearningOpportunityEvent } from "./agent_training_events_pb.js";
import { LMSPipelineFailureEvent } from "./lms_events_pb.js";
import { BillingCommitBillingPlanEvent, BillingCreateBillingPlanEvent, BillingCreateInvoiceEvent, BillingCreateRateDefinitionEvent, BillingDeleteBillingPlanEvent, BillingDeleteInvoiceEvent, BillingDeleteRateDefinitionEvent, BillingExportInvoiceEvent, BillingUpdateBillingPlanEvent, BillingUpdateInvoiceEvent, BillingUpdateRateDefinitionEvent } from "./billing_events_pb.js";

/**
 * This represents a generic audit event that is sent to the audit service
 *
 * @generated from message api.commons.audit.AuditEvent
 */
export const AuditEvent = proto3.makeMessageType(
  "api.commons.audit.AuditEvent",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "region_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "cluster_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "event_time", kind: "message", T: Timestamp },
    { no: 5, name: "audit_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "event_type", kind: "enum", T: proto3.getEnumType(EventType) },
    { no: 100, name: "_dummy_event", kind: "message", T: DummyEvent, oneof: "event" },
    { no: 200, name: "vana_flag_event", kind: "message", T: VanaFlagEvent, oneof: "event" },
    { no: 201, name: "vana_flag_review_event", kind: "message", T: VanaFlagReviewEvent, oneof: "event" },
    { no: 202, name: "vana_billing_report_event", kind: "message", T: VanaBillingReportEvent, oneof: "event" },
    { no: 203, name: "vana_flag_summary_event", kind: "message", T: VanaFlagSummaryEvent, oneof: "event" },
    { no: 204, name: "vana_phrase_correction_event", kind: "message", T: VanaPhraseCorrectionEvent, oneof: "event" },
    { no: 300, name: "omnichannel_create_project_event", kind: "message", T: OmnichannelCreateProjectEvent, oneof: "event" },
    { no: 301, name: "omnichannel_create_campaign_event", kind: "message", T: OmnichannelCreateCampaignEvent, oneof: "event" },
    { no: 302, name: "omnichannel_daily_project_report_event", kind: "message", T: OmnichannelDailyProjectReportEvent, oneof: "event" },
    { no: 303, name: "omnichannel_daily_conversation_report_event", kind: "message", T: OmnichannelDailyConversationReportEvent, oneof: "event" },
    { no: 305, name: "omnichannel_agent_assign_conversation_event", kind: "message", T: OmnichannelAgentAssignConversationEvent, oneof: "event" },
    { no: 306, name: "omnichannel_agent_unassign_conversation_event", kind: "message", T: OmnichannelAgentUnassignConversationEvent, oneof: "event" },
    { no: 307, name: "omnichannel_agent_reassign_conversation_event", kind: "message", T: OmnichannelAgentReassignConversationEvent, oneof: "event" },
    { no: 308, name: "omnichannel_t10_event", kind: "message", T: OmnichannelT10Event, oneof: "event" },
    { no: 309, name: "omnichannel_customer_text_Message_event", kind: "message", T: OmnichannelCustomerTextMessageEvent, oneof: "event" },
    { no: 310, name: "omnichannel_agent_text_message_event", kind: "message", T: OmnichannelAgentTextMessageEvent, oneof: "event" },
    { no: 311, name: "omnichannel_finish_wrap_up_event", kind: "message", T: OmnichannelFinishWrapUpEvent, oneof: "event" },
    { no: 312, name: "omnichannel_begin_wrap_up_event", kind: "message", T: OmnichannelBeginWrapUpEvent, oneof: "event" },
    { no: 313, name: "omnichannel_t11_event", kind: "message", T: OmnichannelT11Event, oneof: "event" },
    { no: 314, name: "omnichannel_create_conversation_event", kind: "message", T: OmnichannelCreateConversationEvent, oneof: "event" },
    { no: 315, name: "omnichannel_agent_suspend_event", kind: "message", T: OmnichannelAgentSuspendEvent, oneof: "event" },
    { no: 322, name: "omnichannel_close_conversation_event", kind: "message", T: OmnichannelCloseConversationEvent, oneof: "event" },
    { no: 332, name: "omnichannel_manager_text_message_event", kind: "message", T: OmnichannelManagerTextMessageEvent, oneof: "event" },
    { no: 330, name: "omnichannel_update_campaign_event", kind: "message", T: OmnichannelUpdateCampaignEvent, oneof: "event" },
    { no: 331, name: "omnichannel_set_conversation_collected_data_event", kind: "message", T: OmnichannelSetConversationCollectedDataEvent, oneof: "event" },
    { no: 348, name: "omnichannel_complete_campaign_event", kind: "message", T: OmnichannelCompleteCampaignEvent, oneof: "event" },
    { no: 333, name: "omnichannel_archive_campaign_event", kind: "message", T: OmnichannelArchiveCampaignEvent, oneof: "event" },
    { no: 334, name: "omnichannel_pause_campaign_event", kind: "message", T: OmnichannelPauseCampaignEvent, oneof: "event" },
    { no: 335, name: "omnichannel_resume_campaign_event", kind: "message", T: OmnichannelResumeCampaignEvent, oneof: "event" },
    { no: 336, name: "omnichannel_start_campaign_event", kind: "message", T: OmnichannelStartCampaignEvent, oneof: "event" },
    { no: 337, name: "omnichannel_schedule_module_event", kind: "message", T: OmnichannelScheduleModuleEvent, oneof: "event" },
    { no: 338, name: "omnichannel_start_module_event", kind: "message", T: OmnichannelStartModuleEvent, oneof: "event" },
    { no: 339, name: "omnichannel_pause_module_event", kind: "message", T: OmnichannelPauseModuleEvent, oneof: "event" },
    { no: 340, name: "omnichannel_resume_module_event", kind: "message", T: OmnichannelResumeModuleEvent, oneof: "event" },
    { no: 341, name: "omnichannel_error_module_event", kind: "message", T: OmnichannelErrorModuleEvent, oneof: "event" },
    { no: 342, name: "omnichannel_success_module_event", kind: "message", T: OmnichannelSuccessModuleEvent, oneof: "event" },
    { no: 343, name: "omnichannel_fail_module_event", kind: "message", T: OmnichannelFailModuleEvent, oneof: "event" },
    { no: 344, name: "omnichannel_complete_module_event", kind: "message", T: OmnichannelCompleteModuleEvent, oneof: "event" },
    { no: 345, name: "omnichannel_archive_module_event", kind: "message", T: OmnichannelArchiveModuleEvent, oneof: "event" },
    { no: 346, name: "omnichannel_update_module_event", kind: "message", T: OmnichannelUpdateModuleEvent, oneof: "event" },
    { no: 347, name: "omnichannel_add_sms_message_sent_module_event", kind: "message", T: OmnichannelSmsMessageSentModuleEvent, oneof: "event" },
    { no: 349, name: "omnichannel_module_initial_reply_event", kind: "message", T: OmnichannelModuleInitialReplyEvent, oneof: "event" },
    { no: 350, name: "omnichannel_task_message_sent_event", kind: "message", T: OmnichannelTaskMessageSentEvent, oneof: "event" },
    { no: 351, name: "omnichannel_connected_inbox_poll_event", kind: "message", T: OmnichannelConnectedInboxPollEvent, oneof: "event" },
    { no: 352, name: "omnichannel_connected_inbox_created_event", kind: "message", T: OmnichannelConnectedInboxCreatedEvent, oneof: "event" },
    { no: 353, name: "omnichannel_agent_message_units_event", kind: "message", T: OmnichannelAgentMessageUnitsEvent, oneof: "event" },
    { no: 354, name: "omnichannel_manager_message_units_event", kind: "message", T: OmnichannelManagerMessageUnitsEvent, oneof: "event" },
    { no: 355, name: "omnichannel_customer_message_units_event", kind: "message", T: OmnichannelCustomerMessageUnitsEvent, oneof: "event" },
    { no: 356, name: "omnichannel_system_message_units_event", kind: "message", T: OmnichannelSystemMessageUnitsEvent, oneof: "event" },
    { no: 357, name: "omnichannel_payment_link_sent_event", kind: "message", T: OmnichannelPaymentLinkSentEvent, oneof: "event" },
    { no: 358, name: "omnichannel_manual_approve_task_accepted_event", kind: "message", T: OmnichannelManualApproveTaskAcceptedEvent, oneof: "event" },
    { no: 359, name: "omnichannel_manual_approve_task_rejected_event", kind: "message", T: OmnichannelManualApproveTaskRejectedEvent, oneof: "event" },
    { no: 360, name: "omnichannel_manual_approve_task_timeout_event", kind: "message", T: OmnichannelManualApproveTaskTimeoutEvent, oneof: "event" },
    { no: 361, name: "omnichannel_manual_approve_task_requeue_event", kind: "message", T: OmnichannelManualApproveTaskRequeueEvent, oneof: "event" },
    { no: 400, name: "asm_agent_login_event", kind: "message", T: AsmAgentLoginEvent, oneof: "event" },
    { no: 401, name: "asm_open_voice_event", kind: "message", T: AsmOpenVoiceEvent, oneof: "event" },
    { no: 402, name: "asm_open_omni_agent_event", kind: "message", T: AsmOpenOmniAgentEvent, oneof: "event" },
    { no: 403, name: "asm_activate_conversation_event", kind: "message", T: AsmActivateConversationEvent, oneof: "event" },
    { no: 404, name: "asm_deactivate_conversation_event", kind: "message", T: AsmDeactivateConversationEvent, oneof: "event" },
    { no: 405, name: "asm_agent_state_changed_event", kind: "message", T: AsmAgentStateChangedEvent, oneof: "event" },
    { no: 406, name: "asm_agent_logout_event", kind: "message", T: AsmAgentLogoutEvent, oneof: "event" },
    { no: 407, name: "asm_pause_event", kind: "message", T: AsmPauseEvent, oneof: "event" },
    { no: 408, name: "asm_resume_event", kind: "message", T: AsmResumeEvent, oneof: "event" },
    { no: 409, name: "asm_conversation_pulled_event", kind: "message", T: AsmConversationPulledEvent, oneof: "event" },
    { no: 500, name: "scorecards_create_question_event", kind: "message", T: ScorecardsCreateQuestionEvent, oneof: "event" },
    { no: 501, name: "scorecards_update_question_event", kind: "message", T: ScorecardsUpdateQuestionEvent, oneof: "event" },
    { no: 502, name: "scorecards_delete_question_event", kind: "message", T: ScorecardsDeleteQuestionEvent, oneof: "event" },
    { no: 503, name: "scorecards_create_scorecard_event", kind: "message", T: ScorecardsCreateScorecardEvent, oneof: "event" },
    { no: 504, name: "scorecards_update_scorecard_event", kind: "message", T: ScorecardsUpdateScorecardEvent, oneof: "event" },
    { no: 505, name: "scorecards_delete_scorecard_event", kind: "message", T: ScorecardsDeleteScorecardEvent, oneof: "event" },
    { no: 506, name: "scorecards_clone_scorecard_event", kind: "message", T: ScorecardsCloneScorecardEvent, oneof: "event" },
    { no: 507, name: "scorecards_create_evaluation_event", kind: "message", T: ScorecardsCreateEvaluationEvent, oneof: "event" },
    { no: 508, name: "scorecards_delete_evaluation_event", kind: "message", T: ScorecardsDeleteEvaluationEvent, oneof: "event" },
    { no: 509, name: "scorecards_create_section_event", kind: "message", T: ScorecardsCreateSectionEvent, oneof: "event" },
    { no: 510, name: "scorecards_update_section_event", kind: "message", T: ScorecardsUpdateSectionEvent, oneof: "event" },
    { no: 511, name: "scorecards_delete_section_event", kind: "message", T: ScorecardsDeleteSectionEvent, oneof: "event" },
    { no: 512, name: "scorecards_create_category_event", kind: "message", T: ScorecardsCreateCategoryEvent, oneof: "event" },
    { no: 513, name: "scorecards_update_category_event", kind: "message", T: ScorecardsUpdateCategoryEvent, oneof: "event" },
    { no: 514, name: "scorecards_delete_category_event", kind: "message", T: ScorecardsDeleteCategoryEvent, oneof: "event" },
    { no: 515, name: "scorecards_create_evaluation_question_event", kind: "message", T: ScorecardsCreateEvaluationQuestionEvent, oneof: "event" },
    { no: 516, name: "scorecards_update_evaluation_question_event", kind: "message", T: ScorecardsUpdateEvaluationQuestionEvent, oneof: "event" },
    { no: 517, name: "scorecards_delete_evaluation_question_event", kind: "message", T: ScorecardsDeleteEvaluationQuestionEvent, oneof: "event" },
    { no: 518, name: "scorecards_create_scorecard_question_event", kind: "message", T: ScorecardsCreateScorecardQuestionEvent, oneof: "event" },
    { no: 519, name: "scorecards_update_scorecard_question_event", kind: "message", T: ScorecardsUpdateScorecardQuestionEvent, oneof: "event" },
    { no: 520, name: "scorecards_delete_scorecard_question_event", kind: "message", T: ScorecardsDeleteScorecardQuestionEvent, oneof: "event" },
    { no: 521, name: "scorecards_create_auto_evaluation_event", kind: "message", T: ScorecardsCreateAutoEvaluationEvent, oneof: "event" },
    { no: 522, name: "scorecards_update_evaluation_event", kind: "message", T: ScorecardsUpdateEvaluationEvent, oneof: "event" },
    { no: 601, name: "ticket_event", kind: "message", T: TicketEvent, oneof: "event" },
    { no: 700, name: "compliance_rnd_query_event", kind: "message", T: ComplianceRndQueryEvent, oneof: "event" },
    { no: 701, name: "compliance_rnd_query_cached_event", kind: "message", T: ComplianceRndQueryEvent, oneof: "event" },
    { no: 800, name: "agent_training_create_learning_opportunity_event", kind: "message", T: AgentTrainingCreateLearningOpportunityEvent, oneof: "event" },
    { no: 900, name: "lms_pipeline_failure_event", kind: "message", T: LMSPipelineFailureEvent, oneof: "event" },
    { no: 1000, name: "billing_commit_billing_plan_event", kind: "message", T: BillingCommitBillingPlanEvent, oneof: "event" },
    { no: 1001, name: "billing_create_billing_plan_event", kind: "message", T: BillingCreateBillingPlanEvent, oneof: "event" },
    { no: 1002, name: "billing_create_invoice_event", kind: "message", T: BillingCreateInvoiceEvent, oneof: "event" },
    { no: 1003, name: "billing_create_rate_definition_event", kind: "message", T: BillingCreateRateDefinitionEvent, oneof: "event" },
    { no: 1004, name: "billing_delete_billing_plan_event", kind: "message", T: BillingDeleteBillingPlanEvent, oneof: "event" },
    { no: 1005, name: "billing_delete_invoice_event", kind: "message", T: BillingDeleteInvoiceEvent, oneof: "event" },
    { no: 1006, name: "billing_delete_rate_definition_event", kind: "message", T: BillingDeleteRateDefinitionEvent, oneof: "event" },
    { no: 1007, name: "billing_export_invoice_event", kind: "message", T: BillingExportInvoiceEvent, oneof: "event" },
    { no: 1008, name: "billing_update_billing_plan_event", kind: "message", T: BillingUpdateBillingPlanEvent, oneof: "event" },
    { no: 1009, name: "billing_update_invoice_event", kind: "message", T: BillingUpdateInvoiceEvent, oneof: "event" },
    { no: 1010, name: "billing_update_rate_definition_event", kind: "message", T: BillingUpdateRateDefinitionEvent, oneof: "event" },
  ],
);

