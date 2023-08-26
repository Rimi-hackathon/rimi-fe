import { useRecoilState } from "recoil";
import { main } from "@/lib/recoil";
import { useRouter } from "next/navigation";

const Redirect = ({ children }: { children: React.ReactNode }) => {
  const [state] = useRecoilState(main);
  const router = useRouter();
  if (!state.email) router.push("/");
  return <>{children}</>;
};
export default Redirect;
