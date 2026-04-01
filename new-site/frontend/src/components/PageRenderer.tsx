'use client'

import { useContent } from '../contexts/ContentContext'
import HomePage from './HomePage'
import GuidePage from './GuidePage'
import GuideStep1Page from './GuideStep1Page'
import GuideStep2Page from './GuideStep2Page'
import BadgeArcadePage from './BadgeArcadePage'
import OtherPage from './OtherPage'
import ProgressPage from './ProgressPage'
import FAQPage from './FAQPage'

export default function PageRenderer() {
  const { currentPage } = useContent()

  const renderPage = () => {
    switch (currentPage) {
      case 'guide': return <GuidePage />
      case 'guide_1': return <GuideStep1Page />
      case 'guide_2': return <GuideStep2Page />
      case 'badgearcade': return <BadgeArcadePage />
      case 'other': return <OtherPage />
      case 'progress': return <ProgressPage />
      case 'faq': return <FAQPage />
      default: return <HomePage />
    }
  }

  return (
    <div key={currentPage}>
      {renderPage()}
    </div>
  )
}
