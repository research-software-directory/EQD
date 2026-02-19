// SPDX-FileCopyrightText: 2025 - 2026 Dusan Mijatovic (Netherlands eScience Center)
// SPDX-FileCopyrightText: 2025 - 2026 Netherlands eScience Center
//
// SPDX-License-Identifier: Apache-2.0

import {Metadata} from 'next'

import {app} from '~/config/app'
import {getRsdSettings} from '~/config/getSettingsServerSide'
import {activeModulesKeys} from '~/config/rsdSettingsReducer'
import {getHomepageCounts, HomepageCounts} from '~/components/home/getHomepageCounts'
import EQDHome from '~/components/home/eqd'
import {getTopNews, TopNewsProps} from '~/components/news/apiNews'

export type HomeProps = {
  news: TopNewsProps[]
  counts: HomepageCounts
}

export const metadata: Metadata = {
  title: `Home | ${app.title}`,
  description: 'The Research Software Directory is designed to show the impact research software has on research and society. We stimulate the reuse of research software and encourage proper citation of research software to ensure researchers and RSEs get credit for their work.',
}

// force to be dynamic route
export const dynamic = 'force-dynamic'

export default async function Home() {
  // get counts for default rsd home page
  const [counts,topNews,settings] = await Promise.all([
    getHomepageCounts(),
    // get top 3 (most recent) news items
    getTopNews(3),
    getRsdSettings()
  ])

  // extract active modules
  const activeModules = activeModulesKeys(settings.modules)
  // provide top news if module is active
  const news:TopNewsProps[] = activeModules.includes('news') ? topNews : []

  // console.group('Home')
  // console.log('settings...', settings)
  // console.log('counts...', counts)
  // console.log('news...', news)
  // console.log('host...', host)
  // console.groupEnd()
  // EQD default home page
  return (
    <EQDHome counts={counts} news={news} />
  )
}
