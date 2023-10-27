import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-indigo-900 `}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="font-bold mt-[26px]  text-[24px] leading-[32px] text-[#B0B0B0]">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
