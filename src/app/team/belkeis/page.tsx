import MemberPage from "@/components/team/MemberPage";
import teamData from "@/lib/belkeis";

export default function BelkeisPage() {
  const member = teamData.belkeis;
  return <MemberPage member={member} />;
}
