/* eslint-disable react/prop-types */
const ActionIcon = ({ icon, action, className }) => {
  return (
    <div className={`md:w-16 md:h-16 rounded-full fixed right-5 bottom-5 p-2 z-50 ${className}`}>
      <img
        src={icon}
        alt="icon"
        className="w-full h-full cursor-pointer"
        onClick={action}
      />
    </div>
  );
};

export default ActionIcon;
