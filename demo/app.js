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
                <a href="#" class="btn btn-primary">Start Free</a>
                <button class="btn btn-secondary" onclick="location.reload()">Try Again</button>
            </div>
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
