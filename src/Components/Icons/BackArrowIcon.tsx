
function BackArrowIcon({ IconColor, IconWidth, IconHeight }: any) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={IconWidth || "20"}
        height={IconHeight || "21"}
        viewBox="0 0 24 24"
        fill="none"
      >
        <g filter="url(#filter0_d_4313_249)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
            fill={IconColor || "#070707"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L6.41421 12L12.7071 18.2929C13.0976 18.6834 13.0976 19.3166 12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
            fill={IconColor || "#070707"}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4313_249"
            x="-3"
            y="-2"
            width="30"
            height="30"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4313_249"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4313_249"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default BackArrowIcon;
