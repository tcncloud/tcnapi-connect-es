// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file api/commons/audit/event_types.proto (package api.commons.audit, syntax proto3)
/* eslint-disable */
// @ts-nocheck

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
export declare enum EventType {
  /**
   * Dummy Application IDs
   *
   * @generated from enum value: DUMMY_APPLICATION = 0;
   */
  DUMMY_APPLICATION = 0,

  /**
   * @generated from enum value: DUMMY_APPLICATION_STORAGE = 1;
   */
  DUMMY_APPLICATION_STORAGE = 1,

  /**
   * @generated from enum value: DUMMY_APPLICATION_COMPUTE = 2;
   */
  DUMMY_APPLICATION_COMPUTE = 2,

  /**
   * Voice Analytics Application IDs
   *
   * @generated from enum value: VOICE_ANALYTICS = 100;
   */
  VOICE_ANALYTICS = 100,

  /**
   * @generated from enum value: VOICE_ANALYTICS_FLAG_OCCURRENCE = 101;
   */
  VOICE_ANALYTICS_FLAG_OCCURRENCE = 101,

  /**
   * @generated from enum value: VOICE_ANALYTICS_FLAG_NEEDS_REVIEW = 102;
   */
  VOICE_ANALYTICS_FLAG_NEEDS_REVIEW = 102,

  /**
   * @generated from enum value: VOICE_ANALYTICS_BILLING_REPORT = 103;
   */
  VOICE_ANALYTICS_BILLING_REPORT = 103,

  /**
   * @generated from enum value: VOICE_ANALYTICS_FLAG_SUMMARY = 104;
   */
  VOICE_ANALYTICS_FLAG_SUMMARY = 104,

  /**
   * @generated from enum value: VOICE_ANALYTICS_PHRASE_CORRECTION = 105;
   */
  VOICE_ANALYTICS_PHRASE_CORRECTION = 105,

  /**
   * Omnichannel Dashboard Application IDs
   *
   * @generated from enum value: OMNICHANNEL = 300;
   */
  OMNICHANNEL = 300,

  /**
   * @generated from enum value: OMNICHANNEL_PROJECT = 301;
   */
  OMNICHANNEL_PROJECT = 301,

  /**
   * @generated from enum value: OMNICHANNEL_CAMPAIGN = 302;
   */
  OMNICHANNEL_CAMPAIGN = 302,

  /**
   * @generated from enum value: OMNICHANNEL_DAILY_PROJECT_REPORT = 303;
   */
  OMNICHANNEL_DAILY_PROJECT_REPORT = 303,

  /**
   * @generated from enum value: OMNICHANNEL_DAILY_CONVERSATION_REPORT = 304;
   */
  OMNICHANNEL_DAILY_CONVERSATION_REPORT = 304,

  /**
   * agent assign conversation eventType
   *
   * @generated from enum value: OMNICHANNEL_AGENT_ASSIGN_CONVERSATION = 305;
   */
  OMNICHANNEL_AGENT_ASSIGN_CONVERSATION = 305,

  /**
   * agent unassign conversation eventType
   *
   * @generated from enum value: OMNICHANNEL_AGENT_UNASSIGN_CONVERSATION = 306;
   */
  OMNICHANNEL_AGENT_UNASSIGN_CONVERSATION = 306,

  /**
   * agent reassign conversation eventType
   *
   * @generated from enum value: OMNICHANNEL_AGENT_REASSIGN_CONVERSATION = 307;
   */
  OMNICHANNEL_AGENT_REASSIGN_CONVERSATION = 307,

  /**
   * T10 trigger  eventType
   *
   * @generated from enum value: OMNICHANNEL_T10 = 308;
   */
  OMNICHANNEL_T10 = 308,

  /**
   * customer sent a text message event
   *
   * @generated from enum value: OMNICHANNEL_CUSTOMER_TEXT_MESSAGE = 309;
   */
  OMNICHANNEL_CUSTOMER_TEXT_MESSAGE = 309,

  /**
   * agent sent a text message event
   *
   * @generated from enum value: OMNICHANNEL_AGENT_TEXT_MESSAGE = 310;
   */
  OMNICHANNEL_AGENT_TEXT_MESSAGE = 310,

  /**
   * finish wrap up event
   *
   * @generated from enum value: OMNICHANNEL_FINISH_WRAP_UP = 311;
   */
  OMNICHANNEL_FINISH_WRAP_UP = 311,

  /**
   * conversation closes and wrap up begins event
   *
   * @generated from enum value: OMNICHANNEL_BEGIN_WRAP_UP = 312;
   */
  OMNICHANNEL_BEGIN_WRAP_UP = 312,

  /**
   * t11 timer went off event
   *
   * @generated from enum value: OMNICHANNEL_T11 = 313;
   */
  OMNICHANNEL_T11 = 313,

  /**
   * create conversation when customer sends initial message and T1 starts
   *
   * @generated from enum value: OMNICHANNEL_CREATE_CONVERSATION = 314;
   */
  OMNICHANNEL_CREATE_CONVERSATION = 314,

  /**
   * agent suspends the conversation event
   *
   * @generated from enum value: OMNICHANNEL_AGENT_SUSPEND = 315;
   */
  OMNICHANNEL_AGENT_SUSPEND = 315,

  /**
   * conversation is closed
   *
   * @generated from enum value: OMNICHANNEL_CLOSE_CONVERSATION = 316;
   */
  OMNICHANNEL_CLOSE_CONVERSATION = 316,

  /**
   * manager sent a text message event
   *
   * @generated from enum value: OMNICHANNEL_MANAGER_TEXT_MESSAGE = 332;
   */
  OMNICHANNEL_MANAGER_TEXT_MESSAGE = 332,

  /**
   * update event with campaign details
   *
   * @generated from enum value: OMNICHANNEL_UPDATE_CAMPAIGN = 330;
   */
  OMNICHANNEL_UPDATE_CAMPAIGN = 330,

  /**
   * update event with set conversation collected data details
   *
   * @generated from enum value: OMNICHANNEL_SET_CONVERSATION_COLLECTED_DATA = 331;
   */
  OMNICHANNEL_SET_CONVERSATION_COLLECTED_DATA = 331,

  /**
   * update campaign to archive status event
   *
   * @generated from enum value: OMNICHANNEL_ARCHIVE_CAMPAIGN = 333;
   */
  OMNICHANNEL_ARCHIVE_CAMPAIGN = 333,

  /**
   * update campaign to pause status event
   *
   * @generated from enum value: OMNICHANNEL_PAUSE_CAMPAIGN = 334;
   */
  OMNICHANNEL_PAUSE_CAMPAIGN = 334,

  /**
   * update campaign to resume status event
   *
   * @generated from enum value: OMNICHANNEL_RESUME_CAMPAIGN = 335;
   */
  OMNICHANNEL_RESUME_CAMPAIGN = 335,

  /**
   * update campaign to start status event
   *
   * @generated from enum value: OMNICHANNEL_START_CAMPAIGN = 336;
   */
  OMNICHANNEL_START_CAMPAIGN = 336,

  /**
   * update module to schedule status event
   *
   * @generated from enum value: OMNICHANNEL_SCHEDULE_MODULE = 337;
   */
  OMNICHANNEL_SCHEDULE_MODULE = 337,

  /**
   * update module to start status event
   *
   * @generated from enum value: OMNICHANNEL_START_MODULE = 338;
   */
  OMNICHANNEL_START_MODULE = 338,

  /**
   * update module to pause status event
   *
   * @generated from enum value: OMNICHANNEL_PAUSE_MODULE = 339;
   */
  OMNICHANNEL_PAUSE_MODULE = 339,

  /**
   * update module to resume status event
   *
   * @generated from enum value: OMNICHANNEL_RESUME_MODULE = 340;
   */
  OMNICHANNEL_RESUME_MODULE = 340,

  /**
   * update module to error status event
   *
   * @generated from enum value: OMNICHANNEL_ERROR_MODULE = 341;
   */
  OMNICHANNEL_ERROR_MODULE = 341,

  /**
   * update module to success status event
   *
   * @generated from enum value: OMNICHANNEL_SUCCESS_MODULE = 342;
   */
  OMNICHANNEL_SUCCESS_MODULE = 342,

  /**
   * update module to fail status event
   *
   * @generated from enum value: OMNICHANNEL_FAIL_MODULE = 343;
   */
  OMNICHANNEL_FAIL_MODULE = 343,

  /**
   * update module to complete status event
   *
   * @generated from enum value: OMNICHANNEL_COMPLETE_MODULE = 344;
   */
  OMNICHANNEL_COMPLETE_MODULE = 344,

  /**
   * update module to archive status event
   *
   * @generated from enum value: OMNICHANNEL_ARCHIVE_MODULE = 345;
   */
  OMNICHANNEL_ARCHIVE_MODULE = 345,

  /**
   * update module event with details
   *
   * @generated from enum value: OMNICHANNEL_UPDATE_MODULE = 346;
   */
  OMNICHANNEL_UPDATE_MODULE = 346,

  /**
   * send sms module event with details
   *
   * @generated from enum value: OMNICHANNEL_MODULE_SMS_MESSAGE_SENT = 347;
   */
  OMNICHANNEL_MODULE_SMS_MESSAGE_SENT = 347,

  /**
   * update campaign to archive status event
   *
   * @generated from enum value: OMNICHANNEL_COMPLETE_CAMPAIGN = 348;
   */
  OMNICHANNEL_COMPLETE_CAMPAIGN = 348,

  /**
   * initial reply event for module
   *
   * @generated from enum value: OMNICHANNEL_MODULE_INITIAL_REPLY = 349;
   */
  OMNICHANNEL_MODULE_INITIAL_REPLY = 349,

  /**
   * omnichannel task message sent
   *
   * @generated from enum value: OMNICHANNEL_TASK_MESSAGE_SENT = 350;
   */
  OMNICHANNEL_TASK_MESSAGE_SENT = 350,

  /**
   * omnichannel connected inbox poll
   *
   * @generated from enum value: OMNICHANNEL_CONNECTED_INBOX_POLL = 351;
   */
  OMNICHANNEL_CONNECTED_INBOX_POLL = 351,

  /**
   * omnichannel connected inbox was created
   *
   * @generated from enum value: OMNICHANNEL_CONNECTED_INBOX_CREATED = 352;
   */
  OMNICHANNEL_CONNECTED_INBOX_CREATED = 352,

  /**
   * omnichannel agent message units were calculated
   *
   * @generated from enum value: OMNICHANNEL_AGENT_MESSAGE_UNITS = 353;
   */
  OMNICHANNEL_AGENT_MESSAGE_UNITS = 353,

  /**
   * omnichannel manager message units were calculated
   *
   * @generated from enum value: OMNICHANNEL_MANAGER_MESSAGE_UNITS = 354;
   */
  OMNICHANNEL_MANAGER_MESSAGE_UNITS = 354,

  /**
   * omnichannel customer message units were calculated
   *
   * @generated from enum value: OMNICHANNEL_CUSTOMER_MESSAGE_UNITS = 355;
   */
  OMNICHANNEL_CUSTOMER_MESSAGE_UNITS = 355,

  /**
   * omnichannel system message units were calculated
   *
   * @generated from enum value: OMNICHANNEL_SYSTEM_MESSAGE_UNITS = 356;
   */
  OMNICHANNEL_SYSTEM_MESSAGE_UNITS = 356,

  /**
   * omnichannel payment link was sent
   *
   * @generated from enum value: OMNICHANNEL_PAYMENT_LINK_SENT = 357;
   */
  OMNICHANNEL_PAYMENT_LINK_SENT = 357,

  /**
   * accepted manual approve task
   *
   * @generated from enum value: OMNICHANNEL_MANUAL_APPROVE_TASK_ACCEPTED = 358;
   */
  OMNICHANNEL_MANUAL_APPROVE_TASK_ACCEPTED = 358,

  /**
   * rejected manual approve task
   *
   * @generated from enum value: OMNICHANNEL_MANUAL_APPROVE_TASK_REJECTED = 359;
   */
  OMNICHANNEL_MANUAL_APPROVE_TASK_REJECTED = 359,

  /**
   * timeout of manual approve task
   *
   * @generated from enum value: OMNICHANNEL_MANUAL_APPROVE_TASK_TIMEOUT = 360;
   */
  OMNICHANNEL_MANUAL_APPROVE_TASK_TIMEOUT = 360,

  /**
   * requeue of manual approve task
   *
   * @generated from enum value: OMNICHANNEL_MANUAL_APPROVE_TASK_REQUEUE = 361;
   */
  OMNICHANNEL_MANUAL_APPROVE_TASK_REQUEUE = 361,

  /**
   * transcript saved
   *
   * @generated from enum value: OMNICHANNEL_TRANSCRIPT_SAVED = 362;
   */
  OMNICHANNEL_TRANSCRIPT_SAVED = 362,

  /**
   * ASM
   * agent logs into asm
   *
   * @generated from enum value: ASM_AGENT_LOGIN = 400;
   */
  ASM_AGENT_LOGIN = 400,

  /**
   * agent opens voice event
   *
   * @generated from enum value: ASM_OPEN_VOICE = 401;
   */
  ASM_OPEN_VOICE = 401,

  /**
   * agent logs into omni agent event
   *
   * @generated from enum value: ASM_OPEN_OMNI_AGENT = 402;
   */
  ASM_OPEN_OMNI_AGENT = 402,

  /**
   * agent activates a conversation event
   *
   * @generated from enum value: ASM_ACTIVATE_CONVERSATION = 403;
   */
  ASM_ACTIVATE_CONVERSATION = 403,

  /**
   * agent deactivates a conversation event
   *
   * @generated from enum value: ASM_DEACTIVATE_CONVERSATION = 404;
   */
  ASM_DEACTIVATE_CONVERSATION = 404,

  /**
   * agent's state changed event
   *
   * @generated from enum value: ASM_AGENT_STATE_CHANGED = 405;
   */
  ASM_AGENT_STATE_CHANGED = 405,

  /**
   * agent logs out of asm
   *
   * @generated from enum value: ASM_AGENT_LOGOUT = 406;
   */
  ASM_AGENT_LOGOUT = 406,

  /**
   * asm pause event
   *
   * @generated from enum value: ASM_PAUSE_EVENT = 407;
   */
  ASM_PAUSE_EVENT = 407,

  /**
   * asm resume event
   *
   * @generated from enum value: ASM_RESUME_EVENT = 408;
   */
  ASM_RESUME_EVENT = 408,

  /**
   * asm conversation pulled event
   *
   * @generated from enum value: ASM_CONVERSATION_PULLED_EVENT = 409;
   */
  ASM_CONVERSATION_PULLED_EVENT = 409,

  /**
   * Scorecards
   * create question event
   *
   * @generated from enum value: SCORECARDS_CREATE_QUESTION_EVENT = 500;
   */
  SCORECARDS_CREATE_QUESTION_EVENT = 500,

  /**
   * update question event
   *
   * @generated from enum value: SCORECARDS_UPDATE_QUESTION_EVENT = 501;
   */
  SCORECARDS_UPDATE_QUESTION_EVENT = 501,

  /**
   * delete question event
   *
   * @generated from enum value: SCORECARDS_DELETE_QUESTION_EVENT = 502;
   */
  SCORECARDS_DELETE_QUESTION_EVENT = 502,

  /**
   * create scorecard event
   *
   * @generated from enum value: SCORECARDS_CREATE_SCORECARD_EVENT = 503;
   */
  SCORECARDS_CREATE_SCORECARD_EVENT = 503,

  /**
   * update scorecard event
   *
   * @generated from enum value: SCORECARDS_UPDATE_SCORECARD_EVENT = 504;
   */
  SCORECARDS_UPDATE_SCORECARD_EVENT = 504,

  /**
   * delete scorecard event
   *
   * @generated from enum value: SCORECARDS_DELETE_SCORECARD_EVENT = 505;
   */
  SCORECARDS_DELETE_SCORECARD_EVENT = 505,

  /**
   * clone scorecard event
   *
   * @generated from enum value: SCORECARDS_CLONE_SCORECARD_EVENT = 506;
   */
  SCORECARDS_CLONE_SCORECARD_EVENT = 506,

  /**
   * create evaluation event
   *
   * @generated from enum value: SCORECARDS_CREATE_EVALUATION_EVENT = 507;
   */
  SCORECARDS_CREATE_EVALUATION_EVENT = 507,

  /**
   * delete evaluation event
   *
   * @generated from enum value: SCORECARDS_DELETE_EVALUATION_EVENT = 508;
   */
  SCORECARDS_DELETE_EVALUATION_EVENT = 508,

  /**
   * create section event
   *
   * @generated from enum value: SCORECARDS_CREATE_SECTION_EVENT = 509;
   */
  SCORECARDS_CREATE_SECTION_EVENT = 509,

  /**
   * update section event
   *
   * @generated from enum value: SCORECARDS_UPDATE_SECTION_EVENT = 510;
   */
  SCORECARDS_UPDATE_SECTION_EVENT = 510,

  /**
   * delete section event
   *
   * @generated from enum value: SCORECARDS_DELETE_SECTION_EVENT = 511;
   */
  SCORECARDS_DELETE_SECTION_EVENT = 511,

  /**
   * create category event
   *
   * @generated from enum value: SCORECARDS_CREATE_CATEGORY_EVENT = 512;
   */
  SCORECARDS_CREATE_CATEGORY_EVENT = 512,

  /**
   * update category event
   *
   * @generated from enum value: SCORECARDS_UPDATE_CATEGORY_EVENT = 513;
   */
  SCORECARDS_UPDATE_CATEGORY_EVENT = 513,

  /**
   * delete category event
   *
   * @generated from enum value: SCORECARDS_DELETE_CATEGORY_EVENT = 514;
   */
  SCORECARDS_DELETE_CATEGORY_EVENT = 514,

  /**
   * create evaluation question event
   *
   * @generated from enum value: SCORECARDS_CREATE_EVALUATION_QUESTION_EVENT = 515;
   */
  SCORECARDS_CREATE_EVALUATION_QUESTION_EVENT = 515,

  /**
   * update evaluation question event
   *
   * @generated from enum value: SCORECARDS_UPDATE_EVALUATION_QUESTION_EVENT = 516;
   */
  SCORECARDS_UPDATE_EVALUATION_QUESTION_EVENT = 516,

  /**
   * delete evaluation question event
   *
   * @generated from enum value: SCORECARDS_DELETE_EVALUATION_QUESTION_EVENT = 517;
   */
  SCORECARDS_DELETE_EVALUATION_QUESTION_EVENT = 517,

  /**
   * create scorecard question event
   *
   * @generated from enum value: SCORECARDS_CREATE_SCORECARD_QUESTION_EVENT = 518;
   */
  SCORECARDS_CREATE_SCORECARD_QUESTION_EVENT = 518,

  /**
   * update scorecard question event
   *
   * @generated from enum value: SCORECARDS_UPDATE_SCORECARD_QUESTION_EVENT = 519;
   */
  SCORECARDS_UPDATE_SCORECARD_QUESTION_EVENT = 519,

  /**
   * delete scorecard question event
   *
   * @generated from enum value: SCORECARDS_DELETE_SCORECARD_QUESTION_EVENT = 520;
   */
  SCORECARDS_DELETE_SCORECARD_QUESTION_EVENT = 520,

  /**
   * create auto evaluation event
   *
   * @generated from enum value: SCORECARDS_CREATE_AUTO_EVALUATION_EVENT = 521;
   */
  SCORECARDS_CREATE_AUTO_EVALUATION_EVENT = 521,

  /**
   * update evaluation event
   *
   * @generated from enum value: SCORECARDS_UPDATE_EVALUATION_EVENT = 522;
   */
  SCORECARDS_UPDATE_EVALUATION_EVENT = 522,

  /**
   * Tickets Events
   * create event
   *
   * @generated from enum value: TICKET_CREATE_EVENT = 600;
   */
  TICKET_CREATE_EVENT = 600,

  /**
   * edit event
   *
   * @generated from enum value: TICKET_EDIT_EVENT = 601;
   */
  TICKET_EDIT_EVENT = 601,

  /**
   * close event
   *
   * @generated from enum value: TICKET_CLOSE_EVENT = 602;
   */
  TICKET_CLOSE_EVENT = 602,

  /**
   * @generated from enum value: TICKET_ACTION_CREATE_EVENT = 603;
   */
  TICKET_ACTION_CREATE_EVENT = 603,

  /**
   * @generated from enum value: TICKET_ACTION_EDIT_EVENT = 604;
   */
  TICKET_ACTION_EDIT_EVENT = 604,

  /**
   * @generated from enum value: TICKET_ACTION_STATE_CHANGE_EVENT = 605;
   */
  TICKET_ACTION_STATE_CHANGE_EVENT = 605,

  /**
   * @generated from enum value: TICKET_PARTICIPANT_EVENT = 606;
   */
  TICKET_PARTICIPANT_EVENT = 606,

  /**
   * ticket-create comment event
   *
   * @generated from enum value: TICKET_CREATE_COMMENT_EVENT = 607;
   */
  TICKET_CREATE_COMMENT_EVENT = 607,

  /**
   * ticket-reply comment event
   *
   * @generated from enum value: TICKET_REPLY_COMMENT_EVENT = 608;
   */
  TICKET_REPLY_COMMENT_EVENT = 608,

  /**
   * ticket-create-template event
   *
   * @generated from enum value: TICKET_TEMPLATE_CREATE_EVENT = 609;
   */
  TICKET_TEMPLATE_CREATE_EVENT = 609,

  /**
   * ticket-edit-template event
   *
   * @generated from enum value: TICKET_TEMPLATE_EDIT_EVENT = 610;
   */
  TICKET_TEMPLATE_EDIT_EVENT = 610,

  /**
   * ticket-close-template event
   *
   * @generated from enum value: TICKET_TEMPLATE_CLOSE_EVENT = 611;
   */
  TICKET_TEMPLATE_CLOSE_EVENT = 611,

  /**
   * ticket-assign-template event
   *
   * @generated from enum value: TICKET_TEMPLATE_ASSIGN_EVENT = 612;
   */
  TICKET_TEMPLATE_ASSIGN_EVENT = 612,

  /**
   * ticket-state-change-template event
   *
   * @generated from enum value: TICKET_TEMPLATE_STATE_CHANGE_EVENT = 613;
   */
  TICKET_TEMPLATE_STATE_CHANGE_EVENT = 613,

  /**
   * ticket-project-state event
   *
   * @generated from enum value: TICKET_PROJECT_STATE_CHANGE_EVENT = 614;
   */
  TICKET_PROJECT_STATE_CHANGE_EVENT = 614,

  /**
   * Compliance Events
   * rnd query event
   *
   * @generated from enum value: COMPLIANCE_RND_QUERY_EVENT = 700;
   */
  COMPLIANCE_RND_QUERY_EVENT = 700,

  /**
   * rnd query cached event
   *
   * @generated from enum value: COMPLIANCE_RND_QUERY_CACHED_EVENT = 701;
   */
  COMPLIANCE_RND_QUERY_CACHED_EVENT = 701,

  /**
   * Agent Training
   * create learning opportunity event
   *
   * @generated from enum value: AGENT_TRAINING_CREATE_LEARNING_OPPORTUNITY_EVENT = 800;
   */
  AGENT_TRAINING_CREATE_LEARNING_OPPORTUNITY_EVENT = 800,

  /**
   * LMS Events
   *
   * @generated from enum value: LMS_PIPELINE_FAILURE_EVENT = 900;
   */
  LMS_PIPELINE_FAILURE_EVENT = 900,

  /**
   * @generated from enum value: LMS_PIPELINE_NO_OUTPUT_EVENT = 901;
   */
  LMS_PIPELINE_NO_OUTPUT_EVENT = 901,

  /**
   * @generated from enum value: LMS_PIPELINE_SUCCESSFUL_EVENT = 902;
   */
  LMS_PIPELINE_SUCCESSFUL_EVENT = 902,

  /**
   * Billing Events
   *
   * @generated from enum value: EVENT_TYPE_BILLING_COMMIT_BILLING_PLAN = 1000;
   */
  EVENT_TYPE_BILLING_COMMIT_BILLING_PLAN = 1000,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_CREATE_BILLING_PLAN = 1001;
   */
  EVENT_TYPE_BILLING_CREATE_BILLING_PLAN = 1001,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_CREATE_INVOICE = 1002 [deprecated = true];
   * @deprecated
   */
  EVENT_TYPE_BILLING_CREATE_INVOICE = 1002,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_CREATE_RATE_DEFINITION = 1003;
   */
  EVENT_TYPE_BILLING_CREATE_RATE_DEFINITION = 1003,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_DELETE_BILLING_PLAN = 1004;
   */
  EVENT_TYPE_BILLING_DELETE_BILLING_PLAN = 1004,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_DELETE_INVOICE = 1005 [deprecated = true];
   * @deprecated
   */
  EVENT_TYPE_BILLING_DELETE_INVOICE = 1005,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_DELETE_RATE_DEFINITION = 1006;
   */
  EVENT_TYPE_BILLING_DELETE_RATE_DEFINITION = 1006,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_EXPORT_INVOICE = 1007;
   */
  EVENT_TYPE_BILLING_EXPORT_INVOICE = 1007,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_UPDATE_BILLING_PLAN = 1008;
   */
  EVENT_TYPE_BILLING_UPDATE_BILLING_PLAN = 1008,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_UPDATE_INVOICE = 1009 [deprecated = true];
   * @deprecated
   */
  EVENT_TYPE_BILLING_UPDATE_INVOICE = 1009,

  /**
   * @generated from enum value: EVENT_TYPE_BILLING_UPDATE_RATE_DEFINITION = 1010;
   */
  EVENT_TYPE_BILLING_UPDATE_RATE_DEFINITION = 1010,

  /**
   * Delivery Events
   *
   * @generated from enum value: EVENT_TYPE_DELIVERY_FAILURE = 1100;
   */
  EVENT_TYPE_DELIVERY_FAILURE = 1100,

  /**
   * @generated from enum value: EVENT_TYPE_DELIVERY_SUCCESS = 1101;
   */
  EVENT_TYPE_DELIVERY_SUCCESS = 1101,

  /**
   * ContactManager Events
   * add event
   *
   * @generated from enum value: EVENT_TYPE_CONTACT_MANAGER_ADD_EVENT = 1200;
   */
  EVENT_TYPE_CONTACT_MANAGER_ADD_EVENT = 1200,

  /**
   * view event
   *
   * @generated from enum value: EVENT_TYPE_CONTACT_MANAGER_ENTRY_VIEW_EVENT = 1201;
   */
  EVENT_TYPE_CONTACT_MANAGER_ENTRY_VIEW_EVENT = 1201,

  /**
   * kyc event
   *
   * @generated from enum value: EVENT_TYPE_CONTACT_MANAGER_KYC_ENC_VIEW_EVENT = 1202;
   */
  EVENT_TYPE_CONTACT_MANAGER_KYC_ENC_VIEW_EVENT = 1202,

  /**
   * ttl event
   *
   * @generated from enum value: EVENT_TYPE_CONTACT_MANAGER_TTL_EVENT = 1203;
   */
  EVENT_TYPE_CONTACT_MANAGER_TTL_EVENT = 1203,
}

