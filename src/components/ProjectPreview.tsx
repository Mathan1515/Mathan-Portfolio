import type { Project } from '../data/portfolio';
import { Activity, BarChart3, Bell, Cloud, FolderOpen, LayoutDashboard, Monitor, Play, Settings2, TrendingUp, Users, Zap } from 'lucide-react';
export default function ProjectPreview({ kind }: {
    kind: Project['preview'];
}) {
    if (kind === 'signage')
        return <div className="preview preview-signage" aria-hidden="true">
            <div className="mock-dashboard">
              <div className="mock-sidebar">
                <div className="mock-logo">
                  ◆
                </div>
                <LayoutDashboard size={13}/>
                <Monitor size={13}/>
                <FolderOpen size={13}/>
                <Settings2 size={13}/>
              </div>
              <div className="mock-main">
                <div className="mock-head">
                  <span>
                    Overview
                    <small>
                      / Dashboard
                    </small>
                  </span>
                  <span className="mock-avatar">
                    MR
                  </span>
                </div>
                <div className="mock-welcome">
                  Good morning, Mathan
                  <span>
                    ✳
                  </span>
                </div>
                <div className="mock-metrics">
                  <div>
                    <small>
                      Total Displays
                    </small>
                    <b>
                      24
                    </b>
                    <span>
                      ↗ +12%
                    </span>
                  </div>
                  <div>
                    <small>
                      Active Campaigns
                    </small>
                    <b>
                      08
                    </b>
                    <span>
                      ↗ +4%
                    </span>
                  </div>
                  <div>
                    <small>
                      Uptime
                    </small>
                    <b>
                      99.9%
                    </b>
                    <span>
                      ● Live
                    </span>
                  </div>
                </div>
                <div className="mock-grid">
                  <div className="mock-chart">
                    <small>
                      Campaign performance
                    </small>
                    <div className="bars">
                      {[42, 70, 54, 86, 63, 95, 75, 100, 68, 86, 76, 96].map((height, i) => <i key={i} style={{ height: `${height}%` }}/>)}
                    </div>
                  </div>
                  <div className="mock-previewcard">
                    <small>
                      Now playing
                    </small>
                    <div>
                      <Play size={20} fill="currentColor"/>
                    </div>
                    <span>
                      Summer Campaign
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="preview-badge">
              <span className="live-dot"/>
              CMS ONLINE
            </div>
          </div>;
    if (kind === 'cricket')
        return <div className="preview preview-cricket" aria-hidden="true">
            <div className="cricket-orbit orbit-one"/>
            <div className="cricket-orbit orbit-two"/>
            <div className="phone">
              <div className="phone-notch"/>
              <div className="phone-content">
                <div className="phone-top">
                  <span>
                    9:41
                  </span>
                  <span>
                    •••
                  </span>
                </div>
                <p>
                  GOOD MORNING, ATHLETE
                </p>
                <h4>
                  Let's get stronger.
                </h4>
                <div className="fitness-score">
                  <div>
                    <small>
                      YOUR FITNESS SCORE
                    </small>
                    <strong>
                      86
                      <span>
                        /100
                      </span>
                    </strong>
                    <span>
                      ↗ 12% from last week
                    </span>
                  </div>
                  <Activity size={37}/>
                </div>
                <small className="phone-section">
                  TODAY'S ACTIVITY
                </small>
                <div className="fitness-rows">
                  <div>
                    <span>
                      💧
                    </span>
                    <div>
                      Hydration
                      <small>
                        2.4 / 3.0 L
                      </small>
                    </div>
                    <b>
                      80%
                    </b>
                  </div>
                  <div>
                    <span>
                      🌙
                    </span>
                    <div>
                      Sleep
                      <small>
                        7h 42m
                      </small>
                    </div>
                    <b>
                      Good
                    </b>
                  </div>
                  <div>
                    <span>
                      ⚡
                    </span>
                    <div>
                      Training
                      <small>
                        Strength & conditioning
                      </small>
                    </div>
                    <b>
                      Done
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="cricket-floating">
              <Activity size={15}/>
              PERFORMANCE +18.5%
            </div>
          </div>;
    return <div className="preview preview-web" aria-hidden="true">
        <div className="browser-window">
          <div className="browser-chrome">
            <span>
              ● ● ●
            </span>
            <div>
              yourapp.dev / dashboard
            </div>
            <span>
              ⌘
            </span>
          </div>
          <div className="web-content">
            <div className="web-top">
              <span>
                <Zap size={16}/>
                untitled
                <span className="web-dot">
                  .
                </span>
              </span>
              <div>
                <span>
                  Dashboard
                </span>
                <span>
                  Analytics
                </span>
                <span>
                  Settings
                </span>
              </div>
              <span className="web-avatar">
                MR
              </span>
            </div>
            <div className="web-hello">
              Your workspace,
              <em>
                simplified.
              </em>
            </div>
            <div className="web-sub">
              Everything you need, in one beautiful place.
            </div>
            <div className="web-widgets">
              <div>
                <div className="widget-icon">
                  <Users size={15}/>
                </div>
                <small>
                  Active users
                </small>
                <strong>
                  12,408
                </strong>
                <span>
                  ↗ 18.6%
                </span>
              </div>
              <div>
                <div className="widget-icon">
                  <TrendingUp size={15}/>
                </div>
                <small>
                  Engagement
                </small>
                <strong>
                  84.2%
                </strong>
                <span>
                  ↗ 8.2%
                </span>
              </div>
              <div>
                <div className="widget-icon">
                  <Cloud size={15}/>
                </div>
                <small>
                  Server status
                </small>
                <strong>
                  Healthy
                </strong>
                <span>
                  ● Online
                </span>
              </div>
            </div>
            <div className="web-bottom">
              <div>
                <small>
                  Overview
                </small>
                <div className="web-graph">
                  <svg viewBox="0 0 330 82" preserveAspectRatio="none">
                    <path d="M0 75 C40 66 42 32 80 48 S140 83 175 40 S240 60 265 25 S310 32 330 5" stroke="#59e2de" strokeWidth="3" fill="none"/>
                    <path d="M0 75 C40 66 42 32 80 48 S140 83 175 40 S240 60 265 25 S310 32 330 5 V82 H0Z" fill="url(#grad)"/>
                    <defs>
                      <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                        <stop stopColor="#44dad9" stopOpacity="0.27"/>
                        <stop offset="1" stopColor="#44dad9" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="web-notification">
                <Bell size={18}/>
                <small>
                  All caught up!
                </small>
                <BarChart3 size={23}/>
              </div>
            </div>
          </div>
        </div>
        <div className="web-float">
          ✦ BUILT FOR THE WEB
        </div>
      </div>;
}
