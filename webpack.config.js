/* 웹팩 설정 파일 (https://webpack.kr/concepts/)
* mode : 웹펙의 현재 모드 설정 [development / production / none]
* entry : 웹팩을 실행할 첫 진입점 
* devtool : source-map을 설정하는 부분으로 에러가 발생했을 때 번들링된 파일에서 어느 부분에 에러가 났는지를 쉽게 확인할 수 있게 해주는 도구

* resolve.extensions : 웹펙에서 파일을 처리할때 확장자를 생략해도 인식하게 만들수 있게 해줌

* output.path : 결과물 출력할때 나오는 곳
* output.filename : 파일 이름 설정, [hash]는 컴파일할때 사용한 hash를 사용하게 됨

* module.rules.test : 어떤 파일에 적용할지 확장자 작성
* module.rules.loader : 적용할 로더가 1개라면 loader로 설정
* module.rules.use : 적용할 로더가 2개 이상이면 use 배열로 설정

* style-loader : 변환된 CSS 파일을 html <head>의 <style> 안에 코드 넣어주는 역할을 함 (기본적으로 스타일은 html <style>태그에서 css파일을 삽입하는 식으로 사용하지만, 웹팩의 경우 js파일 내에서 스타일 파일을 import,export를 사용하여 불러온 후 나중에 번들링하여 넣어주는 방식이다.)
* css-loader : CSS 파일을 자바스크립트가 이해할 수 있도록 변환
* babel-loader : (구버전 웹 브라우저와 호환하기 위해서) JSX 및 ES6+ -> Javascript ES5 문법으로 변환, .babelrc에서 설정 참고
* file-loader : 이미지 및 폰트 등의 파일 로딩
* html-loader : html을 읽을 수 있음

* devServer: 데브 서버 설정 (웹팩 기반의 번들링 된 결과물 적용 = 실제 배포 환경)
* devServer.port : 데브 서버의 포트 번호
* devServer.hot : 새로 고침 안해도 수정된 빌드 결과물 자동 적용
* devServer.open : 데브 서버 실행 시, 즉시 브라우저 실행

* plugins.clean-webpack-plugin : 번들링을 할 때마다 이전 번들링 결과를 제거
* plugins.html-webpack-plugin : 데브 서버 실행 시 빌드된 파일을 HTML파일에 자동으로 삽입
*/

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".css", ".js", ".jsx"],
  },
  output: {
    filename: "main_[hash].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: "file-loader",          
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    port: 9000,
    hot: true,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};