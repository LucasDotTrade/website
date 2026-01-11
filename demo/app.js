// ============================================
// Lucas Demo - Interactive Application
// ============================================

class LucasDemo {
    constructor() {
        // State
        this.sentDocs = new Set();
        this.isAnalyzing = false;
        this.analysisShown = false;

        // DOM Elements
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
        this.modalClose = document.getElementById('modalClose');
        this.toastContainer = document.getElementById('toastContainer');

        // Initialize
        this.init();
    }

    init() {
        this.renderDocuments();
        this.setupDragAndDrop();
        this.setupEventListeners();
    }

    // ============================================
    // Render Documents
    // ============================================

    renderDocuments() {
        this.documentsGrid.innerHTML = DEMO_DOCUMENTS.map(doc => `
            <div class="doc-card"
                 data-doc-id="${doc.id}"
                 draggable="true">
                <div class="doc-icon">
                    <span class="doc-icon-text">${doc.shortType}</span>
                </div>
                <div class="doc-type">${doc.type}</div>
                <div class="doc-name">${doc.filename}</div>
                <span class="doc-preview-hint">Click to preview</span>
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

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideModal();
            }
        });
    }

    // ============================================
    // Document Actions
    // ============================================

    sendDocument(docId) {
        if (this.sentDocs.has(docId) || this.isAnalyzing) return;

        const doc = DEMO_DOCUMENTS.find(d => d.id === docId);
        if (!doc) return;

        // Mark as sent
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
        if (this.sentDocs.size === DEMO_DOCUMENTS.length) {
            this.startAnalysis();
        }
    }

    sendAllDocuments() {
        if (this.isAnalyzing || this.analysisShown) return;

        // Send all documents with staggered animation
        DEMO_DOCUMENTS.forEach((doc, index) => {
            setTimeout(() => {
                if (!this.sentDocs.has(doc.id)) {
                    this.sendDocument(doc.id);
                }
            }, index * 150);
        });
    }

    updateDocsCounter() {
        const count = this.sentDocs.size;
        const total = DEMO_DOCUMENTS.length;

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

        // Add has-messages class to shrink avatar
        setTimeout(() => {
            document.getElementById('lucasPanel').querySelector('.lucas-avatar-container').classList.add('has-messages');
        }, 500);

        // Show acknowledgment
        setTimeout(() => {
            this.addMessage('Got all 6, checking together...', 'acknowledgment');
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
        const response = LUCAS_RESPONSE;

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

                <div class="verdict-badge no-go">
                    <span>🔴</span>
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
        this.ctaContainer.innerHTML = `
            <p class="cta-text">
                Lucas found <span class="cta-highlight">5 errors in 4 seconds</span>.<br>
                Imagine what he'd find in your documents.
            </p>
            <div class="cta-buttons">
                <a href="https://wa.me/12029884628?text=Hi%20Lucas" class="btn btn-primary btn-whatsapp" target="_blank">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Lucas
                </a>
                <a href="mailto:hello@lucas.trade" class="btn btn-secondary btn-email">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M22 6l-10 7L2 6"/>
                    </svg>
                    Email Your Docs
                </a>
            </div>
            <button class="btn btn-ghost" onclick="location.reload()">Try Again</button>
        `;
        this.ctaContainer.classList.add('visible');
    }

    scrollChatToBottom() {
        this.chatArea.scrollTop = this.chatArea.scrollHeight;
    }

    // ============================================
    // Document Preview Modal
    // ============================================

    showDocumentPreview(docId) {
        const doc = DEMO_DOCUMENTS.find(d => d.id === docId);
        if (!doc) return;

        this.modalDocType.textContent = doc.type;
        this.modalDocName.textContent = doc.filename;

        // Check if document has styled HTML version
        if (doc.styled && doc.htmlContent) {
            this.modalContent.innerHTML = doc.htmlContent;
            this.modalContent.classList.remove('text-preview');
        } else {
            // Fallback to text-based preview with highlighted error lines
            const lines = doc.content.trim().split('\n');
            const errorLines = doc.errorLines || [];

            this.modalContent.innerHTML = lines.map(line => {
                const isError = errorLines.some(errLine => line.includes(errLine.trim()));
                return `<div class="doc-line${isError ? ' highlight' : ''}">${this.escapeHtml(line) || '&nbsp;'}</div>`;
            }).join('');
            this.modalContent.classList.add('text-preview');
        }

        this.modalOverlay.classList.add('visible');
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
