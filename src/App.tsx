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

      {/* Header/Overview Section */}
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">Groundmist: AT Protocol meets local-first software</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Groundmist is a series of progressive experiments exploring the possibilities enabled by connecting the{" "}
              <a href="https://atproto.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                AT Protocol
              </a>{" "}
              and the{" "}
              <a href="https://inkandswitch.com/essays/local-first/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                local-first software
              </a>{" "}
              paradigm. Depending on your perspective, the combination created by Groundmist does one of the following (or both):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>It enables a private, local-first layer for AT Protocol.</li>
              <li>It enables a distribution, legibility, and composability layer for local-first software.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Groundmist echoes the design of AT Protocol, which emphasizes user ownership and interoperation, but it applies these ideas and select elements of the protocol to local-first software and data instead of to global public data.
            </p>
          </div>
        </section>

        {/* Experiments Section */}
        <div className="space-y-16">
          {/* Experiment 1 */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Experiment 1: Distribution</h2>
              <a href="#" className="text-blue-600 hover:text-blue-800 block text-lg">
                Read more: Exploring AT Protocol as a distribution layer for local-first software →
              </a>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">
                This project reuses <a href="https://atproto.com/guides/identity" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">AT Protocol's identity system</a> to create a connection between private and public data known only to the user, adding a distribution layer to the local-first software ecosystem with the following benefits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>1-click publishing for local-first data</li>
                <li>data that originates in disparate local-first contexts is unified when published, without manual intervention</li>
                <li>published local-first data can be displayed and viewed flexibly according to user or viewer preference using atproto AppViews</li>
              </ul>
              <p className="mt-4 flex flex-wrap gap-4">
                <a href="https://library.groundmist.xyz" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Try Groundmist Library
                </a>
                <a href="https://github.com/grjte/content-library" className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
                <button
                  onClick={() => openDiagram('/assets/groundmist-distribution.png', 'Distribution Diagram')}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Diagram
                </button>
              </p>
            </div>
          </section>

          {/* Experiment 2 */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Experiment 2: Legibility</h2>
              <a href="#" className="text-blue-600 hover:text-blue-800 block text-lg">
                Read more: Exploring AT Protocol as a legibility layer for local-first software →
              </a>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">
                This project applies <a href="https://atproto.com/specs/lexicon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">AT Protocol's Lexicon schema system</a> to local-first software and data. This adds a legibility layer that enables flexible interfaces for interacting with local-first data, without duplicating data or causing issues with consistency and incompatibility.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>brings the idea of atproto's <a href="https://atproto.com/guides/glossary#app-view" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">AppViews</a> to local-first data</li>
                <li>local-first data from one application can be read or updated from a different AppView preferred by the user for a specific task or context</li>
                <li>local-first data from multiple local-first applications can be composed within an entirely new application</li>
              </ul>
              <p className="mt-4 flex flex-wrap gap-4">
                <a href="https://notebook.groundmist.xyz" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Try Groundmist Notebook
                </a>
                <a href="https://github.com/grjte/groundmist-notebook" className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
                <button
                  onClick={() => openDiagram('/assets/groundmist-legibility.png', 'Legibility Diagram')}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Diagram
                </button>
              </p>
            </div>
          </section>

          {/* Experiment 3 */}
          <section className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Experiment 3: Composability</h2>
              <a href="#" className="text-blue-600 hover:text-blue-800 block text-lg">
                Read more: Exploring composability for local-first data →
              </a>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">
                This experiment explores a lightweight way to create a unified personal data store for local-first data which is analagous to the <a href="https://atproto.com/guides/glossary#pds-personal-data-server" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">atproto PDS</a> but private by default. It achieves this by switching from the app-specific sync server architecture common to local-first software to a personal sync server architecture.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>when a user is logged in with their atproto id, user data is automatically synced to their personal sync server, unifying their local-first data into a private personal data store</li>
                <li>data on a user's personal sync server is structured, making it discoverable and composable, like data in a user's atproto PDS</li>
                <li>the local-first data store on the personal sync server is portable, like a user's atproto identity or PDS</li>
              </ul>
              <p className="mt-4 flex flex-wrap gap-4">
                <a href="https://sync.groundmist.xyz" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Try Groundmist Sync
                </a>
                <a href="https://github.com/grjte/groundmist-sync" className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
                <button
                  onClick={() => openDiagram('/assets/groundmist-composability.png', 'Composability Diagram')}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Diagram
                </button>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
