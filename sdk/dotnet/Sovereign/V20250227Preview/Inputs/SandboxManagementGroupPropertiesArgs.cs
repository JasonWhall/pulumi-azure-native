// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNative.Sovereign.V20250227Preview.Inputs
{

    /// <summary>
    /// Sandbox management group properties.
    /// </summary>
    public sealed class SandboxManagementGroupPropertiesArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// When set to false this management group will not be created. The default value is false.
        /// </summary>
        [Input("create", required: true)]
        public Input<bool> Create { get; set; } = null!;

        [Input("policyInitiativesAssignmentProperties", required: true)]
        private InputList<Inputs.PolicyInitiativeAssignmentPropertiesArgs>? _policyInitiativesAssignmentProperties;

        /// <summary>
        /// Array of initiative assignments to be applied to the management group.
        /// </summary>
        public InputList<Inputs.PolicyInitiativeAssignmentPropertiesArgs> PolicyInitiativesAssignmentProperties
        {
            get => _policyInitiativesAssignmentProperties ?? (_policyInitiativesAssignmentProperties = new InputList<Inputs.PolicyInitiativeAssignmentPropertiesArgs>());
            set => _policyInitiativesAssignmentProperties = value;
        }

        public SandboxManagementGroupPropertiesArgs()
        {
        }
        public static new SandboxManagementGroupPropertiesArgs Empty => new SandboxManagementGroupPropertiesArgs();
    }
}
