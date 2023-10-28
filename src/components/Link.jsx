import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";

function Link({ children, to, activeClassLink }) {
  const { navigate, currentUrl } = useNavigation();
  const handleClick = (e) => {
    //ده عشان نخلي الكنترول وزار الويندوز يشتغلوا وباقي الايفنتز تقف
    if (e.metaKey || e.ctrlKey) {
      //لما هعمل ريتيرن بس كده بؤلو اشتغل طبييعي
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  const classes = classNames(
    "text-blue-500",
    "mb-3",
    currentUrl == to && activeClassLink
  );
  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}

export default Link;
