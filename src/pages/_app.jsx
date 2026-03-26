import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { client, urlFor } from '@/lib/sanity'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => { ref.current = value }, [value])
  return ref.current
}

export default function App({ Component, pageProps, router }) {
  const previousPathname = usePrevious(router.pathname)
  const [siteSettings, setSiteSettings] = useState(null)

  useEffect(() => {
    async function fetchSiteSettings() {
      const query = `*[_type == "siteSettings"][0]{ siteName, avatar, favicon, socialPreview }`
      const data = await client.fetch(query)
      setSiteSettings(data)
    }
    fetchSiteSettings()
  }, [])

  return (
    <>
      <Head>
        {siteSettings?.favicon && (
          <link
            rel="icon"
            href={urlFor(siteSettings.favicon).width(32).height(32).url()}
          />
        )}
        {siteSettings?.socialPreview && (
          <>
            <meta
              property="og:image"
              content={urlFor(siteSettings.socialPreview).width(1200).height(630).url()}
            />
            <meta
              name="twitter:image"
              content={urlFor(siteSettings.socialPreview).width(1200).height(630).url()}
            />
          </>
        )}
        <title>{siteSettings?.siteName || 'My Site'}</title>
      </Head>

      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

      <div className="relative">
        <Header avatar={siteSettings?.avatar} />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer siteName={siteSettings?.siteName} />
      </div>
    </>
  )
}