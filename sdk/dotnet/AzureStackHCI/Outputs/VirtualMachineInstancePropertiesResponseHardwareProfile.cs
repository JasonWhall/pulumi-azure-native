// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNative.AzureStackHCI.Outputs
{

    /// <summary>
    /// HardwareProfile - Specifies the hardware settings for the virtual machine instance.
    /// </summary>
    [OutputType]
    public sealed class VirtualMachineInstancePropertiesResponseHardwareProfile
    {
        public readonly Outputs.VirtualMachineInstancePropertiesResponseDynamicMemoryConfig? DynamicMemoryConfig;
        /// <summary>
        /// RAM in MB for the virtual machine instance
        /// </summary>
        public readonly double? MemoryMB;
        /// <summary>
        /// number of processors for the virtual machine instance
        /// </summary>
        public readonly int? Processors;
        public readonly string? VmSize;

        [OutputConstructor]
        private VirtualMachineInstancePropertiesResponseHardwareProfile(
            Outputs.VirtualMachineInstancePropertiesResponseDynamicMemoryConfig? dynamicMemoryConfig,

            double? memoryMB,

            int? processors,

            string? vmSize)
        {
            DynamicMemoryConfig = dynamicMemoryConfig;
            MemoryMB = memoryMB;
            Processors = processors;
            VmSize = vmSize;
        }
    }
}
