
export const UncheckedIcon = ({
  IconColor,
  IconHeight,
  IconWidth
}: any) => {
  return (
    <svg
      width={IconWidth || "18"}
      height={IconHeight || "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.7 0.5H15.3C16.5125 0.5 17.5 1.48754 17.5 2.7V15.3C17.5 16.5125 16.5125 17.5 15.3 17.5H2.7C1.48754 17.5 0.5 16.5125 0.5 15.3V2.7C0.5 1.48754 1.48754 0.5 2.7 0.5Z"
        stroke={IconColor || "#EDEDED"}
      />
    </svg>
  );
};
