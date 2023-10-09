// @generated by protoc-gen-es v1.3.3 with parameter "target=js+dts"
// @generated from file api/commons/audit/event_types.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * This enum will hold all application classes and sub-classes
 * Classes are encoded as hundreds (100, 200...) and sub-classes are the class ID + 0..99.
 *
 * EventType is the source for typing subscriptions, notifications, and any future
 * event use cases such auditing, billing, logging, etc. (anything triggered by audit).
 *
 * Follow the pattern of (product + event description), separated by underscores.
 *   - e.g. PRODUCT_EVENT_DESCRIPTION
 *
 * EventTypes that trigger notifications should read nicely as a system message header.
 *   - e.g Product Event Description
 *
 * @generated from enum api.commons.audit.EventType
 */
export const EventType = proto3.makeEnum(
  "api.commons.audit.EventType",
  [
    {no: 0, name: "DUMMY_APPLICATION"},
    {no: 1, name: "DUMMY_APPLICATION_STORAGE"},
    {no: 2, name: "DUMMY_APPLICATION_COMPUTE"},
    {no: 100, name: "VOICE_ANALYTICS"},
    {no: 101, name: "VOICE_ANALYTICS_FLAG_OCCURRENCE"},
    {no: 102, name: "VOICE_ANALYTICS_FLAG_NEEDS_REVIEW"},
    {no: 103, name: "VOICE_ANALYTICS_BILLING_REPORT"},
    {no: 104, name: "VOICE_ANALYTICS_FLAG_SUMMARY"},
    {no: 105, name: "VOICE_ANALYTICS_PHRASE_CORRECTION"},
    {no: 300, name: "OMNICHANNEL"},
    {no: 301, name: "OMNICHANNEL_PROJECT"},
    {no: 302, name: "OMNICHANNEL_CAMPAIGN"},
    {no: 303, name: "OMNICHANNEL_DAILY_PROJECT_REPORT"},
    {no: 304, name: "OMNICHANNEL_DAILY_CONVERSATION_REPORT"},
    {no: 305, name: "OMNICHANNEL_AGENT_ASSIGN_CONVERSATION"},
    {no: 306, name: "OMNICHANNEL_AGENT_UNASSIGN_CONVERSATION"},
    {no: 307, name: "OMNICHANNEL_AGENT_REASSIGN_CONVERSATION"},
    {no: 308, name: "OMNICHANNEL_T10"},
    {no: 309, name: "OMNICHANNEL_CUSTOMER_TEXT_MESSAGE"},
    {no: 310, name: "OMNICHANNEL_AGENT_TEXT_MESSAGE"},
    {no: 311, name: "OMNICHANNEL_FINISH_WRAP_UP"},
    {no: 312, name: "OMNICHANNEL_BEGIN_WRAP_UP"},
    {no: 313, name: "OMNICHANNEL_T11"},
    {no: 314, name: "OMNICHANNEL_CREATE_CONVERSATION"},
    {no: 315, name: "OMNICHANNEL_AGENT_SUSPEND"},
    {no: 316, name: "OMNICHANNEL_CLOSE_CONVERSATION"},
    {no: 332, name: "OMNICHANNEL_MANAGER_TEXT_MESSAGE"},
    {no: 330, name: "OMNICHANNEL_UPDATE_CAMPAIGN"},
    {no: 331, name: "OMNICHANNEL_SET_CONVERSATION_COLLECTED_DATA"},
    {no: 333, name: "OMNICHANNEL_ARCHIVE_CAMPAIGN"},
    {no: 334, name: "OMNICHANNEL_PAUSE_CAMPAIGN"},
    {no: 335, name: "OMNICHANNEL_RESUME_CAMPAIGN"},
    {no: 336, name: "OMNICHANNEL_START_CAMPAIGN"},
    {no: 337, name: "OMNICHANNEL_SCHEDULE_MODULE"},
    {no: 338, name: "OMNICHANNEL_START_MODULE"},
    {no: 339, name: "OMNICHANNEL_PAUSE_MODULE"},
    {no: 340, name: "OMNICHANNEL_RESUME_MODULE"},
    {no: 341, name: "OMNICHANNEL_ERROR_MODULE"},
    {no: 342, name: "OMNICHANNEL_SUCCESS_MODULE"},
    {no: 343, name: "OMNICHANNEL_FAIL_MODULE"},
    {no: 344, name: "OMNICHANNEL_COMPLETE_MODULE"},
    {no: 345, name: "OMNICHANNEL_ARCHIVE_MODULE"},
    {no: 346, name: "OMNICHANNEL_UPDATE_MODULE"},
    {no: 347, name: "OMNICHANNEL_MODULE_SMS_MESSAGE_SENT"},
    {no: 348, name: "OMNICHANNEL_COMPLETE_CAMPAIGN"},
    {no: 349, name: "OMNICHANNEL_MODULE_INITIAL_REPLY"},
    {no: 350, name: "OMNICHANNEL_TASK_MESSAGE_SENT"},
    {no: 351, name: "OMNICHANNEL_CONNECTED_INBOX_POLL"},
    {no: 352, name: "OMNICHANNEL_CONNECTED_INBOX_CREATED"},
    {no: 353, name: "OMNICHANNEL_AGENT_MESSAGE_UNITS"},
    {no: 354, name: "OMNICHANNEL_MANAGER_MESSAGE_UNITS"},
    {no: 355, name: "OMNICHANNEL_CUSTOMER_MESSAGE_UNITS"},
    {no: 356, name: "OMNICHANNEL_SYSTEM_MESSAGE_UNITS"},
    {no: 357, name: "OMNICHANNEL_PAYMENT_LINK_SENT"},
    {no: 400, name: "ASM_AGENT_LOGIN"},
    {no: 401, name: "ASM_OPEN_VOICE"},
    {no: 402, name: "ASM_OPEN_OMNI_AGENT"},
    {no: 403, name: "ASM_ACTIVATE_CONVERSATION"},
    {no: 404, name: "ASM_DEACTIVATE_CONVERSATION"},
    {no: 405, name: "ASM_AGENT_STATE_CHANGED"},
    {no: 406, name: "ASM_AGENT_LOGOUT"},
    {no: 407, name: "ASM_PAUSE_EVENT"},
    {no: 408, name: "ASM_RESUME_EVENT"},
    {no: 409, name: "ASM_CONVERSATION_PULLED_EVENT"},
    {no: 500, name: "SCORECARDS_CREATE_QUESTION_EVENT"},
    {no: 501, name: "SCORECARDS_UPDATE_QUESTION_EVENT"},
    {no: 502, name: "SCORECARDS_DELETE_QUESTION_EVENT"},
    {no: 503, name: "SCORECARDS_CREATE_SCORECARD_EVENT"},
    {no: 504, name: "SCORECARDS_UPDATE_SCORECARD_EVENT"},
    {no: 505, name: "SCORECARDS_DELETE_SCORECARD_EVENT"},
    {no: 506, name: "SCORECARDS_CLONE_SCORECARD_EVENT"},
    {no: 507, name: "SCORECARDS_CREATE_EVALUATION_EVENT"},
    {no: 508, name: "SCORECARDS_DELETE_EVALUATION_EVENT"},
    {no: 509, name: "SCORECARDS_CREATE_SECTION_EVENT"},
    {no: 510, name: "SCORECARDS_UPDATE_SECTION_EVENT"},
    {no: 511, name: "SCORECARDS_DELETE_SECTION_EVENT"},
    {no: 512, name: "SCORECARDS_CREATE_CATEGORY_EVENT"},
    {no: 513, name: "SCORECARDS_UPDATE_CATEGORY_EVENT"},
    {no: 514, name: "SCORECARDS_DELETE_CATEGORY_EVENT"},
    {no: 515, name: "SCORECARDS_CREATE_EVALUATION_QUESTION_EVENT"},
    {no: 516, name: "SCORECARDS_UPDATE_EVALUATION_QUESTION_EVENT"},
    {no: 517, name: "SCORECARDS_DELETE_EVALUATION_QUESTION_EVENT"},
    {no: 518, name: "SCORECARDS_CREATE_SCORECARD_QUESTION_EVENT"},
    {no: 519, name: "SCORECARDS_UPDATE_SCORECARD_QUESTION_EVENT"},
    {no: 520, name: "SCORECARDS_DELETE_SCORECARD_QUESTION_EVENT"},
    {no: 521, name: "SCORECARDS_CREATE_AUTO_EVALUATION_EVENT"},
    {no: 522, name: "SCORECARDS_UPDATE_EVALUATION_EVENT"},
    {no: 600, name: "TICKET_CREATE_EVENT"},
    {no: 601, name: "TICKET_EDIT_EVENT"},
    {no: 602, name: "TICKET_CLOSE_EVENT"},
    {no: 700, name: "COMPLIANCE_RND_QUERY_EVENT"},
    {no: 701, name: "COMPLIANCE_RND_QUERY_CACHED_EVENT"},
    {no: 800, name: "AGENT_TRAINING_CREATE_LEARNING_OPPORTUNITY_EVENT"},
  ],
);

