/* eslint-disable react/prop-types */
const Input = ({
  label,
  style,
  placeholder,
  onChange,
  value,
  type,
  name,
  idLabel,
  id,
  labelClassName,
  ...props
}) => {
  return (
    <>
      {label && (
        <label
          htmlFor={idLabel}
          className={`label label-text-alt text-primary ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        style={style}
        placeholder={placeholder}
        {...props}
        onChange={onChange}
        value={value}
        name={name}
        id={id}
        type={type}
        required
        className={`input input-bordered w-full max-w-xs ${props.className}`}
      />
    </>
  );
};

export default Input;
