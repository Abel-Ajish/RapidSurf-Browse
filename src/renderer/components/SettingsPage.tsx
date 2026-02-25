import React from 'react'
import { X, Globe, Palette, Shield, Info, Monitor, Moon, Sun } from 'lucide-react'

interface SettingsPageProps {
  onClose: () => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onClose, theme, onToggleTheme }) => {
  return (
    <div className="settings-page">
      <div className="settings-container">
        <aside className="settings-sidebar">
          <h2>Settings</h2>
          <nav>
            <button className="active"><Globe size={18} /> General</button>
            <button><Palette size={18} /> Appearance</button>
            <button><Shield size={18} /> Privacy & Security</button>
            <button><Info size={18} /> About</button>
          </nav>
        </aside>

        <main className="settings-content">
          <button className="settings-close" onClick={onClose}><X size={20} /></button>
          
          <section>
            <h3>General</h3>
            <div className="settings-group">
              <div className="settings-item">
                <div className="settings-info">
                  <h4>Home page</h4>
                  <p>Set the default page when opening a new tab</p>
                </div>
                <input type="text" defaultValue="https://www.google.com" className="settings-input" />
              </div>
              <div className="settings-item">
                <div className="settings-info">
                  <h4>Search engine</h4>
                  <p>Choose your preferred search engine</p>
                </div>
                <select className="settings-select">
                  <option>Google</option>
                  <option>Bing</option>
                  <option>DuckDuckGo</option>
                </select>
              </div>
            </div>

            <h3>Appearance</h3>
            <div className="settings-group">
              <div className="settings-item">
                <div className="settings-info">
                  <h4>Theme</h4>
                  <p>Customize how RapidSurf looks</p>
                </div>
                <div className="theme-toggle-group">
                  <button 
                    className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                    onClick={() => theme === 'dark' && onToggleTheme()}
                  >
                    <Sun size={16} /> Light
                  </button>
                  <button 
                    className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                    onClick={() => theme === 'light' && onToggleTheme()}
                  >
                    <Moon size={16} /> Dark
                  </button>
                </div>
              </div>
            </div>

            <h3>About</h3>
            <div className="settings-group">
              <div className="settings-item">
                <div className="settings-info">
                  <h4>RapidSurf Browser</h4>
                  <p>Version 1.0.0 (Official Build)</p>
                </div>
                <button className="settings-btn-secondary">Check for updates</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default SettingsPage
