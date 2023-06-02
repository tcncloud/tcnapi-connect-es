// @generated by protoc-gen-connect-es v0.9.1
// @generated from file api/v0alpha/callqueue.proto (package api.v0alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ClearManualDialQueueReq, ClearManualDialQueueRes, ClearPreviewRecordReturnQueueReq, ClearPreviewRecordReturnQueueRes, DequeueCallForManualApprovalReq, DequeueCallForManualApprovalRes, DequeuePreviewRecordOrCallReq, DequeuePreviewRecordOrCallRes, DequeueScrubbedCallForPreviewRecordReq, DequeueScrubbedCallForPreviewRecordRes, DequeueSmsMamForManualApprovalReq, DequeueSmsMamForManualApprovalRes, EnqueueManuallyApprovedCallReq, EnqueueManuallyApprovedCallRes, EnqueueManuallyApprovedSmsReq, EnqueueManuallyApprovedSmsRes, EnqueueManuallyRejectedCallReq, EnqueueManuallyRejectedCallRes, EnqueueManuallyRejectedSmsReq, EnqueueManuallyRejectedSmsRes, EnqueuePreviewDialCallReq, EnqueuePreviewDialCallRes, EnqueuePreviewRecordReq, EnqueuePreviewRecordRes, ProcessManualDialCallReq, ProcessManualDialCallRes, RequeueManuallyApprovedCallReq, RequeueManuallyApprovedCallRes, RequeueManuallyApprovedSmsReq, RequeueManuallyApprovedSmsRes } from "./callqueue_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v0alpha.CallQueue
 */
export const CallQueue = {
  typeName: "api.v0alpha.CallQueue",
  methods: {
    /**
     * Returns either a preview record or preview call from one of multiple queues,
     * it also returns a field for the queue name so record/call can be enqueued back to the same queue.
     * It checks for a record first, if no record is dequeued, then the preview call queues will be checked.
     *
     * @generated from rpc api.v0alpha.CallQueue.DequeuePreviewRecordOrCall
     */
    dequeuePreviewRecordOrCall: {
      name: "DequeuePreviewRecordOrCall",
      I: DequeuePreviewRecordOrCallReq,
      O: DequeuePreviewRecordOrCallRes,
      kind: MethodKind.Unary,
    },
    /**
     * Enqueues the given preview record into the specified queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.EnqueuePreviewRecord
     */
    enqueuePreviewRecord: {
      name: "EnqueuePreviewRecord",
      I: EnqueuePreviewRecordReq,
      O: EnqueuePreviewRecordRes,
      kind: MethodKind.Unary,
    },
    /**
     * Returns the scrubbed simple call data for the given preview record.
     *
     * @generated from rpc api.v0alpha.CallQueue.DequeueScrubbedCallForPreviewRecord
     */
    dequeueScrubbedCallForPreviewRecord: {
      name: "DequeueScrubbedCallForPreviewRecord",
      I: DequeueScrubbedCallForPreviewRecordReq,
      O: DequeueScrubbedCallForPreviewRecordRes,
      kind: MethodKind.Unary,
    },
    /**
     * Clears the preview record return queue for the requesting agent.
     *
     * @generated from rpc api.v0alpha.CallQueue.ClearPreviewRecordReturnQueue
     */
    clearPreviewRecordReturnQueue: {
      name: "ClearPreviewRecordReturnQueue",
      I: ClearPreviewRecordReturnQueueReq,
      O: ClearPreviewRecordReturnQueueRes,
      kind: MethodKind.Unary,
    },
    /**
     * Enqueues the given preview dial call into the specified queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.EnqueuePreviewDialCall
     */
    enqueuePreviewDialCall: {
      name: "EnqueuePreviewDialCall",
      I: EnqueuePreviewDialCallReq,
      O: EnqueuePreviewDialCallRes,
      kind: MethodKind.Unary,
    },
    /**
     * Clears the manual dial return queue of the requesting agent.
     *
     * @generated from rpc api.v0alpha.CallQueue.ClearManualDialQueue
     */
    clearManualDialQueue: {
      name: "ClearManualDialQueue",
      I: ClearManualDialQueueReq,
      O: ClearManualDialQueueRes,
      kind: MethodKind.Unary,
    },
    /**
     * Enqueues the call to the manual dial receive queue for scrubbing.
     * The call will then be added to the manual dial return queue of the requesting agent.
     * The scrubbed call is then dequeued from that agent's manual dial return queue and returned.
     *
     * @generated from rpc api.v0alpha.CallQueue.ProcessManualDialCall
     */
    processManualDialCall: {
      name: "ProcessManualDialCall",
      I: ProcessManualDialCallReq,
      O: ProcessManualDialCallRes,
      kind: MethodKind.Unary,
    },
    /**
     * Dequeues a call for manual approval from the requesting agent's hunt group queues or a client queue,
     * it also returns a field for the queue name so call can be enqueued back to the same queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.DequeueCallForManualApproval
     */
    dequeueCallForManualApproval: {
      name: "DequeueCallForManualApproval",
      I: DequeueCallForManualApprovalReq,
      O: DequeueCallForManualApprovalRes,
      kind: MethodKind.Unary,
    },
    /**
     * Enqueues a call in the MAC approval queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.EnqueueManuallyApprovedCall
     */
    enqueueManuallyApprovedCall: {
      name: "EnqueueManuallyApprovedCall",
      I: EnqueueManuallyApprovedCallReq,
      O: EnqueueManuallyApprovedCallRes,
      kind: MethodKind.Unary,
    },
    /**
     * Enqueues a call in the MAC rejection queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.EnqueueManuallyRejectedCall
     */
    enqueueManuallyRejectedCall: {
      name: "EnqueueManuallyRejectedCall",
      I: EnqueueManuallyRejectedCallReq,
      O: EnqueueManuallyRejectedCallRes,
      kind: MethodKind.Unary,
    },
    /**
     * Requeues a call requiring manual approval to the specified queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.RequeueManuallyApprovedCall
     */
    requeueManuallyApprovedCall: {
      name: "RequeueManuallyApprovedCall",
      I: RequeueManuallyApprovedCallReq,
      O: RequeueManuallyApprovedCallRes,
      kind: MethodKind.Unary,
    },
    /**
     * Enqueues sms msg in the MAM approval queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.EnqueueManuallyApprovedSms
     */
    enqueueManuallyApprovedSms: {
      name: "EnqueueManuallyApprovedSms",
      I: EnqueueManuallyApprovedSmsReq,
      O: EnqueueManuallyApprovedSmsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Enqueues sms msg in the MAM rejection queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.EnqueueManuallyRejectedSms
     */
    enqueueManuallyRejectedSms: {
      name: "EnqueueManuallyRejectedSms",
      I: EnqueueManuallyRejectedSmsReq,
      O: EnqueueManuallyRejectedSmsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Requeues sms msg requiring manual approval to the specified queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.RequeueManuallyApprovedSms
     */
    requeueManuallyApprovedSms: {
      name: "RequeueManuallyApprovedSms",
      I: RequeueManuallyApprovedSmsReq,
      O: RequeueManuallyApprovedSmsRes,
      kind: MethodKind.Unary,
    },
    /**
     * Dequeues a sms mam msg for manual approval from the requesting agent's hunt group queues or a client queue,
     * it also returns a field for the queue name so sms mam msg can be enqueued back to the same queue.
     *
     * @generated from rpc api.v0alpha.CallQueue.DequeueSmsMamForManualApproval
     */
    dequeueSmsMamForManualApproval: {
      name: "DequeueSmsMamForManualApproval",
      I: DequeueSmsMamForManualApprovalReq,
      O: DequeueSmsMamForManualApprovalRes,
      kind: MethodKind.Unary,
    },
  }
};

