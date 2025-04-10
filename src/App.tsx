import { useState } from 'react'
import { DiagramModal } from './components/DiagramModal'

function App() {
  const [selectedDiagram, setSelectedDiagram] = useState<{
    isOpen: boolean;
    path: string;
    title: string;
  }>({
    isOpen: false,
    path: '',
    title: ''
  });

  const openDiagram = (path: string, title: string) => {
    setSelectedDiagram({
      isOpen: true,
      path,
      title
    });
  };

  const closeDiagram = () => {
    setSelectedDiagram({
      isOpen: false,
      path: '',
      title: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DiagramModal
        isOpen={selectedDiagram.isOpen}
        onClose={closeDiagram}
        imagePath={selectedDiagram.path}
        title={selectedDiagram.title}
      />

      <main className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 lg:px-8 py-16 space-y-24">
        {/* Header/Overview Section */}
        <section className="relative">
          <div className="space-y-16">
            {/* Title and Core Description */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 tracking-tight">
                  Groundmist
                </h1>
                <h2 className="text-2xl sm:text-3xl text-gray-500 tracking-wide">
                  AT Protocol meets local-first software
                </h2>
              </div>

              {/* What it is - Core Definition */}
              <div className="max-w-4xl">
                <p className="text-xl text-gray-800 leading-relaxed">
                  Groundmist is a series of progressive experiments exploring the possibilities enabled by connecting the{" "}
                  <a href="https://atproto.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">
                    AT Protocol
                  </a>{" "}
                  and the{" "}
                  <a href="https://inkandswitch.com/essays/local-first/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">
                    local-first software
                  </a>{" "}
                  paradigm.
                </p>
              </div>

              {/* What it does & How it works */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* What it does */}
                <div className="space-y-6">
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
                      <span>A distribution, legibility, and composability layer for local-first software</span>
                    </li>
                  </ul>
                </div>

                {/* How it works */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">How it works</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Groundmist echoes the design of AT Protocol, which emphasizes user ownership and interoperation, but it applies these ideas and select elements of the protocol to local-first software and data instead of to global public data. It uses <a href="https://automerge.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">Automerge</a>, AT Protocol's <a href="https://atproto.com/guides/identity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">Identity</a> and <a href="https://atproto.com/specs/lexicon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">Lexicon</a> systems, and a personal sync server built with <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 no-underline border-b border-blue-300 hover:border-blue-600">Express</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Experiment Links */}
            <nav className="border-t border-gray-100 pt-10">
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
                <a href="#composability" className="group">
                  <div className="space-y-3">
                    <div className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                      3. Composability
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Create a unified personal data store for local-first data to simplify data reuse, analogous to a PDS
                    </p>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </section>

        {/* Experiments Section */}
        <div className="space-y-20">
          {/* Experiment 1 */}
          <section id="distribution" className="bg-white rounded-xl shadow-sm border border-gray-100">
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
                    <a href="#" className="group inline-flex items-center text-blue-600 hover:text-blue-800">
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
                  <button
                    onClick={() => openDiagram('/assets/groundmist-distribution.png', 'Distribution Diagram')}
                    className="w-full group"
                  >
                    <div className="aspect-[4/3] rounded-lg border border-gray-200 bg-gray-50 overflow-hidden relative hover:border-gray-300 transition-colors">
                      {/* This would be your diagram preview image */}
                      <img
                        src="/assets/groundmist-distribution.png"
                        alt="Distribution concept diagram preview"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-colors">
                        <span className="bg-white/90 text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View full diagram
                        </span>
                      </div>
                    </div>
                  </button>
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
          <section id="legibility" className="bg-white rounded-xl shadow-sm border border-gray-100">
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
                      <li>local-first data from one application can be read or updated from a different AppView preferred by the user for a specific task or context</li>
                      <li>local-first data from multiple local-first applications can be composed within an entirely new application</li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-6">
                    <a href="#" className="group inline-flex items-center text-blue-600 hover:text-blue-800">
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
                  <button
                    onClick={() => openDiagram('/assets/groundmist-legibility.png', 'Legibility Diagram')}
                    className="w-full group"
                  >
                    <div className="aspect-[4/3] rounded-lg border border-gray-200 bg-gray-50 overflow-hidden relative hover:border-gray-300 transition-colors">
                      <img
                        src="/assets/groundmist-legibility.png"
                        alt="Legibility concept diagram preview"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-colors">
                        <span className="bg-white/90 text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View full diagram
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Implementation Section */}
            <div className="p-8 sm:p-10 bg-gray-50 rounded-b-xl space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Example Project: Groundmist Notebook</h3>
                <p className="text-gray-700 leading-relaxed">
                  Groundmist Notebook is an example application which consists of a local-first collaborative editor for writing and editing markdown documents and an atproto AppView for reading public documents which have been published to atproto. The two applications use the same public Lexicon but are otherwise completely separate.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://notebook.groundmist.xyz" className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Try Groundmist Notebook
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
          <section id="composability" className="bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Concept Section */}
            <div className="p-8 sm:p-10 border-b border-gray-100">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Concept Content */}
                <div className="lg:col-span-3 space-y-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Experiment 3: Composability</h2>

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
                    <a href="#" className="group inline-flex items-center text-blue-600 hover:text-blue-800">
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
                  <button
                    onClick={() => openDiagram('/assets/groundmist-composability.png', 'Composability Diagram')}
                    className="w-full group"
                  >
                    <div className="aspect-[4/3] rounded-lg border border-gray-200 bg-gray-50 overflow-hidden relative hover:border-gray-300 transition-colors">
                      <img
                        src="/assets/groundmist-composability.png"
                        alt="Composability concept diagram preview"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-colors">
                        <span className="bg-white/90 text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          View full diagram
                        </span>
                      </div>
                    </div>
                  </button>
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
                <a href="https://sync.groundmist.xyz" className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
        </div>
      </main>
    </div>
  )
}

export default App
