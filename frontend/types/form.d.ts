// Adjust the imports and types to match your project structure
import {
  SubmissionHandler,
  FormContext,
  handleSubmit as handleSubmitType,
} from "vee-validate";

declare module "vee-validate" {
  export const handleSubmit: handleSubmitType;

  export interface FormContext {
    handleSubmit: handleSubmitType;
  }

  export interface FormProps {
    onSubmit: SubmissionHandler<any>;
  }
}
