const styles = {

  
  boxWidth: "xl:max-w-[1280px] w-full",

  paragraph: "font-sans font-normal text-Grey_Color text-[14px] md:text-[20px] md:leading-[30.8px] leading-[21px]",
  heading: "font-poppins text-[32px] md:text-[64px] md:leading-[96px] leading-[40px] font-[600]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-center items-end",
  flexBetween:"flex justify-between items-center",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};



export default styles