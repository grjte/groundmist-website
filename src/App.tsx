function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add BCC logo at the top */}
      <div className="w-full bg-gray-800 border-b border-gray-700 fixed top-0 z-50">
        <div className="px-6 lg:px-8 py-4 flex justify-center sm:justify-between items-center">
          <img
            src="/assets/BCC Logo RGB_White.png"
            alt="BCC Logo"
            className="h-8 w-auto"
          />
          <a
            href="https://bsky.app/profile/grjte.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hidden sm:flex items-center gap-2"
          >
            <svg className="w-5 h-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 568 501"><title>Bluesky butterfly logo</title><path fill="currentColor" d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z"></path></svg>Connect on Bluesky
          </a>
        </div>
      </div>

      <main className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        {/* Header/Overview Section */}
        <section className="relative">
          <div className="space-y-16">
            {/* Title and Core Description */}
            <div className="space-y-2">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 tracking-tight">
                  Groundmist
                </h1>
                <h2 className="text-2xl sm:text-3xl text-gray-500 tracking-wide">
                  AT Protocol meets local-first software
                </h2>
              </div>

              {/* What it is - Core Definition */}
              <div className="max-w-4xl my-12">
                <p className="text-xl text-gray-800 leading-relaxed">
                  Groundmist is a series of progressive experiments exploring the possibilities enabled by connecting the{" "}
                  <a href="https://atproto.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">
                    AT Protocol
                  </a>{" "}
                  and the{" "}
                  <a href="https://inkandswitch.com/local-first" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">
                    local-first software
                  </a>{" "}
                  paradigm.
                </p>
              </div>

              {/* What it does & How it works */}
              <div className="grid md:grid-cols-2 gap-12 mb-10">
                {/* What it does */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">What it enables</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Depending on your perspective, the combination created by Groundmist enables one of the following (or both):
                  </p>
                  <ul className="space-y-4 pl-4">
                    <li className="flex items-start space-x-3 text-lg text-gray-800">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" aria-hidden="true" />
                      <span>A private, local-first layer for AT Protocol</span>
                    </li>
                    <li className="flex items-start space-x-3 text-lg text-gray-800">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5" aria-hidden="true" />
                      <span>A distribution, legibility, and interoperability layer for local-first software</span>
                    </li>
                  </ul>
                </div>

                {/* How it works */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">How it works</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Groundmist echoes the design of AT Protocol, which emphasizes user ownership and interoperation, but it applies these ideas and select elements of the protocol to local-first software and data instead of to global public data. It uses <a href="https://automerge.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">Automerge</a>, AT Protocol's <a href="https://atproto.com/guides/identity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">Identity</a> and <a href="https://atproto.com/specs/lexicon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">Lexicon</a> systems, and a personal sync server built with <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">Express</a>.
                  </p>
                </div>
              </div>

              {/* Experiment Links */}
              <nav className="border-t border-gray-100 pt-6">
                <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-6">
                  Experiments
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <a href="#distribution" className="group">
                    <div className="space-y-3">
                      <div className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                        1. Distribution
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Enable 1-click publishing of local-first data to your atproto PDS, unifying public data with local origins
                      </p>
                    </div>
                  </a>
                  <a href="#legibility" className="group">
                    <div className="space-y-3">
                      <div className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                        2. Legibility
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Apply atproto's Lexicon schema system to local-first software to enable flexible private AppView interfaces
                      </p>
                    </div>
                  </a>
                  <a href="#interoperability" className="group">
                    <div className="space-y-3">
                      <div className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                        3. Interoperability
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Create a unified personal data store for local-first data to simplify data reuse, analogous to a PDS
                      </p>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="text-center text-lg text-gray-600 my-8">
          <span>We welcome your feedback: </span>
          <a href="https://bsky.app/profile/grjte.sh" className="text-blue-600 hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">@grjte</a>
          <span> or </span>
          <a href="mailto:grjte@baincapital.com" className="text-blue-600 hover:text-blue-800 hover:underline">grjte@baincapital.com</a>
        </div>

        {/* Experiments Section */}
        <div className="space-y-20">
          {/* Experiment 1 */}
          <section id="distribution" className="bg-white rounded-xl shadow-sm border border-gray-100 scroll-mt-24">
            {/* Concept Section */}
            <div className="p-8 sm:p-10 border-b border-gray-100">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Concept Content - Takes up 3 columns on large screens */}
                <div className="lg:col-span-3 space-y-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Experiment 1: Distribution</h2>

                  <div className="space-y-6 text-lg">
                    <p className="text-gray-700 leading-relaxed">
                      This project reuses{" "}
                      <a href="https://atproto.com/guides/identity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">
                        AT Protocol's identity system
                      </a>{" "}
                      to create a connection between private and public data known only to the user, adding a distribution layer to the local-first software ecosystem with the following benefits:
                    </p>
                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                      <li>1-click publishing for local-first data</li>
                      <li>data that originates in disparate local-first contexts is unified when published, without manual intervention</li>
                      <li>published local-first data can be displayed and viewed flexibly according to user or viewer preference using atproto AppViews</li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-6">
                    <a href="https://whtwnd.com/grjte.sh/3lndb5weupc2r" className="group inline-flex items-center text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer noopener">
                      <span className="inline-flex items-center text-lg font-medium">
                        Read the full write-up
                        <svg className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Diagram Preview - Takes up 2 columns on large screens */}
                <div className="lg:col-span-2">
                  <a
                    href="/assets/groundmist-distribution.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <div className="aspect-[4/3] rounded-lg border border-gray-200 bg-white overflow-hidden relative hover:border-gray-300 transition-colors">
                      <img
                        src="/assets/groundmist-distribution.png"
                        alt="Distribution concept diagram preview"
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                        <span className="bg-white/90 text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View full diagram
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Implementation Section */}
            <div className="p-8 sm:p-10 bg-gray-50 rounded-b-xl space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Example Project: Groundmist Library</h3>
                <p className="text-gray-700 leading-relaxed">
                  Groundmist Library is an example application where you can privately curate personal content and selectively publish a subset to your atproto PDS. It demonstrates how local-first data can be seamlessly distributed through the AT Protocol while maintaining privacy and user control.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://library.groundmist.xyz" className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Try Groundmist Library
                </a>
                <a href="https://github.com/grjte/content-library" className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </section>

          {/* Experiment 2 */}
          <section id="legibility" className="bg-white rounded-xl shadow-sm border border-gray-100 scroll-mt-24">
            {/* Concept Section */}
            <div className="p-8 sm:p-10 border-b border-gray-100">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Concept Content */}
                <div className="lg:col-span-3 space-y-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Experiment 2: Legibility</h2>

                  <div className="space-y-6 text-lg">
                    <p className="text-gray-700 leading-relaxed">
                      This project applies{" "}
                      <a href="https://atproto.com/specs/lexicon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">
                        AT Protocol's Lexicon schema system
                      </a>{" "}
                      to local-first software and data. This adds a legibility layer that enables flexible interfaces for interacting with local-first data, without duplicating data or causing issues with consistency and incompatibility.
                    </p>
                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                      <li>brings the idea of atproto's{" "}
                        <a href="https://atproto.com/guides/glossary#app-view" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">
                          AppViews
                        </a>{" "}
                        to local-first data
                      </li>
                      <li>atproto applications can use local-first AppViews for managing private data before it gets published to the protocol</li>
                      <li>local-first data from one app can be read or updated from a different local-first app preferred by the user for a specific task or context</li>
                      <li>local-first data from multiple local-first applications can be composed within an entirely new application</li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-6">
                    <a href="https://whtwnd.com/grjte.sh/3lndyhyvqdc2w" className="group inline-flex items-center text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer noopener">
                      <span className="inline-flex items-center text-lg font-medium">
                        Read the full write-up
                        <svg className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Diagram Preview */}
                <div className="lg:col-span-2">
                  <a
                    href="/assets/groundmist-legibility.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <div className="aspect-[4/3] rounded-lg border border-gray-200 bg-white overflow-hidden relative hover:border-gray-300 transition-colors">
                      <img
                        src="/assets/groundmist-legibility.png"
                        alt="Legibility concept diagram preview"
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                        <span className="bg-white/90 text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View full diagram
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Implementation Section */}
            <div className="p-8 sm:p-10 bg-gray-50 rounded-b-xl space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Example Project: Groundmist Editor & Notebook</h3>
                <p className="text-gray-700 leading-relaxed">
                  Groundmist Editor is a local-first collaborative editor for writing and editing markdown documents and then publishing them to atproto. For its data schema, it uses the <a href="https://whtwnd.com" target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2'>WhiteWind</a> blog entry lexicon (<em>com.whtwnd.blog.entry</em>), which means it offers a private environment for drafting (and publishing) WhiteWind blog posts. It's accompanied by Groundmist Notebook, an alternative AppView for reading published work that uses the <em>com.whtwnd.blog.entry</em> lexicon. It can be used to read any posts published from WhiteWind or Groundmist Editor.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://notebook.groundmist.xyz" className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Try Groundmist Editor & Notebook
                </a>
                <a href="https://github.com/grjte/groundmist-notebook" className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </section>

          {/* Experiment 3 */}
          <section id="interoperability" className="bg-white rounded-xl shadow-sm border border-gray-100 scroll-mt-24">
            {/* Concept Section */}
            <div className="p-8 sm:p-10 border-b border-gray-100">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Concept Content */}
                <div className="lg:col-span-3 space-y-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Experiment 3: Interoperability & Composability</h2>

                  <div className="space-y-6 text-lg">
                    <p className="text-gray-700 leading-relaxed">
                      This project explores a lightweight way to create a unified personal data store for local-first data that is analagous to the{" "}
                      <a href="https://atproto.com/guides/glossary#pds-personal-data-server" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">
                        atproto PDS
                      </a>{" "}
                      but private by default. It achieves this by switching from the app-specific sync server architecture common to local-first software to a personal sync server architecture (PSS).
                    </p>
                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                      <li>when logged in with atproto id, local-first app data is automatically synced to the user's PSS, unifying it into a personal data store</li>
                      <li>PSS data is structured, making it discoverable and composable (with permission), like data in a user's atproto PDS</li>
                      <li>the local-first data store on the PSS is portable, like a user's atproto identity or PDS</li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-6">
                    <a href="https://whtwnd.com/grjte.sh/3lne2va62nc2y" className="group inline-flex items-center text-blue-600 hover:text-blue-800" target="_blank" rel="noreferrer noopener">
                      <span className="inline-flex items-center text-lg font-medium">
                        Read the full write-up
                        <svg className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                {/* Diagram Preview */}
                <div className="lg:col-span-2">
                  <a
                    href="/assets/groundmist-interoperability.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group"
                  >
                    <div className="aspect-[4/3] rounded-lg border border-gray-200 bg-white overflow-hidden relative hover:border-gray-300 transition-colors">
                      <img
                        src="/assets/groundmist-interoperability.png"
                        alt="Interoperability concept diagram preview"
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                        <span className="bg-white/90 text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View full diagram
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Implementation Section */}
            <div className="p-8 sm:p-10 bg-gray-50 rounded-b-xl space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Example Project: Groundmist Sync</h3>
                <p className="text-gray-700 leading-relaxed">
                  Groundmist Sync is a self-hosted personal sync server which is owned by your atproto identity. When you log in to other Groundmist applications (Library or Notebook), data will automatically sync to this server, unifying your local-first data into a personal data store that is analogous to your atproto PDS, but private.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/grjte/groundmist-sync?tab=readme-ov-file#groundmist-personal-sync-server" className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Try Groundmist Sync
                </a>
                <a href="https://github.com/grjte/groundmist-sync" className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </section>

          {/* Future Directions Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Concept Section */}
            <div className="p-8 sm:p-10 border-b border-gray-100">
              <div>
                {/* Concept Content - Now full width */}
                <div className="space-y-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Interesting Future Directions</h2>

                  <div className="space-y-6 text-lg">
                    <p className="text-gray-700 leading-relaxed">
                      While these experiments show interesting potential in connecting AT Protocol with local-first software, there are also a number of challenges and opportunities for future exploration and development.
                    </p>
                    <ul className="list-disc pl-8 space-y-3 text-gray-700">
                      <li>Data schemas change over time and needs differ by context (e.g. public vs. private). Ink & Switch has done interesting work in this area with the <a href="https://www.inkandswitch.com/cambria/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">Cambria project</a> for "data lenses". Creating a global lens network on top of Lexicon's global schema network would be a powerful addition to this model, and <a href="https://github.com/lexicon-community/governance/issues/14" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">community discussion</a> has recently begun.</li>
                      <li>Safely allowing data interoperability and composability to enable flexible application interfaces requires sophisticated authorization and granular access control mechanisms. Capability-based authorization projects like <a href="https://www.inkandswitch.com/keyhive/notebook/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">Keyhive</a> and <a href="https://github.com/ucan-wg/ucan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">UCAN</a> are interesting to consider.</li>
                      <li>The personal sync server architecture doesn't support collaboration on its own. One interesting exploration would be to extend AT Protocol's federation model to personal sync servers, enabling selective sharing of local-first data.</li>
                      <li>Personal data stores of structured local-first data present interesting possibilities for social applications based around private data using cryptographic tools such as Private Set Intersection, similar to or expanding on explorations done by the <a href="https://www.cursive.team/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline decoration-1 underline-offset-2">Cursive team.</a> </li>
                      <li>AT Protocol provides data verifiability. It would be interesting to explore verifiable change histories for composable local-first data. This could enable users to review the history of which applications changed their data. It could also enable importing data with a verifiable provenance (e.g. a digitally signed photograph), making verifiable changes, and then publishing the modified data alongside a zero knowledge proof of its origin and change history.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Section */}
            <div className="p-8 sm:p-10 bg-gray-50 rounded-b-xl space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">We welcome your feedback</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you're interested in contributing to these explorations or have ideas of your own, I'd love to hear from you.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://bsky.app/profile/grjte.sh" className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 568 501">
                    <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z" />
                  </svg>
                  Connect on Bluesky
                </a>
                <a href="mailto:grjte@baincapital.com" className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send me an email
                </a>
                <a href="https://github.com/grjte" className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Follow on GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
