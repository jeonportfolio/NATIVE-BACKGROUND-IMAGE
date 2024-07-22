## 프로젝트 생성 

 ▶npx expo init NATIVE-BACKGROUND-APP (java scripts 기반)
 
## 네비게이션 설치

 ▶`npm install @react-navigation/native` 
 ▶`npm install @react-navigation/native-stack --save`
 ▶`npm install --save @react-navigation/bottom-tabs`

 ## 컴포넌트 활용 

 ▶ 기존에 만든 기본 섹션별 컴포넌트를 활용

 ## 다른 설치 요소 

 ▶ `npm install @expo/vector-icons props-types --save`
 ▶ `npx expo install expo-file-system` -> 파일 다운로드 ImageDetailScreen.js파일에서 onPressDownload 사용
 ▶ `npx expo install expo-media-library` -> 권한 허용 

 ## 이미지 다운 
 
 ▶ pixels.com

 ## 앱 디자인 디테일 
 
 ▶ useState를 활용해 download중인지 아닌지 표현하기 (ActivityIndicator)
 ▶ 터치효과 Button.js에서 onPressIn과 onPressOut 사용 (애니메이션 사용)

 ## Redux로 props-drilling 제거 

 ▶ `npm install redux redux-logger react-redux` 설치 
 ▶ actions, store, reducers 폴더를 만든다. 
 ▶ store -> combineReducers를 통해 reducer들을 통합시키고 applyMiddleware를 통해 로거를 생성한다. 
 ▶ reducer -> 좋아요를 눌렀는지 안눌렀는지 판별하여 추가한다.
 






