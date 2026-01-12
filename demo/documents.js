// ============================================
// Demo Documents - Ethiopian Coffee Export
// ============================================
// Trade: Yirgacheffe Highland Exports (Ethiopia) → Nordic Roasters B.V. (Netherlands)
// Route: Djibouti, Djibouti → Rotterdam, Netherlands
// Value: USD 5,000,000 for 1,000 MT Grade AA Arabica
//
// 5 ERRORS BAKED IN:
// 1. Port typo: "Rottedam" vs "Rotterdam" (B/L)
// 2. Grade mismatch: LC says "AA" / Invoice says "A"
// 3. Moisture over spec: 11.8% vs max 11.5% (Quality Cert)
// 4. Missing ICO Certificate (required by LC)
// 5. Quantity variance: 1,028 MT vs 1,000 MT (within tolerance but flagged)

const DEMO_DOCUMENTS = [
    {
        id: 'lc',
        type: 'Letter of Credit',
        shortType: 'LC',
        filename: 'LC-2024-NR-78432.pdf',
        styled: false,
        errorLines: [
            'Maximum Moisture Content: 11.5%',
            'ICO Certificate of Origin'
        ],
        _htmlContent: `
            <div class="doc-preview">
                <div class="doc-watermark">ORIGINAL</div>
                <div class="doc-serial">REF: LC-2024-NR-78432/001</div>

                <!-- Bank Header -->
                <div class="doc-header">
                    <div class="bank-logo">
                        <div class="bank-logo-main">ABN AMRO</div>
                        <div class="bank-logo-sub">Trade Finance Services</div>
                    </div>
                    <div class="bank-details">
                        Herengracht 595<br>
                        1017 CE Amsterdam<br>
                        The Netherlands<br>
                        SWIFT: ABNANL2A
                    </div>
                </div>

                <!-- Document Title -->
                <div class="doc-title">
                    <h1>Irrevocable Documentary Credit</h1>
                    <div class="doc-subtitle">Subject to UCP 600 (2007 Revision)</div>
                </div>

                <!-- Reference Box -->
                <div class="doc-ref-box">
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">Credit Number</span>
                        <span class="doc-ref-value">LC-2024-NR-78432</span>
                    </div>
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">Date of Issue</span>
                        <span class="doc-ref-value">December 15, 2024</span>
                    </div>
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">Date of Expiry</span>
                        <span class="doc-ref-value">February 28, 2025</span>
                    </div>
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">Place of Expiry</span>
                        <span class="doc-ref-value">Amsterdam, Netherlands</span>
                    </div>
                </div>

                <!-- Parties -->
                <div class="doc-parties">
                    <div class="doc-party">
                        <div class="doc-party-label">Applicant</div>
                        <div class="doc-party-name">Nordic Roasters B.V.</div>
                        <div class="doc-party-address">
                            Keizersgracht 126<br>
                            1015 CW Amsterdam<br>
                            Netherlands
                        </div>
                    </div>
                    <div class="doc-party">
                        <div class="doc-party-label">Beneficiary</div>
                        <div class="doc-party-name">Yirgacheffe Highland Exports</div>
                        <div class="doc-party-address">
                            Bole Road, Kirkos Sub-City<br>
                            Addis Ababa<br>
                            Ethiopia
                        </div>
                    </div>
                </div>

                <!-- Amount -->
                <div class="doc-amount-box">
                    <div>
                        <div class="doc-amount-label">Credit Amount</div>
                        <div class="doc-amount-value">USD 5,000,000.00</div>
                        <div class="doc-amount-words">United States Dollars Five Million Only</div>
                    </div>
                </div>

                <!-- Goods Description -->
                <div class="doc-section">
                    <div class="doc-section-header">Description of Goods</div>
                    <table class="doc-table">
                        <tr>
                            <td class="label">Product</td>
                            <td class="value">Ethiopian Arabica Coffee, Washed Yirgacheffe</td>
                        </tr>
                        <tr>
                            <td class="label">Grade</td>
                            <td class="value">AA</td>
                        </tr>
                        <tr>
                            <td class="label">Screen Size</td>
                            <td class="value">15+</td>
                        </tr>
                        <tr>
                            <td class="label">Maximum Moisture</td>
                            <td class="value highlight-error">11.5%</td>
                        </tr>
                        <tr>
                            <td class="label">Crop Year</td>
                            <td class="value">2024/2025</td>
                        </tr>
                        <tr>
                            <td class="label">Quantity</td>
                            <td class="value">1,000 MT (+/- 3%)</td>
                        </tr>
                        <tr>
                            <td class="label">Unit Price</td>
                            <td class="value">USD 5.00 per KG CIF Rotterdam</td>
                        </tr>
                    </table>
                </div>

                <!-- Shipment Terms -->
                <div class="doc-section">
                    <div class="doc-section-header">Shipment Terms</div>
                    <table class="doc-table">
                        <tr>
                            <td class="label">Port of Loading</td>
                            <td class="value">Djibouti, Djibouti</td>
                        </tr>
                        <tr>
                            <td class="label">Port of Discharge</td>
                            <td class="value">Rotterdam, Netherlands</td>
                        </tr>
                        <tr>
                            <td class="label">Latest Shipment</td>
                            <td class="value">February 15, 2025</td>
                        </tr>
                        <tr>
                            <td class="label">Incoterms</td>
                            <td class="value">CIF Rotterdam</td>
                        </tr>
                        <tr>
                            <td class="label">Partial Shipments</td>
                            <td class="value">Not Allowed</td>
                        </tr>
                        <tr>
                            <td class="label">Transshipment</td>
                            <td class="value">Allowed</td>
                        </tr>
                    </table>
                </div>

                <!-- Required Documents -->
                <div class="doc-section">
                    <div class="doc-section-header">Documents Required</div>
                    <div class="doc-requirements">
                        <ol>
                            <li>Commercial Invoice (3 originals)</li>
                            <li>Full set 3/3 original clean on board Bills of Lading made out to order of ABN AMRO Bank N.V.</li>
                            <li>Certificate of Origin issued by Ethiopian Chamber of Commerce</li>
                            <li>Phytosanitary Certificate</li>
                            <li class="highlight-error">ICO Certificate of Origin</li>
                            <li>Quality and Weight Certificate from ECX or approved surveyor</li>
                            <li>Insurance Certificate/Policy for 110% CIF value</li>
                        </ol>
                    </div>
                </div>

                <!-- Special Conditions -->
                <div class="doc-conditions">
                    <div class="doc-conditions-title">Special Conditions</div>
                    <ul>
                        <li>All documents must show LC number LC-2024-NR-78432</li>
                        <li>Coffee must be of current crop year</li>
                        <li>Third party documents acceptable except invoice</li>
                    </ul>
                </div>

                <!-- Embossed Seal -->
                <div class="doc-seal">
                    <div class="doc-seal-text">ABN AMRO<br>TRADE<br>FINANCE</div>
                </div>

                <!-- Footer with signature and stamp -->
                <div class="doc-footer">
                    <div class="doc-signature">
                        <div class="doc-signature-line">
                            <svg class="signature-svg" viewBox="0 0 150 50">
                                <path d="M5,40 Q15,10 30,35 T50,25 T70,38 T90,20 T110,35 T130,25 T145,30"
                                      fill="none" stroke="#1a365d" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="doc-signature-name">J.M. van der Berg</div>
                        <div class="doc-signature-title">Senior Trade Finance Officer</div>
                    </div>

                    <div class="doc-stamp">
                        <div class="doc-stamp-outer">
                            <div class="doc-stamp-inner">
                                <div class="doc-stamp-stars">★ ★ ★</div>
                                <div class="doc-stamp-text">ABN AMRO</div>
                                <div class="doc-stamp-text large">AUTHORIZED</div>
                                <div class="doc-stamp-date">15-DEC-2024</div>
                                <div class="doc-stamp-stars">★ ★ ★</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Barcode -->
                <div class="barcode-sim">
                    <div class="barcode-bars"></div>
                    <div class="barcode-text">LC2024NR78432001</div>
                </div>
            </div>
        `,
        content: `
═══════════════════════════════════════════════════════════════════
                    IRREVOCABLE DOCUMENTARY CREDIT
═══════════════════════════════════════════════════════════════════

ISSUING BANK:           ABN AMRO Bank N.V.
                        Herengracht 595, 1017 CE Amsterdam
                        SWIFT: ABNANL2A

CREDIT NUMBER:          LC-2024-NR-78432
DATE OF ISSUE:          December 15, 2024
DATE OF EXPIRY:         February 28, 2025
PLACE OF EXPIRY:        Amsterdam, Netherlands

═══════════════════════════════════════════════════════════════════

APPLICANT:              Nordic Roasters B.V.
                        Keizersgracht 126
                        1015 CW Amsterdam, Netherlands

BENEFICIARY:            Yirgacheffe Highland Exports
                        Bole Road, Kirkos Sub-City
                        Addis Ababa, Ethiopia

═══════════════════════════════════════════════════════════════════

AMOUNT:                 USD 5,000,000.00
                        (United States Dollars Five Million Only)

═══════════════════════════════════════════════════════════════════

GOODS DESCRIPTION:

Ethiopian Arabica Coffee, Washed Yirgacheffe
- Grade: AA
- Screen Size: 15+
- Maximum Moisture Content: 11.5%
- Crop Year: 2024/2025
- Quantity: 1,000 MT (+/- 3%)
- Unit Price: USD 5.00 per KG CIF Rotterdam

═══════════════════════════════════════════════════════════════════

SHIPMENT TERMS:

PORT OF LOADING:        Djibouti, Djibouti
PORT OF DISCHARGE:      Rotterdam, Netherlands
LATEST SHIPMENT:        February 15, 2025
INCOTERMS:              CIF Rotterdam
PARTIAL SHIPMENTS:      Not Allowed
TRANSSHIPMENT:          Allowed

═══════════════════════════════════════════════════════════════════

DOCUMENTS REQUIRED:

1. Commercial Invoice (3 originals)
2. Full set 3/3 original clean on board Bills of Lading
   made out to order of ABN AMRO Bank N.V.
3. Certificate of Origin issued by Ethiopian Chamber of Commerce
4. Phytosanitary Certificate
5. ICO Certificate of Origin
6. Quality and Weight Certificate from ECX or approved surveyor
7. Insurance Certificate/Policy for 110% CIF value

═══════════════════════════════════════════════════════════════════

SPECIAL CONDITIONS:

- All documents must show LC number LC-2024-NR-78432
- Coffee must be of current crop year
- Third party documents acceptable except invoice

This credit is subject to UCP 600.

═══════════════════════════════════════════════════════════════════
                         AUTHORIZED SIGNATURE
                    ABN AMRO Bank N.V. Trade Finance
═══════════════════════════════════════════════════════════════════
        `
    },
    {
        id: 'invoice',
        type: 'Commercial Invoice',
        shortType: 'INV',
        filename: 'Invoice-YHE-2024-1847.pdf',
        styled: false,
        errorLines: [
            'Grade: A',
            'Quantity: 1,028,000 KG'
        ],
        _htmlContent: `
            <div class="doc-preview doc-invoice">
                <div class="doc-watermark">INVOICE</div>
                <div class="doc-serial">NO. YHE-2024-1847</div>

                <!-- Company Header -->
                <div class="doc-header invoice-header">
                    <div class="bank-logo">
                        <div class="bank-logo-main" style="color: #166534;">YHE</div>
                        <div class="bank-logo-sub">Yirgacheffe Highland Exports</div>
                    </div>
                    <div class="bank-details">
                        Bole Road, Kirkos Sub-City<br>
                        Addis Ababa, Ethiopia<br>
                        Tel: +251 11 551 7890<br>
                        VAT: ET-TIN-0012345
                    </div>
                </div>

                <!-- Document Title -->
                <div class="doc-title">
                    <h1 style="border-color: #166534; color: #166534;">Commercial Invoice</h1>
                    <div class="doc-subtitle">Original - For Customs and Payment</div>
                </div>

                <!-- Reference Box -->
                <div class="doc-ref-box">
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">Invoice Number</span>
                        <span class="doc-ref-value">YHE-2024-1847</span>
                    </div>
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">Date</span>
                        <span class="doc-ref-value">January 20, 2025</span>
                    </div>
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">LC Reference</span>
                        <span class="doc-ref-value">LC-2024-NR-78432</span>
                    </div>
                </div>

                <!-- Parties -->
                <div class="doc-parties">
                    <div class="doc-party">
                        <div class="doc-party-label">Seller</div>
                        <div class="doc-party-name">Yirgacheffe Highland Exports</div>
                        <div class="doc-party-address">
                            Bole Road, Kirkos Sub-City<br>
                            Addis Ababa, Ethiopia
                        </div>
                    </div>
                    <div class="doc-party">
                        <div class="doc-party-label">Buyer / Consignee</div>
                        <div class="doc-party-name">Nordic Roasters B.V.</div>
                        <div class="doc-party-address">
                            Keizersgracht 126<br>
                            1015 CW Amsterdam, Netherlands<br>
                            VAT: NL123456789B01
                        </div>
                    </div>
                </div>

                <!-- Goods Description -->
                <div class="doc-section">
                    <div class="doc-section-header" style="border-color: #166534; color: #166534;">Description of Goods</div>
                    <table class="doc-table">
                        <tr>
                            <td class="label">Product</td>
                            <td class="value">Ethiopian Arabica Coffee, Washed Yirgacheffe</td>
                        </tr>
                        <tr>
                            <td class="label">Origin</td>
                            <td class="value">Yirgacheffe, Gedeo Zone, Ethiopia</td>
                        </tr>
                        <tr>
                            <td class="label">Grade</td>
                            <td class="value highlight-error">A</td>
                        </tr>
                        <tr>
                            <td class="label">Screen Size</td>
                            <td class="value">15+</td>
                        </tr>
                        <tr>
                            <td class="label">Crop Year</td>
                            <td class="value">2024/2025</td>
                        </tr>
                    </table>
                </div>

                <!-- Line Items Table -->
                <div class="doc-section">
                    <div class="doc-section-header" style="border-color: #166534; color: #166534;">Invoice Details</div>
                    <table class="doc-table invoice-items">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th style="text-align: right;">Quantity</th>
                                <th style="text-align: right;">Unit Price</th>
                                <th style="text-align: right;">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="value">Washed Yirgacheffe Grade A, Screen 15+</td>
                                <td class="value highlight-error" style="text-align: right;">1,028,000 KG<br><small>(1,028 MT)</small></td>
                                <td class="value" style="text-align: right;">USD 5.00</td>
                                <td class="value" style="text-align: right; font-weight: 600;">USD 5,140,000.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Total Amount -->
                <div class="doc-amount-box" style="background: linear-gradient(135deg, #166534 0%, #22863a 100%);">
                    <div>
                        <div class="doc-amount-label">Total Invoice Amount</div>
                        <div class="doc-amount-value">USD 5,140,000.00</div>
                    </div>
                </div>

                <!-- Shipping Details -->
                <div class="doc-section">
                    <div class="doc-section-header" style="border-color: #166534; color: #166534;">Shipping Details</div>
                    <table class="doc-table">
                        <tr>
                            <td class="label">Port of Loading</td>
                            <td class="value">Djibouti, Djibouti</td>
                        </tr>
                        <tr>
                            <td class="label">Port of Discharge</td>
                            <td class="value">Rotterdam, Netherlands</td>
                        </tr>
                        <tr>
                            <td class="label">Terms</td>
                            <td class="value">CIF Rotterdam</td>
                        </tr>
                        <tr>
                            <td class="label">Vessel</td>
                            <td class="value">MSC AURORA V.025E</td>
                        </tr>
                    </table>
                </div>

                <!-- Payment Terms -->
                <div class="doc-conditions" style="border-color: #166534;">
                    <div class="doc-conditions-title" style="color: #166534;">Payment Terms</div>
                    <ul style="color: #166534;">
                        <li>Irrevocable Letter of Credit</li>
                        <li>LC No: LC-2024-NR-78432</li>
                        <li>Issuing Bank: ABN AMRO Bank N.V.</li>
                    </ul>
                </div>

                <p style="font-size: 10px; margin-top: 24px; color: #666;">
                    Country of Origin: <strong>ETHIOPIA</strong><br>
                    We certify this invoice to be true and correct.
                </p>

                <!-- Footer with signature -->
                <div class="doc-footer">
                    <div class="doc-signature">
                        <div class="doc-signature-line">
                            <svg class="signature-svg" viewBox="0 0 150 50">
                                <path d="M10,35 Q25,15 40,30 T60,20 T85,35 T105,25 T125,32 T140,28"
                                      fill="none" stroke="#166534" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="doc-signature-name">Tadesse Bekele</div>
                        <div class="doc-signature-title">Export Manager</div>
                    </div>

                    <div class="doc-stamp">
                        <div class="doc-stamp-outer" style="border-color: #166534;">
                            <div class="doc-stamp-inner" style="border-color: #166534;">
                                <div class="doc-stamp-text" style="color: #166534;">YHE</div>
                                <div class="doc-stamp-text large" style="color: #166534;">CERTIFIED</div>
                                <div class="doc-stamp-date" style="color: #166534;">20-JAN-2025</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        content: `
═══════════════════════════════════════════════════════════════════
                       COMMERCIAL INVOICE
═══════════════════════════════════════════════════════════════════

SELLER:                                 INVOICE NO: YHE-2024-1847
Yirgacheffe Highland Exports            DATE: January 20, 2025
Bole Road, Kirkos Sub-City
Addis Ababa, Ethiopia                   LC REF: LC-2024-NR-78432
Tel: +251 11 551 7890

═══════════════════════════════════════════════════════════════════

BUYER / CONSIGNEE:
Nordic Roasters B.V.
Keizersgracht 126
1015 CW Amsterdam, Netherlands
VAT: NL123456789B01

═══════════════════════════════════════════════════════════════════

DESCRIPTION OF GOODS:

Ethiopian Arabica Coffee, Washed Yirgacheffe
Origin: Yirgacheffe, Gedeo Zone, Ethiopia
Grade: A
Screen Size: 15+
Crop Year: 2024/2025

┌─────────────────────────────────────────────────────────────────┐
│ Description              Qty            Unit Price    Amount    │
├─────────────────────────────────────────────────────────────────┤
│ Washed Yirgacheffe       1,028,000 KG   USD 5.00   USD 5,140,000│
│ Grade A, Screen 15+      (1,028 MT)                             │
└─────────────────────────────────────────────────────────────────┘

TOTAL:                              USD 5,140,000.00

═══════════════════════════════════════════════════════════════════

SHIPPING DETAILS:

PORT OF LOADING:        Djibouti, Djibouti
PORT OF DISCHARGE:      Rotterdam, Netherlands
TERMS:                  CIF Rotterdam
VESSEL:                 MSC AURORA V.025E

═══════════════════════════════════════════════════════════════════

PAYMENT TERMS:          Irrevocable Letter of Credit
                        LC No: LC-2024-NR-78432
                        Issuing Bank: ABN AMRO Bank N.V.

COUNTRY OF ORIGIN:      ETHIOPIA

═══════════════════════════════════════════════════════════════════
We certify this invoice to be true and correct.

_____________________________
Authorized Signature
Yirgacheffe Highland Exports
═══════════════════════════════════════════════════════════════════
        `
    },
    {
        id: 'bl',
        type: 'Bill of Lading',
        shortType: 'B/L',
        filename: 'BL-MSCU-DJ-2501847.pdf',
        styled: false,
        errorLines: [
            'PORT OF DISCHARGE:      Rottedam, Netherlands'
        ],
        _htmlContent: `
            <div class="doc-preview doc-bl">
                <div class="doc-watermark">ORIGINAL</div>
                <div class="doc-serial">B/L NO. MSCU-DJ-2501847</div>

                <!-- Shipping Company Header -->
                <div class="doc-header">
                    <div class="bank-logo">
                        <div class="bank-logo-main" style="color: #0077be;">MSC</div>
                        <div class="bank-logo-sub">Mediterranean Shipping Company</div>
                    </div>
                    <div class="bank-details">
                        Global Container Shipping<br>
                        Geneva, Switzerland<br>
                        www.msc.com
                    </div>
                </div>

                <!-- Document Title -->
                <div class="doc-title">
                    <h1 style="border-color: #0077be; color: #0077be;">Bill of Lading</h1>
                    <div class="doc-subtitle">For Combined Transport Shipment or Port to Port Shipment</div>
                </div>

                <!-- Reference Box -->
                <div class="doc-ref-box">
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">B/L Number</span>
                        <span class="doc-ref-value">MSCU-DJ-2501847</span>
                    </div>
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">Booking Ref</span>
                        <span class="doc-ref-value">DJ2501847</span>
                    </div>
                    <div class="doc-ref-item">
                        <span class="doc-ref-label">Shipped On Board</span>
                        <span class="doc-ref-value">January 22, 2025</span>
                    </div>
                </div>

                <!-- Parties - 3 columns for B/L -->
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div class="doc-party">
                        <div class="doc-party-label">Shipper</div>
                        <div class="doc-party-name">Yirgacheffe Highland Exports</div>
                        <div class="doc-party-address">
                            Bole Road, Kirkos Sub-City<br>
                            Addis Ababa, Ethiopia
                        </div>
                    </div>
                    <div class="doc-party">
                        <div class="doc-party-label">Consignee</div>
                        <div class="doc-party-name" style="font-size: 10px;">TO THE ORDER OF<br>ABN AMRO BANK N.V.</div>
                    </div>
                    <div class="doc-party">
                        <div class="doc-party-label">Notify Party</div>
                        <div class="doc-party-name">Nordic Roasters B.V.</div>
                        <div class="doc-party-address">
                            Keizersgracht 126<br>
                            Amsterdam, Netherlands<br>
                            Tel: +31 20 555 7890
                        </div>
                    </div>
                </div>

                <!-- Vessel & Route -->
                <div class="doc-section">
                    <div class="doc-section-header" style="border-color: #0077be; color: #0077be;">Vessel & Route</div>
                    <table class="doc-table">
                        <tr>
                            <td class="label">Vessel</td>
                            <td class="value">MSC AURORA</td>
                            <td class="label">Voyage</td>
                            <td class="value">025E</td>
                        </tr>
                        <tr>
                            <td class="label">Flag</td>
                            <td class="value">Panama</td>
                            <td class="label">Freight</td>
                            <td class="value">PREPAID</td>
                        </tr>
                        <tr>
                            <td class="label">Port of Loading</td>
                            <td class="value">Djibouti, Djibouti</td>
                            <td class="label">Port of Discharge</td>
                            <td class="value highlight-error">Rottedam, Netherlands</td>
                        </tr>
                    </table>
                </div>

                <!-- Cargo Details -->
                <div class="doc-section">
                    <div class="doc-section-header" style="border-color: #0077be; color: #0077be;">Particulars Furnished by Shipper</div>
                    <table class="doc-table">
                        <tr>
                            <td class="label">Containers</td>
                            <td class="value">55 x 20' Standard Dry</td>
                        </tr>
                        <tr>
                            <td class="label">Container Nos</td>
                            <td class="value">MSCU 7234501 - MSCU 7234555</td>
                        </tr>
                        <tr>
                            <td class="label">Seal Nos</td>
                            <td class="value">ETH-2025-8801 - ETH-2025-8855</td>
                        </tr>
                    </table>
                </div>

                <!-- Goods Description -->
                <div class="doc-section">
                    <div class="doc-section-header" style="border-color: #0077be; color: #0077be;">Description of Goods</div>
                    <div style="background: #f8f9fa; border: 1px solid #dee2e6; padding: 16px; font-size: 11px;">
                        <strong>41,120 BAGS ETHIOPIAN ARABICA COFFEE</strong><br>
                        WASHED YIRGACHEFFE GRADE AA<br>
                        SCREEN 15+<br>
                        CROP 2024/2025<br><br>
                        <table style="width: 100%; font-size: 10px;">
                            <tr>
                                <td>Net Weight:</td>
                                <td style="text-align: right;"><strong>1,028,000 KGS</strong> (1,028 MT)</td>
                            </tr>
                            <tr>
                                <td>Gross Weight:</td>
                                <td style="text-align: right;">1,048,560 KGS</td>
                            </tr>
                            <tr>
                                <td>Measurement:</td>
                                <td style="text-align: right;">1,567.5 CBM</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <!-- Clean on Board -->
                <div style="background: linear-gradient(135deg, #0077be 0%, #005a99 100%); color: white; padding: 12px 16px; margin: 16px 0; text-align: center; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">
                    SHIPPED ON BOARD - CLEAN ON BOARD<br>
                    <span style="font-size: 10px; opacity: 0.9;">Number of Original B/Ls: THREE (3/3)</span>
                </div>

                <!-- Embossed Seal -->
                <div class="doc-seal" style="bottom: 120px;">
                    <div class="doc-seal-text">MSC<br>SHIPPING<br>LINE</div>
                </div>

                <!-- Footer -->
                <div class="doc-footer">
                    <div style="font-size: 9px; color: #666;">
                        Place of Issue: Djibouti<br>
                        Date of Issue: January 22, 2025
                    </div>

                    <div class="doc-stamp">
                        <div class="doc-stamp-outer" style="border-color: #0077be;">
                            <div class="doc-stamp-inner" style="border-color: #0077be;">
                                <div class="doc-stamp-text" style="color: #0077be;">MSC</div>
                                <div class="doc-stamp-text large" style="color: #0077be;">SHIPPED</div>
                                <div class="doc-stamp-date" style="color: #0077be;">22-JAN-2025</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Barcode -->
                <div class="barcode-sim">
                    <div class="barcode-bars"></div>
                    <div class="barcode-text">MSCUDJ2501847</div>
                </div>
            </div>
        `,
        content: `
═══════════════════════════════════════════════════════════════════
                         BILL OF LADING
              FOR COMBINED TRANSPORT SHIPMENT
═══════════════════════════════════════════════════════════════════

MSC - MEDITERRANEAN SHIPPING COMPANY

B/L NUMBER:             MSCU-DJ-2501847
BOOKING REF:            DJ2501847

═══════════════════════════════════════════════════════════════════

SHIPPER:
Yirgacheffe Highland Exports
Bole Road, Kirkos Sub-City
Addis Ababa, Ethiopia

CONSIGNEE:
TO THE ORDER OF ABN AMRO BANK N.V.

NOTIFY PARTY:
Nordic Roasters B.V.
Keizersgracht 126
1015 CW Amsterdam, Netherlands
Tel: +31 20 555 7890

═══════════════════════════════════════════════════════════════════

VESSEL:                 MSC AURORA
VOYAGE:                 025E
FLAG:                   Panama

PORT OF LOADING:        Djibouti, Djibouti
PORT OF DISCHARGE:      Rottedam, Netherlands

═══════════════════════════════════════════════════════════════════

PARTICULARS FURNISHED BY SHIPPER:

Containers:             55 x 20' DRY
Container Nos:          MSCU 7234501 - MSCU 7234555
Seal Nos:               ETH-2025-8801 - ETH-2025-8855

DESCRIPTION OF GOODS:
41,120 BAGS ETHIOPIAN ARABICA COFFEE
WASHED YIRGACHEFFE GRADE AA
SCREEN 15+
CROP 2024/2025

Net Weight:             1,028,000 KGS (1,028 MT)
Gross Weight:           1,048,560 KGS
Measurement:            1,567.5 CBM

═══════════════════════════════════════════════════════════════════

FREIGHT:                PREPAID
NUMBER OF ORIGINAL B/Ls: THREE (3/3)

SHIPPED ON BOARD DATE:  January 22, 2025

LADEN ON BOARD THE VESSEL
Clean on Board

═══════════════════════════════════════════════════════════════════
Place of Issue:         Djibouti
Date of Issue:          January 22, 2025

                    [CARRIER'S STAMP]
                    _______________________
                    As Agent for the Carrier
                    MSC Mediterranean Shipping Company S.A.
═══════════════════════════════════════════════════════════════════
        `
    },
    {
        id: 'coo',
        type: 'Certificate of Origin',
        shortType: 'COO',
        filename: 'COO-ETH-2025-00847.pdf',
        errorLines: [],
        content: `
═══════════════════════════════════════════════════════════════════
              CERTIFICATE OF ORIGIN
═══════════════════════════════════════════════════════════════════

ETHIOPIAN CHAMBER OF COMMERCE AND SECTORAL ASSOCIATIONS
Addis Ababa, Ethiopia

Certificate No:         ETH-CO-2025-00847
Date of Issue:          January 18, 2025

═══════════════════════════════════════════════════════════════════

1. EXPORTER:
   Yirgacheffe Highland Exports
   Bole Road, Kirkos Sub-City
   Addis Ababa, Ethiopia

2. CONSIGNEE:
   Nordic Roasters B.V.
   Keizersgracht 126
   1015 CW Amsterdam, Netherlands

3. COUNTRY OF ORIGIN:
   FEDERAL DEMOCRATIC REPUBLIC OF ETHIOPIA

4. TRANSPORT DETAILS:
   Departure: Djibouti, Djibouti
   Destination: Rotterdam, Netherlands
   Vessel: MSC AURORA V.025E

5. DESCRIPTION OF GOODS:
   Ethiopian Arabica Coffee
   Washed Yirgacheffe
   Crop Year: 2024/2025

6. QUANTITY:
   41,120 Bags (25 KG each)
   Net Weight: 1,028,000 KG (1,028 MT)

7. INVOICE REFERENCE:
   Invoice No: YHE-2024-1847
   LC Reference: LC-2024-NR-78432

═══════════════════════════════════════════════════════════════════

THE UNDERSIGNED AUTHORITY CERTIFIES THAT THE
GOODS DESCRIBED ABOVE ORIGINATE IN ETHIOPIA

═══════════════════════════════════════════════════════════════════

                    [OFFICIAL CHAMBER SEAL]

        _________________________________
        Authorized Signatory
        Ethiopian Chamber of Commerce
        and Sectoral Associations
═══════════════════════════════════════════════════════════════════
        `
    },
    {
        id: 'packing',
        type: 'Packing List',
        shortType: 'PKG',
        filename: 'PackingList-YHE-1847.pdf',
        errorLines: [],
        content: `
═══════════════════════════════════════════════════════════════════
                         PACKING LIST
═══════════════════════════════════════════════════════════════════

SHIPPER:                                REF: YHE-PL-2024-1847
Yirgacheffe Highland Exports            DATE: January 19, 2025
Bole Road, Kirkos Sub-City
Addis Ababa, Ethiopia                   LC REF: LC-2024-NR-78432
                                        INV REF: YHE-2024-1847

═══════════════════════════════════════════════════════════════════

CONSIGNEE:
Nordic Roasters B.V.
Keizersgracht 126
1015 CW Amsterdam, Netherlands

═══════════════════════════════════════════════════════════════════

PACKING DETAILS:

Description:            Ethiopian Arabica Coffee
                        Washed Yirgacheffe Grade AA
                        Crop 2024/2025

Package Type:           Jute Bags (GrainPro lined)
Weight per Bag:         25 KG (Net)
Total Bags:             41,120

┌─────────────────────────────────────────────────────────────────┐
│ Total Packages:        41,120 Bags                              │
│ Total Net Weight:      1,028,000 KG (1,028 MT)                  │
│ Total Gross Weight:    1,048,560 KG                             │
│ Total Volume:          1,567.5 CBM                              │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

CONTAINER DETAILS:

Total Containers:       55 x 20' Standard Dry
Container Nos:          MSCU 7234501 - MSCU 7234555
Seal Numbers:           ETH-2025-8801 - ETH-2025-8855
Bags per Container:     748 (average)

═══════════════════════════════════════════════════════════════════

MARKS AND NUMBERS:

NORDIC ROASTERS B.V.
ROTTERDAM
WASHED YIRGACHEFFE AA
CONTRACT: LC-2024-NR-78432
NET: 25 KG EACH

═══════════════════════════════════════════════════════════════════
Prepared by: _______________
Checked by:  _______________
Date: January 19, 2025
═══════════════════════════════════════════════════════════════════
        `
    },
    {
        id: 'quality',
        type: 'Quality Certificate',
        shortType: 'QC',
        filename: 'QC-ECX-2025-4521.pdf',
        errorLines: [
            'Moisture Content:       11.8%'
        ],
        content: `
═══════════════════════════════════════════════════════════════════
                 QUALITY AND WEIGHT CERTIFICATE
═══════════════════════════════════════════════════════════════════

ETHIOPIA COMMODITY EXCHANGE
Quality Certification Division
Addis Ababa, Ethiopia

Certificate No:         ECX-QC-2025-4521
Date of Issue:          January 17, 2025

═══════════════════════════════════════════════════════════════════

EXPORTER:
Yirgacheffe Highland Exports
Bole Road, Addis Ababa, Ethiopia

BUYER:
Nordic Roasters B.V.
Amsterdam, Netherlands

═══════════════════════════════════════════════════════════════════

PRODUCT DETAILS:

Product:                Ethiopian Arabica Coffee
Origin:                 Yirgacheffe, Gedeo Zone
Process:                Washed
Crop Year:              2024/2025

═══════════════════════════════════════════════════════════════════

QUALITY ANALYSIS RESULTS:

Grade Classification:   AA

Screen Analysis:
  Above Screen 15:      98.2%
  Screen 14:            1.5%
  Below Screen 14:      0.3%

Moisture Content:       11.8%

Defect Count:           8 per 300g sample
                        (Grade AA Standard: Maximum 15 defects)

Cup Quality Score:      86.5 points
  Aroma:                8.5
  Flavor:               8.5
  Acidity:              9.0
  Body:                 8.5
  Balance:              8.5
  Overall:              8.5

Flavor Profile:         Floral, citrus, bergamot,
                        light body, bright acidity

═══════════════════════════════════════════════════════════════════

WEIGHT VERIFICATION:

Declared Weight:        1,028,000 KG
Verified Weight:        1,027,485 KG
Variance:               -0.05%

═══════════════════════════════════════════════════════════════════

                    [ECX OFFICIAL SEAL]

        _________________________________
        Senior Quality Inspector
        Ethiopia Commodity Exchange

This certificate is valid only for the
specific lot inspected.
═══════════════════════════════════════════════════════════════════
        `
    }
];

// ============================================
// Lucas Pre-computed Response
// ============================================
// This simulates what Lucas would return after analyzing
// the 6 documents above. In production, this comes from Mastra.

const LUCAS_RESPONSE = {
    summary: "USD 5.14M coffee shipment has 5 issues blocking LC payment.",
    quickCheck: "Reviewed 6 documents for 1,028 MT Yirgacheffe → Rotterdam. Found critical discrepancies.",
    verdict: "NO-GO",
    score: 18,
    criticalErrors: [
        {
            label: "GRADE MISMATCH",
            description: "LC requires Grade AA but Invoice shows Grade A. Quality certificate confirms AA — Invoice must be corrected before presentation."
        },
        {
            label: "MOISTURE EXCEEDS SPECIFICATION",
            description: "Quality certificate shows 11.8% moisture. LC maximum is 11.5%. Bank will reject, buyer may refuse the 1,028 MT shipment."
        },
        {
            label: "PORT NAME DISCREPANCY",
            description: "Bill of Lading shows \"Rottedam\" — should be \"Rotterdam\". Banks reject documents with port name errors."
        },
        {
            label: "MISSING ICO CERTIFICATE",
            description: "LC requires ICO Certificate of Origin. Not included in document set. Required for EU coffee imports over 60 bags."
        }
    ],
    warnings: [
        {
            label: "QUANTITY AT TOLERANCE LIMIT",
            description: "Invoice shows 1,028 MT vs LC quantity 1,000 MT. Within +3% tolerance (max 1,030 MT) but leaves only 2 MT margin."
        }
    ],
    actions: [
        "Get amended Invoice showing Grade AA (matches LC and Quality Cert)",
        "Request corrected Bill of Lading with \"Rotterdam\" spelling",
        "Obtain ICO Certificate of Origin from Ethiopian Coffee Authority",
        "Discuss moisture issue with Nordic Roasters — may need USD 140K price adjustment"
    ],
    closing: "4 critical issues must be resolved before bank presentation. At USD 5.14M, the moisture rejection risk alone justifies renegotiation."
};
