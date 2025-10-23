import MemberPage from "@/components/team/MemberPage"
import teamData from "@/lib/raouf"

export default function RaoufPage() {
  const member = teamData.raouf
  return <MemberPage member={member} />
}