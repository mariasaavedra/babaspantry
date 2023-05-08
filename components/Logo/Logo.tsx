import styles from "./Logo.module.css";

export interface LogoProps {}

export default function Logo(props: LogoProps) {
  return (
    <div className={styles.LogoComponent}>
        <svg
          className="absolute"
          viewBox="299 299 300 300"
          fill="red"
          stroke="#000"
        >
          <clipPath className={styles.clipPath} id="myClip">
            <path
              stroke="#000"
              d="M24.43,11.01c.84,.11,2.14,.2,3.42,.45,4.76,.93,8.3-.91,11-4.as73,.95-1.35,1.89-2.7,3.1-3.84,3.65-3.46,8-3.83,12.19-1.01,1.38,.93,2.56,2.07,3.71,3.26,3.23,3.34,7.01,4.1,11.3,2.4,2.32-.92,4.67-1.71,7.2-1.38,4.96,.64,8.19,4.23,8.73,9.96,.51,5.4,3.33,8.6,8.46,10.13,9.34,2.78,11.61,8.08,7.13,16.67-2.33,4.46-2.1,8.53,1.18,12.4,1.89,2.23,3.37,4.66,3.58,7.7,.22,3.3-1.08,5.87-3.61,7.89-1.08,.86-2.28,1.53-3.54,2.1-4.81,2.18-6.87,6.06-6.9,11.19,0,.76,.05,1.51,.06,2.27,.01,6.78-5.38,11.34-12.02,9.89-5.86-1.28-10.42,.1-13.52,5.47-.58,.99-1.41,1.87-2.23,2.68-3.56,3.52-7.74,3.95-12,1.31-1.3-.8-2.42-1.81-3.43-2.94-3.41-3.78-7.49-4.55-12.15-2.74-1.93,.75-3.88,1.21-5.99,1.25-4.13,.07-6.72-1.98-8.4-5.49-.74-1.55-1.12-3.24-1.33-4.95-.61-4.95-3.2-8.18-8.1-9.49-2.05-.55-4.05-1.31-5.81-2.56-3.13-2.23-4.36-5.42-3.57-9.18,.4-1.9,1.11-3.67,2.04-5.37,2.34-4.29,1.94-8.29-1.21-12.03-1.11-1.32-2.09-2.72-2.78-4.31-1.75-4.02-.95-7.93,2.25-10.9,1.07-.99,2.26-1.81,3.59-2.39,5.13-2.24,7.53-6.15,7.34-11.72-.03-.96,0-1.92,.06-2.88,.39-5.81,4.03-9.17,10.29-9.11Z"
            />
          </clipPath>
        </svg>
        {/* Logo */}
        <div
          id="shape"
          className={
            styles.shape +
            " shadow-6xl cursor-pointer z-[9999] bg-[] h-[200px] w-[200px] fixed top-[-60px] left-0 right-0 text-center mx-auto"
          }
        >
          <img
            src="/images/logo-blue.svg"
            width={160}
            height={"auto"}
            className="mx-auto text-center animate__animated  animate__infinite animate__delay-5s  animate__slower  top-[5px] ml-[20px] fixed z-10 p-3 py-1"
          ></img>
        </div>
      </div>
  );
}
