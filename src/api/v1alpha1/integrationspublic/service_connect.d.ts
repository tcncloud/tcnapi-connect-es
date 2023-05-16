// @generated by protoc-gen-connect-es v0.8.6
// @generated from file api/v1alpha1/integrationspublic/service.proto (package api.v1alpha1.integrationspublic, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetInvoiceReq, GetInvoiceRes, GetLinkDataReq, GetLinkDataRes, GetReceiptReq, GetReceiptRes, SessionKeepAliveReq, SessionKeepAliveRes, SubmitPaymentReq, SubmitPaymentRes, SubmitVerificationReq, SubmitVerificationRes } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service api.v1alpha1.integrationspublic.IntegrationsPublic
 */
export declare const IntegrationsPublic: {
  readonly typeName: "api.v1alpha1.integrationspublic.IntegrationsPublic",
  readonly methods: {
    /**
     * @generated from rpc api.v1alpha1.integrationspublic.IntegrationsPublic.GetLinkData
     */
    readonly getLinkData: {
      readonly name: "GetLinkData",
      readonly I: typeof GetLinkDataReq,
      readonly O: typeof GetLinkDataRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrationspublic.IntegrationsPublic.SubmitVerification
     */
    readonly submitVerification: {
      readonly name: "SubmitVerification",
      readonly I: typeof SubmitVerificationReq,
      readonly O: typeof SubmitVerificationRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrationspublic.IntegrationsPublic.SessionKeepAlive
     */
    readonly sessionKeepAlive: {
      readonly name: "SessionKeepAlive",
      readonly I: typeof SessionKeepAliveReq,
      readonly O: typeof SessionKeepAliveRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrationspublic.IntegrationsPublic.GetInvoice
     */
    readonly getInvoice: {
      readonly name: "GetInvoice",
      readonly I: typeof GetInvoiceReq,
      readonly O: typeof GetInvoiceRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrationspublic.IntegrationsPublic.SubmitPayment
     */
    readonly submitPayment: {
      readonly name: "SubmitPayment",
      readonly I: typeof SubmitPaymentReq,
      readonly O: typeof SubmitPaymentRes,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc api.v1alpha1.integrationspublic.IntegrationsPublic.GetReceipt
     */
    readonly getReceipt: {
      readonly name: "GetReceipt",
      readonly I: typeof GetReceiptReq,
      readonly O: typeof GetReceiptRes,
      readonly kind: MethodKind.Unary,
    },
  }
};

