import styles from "../CSS/Footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={styles.column}>
        <div>
          <p className={styles.logo}>PTDuo</p>
          <br />
          <p>설명칸입니다 설명을 입력하세요</p>
          <p>푸터푸터푸터푸터푸터푸터푸터푸터푸터푸터푸터푸</p>
          <p>푸터푸터푸터푸터푸터푸터푸터푸터푸터푸터푸터푸터푸터푸</p>
        </div>
        <div className={styles.column}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            개발자 깃허브 바로가기
          </a>
          <a
            href="mailto:obb8923@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            개발자 메일 주소: obb8923@gmail.com 바로가기
          </a>
        </div>
      </div>
      <div>
        <p className={styles.textXl}>kurumet 사용방법==ㅔ-ㅔ- 수정하기~</p>
        <br />
        <p>1. 지도에서 맛집 찾기</p>
        <p>맨 위의 메뉴에서 유튜버를 클릭합니다.</p>
        <p>지도에 나오는 마커들 중, 정보를 보고 싶은 마커를 클릭합니다.</p>
        <p>
          유튜브로 넘어가 유튜버의 평가를 확인하거나, 카카오 지도로 넘어가
          검색을 할 수 있습니다.
        </p>
        <br />
        <p>2. 리스트로 보기</p>
        <p>맨 위의 메뉴에서 유튜버를 클릭합니다.</p>
        <p>리스트로 나열된 영상들을 확인할 수 있습니다.</p>
        <br />
        <p>3. 검색하기</p>
        <p>맨 위의 메뉴에서 프로그램이름, 지역별로 검색을 할 수 있습니다.</p>
        <p>검색결과를 클릭하면 선택할 수 있습니다.</p>
      </div>
    </footer>
  );
}
