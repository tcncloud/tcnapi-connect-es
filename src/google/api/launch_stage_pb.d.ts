// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.3.0 with parameter "target=js+dts"
// @generated from file google/api/launch_stage.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

/**
 * The launch stage as defined by [Google Cloud Platform
 * Launch Stages](https://cloud.google.com/terms/launch-stages).
 *
 * @generated from enum google.api.LaunchStage
 */
export declare enum LaunchStage {
  /**
   * Do not use this default value.
   *
   * @generated from enum value: LAUNCH_STAGE_UNSPECIFIED = 0;
   */
  LAUNCH_STAGE_UNSPECIFIED = 0,

  /**
   * The feature is not yet implemented. Users can not use it.
   *
   * @generated from enum value: UNIMPLEMENTED = 6;
   */
  UNIMPLEMENTED = 6,

  /**
   * Prelaunch features are hidden from users and are only visible internally.
   *
   * @generated from enum value: PRELAUNCH = 7;
   */
  PRELAUNCH = 7,

  /**
   * Early Access features are limited to a closed group of testers. To use
   * these features, you must sign up in advance and sign a Trusted Tester
   * agreement (which includes confidentiality provisions). These features may
   * be unstable, changed in backward-incompatible ways, and are not
   * guaranteed to be released.
   *
   * @generated from enum value: EARLY_ACCESS = 1;
   */
  EARLY_ACCESS = 1,

  /**
   * Alpha is a limited availability test for releases before they are cleared
   * for widespread use. By Alpha, all significant design issues are resolved
   * and we are in the process of verifying functionality. Alpha customers
   * need to apply for access, agree to applicable terms, and have their
   * projects allowlisted. Alpha releases don't have to be feature complete,
   * no SLAs are provided, and there are no technical support obligations, but
   * they will be far enough along that customers can actually use them in
   * test environments or for limited-use tests -- just like they would in
   * normal production cases.
   *
   * @generated from enum value: ALPHA = 2;
   */
  ALPHA = 2,

  /**
   * Beta is the point at which we are ready to open a release for any
   * customer to use. There are no SLA or technical support obligations in a
   * Beta release. Products will be complete from a feature perspective, but
   * may have some open outstanding issues. Beta releases are suitable for
   * limited production use cases.
   *
   * @generated from enum value: BETA = 3;
   */
  BETA = 3,

  /**
   * GA features are open to all developers and are considered stable and
   * fully qualified for production use.
   *
   * @generated from enum value: GA = 4;
   */
  GA = 4,

  /**
   * Deprecated features are scheduled to be shut down and removed. For more
   * information, see the "Deprecation Policy" section of our [Terms of
   * Service](https://cloud.google.com/terms/)
   * and the [Google Cloud Platform Subject to the Deprecation
   * Policy](https://cloud.google.com/terms/deprecation) documentation.
   *
   * @generated from enum value: DEPRECATED = 5;
   */
  DEPRECATED = 5,
}

