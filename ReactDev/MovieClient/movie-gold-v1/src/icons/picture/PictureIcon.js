// icon:bx-photo-album | Boxicons https://boxicons.com/ | Atisa
import * as React from "react";

function PictureIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M11.024 11.536L10 10l-2 3h9l-3.5-5z" />
      <path d="M11.006 7.497 A1.503 1.503 0 0 1 9.503 9 A1.503 1.503 0 0 1 8 7.497 A1.503 1.503 0 0 1 11.006 7.497 z" />
      <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z" />
    </svg>
  );
}

export default PictureIcon;
