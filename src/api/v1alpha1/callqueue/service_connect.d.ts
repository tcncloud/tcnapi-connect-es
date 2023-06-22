// @generated by protoc-gen-connect-es v0.10.1
// @generated from file api/v1alpha1/callqueue/service.proto (package api.v1alpha1.callqueue, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ClearManualDialQueueReq, ClearManualDialQueueRes, ClearPreviewRecordReturnQueueReq, ClearPreviewRecordReturnQueueRes, DequeueCallForManualApprovalReq, DequeueCallForManualApprovalRes, DequeuePreviewRecordOrCallReq, DequeuePreviewRecordOrCallRes, DequeueScrubbedCallForPreviewRecordReq, DequeueScrubbedCallForPreviewRecordRes, DequeueSmsMamForManualApprovalReq, DequeueSmsMamForManualApprovalRes, EnqueueManuallyApprovedCallReq, EnqueueManuallyApprovedCallRes, EnqueueManuallyApprovedSmsReq, EnqueueManuallyApprovedSmsRes, EnqueueManuallyRejectedCallReq, EnqueueManuallyRejectedCallRes, EnqueueManuallyRejectedSmsReq, EnqueueManuallyRejectedSmsRes, EnqueuePreviewDialCallReq, EnqueuePreviewDialCallRes, EnqueuePreviewRecordReq, EnqueuePreviewRecordRes, ProcessManualDialCallReq, ProcessManualDialCallRes, RequeueManuallyApprovedCallReq, RequeueManuallyApprovedCallRes, RequeueManuallyApprovedSmsReq, RequeueManuallyApprovedSmsRes } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.callqueue.CallQueue
 */
export declare const CallQueue: {
  readonly typeName: "api.v1alpha1.callqueue.CallQueue",
  readonly methods: {
    /**
     * Returns either a preview record or preview call from one of multiple queues,
     * it also returns a field for the queue name so record/call can be enqueued back to the same queue.
     * It checks for a record first, if no record is dequeued, then the preview call queues will be checked.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.DequeuePreviewRecordOrCall
     */
    readonly dequeuePreviewRecordOrCall: {
      readonly name: "DequeuePreviewRecordOrCall",
      readonly I: typeof DequeuePreviewRecordOrCallReq,
      readonly O: typeof DequeuePreviewRecordOrCallRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Enqueues the given preview record into the specified queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.EnqueuePreviewRecord
     */
    readonly enqueuePreviewRecord: {
      readonly name: "EnqueuePreviewRecord",
      readonly I: typeof EnqueuePreviewRecordReq,
      readonly O: typeof EnqueuePreviewRecordRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Returns the scrubbed simple call data for the given preview record.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.DequeueScrubbedCallForPreviewRecord
     */
    readonly dequeueScrubbedCallForPreviewRecord: {
      readonly name: "DequeueScrubbedCallForPreviewRecord",
      readonly I: typeof DequeueScrubbedCallForPreviewRecordReq,
      readonly O: typeof DequeueScrubbedCallForPreviewRecordRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Clears the preview record return queue for the requesting agent.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.ClearPreviewRecordReturnQueue
     */
    readonly clearPreviewRecordReturnQueue: {
      readonly name: "ClearPreviewRecordReturnQueue",
      readonly I: typeof ClearPreviewRecordReturnQueueReq,
      readonly O: typeof ClearPreviewRecordReturnQueueRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Enqueues the given preview dial call into the specified queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.EnqueuePreviewDialCall
     */
    readonly enqueuePreviewDialCall: {
      readonly name: "EnqueuePreviewDialCall",
      readonly I: typeof EnqueuePreviewDialCallReq,
      readonly O: typeof EnqueuePreviewDialCallRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Clears the manual dial return queue of the requesting agent.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.ClearManualDialQueue
     */
    readonly clearManualDialQueue: {
      readonly name: "ClearManualDialQueue",
      readonly I: typeof ClearManualDialQueueReq,
      readonly O: typeof ClearManualDialQueueRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Enqueues the call to the manual dial receive queue for scrubbing.
     * The call will then be added to the manual dial return queue of the requesting agent.
     * The scrubbed call is then dequeued from that agent's manual dial return queue and returned.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.ProcessManualDialCall
     */
    readonly processManualDialCall: {
      readonly name: "ProcessManualDialCall",
      readonly I: typeof ProcessManualDialCallReq,
      readonly O: typeof ProcessManualDialCallRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Dequeues a call for manual approval from the requesting agent's hunt group queues or a client queue,
     * it also returns a field for the queue name so call can be enqueued back to the same queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.DequeueCallForManualApproval
     */
    readonly dequeueCallForManualApproval: {
      readonly name: "DequeueCallForManualApproval",
      readonly I: typeof DequeueCallForManualApprovalReq,
      readonly O: typeof DequeueCallForManualApprovalRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Enqueues a call in the MAC approval queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.EnqueueManuallyApprovedCall
     */
    readonly enqueueManuallyApprovedCall: {
      readonly name: "EnqueueManuallyApprovedCall",
      readonly I: typeof EnqueueManuallyApprovedCallReq,
      readonly O: typeof EnqueueManuallyApprovedCallRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Enqueues a call in the MAC rejection queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.EnqueueManuallyRejectedCall
     */
    readonly enqueueManuallyRejectedCall: {
      readonly name: "EnqueueManuallyRejectedCall",
      readonly I: typeof EnqueueManuallyRejectedCallReq,
      readonly O: typeof EnqueueManuallyRejectedCallRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Requeues a call requiring manual approval to the specified queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.RequeueManuallyApprovedCall
     */
    readonly requeueManuallyApprovedCall: {
      readonly name: "RequeueManuallyApprovedCall",
      readonly I: typeof RequeueManuallyApprovedCallReq,
      readonly O: typeof RequeueManuallyApprovedCallRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Enqueues sms msg in the MAM approval queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.EnqueueManuallyApprovedSms
     */
    readonly enqueueManuallyApprovedSms: {
      readonly name: "EnqueueManuallyApprovedSms",
      readonly I: typeof EnqueueManuallyApprovedSmsReq,
      readonly O: typeof EnqueueManuallyApprovedSmsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Enqueues sms msg in the MAM rejection queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.EnqueueManuallyRejectedSms
     */
    readonly enqueueManuallyRejectedSms: {
      readonly name: "EnqueueManuallyRejectedSms",
      readonly I: typeof EnqueueManuallyRejectedSmsReq,
      readonly O: typeof EnqueueManuallyRejectedSmsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Requeues sms msg requiring manual approval to the specified queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.RequeueManuallyApprovedSms
     */
    readonly requeueManuallyApprovedSms: {
      readonly name: "RequeueManuallyApprovedSms",
      readonly I: typeof RequeueManuallyApprovedSmsReq,
      readonly O: typeof RequeueManuallyApprovedSmsRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Dequeues a sms mam msg for manual approval from the requesting agent's hunt group queues or a client queue,
     * it also returns a field for the queue name so sms mam msg can be enqueued back to the same queue.
     *
     * @generated from rpc api.v1alpha1.callqueue.CallQueue.DequeueSmsMamForManualApproval
     */
    readonly dequeueSmsMamForManualApproval: {
      readonly name: "DequeueSmsMamForManualApproval",
      readonly I: typeof DequeueSmsMamForManualApprovalReq,
      readonly O: typeof DequeueSmsMamForManualApprovalRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

