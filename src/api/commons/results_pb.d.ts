// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file api/commons/results.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * @generated from enum api.commons.CallResult
 */
export declare enum CallResult {
  /**
   * it's here only b/c protobuf requires it ... do never use it!
   *
   * @generated from enum value: CALL_RESULT_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * "CALL_PENDING", "Pending", "PED", "Call is pending result, default call result"),
   *
   * @generated from enum value: CALL_RESULT_PENDING = 1000;
   */
  PENDING = 1000,

  /**
   * "CALL_ANSWERED", "Answered", "ANS", "Call was answered, no other detail available"),
   *
   * @generated from enum value: CALL_RESULT_ANSWERED = 2000;
   */
  ANSWERED = 2000,

  /**
   * "CALL_ANSWERED_LINKCALL", "Answered Linkcall", "ANL", "Call was answered and a linkback was attempted"),
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_LINKCALL = 2100;
   */
  ANSWERED_LINKCALL = 2100,

  /**
   * "CALL_ANSWERED_LINKCALL_ABANDONED", "Answered Linkcall Abandoned", "ALA", "Call was answered and a linkback established, but was abandoned  before agent connect"),
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_LINKCALL_ABANDONED = 2110;
   */
  ANSWERED_LINKCALL_ABANDONED = 2110,

  /**
   * "CALL_ANSWERED_LINKCALL_AGENT_TALK", "Answered Linkcall Agent Talk", "AGT", "Call was answered and a linkback established to agent"),
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_LINKCALL_AGENT_TALK = 2120;
   */
  ANSWERED_LINKCALL_AGENT_TALK = 2120,

  /**
   * "CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED", "Answered Linkcall suspended", "call was suspended"
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED = 2130;
   */
  ANSWERED_LINKCALL_SUSPENDED = 2130,

  /**
   * "CALL_ANSWERED_LINKCALL_SUSPENDED_TIMEOUT", "Suspend linkcall timeout", "call was timedout"),
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED_TIMEOUT = 2140;
   */
  ANSWERED_LINKCALL_SUSPENDED_TIMEOUT = 2140,

  /**
   * "CALL_ANSWERED_LINKCALL_LINKCALL_SUSPENDED_REPLACE_WITH_CALLER", "suspended call reaplaced with caller.)"
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED_INBOUND_OVERRIDE = 2150;
   */
  ANSWERED_LINKCALL_SUSPENDED_INBOUND_OVERRIDE = 2150,

  /**
   * "CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED_RESUMED", "Answered Linkcall Suspended Resume", "suspended call resumed.)"
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_LINKCALL_SUSPENDED_RESUMED = 2160;
   */
  ANSWERED_LINKCALL_SUSPENDED_RESUMED = 2160,

  /**
   * "CALL_ANSWERED_HANGUP", "Answered Hangup", "ANH", "Call was answered and the TCN system hung up"),
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_HANGUP = 2200;
   */
  ANSWERED_HANGUP = 2200,

  /**
   * "CALL_ANSWERED_VOICEMAIL", "Answered VoiceMail", "ANV", "Call was answered and a linkback was attempted, but went to voicemail" ),
   *
   * @generated from enum value: CALL_RESULT_ANSWERED_VOICEMAIL = 2300;
   */
  ANSWERED_VOICEMAIL = 2300,

  /**
   * "CALL_MACHINE", "Machine", "MAC", "Call was detected as answering machine, no other details available"),
   *
   * @generated from enum value: CALL_RESULT_MACHINE = 3000;
   */
  MACHINE = 3000,

  /**
   * "CALL_MACHINE_DELIVERED", "Machine Delivered", "MAD", "Call was detected as answering machine a message was delivered"),
   *
   * @generated from enum value: CALL_RESULT_MACHINE_DELIVERED = 3100;
   */
  MACHINE_DELIVERED = 3100,

  /**
   * "CALL_MACHINE_HANGUP", "Machine Hangup", "MAH", "Call was detected as answering machine and the TCN system hung up"),
   *
   * @generated from enum value: CALL_RESULT_MACHINE_HANGUP = 3200;
   */
  MACHINE_HANGUP = 3200,

  /**
   * "CALL_RESULT_MACHINE_FAILED", "Machine Undeliverable", "MAF", "Call was detected as answering machine but remote machine hungup on TCN" ),
   *
   * @generated from enum value: CALL_RESULT_MACHINE_FAILED = 3300;
   */
  MACHINE_FAILED = 3300,

  /**
   * "CALL_FAX", "Fax", "FAX", "Fax was detected, no other details available"),
   *
   * @generated from enum value: CALL_RESULT_FAX = 4000;
   */
  FAX = 4000,

  /**
   * "CALL_FAX_DELIVERED", "Fax Delivered", "FAD", "Fax machine detected and a fax was sent"),
   *
   * @generated from enum value: CALL_RESULT_FAX_DELIVERED = 4100;
   */
  FAX_DELIVERED = 4100,

  /**
   * "CALL_BUSY", "Busy", "BZY", "Call was busy, no other details available"),
   *
   * @generated from enum value: CALL_RESULT_BUSY = 5000;
   */
  BUSY = 5000,

  /**
   * "CALL_NOANSWER", "No Answer", "NOA", "Call was not answered, no other details available"),
   *
   * @generated from enum value: CALL_RESULT_NO_ANSWER = 6000;
   */
  NO_ANSWER = 6000,

  /**
   * "CALL_INVALID", "Invalid", "INV", "Call was invalid, no other details available"),
   *
   * @generated from enum value: CALL_RESULT_INVALID = 7000;
   */
  INVALID = 7000,

  /**
   * "CALL_INVALID_INCOMPLETE_NUMBER", "Invalid Incomplete Number", "INC", "Call was invalid, incomplete number"),
   *
   * @generated from enum value: CALL_RESULT_INVALID_INCOMPLETE_NUMBER = 7100;
   */
  INVALID_INCOMPLETE_NUMBER = 7100,

  /**
   * "CALL_INVALID_UNKNOWN_PREFIX", "Invalid Unknow Prefix", "IUP", "Call was invalid, unknown prefix"),
   *
   * @generated from enum value: CALL_RESULT_INVALID_UNKNOWN_PREFIX = 7200;
   */
  INVALID_UNKNOWN_PREFIX = 7200,

  /**
   * "CALL_INVALID_UNKNOWN_PREFIX_NPA", "Invalid Unknown NPA", "INP", "Call was invalid, unknown NPA"),
   *
   * @generated from enum value: CALL_RESULT_INVALID_UNKNOWN_PREFIX_NPA = 7210;
   */
  INVALID_UNKNOWN_PREFIX_NPA = 7210,

  /**
   * "CALL_INVALID_UNKNOWN_PREFIX_NPANXX", "Invalid Unknown NPA-NXX", "INX", "Call was invalid,unknown NPA-NXX"),
   *
   * @generated from enum value: CALL_RESULT_INVALID_UNKNOWN_PREFIX_NPANXX = 7220;
   */
  INVALID_UNKNOWN_PREFIX_NPANXX = 7220,

  /**
   * "CALL_INVALID_PREFIX_NPANXX_NOT_FOUND", "Invalid NPA-NXX Not Found", "INF", "Call was invalid, NPA-NXX not found"),
   *
   * @generated from enum value: CALL_RESULT_INVALID_PREFIX_NPANXX_NOT_FOUND = 7230;
   */
  INVALID_PREFIX_NPANXX_NOT_FOUND = 7230,

  /**
   * "CALL_INVALID_NO_ROUTE", "Invalid No Route", "INR", "Call invalid, no route to host"),
   *
   * @generated from enum value: CALL_RESULT_INVALID_NO_ROUTE = 7300;
   */
  INVALID_NO_ROUTE = 7300,

  /**
   * "CALL_INVALID_DISCONNECTED", "Invalid Disconnected", "IDC", "Call invalid, disconnected"),
   *
   * @generated from enum value: CALL_RESULT_INVALID_DISCONNECTED = 7400;
   */
  INVALID_DISCONNECTED = 7400,

  /**
   * "CALL_INVALID_DISCONNECTED_SKIPTRACE", "Invalid Disconnected Skiptrace", "IDS", "Call invalid, disconnected, tcn was able to get a number from the recording"),
   *
   * @generated from enum value: CALL_RESULT_INVALID_DISCONNECTED_SKIPTRACE = 7410;
   */
  INVALID_DISCONNECTED_SKIPTRACE = 7410,

  /**
   * "CALL_FAILED", "Failed", "FAL", "Call failed for unknown reason"),
   *
   * @generated from enum value: CALL_RESULT_FAILED = 8000;
   */
  FAILED = 8000,

  /**
   * "CALL_FAILED_NO_LINES", "Failed No Lines", "FNL", "Call failed," + " tcn had no available lines to deliver call"),
   *
   * @generated from enum value: CALL_RESULT_FAILED_NO_LINES = 8100;
   */
  FAILED_NO_LINES = 8100,

  /**
   * "CALL_FAILED_CIRCUITS_BUSY", "Failed Busy Circuits", "FBC", "Call failed, all circuits busy"),
   *
   * @generated from enum value: CALL_RESULT_FAILED_CIRCUITS_BUSY = 8200;
   */
  FAILED_CIRCUITS_BUSY = 8200,

  /**
   * "CALL_FAILED_REFUSED", "Failed Refused", "FRE", "Call failed, tcn refused the call"),
   *
   * @generated from enum value: CALL_RESULT_FAILED_REFUSED = 8300;
   */
  FAILED_REFUSED = 8300,

  /**
   * "CALL_FAILED_REFUSED_LEGAL", "Failed Refused Legal", "FRL", "Call failed, tcn refused the call on legal grounds"),
   *
   * @generated from enum value: CALL_RESULT_FAILED_REFUSED_LEGAL = 8310;
   */
  FAILED_REFUSED_LEGAL = 8310,

  /**
   * "CALL_FAILED_REFUSED_TECHNICAL", "Failed Refused Technical", "FRT", "Call failed, tcn is unable to dial into requested region for technical reasons"),
   *
   * @generated from enum value: CALL_RESULT_FAILED_REFUSED_TECHNICAL = 8320;
   */
  FAILED_REFUSED_TECHNICAL = 8320,

  /**
   * "CALL_RESULT_FAILED_INTERNAL_ERROR", "Failed Internal Technical Problem", "FIE", "Task integrity check failed!!!!!!"), // this could happen only in
   *
   * @generated from enum value: CALL_RESULT_FAILED_INTERNAL_ERROR = 8330;
   */
  FAILED_INTERNAL_ERROR = 8330,

  /**
   * the case of a crash and
   * the restart of a task was
   * not a clean one ....
   *
   * "CALL_RESULT_FAILED_REFUSED_RETRIES_EXHAUSTED", "Failed Refused Retries Exhausted", "FRR", "Call failed, retries exhausted"
   *
   * @generated from enum value: CALL_RESULT_FAILED_REFUSED_RETRIES_EXHAUSTED = 8340;
   */
  FAILED_REFUSED_RETRIES_EXHAUSTED = 8340,

  /**
   * "CALL_RESULT_FAILED_REFUSED_BLOCK", "Failed Refused Block", "FRB", "Call blocked"
   *
   * @generated from enum value: CALL_RESULT_FAILED_REFUSED_BLOCK = 8350;
   */
  FAILED_REFUSED_BLOCK = 8350,

  /**
   * "CALL_CANCELED", "Canceled", "CAN", "Call canceled, reason unknown"),
   *
   * @generated from enum value: CALL_RESULT_CANCELED = 9000;
   */
  CANCELED = 9000,

  /**
   * "CALL_CANCELED_TIMEZONE", "Canceled Timezone", "CAZ", "Call canceled due to timezone restrictions"),
   *
   * @generated from enum value: CALL_RESULT_CANCELED_TIMEZONE = 9100;
   */
  CANCELED_TIMEZONE = 9100,

  /**
   * "CALL_CANCELED_TIMEOUT", "Canceled Timeout", "CAT", "Call canceled due to timeone"),
   *
   * @generated from enum value: CALL_RESULT_CANCELED_TIMEOUT = 9200;
   */
  CANCELED_TIMEOUT = 9200,

  /**
   * "CALL_CANCELED_DNCL", "Canceled DNCL", "CDL", "Call canceled due to Do Not Call List"),
   *
   * @generated from enum value: CALL_RESULT_CANCELED_DNCL = 9300;
   */
  CANCELED_DNCL = 9300,

  /**
   * "CALL_CANCELED_CELLULAR_DNCL", "Canceled DNC Cellular", "CDC", "Call canceled due to requested cell phone scrubbing"),
   *
   * @generated from enum value: CALL_RESULT_CANCELED_CELLULAR_DNCL = 9310;
   */
  CANCELED_CELLULAR_DNCL = 9310,

  /**
   * "CALL_CANCELED_DNCL_ZIP_CODE", "Canceled DNC Zip Code", "CDZ", "Call canceled due to requested zip code scrubbing"),
   *
   * @generated from enum value: CALL_RESULT_CANCELED_DNCL_ZIP_CODE = 9320;
   */
  CANCELED_DNCL_ZIP_CODE = 9320,

  /**
   * "CALL_RESULT_CANCELED_MAX_RETRY", "Canceled Max Retry", "CMR", "Call canceled due to Max Retry was reached"),
   *
   * @generated from enum value: CALL_RESULT_CANCELED_MAX_RETRY = 9400;
   */
  CANCELED_MAX_RETRY = 9400,

  /**
   * "CALL_CANCELED_INCOMPLETE_NUMBER", "Cancelled Incomplete Number", "CIN", "Call was cancelled, incomplete number");
   *
   * @generated from enum value: CALL_RESULT_CANCELED_INCOMPLETE_NUMBER = 9500;
   */
  CANCELED_INCOMPLETE_NUMBER = 9500,
}

