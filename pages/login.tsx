import bcrypt from "bcryptjs";
import { GetServerSideProps } from "next";

export default function Login() {
  return "Login Page";
}

// context 받을 수 있는 데이터
// params: 다이나믹 라우트 페이지라면, params를 라우트 파라미터 정보를 가지고 있다.
// req: HTTP request object
// res: HTTP response object
// query: 쿼리스트링
// preview: preview 모드 여부 >공식문서
// previewData: setPreviewData로 설정된 데이터

// 리턴 가능한 값
// props : 해당 컴포넌트로 리턴할 값 (선택적)
// redirect : 값 내부와 외부 리소스 리디렉션 허용한다 (선택적) 무조건 { destination: string, permanent: boolean } 의 꼴이어야 한다. 몇몇 드문 케이스에서 오래된 HTTP클라이언트를 적절히 리디렉션하기 위해 커스텀 status코드가 필요할 수 있는데, 그땐 permanent property 대신에 statusCode property를 이용한다.
// notFound : Boolean값, 404status를 보내는 것을 허용한다. (선택적)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const encryPassword = await bcrypt.hash("1234", 10);
  console.log(encryPassword);
  console.log(await bcrypt.compare("1234", encryPassword));
  return { props: {} };
};
