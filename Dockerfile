# 보통 FROM으로 시작함
FROM node:20.9.0-alpine

# 작업 디렉토리를 /app으로 설정
# 도커에게 명령어가 실행되어야 하는 경로를 알려줌
WORKDIR /usr/src/app

# 컨테이너에 package.json와 package-lock.json 파일을 복사.
COPY package*.json ./

RUN npm ci

# 로컬 머신에 있는 파일이 이미지에 들어가야 됨??
# 첫 번째 경로: Dockerfile을 제외한 모든 폴더를 복사해라
# 두 번째 경로: 그 파일을 저장해야 하는 이미지 내부의 경로
# Host file system, Image / container file system
COPY . .

EXPOSE 8000