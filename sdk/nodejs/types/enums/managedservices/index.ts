// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// Export sub-modules:
import * as v20221001 from "./v20221001";

export {
    v20221001,
};

export const MultiFactorAuthProvider = {
    Azure: "Azure",
    None: "None",
} as const;

/**
 * The multi-factor authorization provider to be used for just-in-time access requests.
 */
export type MultiFactorAuthProvider = (typeof MultiFactorAuthProvider)[keyof typeof MultiFactorAuthProvider];
