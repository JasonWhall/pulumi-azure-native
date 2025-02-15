// *** WARNING: this file was generated by pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNative.MachineLearningServices.V20220201Preview.Outputs
{

    /// <summary>
    /// Recurrence schedule definition
    /// </summary>
    [OutputType]
    public sealed class RecurrenceScheduleResponse
    {
        /// <summary>
        /// Specifies end time of schedule in ISO 8601 format.
        /// If not present, the schedule will run indefinitely
        /// </summary>
        public readonly string? EndTime;
        /// <summary>
        /// [Required] Specifies frequency with with which to trigger schedule
        /// </summary>
        public readonly string Frequency;
        /// <summary>
        /// [Required] Specifies schedule interval in conjunction with frequency
        /// </summary>
        public readonly int Interval;
        /// <summary>
        /// Specifies the recurrence schedule pattern
        /// </summary>
        public readonly Outputs.RecurrencePatternResponse? Pattern;
        /// <summary>
        /// Specifies the schedule's status
        /// </summary>
        public readonly string? ScheduleStatus;
        /// <summary>
        /// Enum to describe type of schedule
        /// Expected value is 'Recurrence'.
        /// </summary>
        public readonly string ScheduleType;
        /// <summary>
        /// Specifies start time of schedule in ISO 8601 format.
        /// </summary>
        public readonly string? StartTime;
        /// <summary>
        /// Specifies time zone in which the schedule runs.
        /// TimeZone should follow Windows time zone format.
        /// </summary>
        public readonly string? TimeZone;

        [OutputConstructor]
        private RecurrenceScheduleResponse(
            string? endTime,

            string frequency,

            int interval,

            Outputs.RecurrencePatternResponse? pattern,

            string? scheduleStatus,

            string scheduleType,

            string? startTime,

            string? timeZone)
        {
            EndTime = endTime;
            Frequency = frequency;
            Interval = interval;
            Pattern = pattern;
            ScheduleStatus = scheduleStatus;
            ScheduleType = scheduleType;
            StartTime = startTime;
            TimeZone = timeZone;
        }
    }
}
