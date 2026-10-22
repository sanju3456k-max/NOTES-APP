/* =========================================================
   MATERIAL 3 DESIGN TOKENS & RESET
   ========================================================= */
:root {
  --bg-app: #f4f6fa;
  --bg-surface: #ffffff;
  --bg-surface-alt: #f8fafc;
  --bg-pill: #eef2f8;
  --primary: #1a56db;
  --primary-hover: #1e40af;
  --primary-light: #e0eaff;
  --primary-soft: #f0f5ff;
  --text-main: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --border-color: #e2e8f0;
  --border-subtle: #edf2f7;
  --success-bg: #dcfce7;
  --success-text: #15803d;
  --danger: #dc2626;
  --danger-bg: #fef2f2;
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 12px 32px rgba(15, 23, 42, 0.14);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-pill: 9999px;
}

body.dark-theme {
  --bg-app: #0b0f19;
  --bg-surface: #111827;
  --bg-surface-alt: #1e293b;
  --bg-pill: #1f2937;
  --primary: #3b82f6;
  --primary-light: #1e3a8a;
  --primary-soft: #172554;
  --text-main: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #64748b;
  --border-color: #1f2937;
  --border-subtle: #334155;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg-app);
  color: var(--text-main);
  height: 100dvh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

#root {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}

#root > div {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}

.hidden {
  display: none !important;
}

.text-primary { color: var(--primary); }
.text-muted { color: var(--text-muted); }
.text-danger { color: var(--danger); }

.icon-xs { width: 15px; height: 15px; }
.icon-sm { width: 18px; height: 18px; }

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}

/* =========================================================
   VIEW MANAGEMENT
   ========================================================= */
.view {
  display: none;
  flex: 1 1 0;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  width: 100%;
}

.view.active {
  display: flex;
}

/* =========================================================
   HOME VIEW: HEADER & SEGMENTED SWITCHER
   ========================================================= */
.app-header,
.studio-header {
  height: 58px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  flex-shrink: 0;
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-title {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  transition: background 0.15s;
}
.icon-btn:hover { background: var(--bg-pill); }

.studio-menu-btn {
  min-height: 36px;
  padding: 0 10px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-pill);
  background: var(--bg-surface);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
}
.studio-menu-btn:hover { background: var(--bg-pill); color: var(--text-main); }

.icon-btn-surface {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--primary-soft);
  border: 1px solid var(--primary-light);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cloud-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  background: var(--primary-soft);
  border: 1px solid var(--primary-light);
  color: var(--primary);
  font-size: 0.76rem;
  font-weight: 600;
}

/* Mode Switcher */
.mode-switcher-wrapper {
  background: var(--bg-surface);
  padding: 10px 16px 14px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
}

.segmented-pill {
  background: var(--bg-pill);
  padding: 4px;
  border-radius: var(--radius-pill);
  display: inline-flex;
  width: 100%;
  max-width: 340px;
  border: 1px solid var(--border-color);
}

.pill-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all 0.2s ease;
}

.pill-btn.active {
  background: var(--primary);
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(26, 86, 219, 0.28);
}

/* Home Main Content */
.home-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px 32px;
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.home-content::-webkit-scrollbar {
  width: 8px;
}

.home-content::-webkit-scrollbar-track {
  background: transparent;
}

.home-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: padding-box;
}

.home-content::-webkit-scrollbar-thumb:hover {
  background-color: #94a3b8;
}

.quick-actions-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.section-header {
  gap: 16px;
}

.section-subtitle {
  line-height: 1.45;
}

@media (max-width: 560px) {
  .home-content {
    padding: 16px 14px 24px;
  }

  .section-header {
    align-items: flex-start;
  }

  .section-subtitle {
    max-width: 260px;
  }

  .project-card {
    padding: 14px;
  }

  .project-card-main {
    align-items: flex-start;
  }

  .project-inline-actions {
    flex-shrink: 0;
  }

  .project-meta {
    flex-wrap: wrap;
    gap: 6px 12px;
  }
}

.btn-primary-pill {
  background: var(--primary);
  color: #fff;
  padding: 10px 18px;
  border-radius: var(--radius-pill);
  font-size: 0.86rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(26, 86, 219, 0.25);
}

.btn-outline-pill {
  background: var(--bg-surface);
  color: var(--text-main);
  border: 1px solid var(--border-color);
  padding: 10px 18px;
  border-radius: var(--radius-pill);
  font-size: 0.86rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.icon-btn-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 14px;
}

.section-title {
  font-size: 1.05rem;
  font-weight: 700;
}

.section-subtitle {
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-top: 2px;
}

.count-badge {
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Project Cards */
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 40px;
}

.project-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 16px 18px;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s;
}

.project-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.project-card-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.project-card-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.project-title-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
}

.project-inline-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.proj-action-icon {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
}
.proj-action-icon:hover {
  background: var(--bg-pill);
  color: var(--text-main);
}

.project-card-footer {
  border-top: 1px solid var(--border-subtle);
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.project-meta {
  display: flex;
  gap: 14px;
}

.chevron-circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--primary-soft);
  color: var(--primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Revision Hub Empty State */
.revision-search-card {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  padding: 14px;
  border: 1px solid var(--border-color);
  margin-bottom: 14px;
}

.search-input-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-color);
  padding: 10px 14px;
  border-radius: var(--radius-pill);
  margin-bottom: 12px;
}

.search-input-box input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  font-size: 0.88rem;
  color: var(--text-main);
}

.revision-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-color);
  font-size: 0.82rem;
  font-weight: 600;
}

.revision-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.fab-mini {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.category-chips {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 12px;
}

.chip {
  padding: 7px 14px;
  border-radius: var(--radius-pill);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.chip.active {
  background: var(--primary-light);
  color: var(--primary);
  border-color: var(--primary);
}

.empty-state-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 42px 20px;
  text-align: center;
  margin-top: 8px;
}

.empty-icon-circle {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--bg-pill);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 14px;
}

/* =========================================================
   STUDIO WORKSPACE: TOOLBAR & TABS
   ========================================================= */
.studio-toolbar {
  height: 50px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  flex-shrink: 0;
}

.toolbar-left,
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tool-btn {
  width: 36px;
  height: 34px;
  border-radius: var(--radius-pill);
  background: var(--bg-pill);
  color: var(--text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
}
.tool-btn:hover,
.tool-btn.active {
  background: var(--primary-light);
  color: var(--primary);
}

.tool-btn-accent {
  background: var(--primary-soft);
  color: var(--primary);
  border: 1px solid var(--primary-light);
}

.view-mode-pills {
  display: inline-flex;
  background: var(--bg-pill);
  padding: 3px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-color);
}

.mode-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.mode-pill.active {
  background: var(--primary);
  color: #ffffff;
}

.desktop-only {
  display: none;
}
@media (min-width: 900px) {
  .desktop-only {
    display: inline-flex;
  }
}

/* Search Bar */
.studio-search-bar {
  background: var(--bg-surface-alt);
  border-bottom: 1px solid var(--border-color);
  padding: 6px 12px;
}
.search-inner {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 5px 10px;
}
.search-inner input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.84rem;
  color: var(--text-main);
}
.search-count {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* File Tabs Bar */
.file-tabs-bar {
  height: 44px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 0 12px;
  flex-shrink: 0;
}

.file-tabs-scroll {
  display: flex;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
  scrollbar-width: none;
  flex: 1;
  padding-right: 8px;
}
.file-tabs-scroll::-webkit-scrollbar { display: none; }

.file-tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 10px;
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-color);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.15s;
}

.file-tab.active {
  background: var(--primary-soft);
  border-color: var(--primary);
  color: var(--primary);
}

.tab-icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  opacity: 0.7;
}
.tab-icon-btn:hover {
  opacity: 1;
  background: rgba(0,0,0,0.07);
}

.file-tabs-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 6px;
  border-left: 1px solid var(--border-color);
}

.tab-action-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
}
.tab-action-btn:hover { background: var(--bg-pill); }

/* =========================================================
   WORKSPACE BODY (EDITOR, PREVIEW & SPLIT SCREEN)
   ========================================================= */
.workspace-body {
  flex: 1 1 0;
  min-height: 0;
  min-width: 0;
  display: flex;
  overflow: hidden;
  position: relative;
  transition: margin-left 0.25s ease, width 0.25s ease;
}

.workspace-pane {
  height: 100%;
  min-height: 0;
  min-width: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Mode toggling */
.workspace-body.mode-preview .editor-pane { display: none; }
.workspace-body.mode-preview .preview-pane { display: flex; }

.workspace-body.mode-editor .editor-pane { display: flex; }
.workspace-body.mode-editor .preview-pane { display: none; }

.workspace-body.mode-split .editor-pane,
.workspace-body.mode-split .preview-pane {
  display: flex;
  min-width: 0;
}
.workspace-body.mode-split .editor-pane {
  flex: 0 0 calc(var(--split-ratio, 50%) - 3px);
  width: auto;
  border-right: none;
}
.workspace-body.mode-split .preview-pane {
  flex: 1 1 0;
  width: auto;
}

.split-divider {
  display: none;
}
.workspace-body.mode-split .split-divider {
  display: block;
  flex: 0 0 6px;
  position: relative;
  z-index: 2;
  background: var(--border-color);
  cursor: col-resize;
  touch-action: none;
}
.workspace-body.mode-split .split-divider::after {
  content: "";
  position: absolute;
  inset: 0 -5px;
}
.workspace-body.mode-split .split-divider:hover,
.workspace-body.mode-split .split-divider:focus-visible {
  background: var(--primary);
  outline: none;
}

/* Code Editor */
.code-editor-wrapper {
  flex: 1;
  display: flex;
  overflow: hidden;
  background: var(--bg-surface);
}

.line-numbers {
  width: 44px;
  padding: 14px 6px;
  background: var(--bg-surface-alt);
  border-right: 1px solid var(--border-subtle);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  line-height: 1.55;
  color: var(--text-muted);
  text-align: right;
  user-select: none;
  overflow: hidden;
}

.code-textarea {
  flex: 1;
  padding: 14px;
  border: none;
  outline: none;
  resize: none;
  background: var(--bg-surface);
  color: var(--text-main);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.55;
  overflow-y: auto;
  white-space: pre;
}

.editor-status-bar {
  height: 30px;
  background: var(--bg-surface-alt);
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.status-badge-info {
  background: var(--success-bg);
  color: var(--success-text);
  padding: 2px 8px;
  border-radius: var(--radius-pill);
  margin-right: 8px;
}

/* Preview Canvas & Floating Image Toolbar */
.preview-pane {
  background: #ffffff;
  position: relative;
}

.preview-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #ffffff;
}

.image-context-toolbar {
  position: absolute;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 25;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(8px);
  color: #fff;
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: var(--shadow-lg);
  white-space: nowrap;
  max-width: 96%;
  overflow-x: auto;
}

.img-toolbar-label {
  font-size: 0.72rem;
  color: #94a3b8;
  font-weight: 600;
  margin-right: 4px;
}

.img-tool-btn {
  padding: 4px 9px;
  border-radius: var(--radius-pill);
  font-size: 0.74rem;
  font-weight: 600;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.1);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.img-tool-btn:hover {
  background: var(--primary);
}

.toolbar-sep {
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 2px;
}

/* Fullscreen Mode */
body.fullscreen-preview .studio-header,
body.fullscreen-preview .studio-toolbar,
body.fullscreen-preview .file-tabs-bar {
  display: none !important;
}

.fullscreen-bar {
  height: 50px;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
}

.fs-left, .fs-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.fs-title {
  font-weight: 700;
  font-size: 0.95rem;
}

.zoom-controls {
  display: inline-flex;
  align-items: center;
  background: var(--bg-pill);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-pill);
  padding: 2px 6px;
  gap: 8px;
  font-size: 0.78rem;
  font-weight: 600;
}
.zoom-controls button {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 1rem;
}

.btn-fs-exit {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--primary);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* =========================================================
   SLIDE-OVER LEFT DRAWER (FILES, OUTLINE, MARGINS)
   ========================================================= */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.35);
  z-index: 40;
}

.slide-drawer {
  position: fixed;
  top: 108px;
  bottom: 0;
  left: 0;
  width: 320px;
  max-width: 88vw;
  background: var(--bg-surface);
  border-right: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  z-index: 45;
  transform: translateX(-105%);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.slide-drawer.open {
  transform: translateX(0);
}

@media (min-width: 768px) {
  #studio-view {
    position: relative;
  }

  #studio-view.drawer-open .workspace-body {
    width: calc(100% - 320px);
    margin-left: 320px;
  }

  #studio-view .slide-drawer {
    position: absolute;
    top: 152px;
    bottom: 0;
    left: 0;
    width: 320px;
    max-width: none;
    transform: translateX(-105%);
  }

  #studio-view .slide-drawer.open {
    transform: translateX(0);
  }

  #studio-view .drawer-backdrop {
    display: none !important;
  }
}

.drawer-header {
  padding: 12px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.drawer-tabs {
  display: flex;
  background: var(--bg-pill);
  padding: 3px;
  border-radius: var(--radius-pill);
  flex: 1;
}

.dtab {
  flex: 1;
  padding: 6px 8px;
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: center;
}

.dtab.active {
  background: var(--bg-surface);
  color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.drawer-panel {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
}

/* Drawer Tab 1: Files */
.drawer-search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  padding: 8px 10px;
  margin-bottom: 14px;
}
.drawer-search-box input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 0.82rem;
}

.drawer-project-subheader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.drawer-proj-name {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
}
.drawer-proj-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
.btn-xs-primary {
  background: var(--primary);
  color: #fff;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.74rem;
  font-weight: 600;
}

.drawer-files-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.drawer-file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}
.drawer-file-item.active {
  border-color: var(--primary);
  background: var(--primary-soft);
  color: var(--primary);
}

/* Drawer Tab 2: Outline */
.outline-subheader {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.outline-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.outline-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background 0.15s;
}
.outline-item:hover {
  background: var(--bg-pill);
}

.outline-left {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
}

.h-badge {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 5px;
  flex-shrink: 0;
}
.h-badge.h1 { background: #dbeafe; color: #1d4ed8; }
.h-badge.h2 { background: #f3e8ff; color: #7e22ce; }
.h-badge.h3 { background: #f1f5f9; color: #475569; }

.outline-item.level-2 { padding-left: 18px; }
.outline-item.level-3 { padding-left: 30px; }

.outline-text {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-main);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Drawer Tab 3: Margins */
.margins-top-card {
  margin-bottom: 14px;
}
.margins-top-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  margin-bottom: 4px;
}
.text-btn-primary {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.78rem;
}
.margins-subtext {
  font-size: 0.72rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.margin-control-box {
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 12px;
  margin-bottom: 16px;
}

.margin-row-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.76rem;
  font-weight: 600;
  margin-bottom: 8px;
}

input[type="range"] {
  width: 100%;
  accent-color: var(--primary);
  cursor: pointer;
}

.btn-booklet-gutter {
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  font-size: 0.76rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.margin-slider-group {
  margin-bottom: 16px;
}
.slider-title {
  font-size: 0.72rem;
  color: var(--text-secondary);
  letter-spacing: 0.04em;
}
.slider-badge {
  background: var(--primary-soft);
  color: var(--primary);
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.74rem;
}

/* =========================================================
   DIRECT LIVE PREVIEW CANVAS & IMAGE DRAG/RESIZE HANDLES
   ========================================================= */
.btn-tiny-label {
  font-size: 0.7rem;
  font-weight: 700;
  margin-left: 3px;
}

.tool-btn-accent {
  width: auto !important;
  padding: 0 10px !important;
  cursor: pointer;
}

.preview-edit-toolbar {
  position: absolute;
  top: 10px;
  left: 12px;
  z-index: 24;
  display: flex;
  align-items: center;
  gap: 8px;
}

.preview-edit-toggle {
  width: 36px;
  min-width: 36px;
  min-height: 36px;
  padding: 0;
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  box-shadow: var(--shadow-sm);
}

.preview-image-upload {
  width: auto;
  min-height: 34px;
  padding: 0 12px;
  gap: 7px;
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  box-shadow: var(--shadow-sm);
  font-size: 0.76rem;
  font-weight: 600;
}

.preview-edit-toggle.active {
  color: var(--primary);
  border-color: var(--primary);
  background: var(--primary-soft);
}

.preview-editing {
  outline: 2px dashed var(--primary);
  outline-offset: -4px;
  caret-color: var(--primary);
}

.preview-editing:focus {
  outline-style: solid;
}

.preview-scroll-wrapper {
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  padding-top: 52px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
}

.preview-canvas {
  width: 100%;
  min-height: 100%;
  background: #ffffff;
  color: #1e293b;
  transition: padding 0.15s ease;
}

/* Interactive Image Widget inside Preview Canvas */
.studio-img-widget {
  position: relative;
  display: inline-block;
  max-width: 100%;
  margin: 10px 0;
  cursor: grab;
  vertical-align: top;
  border-radius: 8px;
  transition: outline 0.12s ease;
}

.studio-img-widget:active {
  cursor: grabbing;
}

.studio-img-widget.wrap-left {
  float: left;
  margin: 4px 16px 12px 0;
}

.studio-img-widget.wrap-right {
  float: right;
  margin: 4px 0 12px 16px;
}

.studio-img-widget.wrap-none {
  display: block;
  float: none;
  margin: 14px auto;
  clear: both;
}

.studio-img-widget img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 8px;
  pointer-events: none;
  user-select: none;
}

.studio-img-widget.studio-selected-img {
  outline: 3px solid #1a56db;
  outline-offset: 2px;
}

/* Bottom-Right Corner Stretch/Resize Handle */
.studio-resize-handle {
  position: absolute;
  width: 18px;
  height: 18px;
  right: -8px;
  bottom: -8px;
  background: #1a56db;
  border: 2.5px solid #ffffff;
  border-radius: 50%;
  cursor: nwse-resize;
  display: none;
  z-index: 20;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.studio-img-widget.studio-selected-img .studio-resize-handle {
  display: block;
}

.studio-drop-target {
  border-top: 3px dashed #1a56db !important;
  padding-top: 6px !important;
}

/* =========================================================
   STUDIO OPTIONS & PRINT READY OVERLAYS
   ========================================================= */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(15, 23, 42, 0.48);
  backdrop-filter: blur(3px);
}

.studio-modal-card {
  width: min(100%, 440px);
  max-height: min(85dvh, 720px);
  overflow-y: auto;
  padding: 18px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  color: var(--text-main);
  box-shadow: var(--shadow-lg);
}

.modal-header,
.fb-card-top,
.fb-title,
.modal-option-item {
  display: flex;
  align-items: center;
}

.modal-header,
.fb-card-top {
  justify-content: space-between;
}

.modal-header { margin-bottom: 14px; }
.modal-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

.firebase-sync-card {
  padding: 14px;
  margin-bottom: 14px;
  border: 1px solid var(--primary-light);
  border-radius: var(--radius-md);
  background: var(--primary-soft);
}
.fb-title { gap: 8px; font-size: 0.9rem; }
.sync-pill,
.zip-badge {
  padding: 4px 8px;
  border-radius: var(--radius-pill);
  background: var(--bg-surface);
  color: var(--primary);
  font-size: 0.68rem;
  font-weight: 700;
  white-space: nowrap;
}
.fb-desc {
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.45;
}

.modal-options-list { display: flex; flex-direction: column; gap: 7px; }
.modal-option-item {
  width: 100%;
  min-height: 52px;
  gap: 12px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  color: var(--text-main);
  text-align: left;
  text-decoration: none;
  background: transparent;
}
.modal-option-item:hover { background: var(--bg-surface-alt); border-color: var(--border-color); }
.modal-option-item > .opt-text { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.opt-text strong { font-size: 0.84rem; }
.opt-text span { color: var(--text-muted); font-size: 0.72rem; }
.modal-option-item.highlighted { background: var(--primary-soft); border-color: var(--primary-light); }
.modal-option-item.danger { color: var(--danger); }
.modal-divider { height: 1px; margin: 5px 0; background: var(--border-color); }

.print-toast {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 70;
  width: min(390px, calc(100vw - 28px));
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  background: var(--bg-surface);
  color: var(--text-main);
  box-shadow: var(--shadow-lg);
}
.print-toast-header,
.print-toast-title,
.print-toast-actions {
  display: flex;
  align-items: center;
}
.print-toast-header { justify-content: space-between; }
.print-toast-title { gap: 8px; font-weight: 700; }
.print-toast-desc { margin: 10px 0 14px; color: var(--text-secondary); font-size: 0.8rem; line-height: 1.45; }
.print-toast-actions { flex-direction: column; align-items: stretch; gap: 8px; }
.btn-primary-block,
.btn-secondary-icon {
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: var(--radius-md);
  font-size: 0.82rem;
  font-weight: 600;
}
.btn-primary-block { background: var(--primary); color: #fff; }
.btn-primary-block:hover { background: var(--primary-hover); }
.btn-secondary-icon { border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-main); }
.btn-secondary-icon:hover { background: var(--bg-surface-alt); }

/* =========================================================
   NATIVE @MEDIA PRINT ENGINE (Prints ONLY the Note Content)
   ========================================================= */
@media print {
  body * {
    visibility: hidden;
  }
  #studio-view,
  #workspace-body,
  #preview-pane,
  #preview-scroll-wrapper,
  #preview-canvas,
  #preview-canvas * {
    visibility: visible !important;
  }
  .studio-header,
  .studio-toolbar,
  .file-tabs-bar,
  .fullscreen-bar,
  .editor-pane,
  .preview-edit-toolbar,
  .image-context-toolbar,
  .slide-drawer,
  .drawer-backdrop,
  .modal-backdrop,
  .print-toast,
  .studio-resize-handle {
    display: none !important;
  }
  #studio-view,
  #workspace-body,
  #preview-pane,
  #preview-scroll-wrapper {
    position: static !important;
    overflow: visible !important;
    height: auto !important;
    width: 100% !important;
  }
  #preview-scroll-wrapper {
    padding-top: 0 !important;
  }
  #preview-canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: none !important;
  }
  .studio-img-widget.studio-selected-img {
    outline: none !important;
  }
}

/* =========================================================
   MATERIAL 3-INSPIRED HOME DASHBOARD
   ========================================================= */
#home-view {
  background:
    radial-gradient(ellipse at 92% 8%, rgba(215, 220, 255, 0.32), transparent 32%),
    var(--bg-app);
}

#home-view .app-header {
  height: 68px;
  padding-inline: max(24px, calc((100vw - 1120px) / 2));
  border-bottom-color: transparent;
  background: color-mix(in srgb, var(--bg-surface) 88%, transparent);
}

#home-view .app-title {
  font-size: 1.22rem;
  letter-spacing: -0.035em;
}

#home-view .home-content {
  max-width: 1120px;
  padding: 32px 28px 56px;
}

.home-hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 270px;
  overflow: hidden;
  padding: 38px 46px;
  border: 1px solid color-mix(in srgb, var(--primary) 12%, var(--border-color));
  border-radius: 32px;
  background: linear-gradient(115deg, var(--primary-soft) 0%, var(--bg-surface) 72%);
  box-shadow: var(--shadow-sm);
}

.home-hero-copy {
  position: relative;
  z-index: 2;
  max-width: 560px;
}

.home-eyebrow,
.home-section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.home-hero h2 {
  max-width: 520px;
  margin-top: 14px;
  color: var(--text-main);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 1.08;
}

.home-hero p {
  max-width: 440px;
  margin-top: 12px;
  color: var(--text-secondary);
  font-size: 0.94rem;
  line-height: 1.6;
}

.home-hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
}

.home-hero .btn-primary-pill,
.home-hero .btn-outline-pill {
  min-height: 44px;
  padding: 0 20px;
  font-size: 0.86rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.home-hero .btn-primary-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(26, 86, 219, 0.25);
}

.home-hero .btn-outline-pill {
  background: color-mix(in srgb, var(--bg-surface) 78%, transparent);
}

.home-theme-toggle {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 3;
  background: color-mix(in srgb, var(--bg-surface) 78%, transparent);
}

.home-hero-art {
  position: absolute;
  top: 0;
  right: 3%;
  width: 36%;
  height: 100%;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.hero-orbit {
  position: absolute;
  width: 230px;
  height: 230px;
  border: 1px solid color-mix(in srgb, var(--primary) 18%, transparent);
  border-radius: 50%;
}

.hero-orbit-one { transform: scale(1.25); }
.hero-orbit-two { transform: scale(0.86); }

.hero-note-card {
  position: relative;
  width: 184px;
  min-height: 160px;
  padding: 20px;
  border: 1px solid color-mix(in srgb, var(--primary) 13%, var(--border-color));
  border-radius: 22px;
  background: var(--bg-surface);
  color: var(--text-secondary);
  box-shadow: 0 18px 38px rgba(45, 55, 110, 0.14);
  transform: rotate(5deg);
}

.hero-note-icon {
  width: 27px;
  height: 27px;
  margin-bottom: 15px;
  color: var(--primary);
}

.hero-note-card span {
  font-size: 0.82rem;
  line-height: 1.45;
}
.hero-note-card strong { color: var(--text-main); }
.hero-note-lines { display: grid; gap: 6px; margin-top: 14px; }
.hero-note-lines i { height: 4px; border-radius: 9px; background: var(--bg-pill); }
.hero-note-lines i:last-child { width: 62%; }

.home-projects-heading {
  align-items: flex-end;
  margin: 38px 2px 18px;
}

.home-projects-heading .section-title {
  margin-top: 5px;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: -0.035em;
}

.home-projects-heading .section-subtitle {
  margin-top: 5px;
  font-size: 0.84rem;
}

#home-view .count-badge {
  padding: 8px 14px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-pill);
  background: var(--bg-surface);
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
}

#home-view .projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 16px;
}

#home-view .project-card {
  position: relative;
  min-height: 164px;
  padding: 20px 20px 16px;
  border-color: var(--border-color);
  border-radius: 24px;
  background: var(--bg-surface);
  box-shadow: 0 1px 2px rgba(20, 25, 50, 0.04);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

#home-view .project-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--primary) 42%, var(--border-color));
  box-shadow: var(--shadow-md);
}

#home-view .project-card-label {
  display: inline-flex;
  margin-bottom: 15px;
  padding: 5px 9px;
  border-radius: var(--radius-pill);
  background: var(--primary-soft);
  color: var(--primary);
  font-size: 0.63rem;
  letter-spacing: 0.09em;
}

#home-view .project-card-main { margin-bottom: 18px; }
#home-view .project-title-group { min-width: 0; gap: 11px; }
#home-view .project-title-group > .icon-sm {
  width: 38px;
  height: 38px;
  padding: 9px;
  border-radius: 13px;
  background: var(--primary-soft);
}
#home-view .project-name {
  overflow: hidden;
  font-size: 1.02rem;
  letter-spacing: -0.02em;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#home-view .project-inline-actions { gap: 2px; }
#home-view .proj-action-icon { color: var(--text-muted); }
#home-view .proj-action-icon:hover { color: var(--primary); }
#home-view .project-card-footer {
  padding-top: 12px;
  border-top-color: var(--border-subtle);
  font-size: 0.74rem;
}
#home-view .project-meta { flex-wrap: wrap; gap: 6px 14px; }
#home-view .chevron-circle { width: 30px; height: 30px; }

@media (max-width: 700px) {
  #home-view .app-header { padding-inline: 18px; }
  #home-view .home-content { padding: 20px 16px 36px; }
  .home-hero { min-height: 260px; padding: 30px 26px; border-radius: 26px; }
  .home-hero-art { right: -8%; width: 40%; opacity: 0.42; }
  .home-projects-heading { margin-top: 30px; }
  #home-view .projects-grid { grid-template-columns: 1fr; gap: 12px; }
  #home-view .project-card { min-height: 150px; }
}

@media (max-width: 460px) {
  .home-hero { min-height: 280px; padding: 28px 20px; }
  .home-hero-copy { max-width: 100%; }
  .home-hero h2 { max-width: 310px; font-size: 2.1rem; }
  .home-hero p { max-width: 300px; font-size: 0.86rem; }
  .home-hero-art { right: -24%; opacity: 0.18; }
  .home-hero-actions { gap: 8px; }
  .home-hero .btn-primary-pill,
  .home-hero .btn-outline-pill { padding-inline: 14px; font-size: 0.8rem; }
  .home-projects-heading { align-items: flex-start; gap: 10px; }
  #home-view .project-card { padding-inline: 15px; }
  #home-view .project-title-group { gap: 8px; }
  #home-view .project-inline-actions { margin-left: auto; }
}

/* Studio controls reflow into two touch-friendly rows on phones. */
@media (max-width: 560px) {
  .studio-header {
    height: 54px;
    padding-inline: 8px;
  }

  .studio-header .header-left,
  .studio-header .header-right {
    gap: 6px;
  }

  .studio-header .app-title {
    font-size: 1rem;
  }

  .studio-toolbar {
    height: 46px;
    min-height: 46px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    padding: 0 8px;
  }

  .toolbar-left,
  .toolbar-right {
    width: auto;
    min-width: 0;
    flex: 0 0 auto;
    gap: 4px;
  }

  .toolbar-left {
    justify-content: flex-start;
  }

  .toolbar-right {
    justify-content: flex-end;
  }

  .toolbar-left .tool-btn {
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
  }

  .preview-edit-toggle {
    flex: 0 0 36px;
    width: 36px;
    min-width: 36px;
    min-height: 36px;
    padding: 0;
  }

  .view-mode-pills {
    flex: 1 1 auto;
    min-width: 0;
  }

  .mode-pill {
    flex: 1 1 0;
    justify-content: center;
    gap: 4px;
    padding: 6px 7px;
    font-size: 0.74rem;
    white-space: nowrap;
  }

  .file-tabs-bar {
    padding-inline: 8px 6px;
  }

  .file-tabs-scroll {
    min-width: 0;
  }

  .slide-drawer {
    top: 146px;
  }
}

@media (max-width: 360px) {
  .studio-toolbar {
    padding-inline: 6px;
  }

  .toolbar-left,
  .toolbar-right {
    gap: 2px;
  }

  .toolbar-left .tool-btn,
  .preview-edit-toggle {
    width: 28px;
    height: 30px;
    min-width: 28px;
    min-height: 30px;
    flex-basis: 28px;
  }

  .mode-pill {
    gap: 3px;
    padding-inline: 5px;
    font-size: 0.7rem;
  }
}
