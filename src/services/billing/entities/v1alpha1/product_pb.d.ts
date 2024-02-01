// @generated by protoc-gen-es v1.7.2 with parameter "target=js+dts"
// @generated from file services/billing/entities/v1alpha1/product.proto (package services.billing.entities.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * Product represents a billing product. A product should
 * only show up once on an invoice.
 *
 * @generated from enum services.billing.entities.v1alpha1.Product
 */
export declare enum Product {
  /**
   * @generated from enum value: PRODUCT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PRODUCT_AGENT_SEATS = 100;
   */
  AGENT_SEATS = 100,

  /**
   * @generated from enum value: PRODUCT_OMNI = 200;
   */
  OMNI = 200,

  /**
   * @generated from enum value: PRODUCT_OMNI_CHAT_SENT = 201;
   */
  OMNI_CHAT_SENT = 201,

  /**
   * @generated from enum value: PRODUCT_OMNI_CHAT_RECEIVED = 202;
   */
  OMNI_CHAT_RECEIVED = 202,

  /**
   * @generated from enum value: PRODUCT_OMNI_EMAILS_SENT = 203;
   */
  OMNI_EMAILS_SENT = 203,

  /**
   * @generated from enum value: PRODUCT_OMNI_EMAILS_RECEIVED = 204;
   */
  OMNI_EMAILS_RECEIVED = 204,

  /**
   * @generated from enum value: PRODUCT_OMNI_SMS_SENT = 205;
   */
  OMNI_SMS_SENT = 205,

  /**
   * @generated from enum value: PRODUCT_OMNI_SMS_RECEIVED = 206;
   */
  OMNI_SMS_RECEIVED = 206,

  /**
   * @generated from enum value: PRODUCT_COMPLIANCE = 300;
   */
  COMPLIANCE = 300,
}

