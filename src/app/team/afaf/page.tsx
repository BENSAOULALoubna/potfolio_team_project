import MemberPage from "@/components/team/MemberPage";
import teamData from "@/lib/afaf";

export default function AfafPage() {
  const member = teamData.afaf;
  return <MemberPage member={member} />;
}
