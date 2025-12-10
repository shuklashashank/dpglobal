import React from 'react';
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';
import { PRESS_RELEASES, NEWS_ARTICLES } from '../constants';

const Media: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Media & Press</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Latest updates, press releases, and insights from SPGlobal and the world of logistics.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content: Press Releases */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-corporate-blue" /> Press Releases
              </h2>
              <div className="space-y-6">
                {PRESS_RELEASES.map(release => (
                  <div key={release.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {release.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-corporate-blue cursor-pointer transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {release.summary}
                    </p>
                    <button className="text-corporate-blue font-semibold text-sm hover:underline">
                      Read Full Release &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                <ExternalLink className="mr-2 h-6 w-6 text-corporate-blue" /> In The News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {NEWS_ARTICLES.map(article => (
                  <div key={article.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
                    <span className="text-xs font-bold text-corporate-gold uppercase tracking-wider mb-2">
                      {article.source}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex-grow">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm mt-auto">
                      <span className="text-slate-400">{article.date}</span>
                      <a href={article.url} className="text-corporate-blue hover:underline">Read Article</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Downloads & Contact */}
          <div className="space-y-8">
            <div className="bg-corporate-900 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Media Kit</h3>
              <p className="text-slate-300 text-sm mb-6">
                Download official brand assets, including high-resolution logos and executive bios.
              </p>
              <ul className="space-y-4">
                <li>
                  <button className="flex items-center w-full p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-left group">
                    <div className="p-2 bg-white/10 rounded-md mr-3 group-hover:bg-corporate-blue transition-colors">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="block font-medium">Official Logo Pack</span>
                      <span className="block text-xs text-slate-400">ZIP • 2.4 MB</span>
                    </div>
                  </button>
                </li>
                <li>
                  <button className="flex items-center w-full p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-left group">
                    <div className="p-2 bg-white/10 rounded-md mr-3 group-hover:bg-corporate-blue transition-colors">
                       <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="block font-medium">About SPGlobal</span>
                      <span className="block text-xs text-slate-400">PDF • 1.1 MB</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Media Contact</h3>
              <p className="text-slate-600 text-sm mb-4">
                For press inquiries, interviews, or official statements, please contact:
              </p>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <p className="font-bold text-slate-900">Communications Team</p>
                <a href="mailto:media@spglobal.com" className="text-corporate-blue text-sm hover:underline block mt-1">
                  media@spglobal.com
                </a>
                <p className="text-slate-500 text-sm mt-1">+91 22 4567 8999</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Media;