
export default function CardIcon({ IconColor, IconWidth, IconHeight }: any) {
  return (
    <svg
      width={IconWidth || "20"}
      height={IconHeight || "18"}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M20 5.60205V13.062C20 15.352 18.14 17.2021 15.85 17.2021H4.15C1.86 17.2021 0 15.352 0 13.062V5.60205H20Z"
        fill={IconColor || "#2E91FF"}
      />
      <path
        d="M20 4.14V5.6H0V4.14C0 1.85 1.86 0 4.15 0H15.85C18.14 0 20 1.85 20 4.14ZM6 13.852H4C3.59 13.852 3.25 13.512 3.25 13.102C3.25 12.692 3.59 12.352 4 12.352H6C6.41 12.352 6.75 12.692 6.75 13.102C6.75 13.512 6.41 13.852 6 13.852ZM12.5 13.852H8.5C8.09 13.852 7.75 13.512 7.75 13.102C7.75 12.692 8.09 12.352 8.5 12.352H12.5C12.91 12.352 13.25 12.692 13.25 13.102C13.25 13.512 12.91 13.852 12.5 13.852Z"
        fill={IconColor || "#2E91FF"}
      />
    </svg>
  );
}
