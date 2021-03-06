import React from 'react';
import { useMaxCanvas } from '../../../state/UserProvider';

export default function OpenEye() {
  const { maxCanvas } = useMaxCanvas();
  return (
    <>
      {maxCanvas ? (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="52" height="52" fill="#E5E5E5" />
          <g id="Pan and zoom mode" clipPath="url(#clip0_130_410)">
            <rect
              width="360"
              height="640"
              transform="translate(-285.703 -14.3396)"
              fill="white"
            />
            <g id="Top Control Bar">
              <g id="Component 2">
                <rect
                  id="Body"
                  x="6.29688"
                  y="5.6604"
                  width="40"
                  height="40"
                  rx="10"
                  fill="#F99D1F"
                />
                <rect
                  id="Outline"
                  x="2.29675"
                  y="1.6604"
                  width="48.0002"
                  height="48.0002"
                  rx="10"
                  stroke="#F99D1F"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                />
                <g id="Icon">
                  <path
                    id="Union"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.305 20.5743C12.7201 20.2112 13.3507 20.2527 13.7146 20.6667L13.7147 20.6668L13.72 20.6728C13.7258 20.6792 13.736 20.6904 13.7506 20.7061C13.7799 20.7376 13.8268 20.7872 13.8912 20.8522C14.0201 20.9822 14.2187 21.1739 14.4856 21.4068C14.8803 21.7513 15.4229 22.1847 16.1088 22.642C16.1568 22.6682 16.2032 22.6987 16.2474 22.7335C16.4499 22.8656 16.6641 22.9994 16.89 23.1333C18.2612 23.9458 20.0607 24.7606 22.2698 25.2372C22.3433 25.2438 22.4173 25.2586 22.4905 25.2823L22.4993 25.2852C23.6566 25.5195 24.9233 25.6603 26.2969 25.6603C27.6744 25.6603 28.9445 25.5187 30.1045 25.2832C30.1543 25.2688 30.2044 25.2585 30.2545 25.2521C32.4953 24.7776 34.3182 23.9543 35.7037 23.1333C36.7687 22.5022 37.5738 21.8731 38.1081 21.4068C38.375 21.1739 38.5736 20.9822 38.7025 20.8522C38.7669 20.7872 38.8138 20.7376 38.8431 20.7061C38.8577 20.6904 38.8679 20.6792 38.8737 20.6728L38.8776 20.6684L38.8782 20.6678C39.2419 20.2527 39.8733 20.2108 40.2887 20.5743C40.7043 20.938 40.7464 21.5698 40.3828 21.9854L39.6302 21.3269C40.3828 21.9854 40.3825 21.9858 40.3821 21.9862L40.3814 21.987L40.3795 21.9891L40.3746 21.9947L40.3594 22.0117C40.347 22.0255 40.3299 22.0442 40.3082 22.0675C40.2649 22.1141 40.2031 22.1792 40.123 22.26C39.9628 22.4216 39.7291 22.6466 39.4231 22.9137C39.1518 23.1505 38.8231 23.4208 38.4378 23.7097L40.3926 26.0132C40.75 26.4343 40.6983 27.0653 40.2772 27.4227C39.8562 27.78 39.2251 27.7284 38.8677 27.3073L36.7648 24.8292L36.7233 24.8539C35.3925 25.6425 33.7045 26.4295 31.6762 26.9685L32.5789 29.6775C32.7535 30.2014 32.4703 30.7677 31.9463 30.9423C31.4223 31.1169 30.8561 30.8337 30.6815 30.3097L29.708 27.3884C28.6459 27.5608 27.5083 27.6603 26.2969 27.6603C25.0758 27.6603 23.9297 27.5592 22.8605 27.3842L21.9148 30.3019C21.7445 30.8273 21.1806 31.1152 20.6552 30.9449C20.1298 30.7746 19.842 30.2107 20.0122 29.6853L20.8948 26.9624C18.8766 26.4236 17.1962 25.6395 15.8704 24.8539L15.83 24.8299L13.7257 27.3076C13.3682 27.7285 12.7372 27.78 12.3162 27.4225C11.8952 27.065 11.8438 26.4339 12.2013 26.0129L14.1568 23.7103C13.7711 23.4212 13.4421 23.1507 13.1706 22.9137C12.8646 22.6466 12.6309 22.4216 12.4707 22.26C12.3906 22.1792 12.3288 22.1141 12.2855 22.0675C12.2638 22.0442 12.2468 22.0255 12.2343 22.0117L12.2192 21.9947L12.2142 21.9891L12.2123 21.987L12.2116 21.9862C12.2113 21.9858 12.2109 21.9854 12.9635 21.3269L12.2109 21.9854C11.8473 21.5698 11.8894 20.938 12.305 20.5743Z"
                    fill="white"
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_130_410">
              <rect
                width="360"
                height="640"
                fill="white"
                transform="translate(-285.703 -14.3396)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="49" height="49" fill="#E5E5E5" />
          <g id="Pan and zoom mode" clipPath="url(#clip0_130_410)">
            <rect
              width="360"
              height="640"
              transform="translate(-287.703 -15.3396)"
              fill="white"
            />
            <g id="Top Control Bar" filter="url(#filter0_d_130_410)">
              <rect
                width="360"
                height="80"
                transform="translate(-287.703 -15.3396)"
                fill="white"
              />
              <g id="Component 2">
                <g id="Icon">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M36.6395 23.2765C37.2715 24.1031 37.2715 25.2191 36.6395 26.0445C34.6488 28.6431 29.8728 33.9938 24.2968 33.9938C18.7208 33.9938 13.9448 28.6431 11.9541 26.0445C11.6467 25.6487 11.4797 25.1617 11.4797 24.6605C11.4797 24.1593 11.6467 23.6723 11.9541 23.2765C13.9448 20.6778 18.7208 15.3271 24.2968 15.3271C29.8728 15.3271 34.6488 20.6778 36.6395 23.2765V23.2765Z"
                      stroke="#393939"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M24.2968 28.6604C26.5059 28.6604 28.2968 26.8695 28.2968 24.6604C28.2968 22.4513 26.5059 20.6604 24.2968 20.6604C22.0876 20.6604 20.2968 22.4513 20.2968 24.6604C20.2968 26.8695 22.0876 28.6604 24.2968 28.6604Z"
                      stroke="#393939"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_130_410"
              x="-317.703"
              y="-43.3396"
              width="420"
              height="140"
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
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_130_410"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_130_410"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_130_410">
              <rect
                width="360"
                height="640"
                fill="white"
                transform="translate(-287.703 -15.3396)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
}
