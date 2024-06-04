import React from "react";
import { useSelector } from "react-redux"

function Icon({ isSmall = false }) {
    const { icon } = useSelector((state) => state.theme)

    return (
        <svg
            width={isSmall ? icon.iconSize : 28}
            height={isSmall ? icon.iconSize : 28}
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            viewBox="0 0 512.002 512.002"
      xmlSpace="preserve"
    >
      <path
        fill="#ECEDEF"
        d="M68.162 67.351H441.29999999999995V440.489H68.162z"
        transform="scale(-1) rotate(-23.784 -1205.739 1209.593)"
      ></path>
      <path
        fill="#D9DCDF"
        d="M84.054 125.244L42.926 235.936 133.577 441.596 219.238 473.423 434.955 378.34 470.863 281.697 386.673 90.696 264.999 45.487z"
      ></path>
      <path
        fill="#D8ED8C"
        d="M68.324 77.644H441.457V450.777H68.324z"
        transform="rotate(-159.619 254.889 264.208)"
      ></path>
      <path
        fill="#ECEDEF"
        d="M240.422 295.997L186.454 325.979 216.437 272.011 306.382 182.065 330.368 206.051z"
      ></path>
      <path
        fill="#D9DCDF"
        d="M330.368 206.051L319.351 195.036 190.849 323.538 240.422 295.997z"
      ></path>
      <path
        fill="#509FE8"
        d="M390.331 230.036L282.397 122.102 420.314 32.156 480.277 92.121z"
      ></path>
      <g fill="#4D8CCF">
        <path d="M420.314 32.156L387.617 53.48 458.954 124.816 480.277 92.121z"></path>
        <path d="M282.397 122.102L390.331 230.036 412.508 196.032 316.401 99.925z"></path>
      </g>
      <g fill="#509FE8">
        <path d="M474.28 98.116l-59.964-59.964c-6.623-6.623-6.623-17.362 0-23.985 6.623-6.623 17.362-6.623 23.985 0l59.964 59.964c6.623 6.623 6.623 17.362 0 23.985-6.623 6.624-17.36 6.624-23.985 0zM390.331 266.015L246.419 122.102l11.993-11.993c6.623-6.623 17.362-6.623 23.985 0l119.927 119.927c6.623 6.623 6.623 17.362 0 23.985l-11.993 11.994z"></path>
      </g>
      <path d="M493.918 314.291a7.951 7.951 0 00-14.549 6.415l10.84 24.591-69.288 30.54 37.849-101.866 5.648 12.812c1.839 4.172 6.986 5.953 11.016 3.809 3.626-1.929 5.19-6.467 3.534-10.223l-12.25-27.789 35.488-95.513a7.95 7.95 0 00-4.683-10.222l-34.971-12.994 15.732-24.121a24.788 24.788 0 007.988 1.329 24.852 24.852 0 0017.616-7.322c9.713-9.713 9.713-25.516 0-35.229L443.924 8.545c-9.713-9.712-25.515-9.711-35.229 0a24.832 24.832 0 00-5.985 25.599l-25.068 16.349-20.174-45.767c-1.746-3.958-6.514-5.814-10.481-4.068L235.882 49.632l-88.124-32.743c-4.063-1.508-8.714.629-10.222 4.683l-31.728 85.394L5.557 151.155c-3.958 1.745-5.816 6.516-4.068 10.483l45.583 103.413L7.58 371.336c-1.509 4.062.629 8.715 4.683 10.222l38.749 14.397c4.231 1.573 9.027-.807 10.364-5.106 1.237-3.975-.928-8.351-4.825-9.799l-31.297-11.628L149.673 34.563l160.791 59.744-19.748 12.879-2.698-2.698c-9.713-9.712-25.516-9.711-35.229 0l-11.993 11.992c-3.061 3.062-3.061 8.182 0 11.244l54.342 54.342-84.324 84.324a7.918 7.918 0 00-1.328 1.761l-29.982 53.968c-1.621 2.917-1.213 6.635 1 9.132 2.443 2.757 6.587 3.47 9.81 1.679l53.968-29.982a8.01 8.01 0 001.761-1.328l36.687-36.686 86.59 32.173c4.231 1.573 9.027-.807 10.364-5.106 1.237-3.975-.927-8.351-4.825-9.799l-79.76-29.635 35.27-35.27 54.342 54.342c3.06 3.06 8.183 3.061 11.243-.001l11.993-11.992c9.713-9.713 9.713-25.516 0-35.229l-2.698-2.697 48.399-74.212 30.885 11.476-124.42 334.856L90.474 393.655c-4.117-1.532-8.692.567-10.222 4.683s.567 8.692 4.683 10.222l30.364 11.283 36.685 83.227c1.745 3.958 6.515 5.815 10.481 4.068l85.888-37.858 113.674 42.235c4.063 1.51 8.713-.623 10.222-4.683L413.2 396.618l90.696-39.977c3.958-1.745 5.816-6.516 4.068-10.483l-14.046-31.867zM98.088 127.747L55.019 243.661 19.244 162.5l78.844-34.753zM419.939 19.789c3.512-3.512 9.23-3.514 12.742 0l59.964 59.963c3.513 3.512 3.513 9.229 0 12.743a8.976 8.976 0 01-12.033.637c-.253-.206-61.102-61.055-61.309-61.309a8.976 8.976 0 01.636-12.034zm-55.794 39.507l-37.111 24.203-69.76-25.921 88.852-39.166 18.019 40.884zM275.094 250.08l-39.507 39.508-28.67 15.928 15.928-28.671 83.537-83.536 12.742 12.742-44.03 44.029zm121.609-1.68l-6.372 6.372-132.669-132.67 6.371-6.371c3.513-3.513 9.23-3.513 12.742 0l68.192 68.192c3.233 3.232 8.693 3.016 11.665-.456 2.665-3.112 2.472-7.893-.423-10.788l-54.005-54.005 109.788-71.601 53.366 53.366-71.602 109.789-12.106-12.106a7.951 7.951 0 00-11.243 11.244l26.294 26.294c3.515 3.511 3.515 9.227.002 12.74zM136.08 427.563l90.883 33.768-63.635 28.049-27.248-61.817z"></path>
      <path d="M271.493 188.384c4.231 1.573 9.027-.807 10.364-5.106 1.237-3.975-.928-8.351-4.825-9.799l-101.123-37.571a7.95 7.95 0 10-5.539 14.905l101.123 37.571zM142.06 204.184a7.95 7.95 0 004.683 10.222l55.645 20.675c4.231 1.573 9.027-.807 10.364-5.106 1.237-3.975-.928-8.351-4.825-9.799l-55.645-20.675a7.95 7.95 0 00-10.222 4.683zM118.431 267.778A7.95 7.95 0 00123.114 278l55.104 20.473c4.231 1.573 9.027-.807 10.364-5.106 1.237-3.975-.928-8.351-4.825-9.799l-55.104-20.473a7.95 7.95 0 00-10.222 4.683zM94.802 331.371a7.95 7.95 0 004.683 10.222l222.578 82.701c4.231 1.573 9.027-.807 10.364-5.106 1.237-3.975-.928-8.351-4.825-9.799l-222.578-82.701a7.949 7.949 0 00-10.222 4.683zM290.047 340.024c4.231 1.573 9.027-.807 10.364-5.106 1.237-3.975-.927-8.351-4.825-9.799l-23.848-8.861c-4.117-1.532-8.692.567-10.222 4.683s.567 8.692 4.683 10.222l23.848 8.861zM345.692 360.699c4.231 1.573 9.027-.807 10.364-5.106 1.237-3.975-.927-8.351-4.825-9.799l-31.797-11.815a7.949 7.949 0 00-10.222 4.683 7.95 7.95 0 004.683 10.222l31.797 11.815z"></path>
    </svg>
  );
}

export default Icon;