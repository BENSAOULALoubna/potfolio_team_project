import MemberPage from "@/components/team/MemberPage"
import teamData from "@/lib/loubna"

export default function LoubnaPage() {
  const member = teamData.loubna
  return <MemberPage member={member} />
}