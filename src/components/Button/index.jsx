const Button = (props) => {
  const {
    title = "Button",
    logo = null,
    onClick = () => {},
    disable = false,
    p = "px-4",
    hiddenT = "",
    hiddenL = "",
    bg = "bg-blue-500", // default value untuk bg
    w = "full", // default value untuk w
  } = props;

  return (
    <button
      className={`flex items-center justify-center gap-1 ${p} py-1 ${bg} rounded-lg border-2 border-blue-500 font-medium w-${w} ${
        bg === "bg-blue-500" ? "text-white" : "text-blue-500"
      }`}
      onClick={onClick}
      disabled={disable}
    >
      <div className={`${hiddenL}`}>{logo}</div>
      <div className={`${hiddenT}`}>{title}</div>
    </button>
  );
};

export default Button;
