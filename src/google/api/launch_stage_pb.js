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

// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file google/api/launch_stage.proto (package google.api, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * The launch stage as defined by [Google Cloud Platform
 * Launch Stages](https://cloud.google.com/terms/launch-stages).
 *
 * @generated from enum google.api.LaunchStage
 */
export const LaunchStage = proto3.makeEnum(
  "google.api.LaunchStage",
  [
    {no: 0, name: "LAUNCH_STAGE_UNSPECIFIED"},
    {no: 6, name: "UNIMPLEMENTED"},
    {no: 7, name: "PRELAUNCH"},
    {no: 1, name: "EARLY_ACCESS"},
    {no: 2, name: "ALPHA"},
    {no: 3, name: "BETA"},
    {no: 4, name: "GA"},
    {no: 5, name: "DEPRECATED"},
  ],
);
