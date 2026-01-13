// ============================================
// Multi-Scenario Demo Data
// ============================================
// Three trade scenarios for Lucas Demo:
// 1. Coffee Export (Ethiopia → Netherlands) - 6 docs, Entry Level
// 2. Crude Oil (UAE → India) - 18 docs, Expert Level
// 3. Electronics Import (China → Brazil) - 10 docs, Mid Level

const SCENARIOS = {
    // ============================================
    // SCENARIO 1: COFFEE EXPORT
    // ============================================
    coffee: {
        id: 'coffee',
        name: 'Coffee Export',
        subtitle: 'Ethiopian Arabica to Europe',
        icon: '☕',
        route: { from: 'Ethiopia', to: 'Netherlands' },
        commodity: 'Washed Yirgacheffe Coffee',
        value: 'USD 5.14M',
        valueNumeric: 5140000,
        documentCount: 6,
        level: 'entry',
        levelLabel: 'Entry Level',
        tags: [
            { label: 'Coffee Export', icon: 'coffee' },
            { label: 'Ethiopia → Netherlands', icon: 'route' },
            { label: 'USD 5.14M', icon: 'value' }
        ],
        documents: [
            {
                id: 'lc',
                type: 'Letter of Credit',
                shortType: 'LC',
                filename: 'LC-2024-NR-78432.pdf',
                errorLines: ['Maximum Moisture Content: 11.5%', 'ICO Certificate of Origin'],
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
                errorLines: ['Grade: A', 'Quantity: 1,028,000 KG'],
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
                errorLines: ['PORT OF DISCHARGE:      Rottedam, Netherlands'],
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
                errorLines: ['Moisture Content:       11.8%'],
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
        ],
        lucasResponse: {
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
        }
    },

    // ============================================
    // SCENARIO 2: CRUDE OIL - THE WOW FACTOR
    // ============================================
    crude_oil: {
        id: 'crude_oil',
        name: 'Crude Oil',
        subtitle: 'Murban Crude to India',
        icon: '🛢️',
        route: { from: 'UAE', to: 'India' },
        commodity: 'Murban Crude Oil',
        value: 'USD 52.8M',
        valueNumeric: 52800000,
        documentCount: 18,
        level: 'expert',
        levelLabel: 'Expert Level',
        tags: [
            { label: 'Crude Oil', icon: 'oil' },
            { label: 'UAE → India', icon: 'route' },
            { label: 'USD 52.8M', icon: 'value' }
        ],
        documents: [
            {
                id: 'lc',
                type: 'Letter of Credit',
                shortType: 'LC',
                filename: 'LC-ENBD-2025-MUR-0847.pdf',
                errorLines: ['API Gravity: Minimum 39.5°', 'Laycan: January 15-20, 2025'],
                content: `
═══════════════════════════════════════════════════════════════════
                    IRREVOCABLE DOCUMENTARY CREDIT
═══════════════════════════════════════════════════════════════════

ISSUING BANK:           Emirates NBD PJSC
                        Baniyas Road, Deira
                        P.O. Box 777, Dubai, UAE
                        SWIFT: EABORABC

CREDIT NUMBER:          LC-ENBD-2025-MUR-0847
DATE OF ISSUE:          January 5, 2025
DATE OF EXPIRY:         February 15, 2025
PLACE OF EXPIRY:        Dubai, UAE

═══════════════════════════════════════════════════════════════════

APPLICANT:              Reliance Industries Limited
                        Maker Chambers IV, 222 Nariman Point
                        Mumbai 400 021, India
                        CIN: L17110MH1973PLC019786

BENEFICIARY:            ADNOC Trading
                        ADNOC HQ, Corniche Road
                        P.O. Box 898, Abu Dhabi, UAE

═══════════════════════════════════════════════════════════════════

AMOUNT:                 USD 52,800,000.00 (+/- 5%)
                        (United States Dollars Fifty Two Million
                        Eight Hundred Thousand Only)

═══════════════════════════════════════════════════════════════════

GOODS DESCRIPTION:

MURBAN CRUDE OIL
- Volume: 600,000 BBL (+/- 5%)
- API Gravity: Minimum 39.5°
- Sulfur Content: Maximum 0.80% by weight
- BS&W: Maximum 0.5%
- RVP: Maximum 7.0 psi
- Origin: United Arab Emirates

PRICE: USD 88.00 per Barrel, FOB Ruwais

═══════════════════════════════════════════════════════════════════

SHIPMENT TERMS:

LOAD PORT:              Ruwais Terminal, Abu Dhabi, UAE
DISCHARGE PORT:         Jamnagar, Gujarat, India
LAYCAN:                 January 15-20, 2025
INCOTERMS:              FOB Ruwais
PARTIAL SHIPMENTS:      Not Allowed
TRANSSHIPMENT:          Not Allowed

═══════════════════════════════════════════════════════════════════

DOCUMENTS REQUIRED:

1. Commercial Invoice (3 originals + 3 copies)
2. Full set 3/3 original clean on board Bills of Lading
   made out to order of Emirates NBD PJSC, notify applicant
3. Certificate of Origin issued by Abu Dhabi Chamber
4. Certificate of Quality issued by independent inspector
5. Certificate of Quantity issued by independent inspector
6. Insurance Certificate for 110% CIF value
7. Vessel Nomination accepted by seller
8. Charter Party (if applicable)
9. Notice of Readiness
10. Ullage Reports (before and after loading)
11. Timesheet
12. Letter of Indemnity (if required)
13. Cargo Manifest
14. Tank Inspection Certificate
15. Q88 Vessel Questionnaire
16. MSDS (Material Safety Data Sheet)

═══════════════════════════════════════════════════════════════════

SPECIAL CONDITIONS:

- All documents must reference LC number LC-ENBD-2025-MUR-0847
- Independent inspector: SGS, Intertek, or Saybolt acceptable
- Vessel must be approved by both parties and P&I Club rated
- Bill of Lading date must be within laycan period
- Quality/Quantity determined by shore tank measurements at load port

This credit is subject to UCP 600.

═══════════════════════════════════════════════════════════════════
                         AUTHORIZED SIGNATURE
                    Emirates NBD Trade Finance Division
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'invoice',
                type: 'Commercial Invoice',
                shortType: 'INV',
                filename: 'INV-ADNOC-2025-0847.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                       COMMERCIAL INVOICE
═══════════════════════════════════════════════════════════════════

SELLER:                                 INVOICE NO: ADNOC-INV-2025-0847
ADNOC Trading                           DATE: January 20, 2025
ADNOC HQ, Corniche Road
P.O. Box 898, Abu Dhabi, UAE            LC REF: LC-ENBD-2025-MUR-0847
TRN: 100234567890003

═══════════════════════════════════════════════════════════════════

BUYER:
Reliance Industries Limited
Maker Chambers IV, 222 Nariman Point
Mumbai 400 021, India
GSTIN: 27AAACR5055K1ZA

═══════════════════════════════════════════════════════════════════

DESCRIPTION OF GOODS:

MURBAN CRUDE OIL
Origin: United Arab Emirates (Ruwais Terminal)
Quality: As per Certificate of Quality ref SGS-QC-2025-0847

┌─────────────────────────────────────────────────────────────────┐
│ Description              Volume         Unit Price    Amount    │
├─────────────────────────────────────────────────────────────────┤
│ Murban Crude Oil         599,800 BBL    USD 88.00   USD 52,782,400│
│ API 39.2°, Sulfur 0.78%                                         │
│ Loaded: MT ARABIAN STAR I                                       │
│ B/L Date: January 19, 2025                                      │
└─────────────────────────────────────────────────────────────────┘

TOTAL INVOICE AMOUNT:                   USD 52,782,400.00

═══════════════════════════════════════════════════════════════════

SHIPPING DETAILS:

LOAD PORT:              Ruwais Terminal, Abu Dhabi, UAE
DISCHARGE PORT:         Jamnagar, Gujarat, India
VESSEL:                 MT ARABIAN STAR I
TERMS:                  FOB Ruwais
B/L NUMBER:             RUW-JAM-2025-0847
B/L DATE:               January 19, 2025

═══════════════════════════════════════════════════════════════════

PAYMENT TERMS:          Irrevocable Letter of Credit
                        LC No: LC-ENBD-2025-MUR-0847
                        Issuing Bank: Emirates NBD PJSC

BANK DETAILS:
Bank Name:              First Abu Dhabi Bank
Account:                AE070351234567890123456
SWIFT:                  NBABORC

═══════════════════════════════════════════════════════════════════
We certify this invoice to be true and correct.

_____________________________
Authorized Signature
ADNOC Trading
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'bl',
                type: 'Bill of Lading',
                shortType: 'B/L',
                filename: 'BL-RUW-JAM-2025-0847.pdf',
                errorLines: ['VESSEL:                 MT ARABIAN STAR I', 'LADEN ON BOARD:         January 19, 2025'],
                content: `
═══════════════════════════════════════════════════════════════════
                         BILL OF LADING
                    FOR TANKER SHIPMENT
═══════════════════════════════════════════════════════════════════

ARABIAN TANKERS LLC
Dubai Maritime City, UAE

B/L NUMBER:             RUW-JAM-2025-0847
BOOKING REF:            AT-2025-0198

═══════════════════════════════════════════════════════════════════

SHIPPER:
ADNOC Trading
ADNOC HQ, Corniche Road
P.O. Box 898, Abu Dhabi, UAE

CONSIGNEE:
TO THE ORDER OF EMIRATES NBD PJSC

NOTIFY PARTY:
Reliance Industries Limited
Maker Chambers IV, 222 Nariman Point
Mumbai 400 021, India
Tel: +91 22 3555 5000

═══════════════════════════════════════════════════════════════════

VESSEL:                 MT ARABIAN STAR I
IMO NUMBER:             9876543
FLAG:                   Marshall Islands
CALL SIGN:              V7AB9

PORT OF LOADING:        Ruwais Terminal, Abu Dhabi, UAE
PORT OF DISCHARGE:      Jamnagar, Gujarat, India

═══════════════════════════════════════════════════════════════════

PARTICULARS DECLARED BY SHIPPER:

CARGO:                  MURBAN CRUDE OIL
Quantity:               599,800 BARRELS
                        (Approximately 85,000 Metric Tons)

Gross/Net:              599,800 BBL
API Gravity:            39.2° @ 60°F
Temperature:            95°F at loading

Tank Distribution:
  2C: 150,000 BBL
  3C: 150,000 BBL
  4C: 149,900 BBL
  5C: 149,900 BBL

═══════════════════════════════════════════════════════════════════

FREIGHT:                PREPAID AS PER CHARTER PARTY
NUMBER OF ORIGINAL B/Ls: THREE (3/3)

LADEN ON BOARD:         January 19, 2025
LOADING COMPLETED:      22:00 HRS LOCAL TIME

CLEAN ON BOARD
SHIPPED IN APPARENT GOOD ORDER AND CONDITION

═══════════════════════════════════════════════════════════════════
Place of Issue:         Ruwais, UAE
Date of Issue:          January 20, 2025

                    [MASTER'S STAMP]
                    _______________________
                    Captain Ahmed Al-Rashid
                    Master, MT ARABIAN STAR I
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'coo',
                type: 'Certificate of Origin',
                shortType: 'COO',
                filename: 'COO-ADCC-2025-0847.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                    CERTIFICATE OF ORIGIN
═══════════════════════════════════════════════════════════════════

ABU DHABI CHAMBER OF COMMERCE & INDUSTRY
P.O. Box 662, Abu Dhabi, UAE

Certificate No:         ADCC-CO-2025-0847
Date of Issue:          January 18, 2025

═══════════════════════════════════════════════════════════════════

1. EXPORTER:
   ADNOC Trading
   ADNOC HQ, Corniche Road
   P.O. Box 898, Abu Dhabi, UAE
   Trade License: CN-1234567

2. CONSIGNEE:
   Reliance Industries Limited
   Maker Chambers IV, 222 Nariman Point
   Mumbai 400 021, India

3. COUNTRY OF ORIGIN:
   UNITED ARAB EMIRATES

4. TRANSPORT DETAILS:
   Port of Loading: Ruwais Terminal, Abu Dhabi
   Port of Discharge: Jamnagar, Gujarat, India
   Vessel: MT ARABIAN STAR I

5. DESCRIPTION OF GOODS:
   MURBAN CRUDE OIL
   Produced at: ADNOC Onshore Fields, Abu Dhabi
   Processed at: Ruwais Terminal

6. QUANTITY:
   599,800 Barrels (approximately 85,000 MT)

7. COMMERCIAL REFERENCES:
   Invoice No: ADNOC-INV-2025-0847
   LC Reference: LC-ENBD-2025-MUR-0847

═══════════════════════════════════════════════════════════════════

THE ABU DHABI CHAMBER OF COMMERCE & INDUSTRY HEREBY
CERTIFIES THAT THE GOODS DESCRIBED ABOVE ORIGINATE IN
THE UNITED ARAB EMIRATES

═══════════════════════════════════════════════════════════════════

                    [OFFICIAL CHAMBER SEAL]

        _________________________________
        Authorized Signatory
        Abu Dhabi Chamber of Commerce & Industry

Verification: adcc.ae/verify/2025-0847
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'quality',
                type: 'Certificate of Quality',
                shortType: 'COQ',
                filename: 'SGS-COQ-2025-0847.pdf',
                errorLines: ['API Gravity @ 60°F:     39.2°'],
                content: `
═══════════════════════════════════════════════════════════════════
                    CERTIFICATE OF QUALITY
═══════════════════════════════════════════════════════════════════

SGS GULF LIMITED
Inspection & Verification Services
P.O. Box 2290, Abu Dhabi, UAE

Certificate No:         SGS-COQ-2025-0847
Date of Issue:          January 20, 2025
Sample Date:            January 19, 2025

═══════════════════════════════════════════════════════════════════

CLIENT:                 ADNOC Trading
BUYER:                  Reliance Industries Limited
CARGO:                  MURBAN CRUDE OIL
VESSEL:                 MT ARABIAN STAR I
TERMINAL:               Ruwais, Abu Dhabi, UAE

═══════════════════════════════════════════════════════════════════

QUALITY ANALYSIS RESULTS:

TEST                            RESULT          SPECIFICATION
────────────────────────────────────────────────────────────────
API Gravity @ 60°F:             39.2°           Min 39.5°
Density @ 15°C:                 0.8291 g/ml     Report
Sulfur Content:                 0.78% wt        Max 0.80%
Water Content:                  0.12% vol       Max 0.50%
Sediment:                       0.02% wt        Max 0.10%
BS&W:                           0.14%           Max 0.50%
Salt Content:                   8.2 PTB         Max 15 PTB
Reid Vapor Pressure:            5.8 psi         Max 7.0 psi
Pour Point:                     -15°C           Report
Viscosity @ 40°C:               4.2 cSt         Report
Hydrogen Sulfide:               2.1 ppm         Max 5 ppm
Mercaptan Sulfur:               18 ppm          Max 50 ppm

═══════════════════════════════════════════════════════════════════

SAMPLING DETAILS:

Sample Source:          Shore Tank TK-401, Ruwais Terminal
Sample Method:          Running Sample per ASTM D4057
Sample Time:            08:00-10:00 hrs, January 19, 2025
Lab Reference:          SGS-AUH-LAB-2025-0198

═══════════════════════════════════════════════════════════════════

REMARKS:

All tests performed in accordance with ASTM/IP standards.
This certificate relates only to the sample(s) tested.
Results reported on an as-received basis.

═══════════════════════════════════════════════════════════════════

                    [SGS INSPECTION STAMP]

        _________________________________
        Dr. Khalid Rahman
        Senior Petroleum Inspector
        SGS Gulf Limited

Verify: sgs.com/verify/COQ-2025-0847
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'quantity',
                type: 'Certificate of Quantity',
                shortType: 'COQ-QTY',
                filename: 'SGS-COQTY-2025-0847.pdf',
                errorLines: ['Vessel Ullage:          599,800 BBL'],
                content: `
═══════════════════════════════════════════════════════════════════
                    CERTIFICATE OF QUANTITY
═══════════════════════════════════════════════════════════════════

SGS GULF LIMITED
Inspection & Verification Services
P.O. Box 2290, Abu Dhabi, UAE

Certificate No:         SGS-COQTY-2025-0847
Date of Issue:          January 20, 2025

═══════════════════════════════════════════════════════════════════

CLIENT:                 ADNOC Trading
BUYER:                  Reliance Industries Limited
CARGO:                  MURBAN CRUDE OIL
VESSEL:                 MT ARABIAN STAR I
TERMINAL:               Ruwais, Abu Dhabi, UAE

═══════════════════════════════════════════════════════════════════

QUANTITY DETERMINATION:

SHORE TANK MEASUREMENTS:
────────────────────────────────────────────────────────────────
Tank Number         Before Loading      After Loading    Delivered
────────────────────────────────────────────────────────────────
TK-401              485,200 BBL         32,750 BBL      452,450 BBL
TK-402              180,000 BBL         30,000 BBL      150,000 BBL
────────────────────────────────────────────────────────────────
TOTAL SHORE:                                            602,450 BBL

VESSEL ULLAGE MEASUREMENTS:
────────────────────────────────────────────────────────────────
Vessel Ullage:          599,800 BBL
Temperature:            95°F
API @ 60°F:             39.2°
VCF Applied:            0.9842
GSV @ 60°F:             599,800 BBL

═══════════════════════════════════════════════════════════════════

QUANTITY SUMMARY:

Shore Tank Figure:      602,450 BBL
Vessel Ullage:          599,800 BBL
────────────────────────────────────────────────────────────────
Difference:             2,650 BBL (0.44%)

INVOICED QUANTITY:      599,800 BBL
(Based on vessel ullage as per contract)

═══════════════════════════════════════════════════════════════════

MEASUREMENT DETAILS:

Shore Gauging:          Automatic Tank Gauging (Honeywell Enraf)
Vessel Gauging:         Manual UTI with temperature sensors
Calibration Tables:     API MPMS Chapter 2
Volume Calculation:     API MPMS Chapter 12

Witness:                Reliance Industries Representative
                        Mr. Rajesh Sharma

═══════════════════════════════════════════════════════════════════

                    [SGS INSPECTION STAMP]

        _________________________________
        Ahmed Al-Farsi
        Senior Cargo Inspector
        SGS Gulf Limited
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'insurance',
                type: 'Insurance Certificate',
                shortType: 'INS',
                filename: 'INS-MARSH-2025-0847.pdf',
                errorLines: ['Vessel: ARABIAN STAR'],
                content: `
═══════════════════════════════════════════════════════════════════
                    MARINE CARGO INSURANCE CERTIFICATE
═══════════════════════════════════════════════════════════════════

MARSH UAE
Al Fattan Currency House, Tower 1
DIFC, Dubai, UAE

Certificate No:         MARSH-MC-2025-0847
Policy No:              MCP-2025-UAE-4521
Date of Issue:          January 15, 2025

═══════════════════════════════════════════════════════════════════

ASSURED:                ADNOC Trading
                        and/or Reliance Industries Limited
                        and/or their respective assigns

═══════════════════════════════════════════════════════════════════

PARTICULARS OF SHIPMENT:

Vessel: ARABIAN STAR
From:                   Ruwais Terminal, Abu Dhabi, UAE
To:                     Jamnagar, Gujarat, India
Sailing Date:           January 19, 2025 (approx.)

DESCRIPTION OF CARGO:
MURBAN CRUDE OIL
Quantity:               600,000 Barrels (+/- 5%)

═══════════════════════════════════════════════════════════════════

SUM INSURED:            USD 58,060,640.00
                        (110% of Invoice Value)

Invoice Value:          USD 52,782,400.00
Plus 10%:               USD  5,278,240.00

═══════════════════════════════════════════════════════════════════

CONDITIONS OF INSURANCE:

Coverage:               Institute Cargo Clauses (A) - 1/1/2009
                        Institute War Clauses (Cargo) - 1/1/2009
                        Institute Strikes Clauses (Cargo) - 1/1/2009

Additional Covers:
- Terrorism as per LMA5065
- Pollution Liability (Sudden & Accidental)
- General Average and Salvage Charges

Deductible:             NIL for Total Loss
                        USD 100,000 each and every claim

═══════════════════════════════════════════════════════════════════

CLAIMS:

In the event of loss or damage, notify immediately:
MARSH Claims Department
Tel: +971 4 306 0100
Email: claims.uae@marsh.com

Survey Agents: McLarens UAE

═══════════════════════════════════════════════════════════════════

UNDERWRITERS:
- Lloyd's of London (60%)
- AIG UAE (25%)
- ADNIC (15%)

═══════════════════════════════════════════════════════════════════

                    [MARSH STAMP & SEAL]

        _________________________________
        Sarah Al-Mahmoud
        Marine Practice Leader
        Marsh UAE
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'nomination',
                type: 'Vessel Nomination',
                shortType: 'NOM',
                filename: 'VNOM-RIL-2025-0847.pdf',
                errorLines: ['Vessel Name:            MT ARABIAN STAR'],
                content: `
═══════════════════════════════════════════════════════════════════
                    VESSEL NOMINATION
═══════════════════════════════════════════════════════════════════

FROM:                   Reliance Industries Limited
                        Shipping Department
                        Mumbai, India

TO:                     ADNOC Trading
                        Abu Dhabi, UAE

DATE:                   January 10, 2025
REF:                    RIL-VNOM-2025-0847

═══════════════════════════════════════════════════════════════════

RE: LC-ENBD-2025-MUR-0847
    CONTRACT: ADNOC-RIL-2025-MUR-001

═══════════════════════════════════════════════════════════════════

We hereby nominate the following vessel for the captioned
shipment:

VESSEL PARTICULARS:

Vessel Name:            MT ARABIAN STAR
IMO Number:             9876543
Flag:                   Marshall Islands
Built:                  2018
DWT:                    115,000 MT
LOA:                    250.0 m
Beam:                   44.0 m
Draft:                  15.2 m

CLASSIFICATION:
Class Society:          Lloyd's Register
Class Notation:         +100A1, Double Hull Oil Tanker

P&I CLUB:
Club:                   Gard P&I (Bermuda) Ltd
Entry Date:             January 1, 2018
Coverage:               USD 1 Billion

═══════════════════════════════════════════════════════════════════

ESTIMATED SCHEDULE:

ETA Ruwais:             January 15, 2025
Laycan:                 January 15-20, 2025
ETD Ruwais:             January 20, 2025
ETA Jamnagar:           January 25, 2025

═══════════════════════════════════════════════════════════════════

MASTER:
Name:                   Captain Ahmed Al-Rashid
Nationality:            UAE
License:                UAE Master Unlimited

OWNERS:
Arabian Tankers LLC
Dubai Maritime City, UAE

CHARTERERS:
Reliance Global Shipping
Under Time Charter from Arabian Tankers LLC

═══════════════════════════════════════════════════════════════════

Please confirm acceptance of this nomination.

_____________________________
Authorized Signature
Reliance Industries Limited
Shipping Department
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'charterparty',
                type: 'Charter Party',
                shortType: 'C/P',
                filename: 'CP-AT-RIL-2025-0847.pdf',
                errorLines: ['Laycan:                 January 15-20, 2025', 'Demurrage Rate:         USD 45,000 per day'],
                content: `
═══════════════════════════════════════════════════════════════════
                    CHARTER PARTY
                    (SHELLVOY 6 FORM)
═══════════════════════════════════════════════════════════════════

PART I - FIXTURE RECAP

Date:                   January 8, 2025
Reference:              CP-AT-RIL-2025-0847

═══════════════════════════════════════════════════════════════════

1. OWNERS:              Arabian Tankers LLC
                        Dubai Maritime City, UAE

2. CHARTERERS:          Reliance Global Shipping
                        (for account of Reliance Industries Ltd)
                        Mumbai, India

3. VESSEL:              MT ARABIAN STAR I
   IMO:                 9876543
   Flag:                Marshall Islands
   DWT:                 115,000 MT
   Built:               2018

═══════════════════════════════════════════════════════════════════

4. CARGO:               Murban Crude Oil
   Quantity:            600,000 BBL (+/- 5%)

5. LOAD PORT:           Ruwais Terminal, Abu Dhabi, UAE
   1 Safe Berth, 1 Safe Port

6. DISCHARGE PORT:      Jamnagar, Gujarat, India
   1 Safe Berth, 1 Safe Port

═══════════════════════════════════════════════════════════════════

7. LAYCAN:              January 15-20, 2025

8. FREIGHT:             Lumpsum USD 850,000
                        Payable within 5 banking days of B/L date

9. LAYTIME:
   Loading:             36 hours SHINC
   Discharging:         36 hours SHINC

10. DEMURRAGE RATE:     USD 45,000 per day pro rata
    DESPATCH:           USD 22,500 per day (half demurrage)

═══════════════════════════════════════════════════════════════════

11. NOTICES:
    Loading:            72/48/24 hours
    Discharging:        72/48/24 hours

12. NOR VALIDITY:       NOR to be tendered WIFPON, WIBON, WCCON
                        Between 06:00-18:00 local time

13. LAYTIME COMMENCEMENT: 6 hours after valid NOR or upon
                          vessel's arrival at berth, whichever first

═══════════════════════════════════════════════════════════════════

GOVERNING LAW:          English Law
ARBITRATION:            London (LMAA Terms)

═══════════════════════════════════════════════════════════════════

For and on behalf of          For and on behalf of
OWNERS:                       CHARTERERS:

_____________________         _____________________
Arabian Tankers LLC           Reliance Global Shipping
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'nor',
                type: 'Notice of Readiness',
                shortType: 'NOR',
                filename: 'NOR-AS1-RUW-2025.pdf',
                errorLines: ['DATE/TIME:              January 21, 2025, 08:00 hrs'],
                content: `
═══════════════════════════════════════════════════════════════════
                    NOTICE OF READINESS
═══════════════════════════════════════════════════════════════════

VESSEL:                 MT ARABIAN STAR I
IMO:                    9876543
FLAG:                   Marshall Islands

═══════════════════════════════════════════════════════════════════

TO:                     ADNOC Trading
                        Terminal Operations
                        Ruwais, Abu Dhabi, UAE

FROM:                   Captain Ahmed Al-Rashid
                        Master, MT ARABIAN STAR I

DATE/TIME:              January 21, 2025, 08:00 hrs
POSITION:               Ruwais Anchorage, UAE

═══════════════════════════════════════════════════════════════════

NOTICE IS HEREBY GIVEN THAT:

The vessel MT ARABIAN STAR I has arrived at Ruwais Anchorage
and is in all respects ready to load cargo of:

MURBAN CRUDE OIL
Quantity: 600,000 BBL (+/- 5%)

as per Charter Party dated January 8, 2025
Reference: CP-AT-RIL-2025-0847

═══════════════════════════════════════════════════════════════════

VESSEL STATUS:

- Vessel is in every way fit to receive cargo
- All cargo tanks cleaned and inspected
- Inert gas system operational
- All safety equipment in order
- Valid certificates on board
- Free pratique granted
- Customs cleared

═══════════════════════════════════════════════════════════════════

TIME TENDERED:          08:00 hrs local time
                        January 21, 2025

LAYTIME TO COMMENCE:    Per Charter Party terms
                        (6 hours after valid NOR)

═══════════════════════════════════════════════════════════════════

                    [MASTER'S STAMP]

        _________________________________
        Captain Ahmed Al-Rashid
        Master, MT ARABIAN STAR I

RECEIVED BY:            _________________
TERMINAL:               _________________
DATE/TIME:              _________________
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'ullage_pre',
                type: 'Ullage Report (Pre-Loading)',
                shortType: 'ULG-PRE',
                filename: 'ULLAGE-PRE-AS1-2025.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                    ULLAGE REPORT
                    (PRE-LOADING SURVEY)
═══════════════════════════════════════════════════════════════════

SGS GULF LIMITED
Cargo Inspection Services

Report No:              SGS-ULG-PRE-2025-0847
Date:                   January 19, 2025
Time:                   09:00 hrs local

═══════════════════════════════════════════════════════════════════

VESSEL:                 MT ARABIAN STAR I
IMO:                    9876543
TERMINAL:               Ruwais, Abu Dhabi, UAE
OPERATION:              Pre-Loading Survey

═══════════════════════════════════════════════════════════════════

CARGO TANK INSPECTION:

Tank    Ullage    Temperature    Water      Status
────────────────────────────────────────────────────────────────
1C      EMPTY     N/A            Nil        CLEAN & DRY
2C      EMPTY     N/A            Nil        CLEAN & DRY
3C      EMPTY     N/A            Nil        CLEAN & DRY
4C      EMPTY     N/A            Nil        CLEAN & DRY
5C      EMPTY     N/A            Nil        CLEAN & DRY
6C      EMPTY     N/A            Nil        CLEAN & DRY
1P      EMPTY     N/A            Nil        CLEAN & DRY
1S      EMPTY     N/A            Nil        CLEAN & DRY

SLOP TANKS:
Slop P  EMPTY     N/A            Nil        CLEAN
Slop S  EMPTY     N/A            Nil        CLEAN

═══════════════════════════════════════════════════════════════════

ROB (Remaining On Board):

Previous Cargo:         Murban Crude
ROB Quantity:           NIL
OBQ (On Board Qty):     NIL

═══════════════════════════════════════════════════════════════════

TANK CONDITIONS:

- All tanks gas freed and ventilated
- No visible residue or sediment
- Tank coating in good condition
- All tank suctions clear
- Heating coils tested (N/A for this cargo)

INERT GAS SYSTEM:
- O2 content in all tanks: < 5%
- IG plant operational
- Deck water seal intact

═══════════════════════════════════════════════════════════════════

REMARKS:
Vessel's cargo tanks are in all respects ready to receive
Murban Crude Oil cargo.

═══════════════════════════════════════════════════════════════════

        _________________________________
        Mohammed Hassan
        Cargo Surveyor
        SGS Gulf Limited

WITNESSED:
Master: _________________ (Capt. Al-Rashid)
Terminal: _________________ (ADNOC Ops)
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'ullage_post',
                type: 'Ullage Report (Post-Loading)',
                shortType: 'ULG-POST',
                filename: 'ULLAGE-POST-AS1-2025.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                    ULLAGE REPORT
                    (POST-LOADING SURVEY)
═══════════════════════════════════════════════════════════════════

SGS GULF LIMITED
Cargo Inspection Services

Report No:              SGS-ULG-POST-2025-0847
Date:                   January 19, 2025
Time:                   22:00 hrs local

═══════════════════════════════════════════════════════════════════

VESSEL:                 MT ARABIAN STAR I
IMO:                    9876543
TERMINAL:               Ruwais, Abu Dhabi, UAE
OPERATION:              Post-Loading Survey

═══════════════════════════════════════════════════════════════════

CARGO TANK MEASUREMENTS:

Tank    Ullage(m)  Temp(°F)  Volume(BBL)  API@60°F
────────────────────────────────────────────────────────────────
2C      2.450      95.2      150,000      39.2
3C      2.448      95.1      150,000      39.2
4C      2.452      95.0      149,900      39.2
5C      2.455      95.3      149,900      39.2
────────────────────────────────────────────────────────────────
TOTAL CARGO:                  599,800 BBL

═══════════════════════════════════════════════════════════════════

QUANTITY CALCULATION:

Gross Observed Volume:  612,450 BBL @ observed temperature
Temperature Correction: VCF = 0.9793
Gross Standard Volume:  599,800 BBL @ 60°F

FREE WATER:
Tank 2C:                0.05 m (drained)
Tank 3C:                0.03 m (drained)
Tank 4C:                0.02 m (drained)
Tank 5C:                0.04 m (drained)
Total FW Drained:       285 BBL

═══════════════════════════════════════════════════════════════════

LOADING SUMMARY:

Loading Commenced:      09:30 hrs, January 19, 2025
Loading Completed:      22:00 hrs, January 19, 2025
Total Loading Time:     12 hrs 30 mins

Average Loading Rate:   47,984 BBL/hr
Max Loading Rate:       55,000 BBL/hr

═══════════════════════════════════════════════════════════════════

FINAL FIGURES:

Vessel Ullage:          599,800 BBL
Shore Tank:             602,450 BBL
Difference:             2,650 BBL (0.44%)

BILL OF LADING QTY:     599,800 BBL

═══════════════════════════════════════════════════════════════════

        _________________________________
        Mohammed Hassan
        Cargo Surveyor
        SGS Gulf Limited

WITNESSED:
Master: _________________ (Capt. Al-Rashid)
Terminal: _________________ (ADNOC Ops)
Buyer Rep: _________________ (Mr. R. Sharma)
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'timesheet',
                type: 'Statement of Facts / Timesheet',
                shortType: 'SOF',
                filename: 'SOF-AS1-RUW-2025.pdf',
                errorLines: ['Waiting Time:           18 hrs 00 mins'],
                content: `
═══════════════════════════════════════════════════════════════════
                    STATEMENT OF FACTS
                    (LOADING PORT TIMESHEET)
═══════════════════════════════════════════════════════════════════

VESSEL:                 MT ARABIAN STAR I
PORT:                   Ruwais Terminal, UAE
VOYAGE:                 Ruwais → Jamnagar
CARGO:                  Murban Crude Oil

═══════════════════════════════════════════════════════════════════

DATE/TIME               EVENT
═══════════════════════════════════════════════════════════════════

January 19, 2025

06:00                   Vessel arrived Ruwais Anchorage
06:30                   Anchor down
08:00                   NOR tendered
08:15                   NOR accepted
08:30                   Pilot on board
09:00                   Vessel all fast alongside Berth 3
09:00                   Cargo hoses connected
09:15                   Pre-loading inspection completed
09:30                   Loading commenced

14:30                   Loading suspended (terminal pipeline issue)
16:45                   Loading resumed
22:00                   Loading completed
22:15                   Cargo hoses disconnected
22:30                   Documentation completed
22:45                   Pilot on board
23:00                   Vessel cast off
23:30                   Vessel cleared Ruwais fairway

═══════════════════════════════════════════════════════════════════

LAYTIME CALCULATION:

Allowed Laytime:        36 hrs 00 mins (per C/P)

Time on Demurrage/Despatch:
────────────────────────────────────────────────────────────────
NOR Accepted:           January 19, 08:15
Laytime Commenced:      January 19, 14:15 (6 hrs after NOR)
Laytime Ended:          January 19, 22:30 (docs complete)
────────────────────────────────────────────────────────────────
Time Used:              8 hrs 15 mins
Laytime Remaining:      27 hrs 45 mins

STOPPAGES (Excluded from Laytime):
- Pipeline issue:       2 hrs 15 mins (14:30-16:45)

Waiting Time:           18 hrs 00 mins

DEMURRAGE/DESPATCH:
Despatch Earned:        27 hrs 45 mins @ $22,500/day
                        = USD 26,015.63

═══════════════════════════════════════════════════════════════════

REMARKS:
- Weather throughout: Fine, clear
- No delays attributable to vessel
- Terminal pipeline issue not vessel's fault

═══════════════════════════════════════════════════════════════════

AGREED AND SIGNED:

Master:         _________________ (Capt. Al-Rashid)
Terminal:       _________________ (ADNOC Ops)
Agent:          _________________ (Inchcape Shipping)
Surveyor:       _________________ (SGS)
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'loi',
                type: 'Letter of Indemnity',
                shortType: 'LOI',
                filename: 'LOI-RIL-2025-0847.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                    LETTER OF INDEMNITY
═══════════════════════════════════════════════════════════════════

DATE:                   January 20, 2025
REF:                    RIL-LOI-2025-0847

TO:                     ADNOC Trading
                        Abu Dhabi, UAE

FROM:                   Reliance Industries Limited
                        Mumbai, India

═══════════════════════════════════════════════════════════════════

RE: CARGO OF MURBAN CRUDE OIL
    B/L No: RUW-JAM-2025-0847
    Vessel: MT ARABIAN STAR I
    Quantity: 599,800 BBL
    LC Reference: LC-ENBD-2025-MUR-0847

═══════════════════════════════════════════════════════════════════

Dear Sirs,

We refer to the above cargo shipped on board the vessel
MT ARABIAN STAR I at Ruwais Terminal.

In consideration of you releasing the cargo to us without
production of the original Bills of Lading, we hereby agree:

1. To indemnify you, your servants and agents and to hold
   all of you harmless in respect of any liability, loss,
   damage or expense of whatsoever nature which you may
   sustain by reason of delivering the cargo in accordance
   with our request.

2. In the event of any proceedings being commenced against
   you or any of your servants or agents in connection with
   the delivery of the cargo as aforesaid, to provide you
   or them on demand with sufficient funds to defend the same.

3. If the ship or any other ship or property belonging to
   you should be arrested or detained, to provide on demand
   such bail or other security as may be required to prevent
   such arrest or detention or to secure the release of
   such ship or property.

4. To deliver to you the original Bills of Lading as soon
   as same come into our possession.

═══════════════════════════════════════════════════════════════════

This Letter of Indemnity shall be governed by English Law
and subject to English Court jurisdiction.

LIABILITY CAP:          USD 58,060,640.00
                        (110% of cargo value)

═══════════════════════════════════════════════════════════════════

For and on behalf of
RELIANCE INDUSTRIES LIMITED

_____________________________
Mukesh D. Ambani
Chairman & Managing Director

CORPORATE SEAL:         [RIL CORPORATE SEAL]
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'manifest',
                type: 'Cargo Manifest',
                shortType: 'MAN',
                filename: 'MANIFEST-AS1-2025.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                    CARGO MANIFEST
═══════════════════════════════════════════════════════════════════

VESSEL:                 MT ARABIAN STAR I
IMO NUMBER:             9876543
FLAG:                   Marshall Islands
VOYAGE NO:              AS1-2025-004

═══════════════════════════════════════════════════════════════════

PORT OF LOADING:        Ruwais Terminal, Abu Dhabi, UAE
PORT OF DISCHARGE:      Jamnagar, Gujarat, India
ETD:                    January 20, 2025
ETA:                    January 25, 2025

═══════════════════════════════════════════════════════════════════

CARGO PARTICULARS:

B/L Number:             RUW-JAM-2025-0847
Shipper:                ADNOC Trading, Abu Dhabi
Consignee:              To Order of Emirates NBD PJSC
Notify:                 Reliance Industries Ltd, Mumbai

───────────────────────────────────────────────────────────────────
DESCRIPTION OF CARGO:

MURBAN CRUDE OIL
UN Number:              1267
Class:                  3 (Flammable Liquid)
Packing Group:          I

Quantity:               599,800 BARRELS
                        (Approx. 85,000 Metric Tons)

───────────────────────────────────────────────────────────────────

TANK DISTRIBUTION:

Tank No.    Product              Volume (BBL)
────────────────────────────────────────────────────
2C          Murban Crude         150,000
3C          Murban Crude         150,000
4C          Murban Crude         149,900
5C          Murban Crude         149,900
────────────────────────────────────────────────────
TOTAL                            599,800 BBL

═══════════════════════════════════════════════════════════════════

FREIGHT:                PREPAID (as per Charter Party)

MARKS & NUMBERS:        N/A - Bulk liquid cargo

═══════════════════════════════════════════════════════════════════

MASTER'S DECLARATION:

I hereby declare that the above particulars are correct
to the best of my knowledge.

        _________________________________
        Captain Ahmed Al-Rashid
        Master, MT ARABIAN STAR I

Date: January 20, 2025
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'tank_inspection',
                type: 'Tank Inspection Certificate',
                shortType: 'TIC',
                filename: 'TIC-SGS-2025-0847.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                TANK INSPECTION CERTIFICATE
                (PRE-LOAD CLEANLINESS)
═══════════════════════════════════════════════════════════════════

SGS GULF LIMITED
Marine Survey Division

Certificate No:         SGS-TIC-2025-0847
Date of Inspection:     January 19, 2025
Time:                   07:00 - 08:30 hrs

═══════════════════════════════════════════════════════════════════

VESSEL:                 MT ARABIAN STAR I
IMO:                    9876543
PREVIOUS CARGO:         Murban Crude Oil
NEXT CARGO:             Murban Crude Oil (same grade)

═══════════════════════════════════════════════════════════════════

INSPECTION RESULTS:

Tank    Visual      Wall Test   Sediment    Water    Result
────────────────────────────────────────────────────────────────
2C      Clean       Pass        Nil         Nil      ACCEPTED
3C      Clean       Pass        Nil         Nil      ACCEPTED
4C      Clean       Pass        Nil         Nil      ACCEPTED
5C      Clean       Pass        Nil         Nil      ACCEPTED
────────────────────────────────────────────────────────────────

SLOP TANKS:
Slop P  Clean       Pass        Nil         Nil      ACCEPTED
Slop S  Clean       Pass        Nil         Nil      ACCEPTED

═══════════════════════════════════════════════════════════════════

INSPECTION CRITERIA:

1. VISUAL INSPECTION
   - No visible residue on tank surfaces
   - No loose scale or rust
   - Coating in good condition
   - Suctions clear and accessible

2. WALL WASH TEST
   - White cloth test conducted
   - No discoloration observed
   - Acceptable for grade loading

3. ATMOSPHERE TEST
   - Oxygen: > 21% (safe for entry)
   - LEL: < 1% (safe)
   - H2S: < 1 ppm (safe)

═══════════════════════════════════════════════════════════════════

CONCLUSION:

All cargo tanks inspected and found suitable for loading
MURBAN CRUDE OIL as per charterer's requirements.

RESTRICTIONS:           NONE

═══════════════════════════════════════════════════════════════════

        _________________________________
        Yusuf Al-Mansoori
        Senior Marine Surveyor
        SGS Gulf Limited

WITNESSED:
Chief Officer: _________________ (MT ARABIAN STAR I)
Terminal QC: _________________ (ADNOC Terminal)
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'q88',
                type: 'Q88 Vessel Questionnaire',
                shortType: 'Q88',
                filename: 'Q88-AS1-2025.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                Q88 VESSEL PARTICULARS QUESTIONNAIRE
                        (OCIMF FORMAT)
═══════════════════════════════════════════════════════════════════

SECTION 1: VESSEL IDENTIFICATION

Vessel Name:            MT ARABIAN STAR I
Previous Names:         None
IMO Number:             9876543
Official Number:        4521-MI
Call Sign:              V7AB9
MMSI:                   538007654
Flag:                   Marshall Islands
Port of Registry:       Majuro

═══════════════════════════════════════════════════════════════════

SECTION 2: VESSEL DATA

Type:                   Crude Oil Tanker
Year Built:             2018
Shipyard:               Hyundai Heavy Industries, Ulsan
Hull Type:              Double Hull
Classification:         Lloyd's Register +100A1

Dimensions:
- LOA:                  250.00 m
- LBP:                  242.00 m
- Beam:                 44.00 m
- Depth:                21.00 m
- Summer Draft:         15.20 m
- Summer DWT:           115,000 MT
- GT:                   62,500
- NT:                   35,200

═══════════════════════════════════════════════════════════════════

SECTION 3: CARGO CAPACITY

Total Cargo Capacity:   130,000 CBM (816,000 BBL)
Number of Cargo Tanks:  12 (6 pairs)
Segregations:           3 grades
Cargo Pumps:            3 x 3,500 CBM/hr
Stripping Pumps:        1 x 300 CBM/hr

═══════════════════════════════════════════════════════════════════

SECTION 4: SAFETY & COMPLIANCE

ISM:                    Yes - DNV (Certificate No. ISM-2024-7654)
ISPS:                   Yes - Level 1 (Certificate No. ISPS-2024-7654)
P&I Club:               Gard P&I (Bermuda) Ltd
P&I Entry Date:         January 1, 2018
P&I Limit:              USD 1 Billion

SIRE Inspection:        Yes
Last SIRE Date:         October 15, 2024
SIRE Inspector:         Shell International Trading

CDI Inspection:         Yes
Last CDI Date:          September 20, 2024

Oil Pollution Coverage: CLC 1992 / Bunker Convention 2001
Coverage:               USD 1 Billion

═══════════════════════════════════════════════════════════════════

SECTION 5: CREW

Nationality Mix:        UAE, India, Philippines
Officers:               UAE / India
Ratings:                Philippines

Crew Total:             28
- Master:               1
- Officers:             8
- Ratings:              19

═══════════════════════════════════════════════════════════════════

SECTION 6: OWNERS & MANAGERS

Registered Owner:       Arabian Tankers LLC
                        Dubai Maritime City, UAE

Technical Manager:      Arabian Ship Management
                        Dubai, UAE

Commercial Manager:     Reliance Global Shipping
                        Mumbai, India (Time Charterer)

═══════════════════════════════════════════════════════════════════

Prepared by: Operations Department, Arabian Tankers LLC
Date: January 10, 2025
Q88 Version: 8.0
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'msds',
                type: 'Material Safety Data Sheet',
                shortType: 'MSDS',
                filename: 'MSDS-MURBAN-2025.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                MATERIAL SAFETY DATA SHEET
                      MURBAN CRUDE OIL
═══════════════════════════════════════════════════════════════════

ADNOC - Abu Dhabi National Oil Company
MSDS No:                ADNOC-MSDS-MURBAN-001
Revision:               5.0
Revision Date:          January 1, 2025

═══════════════════════════════════════════════════════════════════

SECTION 1: IDENTIFICATION

Product Name:           Murban Crude Oil
Synonyms:               Murban Export Blend, UAE Murban
CAS Number:             8002-05-9
UN Number:              1267
Product Use:            Feedstock for refineries

═══════════════════════════════════════════════════════════════════

SECTION 2: HAZARD IDENTIFICATION

GHS Classification:
- Flammable Liquid:     Category 2
- Skin Irritation:      Category 2
- Aspiration Hazard:    Category 1
- Carcinogenicity:      Category 1B (contains benzene)

Signal Word:            DANGER

Hazard Statements:
- H225: Highly flammable liquid and vapor
- H304: May be fatal if swallowed and enters airways
- H315: Causes skin irritation
- H350: May cause cancer

═══════════════════════════════════════════════════════════════════

SECTION 3: COMPOSITION

Component               CAS No.         Typical %
────────────────────────────────────────────────────────────────
Paraffinic Hydrocarbons Various         45-55
Naphthenic Hydrocarbons Various         25-35
Aromatic Hydrocarbons   Various         15-20
Benzene                 71-43-2         0.1-1.0
Hydrogen Sulfide        7783-06-4       <10 ppm
Sulfur Compounds        Various         0.7-0.9

═══════════════════════════════════════════════════════════════════

SECTION 4: PHYSICAL/CHEMICAL PROPERTIES

Appearance:             Dark brown/black viscous liquid
Odor:                   Petroleum/sulfurous
API Gravity:            38-41° @ 60°F
Specific Gravity:       0.82-0.84 @ 15°C
Flash Point:            < -20°C (< -4°F)
Pour Point:             -15°C to -20°C
Viscosity:              4-6 cSt @ 40°C
Vapor Pressure:         < 7.0 psi @ 100°F
Boiling Range:          30°C to >500°C

═══════════════════════════════════════════════════════════════════

SECTION 5: FIREFIGHTING MEASURES

Suitable Extinguishing Media:
- Foam (AFFF or alcohol-resistant)
- Dry chemical
- Carbon dioxide
- Water fog (to cool containers)

DO NOT USE: Direct water stream

Special Hazards:
- Container may explode in fire
- Vapors heavier than air, may travel to ignition source
- Toxic fumes released when burning

═══════════════════════════════════════════════════════════════════

SECTION 6: HANDLING AND STORAGE

Handling:
- Ground and bond containers during transfer
- Use explosion-proof equipment
- Avoid breathing vapors
- Use only with adequate ventilation

Storage:
- Store in cool, well-ventilated area
- Keep away from heat, sparks, flame
- Keep container tightly closed
- Store separately from oxidizers

═══════════════════════════════════════════════════════════════════

EMERGENCY CONTACTS:

ADNOC Emergency:        +971 2 602 0000
CHEMTREC (24hr):        +1 800 424 9300

═══════════════════════════════════════════════════════════════════

Prepared by: ADNOC HSE Department
Approved by: Dr. Fatima Al-Hosani, HSE Director
═══════════════════════════════════════════════════════════════════
                `
            }
        ],
        lucasResponse: {
            summary: "USD 52.8M Murban crude shipment has 6 critical issues blocking LC payment.",
            quickCheck: "Analyzed 18 documents for 600K BBL Murban → Jamnagar. Found interconnected discrepancies across quality, vessel identity, and timing.",
            verdict: "NO-GO",
            score: 12,
            criticalErrors: [
                {
                    label: "API GRAVITY BELOW SPEC",
                    description: "Quality Certificate shows 39.2° API. LC minimum is 39.5°. This 0.3° variance affects pricing (~$264K adjustment) and MT conversion calculations."
                },
                {
                    label: "VESSEL IDENTITY CRISIS",
                    description: "Three different vessel names across documents: 'MT ARABIAN STAR' (Nomination), 'MT ARABIAN STAR I' (B/L), 'ARABIAN STAR' (Insurance). Bank will reject."
                },
                {
                    label: "BACKDATED B/L SUSPICION",
                    description: "NOR tendered Jan 21 but B/L shows cargo laden Jan 19. Laycan was Jan 15-20. Timeline impossible - suggests backdating."
                },
                {
                    label: "INSURANCE COVERAGE GAP",
                    description: "Policy names 'ARABIAN STAR' but cargo on 'ARABIAN STAR I'. USD 52.8M cargo potentially uninsured."
                }
            ],
            warnings: [
                {
                    label: "DEMURRAGE EXPOSURE",
                    description: "Timesheet shows 18 hrs waiting = potential demurrage at $45K/day rate. Settlement not documented."
                },
                {
                    label: "LC EXPIRY IN 21 DAYS",
                    description: "6 discrepancies to resolve before Feb 15 expiry. Request LC extension immediately."
                }
            ],
            actions: [
                "Obtain amended Quality Certificate or LC waiver for API gravity",
                "Get vessel name correction across all documents (use IMO number for verification)",
                "Investigate B/L dating - may need reissuance with correct dates",
                "Urgent: Amend insurance policy to correct vessel name before any incident",
                "Document demurrage settlement agreement with buyer",
                "Request LC extension from Emirates NBD (min 30 days)"
            ],
            closing: "This shipment has fundamental documentation problems. The vessel name inconsistency alone would cause bank rejection. Combined with API gravity miss and suspicious B/L dating, recommend halting presentation until all issues resolved. At $52.8M, the risk of rejection or insurance void is unacceptable."
        }
    },

    // ============================================
    // SCENARIO 3: ELECTRONICS IMPORT
    // ============================================
    electronics: {
        id: 'electronics',
        name: 'Electronics',
        subtitle: 'Consumer Tech to São Paulo',
        icon: '📱',
        route: { from: 'China', to: 'Brazil' },
        commodity: 'Smartphones & Tablets',
        value: 'USD 4.2M',
        valueNumeric: 4200000,
        documentCount: 10,
        level: 'mid',
        levelLabel: 'Mid Level',
        tags: [
            { label: 'Electronics', icon: 'electronics' },
            { label: 'China → Santos', icon: 'route' },
            { label: 'USD 4.2M', icon: 'value' }
        ],
        documents: [
            {
                id: 'lc',
                type: 'Letter of Credit',
                shortType: 'LC',
                filename: 'LC-ITAU-2025-EL-7892.pdf',
                errorLines: ['HS Code: 8517.12', 'Warranty: Minimum 24 months'],
                content: `
═══════════════════════════════════════════════════════════════════
                    IRREVOCABLE DOCUMENTARY CREDIT
═══════════════════════════════════════════════════════════════════

ISSUING BANK:           Itaú Unibanco S.A.
                        Av. Paulista, 1111 - Bela Vista
                        São Paulo - SP, 01311-920, Brazil
                        SWIFT: ITABORC

CREDIT NUMBER:          LC-ITAU-2025-EL-7892
DATE OF ISSUE:          January 8, 2025
DATE OF EXPIRY:         March 15, 2025
PLACE OF EXPIRY:        São Paulo, Brazil

═══════════════════════════════════════════════════════════════════

APPLICANT:              Distribuidora Tech Brasil Ltda
                        Rua Funchal, 418 - Vila Olímpia
                        São Paulo - SP, 04551-060, Brazil
                        CNPJ: 12.345.678/0001-90

BENEFICIARY:            Shenzhen TechWave Electronics Co. Ltd
                        Building 8, Nanshan High-Tech Park
                        Shenzhen, Guangdong, China 518057

═══════════════════════════════════════════════════════════════════

AMOUNT:                 USD 4,200,000.00
                        (United States Dollars Four Million
                        Two Hundred Thousand Only)

═══════════════════════════════════════════════════════════════════

GOODS DESCRIPTION:

CONSUMER ELECTRONICS - SMARTPHONES AND TABLETS
- Product: TechWave Pro Series Smartphones
- Model: TW-PRO-256 (256GB Storage)
- Quantity: 15,000 Units
- HS Code: 8517.12
- Origin: China
- Unit Price: USD 280.00 per unit CIF Santos

SPECIFICATIONS:
- 6.7" AMOLED Display
- 5G Capable
- Dual SIM
- Warranty: Minimum 24 months manufacturer warranty

═══════════════════════════════════════════════════════════════════

SHIPMENT TERMS:

PORT OF LOADING:        Shenzhen, Yantian Port, China
PORT OF DISCHARGE:      Porto de Santos, São Paulo, Brazil
LATEST SHIPMENT:        February 28, 2025
INCOTERMS:              CIF Santos
PARTIAL SHIPMENTS:      Not Allowed
TRANSSHIPMENT:          Allowed

═══════════════════════════════════════════════════════════════════

DOCUMENTS REQUIRED:

1. Commercial Invoice (3 originals + 3 copies)
2. Packing List (3 copies)
3. Full set 3/3 original Bills of Lading
   to order of Itaú Unibanco S.A.
4. Certificate of Origin (Form A or standard)
5. SGS Inspection Certificate
6. Insurance Certificate for 110% CIF value
7. NCM Classification Certificate
8. Manufacturer's Warranty Certificate
9. ANATEL Homologation Certificate
10. Conformity Certificate (INMETRO)

═══════════════════════════════════════════════════════════════════

SPECIAL CONDITIONS:

- All documents must reference LC-ITAU-2025-EL-7892
- Products must comply with ANATEL telecommunications regulations
- Serial numbers must be included in packing list
- Third party inspection (SGS) mandatory
- INMETRO conformity marking required

This credit is subject to UCP 600.

═══════════════════════════════════════════════════════════════════
                         AUTHORIZED SIGNATURE
                    Itaú Unibanco Trade Finance Division
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'invoice',
                type: 'Commercial Invoice',
                shortType: 'INV',
                filename: 'INV-TW-2025-7892.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                       COMMERCIAL INVOICE
═══════════════════════════════════════════════════════════════════

SELLER:                                 INVOICE NO: TW-INV-2025-7892
Shenzhen TechWave Electronics Co. Ltd   DATE: January 25, 2025
Building 8, Nanshan High-Tech Park
Shenzhen, China 518057                  LC REF: LC-ITAU-2025-EL-7892
Tax ID: 91440300MA5FXXX

═══════════════════════════════════════════════════════════════════

BUYER:
Distribuidora Tech Brasil Ltda
Rua Funchal, 418 - Vila Olímpia
São Paulo - SP, 04551-060, Brazil
CNPJ: 12.345.678/0001-90

═══════════════════════════════════════════════════════════════════

DESCRIPTION OF GOODS:

TECHWAVE PRO SERIES SMARTPHONES
Model: TW-PRO-256
Storage: 256GB
Color: Midnight Black
Origin: People's Republic of China

┌─────────────────────────────────────────────────────────────────┐
│ Description              Qty        Unit Price      Amount      │
├─────────────────────────────────────────────────────────────────┤
│ TechWave Pro 256GB       15,000     USD 280.00   USD 4,200,000  │
│ 5G Smartphone            units                                  │
│ S/N: TW240001-TW255000                                         │
└─────────────────────────────────────────────────────────────────┘

TOTAL INVOICE AMOUNT:                   USD 4,200,000.00

═══════════════════════════════════════════════════════════════════

PRICE BREAKDOWN:

FOB Shenzhen:           USD 3,780,000.00
Insurance:              USD    50,400.00
Freight:                USD   369,600.00
────────────────────────────────────────
CIF Santos:             USD 4,200,000.00

═══════════════════════════════════════════════════════════════════

SHIPPING DETAILS:

PORT OF LOADING:        Yantian Port, Shenzhen, China
PORT OF DISCHARGE:      Porto de Santos, São Paulo, Brazil
VESSEL:                 COSCO SHIPPING ANDES
VOYAGE:                 038W
TERMS:                  CIF Santos
B/L NUMBER:             COSU-SZN-STS-2025-7892

═══════════════════════════════════════════════════════════════════

PAYMENT TERMS:          Irrevocable Letter of Credit
                        LC No: LC-ITAU-2025-EL-7892
                        Issuing Bank: Itaú Unibanco S.A.

BANK DETAILS:
Bank: Bank of China, Shenzhen Branch
Account: 7654321098765432
SWIFT: BKCHCNBJ

═══════════════════════════════════════════════════════════════════
We certify this invoice is true and correct.

_____________________________
Wang Lei
Export Manager
Shenzhen TechWave Electronics
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'packing',
                type: 'Packing List',
                shortType: 'PKG',
                filename: 'PL-TW-2025-7892.pdf',
                errorLines: ['S/N Range: TW240001-TW254850, TW255001-TW255150'],
                content: `
═══════════════════════════════════════════════════════════════════
                         PACKING LIST
═══════════════════════════════════════════════════════════════════

SHIPPER:                                REF: TW-PL-2025-7892
Shenzhen TechWave Electronics           DATE: January 24, 2025
Building 8, Nanshan High-Tech Park
Shenzhen, China 518057                  LC REF: LC-ITAU-2025-EL-7892
                                        INV REF: TW-INV-2025-7892

═══════════════════════════════════════════════════════════════════

CONSIGNEE:
Distribuidora Tech Brasil Ltda
Rua Funchal, 418 - Vila Olímpia
São Paulo - SP, 04551-060, Brazil

═══════════════════════════════════════════════════════════════════

PACKING DETAILS:

Product:                TechWave Pro 256GB Smartphone
Model:                  TW-PRO-256
Color:                  Midnight Black

Package Type:           Individual retail boxes in master cartons
Units per Carton:       20 units
Total Cartons:          750

S/N Range: TW240001-TW254850, TW255001-TW255150

═══════════════════════════════════════════════════════════════════

CARTON BREAKDOWN:

Carton Nos.         Contents            S/N Range          Qty
────────────────────────────────────────────────────────────────
001-500             TW-PRO-256         TW240001-TW250000  10,000
501-742             TW-PRO-256         TW250001-TW254850   4,850
743-750             TW-PRO-256         TW255001-TW255150     150
────────────────────────────────────────────────────────────────
TOTAL                                                      15,000

═══════════════════════════════════════════════════════════════════

WEIGHT & DIMENSIONS:

Each Unit:
- Net Weight:           185 g
- Gross Weight:         350 g (with accessories & box)

Each Carton (20 units):
- Net Weight:           3.7 kg
- Gross Weight:         8.5 kg
- Dimensions:           60 x 40 x 30 cm

TOTALS:
┌─────────────────────────────────────────────────────────────────┐
│ Total Cartons:         750                                      │
│ Total Units:           15,000                                   │
│ Total Net Weight:      2,775 kg                                 │
│ Total Gross Weight:    6,375 kg                                 │
│ Total Volume:          54 CBM                                   │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════

CONTAINER DETAILS:

Container Type:         2 x 40' HC
Container Numbers:      COSU 8823456 / COSU 8823457
Seal Numbers:           CN-2025-9901 / CN-2025-9902

═══════════════════════════════════════════════════════════════════
Prepared by: Logistics Department
Checked by:  Quality Control
Date: January 24, 2025
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'bl',
                type: 'Bill of Lading',
                shortType: 'B/L',
                filename: 'BL-COSU-SZN-STS-2025.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                         BILL OF LADING
              FOR COMBINED TRANSPORT SHIPMENT
═══════════════════════════════════════════════════════════════════

COSCO SHIPPING LINES CO., LTD
Shanghai, China

B/L NUMBER:             COSU-SZN-STS-2025-7892
BOOKING REF:            SZN2025-7892

═══════════════════════════════════════════════════════════════════

SHIPPER:
Shenzhen TechWave Electronics Co. Ltd
Building 8, Nanshan High-Tech Park
Shenzhen, Guangdong, China 518057

CONSIGNEE:
TO THE ORDER OF ITAÚ UNIBANCO S.A.

NOTIFY PARTY:
Distribuidora Tech Brasil Ltda
Rua Funchal, 418 - Vila Olímpia
São Paulo - SP, 04551-060, Brazil
Tel: +55 11 3456 7890

═══════════════════════════════════════════════════════════════════

VESSEL:                 COSCO SHIPPING ANDES
VOYAGE:                 038W
FLAG:                   Hong Kong

PORT OF LOADING:        Yantian Port, Shenzhen, China
PORT OF DISCHARGE:      Porto de Santos, São Paulo, Brazil

═══════════════════════════════════════════════════════════════════

PARTICULARS FURNISHED BY SHIPPER:

Containers:             2 x 40' HIGH CUBE
Container Nos:          COSU 8823456 / COSU 8823457
Seal Nos:               CN-2025-9901 / CN-2025-9902

DESCRIPTION OF GOODS:
750 CARTONS CONTAINING:
CONSUMER ELECTRONICS - SMARTPHONES
TECHWAVE PRO 256GB (MODEL TW-PRO-256)
15,000 UNITS
NCM CODE: 8517.12.31

Gross Weight:           6,375 KGS
Measurement:            54 CBM

═══════════════════════════════════════════════════════════════════

FREIGHT:                PREPAID
NUMBER OF ORIGINAL B/Ls: THREE (3/3)

SHIPPED ON BOARD DATE:  January 28, 2025

LADEN ON BOARD THE VESSEL
Clean on Board

═══════════════════════════════════════════════════════════════════
Place of Issue:         Shenzhen, China
Date of Issue:          January 28, 2025

                    [CARRIER'S STAMP]
                    _______________________
                    As Agent for the Carrier
                    COSCO Shipping Lines Co., Ltd
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'coo',
                type: 'Certificate of Origin',
                shortType: 'COO',
                filename: 'COO-CCPIT-2025-7892.pdf',
                errorLines: ['assembled in China, components from multiple origins'],
                content: `
═══════════════════════════════════════════════════════════════════
                    CERTIFICATE OF ORIGIN
═══════════════════════════════════════════════════════════════════

CHINA COUNCIL FOR THE PROMOTION OF INTERNATIONAL TRADE
CCPIT - Guangdong Sub-Council
Shenzhen, China

Certificate No:         CCPIT-GD-2025-7892
Date of Issue:          January 23, 2025

═══════════════════════════════════════════════════════════════════

1. EXPORTER:
   Shenzhen TechWave Electronics Co. Ltd
   Building 8, Nanshan High-Tech Park
   Shenzhen, Guangdong, China 518057
   Registration: 91440300MA5FXXX

2. CONSIGNEE:
   Distribuidora Tech Brasil Ltda
   Rua Funchal, 418 - Vila Olímpia
   São Paulo - SP, 04551-060, Brazil

3. MEANS OF TRANSPORT:
   Vessel: COSCO SHIPPING ANDES V.038W
   Port of Loading: Yantian, Shenzhen
   Port of Discharge: Porto de Santos, Brazil

4. COUNTRY OF ORIGIN:
   PEOPLE'S REPUBLIC OF CHINA

   Note: Product assembled in China, components from multiple origins

5. DESCRIPTION OF GOODS:
   Consumer Electronics - Smartphones
   TechWave Pro 256GB (Model TW-PRO-256)
   NCM Code: 8517.12.31

6. QUANTITY:
   15,000 Units in 750 Cartons
   Gross Weight: 6,375 kg

7. COMMERCIAL REFERENCES:
   Invoice No: TW-INV-2025-7892
   LC Reference: LC-ITAU-2025-EL-7892

═══════════════════════════════════════════════════════════════════

THE CHINA COUNCIL FOR THE PROMOTION OF INTERNATIONAL
TRADE HEREBY CERTIFIES THAT THE GOODS DESCRIBED ABOVE
ORIGINATE IN THE PEOPLE'S REPUBLIC OF CHINA

═══════════════════════════════════════════════════════════════════

                    [CCPIT OFFICIAL SEAL]

        _________________________________
        Authorized Signatory
        CCPIT Guangdong Sub-Council

Verification: ccpit.org/verify/2025-7892
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'inspection',
                type: 'Inspection Certificate',
                shortType: 'INSP',
                filename: 'SGS-INSP-2025-7892.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                    INSPECTION CERTIFICATE
═══════════════════════════════════════════════════════════════════

SGS-CSTC STANDARDS TECHNICAL SERVICES CO., LTD
Shenzhen Branch
Nanshan District, Shenzhen, China

Certificate No:         SGS-SZN-2025-7892
Date of Issue:          January 22, 2025
Inspection Date:        January 20-21, 2025

═══════════════════════════════════════════════════════════════════

CLIENT:                 Distribuidora Tech Brasil Ltda
                        São Paulo, Brazil

MANUFACTURER:           Shenzhen TechWave Electronics Co. Ltd
                        Shenzhen, China

PRODUCT:                TechWave Pro 256GB Smartphone
MODEL:                  TW-PRO-256
QUANTITY:               15,000 Units

═══════════════════════════════════════════════════════════════════

INSPECTION RESULTS:

1. QUANTITY VERIFICATION:
   Declared:            15,000 units
   Inspected Sample:    1,500 units (10% AQL)
   Result:              PASSED

2. VISUAL INSPECTION:
   Cosmetic Defects:    0.2% (within 1% tolerance)
   Packaging Integrity: 100% compliant
   Labeling:            Correct and complete
   Result:              PASSED

3. FUNCTIONAL TESTING:
   Power On Test:       100% passed
   Display Test:        99.8% passed (3 units minor)
   5G Connectivity:     100% passed
   Camera Function:     100% passed
   Battery Charge:      100% passed
   Result:              PASSED

4. SPECIFICATIONS CHECK:
   Model Conformity:    Matches specifications
   Storage Capacity:    256GB verified
   Memory:              8GB RAM verified
   Result:              PASSED

5. SAFETY COMPLIANCE:
   ANATEL Marking:      Present and correct
   INMETRO Compliance:  Verified
   Battery Safety:      UN38.3 certified
   Result:              PASSED

═══════════════════════════════════════════════════════════════════

OVERALL RESULT:         PASSED

REMARKS:
All inspected units meet the buyer's specifications and
quality requirements. Shipment approved for export.

═══════════════════════════════════════════════════════════════════

                    [SGS INSPECTION STAMP]

        _________________________________
        Chen Wei
        Senior Electronics Inspector
        SGS-CSTC Shenzhen

Verify: sgs.com/verify/SZN-2025-7892
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'insurance',
                type: 'Insurance Certificate',
                shortType: 'INS',
                filename: 'INS-PICC-2025-7892.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
                MARINE CARGO INSURANCE CERTIFICATE
═══════════════════════════════════════════════════════════════════

PICC PROPERTY AND CASUALTY COMPANY LIMITED
Shenzhen Branch
Futian District, Shenzhen, China

Certificate No:         PICC-MC-2025-7892
Policy No:              PYII2025440300000002
Date of Issue:          January 24, 2025

═══════════════════════════════════════════════════════════════════

ASSURED:                Shenzhen TechWave Electronics Co. Ltd
                        and/or Distribuidora Tech Brasil Ltda
                        and/or their respective assigns

═══════════════════════════════════════════════════════════════════

PARTICULARS OF SHIPMENT:

Vessel:                 COSCO SHIPPING ANDES V.038W
From:                   Yantian Port, Shenzhen, China
To:                     Porto de Santos, São Paulo, Brazil
Sailing Date:           January 28, 2025 (approx.)

DESCRIPTION OF CARGO:
CONSUMER ELECTRONICS - SMARTPHONES
TechWave Pro 256GB (15,000 units)
Packed in 750 cartons, 2 x 40'HC containers

═══════════════════════════════════════════════════════════════════

SUM INSURED:            USD 4,620,000.00
                        (110% of Invoice Value)

Invoice Value:          USD 4,200,000.00
Plus 10%:               USD   420,000.00

═══════════════════════════════════════════════════════════════════

CONDITIONS OF INSURANCE:

Coverage:               Institute Cargo Clauses (A) - 1/1/2009
                        Institute War Clauses (Cargo) - 1/1/2009
                        Institute Strikes Clauses (Cargo) - 1/1/2009

Additional Covers:
- Theft, Pilferage & Non-Delivery (TPND)
- Hook Damage
- Fresh/Rain Water Damage

Deductible:             USD 500 per carton
                        NIL for Total Loss

═══════════════════════════════════════════════════════════════════

CLAIMS:

In the event of loss or damage, notify immediately:
PICC Claims Department
Tel: +86 755 8256 7890
Email: claims.sz@picc.com.cn

Survey Agents: McLarens China / Crawford Brazil

═══════════════════════════════════════════════════════════════════

                    [PICC STAMP & SEAL]

        _________________________________
        Liu Xiaoming
        Marine Underwriting Manager
        PICC Shenzhen Branch
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'hs_class',
                type: 'NCM Classification Certificate',
                shortType: 'NCM',
                filename: 'NCM-CLASS-2025-7892.pdf',
                errorLines: ['NCM Code Assigned: 8471.30.19'],
                content: `
═══════════════════════════════════════════════════════════════════
                NCM CLASSIFICATION CERTIFICATE
═══════════════════════════════════════════════════════════════════

CHINA CUSTOMS - SHENZHEN DISTRICT
Classification & Valuation Department
Futian District, Shenzhen

Certificate No:         SZC-NCM-2025-7892
Date of Issue:          January 15, 2025

═══════════════════════════════════════════════════════════════════

APPLICANT:              Shenzhen TechWave Electronics Co. Ltd
                        Shenzhen, China

DESTINATION:            Brazil (Mercosur NCM Classification)

═══════════════════════════════════════════════════════════════════

PRODUCT INFORMATION:

Product Name:           TechWave Pro Smartphone
Model Number:           TW-PRO-256
Brand:                  TechWave

Technical Description:
- 6.7" AMOLED touchscreen display
- Qualcomm Snapdragon 8 Gen 2 processor
- 8GB RAM, 256GB internal storage
- 5G cellular capability
- Dual SIM support
- Android operating system
- Integrated cameras (50MP + 12MP + 8MP)
- Li-ion battery 5000mAh

═══════════════════════════════════════════════════════════════════

CLASSIFICATION DETERMINATION:

NCM Code Assigned: 8471.30.19

Classification Basis:
Heading 8471 - Automatic data processing machines and
               units thereof
Subheading 8471.30 - Portable digital automatic data
                     processing machines, weighing not
                     more than 10 kg
Item 8471.30.19 -    Other portable machines

═══════════════════════════════════════════════════════════════════

BRAZILIAN IMPORT TARIFFS (Reference):
II (Import Tax):        16%
IPI:                    15%
PIS/COFINS:             11.75%
ICMS (São Paulo):       18%

═══════════════════════════════════════════════════════════════════

REMARKS:
Classification based on product's primary function as a
portable computing device with data processing capabilities.

This certificate is valid for customs clearance purposes.
Valid for 12 months from date of issue.

═══════════════════════════════════════════════════════════════════

                    [CHINA CUSTOMS SEAL]

        _________________________________
        Zhang Yong
        Senior Classification Officer
        Shenzhen Customs District

Verification: customs.gov.cn/verify/2025-7892
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'warranty',
                type: 'Warranty Certificate',
                shortType: 'WTY',
                filename: 'WARRANTY-TW-2025-7892.pdf',
                errorLines: ['Warranty Period: 12 months'],
                content: `
═══════════════════════════════════════════════════════════════════
                MANUFACTURER'S WARRANTY CERTIFICATE
═══════════════════════════════════════════════════════════════════

SHENZHEN TECHWAVE ELECTRONICS CO. LTD
Building 8, Nanshan High-Tech Park
Shenzhen, Guangdong, China 518057

Certificate No:         TW-WTY-2025-7892
Date of Issue:          January 20, 2025

═══════════════════════════════════════════════════════════════════

PRODUCT COVERED:

Product Name:           TechWave Pro 256GB Smartphone
Model:                  TW-PRO-256
Serial Number Range:    TW240001 - TW255000
Quantity:               15,000 Units
Shipment Reference:     LC-ITAU-2025-EL-7892

═══════════════════════════════════════════════════════════════════

WARRANTY TERMS:

Warranty Period: 12 months
Commencement:           From date of retail sale
Maximum Coverage:       18 months from date of manufacture

═══════════════════════════════════════════════════════════════════

WARRANTY COVERAGE:

This warranty covers defects in materials and workmanship
under normal use conditions, including:

COVERED:
- Manufacturing defects
- Hardware component failures
- Display defects (dead pixels > 3)
- Battery capacity degradation (< 80% within warranty)
- Software issues (pre-installed firmware only)

NOT COVERED:
- Physical damage (drops, water, etc.)
- Unauthorized modifications
- Normal wear and tear
- Accessories (charged cables, chargers)
- Damage from improper use

═══════════════════════════════════════════════════════════════════

WARRANTY SERVICE:

Service Center:         TechWave Service Center São Paulo
Address:                Av. Paulista, 1000 - Bela Vista
                        São Paulo - SP, 01310-100
Contact:                +55 11 3456 7890
Email:                  service.latam@techwave.cn

Process:
1. Contact service center with proof of purchase
2. Obtain RMA number
3. Ship defective unit (prepaid by TechWave)
4. Repair or replacement within 14 business days

═══════════════════════════════════════════════════════════════════

AUTHORIZED WARRANTY PROVIDER (BRAZIL):

Company:                Distribuidora Tech Brasil Ltda
Coverage Area:          Brazil, Argentina, Chile, Colombia

═══════════════════════════════════════════════════════════════════

                    [TECHWAVE COMPANY SEAL]

        _________________________________
        Dr. Li Jianhua
        Chief Quality Officer
        Shenzhen TechWave Electronics Co. Ltd
═══════════════════════════════════════════════════════════════════
                `
            },
            {
                id: 'import_dec',
                type: 'Import Declaration (DI)',
                shortType: 'DI',
                filename: 'DI-RFB-2025-7892.pdf',
                errorLines: [],
                content: `
═══════════════════════════════════════════════════════════════════
            DECLARAÇÃO DE IMPORTAÇÃO (DI)
              BRAZILIAN IMPORT DECLARATION
═══════════════════════════════════════════════════════════════════

RECEITA FEDERAL DO BRASIL
Alfândega do Porto de Santos
Santos - SP, Brazil

DI Number:              25/0147892-3
Registration Date:      January 26, 2025
Channel:                YELLOW (Documentary Check)

═══════════════════════════════════════════════════════════════════

IMPORTER DETAILS:

Company:                Distribuidora Tech Brasil Ltda
CNPJ:                   12.345.678/0001-90
RADAR:                  Active (Unlimited modality)
Address:                Rua Funchal, 418 - Vila Olímpia
                        São Paulo - SP, 04551-060
Contact:                +55 11 3456 7890

═══════════════════════════════════════════════════════════════════

SHIPMENT DETAILS:

Exporter:               Shenzhen TechWave Electronics Co. Ltd
Country of Origin:      China
Country of Acquisition: China

Vessel:                 COSCO SHIPPING ANDES
Voyage:                 038W
B/L Number:             COSU-SZN-STS-2025-7892
ETA Santos:             February 18, 2025

═══════════════════════════════════════════════════════════════════

CARGO DETAILS:

Description:            Consumer Electronics - Smartphones
NCM Code:               8517.12.31
Quantity:               15,000 Units
Gross Weight:           6,375 kg
No. of Packages:        750 Cartons
Container:              2 x 40'HC

═══════════════════════════════════════════════════════════════════

VALUE DECLARATION:

CIF Value:              USD 4,200,000.00
Exchange Rate:          1 USD = 4.9250 BRL
BRL Value:              BRL 20,685,000.00

═══════════════════════════════════════════════════════════════════

DUTIES & TAXES CALCULATION:

II (Import Tax 16%):           BRL  3,309,600.00
IPI (15%):                     BRL  3,599,190.00
PIS/COFINS (11.75%):           BRL  2,430,487.50
ICMS (São Paulo 18%):          BRL  5,422,435.98
────────────────────────────────────────
TOTAL ESTIMATED:               BRL 14,761,713.48

Payment Status:         PENDING (Awaiting clearance)

═══════════════════════════════════════════════════════════════════

COMPLIANCE REQUIREMENTS:

ANATEL Homologation:    Required - Certificate attached
INMETRO Conformity:     Required - Certificate attached
Siscomex LI:            25/0147892-3/001
Restricted Goods:       No

═══════════════════════════════════════════════════════════════════

                    [RECEITA FEDERAL SEAL]

        _________________________________
        Customs Clearance Department
        Alfândega do Porto de Santos

Reference: portaldeuniconet.gov.br/verify/2025-7892
═══════════════════════════════════════════════════════════════════
                `
            }
        ],
        lucasResponse: {
            summary: "USD 4.2M electronics shipment has 2 critical issues requiring immediate attention.",
            quickCheck: "Analyzed 10 documents for 15,000 units Shenzhen → Santos. Found NCM code and warranty discrepancies.",
            verdict: "CAUTION",
            score: 58,
            criticalErrors: [
                {
                    label: "NCM CODE MISMATCH",
                    description: "LC specifies 8517.12 (mobile phones) but Classification shows 8471.30 (computers). Different tax rates apply - II, IPI, and ICMS calculations will be incorrect."
                },
                {
                    label: "WARRANTY NON-COMPLIANT",
                    description: "LC requires 24-month warranty. Certificate shows 12 months only. Bank will reject presentation."
                }
            ],
            warnings: [
                {
                    label: "ORIGIN STATEMENT VAGUE",
                    description: "COO states 'components from multiple origins' - may trigger additional Receita Federal scrutiny and YELLOW channel delay."
                },
                {
                    label: "SERIAL NUMBER DISCREPANCY",
                    description: "150 units (1%) have serial numbers outside the stated range. Packing list shows TW255001-255150 not in invoice range TW240001-TW255000."
                }
            ],
            actions: [
                "Get corrected NCM Classification Certificate (confirm product is 8517.12.31 for mobile phones)",
                "Request extended warranty certificate (24 months) from manufacturer",
                "Clarify component origins with supplier for Brazilian customs purposes",
                "Reconcile serial number ranges between invoice and packing list"
            ],
            closing: "Shipment is close to compliant but NCM code and warranty issues will cause bank rejection. Both are correctable with supplier cooperation. Recommend 48-72 hour hold for document amendments."
        }
    }
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SCENARIOS };
}
