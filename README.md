# 서와실농원(쇼핑몰) 프로젝트 - 서버(백엔드)

서와실 농원 API 입니다.

<div align="center">
  <img src="https://img.shields.io/badge/node-16.17.0-339933?logo=node.js"> 
  <img src="https://img.shields.io/badge/NestJS-8.0.0-E0234E?logo=NestJS"> 
  <img src="https://img.shields.io/badge/TypeScript-4.3.5-3178C6?logo=typescript"> 
  <img src="https://img.shields.io/badge/postgresql-14.2-4479A1?logo=postgresql"> 
  <img src="https://img.shields.io/badge/Swagger-6.1.0-DC382D?logo=swagger"> 
  <img src="https://img.shields.io/badge/TypeORM-0.2.45-010101"> 
  <img src="https://img.shields.io/badge/AWS_Lightsail-white?logo=amazon"> 
</div>

## 소개

- > 본 서비스는 서와실 농원이라는 쇼핑몰 API 입니다.
- > 일반적인 개인 쇼핑몰에 필요한 기능들을 구현하였습니다.

---

| 👉 목차                        |                                                                         |
| ------------------------------ | ----------------------------------------------------------------------- |
| [1. 서비스 개요](#서비스-개요) | 서비스 기능 설명 및 고려사항                                            |
| [2. 구현 사항](#구현-사항)     | API 구현 사항 간단 설명 (자세한 정보를 원하시면 넘어가셔도 무방합니다.) |
| [3. To Do](#to-do)             | 추후 구현 예정인 기능                                                   |
| [4. ERD](#erd)                 | 서비스 ERD 모델                                                         |
| [5. Usage](#usage)             | 서비스 설치-실행 및 테스트 방법 확인                                    |
| [6. 참조 문서](#참조-문서)     | 서비스 전반적인 문서 확인                                               |

---

# 서비스 개요

- 본 서비스는 `유저 관리`, `게시판 CRRUD`, `게시글 작성 기능`등 을 제공합니다.
- Multer 라이브러리를 이용해 이미지 업로드가 가능하며 커스텀 pipe를 이용하여 이미지 크기를 resizing하여 최적화 작업을 거쳐 AWS_S3 버킷에 저장이 됩니다.

# 구현 사항

<details>
<summary>간단 명세</summary>
<div markdown="1">

### 유저

- 유저 회원가입

- 유저 로그인 및 인증
  - JWT 토큰을 발급받으며, 이를 추후 사용자 인증으로 사용.(로그아웃은 프론트엔드에서 처리)
  - 사용자 경험 측면과 보안 측면을 생각해 액세스 토큰와 리프레시 토큰 발급

### 게시글 (상품)

- 게시글 생성

  - 제목, 내용, 카테고리, 이미지 데이터 등을 입력하여 생성합니다.

- 게시글 수정

  - 관리자만 수정 가능

- 게시글 삭제

  - 관리자만 삭제 가능
  - 삭제된 글 복구 가능

- 게시글 상세보기

  - 모든 사용자는 모든 게시물에 보기권한이 있음
  - API 호출 시 조회수 증가

- 게시글 목록

  - 모든 사용자는 모든 게시물에 보기권한이 있음

    </div>

</details>

# TO DO

### 테스트 코드 작성

- API의 신뢰도를 높이기 위해 테스트 코드 구현 예정

# ERD

<img width="785" alt="스크린샷 2022-09-01 오후 10 44 18" src="https://user-images.githubusercontent.com/54757435/222016367-1d7300cc-d8f5-49a7-a9f7-1f622801e477.png">
</br>

# Usage

### Create .env file

```
MODE=dev # dev, prod
PORT=8000

USERNAME=postgres
PASSWORD=
DATABASE=
HOST=

JWT_SECRET_KEY=
JWT_EXPIRESIN=300000
JWT_REFRESH_TOKEN_SECRET=
JWT_REFRESH_TOKEN_EXPIRATION_TIME=604800

# AWS
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_S3_BUCKET_NAME=gyomdyung-bucket

```

### Installation

```bash
$ npm install --legacy-peer-deps
```

### Running the app

```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```

- API를 테스트는 Swagger를 이용해 가능합니다.
- URL: localhost:8000/docs

# 참조문서

## 📒 [노션](https://button-molybdenum-e50.notion.site/2de7d659faa046dc8649404dec1fc961) - 아래의 내용을 한번에 보실 수 있습니다.

## 📒 [API 명세서](https://button-molybdenum-e50.notion.site/4-API-e359ae588f6546108575c8d3e2bf3656)

자세한 내용은 스웨거 페이지에서 가능하니 스웨거를 이용해주시면 매우 감사하겠습니다.🙇🏻‍♂️

## 📌 [개발 컨벤션](https://button-molybdenum-e50.notion.site/2-Convention-Code-727f64289f384a3bb909a43a1d016c74)
