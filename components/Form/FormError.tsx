import { ErrorMessage } from "@hookform/error-message";
import { makeClassName } from "../../lib/utils";

function FormError({ className, ...props }: any) {
  return (
    <div className="pt-1">
      <ErrorMessage
        {...props}
        render={({ message }) => (
          <span
            className={makeClassName(["text-red-500 text-sm", className])}
            {...props}>
            {message}
          </span>
        )}
      />
    </div>
  );
}

export default FormError;
