// SPDX-FileCopyrightText: 2024 - 2026 Dusan Mijatovic (Netherlands eScience Center)
// SPDX-FileCopyrightText: 2024 - 2026 Netherlands eScience Center
//
// SPDX-License-Identifier: Apache-2.0

import LogoSURF from '~/assets/logos/LogoSurf.svg'
import LogoLRZ from '~/assets/logos/LogoLRZ.svg'
import LogoNLEsc from '~/assets/logos/LogoEscience.svg'

export default function LogoSection() {
  return (
    <div
      id="partners"
      className="w-full max-w-(--breakpoint-xl) mx-auto mt-10 p-5 md:p-10">
      <div id="whyrsd" className="text-xl opacity-50">
        Partners supporting the European Quantum Directory
      </div>
      <div
        className="flex gap-12 w-full flex-wrap mt-6 p-3 items-center opacity-30">
        <LogoSURF className="max-h-[3rem]"/>
        <LogoLRZ className = "max-h-[3rem]" />
        {/* Euro-Q-HPCI logo */}
        <img
          style={{maxHeight:'3rem'}}
          src="/images/euro-q-hpci.png" alt="euro-q-hpci logo"
        />
        {/* QEX logo */}
        <img
          style={{maxHeight:'3rem'}}
          src="/images/qex.png" alt="qex logo"
        />
        <LogoNLEsc className = "max-h-[2.5rem]" />
      </div>
    </div>
  )
}
