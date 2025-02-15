// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * Cloud Manager Tenant
 */
export function listPaloAltoNetworksCloudngfwCloudManagerTenants(args?: ListPaloAltoNetworksCloudngfwCloudManagerTenantsArgs, opts?: pulumi.InvokeOptions): Promise<ListPaloAltoNetworksCloudngfwCloudManagerTenantsResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cloudngfw/v20240207preview:listPaloAltoNetworksCloudngfwCloudManagerTenants", {
    }, opts);
}

export interface ListPaloAltoNetworksCloudngfwCloudManagerTenantsArgs {
}

/**
 * Cloud Manager Tenant
 */
export interface ListPaloAltoNetworksCloudngfwCloudManagerTenantsResult {
    /**
     * List of Cloud Manager Tenants
     */
    readonly value: string[];
}
/**
 * Cloud Manager Tenant
 */
export function listPaloAltoNetworksCloudngfwCloudManagerTenantsOutput(opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListPaloAltoNetworksCloudngfwCloudManagerTenantsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cloudngfw/v20240207preview:listPaloAltoNetworksCloudngfwCloudManagerTenants", {
    }, opts);
}

