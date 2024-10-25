
export default function UncheckIcon({ ...props }: any) {
  return (
    <svg
      width={props?.IconWidth || "17"}
      height={props?.IconHeight || "17"}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.5"
        y="-0.5"
        width="15"
        height="15"
        rx="3.5"
        transform="matrix(1 0 0 -1 0.5 15.0636)"
        stroke={props?.IconColor || "#F0EDE5"}
        // CDCDCD
      />
    </svg>
  );
}
