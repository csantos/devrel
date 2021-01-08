/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const apickli = require("apickli");
const { Before: before } = require("cucumber");

before(function () {
  this.apickli = new apickli.Apickli(
    "https",
    process.env.APIGEE_ORG + "-test.apigee.net/kvm-admin/v1"
  );

  this.apickli.addRequestHeader("Cache-Control", "no-cache");
});
