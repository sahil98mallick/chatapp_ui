
export default function ReviewFillIcon({
  IconColor,
  IconHeight,
  IconWidth
}: any) {
  return (
    <svg
      width={IconWidth || "23"}
      height={IconHeight || "22"}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7433 7.96594C22.6728 7.74831 22.5399 7.55619 22.3611 7.41343C22.1823 7.27067 21.9655 7.18357 21.7377 7.16293L15.3869 6.58636L12.8771 0.710286C12.6918 0.278571 12.2702 0 11.8008 0C11.3315 0 10.9097 0.278571 10.7256 0.710286L8.21576 6.58636L1.86401 7.16293C1.39835 7.2059 1.00406 7.5213 0.858398 7.96594C0.787418 8.18377 0.781897 8.41763 0.842518 8.63856C0.903139 8.85949 1.02724 9.05778 1.19945 9.20888L6.00013 13.4183L4.58467 19.6527C4.48111 20.1111 4.65901 20.5851 5.03937 20.86C5.23859 21.005 5.47867 21.083 5.72504 21.0828C5.93622 21.0828 6.14344 21.0255 6.32459 20.9169L11.8008 17.6425L17.2761 20.9169C17.4725 21.0344 17.6991 21.0917 17.9278 21.0816C18.1564 21.0715 18.3771 20.9944 18.5623 20.86C18.9427 20.5851 19.1206 20.1111 19.017 19.6527L17.6015 13.4184L22.4022 9.20892C22.5745 9.05784 22.6986 8.85955 22.7592 8.63861C22.8198 8.41768 22.8143 8.18377 22.7433 7.96594Z"
        fill={IconColor || "#F79A2D"}
      />
    </svg>
  );
}