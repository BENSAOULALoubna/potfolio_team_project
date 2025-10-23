import MemberPage from "@/components/team/MemberPage";
import teamData from "@/lib/ilyas";

export default function IlyasPage() {
  const member = teamData.ilyas;
  return <MemberPage member={member} />;
}
