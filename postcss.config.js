module.exports = ({ file }) => {
  let isVant = file && file.dirname && file.dirname.indexOf("vant") > -1;
  let rootValue = isVant ? 37.5 : 75; // 37.5为vant默认尺寸,75为设计图尺寸
  return {
    plugins: {
      "postcss-pxtorem": {
        rootValue: rootValue,
        propList: ["*"],
      },
    },
  };
};
