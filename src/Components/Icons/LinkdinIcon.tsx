
const LinkdinIcon = ({ IconColor, IconHeight, IconWidth }: any) => {
  return (
    <svg
      width={IconWidth || "10"}
      height={IconHeight || "9"}
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49421 7.74279H7.17971V5.87125C7.17971 5.42493 7.17097 4.85063 6.49602 4.85063C5.81145 4.85063 5.70654 5.3367 5.70654 5.83906V7.74279H4.39248V3.894H5.65452V4.41981H5.672C5.79835 4.22357 5.98084 4.06213 6.20007 3.95268C6.41929 3.84322 6.66705 3.78984 6.91699 3.79822C8.24941 3.79822 8.49464 4.59508 8.49464 5.6312L8.49421 7.74279ZM2.90925 3.36779C2.70694 3.36779 2.51292 3.29472 2.36986 3.16466C2.2268 3.0346 2.14644 2.8582 2.14644 2.67426C2.14644 2.49032 2.2268 2.31392 2.36986 2.18386C2.51292 2.0538 2.70694 1.98073 2.90925 1.98073C3.11156 1.98073 3.30559 2.0538 3.44865 2.18386C3.5917 2.31392 3.67207 2.49032 3.67207 2.67426C3.67207 2.8582 3.5917 3.0346 3.44865 3.16466C3.30559 3.29472 3.11156 3.36779 2.90925 3.36779ZM3.56628 7.74279H2.25048V3.894H3.56628V7.74279ZM9.14949 0.871082H1.58995C1.41839 0.869386 1.25311 0.92967 1.13041 1.03869C1.00771 1.14772 0.937622 1.29656 0.935547 1.45253V8.35366C0.939918 8.67876 1.2328 8.93908 1.58995 8.9355H9.14949C9.32143 8.93742 9.48719 8.87722 9.61037 8.76813C9.73355 8.65905 9.8041 8.50998 9.80651 8.35366V1.45214C9.8041 1.29585 9.73354 1.14682 9.61035 1.0378C9.48715 0.928774 9.32139 0.869066 9.14949 0.871082Z"
        fill={IconColor || "#3FAFBB"}
      />
    </svg>
  );
};

export default LinkdinIcon;