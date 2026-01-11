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
        errorLines: [
            'Grade: A',
            'Quantity: 1,028,000 KG'
        ],
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
        errorLines: [
            'PORT OF DISCHARGE:      Rottedam, Netherlands'
        ],
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
