## 프로젝트 생성 

 ->npx expo init NATIVE-BACKGROUND-APP (java scripts 기반)
 
## 네비게이션 설치

 ->`npm install @react-navigation/native` 
 ->`npm install @react-navigation/native-stack --save`
 ->`npm install --save @react-navigation/bottom-tabs`

 ## 컴포넌트 활용 

 -> 기존에 만든 기본 섹션별 컴포넌트를 활용

 ## 다른 설치 요소 

 -> `npm install @expo/vector-icons props-types --save`
 -> `npx expo install expo-file-system` -> 파일 다운로드 ImageDetailScreen.js파일에서 onPressDownload 사용
 -> `npx expo install expo-media-library` -> 권한 허용 

 ## 이미지 다운 
 
 ->pixels.com

 ## 앱 디자인 디테일 
 
 -> useState를 활용해 download중인지 아닌지 표현하기 (ActivityIndicator)
 -> 터치효과 Button.js에서 onPressIn과 onPressOut 사용 (애니메이션 사용)






