/* eslint-disable react/no-unknown-property */

export default function RadioIcon({
  IconColor,
  IconHeight,
  IconWidth
}: any) {
  return (
    <svg
      width={IconWidth || "19"}
      height={IconHeight || "19"}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.25329 0 0 4.25329 0 9.5C0 14.7467 4.25329 19 9.5 19Z"
        fill={IconColor || "#3FAFBB"}
      />
      <path
        d="M9.5 14C11.9853 14 14 11.9853 14 9.5C14 7.01472 11.9853 5 9.5 5C7.01472 5 5 7.01472 5 9.5C5 11.9853 7.01472 14 9.5 14Z"
        fill={IconColor || "#3FAFBB"}
        stroke={IconColor || "#3FAFBB"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
