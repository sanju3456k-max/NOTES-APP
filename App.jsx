import { useEffect } from 'react';

/* =========================================================
   NOTES STUDIO PRO — DIRECT DOM PREVIEW, IMAGE & PRINT ENGINE
   ========================================================= */

const STORAGE_KEY = 'notes_studio_pro_v2';

const DEFAULT_FT1_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cartesian Coordinates & Reference Framework</title>
  <style>
    :root {
      --primary-color: #1e3a8a;
      --secondary-color: #0284c7;
      --border-color: #e2e8f0;
    }
    .module-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 3px solid var(--primary-color);
      padding-bottom: 12px;
      margin-bottom: 20px;
      gap: 12px;
    }
    .module-header h1 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
      line-height: 1.25;
    }
    .badge-box {
      background: #e0f2fe;
      color: #0369a1;
      font-weight: 700;
      font-size: 0.72rem;
      padding: 6px 10px;
      border-radius: 8px;
      letter-spacing: 0.05em;
      text-align: center;
      line-height: 1.2;
    }
    .preview-canvas h2 {
      font-size: 1.18rem;
      color: #0f172a;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 6px;
      margin-top: 22px;
      margin-bottom: 12px;
    }
    .preview-canvas h3 {
      font-size: 1.02rem;
      color: var(--primary-color);
      margin-top: 16px;
      margin-bottom: 6px;
    }
    .graph-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 16px;
      margin: 16px 0;
      text-align: center;
    }
    .graph-caption {
      font-size: 0.85rem;
      color: #64748b;
      margin-top: 10px;
    }
    .def-box {
      background: #f8fafc;
      border-left: 4px solid #0284c7;
      border-radius: 6px;
      padding: 12px 14px;
      margin: 12px 0;
      font-size: 0.94rem;
    }
  </style>
</head>
<body>
  <div class="module-header">
    <h1>Module 1: Cartesian Coordinates & Reference Framework</h1>
    <div class="badge-box">FOU<br>NDA<br>TION<br>S</div>
  </div>

  <h2>1. Fundamental Definitions</h2>

  <div class="graph-card">
    <svg viewBox="0 0 360 250" style="max-width: 100%; height: auto; background: #fcfdff; border-radius: 8px;">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="360" height="250" fill="url(#grid)" />
      <line x1="40" y1="190" x2="330" y2="190" stroke="#334155" stroke-width="2" />
      <line x1="110" y1="20" x2="110" y2="235" stroke="#334155" stroke-width="2" />
      <text x="335" y="194" font-size="12" font-weight="bold" fill="#1e293b">X</text>
      <text x="20" y="194" font-size="12" font-weight="bold" fill="#1e293b">X'</text>
      <text x="106" y="15" font-size="12" font-weight="bold" fill="#1e293b">Y</text>
      <text x="105" y="247" font-size="12" font-weight="bold" fill="#1e293b">Y'</text>
      <line x1="110" y1="90" x2="230" y2="90" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,4" />
      <line x1="230" y1="90" x2="230" y2="190" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4" />
      <circle cx="230" cy="90" r="4.5" fill="#0284c7" />
      <text x="238" y="85" font-size="13" font-weight="bold" fill="#0284c7">P(x, y)</text>
      <circle cx="110" cy="190" r="3.5" fill="#f59e0b" />
      <text x="92" y="206" font-size="11" font-weight="bold" fill="#b45309">O(0,0)</text>
      <text x="150" y="205" font-size="10" fill="#475569">Abscissa (|x|)</text>
      <text x="68" y="145" font-size="10" fill="#475569">Ordinate (|y|)</text>
    </svg>
    <div class="graph-caption">
      Figure: Cartesian Reference Frame showing point $P(x, y)$, its abscissa from the $Y$-axis, and ordinate from the $X$-axis.
    </div>
  </div>

  <div class="def-box">
    <strong>Axes of Reference:</strong> The mutually perpendicular horizontal axis ($X$-axis, $X'OX') and vertical axis ($Y$-axis, $Y'OY') meeting at the origin $O(0, 0)$.
  </div>

  <div class="def-box">
    <strong>Abscissa ($x$-coordinate):</strong> Perpendicular distance of a point from the $Y$-axis.
  </div>

  <div class="def-box">
    <strong>Ordinate ($y$-coordinate):</strong> Perpendicular distance of a point from the $X$-axis.
  </div>

  <h2>2. Coordinate Axis Properties</h2>
  <h3>1. General Distance Derivation</h3>
  <p>For any two points $A(x_1, y_1)$ and $B(x_2, y_2)$ in the Cartesian plane, the Euclidean distance $d$ is given by:</p>
  <p>$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$</p>

  <h3>2. The "Pyare Numbers" (Pythagorean Triplets)</h3>
  <p>Common right-angled triangle triplets for rapid coordinate distance calculation: $(3, 4, 5)$, $(5, 12, 13)$, $(7, 24, 25)$, $(8, 15, 17)$.</p>

  <h1>Module 2: Section Formula & Ratio Shortcuts</h1>
  <h3>1. Internal Division</h3>
  <p>Coordinates of point $P$ dividing segment $AB$ internally in ratio $m_1 : m_2$:</p>
  <p>$$P(x, y) = \\left( \\frac{m_1 x_2 + m_2 x_1}{m_1 + m_2}, \\frac{m_1 y_2 + m_2 y_1}{m_1 + m_2} \\right)$$</p>
</body>
</html>`;

let appState = {
  projects: [],
  activeProjectId: null,
  activeFileId: null,
  viewMode: 'preview',
  zoomLevel: 100,
  splitRatio: 50,
  margins: { gutter: 5, side: 5, vert: 8, fontSize: 15 }
};

let historyStack = {};
let selectedImageWidget = null;
let previewRenderTimer = null;
let previewEditMode = false;

/* =========================================================
   1. INITIALIZATION
   ========================================================= */
function initializeNotesStudio() {
  loadStateFromStorage();
  renderProjectsList();
  setupCodeEditorListeners();
  if (window.lucide) lucide.createIcons();
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.projects) && parsed.projects.length > 0) {
        appState = { ...appState, ...parsed };
        return;
      }
    }
  } catch (e) {}

  appState.projects = [
    {
      id: 'proj-1',
      name: 'Straight line',
      updatedAt: '20/10/2026',
      files: [
        { id: 'f-1', name: 'FT1', content: DEFAULT_FT1_HTML, versions: [] },
        { id: 'f-2', name: 'Note 2', content: '<h1>Note 2: Slope of a Line</h1><p>The gradient $m = \\tan\\theta = \\frac{y_2 - y_1}{x_2 - x_1}$.</p>', versions: [] },
        { id: 'f-3', name: 'Note 3', content: '<h1>Note 3: Various Forms of Line</h1><p>Point-slope, Two-point, Slope-intercept, and Normal form.</p>', versions: [] },
        { id: 'f-4', name: 'Note 4', content: '<h1>Note 4: Pair of Straight Lines</h1><p>Homogeneous equation $ax^2 + 2hxy + by^2 = 0$.</p>', versions: [] }
      ]
    },
    {
      id: 'proj-2',
      name: 'New Chapter',
      updatedAt: '18/10/2026',
      files: [{ id: 'f-201', name: 'Chapter Intro', content: '<h1>New Chapter Notes</h1><p>Write your HTML + LaTeX study notes here.</p>', versions: [] }]
    },
    {
      id: 'proj-3',
      name: 'New Chapter 2',
      updatedAt: '18/10/2026',
      files: [{ id: 'f-301', name: 'Formula Sheet', content: '<h1>Formula Sheet</h1><p>Add key derivations and diagrams.</p>', versions: [] }]
    }
  ];
  saveStateToStorage();
}

function saveStateToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {}
}

function formatTodayDate() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
}

/* =========================================================
   2. HOME SCREEN: PROJECTS & CHAPTERS
   ========================================================= */
function renderProjectsList() {
  const listEl = document.getElementById('projects-list');
  const countEl = document.getElementById('project-count-label');
  if (!listEl) return;

  countEl.textContent = `${appState.projects.length} Project${appState.projects.length === 1 ? '' : 's'}`;

  listEl.innerHTML = appState.projects.map(proj => `
    <div class="project-card" onclick="openProjectInStudio('${proj.id}')">
      <div class="project-card-label">CHAPTER</div>
      <div class="project-card-main">
        <div class="project-title-group">
          <i data-lucide="folder" class="icon-sm text-primary"></i>
          <span class="project-name">${escapeHtml(proj.name)}</span>
          <div class="project-inline-actions" onclick="event.stopPropagation()">
            <button class="proj-action-icon" onclick="renameProjectPrompt('${proj.id}')"><i data-lucide="pencil" class="icon-xs"></i></button>
            <button class="proj-action-icon" onclick="downloadProjectZipById('${proj.id}')"><i data-lucide="download" class="icon-xs"></i></button>
            <button class="proj-action-icon" onclick="deleteProjectById('${proj.id}')"><i data-lucide="trash-2" class="icon-xs"></i></button>
          </div>
        </div>
      </div>
      <div class="project-card-footer">
        <div class="project-meta">
          <span>${proj.files.length} file${proj.files.length === 1 ? '' : 's'}</span>
          <span>Updated ${proj.updatedAt}</span>
        </div>
        <div class="chevron-circle"><i data-lucide="chevron-right" class="icon-xs"></i></div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function createNewProject() {
  const name = prompt('Enter new Project / Chapter name:', `New Chapter ${appState.projects.length + 1}`);
  if (!name || !name.trim()) return;
  appState.projects.unshift({
    id: 'proj-' + Date.now(),
    name: name.trim(),
    updatedAt: formatTodayDate(),
    files: [{
      id: 'file-' + Date.now(),
      name: 'Note 1',
      content: `<h1>${escapeHtml(name.trim())}</h1>\n<h2>1. Core Concepts</h2>\n<p>Start writing, or use <strong>Edit preview</strong> to add and arrange diagrams.</p>`,
      versions: []
    }]
  });
  saveStateToStorage();
  renderProjectsList();
}

function renameProjectPrompt(projId) {
  const proj = appState.projects.find(p => p.id === projId);
  if (!proj) return;
  const newName = prompt('Rename chapter:', proj.name);
  if (newName && newName.trim()) {
    proj.name = newName.trim();
    proj.updatedAt = formatTodayDate();
    saveStateToStorage();
    renderProjectsList();
  }
}

function deleteProjectById(projId) {
  const proj = appState.projects.find(p => p.id === projId);
  if (!proj || !confirm(`Delete chapter "${proj.name}"?`)) return;
  appState.projects = appState.projects.filter(p => p.id !== projId);
  saveStateToStorage();
  renderProjectsList();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-theme');
}

/* =========================================================
   3. STUDIO WORKSPACE & TABS
   ========================================================= */
function getActiveProject() {
  return appState.projects.find(p => p.id === appState.activeProjectId) || appState.projects[0];
}

function getActiveFile() {
  const proj = getActiveProject();
  if (!proj) return null;
  return proj.files.find(f => f.id === appState.activeFileId) || proj.files[0];
}

function openProjectInStudio(projId) {
  const proj = appState.projects.find(p => p.id === projId);
  if (!proj) return;
  appState.activeProjectId = proj.id;
  if (proj.files.length === 0) {
    proj.files.push({ id: 'file-' + Date.now(), name: 'Note 1', content: '<h1>New Note</h1>', versions: [] });
  }
  appState.activeFileId = proj.files[0].id;

  document.getElementById('home-view').classList.remove('active');
  document.getElementById('studio-view').classList.add('active');

  renderFileTabs();
  loadActiveFileIntoStudio();
  renderDrawerFilesList();
}

function closeStudioToHome() {
  saveActiveNote(false);
  document.getElementById('studio-view').classList.remove('active');
  document.getElementById('home-view').classList.add('active');
  renderProjectsList();
}

function renderFileTabs() {
  const proj = getActiveProject();
  if (!proj) return;
  const container = document.getElementById('file-tabs-scroll');

  container.innerHTML = proj.files.map(file => {
    const isActive = file.id === appState.activeFileId;
    return `
      <div class="file-tab ${isActive ? 'active' : ''}" onclick="switchActiveFileTab('${file.id}')">
        <i data-lucide="file-text" class="icon-xs"></i>
        <span>${escapeHtml(file.name)}</span>
        ${isActive ? `
          <button class="tab-icon-btn" onclick="event.stopPropagation(); renameActiveFilePrompt('${file.id}')">
            <i data-lucide="pencil" style="width:12px;height:12px;"></i>
          </button>
        ` : ''}
        <button class="tab-icon-btn" onclick="event.stopPropagation(); closeOrDeleteFileTab('${file.id}')">
          <i data-lucide="x" style="width:13px;height:13px;"></i>
        </button>
      </div>
    `;
  }).join('');

  document.getElementById('modal-zip-subtext').textContent = `${proj.files.length} files included (${proj.name})`;
  document.getElementById('drawer-project-title').textContent = `${proj.name.toUpperCase()} (${proj.files.length})`;
  if (window.lucide) lucide.createIcons();
}

function switchActiveFileTab(fileId) {
  saveActiveNote(false);
  appState.activeFileId = fileId;
  deselectAnyImage();
  renderFileTabs();
  loadActiveFileIntoStudio();
  renderDrawerFilesList();
}

function addNewNoteTab() {
  const proj = getActiveProject();
  if (!proj) return;
  const name = prompt('New note file name:', `Note ${proj.files.length + 1}`);
  if (!name || !name.trim()) return;

  const newFile = {
    id: 'file-' + Date.now(),
    name: name.trim(),
    content: `<h1>${escapeHtml(name.trim())}</h1>\n<h2>1. Section Heading</h2>\n<p>Write your note content, or use Edit preview to add images.</p>`,
    versions: []
  };

  proj.files.push(newFile);
  proj.updatedAt = formatTodayDate();
  appState.activeFileId = newFile.id;
  saveStateToStorage();

  renderFileTabs();
  loadActiveFileIntoStudio();
  renderDrawerFilesList();
}

function renameActiveFilePrompt(fileId) {
  const proj = getActiveProject();
  const file = proj?.files.find(f => f.id === fileId);
  if (!file) return;
  const newName = prompt('Rename note:', file.name);
  if (newName && newName.trim()) {
    file.name = newName.trim();
    saveStateToStorage();
    renderFileTabs();
    renderDrawerFilesList();
    updateLineNumbersAndStatus();
  }
}

function closeOrDeleteFileTab(fileId) {
  const proj = getActiveProject();
  if (!proj || proj.files.length <= 1) {
    alert('Each project must have at least one note file.');
    return;
  }
  const target = proj.files.find(f => f.id === fileId);
  if (!confirm(`Delete "${target.name}"?`)) return;

  proj.files = proj.files.filter(f => f.id !== fileId);
  if (appState.activeFileId === fileId) appState.activeFileId = proj.files[0].id;
  saveStateToStorage();
  renderFileTabs();
  loadActiveFileIntoStudio();
  renderDrawerFilesList();
}

/* =========================================================
   4. DIRECT DOM PREVIEW ENGINE (KA-TEX + INTERACTIVE IMAGES)
   ========================================================= */
function setupSplitDivider() {
  const divider = document.getElementById('split-divider');
  const workspace = document.getElementById('workspace-body');
  if (!divider || !workspace) return;

  const applyRatio = (ratio) => {
    appState.splitRatio = Math.max(25, Math.min(75, ratio));
    workspace.style.setProperty('--split-ratio', `${appState.splitRatio}%`);
    divider.setAttribute('aria-valuenow', Math.round(appState.splitRatio));
  };
  applyRatio(Number(appState.splitRatio) || 50);

  divider.addEventListener('pointerdown', (event) => {
    if (appState.viewMode !== 'split') return;
    event.preventDefault();
    divider.setPointerCapture(event.pointerId);
    const resize = (pointerEvent) => {
      const bounds = workspace.getBoundingClientRect();
      if (!bounds.width) return;
      applyRatio(((pointerEvent.clientX - bounds.left) / bounds.width) * 100);
    };
    const finish = () => {
      divider.removeEventListener('pointermove', resize);
      divider.removeEventListener('pointerup', finish);
      divider.removeEventListener('pointercancel', finish);
      saveStateToStorage();
    };
    divider.addEventListener('pointermove', resize);
    divider.addEventListener('pointerup', finish);
    divider.addEventListener('pointercancel', finish);
  });

  divider.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'ArrowLeft') applyRatio(appState.splitRatio - 2);
    if (event.key === 'ArrowRight') applyRatio(appState.splitRatio + 2);
    if (event.key === 'Home') applyRatio(25);
    if (event.key === 'End') applyRatio(75);
    saveStateToStorage();
  });
}

function setupCodeEditorListeners() {
  const textarea = document.getElementById('html-code-editor');
  const lineNums = document.getElementById('line-numbers');
  setupSplitDivider();

  textarea.addEventListener('input', () => {
    const file = getActiveFile();
    if (!file) return;
    pushHistoryState(file.id, textarea.value);
    file.content = textarea.value;
    updateLineNumbersAndStatus();

    clearTimeout(previewRenderTimer);
    previewRenderTimer = setTimeout(() => {
      renderLivePreview();
      saveStateToStorage();
    }, 200);
  });

  textarea.addEventListener('scroll', () => {
    lineNums.scrollTop = textarea.scrollTop;
  });
  textarea.addEventListener('keydown', handleEditorUndoShortcut);

  const previewCanvas = document.getElementById('preview-canvas');
  previewCanvas.addEventListener('keydown', handleEditorUndoShortcut);
  previewCanvas.addEventListener('input', () => {
    if (previewEditMode) syncPreviewCanvasToEditor();
  });
  ['mouseup', 'keyup'].forEach(type => previewCanvas.addEventListener(type, () => {
    if (!previewEditMode) setTimeout(jumpFromPreviewSelectionToCode, 0);
  }));

  document.getElementById('preview-scroll-wrapper').addEventListener('click', (e) => {
    if (!e.target.closest('.studio-img-widget') && !e.target.closest('#image-context-toolbar')) {
      deselectAnyImage();
    }
  });
}

function handleEditorUndoShortcut(event) {
  if (!(event.ctrlKey || event.metaKey)) return;
  const key = event.key.toLowerCase();
  if (key === 'z') {
    event.preventDefault();
    event.shiftKey ? editorRedo() : editorUndo();
  } else if (key === 'y') {
    event.preventDefault();
    editorRedo();
  }
}

function loadActiveFileIntoStudio() {
  const file = getActiveFile();
  if (!file) return;
  const textarea = document.getElementById('html-code-editor');
  textarea.value = file.content || '';
  if (!historyStack[file.id]) {
    historyStack[file.id] = { past: [file.content], future: [] };
  }
  document.getElementById('fs-file-title').textContent = file.name;
  updateLineNumbersAndStatus();
  renderLivePreview();
}

function updateLineNumbersAndStatus() {
  const textarea = document.getElementById('html-code-editor');
  const lineNums = document.getElementById('line-numbers');
  const file = getActiveFile();
  const lines = (textarea.value || '').split('\n').length;
  let numsHtml = '';
  for (let i = 1; i <= lines; i++) numsHtml += i + '<br>';
  lineNums.innerHTML = numsHtml;
  document.getElementById('status-file-name').textContent = file ? file.name : 'Note';
  document.getElementById('status-line-count').textContent = `${lines} lines`;
}

function togglePreviewEditMode() {
  if (!previewEditMode && appState.viewMode === 'editor') setStudioViewMode('preview');
  if (previewEditMode) syncPreviewCanvasToEditor();
  previewEditMode = !previewEditMode;
  const canvas = document.getElementById('preview-canvas');
  const toggle = document.getElementById('preview-edit-toggle');
  const imageUpload = document.getElementById('preview-image-upload-label');
  canvas.contentEditable = previewEditMode ? 'true' : 'false';
  canvas.classList.toggle('preview-editing', previewEditMode);
  toggle.classList.toggle('active', previewEditMode);
  toggle.setAttribute('aria-pressed', String(previewEditMode));
  toggle.querySelector('span').textContent = previewEditMode ? 'Done editing' : 'Edit preview';
  imageUpload.classList.toggle('hidden', !previewEditMode);
}

function syncPreviewCanvasToEditor() {
  const file = getActiveFile();
  const canvas = document.getElementById('preview-canvas');
  if (!file || !canvas) return;

  const clone = canvas.cloneNode(true);
  clone.querySelectorAll('.studio-resize-handle').forEach(handle => handle.remove());
  clone.querySelectorAll('.studio-img-widget').forEach(widget => {
    widget.classList.remove('studio-selected-img');
    widget.removeAttribute('draggable');
  });
  clone.removeAttribute('contenteditable');
  clone.classList.remove('preview-editing');

  const parser = new DOMParser();
  const source = parser.parseFromString(file.content || '', 'text/html');
  const originalHeadStyles = Array.from(source.head.querySelectorAll('style')).map(style => style.textContent);
  clone.querySelectorAll('style').forEach(style => {
    if (originalHeadStyles.includes(style.textContent)) style.remove();
  });
  source.body.innerHTML = clone.innerHTML;
  commitEditorContent(source.documentElement.outerHTML);
  buildDocumentOutline();
}

function jumpFromPreviewSelectionToCode() {
  const selection = window.getSelection();
  const selectedText = selection ? selection.toString().trim() : '';
  const file = getActiveFile();
  if (!selectedText || !file) return;

  const textarea = document.getElementById('html-code-editor');
  const candidates = [selectedText, escapeHtml(selectedText), selectedText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')];
  let start = -1;
  let match = selectedText;
  for (const candidate of candidates) {
    start = file.content.indexOf(candidate);
    if (start !== -1) { match = candidate; break; }
  }
  if (start === -1) return;

  const previewWrapper = document.getElementById('preview-scroll-wrapper');
  const previewScrollTop = previewWrapper.scrollTop;
  if (appState.viewMode !== 'split') setStudioViewMode('split');
  previewWrapper.scrollTop = previewScrollTop;

  textarea.focus();
  textarea.setSelectionRange(start, start + match.length);
  const lineStart = file.content.lastIndexOf('\n', start - 1) + 1;
  textarea.scrollTop = (file.content.slice(0, lineStart).match(/\n/g) || []).length * 18;
}

function renderLivePreview() {
  const file = getActiveFile();
  const canvas = document.getElementById('preview-canvas');
  if (!file || !canvas) return;

  const { gutter, side, vert, fontSize } = appState.margins;
  const totalLeft = Number(gutter) + Number(side);

  canvas.style.paddingTop = `${vert}mm`;
  canvas.style.paddingBottom = `${vert}mm`;
  canvas.style.paddingLeft = `${totalLeft}mm`;
  canvas.style.paddingRight = `${side}mm`;
  canvas.style.fontSize = `${fontSize}px`;
  canvas.style.zoom = `${appState.zoomLevel}%`;

  const parser = new DOMParser();
  const doc = parser.parseFromString(file.content || '', 'text/html');
  const styles = Array.from(doc.head.querySelectorAll('style')).map(s => s.outerHTML).join('\n');
  const bodyHtml = doc.body ? doc.body.innerHTML : (file.content || '');

  canvas.innerHTML = styles + '\n' + bodyHtml;
  canvas.contentEditable = previewEditMode ? 'true' : 'false';
  canvas.classList.toggle('preview-editing', previewEditMode);

  if (window.renderMathInElement) {
    try {
      renderMathInElement(canvas, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (e) {}
  }

  bindInteractiveImagesInPreview();
  buildDocumentOutline();
}

/* =========================================================
   5. SMART IMAGE UPLOAD, WEBP COMPRESSION, DRAG & RESIZE
   ========================================================= */
function handleSmartImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (appState.viewMode === 'editor') {
    setStudioViewMode('preview');
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const MAX_WIDTH = 1100;
      let targetW = img.width;
      let targetH = img.height;

      if (targetW > MAX_WIDTH) {
        const ratio = MAX_WIDTH / targetW;
        targetW = MAX_WIDTH;
        targetH = Math.round(targetH * ratio);
      }

      const offCanvas = document.createElement('canvas');
      offCanvas.width = targetW;
      offCanvas.height = targetH;
      const ctx = offCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0, targetW, targetH);

      let compressedDataUrl = offCanvas.toDataURL('image/webp', 0.84);
      if (!compressedDataUrl.startsWith('data:image/webp')) {
        compressedDataUrl = offCanvas.toDataURL('image/jpeg', 0.84);
      }

      const origKB = Math.max(1, Math.round(file.size / 1024));
      const compKB = Math.max(1, Math.round((compressedDataUrl.length * 3) / 4 / 1024));

      const badge = document.getElementById('status-image-info');
      if (badge) {
        badge.textContent = `Compressed: ${origKB}KB → ${compKB}KB`;
        badge.classList.remove('hidden');
      }

      insertInteractiveImageWidget(compressedDataUrl, Math.min(260, targetW));
      event.target.value = '';
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function insertInteractiveImageWidget(dataUrl, initialWidth) {
  const activeFile = getActiveFile();
  if (!activeFile) return;

  const widgetId = 'studio-img-' + Date.now();
  const widgetHtml = `\n<div id="${widgetId}" class="studio-img-widget wrap-right" style="width: ${initialWidth}px;">\n  <img src="${dataUrl}" alt="Note Diagram" />\n  <div class="studio-resize-handle"></div>\n</div>\n`;

  let raw = activeFile.content || '';
  if (raw.includes('</h2>')) {
    raw = raw.replace('</h2>', '</h2>\n' + widgetHtml);
  } else if (raw.includes('</body>')) {
    raw = raw.replace('</body>', widgetHtml + '\n</body>');
  } else {
    raw += widgetHtml;
  }

  commitEditorContent(raw);
  renderLivePreview();

  setTimeout(() => {
    const newEl = document.getElementById(widgetId);
    if (newEl) {
      selectImageWidget(newEl);
      newEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 120);
}

function bindInteractiveImagesInPreview() {
  const canvas = document.getElementById('preview-canvas');
  if (!canvas) return;

  canvas.querySelectorAll('img').forEach(img => {
    if (!img.closest('.studio-img-widget')) {
      const wrapper = document.createElement('div');
      wrapper.id = 'studio-img-' + Math.floor(Math.random() * 1000000);
      wrapper.className = 'studio-img-widget wrap-none';
      wrapper.style.width = (img.width ? Math.min(img.width, 320) : 260) + 'px';
      img.parentNode.insertBefore(wrapper, img);
      wrapper.appendChild(img);
    }
  });

  canvas.querySelectorAll('.studio-img-widget').forEach(widget => {
    if (!widget.querySelector('.studio-resize-handle')) {
      const handle = document.createElement('div');
      handle.className = 'studio-resize-handle';
      widget.appendChild(handle);
    }

    widget.setAttribute('draggable', 'true');
    widget.onclick = (e) => {
      e.stopPropagation();
      selectImageWidget(widget);
    };

    const handle = widget.querySelector('.studio-resize-handle');
    let isResizing = false;
    let startX = 0, startY = 0, startW = 0, startH = 0;

    const onStartResize = (e) => {
      e.stopPropagation();
      e.preventDefault();
      selectImageWidget(widget);
      isResizing = true;
      const pt = e.touches ? e.touches[0] : e;
      startX = pt.clientX;
      startY = pt.clientY;
      startW = widget.offsetWidth;
      startH = widget.offsetHeight;

      document.addEventListener('mousemove', onMoveResize);
      document.addEventListener('mouseup', onStopResize);
      document.addEventListener('touchmove', onMoveResize, { passive: false });
      document.addEventListener('touchend', onStopResize);
    };

    const onMoveResize = (e) => {
      if (!isResizing) return;
      e.preventDefault();
      const pt = e.touches ? e.touches[0] : e;
      const newW = Math.max(60, startW + (pt.clientX - startX));
      const newH = Math.max(40, startH + (pt.clientY - startY));
      widget.style.width = newW + 'px';
      widget.style.height = newH + 'px';
    };

    const onStopResize = () => {
      if (!isResizing) return;
      isResizing = false;
      document.removeEventListener('mousemove', onMoveResize);
      document.removeEventListener('mouseup', onStopResize);
      document.removeEventListener('touchmove', onMoveResize);
      document.removeEventListener('touchend', onStopResize);
      syncWidgetChangesBackToEditor(widget);
    };

    handle.onmousedown = onStartResize;
    handle.ontouchstart = onStartResize;

    widget.ondragstart = (e) => {
      selectImageWidget(widget);
      e.dataTransfer.setData('text/plain', widget.id);
    };
  });

  canvas.ondragover = (e) => {
    e.preventDefault();
    const target = e.target.closest('p, div.def-box, h2, h3, div.graph-card');
    canvas.querySelectorAll('.studio-drop-target').forEach(el => el.classList.remove('studio-drop-target'));
    if (target && !target.classList.contains('studio-img-widget')) {
      target.classList.add('studio-drop-target');
    }
  };

  canvas.ondrop = (e) => {
    e.preventDefault();
    canvas.querySelectorAll('.studio-drop-target').forEach(el => el.classList.remove('studio-drop-target'));
    const target = e.target.closest('p, div.def-box, h2, h3, div.graph-card');
    if (selectedImageWidget && target && target !== selectedImageWidget && target.parentNode) {
      target.parentNode.insertBefore(selectedImageWidget, target);
      syncAllPreviewImagesToCode();
    }
  };
}

function selectImageWidget(widget) {
  document.querySelectorAll('.studio-img-widget').forEach(el => el.classList.remove('studio-selected-img'));
  widget.classList.add('studio-selected-img');
  selectedImageWidget = widget;
  document.getElementById('image-context-toolbar').classList.remove('hidden');
}

function deselectAnyImage() {
  document.querySelectorAll('.studio-img-widget').forEach(el => el.classList.remove('studio-selected-img'));
  selectedImageWidget = null;
  document.getElementById('image-context-toolbar').classList.add('hidden');
}

function setSelectedImageWrap(mode) {
  if (!selectedImageWidget) return;
  selectedImageWidget.classList.remove('wrap-left', 'wrap-right', 'wrap-none');
  selectedImageWidget.classList.add('wrap-' + mode);
  syncWidgetChangesBackToEditor(selectedImageWidget);
}

function scaleSelectedImage(ratio) {
  if (!selectedImageWidget) return;
  const canvasW = document.getElementById('preview-canvas').clientWidth || 600;
  selectedImageWidget.style.width = Math.round(canvasW * ratio) + 'px';
  selectedImageWidget.style.height = 'auto';
  syncWidgetChangesBackToEditor(selectedImageWidget);
}

function moveSelectedImageUpDown(direction) {
  if (!selectedImageWidget || !selectedImageWidget.parentNode) return;
  const parent = selectedImageWidget.parentNode;
  if (direction < 0 && selectedImageWidget.previousElementSibling) {
    parent.insertBefore(selectedImageWidget, selectedImageWidget.previousElementSibling);
  } else if (direction > 0 && selectedImageWidget.nextElementSibling) {
    parent.insertBefore(selectedImageWidget.nextElementSibling, selectedImageWidget);
  }
  selectedImageWidget.scrollIntoView({ behavior: 'smooth', block: 'center' });
  syncAllPreviewImagesToCode();
}

function deleteSelectedImage() {
  if (!selectedImageWidget) return;
  selectedImageWidget.remove();
  deselectAnyImage();
  syncPreviewCanvasToEditor();
}

function syncWidgetChangesBackToEditor(widget) {
  if (!getActiveFile() || !widget || !widget.id) return;
  syncPreviewCanvasToEditor();
}

function syncAllPreviewImagesToCode() {
  syncPreviewCanvasToEditor();
}

/* =========================================================
   6. PRINT ENGINE
   ========================================================= */
function triggerPrintDocument() {
  closeStudioOptionsModal();
  deselectAnyImage();
  document.getElementById('print-ready-toast').classList.remove('hidden');
}

function executeDirectPrint() {
  closePrintToast();
  setStudioViewMode('preview');

  const file = getActiveFile();
  if (!file) return;

  const { gutter, side, vert } = appState.margins;
  const leftMM = Number(gutter) + Math.max(Number(side), 6);
  const rightMM = Math.max(Number(side), 6);
  const verticalMM = Math.max(Number(vert), 10);
  let pageStyle = document.getElementById('studio-print-page-style');
  if (!pageStyle) {
    pageStyle = document.createElement('style');
    pageStyle.id = 'studio-print-page-style';
    document.head.appendChild(pageStyle);
  }
  pageStyle.textContent = `@page { margin: ${verticalMM}mm ${rightMM}mm ${verticalMM}mm ${leftMM}mm; }`;
  window.print();
}

function downloadPrintReadyHTML() {
  closePrintToast();
  const file = getActiveFile();
  if (!file) return;

  const { gutter, side, vert, fontSize } = appState.margins;
  const totalLeft = Number(gutter) + Math.max(Number(side), 6);
  const printableHtml = buildStandalonePrintableHTML(file, Math.max(vert, 10), totalLeft, Math.max(side, 6), fontSize);

  const blob = new Blob([printableHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${file.name}_Print_Ready.html`;
  a.click();
  URL.revokeObjectURL(url);
}

function buildStandalonePrintableHTML(file, vertMM, leftMM, rightMM, fontPx) {
  const parser = new DOMParser();
  const source = parser.parseFromString(file.content || '', 'text/html');
  source.querySelectorAll('script, title').forEach(element => element.remove());
  const headContent = source.head ? source.head.innerHTML : '';
  const bodyContent = source.body ? source.body.innerHTML : (file.content || '');
  const printStyles = `
    <style>
      @page { margin: ${vertMM}mm ${rightMM}mm ${vertMM}mm ${leftMM}mm; }
      html { font-size: ${fontPx}px; }
      body { font-family: system-ui, -apple-system, sans-serif; color: #0f172a; line-height: 1.6; margin: 0; }
      .preview-canvas { display: flow-root; }
      .studio-img-widget { display: inline-block; max-width: 100%; margin: 8px 0; }
      .studio-img-widget.wrap-left { float: left; margin: 4px 16px 12px 0; }
      .studio-img-widget.wrap-right { float: right; margin: 4px 0 12px 16px; }
      .studio-img-widget.wrap-none { display: block; margin: 12px auto; text-align: center; }
      .studio-img-widget img { width: 100%; height: auto; border-radius: 8px; }
      .studio-resize-handle { display: none !important; }
      @media print { .no-print { display: none !important; } }
    </style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"><\/script>
  `;
  const mathScript = `
    <script>
      if (window.renderMathInElement) {
        renderMathInElement(document.querySelector('.preview-canvas'), {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\\\(', right: '\\\\)', display: false },
            { left: '\\\\[', right: '\\\\]', display: true }
          ],
          throwOnError: false
        });
      }
    <\/script>
  `;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${escapeHtml(file.name)}</title>${headContent}${printStyles}</head><body><main class="preview-canvas">${bodyContent}</main>${mathScript}</body></html>`;
}

function closePrintToast() {
  document.getElementById('print-ready-toast').classList.add('hidden');
}

/* =========================================================
   7. OUTLINE, MARGINS, UNDO/REDO & EXPORT TOOLS
   ========================================================= */
function buildDocumentOutline() {
  const canvas = document.getElementById('preview-canvas');
  if (!canvas) return;
  const headings = Array.from(canvas.querySelectorAll('h1, h2, h3'));

  document.getElementById('outline-count').textContent = headings.length;
  document.getElementById('outline-sub-count').textContent = headings.length;

  const listEl = document.getElementById('outline-list');
  if (headings.length === 0) {
    listEl.innerHTML = `<p style="font-size:0.8rem;color:#94a3b8;padding:12px;">No H1, H2, or H3 headings found.</p>`;
    return;
  }

  listEl.innerHTML = headings.map((h, idx) => {
    const tag = h.tagName.toLowerCase();
    const level = tag === 'h1' ? 1 : tag === 'h2' ? 2 : 3;
    return `
      <div class="outline-item level-${level}" onclick="scrollToPreviewHeading(${idx})">
        <div class="outline-left">
          <span class="h-badge ${tag}">${tag.toUpperCase()}</span>
          <span class="outline-text">${escapeHtml(h.textContent.trim())}</span>
        </div>
        <i data-lucide="chevron-right" class="icon-xs text-muted"></i>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function scrollToPreviewHeading(index) {
  if (appState.viewMode === 'editor') setStudioViewMode('preview');
  const wrapper = document.getElementById('preview-scroll-wrapper');
  const canvas = document.getElementById('preview-canvas');
  const headings = canvas?.querySelectorAll('h1, h2, h3');
  const heading = headings?.[index];

  if (wrapper && heading) {
    const wrapperBounds = wrapper.getBoundingClientRect();
    const headingBounds = heading.getBoundingClientRect();
    wrapper.scrollTo({
      top: wrapper.scrollTop + headingBounds.top - wrapperBounds.top - 12,
      behavior: 'smooth'
    });
  }
  if (window.innerWidth < 768) toggleSlideDrawer(false);
}

function updateMarginSettings() {
  const gutter = Number(document.getElementById('slider-gutter').value);
  const side = Number(document.getElementById('slider-side').value);
  const vert = Number(document.getElementById('slider-vert').value);
  const fontSize = Number(document.getElementById('slider-font').value);

  appState.margins = { gutter, side, vert, fontSize };
  document.getElementById('val-gutter').textContent = `${gutter}mm`;
  document.getElementById('val-total-left').textContent = `${gutter + side}mm`;
  document.getElementById('val-side-margin').textContent = `${side}mm`;
  document.getElementById('val-vert-margin').textContent = `${vert}mm`;
  document.getElementById('val-font-size').textContent = `${fontSize}px`;
  document.getElementById('margin-summary-label').textContent = `${vert}mm ${side}mm`;

  renderLivePreview();
  saveStateToStorage();
}

function applyBookletGutter() {
  const slider = document.getElementById('slider-gutter');
  slider.value = Number(slider.value) === 15 ? 5 : 15;
  updateMarginSettings();
}

function resetMarginsToDefault() {
  document.getElementById('slider-gutter').value = 0;
  document.getElementById('slider-side').value = 0;
  document.getElementById('slider-vert').value = 0;
  document.getElementById('slider-font').value = 15;
  updateMarginSettings();
}

function toggleSlideDrawer(forceState) {
  const drawer = document.getElementById('slide-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const isOpen = typeof forceState === 'boolean' ? forceState : !drawer.classList.contains('open');
  drawer.classList.toggle('open', isOpen);
  backdrop.classList.toggle('hidden', !isOpen);
}

function switchDrawerTab(tabName) {
  ['files', 'outline', 'margins'].forEach(t => {
    document.getElementById(`dtab-${t}`).classList.toggle('active', t === tabName);
    document.getElementById(`dpanel-${t}`).classList.toggle('hidden', t !== tabName);
  });
}

function renderDrawerFilesList(filterQuery = '') {
  const proj = getActiveProject();
  const listEl = document.getElementById('drawer-files-list');
  if (!proj || !listEl) return;
  const q = filterQuery.toLowerCase().trim();
  listEl.innerHTML = proj.files
    .filter(f => f.name.toLowerCase().includes(q))
    .map(f => `
      <div class="drawer-file-item ${f.id === appState.activeFileId ? 'active' : ''}" onclick="switchActiveFileTab('${f.id}'); toggleSlideDrawer(false);">
        <div style="display:flex;align-items:center;gap:8px;">
          <i data-lucide="file-text" class="icon-sm"></i>
          <span>${escapeHtml(f.name)}</span>
        </div>
        <button class="proj-action-icon" onclick="event.stopPropagation(); closeOrDeleteFileTab('${f.id}')">
          <i data-lucide="trash-2" class="icon-xs"></i>
        </button>
      </div>
    `).join('');
  if (window.lucide) lucide.createIcons();
}

function filterDrawerFiles(val) { renderDrawerFilesList(val); }

function pushHistoryState(fileId, content) {
  if (!historyStack[fileId]) historyStack[fileId] = { past: [], future: [] };
  const stack = historyStack[fileId];
  if (stack.past[stack.past.length - 1] !== content) {
    stack.past.push(content);
    stack.future = [];
  }
}

function commitEditorContent(content) {
  const file = getActiveFile();
  if (!file || file.content === content) return;
  pushHistoryState(file.id, content);
  file.content = content;
  document.getElementById('html-code-editor').value = content;
  updateLineNumbersAndStatus();
  saveStateToStorage();
}

function editorUndo() {
  const file = getActiveFile();
  const stack = file && historyStack[file.id];
  if (stack && stack.past.length > 1) {
    stack.future.push(stack.past.pop());
    file.content = stack.past[stack.past.length - 1];
    document.getElementById('html-code-editor').value = file.content;
    updateLineNumbersAndStatus();
    renderLivePreview();
    saveStateToStorage();
  }
}

function editorRedo() {
  const file = getActiveFile();
  const stack = file && historyStack[file.id];
  if (stack && stack.future.length > 0) {
    const next = stack.future.pop();
    stack.past.push(next);
    file.content = next;
    document.getElementById('html-code-editor').value = file.content;
    updateLineNumbersAndStatus();
    renderLivePreview();
    saveStateToStorage();
  }
}

function saveActiveNote(showFeedback = true) {
  const proj = getActiveProject();
  const file = getActiveFile();
  if (!proj || !file) return;
  file.content = document.getElementById('html-code-editor').value;
  proj.updatedAt = formatTodayDate();
  if (!file.versions) file.versions = [];
  if (showFeedback) {
    file.versions.unshift({ timestamp: new Date().toLocaleTimeString(), content: file.content });
  }
  saveStateToStorage();
  if (showFeedback) {
    const btn = document.getElementById('save-note-btn');
    btn.style.transform = 'scale(1.15)';
    setTimeout(() => (btn.style.transform = 'scale(1)'), 180);
  }
}

function setStudioViewMode(mode) {
  appState.viewMode = mode;
  document.getElementById('workspace-body').className = `workspace-body mode-${mode}`;
  document.getElementById('btn-mode-editor').classList.toggle('active', mode === 'editor');
  document.getElementById('btn-mode-split').classList.toggle('active', mode === 'split');
  document.getElementById('btn-mode-preview').classList.toggle('active', mode === 'preview');
  if (mode !== 'editor') renderLivePreview();
}

function toggleSearchBar() {
  const bar = document.getElementById('studio-search-bar');
  bar.classList.toggle('hidden');
  if (!bar.classList.contains('hidden')) document.getElementById('studio-search-input').focus();
}

function performStudioSearch(query) {
  const countEl = document.getElementById('search-match-count');
  const file = getActiveFile();
  if (!file || !query.trim()) { countEl.textContent = '0/0'; return; }
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matches = (file.content.match(new RegExp(escaped, 'gi')) || []).length;
  countEl.textContent = matches > 0 ? `1/${matches}` : '0/0';
}

function enterFullscreenPreview() {
  setStudioViewMode('preview');
  document.body.classList.add('fullscreen-preview');
  document.getElementById('fullscreen-bar').classList.remove('hidden');
}

function exitFullscreenPreview() {
  document.body.classList.remove('fullscreen-preview');
  document.getElementById('fullscreen-bar').classList.add('hidden');
}

function adjustPreviewZoom(delta) {
  appState.zoomLevel = Math.min(180, Math.max(60, appState.zoomLevel + delta));
  document.getElementById('zoom-level-text').textContent = `${appState.zoomLevel}%`;
  renderLivePreview();
}

function openStudioOptionsModal() {
  document.getElementById('studio-options-modal').classList.remove('hidden');
}

function closeStudioOptionsModal() {
  document.getElementById('studio-options-modal').classList.add('hidden');
}

function handleHTMLFileImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    let proj = getActiveProject() || appState.projects[0];
    appState.activeProjectId = proj.id;
    const newNote = { id: 'file-' + Date.now(), name: file.name.replace(/\.html?$/i, ''), content: e.target.result, versions: [] };
    proj.files.push(newNote);
    appState.activeFileId = newNote.id;
    saveStateToStorage();
    document.getElementById('home-view').classList.remove('active');
    document.getElementById('studio-view').classList.add('active');
    renderFileTabs();
    loadActiveFileIntoStudio();
    renderDrawerFilesList();
  };
  reader.readAsText(file);
}

function downloadCurrentNoteHTML() {
  closeStudioOptionsModal();
  const file = getActiveFile();
  if (!file) return;
  const blob = new Blob([file.content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${file.name}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

async function downloadFullProjectZip() {
  closeStudioOptionsModal();
  const proj = getActiveProject();
  if (proj) await downloadProjectZipById(proj.id);
}

async function downloadProjectZipById(projId) {
  const proj = appState.projects.find(p => p.id === projId);
  if (!proj || !window.JSZip) return;
  const zip = new JSZip();
  proj.files.forEach(f => zip.file(`${f.name}.html`, f.content));
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${proj.name.replace(/\s+/g, '_')}_Notes.zip`;
  a.click();
  URL.revokeObjectURL(url);
}

function openVersionHistory() {
  closeStudioOptionsModal();
  const file = getActiveFile();
  if (!file || !file.versions || file.versions.length === 0) {
    alert('No saved snapshots yet. Click the top Save button to create version snapshots.');
    return;
  }
  const list = file.versions.map((v, i) => `${i + 1}. Saved at ${v.timestamp}`).join('\n');
  const choice = prompt(`Version History for "${file.name}":\n${list}\n\nEnter snapshot number to restore:`, '1');
  const idx = parseInt(choice, 10) - 1;
  if (!isNaN(idx) && file.versions[idx]) {
    file.content = file.versions[idx].content;
    loadActiveFileIntoStudio();
    saveStateToStorage();
  }
}

function deleteActiveNote() {
  closeStudioOptionsModal();
  const file = getActiveFile();
  if (file) closeOrDeleteFileTab(file.id);
}

function escapeHtml(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const windowHandlers = {
  createNewProject, toggleDarkMode, openProjectInStudio, renameProjectPrompt,
  downloadProjectZipById, deleteProjectById, closeStudioToHome, saveActiveNote,
  openStudioOptionsModal, closeStudioOptionsModal, toggleSlideDrawer, editorUndo,
  editorRedo, toggleSearchBar, performStudioSearch, setStudioViewMode,
  switchActiveFileTab, renameActiveFilePrompt, closeOrDeleteFileTab, addNewNoteTab,
  enterFullscreenPreview, adjustPreviewZoom, exitFullscreenPreview,
  togglePreviewEditMode, handleSmartImageUpload, setSelectedImageWrap,
  scaleSelectedImage, moveSelectedImageUpDown, deleteSelectedImage,
  switchDrawerTab, downloadFullProjectZip, filterDrawerFiles, updateMarginSettings,
  applyBookletGutter, resetMarginsToDefault, handleHTMLFileImport,
  downloadCurrentNoteHTML, openVersionHistory, triggerPrintDocument,
  deleteActiveNote, closePrintToast, executeDirectPrint, downloadPrintReadyHTML,
  scrollToPreviewHeading
};

export default function App() {
  const markup = document.getElementById('app-markup')?.innerHTML || '';

  useEffect(() => {
    Object.assign(window, windowHandlers);
    initializeNotesStudio();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
