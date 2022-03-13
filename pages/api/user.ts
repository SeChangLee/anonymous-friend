import { GetServerSideProps } from "next";
import bcrypt from "bcryptjs";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const encryPassword = await bcrypt.hash("1234", 10);
  console.log(encryPassword);
  console.log(await bcrypt.compare("1234", encryPassword));
  return { props: {} };
};
