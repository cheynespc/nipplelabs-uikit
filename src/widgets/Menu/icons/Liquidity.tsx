import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 39 41" {...props}>
      <path d="M15.9843 36.6557C12.8735 36.6557 9.84455 35.8371 7.34773 34.1998C2.8862 31.2937 0.675906 26.1773 1.20802 19.751C1.24895 19.0961 1.82203 18.6459 2.47693 18.6868C3.13183 18.7277 3.58207 19.3008 3.54114 19.9557C2.9681 27.0368 5.99702 30.5569 8.65757 32.276C12.6688 34.8956 18.6448 35.0185 23.1882 32.5626C25.2348 31.4574 28.6731 28.8378 28.6731 23.926C28.6731 23.3121 29.1642 22.7799 29.8191 22.7799H30.4331C30.8833 22.7799 31.2517 22.4116 31.2517 21.9613V21.3473C31.2517 20.8562 30.9652 20.2831 29.86 20.2831C29.3689 20.2831 28.9595 19.9966 28.7958 19.5464C28.7549 19.4645 25.2348 10.7461 15.0019 2.92819C14.5108 2.51887 14.388 1.82304 14.7973 1.29093C15.2066 0.799753 15.9024 0.676959 16.4345 1.08627C25.6441 8.12648 29.6144 15.7397 30.6787 18.0319C31.6201 18.1956 32.2341 18.6049 32.6025 18.9733C33.5848 19.9557 33.5848 21.2245 33.5848 21.3473V21.9613C33.5848 23.5167 32.4387 24.8265 30.9652 25.0721C30.5968 29.0834 28.2228 32.5626 24.3343 34.6501C21.7147 35.9599 18.8086 36.6557 15.9843 36.6557Z" />
      <path d="M15.984 36.8189C12.7504 36.8189 9.76235 35.9594 7.26553 34.363C2.76307 31.416 0.552797 26.2586 1.04397 19.7914C1.08491 19.423 1.24862 19.1365 1.49421 18.8909C1.7398 18.6453 2.10815 18.5635 2.4356 18.5635C2.80399 18.6044 3.09054 18.7681 3.33613 19.0137C3.58171 19.2593 3.66355 19.6277 3.66355 19.9552C3.13144 26.9544 6.07852 30.4336 8.69813 32.1118C12.6685 34.6905 18.6035 34.8133 23.0651 32.3983C25.0707 31.2931 28.468 28.7554 28.468 23.8846C28.468 23.1887 29.0411 22.5748 29.7369 22.5748H30.3509C30.7193 22.5748 31.0467 22.2473 31.0467 21.8789V21.265C31.0058 20.651 30.5965 20.3235 29.7778 20.3235C29.2457 20.3235 28.7545 19.9961 28.5499 19.5049C28.509 19.423 24.9889 10.7456 14.7969 2.96861C14.2239 2.51836 14.1011 1.69973 14.5514 1.12669C14.756 0.84017 15.0835 0.67644 15.4109 0.635508C15.7384 0.594577 16.1067 0.67643 16.3933 0.881087C25.5619 7.9213 29.5732 15.4936 30.6374 17.7858C31.6197 17.9495 32.2337 18.3997 32.5612 18.7681C33.5845 19.7914 33.5845 21.1012 33.5845 21.265V21.8789C33.5845 23.4343 32.4793 24.7851 30.9648 25.1125C30.5555 29.1647 28.1815 32.562 24.2521 34.6905C21.7962 36.0821 18.931 36.8189 15.984 36.8189ZM2.35376 18.85C2.10817 18.85 1.86259 18.9319 1.69887 19.0956C1.49421 19.2593 1.37141 19.5049 1.33047 19.7914C0.839297 26.1358 3.00867 31.2113 7.42927 34.1174C9.84422 35.7138 12.8322 36.5324 15.984 36.5324C18.8901 36.5324 21.7144 35.8366 24.1702 34.4858C28.0587 32.3983 30.3918 29.001 30.7602 24.9897V24.8669H30.883C32.3156 24.6213 33.3798 23.3525 33.3798 21.8789V21.265C33.3798 21.1422 33.3389 19.9142 32.4384 18.9728C32.1109 18.6453 31.5379 18.1951 30.5965 18.0723H30.5146L30.4736 17.9905C29.4504 15.8211 25.48 8.1669 16.2705 1.12669C16.0658 0.962965 15.7793 0.881102 15.5337 0.922033C15.2471 0.962965 15.0425 1.08576 14.8788 1.33135C14.5513 1.78159 14.6332 2.39557 15.0834 2.76395C25.3163 10.6228 28.8773 19.3412 28.9183 19.4231C29.082 19.8324 29.4504 20.0779 29.8597 20.0779C31.1695 20.0779 31.3742 20.8556 31.4151 21.3059V21.9608C31.4151 22.4929 30.9648 22.9431 30.4327 22.9431H29.8187C29.2866 22.9431 28.8364 23.3934 28.8364 23.9664C28.8364 28.9601 25.3572 31.6206 23.2697 32.7258C18.7263 35.2226 12.6685 35.0998 8.61629 32.4392C5.95575 30.7201 2.88585 27.1591 3.45889 19.9961C3.49982 19.7096 3.37704 19.464 3.21331 19.2593C3.04959 19.0547 2.80402 18.9319 2.5175 18.8909C2.3947 18.85 2.39469 18.85 2.35376 18.85Z" />
      <path d="M34.8949 28.4693L34.8539 28.4284C34.6493 28.2237 34.4037 28.1009 34.1581 28.06H34.1171C34.0762 28.06 34.0353 28.06 33.9944 28.06C33.9534 28.06 33.9125 28.06 33.8716 28.06H33.8306C33.5851 28.1009 33.2985 28.2237 33.1348 28.4284L33.0939 28.4693C31.3338 30.1884 28.6733 34.6909 29.7784 37.5561C30.1877 38.5794 31.1292 39.7664 33.5851 39.971C33.6669 39.971 33.7488 40.012 33.8306 40.012C33.9125 40.012 33.9534 40.012 34.0353 40.012C34.1172 40.012 34.1581 40.012 34.24 40.012C34.3218 40.012 34.4037 40.0119 34.4855 39.971C36.9005 39.8073 37.8829 38.5794 38.2922 37.5561C39.3155 34.6909 36.6549 30.1475 34.8949 28.4693ZM36.041 36.7374C35.8363 37.3105 35.1405 37.6379 33.9944 37.6789C32.8483 37.6379 32.1525 37.3514 31.9478 36.7374C31.4157 35.3458 32.7664 32.5624 33.9944 30.9252C35.2223 32.5624 36.5731 35.3458 36.041 36.7374Z" />
      <path d="M34.1575 40.1344C34.1165 40.1344 34.0756 40.1344 34.0347 40.1344H33.9528H33.871C33.7482 40.1344 33.6254 40.1344 33.4617 40.0934C30.9648 39.9297 29.9825 38.6199 29.5732 37.5966C28.468 34.6495 31.1285 30.0652 32.9295 28.3461C32.9295 28.3461 32.9296 28.3052 32.9705 28.3052C33.1752 28.0596 33.4616 27.9368 33.7482 27.8958H33.7891C33.8301 27.8958 33.8709 27.8958 33.9528 27.8958C33.9937 27.8958 34.0347 27.8958 34.1165 27.8958H34.1575C34.4849 27.9368 34.7714 28.1005 34.9761 28.3052L35.0171 28.3461C36.8181 30.1062 39.4786 34.6495 38.3734 37.5966C37.9641 38.6199 36.9818 39.8888 34.444 40.0934C34.3622 40.1344 34.2803 40.1344 34.1575 40.1344ZM33.9938 39.8478H34.0756C34.1575 39.8478 34.2803 39.8478 34.4031 39.8478C36.7771 39.6841 37.7185 38.4971 38.0869 37.5557C38.7009 36.0003 38.0869 34.0356 37.5139 32.6848C36.859 31.1294 35.7948 29.5331 34.8124 28.6326C34.8124 28.6326 34.8124 28.5917 34.7714 28.5917C34.6077 28.387 34.4031 28.3052 34.1575 28.2642V28.1005V28.2642C34.1165 28.2642 34.0756 28.2642 34.0347 28.2642C33.9938 28.2642 33.9528 28.2642 33.9119 28.2642L33.871 28.1414V28.3052C33.6254 28.3461 33.4207 28.4689 33.257 28.6326L33.2161 28.6736C32.2337 29.615 31.1695 31.2113 30.5146 32.7667C29.9416 34.1174 29.3276 36.0822 29.9416 37.6375C30.3099 38.579 31.2514 39.766 33.6254 39.9297C33.7482 39.9706 33.8709 39.9706 33.9528 39.9706L33.9938 39.8478ZM33.9938 37.8013C32.7658 37.7603 32.0291 37.4329 31.7835 36.778C31.2104 35.3044 32.643 32.3983 33.871 30.8429L33.9938 30.6792L34.1165 30.8429C35.3036 32.3983 36.7361 35.3044 36.204 36.778C35.9175 37.4329 35.1808 37.7603 33.9938 37.8013ZM33.9938 31.1704C32.684 32.9304 31.6197 35.4682 32.07 36.6961C32.2746 37.2282 32.9296 37.5147 33.9938 37.5147C35.058 37.4738 35.7129 37.1873 35.9175 36.6961C36.3678 35.4682 35.2627 32.9304 33.9938 31.1704Z" />
    </Svg>
  );
};

export default Icon;