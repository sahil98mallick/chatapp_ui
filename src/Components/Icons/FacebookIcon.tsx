
const FacebookIcon = ({
  IconColor,
  IconHeight,
  IconWidth
}: any) => {
  return (
    <svg
      width={IconWidth || "6"}
      height={IconHeight || "11"}
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.8263 10.105H3.85137V5.94467H5.67596L5.87644 3.8775H3.85137V2.83353C3.85137 2.69577 3.90471 2.56367 3.99965 2.46626C4.09459 2.36886 4.22337 2.31413 4.35764 2.31413H5.87644V0.236572H4.35764C3.68628 0.236572 3.04243 0.510179 2.56771 0.997202C2.09299 1.48423 1.8263 2.14477 1.8263 2.83353V3.8775H0.813763L0.613281 5.94467H1.8263V10.105Z"
        fill={IconColor || "#3FAFBB"}
      />
    </svg>
  );
};

export default FacebookIcon;
