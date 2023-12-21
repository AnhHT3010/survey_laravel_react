import {Link} from 'react-router-dom'
import PropTypes from "prop-types";

function TButton({
  color = "indigo",
  to = "",
  circle = false,
  href = "",
  link = false,
  target = "_blank",
  onClick = () => {},
  children,
}) {
  let classes = [
    "flex",
    "border",
    "border-2",
    "border-solid",
    "text-sm",
    "whitespace-nowrap",
  ];

  if (link) {
    classes = [...classes, "transition-colors"];
    switch (color) {
      case "indigo":
        classes = [...classes, "text-indigo-500", "focus:border-indigo-500"];
        break;
      case "red":
        classes = [
          ...classes,
          "text-red-500",
          "border-red-400",
          "hover:border-red-600",
          "hover:text-red-700",
          "focus:border-red-500",
        ];
        break;
      case "blue":
        classes = [
          ...classes,
          "text-blue-500",
          "border-blue-400",
          "hover:border-blue-600",
          "hover:text-blue-700",
          "focus:border-blue-500",
        ];
        break;
      case "yellow":
        classes = [
          ...classes,
          "rounded-md",
          "text-blue-500",
          "border-yellow-400",
          "hover:text-blue-700",
          "focus:border-blue-500",
        ];
        break;
    }
  } else {
    classes = [...classes, "text-white", "items-center", "focus:ring-2", "focus:ring-offset-2"];
    switch (color) {
      case "red":
        classes = [
          ...classes,
          "bg-opacity-5",
          "bg-rose-500",
          "border-red-400",
          "hover:border-red-600",
          "text-red-500",
          "hover:text-red-600",
          "hover:text-rose-600",
        ];
        break;
      case "blue":
        classes = [
          ...classes,
          "bg-cyan-500",
          "text-blue-500",
          "hover:text-blue-600",
          "hover:bg-cyan-600",
          "border-blue-400",
          "hover:border-blue-600",
        ];
        break;
      case "green":
        classes = [
          ...classes,
          "border-green-600",
          "bg-emerald-500",
          "text-white",
          "hover:text-green-200",
          "hover:border-emerald-600",
          "hover:bg-emerald-600",
        ];
        break;
      case "yellow":
        classes = [
          ...classes,
          "bg-opacity-5",
          "bg-orange-500",
          "text-yellow-500",
          "hover:text-yellow-600",
          "border-yellow-400",
          "hover:border-yellow-600",
        ];
        break;
    }
  }

  if (circle) {
    classes = [
      ...classes,
      "h-8",
      "w-8",
      "p-1",
      "items-center",
      "justify-center",
      "rounded-full",
      "text-sm",
    ];
  } else {
    classes = [...classes, "p-0", "py-2", "px-4", "rounded-md"];
  }

  return (
    <>
      {href && (
        <Link href={href} className={classes.join(" ")} target={target}>
          {children}
        </Link>
      )}
      {to && (
        <Link to={to} className={classes.join(" ")}>
          {children}
        </Link>
      )}
      {!to && !href && (
        <button onClick={onClick} className={classes.join(" ")}>
          {children}
        </button>
      )}
    </>
  );
}

TButton.propTypes = {
  color: PropTypes.string,
  to: PropTypes.string,
  circle: PropTypes.bool,
  href: PropTypes.string,
  link: PropTypes.bool,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default TButton
