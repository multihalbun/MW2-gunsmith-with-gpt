# MW2-gunsmith-with-gpt
- [배포주소](https://multihalbun.github.io/MW2-gunsmith-with-gpt/)

## 프로젝트 설명
- GPT를 이용하여 [Call of Duty : Modern Warfare II](https://www.callofduty.com/modernwarfare2)의 무기 부착물을 추천받는다.
- 기본으로 5개의 부착물을 GPT에게 추천해 달라고 요청한다.
- 요청 사항을 입력하여 자세하게 GPT에게 요청을 할 수 있다.
- 무기와 부착물 데이터는 Season 3 까지의 데이터이며 완벽하지 않을 수 있음.

## 진행사항
- html, css, js 파일 생성
- 로고, 아이콘 이미지 추가
- select 메뉴 서로 연동
- gpt 기능 연결
- 무기, 부착물 데이터 입력

## 구현하면 좋을 기능
- gpt의 답변을 json형식으로 받기.
- json 형식의 답변을 무기 이미지에 그려서 답변하기 (threejs, canvas 사용)

## 폴더 트리
```
│  .gitignore
│  index.html
│  README.md
│
└─asset
    ├─css
    │      style.css
    │
    ├─font
    │      ModernWarfare-8MM6z.ttf
    │
    ├─img
    │      github-logo.png
    │      gpt-logo.png
    │      loading.gif
    │      mw2-favicon.ico
    │      mw2-logo.png
    │
    └─js
            attachmentData.js
            gpt.js
            main.js
            weaponList.js
```