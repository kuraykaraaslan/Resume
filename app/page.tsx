import ProfileHeader from '@/components/ProfileHeader'
import About from '@/components/About'
import Github from '@/components/Github'
import Experiences from '@/components/Experiences'
import HackerRank from '@/components/HackerRank'
import CodeAcademy from '@/components/CodeAcademy'
import StackExchange from '@/components/StackExchange'
import Education from '@/components/Education'

export default function Page() {

  const resume = require('@/resume.json')

  return (
    <div className="grid grid-row-1 flex flex-col items-center justify-center gap-2 sm:pt-2">
      <ProfileHeader resume={resume} />
      <About resume={resume} />
      <Experiences resume={resume} />
      <Education resume={resume} />
      <Github resume={resume} />
      <HackerRank resume={resume} />
      <StackExchange resume={resume} />
      <CodeAcademy resume={resume} />
    </div>
  )
}

// set title  
