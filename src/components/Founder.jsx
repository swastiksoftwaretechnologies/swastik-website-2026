import { Award, Building2, Calendar, FileText } from 'lucide-react'
import SplitText from './animations/SplitText'
import { Button } from './ui/Button'
import { ScrollReveal } from './ui/ScrollReveal'
import { useContactModal } from '../context/ContactModalContext'

const recognition = [
  'Microsoft Award for Excellence - Live Site',
  'Microsoft Spot Award - Search Stability',
  "IIT Jodhpur Director's Gold Medal / Best Project",
]

export default function Founder() {
  const { openModal } = useContactModal()

  return (
    <section id="about" aria-labelledby="founder-heading" className="relative px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <ScrollReveal className="rounded-[2rem] border border-gray-200 bg-gray-950 p-7 text-white shadow-[0_30px_90px_rgba(15,23,42,0.16)] md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-green-300">Founder</p>
            <h2 id="founder-heading" className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-5xl">Rushil Sanghavi</h2>
            <p className="mt-2 text-lg text-white/65">Founder, Exact Build</p>
            <blockquote className="mt-10 border-l-2 border-green-400 pl-5 text-xl font-medium leading-8 text-white/90">
              I have spent my career building systems where scale, reliability and intelligent decision-making are not optional.
            </blockquote>
            <p className="mt-10 text-sm leading-6 text-white/60">IIT Jodhpur Director&apos;s Gold Medalist · Former Microsoft Engineer · Published AI Researcher · Production AI Builder</p>
            <Button onClick={openModal} className="mt-8 w-full justify-center rounded-2xl">Schedule 15 Minutes with Rushil <Calendar size={18} /></Button>
            <p className="mt-4 text-sm leading-6 text-white/60">No generic discovery deck. Bring the actual workflow. We can talk architecture, feasibility, data, model behavior, integration constraints and what a useful first release should look like.</p>
          </ScrollReveal>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-green-600">Founder-led delivery</p>
            <SplitText id="founder-story-heading" text="Engineering depth that stays connected to the product." tag="h3" splitType="chars" delay={16} duration={0.8} className="block text-4xl font-bold tracking-[-0.04em] text-gray-950 md:text-5xl" />
            <div className="mt-7 space-y-5 text-base leading-7 text-gray-600">
              <p>Rushil Sanghavi is a software and AI engineer with 4+ years of experience across Microsoft Bing Search, Azure cloud services and production AI systems. He now applies that engineering depth to custom AI products for companies with complex, high-value workflows.</p>
              <p>His research spans multimodal information retrieval and cross-modal matching. He has 3 publications, including first-author work at IEEE/CVF CVPR Workshops and a Springer Nature journal publication, plus COMSNETS research on magnetic-sensor interaction.</p>
              <p>Today, his work spans multimodal AI interviewing, financial RAG and research, AI-enabled care operations, hotel and room entity resolution, and cloud-native software.</p>
            </div>

            <div className="mt-8 rounded-[2rem] border border-green-200 bg-green-50/70 p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-green-700 shadow-sm"><Building2 size={20} /></span>
                <div><h3 className="font-semibold text-gray-950">Engineering at scale</h3><p className="text-xs text-gray-500">Founder experience from Microsoft systems</p></div>
              </div>
              <p className="mt-5 text-sm leading-6 text-gray-600">At Microsoft, Rushil worked across Bing Search and Azure Database Migration Service. His systems processed 188M daily query triggers and evaluated 1.2B+ query-question pairs daily; he also built security-validation infrastructure executing 2.1B+ fuzz-test inputs, improved production availability to 99.975%, and shipped RAG/LLM-assisted developer workflows that reduced MTTR by about 26%.</p>
              <p className="mt-4 text-xs font-medium leading-5 text-gray-500">These figures describe systems Rushil engineered at Microsoft. They are not Exact Build client metrics.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {recognition.map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600"><Award size={14} className="text-green-600" />{item}</span>)}
            </div>
            {/* TODO: Add verified DOI or conference links for Rushil's research publications. */}
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-gray-500"><FileText size={14} /> Publication links will be added after verification.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
