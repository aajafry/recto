import PropTypes from "prop-types";
import Paragraph from "../atom/Paragraph";

function Input({ type, name, placeholder, register, errors }) {
  return (
    <div className="flex flex-col gap-1">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        className="py-2 px-3 w-full border-[1px] border-gray-300 rounded-md hover:drop-shadow-md focus:outline-none focus:border-highlighter-theme common-transition"
        {...register(name, { required: true })}
      />
      {errors[name] && (
        <Paragraph style="text-error-theme text-sm font-semibold">
          {errors[name].message}
        </Paragraph>
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
};

export default Input;
