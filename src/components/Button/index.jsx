const Button = (Props) => {
  const { title, logo, onClick, disable, p, hiddenT, hiddenL, bg, w } = Props;
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
