//노드에서는 파일사이에 모듈관계가 있는 경우가 많아 현재 파일의 경로나 파일명을 알아야하는 경우가 있음
//노드는 __filename , __dirname 이라는 키워드로 경로에 대한 정보를 제공함
//파일에 __filename과 __dirname 을 넣어두면 실행시 현재 파일명과 파일경로로 바뀜
console.log(__filename);
console.log(__dirname);

//윈도우가 아니라면 \ 대신 / 로 폴더경로 구분될수 있음
//하지만 경로가 문자열로 반환되기도 하고 \ 나 / 같은 경로 구분자 문제도 있어 보통은 이를 path 모듈과 함께 씀