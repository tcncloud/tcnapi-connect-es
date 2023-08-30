// @generated by protoc-gen-es v1.3.1 with parameter "target=js+dts"
// @generated from file api/commons/email.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum api.commons.EmailResult
 */
export declare enum EmailResult {
  /**
   * @generated from enum value: EMAIL_RESULT_UNKNOWN = 0;
   */
  EMAIL_RESULT_UNKNOWN = 0,

  /**
   * , "EMAIL_TASK_WAITING","Waiting","WTG", "Email Task is ready to be sent"),
   *
   * @generated from enum value: EMAIL_TASK_WAITING = 8600;
   */
  EMAIL_TASK_WAITING = 8600,

  /**
   * , "EMAIL_TASK_PROCESSING","Sending","PRC", "Email Task is sent to gateway"),
   *
   * @generated from enum value: EMAIL_TASK_PROCESSING = 8700;
   */
  EMAIL_TASK_PROCESSING = 8700,

  /**
   * , "EMAIL_TASK_DNC","Do Not Call","DNC", "Email has been scrubbed because it is on EMAIL DNC list."),
   *
   * @generated from enum value: EMAIL_TASK_DNC = 8710;
   */
  EMAIL_TASK_DNC = 8710,

  /**
   * , "EMAIL_TASK_INVALID", "Invalid","INV", "Email task has been flagged for having an invalid destination number."),
   *
   * @generated from enum value: EMAIL_TASK_INVALID = 8720;
   */
  EMAIL_TASK_INVALID = 8720,

  /**
   * , "EMAIL_TASK_ATTACHMENT_ERROR", "Attachment Error", "ATT", "Email task has been cancelled due to attachment file error"),
   *
   * @generated from enum value: EMAIL_TASK_ATTACHMENT_ERROR = 8730;
   */
  EMAIL_TASK_ATTACHMENT_ERROR = 8730,

  /**
   * ,"EMAIL_TASK_CANCELLED", "Cancelled","CNC","Email Task is cancelled"),
   *
   * @generated from enum value: EMAIL_TASK_CANCELLED = 8740;
   */
  EMAIL_TASK_CANCELLED = 8740,

  /**
   * , "EMAIL_TASK_QUEUED", "Queued", "QED","Email Task is queued in provider"),
   *
   * @generated from enum value: EMAIL_TASK_QUEUED = 8800;
   */
  EMAIL_TASK_QUEUED = 8800,

  /**
   * , "EMAIL_TASK_DELIVERED","Delivered","DLV", "Message has been successfully delivered to the receiving server."),
   *
   * @generated from enum value: EMAIL_TASK_DELIVERED = 8900;
   */
  EMAIL_TASK_DELIVERED = 8900,

  /**
   * , "EMAIL_TASK_DROPPED","Dropped","DRP", "You may see the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota"),
   *
   * @generated from enum value: EMAIL_TASK_DROPPED = 8910;
   */
  EMAIL_TASK_DROPPED = 8910,

  /**
   * , "EMAIL_TASK_DEFERRED","Deferred","DFR", "Recipient’s email server temporarily rejected message."),
   *
   * @generated from enum value: EMAIL_TASK_DEFERRED = 8920;
   */
  EMAIL_TASK_DEFERRED = 8920,

  /**
   * , "EMAIL_TASK_BOUNCED","Bounced","BNC", "Receiving server could not or would not accept message."),
   *
   * @generated from enum value: EMAIL_TASK_BOUNCED = 8930;
   */
  EMAIL_TASK_BOUNCED = 8930,

  /**
   * , "EMAIL_TASK_OPENED","Opened","OPN", "Recipient has opened the HTML message."),
   *
   * @generated from enum value: EMAIL_TASK_OPENED = 8940;
   */
  EMAIL_TASK_OPENED = 8940,

  /**
   * , "EMAIL_TASK_CLICKED","Clicked","CLK", "Recipient clicked on a link within the message.");,
   *
   * @generated from enum value: EMAIL_TASK_CLICKED = 8950;
   */
  EMAIL_TASK_CLICKED = 8950,

  /**
   * "EMAIL_TASK_UNSUBSCRIBED","Unsubscribed","USB", "Recipient clicked on the 'Opt Out of All Emails' link"),
   *
   * @generated from enum value: EMAIL_TASK_UNSUBSCRIBED = 8960;
   */
  EMAIL_TASK_UNSUBSCRIBED = 8960,

  /**
   * "EMAIL_TASK_MARKED_AS_SPAM","Marked As Spam","SPM", "Recipient marked message as spam.");
   *
   * @generated from enum value: EMAIL_TASK_MARKED_AS_SPAM = 8970;
   */
  EMAIL_TASK_MARKED_AS_SPAM = 8970,

  /**
   * "EMAIL_TASK_BLOCKED","Recipient marked message as blocked.");
   *
   * @generated from enum value: EMAIL_TASK_BLOCKED = 8980;
   */
  EMAIL_TASK_BLOCKED = 8980,
}

/**
 * @generated from enum api.commons.EmailStatus
 */
export declare enum EmailStatus {
  /**
   * @generated from enum value: EMAIL_STATUS_UNKKNOWN = 0;
   */
  EMAIL_STATUS_UNKKNOWN = 0,

  /**
   * "EMAIL_PREPARING", "Email group is being prepared for scheduling"),
   *
   * @generated from enum value: EMAIL_PREPARING = 8000;
   */
  EMAIL_PREPARING = 8000,

  /**
   * "EMAIL_SCHEDULED", "Email group is currently waiting for scheduler"),
   *
   * @generated from enum value: EMAIL_SCHEDULED = 8100;
   */
  EMAIL_SCHEDULED = 8100,

  /**
   * "EMAIL_RESUME", "Email group is ready to restart after being paused"),
   *
   * @generated from enum value: EMAIL_RESUME = 8150;
   */
  EMAIL_RESUME = 8150,

  /**
   * "EMAIL_RUNNING", "Email group is currently being executed"),
   *
   * @generated from enum value: EMAIL_RUNNING = 8200;
   */
  EMAIL_RUNNING = 8200,

  /**
   * "EMAIL_COMPLETED", "Email group has been executed"),
   *
   * @generated from enum value: EMAIL_COMPLETED = 8300;
   */
  EMAIL_COMPLETED = 8300,

  /**
   * "EMAIL_CANCELLED", "Email group has been cancelled"),
   *
   * @generated from enum value: EMAIL_CANCELLED = 8310;
   */
  EMAIL_CANCELLED = 8310,

  /**
   * "EMAIL_CANCELLED_ADMIN", "Email group has been cancelled by admin"),
   *
   * @generated from enum value: EMAIL_CANCELLED_ADMIN = 8320;
   */
  EMAIL_CANCELLED_ADMIN = 8320,

  /**
   * "EMAIL_SUMMED_COMPLETED", "Email group has been executed and is summed"),
   *
   * @generated from enum value: EMAIL_SUMMED_COMPLETED = 8400;
   */
  EMAIL_SUMMED_COMPLETED = 8400,

  /**
   * "EMAIL_SUMMED_CANCELLED", "Email group has been cancelled and is summed"),
   *
   * @generated from enum value: EMAIL_SUMMED_CANCELLED = 8410;
   */
  EMAIL_SUMMED_CANCELLED = 8410,

  /**
   * "EMAIL_SUMMED_CANCELLED_ADMIN", "Email group has been cancelled by the admin and is summed"),
   *
   * @generated from enum value: EMAIL_SUMMED_CANCELLED_ADMIN = 8420;
   */
  EMAIL_SUMMED_CANCELLED_ADMIN = 8420,

  /**
   * "EMAIL_PAUSED", "Email group has been signaled to pause until further notice");
   *
   * @generated from enum value: EMAIL_PAUSED = 8500;
   */
  EMAIL_PAUSED = 8500,
}

/**
 * @generated from enum api.commons.EmailIBGroupStatus
 */
export declare enum EmailIBGroupStatus {
  /**
   * @generated from enum value: IB_EMAIL_GROUP_UNKNOWN = 0;
   */
  IB_EMAIL_GROUP_UNKNOWN = 0,

  /**
   * Inbound Email Group is being prepared for scheduler
   *
   * @generated from enum value: IB_EMAIL_GROUP_PREPARING = 10000;
   */
  IB_EMAIL_GROUP_PREPARING = 10000,

  /**
   * Inbound Email Group is waiting for scheduler
   *
   * @generated from enum value: IB_EMAIL_GROUP_SCHEDULED = 10010;
   */
  IB_EMAIL_GROUP_SCHEDULED = 10010,

  /**
   * Inbound Email group is currently being executed
   *
   * @generated from enum value: IB_EMAIL_GROUP_RUNNING = 10020;
   */
  IB_EMAIL_GROUP_RUNNING = 10020,

  /**
   * Inbound Email group has been signaled to pause calls until further notice
   *
   * @generated from enum value: IB_EMAIL_GROUP_PAUSED = 10030;
   */
  IB_EMAIL_GROUP_PAUSED = 10030,

  /**
   * Inbound Email group is ready to restart after being paused
   *
   * @generated from enum value: IB_EMAIL_GROUP_RESUME = 10040;
   */
  IB_EMAIL_GROUP_RESUME = 10040,

  /**
   * Inbound Email group running but with errors
   *
   * @generated from enum value: IB_EMAIL_GROUP_RUNNING_WITH_ERROR = 10041;
   */
  IB_EMAIL_GROUP_RUNNING_WITH_ERROR = 10041,

  /**
   * Inbound Email group ris stopped because it hit a consecutive error limit
   *
   * @generated from enum value: IB_EMAIL_GROUP_ERROR_STANDBY = 10042;
   */
  IB_EMAIL_GROUP_ERROR_STANDBY = 10042,

  /**
   * Inbound Email group has been executed
   *
   * @generated from enum value: IB_EMAIL_GROUP_COMPLETED = 10050;
   */
  IB_EMAIL_GROUP_COMPLETED = 10050,

  /**
   * Inbound Email group has been cancelled by user
   *
   * @generated from enum value: IB_EMAIL_GROUP_CANCELLED_USER = 10060;
   */
  IB_EMAIL_GROUP_CANCELLED_USER = 10060,

  /**
   * Inbound Email group has been cancelled by admin
   *
   * @generated from enum value: IB_EMAIL_GROUP_CANCELLED_ADMIN = 10070;
   */
  IB_EMAIL_GROUP_CANCELLED_ADMIN = 10070,

  /**
   * Inbound Email group has been executed and is summed
   *
   * @generated from enum value: IB_EMAIL_GROUP_SUMMED_COMPLETED = 10150;
   */
  IB_EMAIL_GROUP_SUMMED_COMPLETED = 10150,

  /**
   * Inbound Email group has been cancelled by the user and is summed
   *
   * @generated from enum value: IB_EMAIL_GROUP_SUMMED_CANCELLED_USER = 10160;
   */
  IB_EMAIL_GROUP_SUMMED_CANCELLED_USER = 10160,

  /**
   * Inbound Email group has been cancelled by the admin and is summed
   *
   * @generated from enum value: IB_EMAIL_GROUP_SUMMED_CANCELLED_ADMIN = 10170;
   */
  IB_EMAIL_GROUP_SUMMED_CANCELLED_ADMIN = 10170,
}

/**
 * @generated from enum api.commons.EmailIBReplyStatus
 */
export declare enum EmailIBReplyStatus {
  /**
   * @generated from enum value: IB_EMAIL_REPLY_UNKNOWN = 0;
   */
  IB_EMAIL_REPLY_UNKNOWN = 0,

  /**
   * Inbound Email reply received successfully
   *
   * @generated from enum value: IB_EMAIL_REPLY_RECEIVED = 12000;
   */
  IB_EMAIL_REPLY_RECEIVED = 12000,

  /**
   * Inbound Email while agent sending reply
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_SENDING = 12010;
   */
  IB_EMAIL_AGENT_REPLY_SENDING = 12010,

  /**
   * Inbound Email failed while agent sending reply
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_SENDING_FAILED = 12020;
   */
  IB_EMAIL_AGENT_REPLY_SENDING_FAILED = 12020,

  /**
   * Inbound Email Reply has been flagged for having an invalid destination
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_INVALID = 12030;
   */
  IB_EMAIL_AGENT_REPLY_INVALID = 12030,

  /**
   * Inbound Email agent reply queued/sent successfully
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_SENT = 12040;
   */
  IB_EMAIL_AGENT_REPLY_SENT = 12040,

  /**
   * Inbound Email agent reply delivered successfully
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_DELIVERED = 12050;
   */
  IB_EMAIL_AGENT_REPLY_DELIVERED = 12050,

  /**
   * Inbound Email agent reply dropped with reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_DROPPED = 12060;
   */
  IB_EMAIL_AGENT_REPLY_DROPPED = 12060,

  /**
   * Inbound Email agent reply "Deferred", "DFR" because Recipient’s email server temporarily rejected message
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_DEFERRED = 12070;
   */
  IB_EMAIL_AGENT_REPLY_DEFERRED = 12070,

  /**
   * Inbound Email agent reply "Bounced","BNC", "Receiving server could not or would not accept message
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_BOUNCED = 12080;
   */
  IB_EMAIL_AGENT_REPLY_BOUNCED = 12080,

  /**
   * Inbound Email agent reply "Opened","OPN", "Recipient has opened the HTML message.
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_OPENED = 12090;
   */
  IB_EMAIL_AGENT_REPLY_OPENED = 12090,

  /**
   * Inbound Email agent reply "Clicked","CLK", "Recipient clicked on a link within the message.,
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_CLICKED = 12100;
   */
  IB_EMAIL_AGENT_REPLY_CLICKED = 12100,

  /**
   * Inbound Email agent reply "Unsubscribed","USB", "Recipient clicked on the 'Opt Out of All Emails' link
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_UNSUBSCRIBED = 12110;
   */
  IB_EMAIL_AGENT_REPLY_UNSUBSCRIBED = 12110,

  /**
   * Inbound Email agent reply "Marked As Spam","SPM", "Recipient marked message as spam.
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_MARKED_AS_SPAM = 12120;
   */
  IB_EMAIL_AGENT_REPLY_MARKED_AS_SPAM = 12120,

  /**
   * Inbound Email agent reply recipient marked message as blocked.
   *
   * @generated from enum value: IB_EMAIL_AGENT_REPLY_BLOCKED = 12130;
   */
  IB_EMAIL_AGENT_REPLY_BLOCKED = 12130,

  /**
   * Inbound Email Reply has been scrubbed because it is on EMAIL DNC list
   *
   * @generated from enum value: IB_EMAIL_REPLY_DNC = 12140;
   */
  IB_EMAIL_REPLY_DNC = 12140,

  /**
   * Inbound Email Reply has been cancelled
   *
   * @generated from enum value: IB_EMAIL_REPLY_CANCELLED = 12150;
   */
  IB_EMAIL_REPLY_CANCELLED = 12150,
}

/**
 * @generated from enum api.commons.EmailIBGroupEvent
 */
export declare enum EmailIBGroupEvent {
  /**
   * when the system is getting things ready for the inbound group
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_PREPARED = 0;
   */
  IB_EMAIL_GROUP_EVENT_PREPARED = 0,

  /**
   * when the inbound group is scheduled
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_SCHEDULED = 1;
   */
  IB_EMAIL_GROUP_EVENT_SCHEDULED = 1,

  /**
   * when the manager starts the inbound group
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_STARTED = 2;
   */
  IB_EMAIL_GROUP_EVENT_STARTED = 2,

  /**
   * each time a poller runs a cycle for the inbound group
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_RUNNING = 3;
   */
  IB_EMAIL_GROUP_EVENT_RUNNING = 3,

  /**
   * when the manager stops the inbound group
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_STOPPED = 4;
   */
  IB_EMAIL_GROUP_EVENT_STOPPED = 4,

  /**
   * when the poller stops because of error or if the ui sets pause
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_PAUSED = 5;
   */
  IB_EMAIL_GROUP_EVENT_PAUSED = 5,

  /**
   * when the ui resumes
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_RESUME = 6;
   */
  IB_EMAIL_GROUP_EVENT_RESUME = 6,

  /**
   * when the ui stops
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_CANCELLED = 7;
   */
  IB_EMAIL_GROUP_EVENT_CANCELLED = 7,

  /**
   * each time we get a message for a group
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_MESSAGE_RECEIVED = 8;
   */
  IB_EMAIL_GROUP_EVENT_MESSAGE_RECEIVED = 8,

  /**
   * each time we have an error because of logging in
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_LOGIN_ERROR = 9;
   */
  IB_EMAIL_GROUP_EVENT_LOGIN_ERROR = 9,

  /**
   * when we fail to fetch messages ? - not sure about this one yet
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_FETCH_ERROR = 10;
   */
  IB_EMAIL_GROUP_EVENT_FETCH_ERROR = 10,

  /**
   * reached max number of consecutive errors logging into email acct
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_STANDBY_ERROR = 11;
   */
  IB_EMAIL_GROUP_EVENT_STANDBY_ERROR = 11,

  /**
   * when the inbound group is marked as completed by the manager
   *
   * @generated from enum value: IB_EMAIL_GROUP_EVENT_COMPLETED = 12;
   */
  IB_EMAIL_GROUP_EVENT_COMPLETED = 12,
}

/**
 * @generated from enum api.commons.EmailIBReplyType
 */
export declare enum EmailIBReplyType {
  /**
   * @generated from enum value: REPLY_UNKNOWN = 0;
   */
  REPLY_UNKNOWN = 0,

  /**
   * Received reply to existing conversation
   *
   * @generated from enum value: EXISTING_CONV = 1;
   */
  EXISTING_CONV = 1,

  /**
   * Received reply to outbound task
   *
   * @generated from enum value: OUTBOUND_REPLY = 2;
   */
  OUTBOUND_REPLY = 2,

  /**
   * Its a reply by an agent
   *
   * @generated from enum value: AGENT_REPLY = 3;
   */
  AGENT_REPLY = 3,

  /**
   * Its a pure inbound since no match found to any existing conversation
   *
   * @generated from enum value: INBOUND_PURE = 4;
   */
  INBOUND_PURE = 4,

  /**
   * copy outbound task details to reply table
   *
   * @generated from enum value: OUTBOUND_TASK = 5;
   */
  OUTBOUND_TASK = 5,

  /**
   * Its a reply to pure outbound msg
   *
   * @generated from enum value: OUTBOUND_PURE = 6;
   */
  OUTBOUND_PURE = 6,
}

