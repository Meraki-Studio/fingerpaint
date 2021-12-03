import React from 'react';
import { useErase } from '../../../state/UserProvider';

export default function Eraser() {
  const { erase } = useErase();
  return (
    <>
      {erase ? (
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="64" fill="#E5E5E5" />
          <g id="Eraser - initial" clipPath="url(#clip0_130_410)">
            <rect
              width="360"
              height="640"
              transform="translate(-281.703 -562.074)"
              fill="white"
            />
            <g id="Bottom Control Bar" filter="url(#filter0_d_130_410)">
              <rect
                width="360"
                height="92"
                transform="translate(-281.703 -14.0742)"
                fill="white"
              />
              <g id="Button">
                <rect
                  id="Body"
                  x="6.29688"
                  y="5.92578"
                  width="52"
                  height="52"
                  rx="12"
                  fill="#F99D1F"
                />
                <g id="Icon" clipPath="url(#clip1_130_410)">
                  <path
                    id="Union"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35.7254 21.3063L43.6804 29.2612C44.5029 30.0837 44.5029 31.4219 43.6804 32.2443L35.8911 40.0336L24.9528 29.0955L32.7422 21.3063C33.5646 20.4838 34.9028 20.4838 35.7254 21.3063ZM23.1297 30.9184C22.2887 31.7597 21.8255 32.8779 21.8255 34.0673C21.8255 35.2568 22.2887 36.3752 23.1297 37.2162L27.7703 41.8566C28.6113 42.6976 29.7297 43.1608 30.9192 43.1608C32.1088 43.1608 33.2269 42.6976 34.0682 41.8566L34.8967 41.0278L23.9586 30.0898L23.1297 30.9184ZM25.6807 41.7555H21.0001C20.6117 41.7555 20.2969 42.0705 20.2969 42.4587C20.2969 42.847 20.6117 43.1618 21.0001 43.1618H27.1119C26.9967 43.0629 26.8844 42.9594 26.7761 42.8508L25.6807 41.7555Z"
                    fill="white"
                  />
                </g>
                <rect
                  id="Outline"
                  x="2.29688"
                  y="1.92578"
                  width="60"
                  height="60"
                  rx="12"
                  stroke="#F99D1F"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                />
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_130_410"
              x="-311.703"
              y="-46.0742"
              width="420"
              height="152"
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
              <feOffset dy="-2" />
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
                transform="translate(-281.703 -562.074)"
              />
            </clipPath>
            <clipPath id="clip1_130_410">
              <rect
                width="24.0005"
                height="24"
                fill="white"
                transform="translate(20.2969 19.9258)"
              />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="61" height="61" fill="#E5E5E5" />
          <g
            id="Color picker - return to artboard"
            clipPath="url(#clip0_130_410)"
          >
            <rect
              width="360"
              height="640"
              transform="translate(-283.043 -563.772)"
              fill="white"
            />
            <g id="Bottom Control Bar" filter="url(#filter0_d_130_410)">
              <rect
                width="360"
                height="92"
                transform="translate(-283.043 -15.772)"
                fill="white"
              />
              <g id="Button">
                <g id="Icon" clipPath="url(#clip1_130_410)">
                  <path
                    id="Union"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.3849 19.6086L42.3399 27.5634C43.1624 28.3859 43.1624 29.7242 42.3399 30.5465L34.5506 38.3358L23.6123 27.3977L31.4017 19.6086C32.2241 18.7861 33.5624 18.7861 34.3849 19.6086ZM21.7893 29.2206C20.9483 30.0619 20.485 31.1802 20.485 32.3696C20.485 33.559 20.9483 34.6774 21.7893 35.5184L26.4298 40.1589C27.2708 40.9999 28.3893 41.4631 29.5787 41.4631C30.7683 41.4631 31.8864 40.9999 32.7277 40.1589L33.5563 39.3301L22.6181 28.3921L21.7893 29.2206ZM24.3402 40.0577H19.6596C19.2713 40.0577 18.9564 40.3727 18.9564 40.7609C18.9564 41.1493 19.2713 41.4641 19.6596 41.4641H25.7714C25.6562 41.3652 25.5439 41.2617 25.4356 41.1531L24.3402 40.0577Z"
                    fill="#393939"
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_130_410"
              x="-313.043"
              y="-47.772"
              width="420"
              height="152"
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
              <feOffset dy="-2" />
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
                transform="translate(-283.043 -563.772)"
              />
            </clipPath>
            <clipPath id="clip1_130_410">
              <rect
                width="24.0005"
                height="24"
                fill="white"
                transform="translate(18.9564 18.228)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
}
