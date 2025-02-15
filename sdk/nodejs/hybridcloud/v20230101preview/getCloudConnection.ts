// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as enums from "../../types/enums";
import * as utilities from "../../utilities";

/**
 * Gets the specified cloud connection in a specified resource group.
 */
export function getCloudConnection(args: GetCloudConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:hybridcloud/v20230101preview:getCloudConnection", {
        "cloudConnectionName": args.cloudConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudConnectionArgs {
    /**
     * The name of the cloud connection resource
     */
    cloudConnectionName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Resource which represents the managed network connection between Azure Gateways and remote cloud gateways.
 */
export interface GetCloudConnectionResult {
    /**
     * The cloud connector which discovered the remote resource.
     */
    readonly cloudConnector?: outputs.hybridcloud.v20230101preview.ResourceReferenceResponse;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The provisioning state of the cloud collection resource.
     */
    readonly provisioningState: string;
    /**
     * Identifier for the remote cloud resource
     */
    readonly remoteResourceId?: string;
    /**
     * Shared key of the cloud connection.
     */
    readonly sharedKey?: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: outputs.hybridcloud.v20230101preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The virtualHub to which the cloud connection belongs.
     */
    readonly virtualHub?: outputs.hybridcloud.v20230101preview.ResourceReferenceResponse;
}
/**
 * Gets the specified cloud connection in a specified resource group.
 */
export function getCloudConnectionOutput(args: GetCloudConnectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCloudConnectionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:hybridcloud/v20230101preview:getCloudConnection", {
        "cloudConnectionName": args.cloudConnectionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetCloudConnectionOutputArgs {
    /**
     * The name of the cloud connection resource
     */
    cloudConnectionName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
