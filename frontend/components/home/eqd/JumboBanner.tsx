// SPDX-FileCopyrightText: 2024 - 2026 Dusan Mijatovic (Netherlands eScience Center)
// SPDX-FileCopyrightText: 2024 - 2026 Netherlands eScience Center
//
// SPDX-License-Identifier: Apache-2.0

export default function JumboBanner() {
  return (
    <div className="max-w-(--breakpoint-xl) mx-auto p-4  grid lg:grid-cols-[1fr_1fr] gap-8 md:gap-20 lg:my-20 md:px-10">
      {/* Jumbo Text*/}
      <div className="flex flex-col justify-center"
        data-aos="fade" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000"
      >
        <h1 className="text-4xl xl:text-5xl font-rsd-titles font-bold">
          European Quantum Directory
        </h1>
        <div className="mt-8 text-lg">
          <span
            className="text-transparent font-medium bg-clip-text bg-linear-to-tr from-[#03A9F1] to-[#09FBD3] ">Europe&apos;s quantum ecosystem is growing fast</span>, spanning fundamental research to real-world applications. This Directory acts as the central hub for discovering projects and software developed across the continent. By consolidating these resources, we foster collaboration and accelerate Europe&apos;s leadership in the quantum era.
        </div>
      </div>

      {/* use image instead of video */}
      <img src="/images/eqd-transparent.png" alt="European Quantum Directory" style={{marginTop:'4rem'}} />
    </div>
  )
}
