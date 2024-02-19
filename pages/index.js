import Head from "next/head";
import packageJson from "../package.json";
import liff from '@line/liff';
import Micro from "./micro";
export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  return (
    <div>
      <Head>
        <title>ศูนย์ดำรงธรรม จังหวัดฉะเชิงเทรา</title>
      </Head>
      <div className="home">
        <h1 className="home__title">
          ศูนย์ดำรงธรรม <br />
          <a
            className="home__title__link"
            href="https://developers.line.biz/en/docs/liff/overview/"
          >
            จังหวัดฉะเชิงเทรา
          </a>
        </h1>
      
        <div className="home__buttons">
          <a
            href="https://www.chachoengsao.go.th/"
            target="_blank"
            rel="noreferrer"
            className="home__buttons__button button--primary"
          >
            แจ้งเรื่องร้องเรียน
          </a>
          <a
            href="https://liff-playground.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="home__buttons__button button--tertiary"
          >
            ตรวจสอบสถานะ
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="home__buttons__button button--secondary"
          >
            ติดต่อเจ้าหน้าที่
          </a>
        </div>
      </div>
    </div>
  );
}
