import ProfileHeader from '@/components/ProfileHeader'
import About from '@/components/About'
import Github from '@/components/Github'
import Experiences from '@/components/Experiences'
import HackerRank from '@/components/HackerRank'
import CodeAcademy from '@/components/CodeAcademy'
import StackExchange from '@/components/StackExchange'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Copyright from '@/components/Copyright'
import Languages from '@/components/Languages'
import Certifications from '@/components/Certifications'


import type { Metadata } from 'next'
 

const resume = require('@/resume.json')

export const metadata: Metadata = {
  title: resume?.basics?.name + ' | Resume' || 'Resume',
  description: resume?.basics?.title || 'Resume'
}
 

export default function Page() {


  return (
    <div className="grid grid-row-1 flex flex-col items-center justify-center gap-2 sm:pt-2">
      <ProfileHeader resume={resume} />
      <About resume={resume} />
      <Experiences resume={resume} />
      <Skills resume={resume} />
      <Education resume={resume} />
      <Certifications resume={resume} /> 
      <Languages resume={resume} />
      <Github resume={resume} />
      <HackerRank resume={resume} />
      <StackExchange resume={resume} />
      <CodeAcademy resume={resume} />
      <Copyright resume={resume}/>
    </div>
  )
}

// set title  
