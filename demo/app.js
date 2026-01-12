// ============================================
// Lucas Demo - Interactive Application
// ============================================

class LucasDemo {
    constructor() {
        // State
        this.currentScenario = null;
        this.sentDocs = new Set();
        this.isAnalyzing = false;
        this.analysisShown = false;
        this.currentDocIndex = 0;

        // DOM Elements
        this.scenarioSelection = document.getElementById('scenarioSelection');
        this.documentsGrid = document.getElementById('documentsGrid');
        this.lucasDropZone = document.getElementById('lucasDropZone');
        this.lucasAvatar = document.getElementById('lucasAvatar');
        this.lucasStatus = document.getElementById('lucasStatus');
        this.docsCounter = document.getElementById('docsCounter');
        this.chatArea = document.getElementById('chatArea');
        this.ctaContainer = document.getElementById('ctaContainer');
        this.dropIndicator = document.getElementById('dropIndicator');
        this.sendAllBtn = document.getElementById('sendAllBtn');
        this.modalOverlay = document.getElementById('modalOverlay');
        this.modalContent = document.getElementById('modalContent');
        this.modalDocType = document.getElementById('modalDocType');
        this.modalDocName = document.getElementById('modalDocName');
        this.modalDocIcon = document.getElementById('modalDocIcon');
        this.modalHintText = document.getElementById('modalHintText');
        this.modalClose = document.getElementById('modalClose');
        this.modalPrev = document.getElementById('modalPrev');
        this.modalNext = document.getElementById('modalNext');
        this.toastContainer = document.getElementById('toastContainer');

        // Initialize
        this.init();
    }

    init() {
        this.setupScenarioSelection();
        this.setupDragAndDrop();
        this.setupEventListeners();
    }

    // ============================================
    // Scenario Selection
    // ============================================

    setupScenarioSelection() {
        // Listen for scenario card clicks
        document.addEventListener('click', (e) => {
            const scenarioCard = e.target.closest('.scenario-card');
            if (scenarioCard && !scenarioCard.classList.contains('active')) {
                const scenarioId = scenarioCard.dataset.scenario;

                // Add click animation class
                scenarioCard.classList.add('clicked');

                // Delay scenario selection for smooth transition
                setTimeout(() => {
                    this.selectScenario(scenarioId);
                }, 500);
            }
        });
    }

    selectScenario(scenarioId) {
        const scenario = SCENARIOS[scenarioId];
        if (!scenario) return;

        this.currentScenario = scenario;
        this.sentDocs.clear();
        this.isAnalyzing = false;
        this.analysisShown = false;
        this.currentDocIndex = 0;

        // Update UI
        this.updatePanelHeader();
        this.renderDocuments();
        this.resetLucasState();

        // Hide scenario selection, show demo
        if (this.scenarioSelection) {
            this.scenarioSelection.classList.add('hidden');
        }
        document.querySelector('.demo-container').classList.add('scenario-active');

        // Mark selected card
        document.querySelectorAll('.scenario-card').forEach(card => {
            card.classList.toggle('active', card.dataset.scenario === scenarioId);
        });

        // Update send all button text
        this.sendAllBtn.querySelector('span:last-child')?.remove();
        const btnText = this.sendAllBtn.querySelector('span') || this.sendAllBtn;
        this.sendAllBtn.innerHTML = `
            <span class="btn-icon">↗</span>
            Send All ${scenario.documents.length} Documents
        `;
    }

    updatePanelHeader() {
        if (!this.currentScenario) return;

        const panelTags = document.querySelector('.panel-tags');
        if (panelTags) {
            panelTags.innerHTML = this.currentScenario.tags.map(tag => `
                <span class="panel-tag tag-${tag.icon}">
                    ${this.getTagIcon(tag.icon)}
                    ${tag.label}
                </span>
            `).join('');
        }
    }

    getTagIcon(type) {
        const icons = {
            // Commodity icons
            coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
            oil: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12h12"/><path d="M6 18h12"/><path d="M4 22h16"/></svg>`,
            electronics: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
            // Other icons
            route: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M7 12h3m4 0h3"/><path d="M12 9l2 3-2 3"/></svg>`,
            value: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
        };
        return icons[type] || '';
    }

    resetLucasState() {
        // Reset chat area
        this.chatArea.innerHTML = '';

        // Reset CTA
        this.ctaContainer.innerHTML = '';
        this.ctaContainer.classList.remove('visible');

        // Reset avatar container
        const avatarContainer = document.querySelector('.lucas-avatar-container');
        if (avatarContainer) {
            avatarContainer.classList.remove('has-messages');
        }

        // Reset docs counter
        this.docsCounter.textContent = '';
        this.docsCounter.classList.remove('visible');

        // Reset status
        this.lucasStatus.querySelector('.status-text').textContent = 'Drop documents here';
    }

    getActiveDocuments() {
        return this.currentScenario ? this.currentScenario.documents : [];
    }

    // ============================================
    // Document Type Colors & Styling
    // ============================================

    docColors = {
        // Common documents
        lc: { accent: '#6366f1', glow: 'rgba(99, 102, 241, 0.15)' },
        invoice: { accent: '#34d399', glow: 'rgba(52, 211, 153, 0.15)' },
        bl: { accent: '#22d3ee', glow: 'rgba(34, 211, 238, 0.15)' },
        coo: { accent: '#a78bfa', glow: 'rgba(167, 139, 250, 0.15)' },
        packing: { accent: '#fbbf24', glow: 'rgba(251, 191, 36, 0.15)' },
        quality: { accent: '#f472b6', glow: 'rgba(244, 114, 182, 0.15)' },
        insurance: { accent: '#06b6d4', glow: 'rgba(6, 182, 212, 0.15)' },

        // Crude Oil specific
        quantity: { accent: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.15)' },
        nomination: { accent: '#ec4899', glow: 'rgba(236, 72, 153, 0.15)' },
        charterparty: { accent: '#f97316', glow: 'rgba(249, 115, 22, 0.15)' },
        nor: { accent: '#14b8a6', glow: 'rgba(20, 184, 166, 0.15)' },
        ullage_pre: { accent: '#84cc16', glow: 'rgba(132, 204, 22, 0.15)' },
        ullage_post: { accent: '#84cc16', glow: 'rgba(132, 204, 22, 0.15)' },
        timesheet: { accent: '#eab308', glow: 'rgba(234, 179, 8, 0.15)' },
        loi: { accent: '#dc2626', glow: 'rgba(220, 38, 38, 0.15)' },
        manifest: { accent: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.15)' },
        tank_inspection: { accent: '#10b981', glow: 'rgba(16, 185, 129, 0.15)' },
        q88: { accent: '#64748b', glow: 'rgba(100, 116, 139, 0.15)' },
        msds: { accent: '#ef4444', glow: 'rgba(239, 68, 68, 0.15)' },

        // Electronics specific
        inspection: { accent: '#22c55e', glow: 'rgba(34, 197, 94, 0.15)' },
        hs_class: { accent: '#0284c7', glow: 'rgba(2, 132, 199, 0.15)' },
        warranty: { accent: '#7c3aed', glow: 'rgba(124, 58, 237, 0.15)' },
        import_dec: { accent: '#be185d', glow: 'rgba(190, 24, 93, 0.15)' }
    };

    // ============================================
    // Document Type Icons (SVG)
    // ============================================

    docIcons = {
        // === COMMON DOCUMENTS ===

        // Letter of Credit - Shield with checkmark
        lc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3L4 7v5c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V7l-8-4z"/>
            <path d="M9 12l2 2 4-4"/>
        </svg>`,

        // Commercial Invoice - Receipt
        invoice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 2v20l4-2 4 2 4-2 4 2V2l-4 2-4-2-4 2-4-2z"/>
            <path d="M8 10h8"/>
            <path d="M8 14h5"/>
            <path d="M8 6h4"/>
        </svg>`,

        // Bill of Lading - Ship
        bl: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
            <path d="M19.38 18.5A11.6 11.6 0 0 0 21 12.5l-9-4-9 4a14 14 0 0 0 2.81 7.5"/>
            <path d="M12 2v7"/>
            <path d="M8.5 5.5L12 8l3.5-2.5"/>
        </svg>`,

        // Certificate of Origin - Flag
        coo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 22V4"/>
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1"/>
            <circle cx="10" cy="9" r="1" fill="currentColor" stroke="none"/>
        </svg>`,

        // Packing List - Box
        packing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            <path d="m3.3 7 8.7 5 8.7-5"/>
            <path d="M12 22V12"/>
        </svg>`,

        // Quality Certificate - Clipboard with checkmark
        quality: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
            <rect x="9" y="2" width="6" height="4" rx="1"/>
            <path d="M9 14l2 2 4-4"/>
        </svg>`,

        // Insurance Certificate - Umbrella/Shield
        insurance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10"/>
            <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10"/>
            <path d="M12 2v20"/>
            <path d="M12 12h10"/>
        </svg>`,

        // === CRUDE OIL SPECIFIC ===

        // Quantity Certificate - Scale/Measurement
        quantity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3v18"/>
            <path d="M5 6l7-3 7 3"/>
            <circle cx="5" cy="9" r="3"/>
            <circle cx="19" cy="9" r="3"/>
            <path d="M5 12v6"/>
            <path d="M19 12v6"/>
        </svg>`,

        // Vessel Nomination - Ship with checkmark
        nomination: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
            <path d="M19 18l-9-4-9 4"/>
            <circle cx="18" cy="6" r="4"/>
            <path d="M16 6l1.5 1.5 3-3"/>
        </svg>`,

        // Charter Party - Contract/Handshake
        charterparty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
            <path d="M8 13h8"/>
            <path d="M8 17h8"/>
            <path d="M8 9h2"/>
        </svg>`,

        // Notice of Readiness - Bell/Alert
        nor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            <path d="M12 2v2"/>
        </svg>`,

        // Ullage Report Pre - Tank empty
        ullage_pre: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <path d="M4 14h16"/>
            <path d="M12 8v2"/>
            <path d="M8 8v2"/>
            <path d="M16 8v2"/>
        </svg>`,

        // Ullage Report Post - Tank filled
        ullage_post: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <rect x="4" y="10" width="16" height="10" rx="0" fill="currentColor" opacity="0.2"/>
            <path d="M4 10h16"/>
        </svg>`,

        // Timesheet - Clock
        timesheet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
        </svg>`,

        // Letter of Indemnity - Shield with warning
        loi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3L4 7v5c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V7l-8-4z"/>
            <path d="M12 8v4"/>
            <circle cx="12" cy="15" r="0.5" fill="currentColor"/>
        </svg>`,

        // Cargo Manifest - List
        manifest: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
            <path d="M8 13h.01"/>
            <path d="M11 13h5"/>
            <path d="M8 17h.01"/>
            <path d="M11 17h5"/>
        </svg>`,

        // Tank Inspection - Magnifying glass
        tank_inspection: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
            <path d="M8 11h6"/>
            <path d="M11 8v6"/>
        </svg>`,

        // Q88 Questionnaire - File with questions
        q88: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
            <circle cx="12" cy="14" r="2"/>
            <path d="M12 10v-1"/>
            <path d="M12 18v1"/>
        </svg>`,

        // MSDS - Warning/Hazard
        msds: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L2 22h20L12 2z"/>
            <path d="M12 9v4"/>
            <circle cx="12" cy="17" r="0.5" fill="currentColor"/>
        </svg>`,

        // === ELECTRONICS SPECIFIC ===

        // Inspection Certificate - Checkmark circle
        inspection: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9 12l2 2 4-4"/>
        </svg>`,

        // HS Classification - Tag/Label
        hs_class: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
        </svg>`,

        // Warranty Certificate - Shield with star
        warranty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3L4 7v5c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V7l-8-4z"/>
            <path d="M12 8l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5z"/>
        </svg>`,

        // Import Declaration - Document with stamp
        import_dec: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <path d="M14 2v6h6"/>
            <rect x="8" y="12" width="8" height="6" rx="1"/>
            <path d="M12 14v2"/>
        </svg>`
    };

    // ============================================
    // Render Documents
    // ============================================

    renderDocuments() {
        const documents = this.getActiveDocuments();
        if (!documents.length) return;

        this.documentsGrid.innerHTML = documents.map(doc => `
            <div class="doc-card"
                 data-doc-id="${doc.id}"
                 data-doc-type="${doc.id}"
                 draggable="true">
                <div class="shimmer"></div>
                <div class="doc-card-content">
                    <div class="doc-icon">
                        ${this.docIcons[doc.id] || this.docIcons.invoice}
                    </div>
                    <div class="doc-info">
                        <div class="doc-type">${doc.type}</div>
                        <div class="doc-name">${doc.filename}</div>
                    </div>
                </div>
                <div class="doc-card-footer">
                    <span class="doc-preview-hint">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        Preview
                    </span>
                    <span class="doc-drag-hint">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="15 4 19 4 19 8"/><polyline points="9 20 5 20 5 16"/><line x1="19" y1="4" x2="13" y2="10"/><line x1="5" y1="20" x2="11" y2="14"/></svg>
                        Drag
                    </span>
                </div>
                <div class="doc-card-sent-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Sent</span>
                </div>
            </div>
        `).join('');
    }

    // ============================================
    // Drag and Drop
    // ============================================

    setupDragAndDrop() {
        // Document cards
        this.documentsGrid.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('doc-card')) {
                e.target.classList.add('dragging');
                e.dataTransfer.setData('text/plain', e.target.dataset.docId);
                this.dropIndicator.classList.add('active');
            }
        });

        this.documentsGrid.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('doc-card')) {
                e.target.classList.remove('dragging');
                this.dropIndicator.classList.remove('active');
                this.lucasDropZone.classList.remove('drop-active');
            }
        });

        // Drop zone
        this.lucasDropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.lucasDropZone.classList.add('drop-active');
        });

        this.lucasDropZone.addEventListener('dragleave', (e) => {
            if (!this.lucasDropZone.contains(e.relatedTarget)) {
                this.lucasDropZone.classList.remove('drop-active');
            }
        });

        this.lucasDropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            this.lucasDropZone.classList.remove('drop-active');
            this.dropIndicator.classList.remove('active');

            const docId = e.dataTransfer.getData('text/plain');
            if (docId && !this.sentDocs.has(docId)) {
                this.sendDocument(docId);
            }
        });
    }

    // ============================================
    // Event Listeners
    // ============================================

    setupEventListeners() {
        // Click to preview document
        this.documentsGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.doc-card');
            if (card && !e.target.classList.contains('dragging')) {
                const docId = card.dataset.docId;
                this.showDocumentPreview(docId);
            }
        });

        // Send all button
        this.sendAllBtn.addEventListener('click', () => {
            this.sendAllDocuments();
        });

        // Modal close
        this.modalClose.addEventListener('click', () => {
            this.hideModal();
        });

        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.hideModal();
            }
        });

        // Modal navigation
        this.modalPrev.addEventListener('click', () => {
            this.navigateDocument(-1);
        });

        this.modalNext.addEventListener('click', () => {
            this.navigateDocument(1);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.modalOverlay.classList.contains('visible')) return;

            if (e.key === 'Escape') {
                this.hideModal();
            } else if (e.key === 'ArrowLeft') {
                this.navigateDocument(-1);
            } else if (e.key === 'ArrowRight') {
                this.navigateDocument(1);
            }
        });
    }

    navigateDocument(direction) {
        const documents = this.getActiveDocuments();
        const newIndex = this.currentDocIndex + direction;
        if (newIndex >= 0 && newIndex < documents.length) {
            this.currentDocIndex = newIndex;
            const doc = documents[newIndex];
            this.showDocumentPreview(doc.id, false); // false = no animation reset
        }
    }

    // ============================================
    // Document Actions
    // ============================================

    sendDocument(docId) {
        if (this.sentDocs.has(docId) || this.isAnalyzing) return;

        const documents = this.getActiveDocuments();
        const doc = documents.find(d => d.id === docId);
        if (!doc) return;

        // Mark as sent - CSS handles the badge visibility via .sent class
        this.sentDocs.add(docId);
        const card = this.documentsGrid.querySelector(`[data-doc-id="${docId}"]`);
        if (card) {
            card.classList.add('sent');
        }

        // Update counter
        this.updateDocsCounter();

        // Show toast
        this.showToast(`${doc.type} received`);

        // Check if all docs sent
        if (this.sentDocs.size === documents.length) {
            this.startAnalysis();
        }
    }

    sendAllDocuments() {
        if (this.isAnalyzing || this.analysisShown) return;

        const documents = this.getActiveDocuments();

        // Send all documents with staggered animation
        documents.forEach((doc, index) => {
            setTimeout(() => {
                if (!this.sentDocs.has(doc.id)) {
                    this.sendDocument(doc.id);
                }
            }, index * 150);
        });
    }

    updateDocsCounter() {
        const documents = this.getActiveDocuments();
        const count = this.sentDocs.size;
        const total = documents.length;

        if (count > 0) {
            this.docsCounter.textContent = `${count}/${total} documents received`;
            this.docsCounter.classList.add('visible');
        }

        if (count === total) {
            this.lucasStatus.querySelector('.status-text').textContent = 'Processing...';
        }
    }

    // ============================================
    // Analysis Flow
    // ============================================

    startAnalysis() {
        if (this.isAnalyzing) return;
        this.isAnalyzing = true;

        const documents = this.getActiveDocuments();

        // Add has-messages class to shrink avatar
        setTimeout(() => {
            document.getElementById('lucasPanel').querySelector('.lucas-avatar-container').classList.add('has-messages');
        }, 500);

        // Show acknowledgment
        setTimeout(() => {
            this.addMessage(`Got all ${documents.length}, checking together...`, 'acknowledgment');
        }, 800);

        // Show typing indicator
        setTimeout(() => {
            this.showTypingIndicator();
        }, 1500);

        // Show analysis after delay
        setTimeout(() => {
            this.hideTypingIndicator();
            this.showAnalysis();
        }, 4500);
    }

    addMessage(content, type = 'default') {
        const message = document.createElement('div');
        message.className = `chat-message ${type}`;
        message.innerHTML = `
            <div class="message-header">
                <span class="message-sender">Lucas</span>
                <span class="message-time">Just now</span>
            </div>
            <div class="message-content">
                <p>${content}</p>
            </div>
        `;
        this.chatArea.appendChild(message);
        this.scrollChatToBottom();
    }

    showTypingIndicator() {
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typingIndicator';
        typing.innerHTML = `
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
            <span class="typing-text">Lucas is analyzing...</span>
        `;
        this.chatArea.appendChild(typing);
        this.scrollChatToBottom();
    }

    hideTypingIndicator() {
        const typing = document.getElementById('typingIndicator');
        if (typing) {
            typing.remove();
        }
    }

    showAnalysis() {
        this.analysisShown = true;
        const response = this.currentScenario?.lucasResponse;
        if (!response) return;

        // Determine verdict class and emoji
        const verdictClass = response.verdict === 'NO-GO' ? 'no-go' :
                            response.verdict === 'CAUTION' ? 'caution' : 'go';
        const verdictEmoji = response.verdict === 'NO-GO' ? '🔴' :
                            response.verdict === 'CAUTION' ? '🟡' : '🟢';

        const message = document.createElement('div');
        message.className = 'chat-message analysis';
        message.innerHTML = `
            <div class="message-header">
                <span class="message-sender">Lucas</span>
                <span class="message-time">Just now</span>
            </div>
            <div class="message-content">
                <p><strong>${response.summary}</strong></p>
                <p>${response.quickCheck}</p>

                <div class="verdict-badge ${verdictClass}">
                    <span>${verdictEmoji}</span>
                    <span>${response.verdict} (${response.score}/100)</span>
                </div>

                <div class="analysis-section">
                    <div class="section-header critical">
                        <span>❌</span>
                        <span>Critical Failures</span>
                    </div>
                    ${response.criticalErrors.map(err => `
                        <div class="error-item">
                            <div class="error-label">${err.label}</div>
                            <div class="error-description">${err.description}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="analysis-section">
                    <div class="section-header warning">
                        <span>⚠️</span>
                        <span>Warnings</span>
                    </div>
                    ${response.warnings.map(warn => `
                        <div class="error-item warning">
                            <div class="error-label">${warn.label}</div>
                            <div class="error-description">${warn.description}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="analysis-section">
                    <div class="section-header action">
                        <span>📋</span>
                        <span>What To Do Now</span>
                    </div>
                    <ol class="action-list">
                        ${response.actions.map((action, i) => `
                            <li class="action-item">
                                <span class="action-number">${i + 1}</span>
                                <span>${action}</span>
                            </li>
                        `).join('')}
                    </ol>
                </div>

                <p>${response.closing}</p>
            </div>
        `;

        this.chatArea.appendChild(message);
        this.scrollChatToBottom();

        // Show CTA after analysis
        setTimeout(() => {
            this.showCTA();
        }, 1000);
    }

    showCTA() {
        const response = this.currentScenario?.lucasResponse;
        const errorCount = response ? response.criticalErrors.length + response.warnings.length : 0;
        const docCount = this.getActiveDocuments().length;

        this.ctaContainer.innerHTML = `
            <p class="cta-text">
                Lucas found <span class="cta-highlight">${errorCount} issues</span> across ${docCount} documents.<br>
                Imagine what he'd find in yours.
            </p>
            <div class="cta-buttons">
                <a href="https://wa.me/12029884628?text=Hi%20Lucas%2C%20I%20just%20tried%20the%20demo%20and%20I%27d%20like%20to%20test%20with%20my%20own%20documents." class="btn btn-primary btn-whatsapp" target="_blank">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Try with Your Docs
                </a>
            </div>
            <button class="cta-retry" id="retryBtn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                </svg>
                Try another scenario
            </button>
        `;

        // Add retry button handler
        document.getElementById('retryBtn').addEventListener('click', () => this.returnToScenarioSelection());

        this.ctaContainer.classList.add('visible');
    }

    returnToScenarioSelection() {
        // Hide demo, show scenario selection
        document.querySelector('.demo-container').classList.remove('scenario-active');
        if (this.scenarioSelection) {
            this.scenarioSelection.classList.remove('hidden');
        }

        // Reset all cards
        document.querySelectorAll('.scenario-card').forEach(card => {
            card.classList.remove('active', 'clicked');
        });

        // Clear chat and CTA
        this.chatArea.innerHTML = '';
        this.ctaContainer.innerHTML = '';
        this.ctaContainer.classList.remove('visible');

        // Reset Lucas state
        this.resetLucasState();

        // Reset state
        this.currentScenario = null;
        this.sentDocs.clear();
        this.isAnalyzing = false;
        this.analysisShown = false;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    scrollChatToBottom() {
        this.chatArea.scrollTop = this.chatArea.scrollHeight;
    }

    // ============================================
    // Document Preview Modal
    // ============================================

    showDocumentPreview(docId, animate = true) {
        const documents = this.getActiveDocuments();
        const doc = documents.find(d => d.id === docId);
        if (!doc) return;

        // Update current index for navigation
        this.currentDocIndex = documents.findIndex(d => d.id === docId);

        // Set document type color theming
        const colors = this.docColors[docId];
        const modal = document.getElementById('documentModal');
        if (colors) {
            modal.style.setProperty('--modal-accent', colors.accent);
            modal.style.setProperty('--modal-accent-glow', colors.glow);
        }

        // Update header with icon
        this.modalDocIcon.innerHTML = this.docIcons[docId] || '';
        this.modalDocType.textContent = doc.type;
        this.modalDocName.textContent = doc.filename;

        // Update hint based on whether document has errors
        const errorCount = doc.errorLines?.length || 0;
        if (errorCount > 0) {
            this.modalHintText.textContent = `This document contains ${errorCount} error${errorCount > 1 ? 's' : ''} - look for the highlighted lines`;
        } else {
            this.modalHintText.textContent = 'This document appears to be error-free';
        }

        // Update navigation button visibility
        this.modalPrev.style.opacity = this.currentDocIndex > 0 ? '1' : '0.3';
        this.modalPrev.style.pointerEvents = this.currentDocIndex > 0 ? 'auto' : 'none';
        this.modalNext.style.opacity = this.currentDocIndex < documents.length - 1 ? '1' : '0.3';
        this.modalNext.style.pointerEvents = this.currentDocIndex < documents.length - 1 ? 'auto' : 'none';

        // Check if document has styled HTML version
        if (doc.styled && doc.htmlContent) {
            this.modalContent.innerHTML = doc.htmlContent;
            this.modalContent.classList.remove('text-preview');
        } else {
            // Premium text-based preview with highlighted error lines
            const lines = doc.content.trim().split('\n');
            const errorLines = doc.errorLines || [];

            const linesHtml = lines.map(line => {
                const isError = errorLines.some(errLine => line.includes(errLine.trim()));
                const isSeparator = line.includes('═══') || line.includes('───') || line.includes('┌') || line.includes('└');
                const classes = [
                    'doc-line',
                    isError ? 'highlight' : '',
                    isSeparator ? 'doc-line-separator' : ''
                ].filter(Boolean).join(' ');
                return `<div class="${classes}">${this.escapeHtml(line) || '&nbsp;'}</div>`;
            }).join('');

            // Wrap in document page with watermark
            this.modalContent.innerHTML = `
                <div class="doc-page">
                    <div class="doc-page-watermark">${doc.shortType || doc.type}</div>
                    ${linesHtml}
                </div>
            `;
            this.modalContent.classList.add('text-preview');
        }

        // Scroll to top when changing documents
        this.modalContent.scrollTop = 0;

        if (animate) {
            this.modalOverlay.classList.add('visible');
        }
    }

    hideModal() {
        this.modalOverlay.classList.remove('visible');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ============================================
    // Toast Notifications
    // ============================================

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        this.toastContainer.appendChild(toast);

        // Remove after delay
        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }
}

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    window.lucasDemo = new LucasDemo();
});
