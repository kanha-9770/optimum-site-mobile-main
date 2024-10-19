import * as React from "react";
const LeftSvgMarquee = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={2000}
    viewBox="0 0 1500 1500"
    height={2000}
    {...props}
  >
    <defs>
      <clipPath id="d">
        <path d="M3 1.184h1494V802H3Zm0 0" />
      </clipPath>
      <clipPath id="c">
        <path d="M0 0h1500v803H0z" />
      </clipPath>
      <filter x="0%" y="0%" width="100%" height="100%" id="a">
        <feColorMatrix
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          colorInterpolationFilters="sRGB"
        />
      </filter>
      <mask id="b">
        <g filter="url(#a)">
          <path fillOpacity={0.13} d="M-150-150h1800v1800H-150z" />
        </g>
      </mask>
    </defs>
    <g mask="url(#b)">
      <g clipPath="url(#c)" transform="translate(0 697)">
        <g clipPath="url(#d)">
          <path
            fill="#a58fe8"
            d="M1472.246 799.992c1.094-8.668 2.238-16.523 3.047-24.379 1.098-10.761 2.383-21.523 2.86-32.332a353 353 0 0 0-.051-32.468c-.762-14.954-1.473-30-3.473-44.805-5.383-39.903-18.191-77.563-39.617-111.606-10.332-16.43-23.52-31.14-36.137-45.996-6.809-8.047-15.094-14.902-22.902-22.094-13.047-11.996-27.52-21.996-43.375-29.996-9.809-4.949-19.477-10.332-29.618-14.472-10.664-4.332-21.71-8.285-32.898-10.809-18.14-4.047-36.426-8.191-54.852-9.762-38.09-3.285-75.894.286-113.558 7-24.094 4.286-48.567 6.903-72.945 9.141-15.329 1.383-30.946.191-45.422-5.809-23.473-9.71-36.235-27.996-39.711-52.945-4.617-33.043-2.235-66.086-.617-99.18 1.714-34.566 5.238-69.132.617-103.796-5.38-40.329-23.09-72.754-58.61-94.418-22.093-13.473-46.136-22.282-70.515-30.422-14.239-4.762-28.52-9.43-42.996-13.332-13.758-3.715-27.664-6.907-41.707-9.285-17.192-2.954-34.52-5.668-51.899-7-17.238-1.332-34.57-.477-51.851-1.192-24.332-1-47.996 4.047-71.946 6.953-30.949 3.762-59.898 14.235-88.418 25.52-18.566 7.383-36.28 17.617-53.183 28.426-24.043 15.285-46.09 33.328-65.707 54.28-22.09 23.567-41.375 49.231-56.66 77.56-23.282 42.949-37.47 89.039-42.567 137.699-3.234 31.14-3.523 62.375 0 93.511 2.762 24 5.953 47.95 8.86 71.899 2.046 16.758 4.757 33.52 2.57 50.562-2.192 16.953-11.145 29.047-27.38 33.524-15.808 4.379-32.28 6.617-48.519 9.52-19.613 3.476-39.515 5.761-58.894 10.19-18.238 4.188-34.332 13.286-48.95 25.473-11.617 9.664-20.425 21.332-26.949 34.328-5.285 10.57-7.996 22.524-11.52 33.95-8.429 27.187-5.667 54.851-7.046 82.37-.191 4.192-1.43 5.763-5.715 5.524-5.14-.332-10.285-.238-15.426 0-3.668.14-5.191-1.094-5.144-4.855.191-23.809-.477-47.664.621-71.422.57-11.902 4.285-23.664 6.617-35.473 1.332-6.617 2.38-13.332 4.238-19.804 1.426-5 3.618-9.762 5.809-14.477 3.047-6.426 6.047-12.95 9.762-18.996 10.472-17 24.281-30.52 41.515-40.996 19.762-12.047 41.758-16.664 63.66-21.903 14.762-3.523 29.903-5.425 44.711-8.855 23.567-5.379 36.567-21.188 38.852-44.66 1.856-19.238 1.809-38.711 2.047-58.137.332-30.95-1.668-61.898 1.668-92.894 5.047-46.805 16.473-91.797 35.422-134.793 10.047-22.809 22.094-44.707 37.379-64.516 13.332-17.285 26.66-34.711 41.707-50.422 12.902-13.523 27.757-25.379 42.613-36.758 13.238-10.14 27.187-19.523 41.71-27.664 14.524-8.14 29.997-14.617 45.329-21.332C514.742 12.563 565.5 5.992 616.684 2.418c18.472-1.285 37.183.477 55.754 1.43 13.476.668 26.949 1.715 40.28 3.668A522 522 0 0 1 758 16.086c17.379 4.094 34.66 8.664 51.66 14.043 32.473 10.238 64.563 21.809 94.133 38.902 31.758 18.38 51.184 46.328 59.8 81.942 6.903 28.472 6.048 57.375 5.477 86.324-.62 29.09-.523 58.137-.715 87.226-.097 13.762 1.38 27.282 5.95 40.426 4.238 12.235 12.668 20.711 23.379 26.899 19.761 11.43 41.71 12 63.566 10.808 28.66-1.523 57.277-4.71 85.941-5.902 33.235-1.383 66.371-.145 99.274 6.476 21.566 4.332 42.566 10.094 62.61 18.758 15.237 6.617 29.948 14.762 44.09 23.52 13 8.047 25.71 16.953 37.233 26.949 10.856 9.383 19.856 20.902 29.95 31.234 13.57 13.907 22.332 31.141 32.949 47.09 14.285 21.477 23.094 45.09 29.758 69.469a365 365 0 0 1 10.855 57.707c2.86 26.856 3.332 53.898.906 80.895-1.144 12.668-3.097 25.285-4.906 37.855-.187 1.238-1.902 3.094-3 3.14-4.71.333-9.426.145-14.664.145m0 0"
          />
        </g>
        <path
          fill="#a58fe8"
          d="M1433.824 799.992c1.188-8.332 2.235-15.855 3.285-23.332 4.141-29.758 4.426-59.613.664-89.37-1.71-13.52-4.902-26.95-8.234-40.185-6.715-26.617-17.762-51.472-33.234-74.136-16.43-24.043-36.332-44.516-60.52-61.133-25.95-17.856-54.23-29.996-84.844-36.094-27.664-5.523-55.851-7.949-83.945-2.949-24.71 4.379-49.277 9.379-73.848 14.426-26.043 5.379-51.8 12.379-78.085 16.332-25.426 3.855-50.329.238-71.516-16.238-15.95-12.38-26.188-28.805-32.281-48.09-5.762-18.235-7.473-37.043-7.473-55.848.047-34.805 1.047-69.66 1.95-104.465.714-26.473 2.382-52.898-1.141-79.277-4.954-36.805-18.954-68.895-50.852-90.035-13.187-8.715-28.043-15.332-42.898-20.996-27.57-10.477-55.805-19.38-85.04-23.809-21.949-3.332-44.136-6.191-66.277-7.191-21.57-.997-43.281.097-64.898 1.097-28.711 1.38-56.563 8.57-83.657 17.14-26.757 8.427-52.753 19.759-76.132 35.9-10.953 7.523-22.332 14.667-32.235 23.425-13.761 12.145-26.855 25.188-39.375 38.711-16.379 17.664-29.664 37.664-40.425 59.184-16.903 33.757-28.614 69.086-32.805 106.89-5.668 51.09.715 100.75 16.996 149.125 9.621 28.664 20.902 56.707 30.95 85.23 5.714 16.141 10.952 32.473 10.19 50.04-.62 14.902-13.046 31.14-26.808 36.71-18.281 7.38-37.613 9.239-56.707 12.477-21.902 3.711-44.09 6.094-65.895 10.235-23.953 4.57-47.425 11.285-66.422 27.757-9.43 8.145-17.71 17.141-24.14 28.38-9.664 16.902-11.664 35.519-15.711 53.753-1.285 5.715-3.098 8.285-9.191 7.57-4.332-.523-8.762-.285-13.141-.046-3.715.191-5.43-1.285-4.902-4.95 2.664-19.046 3.378-38.617 8.52-56.945 8.144-29 25.948-52.426 52.948-66.328 14.426-7.426 31.043-11.14 47.04-14.996 15.093-3.621 30.663-5.383 46.042-7.668 10.903-1.617 21.856-2.57 32.758-4.188 16.617-2.43 33.14-5.476 46.328-17.046 6.192-5.43 9.192-12.664 10.524-20.809 2.476-14.52-.43-28.328-4.239-42.184-8.714-31.52-17.808-62.945-25.664-94.703-10.472-42.375-12.332-85.418-7.187-128.746 5.523-46.805 20.281-90.703 44.515-130.984 10.43-17.332 22.856-33.758 36.235-48.946 13.902-15.761 29.234-30.472 45.375-43.949 12.476-10.379 26.902-18.52 40.902-26.949 42.946-25.95 90.559-38.758 139.555-45.898 32.328-4.715 65.039-5.239 97.844-2.286 32.902 2.954 65.422 8.094 96.941 17.473 26.188 7.809 52.422 16.524 77.133 28.094 42.71 19.95 63.945 55.945 69.61 102.226 3.19 26.282 1.527 52.47.382 78.704-1.906 44.09-6 88.273-.383 132.316 3 23.332 11.668 44.758 31.95 59.09 13.523 9.57 28.808 14.14 45.425 14.664 26.09.808 51.469-3.715 76.797-9.332 36.426-8.094 72.945-15.235 110.465-16.332 27.805-.809 55.137 1.523 81.848 9 23.855 6.664 46.421 16.426 67.562 29.71 26.281 16.571 47.613 37.759 66.375 62.423 14.14 18.566 25.899 38.28 33.52 60.039 7.332 20.902 13.996 42.136 17.234 64.422 4.191 28.851 4.047 57.609 1.621 86.511-.86 10.047-2.621 20-3.523 30.043-.575 6-3.239 8.383-9.145 7.43-1.808-.332-3.715-.094-6.71-.094m0 0"
        />
        <path
          fill="#a58fe8"
          d="M1398.73 799.418c1.383-10.711 3.098-20.996 3.954-31.375 1.808-21.426 2.046-42.805-1.286-64.277-3.046-19.426-8.285-38.043-14.664-56.66-7.523-22.141-19.238-41.567-34.043-58.852-11-12.856-24.093-24.426-37.949-34.137-22.855-15.953-48.613-25.187-76.562-29.664-34.09-5.43-67.137-1.715-99.989 6.238-25.14 6.094-49.851 13.805-74.894 20.188-22.188 5.664-44.613 9.617-67.707 7.57-49.281-4.383-82.895-30.187-102.656-74.898-10.188-22.996-14.52-47.469-15.38-72.227-1.616-47.566-1.761-95.18-2.663-142.746-.477-24.426-2.477-48.66-9.715-72.183-10.524-34.329-32.328-58.516-64.992-73.036-24.996-11.144-51.278-18.14-78.227-22.379-21.379-3.382-42.852-6.332-64.422-7.714-22.95-1.477-45.945 0-68.8 3.285-31.426 4.476-61.567 12.902-90.942 25.047-24.762 10.187-46.898 24.422-67.754 40.515-18.476 14.239-34.855 31.285-48.473 50.375-14.28 20-26.043 41.282-34.375 64.66-9.664 27.141-15.425 54.852-15.761 83.61-.332 31.664 4.668 62.515 15.238 92.465 11.617 32.996 27.379 63.898 45.328 93.894 11.285 18.903 21.95 38.281 31.52 58.133 8.617 17.855 11.71 37.047 5.57 56.613-4.191 13.332-12.902 23.524-23.856 31.95-15.14 11.664-33.043 17.14-51.085 21.808-32.711 8.52-65.754 15.902-98.418 24.664-14.141 3.809-28.094 9.043-41.329 15.281-8.285 3.907-14.617 11.664-22.617 16.38-10.476 6.19-14 17.046-20.234 26.14-.953 1.379-2.809 2.902-4.336 2.953-9.856.238-19.711.14-30.469.14.617-2.331.856-4.14 1.524-5.761 3.57-8.617 6.757-17.473 11.14-25.664 2.762-5.188 6.95-9.856 11.285-13.902 5.95-5.618 12.332-10.95 19.141-15.52 12.856-8.57 27.188-14.238 42.137-17.617 33.71-7.57 67.707-14.14 101.465-21.617 16.472-3.621 33.136-7.239 47.945-16.047 16.57-9.809 27.234-23.903 28.566-43.375.907-13.188-1.332-26.38-6.855-38.473a1713 1713 0 0 0-29.473-61.133c-16.57-32.617-32.566-65.375-40.898-101.37-9.477-40.759-11.524-81.75-3.43-122.938 5.668-28.903 15.238-56.469 29.902-82.133 14.426-25.234 31.903-47.805 52.946-68.04 36.187-34.71 79.18-56.898 126.27-71.991 28.948-9.285 58.804-13.38 89.085-15.38 30.711-2.046 61.23-.476 91.512 4.333 35.95 5.715 71.324 14.332 104.656 29.187 39.23 17.524 61.04 48.95 68.754 90.703 5.711 30.95 4.856 62.184 4.188 93.372-.95 46.996-3.286 94.132 5.191 140.746 6.094 33.566 20.71 62.562 50.043 81.988 18.758 12.43 39.805 17.476 62.277 17.14 20.95-.285 41.137-4.761 61.184-10.046 19.14-5.047 38.137-10.618 57.324-15.426 33.379-8.38 67.184-13.332 101.703-10.188 19.856 1.809 39.281 6 58.04 13.38 19.952 7.855 38.519 17.855 54.183 32.519 9.523 8.902 18 18.902 27.523 27.804 11.996 11.145 20.426 24.903 26.711 39.426 8 18.38 14.14 37.614 19.856 56.848 3.472 11.762 5.523 24.14 6.52 36.379 1.19 14.71 1.097 29.613.62 44.422-.332 11.57-1.808 23.14-3.285 34.617-1.906 14.473-1.097 13.234-15.762 11.996m0 0"
        />
        <path
          fill="#a58fe8"
          d="M221.063 799.324c3.906-3.332 7.667-6.902 11.761-9.953 4.664-3.473 9.426-6.855 14.57-9.57 9.665-5.094 19.282-10.426 29.473-14.235 14.57-5.476 29.613-9.664 44.469-14.425 25-7.953 50.09-15.668 75.039-23.903 23.14-7.668 42.996-20.332 57.328-40.472 12.758-17.95 15.856-37.946 11.188-59.278-4.477-20.617-14.426-38.71-25.852-56.136-14.43-21.95-29.094-43.711-43.14-65.899-21.235-33.566-35.614-70.039-40.993-109.367-6.285-45.852-.668-90.227 19.375-132.555 11.047-23.281 24.856-44.422 42.38-63.136 30.71-32.708 68.179-55.372 109.89-70.801 27.14-10.047 55.422-15.996 84.511-18.14 29.762-2.24 59.375-1.856 88.801 2.523 31.282 4.62 62.324 10.668 91.18 24.425 28.473 13.57 47.469 35.711 58.184 65.09 7.285 20.043 10.664 40.946 11.332 62.133 1.191 35.758 1.57 71.563 2.808 107.371 1.047 30.473 3.145 60.895 10.14 90.703 8.669 36.805 25.571 68.801 56.997 91.559 21.043 15.238 44.754 22.996 70.656 24.902 32.235 2.38 63.086-4.808 94.086-12.094 27.184-6.379 54.516-12.425 82.082-16.949 25.524-4.191 51.137-2.62 76.277 4.617 16.903 4.856 32.856 11.664 47.567 21.235 5.57 3.62 11.094 7.476 15.808 12.047 15.856 15.425 31.375 31.379 41.043 51.52 10.286 21.425 18.997 43.468 22.426 67.417 4.047 28.285 3.903 56.469-.43 84.656-1.285 8.383-1.43 8.332-12.949 6.715.426-4.902 1.14-9.902 1.285-14.902.38-19.188 1.856-38.426.477-57.516-1.289-17.715-5.86-35.093-12.094-52.043-6.715-18.093-15.476-34.902-27.949-49.375-8.43-9.808-18.57-18.285-28.57-26.617-19.617-16.426-43.043-24.805-67.801-28.758-20.281-3.238-40.996-3.715-61.375.192-34.898 6.715-69.656 14.472-104.605 20.996-32.473 6.094-65.086 7.43-97.18-2.617-44.613-13.954-74.133-44.188-92.227-86.516-10.808-25.328-15.855-52.184-17.804-79.371-2.813-39.852-3.715-79.848-6.43-119.746-1.668-24.235-3.379-48.758-8.238-72.516-10.473-50.898-43.278-81.512-92.942-94.605-39.23-10.332-79.035-16.239-119.699-14.43-31.043 1.43-61.469 6.145-91.32 15.617-20.57 6.524-39.805 15.664-58.043 26.38-19.38 11.425-37.043 25.663-52.852 42.233-18.234 19.141-32.375 40.754-43.137 64.61-9.234 20.523-15.093 42.043-17.234 64.754-1.762 18.949-1.762 37.52 1.285 56.281 4.57 27.898 13.57 54.23 26.711 79.18 15.524 29.379 34.664 56.277 54.04 83.18 10.523 14.617 20.237 30.093 28.237 46.187 12.043 24.328 16.282 50.183 4.711 76.133-9.996 22.425-26.28 39.851-48.468 50.422-19.903 9.472-40.375 17.757-60.946 25.664-19.14 7.379-38.851 13.285-58.09 20.425-12.187 4.524-24.14 9.903-35.945 15.426-7.332 3.43-14.144 7.903-21.191 11.856-.809.476-1.711 1-2.617 1-11.711.047-23.426.047-35.137.047-.238-.43-.524-1-.86-1.57m0 0"
        />
        <path
          fill="#a58fe8"
          d="M315.434 799.277c16.57-7.144 33.187-14.285 49.753-21.476 27.856-12.14 56.184-23.328 83.422-36.754 21.329-10.477 39.422-25.711 52.563-46.188 15.762-24.472 18.523-50.566 10.668-78.226-6.809-24.047-19.668-44.805-34.285-64.66-18.38-24.95-37.852-49.23-54.563-75.278-28.472-44.375-41.52-93.273-35.234-146.316 2.285-19.328 7.715-37.852 15.71-55.707 9.286-20.664 21.762-38.899 36.759-55.8 24.285-27.333 54.043-46.997 87.086-61.185 32.28-13.902 66.468-21.046 101.843-22.523 42.614-1.809 84.324 2.715 125.035 15.285 38.043 11.762 63.563 36.903 76.657 74.61 7.047 20.332 10.14 41.425 11.57 62.707 2.332 34.757 3.477 69.562 6 104.273 2.664 36.805 6.473 73.563 19.379 108.559 18.14 49.28 50.707 84.464 101.367 100.988 27.758 9.047 56.516 10.523 85.277 6.476 30.66-4.335 61.23-9.761 91.797-14.808 26.758-4.43 53.66-6.668 80.61-2.477 18.757 2.907 36.664 8.477 52.945 19.141 11.523 7.57 21.523 16.379 31.187 26.14 9.286 9.38 17.141 19.618 22.52 31.282 8.383 18.234 15.668 36.851 18.809 57.09 3.523 22.566 3.285 44.898 1.046 67.418-.808 8.332-1.378 8.761-13.664 7.808 0-1.902-.191-3.949.047-5.902 2.332-19.711 2.524-39.328-.715-59.043-4.761-28.805-14.093-55.754-32.949-78.32-9.379-11.239-20.472-21-33.281-28.762-32.945-19.95-68.941-23.137-105.984-19.664-22.524 2.144-44.852 5.906-67.278 8.953-34.758 4.762-69.468 8.95-104.511 2.902-52.711-9.047-92.133-36.898-118.797-83.082-14.762-25.57-22.188-53.566-27.188-82.422-7.047-40.375-9.047-81.226-11.664-122.03-2-31.141-4-62.231-13.14-92.466-12.81-42.52-40.38-69.754-82.848-82.086-23.285-6.761-47.188-9.855-71.324-11.617-26.141-1.906-52.137-.62-77.754 4.188-14.664 2.761-28.996 7.62-43.375 11.761-21.094 6.047-40.043 17.047-57.805 29.188-16.14 11-31.66 23.617-43.328 39.996-4.617 6.477-9.95 12.426-14.426 19.043-15.047 22.14-24.094 46.52-28.566 73.039-5.621 33.047-1.477 64.805 9.71 95.941 7.762 21.618 18.665 41.711 32.141 60.282 15.043 20.757 30.996 40.851 46.328 61.418 18.996 25.523 35.235 52.422 41.23 84.37 6.048 32.235-1.237 60.755-22.948 85.47-17.618 20.042-39.137 34.898-62.946 46.515-21.328 10.379-42.992 20.047-64.468 30.14-8.38 3.954-16.618 8.286-24.899 12.38-1 .476-2.098 1.144-3.144 1.144-13.235.094-26.52.047-39.758.047-.332-.574-.477-1.144-.617-1.762m0 0"
        />
        <path
          fill="#a58fe8"
          d="M404.898 801.133c25.235-14.094 50.09-27.281 74.184-41.707 23.566-14.145 45.469-30.617 61.754-53.426 13.71-19.09 18.996-40.66 17.043-63.703-3.57-42.379-22.379-78.66-47.422-112.082-18.71-24.95-39.184-48.758-56.039-74.899-29.711-46.039-41.043-96.367-25.809-150.503 6.332-22.524 17.239-42.711 31.996-61.137 18.903-23.664 42.235-41.758 68.614-55.707 31.468-16.664 65.465-25.281 101.082-27.664 31.375-2.094 62.324.238 92.988 7 47.992 10.617 79.133 39.613 91.75 86.941 5.715 21.379 8.856 43.66 11.191 65.707 5.286 50.137 7.047 100.606 17.38 150.172 7.902 37.95 21.234 73.469 46.706 103.465 32.235 37.996 74.04 57.23 122.985 62.66 33.187 3.664 66.136-.098 99.086-3.098 27.09-2.476 54.133-5.285 81.465-3.093 21.949 1.714 42.851 7.425 61.945 17.902 9.95 5.43 18.758 13.57 26.758 21.758 7.761 7.953 15.047 16.855 20.285 26.57 10.664 19.664 17.758 40.758 18.328 63.469.285 11-.379 22.043 0 32.996.191 6.187-2.14 8.285-7.95 7.332-1.284-.191-2.62-.145-4.238-.191 0-6.047-.046-11.903 0-17.711.141-19.141-2.808-37.664-9-55.899-4.378-12.902-10.617-24.57-18.949-34.851-8.047-9.954-17.71-18.477-28.855-25.426-15.38-9.617-31.996-15.903-49.613-19.094-24.805-4.523-49.946-4.047-75.086-2.476-33.614 2.093-67.133 5.238-100.891 3.093-84.703-5.426-148.648-53.468-176.645-133.648-10.046-28.711-15.714-58.422-19.332-88.465-5-41.379-8.808-82.848-14-124.227-1.808-14.472-5.234-28.898-9.52-42.851-14.523-47.516-47.14-75.086-95.655-84.133-35.282-6.57-70.707-7.57-106.082-.902-19.618 3.664-39.141 8.332-56.946 17.804-14.57 7.762-29.761 14.953-42.664 25-13.187 10.286-24.613 23.141-35.52 35.946-16.28 19.191-25.663 42.187-30.519 66.66-7.855 39.328 0 76.515 18.524 111.512 14.472 27.375 33.52 51.66 52.898 75.703 21.95 27.332 40.043 57.043 51.61 90.324 8.476 24.379 13.19 49.183 9.19 75.18-2.855 18.57-11.378 34.187-23.616 47.949-18.141 20.426-40.422 35.758-63.47 49.992-16.808 10.379-33.948 20.234-50.944 30.281-1.286.762-2.81 1.43-4.192 1.477-8.094.047-16.234 0-24.805 0m0 0"
        />
        <path
          fill="#a58fe8"
          d="M464.797 799.895c5.762-3.856 11.523-7.762 17.281-11.618 25.711-17.234 52.188-33.328 75.086-54.375 29.285-26.902 38.281-60.23 31.711-98.558-7.809-45.711-26.66-86.801-53.184-124.461-14.664-20.856-30.851-40.613-45.566-61.375-14.281-20.188-25.137-42.281-30.852-66.418-6.668-28.094-6.093-56.09 3.903-83.563 5.62-15.425 13.715-29.332 23.664-42.472 16.379-21.567 37.14-37.805 60.52-50.23 29.85-15.856 62.132-24.095 96.081-25.81 24.856-1.285 49.375.098 73.563 6 39.281 9.618 65.375 33.997 79.894 71.423 8.668 22.328 12.762 45.707 15.762 69.324 6.285 49.515 9.711 99.418 20.567 148.265 9.046 40.758 23.425 79.04 50.898 111.32 28.238 33.094 63.758 53.9 106.035 64.044 35.996 8.617 72.422 8.234 108.942 7.14 33.28-1.047 66.609-2.523 99.418 5.14 20.136 4.716 38.66 12.716 54.277 26.95 11.187 10.192 21.473 21.14 27.617 34.95 7.856 17.71 13.664 36.14 13.617 55.898 0 4.715.332 9.426.617 14.14.192 3.094-.953 4.383-4.191 4.524-9.426.43-9.043.094-9.71-9.57-.716-10.524-2.571-21.043-4.856-31.329-1.621-7.332-4.047-14.664-7.383-21.379-15.711-31.855-41.66-50.851-75.656-60.136-27.141-7.38-54.754-7.903-82.516-8.239-24.137-.332-48.375-.234-72.418-1.949-60.945-4.336-114.414-25.379-155.266-72.8-21.047-24.426-35.52-52.52-44.996-83.184-11.093-35.992-17.234-73.035-22.093-110.317-4.856-37.093-7.618-74.515-17.094-110.894-5.809-22.234-14.14-43.375-29.52-61.086-18.758-21.664-43.183-32.617-70.894-36.71-30.758-4.571-61.278-3.286-91.657 4.046-25.378 6.144-48.707 16.238-70.468 30.855-12.856 8.618-23.805 19.09-33.375 30.66-17.477 21.047-28.57 45.235-31.473 73.04-4 38.379 8.047 72.183 28.473 103.464 14.425 22.141 30.52 43.184 45.183 65.184 28.043 42.09 48.567 87.465 57.184 137.695 3.332 19.477 3.715 38.95-2.332 58.235-5.43 17.281-15.856 31.234-29.188 42.851-11.71 10.188-24.28 19.426-36.898 28.52-15.238 10.95-30.902 21.379-46.52 31.805-2.191 1.476-5.191 2.097-7.855 2.285-4.524.383-9.094.097-13.668.097-.234-.523-.473-.953-.664-1.382m0 0"
        />
        <path
          fill="#a58fe8"
          d="M511.55 799.703c7-5.047 14.095-10.043 21.048-15.09 17.472-12.761 35.472-24.902 52.328-38.426 30.804-24.757 39.375-57.898 33.66-95.75-8.188-54.28-28.281-104.273-56.23-151.078-14.333-23.996-30.997-46.566-45.946-70.18-18.523-29.284-30.047-60.85-26.379-96.179 2.38-22.902 10.477-43.664 24.664-62.23 14.047-18.38 31.328-32.81 51.184-43.852 27.664-15.43 57.898-22.523 89.512-24.285 20.902-1.192 41.52.144 61.468 6.715 34.903 11.472 55.758 36.949 68.278 70.324 8.476 22.57 12.43 46.234 16.285 69.894 7.144 43.856 13.426 87.895 21.996 131.512 7.43 37.707 21.094 73.418 43.805 105.031 34.617 48.188 82.086 75.946 139.554 87.754 33.141 6.809 66.852 7.57 100.512 9.239 22.809 1.14 45.613 2.808 67.754 8.855 21.95 5.95 42.281 15.52 57.707 32.613 10.383 11.524 19.715 24.188 22.902 40.188 1.575 7.808 3.907 15.426 5.477 23.234.715 3.617.476 7.477.715 11.617-2.332.192-4 .192-5.617.43-5.907 1-7.145-2.144-7.762-7.383-2.098-17.949-7.524-34.52-18.664-49.422-18.903-25.328-44.852-38.422-74.754-43.754-24.473-4.335-49.328-6.668-74.133-8.906-36.234-3.285-72.375-6.523-107.035-18.804-66.328-23.524-111.32-69.043-137.461-133.797-13-32.235-20.426-65.993-26.379-100.082-6.996-40.043-13.332-80.227-20.758-120.223-3.57-19.14-10.285-37.426-20.234-54.328-17.047-28.95-42.235-45.567-75.422-50.66-27.996-4.285-55.23-.762-82.371 6.379-21.902 5.761-41.758 15.808-59.277 29.57-15.188 11.95-27.856 26.473-36.473 44.516-10.762 22.476-14.524 45.664-10.524 69.898 3.57 21.664 12.762 41.281 24.094 60.039 20.14 33.188 42.09 65.328 58.324 100.75 18.332 39.95 33.618 80.848 40.903 124.414 2.57 15.285 3.715 30.617 1.332 46.043-3.477 22.234-13.95 40.805-31.473 54.613-17.234 13.618-35.52 25.95-53.375 38.852-4.472 3.238-9.234 6.094-13.426 9.617-5.953 5.094-12.664 3.43-19.187 3.668-.192-.383-.43-.86-.621-1.336m0 0"
        />
        <path
          fill="#a58fe8"
          d="M549.309 800.465c11.191-7.426 21.808-14.328 32.28-21.426 18.81-12.758 37.665-25.52 50.329-45.137 10.379-16.093 13.191-33.996 12.715-52.8-.621-25.141-6.668-49.235-13.617-73.137-12.715-43.899-29.38-86.274-50.758-126.7-9.762-18.472-20.758-36.28-30.95-54.562-10.855-19.426-21.28-39.09-25.328-61.375-4.859-26.902-1-52.183 13.235-75.941 12.238-20.426 29.855-35.043 50.137-46.14 30.093-16.52 62.898-23.329 97.039-20.329 40.754 3.57 69.132 25.328 85.89 62.562 9.524 21.235 15.094 43.614 19.38 66.278 4.952 26.187 9.382 52.422 13.667 78.707 5.426 33.473 13.14 66.37 24.235 98.367 13.14 37.902 33.28 71.563 62.468 99.371 31.805 30.328 69.801 49.137 112.274 59.469 31.234 7.617 63.18 10.234 94.988 13.855 22.95 2.57 45.898 5.618 67.703 13.618 16.953 6.234 32.473 14.804 44.758 28.66 8.664 9.761 16.047 20.191 20.047 32.617 2.379 7.285 3.664 14.95 5.664 23.52-4.332 0-8.047.238-11.711-.141-1.05-.145-2.524-2.098-2.715-3.383-2.621-17.043-10.57-31.328-22.047-43.898-22.71-24.997-53.086-33.473-84.61-39.235-37.991-6.95-76.702-9.57-114.175-19.472-49.945-13.235-93.082-37.66-127.125-76.942-26.426-30.426-43.281-66.043-54.852-104.371-10.808-35.852-17.855-72.562-24.378-109.414-5.618-31.856-10.57-63.899-21.664-94.465-8.38-23.234-19.95-44.375-40.66-59.137-15.333-10.949-32.665-16.332-51.426-17.425-25.567-1.477-50.04 2.906-73.133 14.046-9.524 4.57-19.57 8.856-27.664 15.426-31.52 25.664-50.801 60.563-39.23 108.13 5.046 20.76 14.855 39.425 24.612 58.042 25.762 49.23 48.95 99.559 66.137 152.504 9.426 29.094 18.235 58.328 22.567 88.656 3.097 21.809 3.05 43.66-7.38 64.04-7.855 15.378-19.995 26.995-33.85 36.804-11.571 8.191-24.048 15.14-35.235 23.856-8.094 6.476-16.473 9.19-27.617 6.902m0 0"
        />
        <path
          fill="#a58fe8"
          d="M588.496 800.895c10.188-6.762 19.234-12.57 28.09-18.711 14.57-10.094 28.809-20.473 38.379-35.95 11.426-18.52 13.71-38.851 11.617-59.898-3.57-35.852-14.332-69.988-25.234-104.035-15.856-49.516-35.141-97.7-57.184-144.84-8.476-18.043-16.476-36.422-23.332-55.133-9.855-27.047-9.617-54.137 4.332-80.086 6.57-12.238 16-21.949 26.95-30.426 25.855-20.093 55.23-29.28 87.8-27.57 35.473 1.86 60.516 20.094 77.086 50.902 12.094 22.52 18.52 46.946 23.71 71.75 7.477 35.426 13.95 71.04 21.95 106.32 8.192 36.333 19.094 71.9 37.235 104.75 36.09 65.329 91.464 105.895 162.98 124.368 29.902 7.715 60.61 12.523 90.941 18.57 23.711 4.711 47.184 10.188 68.278 22.805 13.234 7.906 24.234 17.809 32.14 31.426 4.426 7.664 7.996 15.332 10.188 23.804-9.285 2.762-10.902 2-14-5.996-8.711-22.57-25.758-37.093-46.613-47.664-19.711-9.996-40.993-14.902-62.418-19.328-35.856-7.476-72.04-13.762-106.465-26.902-78.61-30.043-129.938-86.227-157.887-164.836-13.95-39.235-22.664-79.8-30.95-120.465-6.187-30.281-11.663-60.8-22.85-89.797-7.907-20.473-18.094-39.566-35.997-53.23-18.191-13.856-38.804-18.668-61.613-17.141-22.188 1.473-42.328 8.57-59.899 21.188-28.187 20.234-43.804 51.515-36.183 90.89 5.379 27.711 17.281 53.188 27.95 78.992 29.944 72.516 56.753 146.125 73.94 222.88 5 22.378 7.333 45.136.098 67.706-5.097 15.95-14.953 28.567-28.047 38.567-10.234 7.808-21.426 14.425-31.472 22.52-6.95 5.284-14.188 5.046-23.52 4.57m0 0"
        />
        <path
          fill="#a58fe8"
          d="M635.25 800.703c10.098-8.047 20.617-15.855 30.426-24.473 20.332-17.855 26.758-41.23 24.902-67.324-2.43-34.613-12.473-67.562-22.996-100.273-18.332-56.946-37.664-113.606-56.281-170.457-6.617-20.188-13.473-40.422-18.426-61.086-4.95-20.426-4.523-41.09 5.191-60.613 10.047-20.141 26.805-32.329 47.184-40.52 17.238-6.95 34.902-7.71 52.52-2.809 22.09 6.141 37.468 21.047 48.613 40.567 12.379 21.617 19.426 45.281 25.234 69.324 8.856 36.758 16.903 73.754 26.473 110.32 10.379 39.52 24.472 77.66 47.375 111.989 34.851 52.23 82.847 87.511 142.031 107.082 29.996 9.949 60.945 17.093 91.465 25.472 24.617 6.762 49.043 14 69.086 30.758 5.715 4.809 10.617 10.762 15.238 16.664 3.188 4.098 5.38 9 8.047 13.668-8.715 2.14-10.523 2-14.906-5.336-12.426-20.758-31.567-32.851-53.422-40.375-27.426-9.426-55.469-17.047-83.371-25.234-36.805-10.809-72.086-24.809-103.89-46.758-51.044-35.234-84.563-83.559-105.75-141.27-14.712-40.039-24.329-81.464-34.138-122.84-7.046-29.71-13.855-59.515-27.617-87.038-9.953-19.903-23.332-36.707-44.66-45.137-14.855-5.856-30.285-6.856-45.664-2.047-7.52 2.379-15.566 4.523-21.95 8.856-13.808 9.378-24.519 21.761-29.757 38.187-7.285 22.902-4.523 45.754 2.145 67.945 15.425 51.66 32.09 102.985 47.66 154.598 12.902 42.852 25.566 85.848 37.183 129.082 5.383 19.996 7.953 40.754 3.145 61.469-4.38 18.949-15.188 33.613-30.758 44.945-2.285 1.668-4.621 3.383-6.715 5.332-6.855 6.238-14.426 9.809-23.617 7.332m0 0"
        />
        <path
          fill="#a58fe8"
          d="M669.438 800.277c3.953-3.43 7.906-6.859 11.902-10.285 16-13.762 25.57-30.804 26.855-52.183 1.43-23.188-3.285-45.52-9.664-67.47-13.57-46.71-28.14-93.132-41.804-139.839-12.239-41.805-24.188-83.707-35.473-125.746-4.43-16.524-6.192-33.664-4.285-50.95 3-27.042 16.71-46.515 42.183-55.991 22.856-8.524 44.141-3.856 62.66 12.332 14.95 13.046 24.38 29.949 30.38 48.28 9.285 28.473 17.378 57.372 24.995 86.321 11.047 41.996 21.997 83.992 39.997 123.7 32.52 71.753 85.75 122.081 158.695 150.886 29.996 11.856 61.133 20.715 91.703 30.95 20.996 7.046 41.566 14.952 58.898 29.234 6.57 5.382 12.567 11.382 16.329 19.808-5.57 1.332-8.95.38-12.57-4.14-11.903-14.907-27.66-25.047-45.184-31.762-25.332-9.711-51.137-18.328-76.754-27.281-38.09-13.286-74.371-29.996-106.414-54.946-44.614-34.71-74.946-79.61-95.371-131.89-15.856-40.567-26.426-82.657-37.567-124.602-7.14-26.808-14.472-53.613-27.613-78.324-5.953-11.192-13.145-21.57-23.285-29.281-16.57-12.618-34.614-17.332-54.946-9.192-22.425 9-32.566 26.809-35.851 49.328-3.192 21.856.95 43.282 5.71 64.47 16.333 72.417 38.903 143.077 60.423 213.972 8.332 27.472 17.332 54.804 20.664 83.469 2.336 20.187 2.191 40.23-10.524 57.468-6.047 8.188-13.328 15.617-20.996 22.328-2.808 2.477-8.285 1.954-12.57 2.813-.191-.43-.332-.953-.524-1.477m0 0"
        />
      </g>
    </g>
  </svg>
);
export default LeftSvgMarquee;