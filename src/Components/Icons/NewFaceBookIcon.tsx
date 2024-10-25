
export default function NewFaceBookIcon({
  IconColor,
  IconHeight,
  IconWidth
}: any) {
  return (
    <svg
      width={IconWidth || "7"}
      height={IconHeight || "13"}
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66546 12.483H4.09046V7.5011H6.27538L6.51545 5.02569H4.09046V3.77554C4.09046 3.61059 4.15433 3.45239 4.26802 3.33575C4.38172 3.21911 4.53592 3.15358 4.69671 3.15358H6.51545V0.665726H4.69671C3.89277 0.665726 3.12176 0.993366 2.55329 1.57657C1.98482 2.15977 1.66546 2.95077 1.66546 3.77554V5.02569H0.452965L0.212891 7.5011H1.66546V12.483Z"
        fill={IconColor || "#8091A8"}
      />
    </svg>
  );
}
