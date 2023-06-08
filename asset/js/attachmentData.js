/**
 * 무기별 장착가능한 부착물을 학습시키기 위한 데이터.
 * 
 * attachmentData[무기타입Idx][무기이름Idx] 이런식으로 사용하여
 * json 형식의 부착물 데이터를 사용할 수 있다.
 * 
 * https://callofduty.fandom.com/wiki/Call_of_Duty:_Modern_Warfare_II#Weapons
 * 이곳에 나와있는 데이터를 참고해 사용중 이지만
 * 사이트에 모든 데이터가 없어서 다른 정보를 찾거나 수작업으로 추가 예정.
 */

export const attachmentData = [
    // Assault Rifle
    [
        // M4
        {
            "Muzzle": [
                "Corvus Slash Gen. 2",
                "Dark KX30",
                "VLK Koloss Flash Hider",
                "Broadhead-3DP",
                "Silentfire XG6",
                "Echoline GS-X",
                "Harbinger D20",
                "Echoless-80",
                "FSS Covert V",
                "Gauge-9 Mono",
                "RF Crown 50",
                "Komodo Heavy",
                "XTEN Ported 290",
                "Cronen OP44",
                "FTAC Castle Comp",
                "XTEN Havoc 90",
                "Sakin Tread-40",
                "C400 Door Knocker",
            ],
            "Barrel": [
                "14\" Carbine Shroud",
                "7.5\" Tempus Firebrand",
                "Tempus Trench Pro",
                "419mm EXF Barrel",
                "Hightower 20\" Barrel",
                "11.5\" T-H4 Barrel",
                "11.5\" Carbine Shroud",
            ],
            "Laser": [
                "SZ 1mw PEQ",
                "Schlager PEQ Box IV",
                "Corio LAZ-44 V3",
                "FSS OLE-V Laser",
                "Canted Vibro-Dot 7",
                "1mw Laser Box",
                "Stovl DR Laser Box",
                "Corvus PEQ Beam-5",
                "FTAC Grimline Laser",
                "Luminate-44",
                "DXS Flash 90",
            ],
            "Optic": [
                "Slimline Pro",
                "SZ Mini",
                "Cronen Mini Red Dot",
                "Cronen Mini Pro",
                "SZ Sigma-IV Optic",
                "SZ Minitac-40",
                "XRK On-Point Optic",
                "DF105 Reflex Sight",
                "Monocle CT90",
                "Corvus SOL-76",
                "SZ Recharge-DX",
                "SZ SRO-7",
                "Corio RE-X Pro",
                "Corio Enforcer Optic",
                "SZ Lonewolf Optic",
                "Kazan-Holo",
                "Corvus Downrange-00",
                "SZ Holotherm",
                "XTEN Angel-40",
                "VLK 4.0 Optic",
                "Schlager 4x",
                "Forge Tac Delta 4",
                "Cronen Zero-P Optic",
                "SZ Bullseye Optic",
                "SZ Aggressor-IR Optic",
                "Schlager Night View",
                "VX350 Thermal Optic",
                "Teplo-OP3 Scope",
                "DR582 Hybrid Sight",
                "Hybrid Firepoint",
                "SZ Vortex-90",
                "BPZ40 Hybrid",
                "ANGEL-40 4.8x",
                "Thermo-Optic X9",
                "Teplo Clear Shot",
                "FTAC Charlie7",
                "HMW-20 Optic",
                "Luca Bandera Scope",
                "Drexsom Prime-90",
                "Ares Clear Shot",
            ],
            "Stock": [
                "Ravage-8",
                "Demo Fade Pro Stock",
                "Tempus P80 Strike Stock",
                "Demo Precision Elite Factory",
                "Corio Precio Factory",
                "Demo D50 Buffer Tube",
            ],
            "Underbarrel": [
                "Edge-47 Grip",
                "Demo Firm Grip",
                "XTEN Gravedigger",
                "FTAC Ripper 56",
                "Demo Cleanshot 40",
                "Demo IMP-44 Grip",
                "FTAC Tiger Grip",
                "FSS Sharkfin 90",
                "Agent Grip",
                "Bruen Sync Shot Grip",
                "XTEN Drop Grip",
                "Phase-3 Grip",
                "Merc Foregrip",
                "Lockgrip Precision-40",
                "Hex-40 Grip",
                "Schlager Tango",
                "VX Pineapple",
                "OP-X9 Foregrip",
                "Operator Foregrip",
                "TV Wrecker Grip",
                "Bruen Tilt Grip",
                "Cronen Grooveshot Grip",
                "Bruen Warrior Grip",
                "Bipod V9 Grip",
                "Level Aim Bipod",
                "Cornerstone Bipod",
                "XTEN Stable Shot",
                "SPW 40mm HE",
                "SPW 40mm Drill",
                "Corvus Masterkey",
            ],
            "Ammunition": [
                "5.56 Frangible",
                "5.56 Armor Piercing",
                "5.56 Overpressured +P",
                "5.56 High Velocity",
            ],
            "Magazine": [
                "45-Round Mag",
                "60-Round Mag",
            ],
            "Rear Grip": [
                "D15 Grip",
                "Sakin ZX Grip",
                "XTEN Grip",
                "Phantom Grip",
                "Support CP90 Grip",
            ],
        }, 
        // TAQ-56
        {
            "Muzzle": [
            "Corvus Slash Gen. 2",
            "Cronen MAW-86",
            "Dark KX30",
            "VLK Koloss Flash Hider",
            "Broadhead-3DP",
            "Silentfire XG6",
            "Echoline GS-X",
            "ZULU-60",
            "Harbinger D20",
            "Echoless-80",
            "FSS Covert V",
            "Gauge-9 Mono",
            "RF Crown 50",
            "Komodo Heavy",
            "XTEN Ported 290",
            "FJX Fulcrum Pro",
            "Cronen OP44",
            "FTAC Castle Comp",
            "XTEN Havoc",
            "Sakin Tread 90",
            "C400 Door Knocker",
            "JCZ-390 Muzzle Device",
            ],
            "Barrel": [
                "12\" Tacshort Barrel",
                "17.5\" Tundra Pro Barrel",
            ],
            "Laser": [
                "SZ 1mW PEQ",
                "Schlager PEQ BOX IV",
                "Corio LAZ-44 V3",
                "FSS OLE-V Laser",
                "Canted Vibro-Dot 7",
                "1mW Laser Box",
                "STOVL DR Laser Box",
                "Corvus PEQ Beam-5",
                "FRAC Grimline Laser",
                "Luminate-44",
                "DXS Flash 90",
            ],
            "Optic": [
                "Slimline Pro",
                "SZ Mini",
                "Cronen Mini Dot",
                "Cronen Mini Pro",
                "SZ Sigma-IV Optic",
                "SZ Minitac-40",
                "XRK On-Point Optic",
                "AIM OP-V4",
                "DF105 Reflex Sight",
                "Monocle CT90",
                "Corvus SOL-76",
                "SZ Recharge DX",
                "SZ SRO-7",
                "Corio RE-X Pro",
                "Corio Enforcer Optic",
                "SZ Lonewolf Optic",
                "Kazan-Holo",
                "SZ Battle Optic",
                "Corvus Downrange-00",
                "SZ Holotherm",
                "XTEN Angel-40",
                "VLK 4.0 Optic",
                "Schlager 3.4x",
                "Forge Tac Delta 4",
                "Cronen Zero-P Optic",
                "SZ Bullseye Optic",
                "SZ Aggressor-IR Optic",
                "Schlager Night View",
                "Teplo OP3 Scope",
                "DR582 Hybrid Sight",
                "Hybrid Firepoint",
                "SZ Vortex-90",
                "BPZ40 Hybrid",
                "SZ Oscar-9",
                "Thermo-Optic X9",
                "Teplo Clear Shot",
                "FTAC Charlie7",
                "HMW-20 Optic",
                "Luca Bandera Scope",
                "DS Farsight 11",
                "3x RFL-Optic",
                "Drexsom Prime-90",
                "ARES Clear Shot",
                "Vigilant-30 C-Iron",
            ],
            "Stock": [
                "TV LPX-434",
                "Tactique Brute Stock",
                "TV XLINE Pro",
                "TV Cardinal Stock",
            ],
            "Underbarrel": [
                "Commando Foregrip",
                "EDGE-47 Grip",
                "DEMO Firm Grip",
                "XTEN Gravedigger",
                "FRAC Ripper",
                "Demo Cleanshot 40",
                "Demo IMP-44 Grip",
                "FTAC Tiger Grip",
                "FSS Sharkfin",
                "Agent Grip",
                "Bruen Sync Shot Grip",
                "XTEN Drop Grip",
                "XTEN Nexus Grip",
                "Phase-3 Grip",
                "Merc Foregrip",
                "Lockgrip Precision-40",
                "HEX-40 Grip",
                "Schlager Tango",
                "VX Pineapple",
                "OP-X9 Foregrip",
                "Operator Foregrip",
                "TV Wrecker Grip",
                "Bruen Tilt Grip",
                "Cronen Grooveshot Grip",
                "EXF Backdraft Grip",
                "Bruen Warrior Grip",
                "Bipod V9 Grip",
                "Core BP2",
                "Level Aim Bipod",
                "Cornerstone Bipod",
                "XTEN Stable Shot",
                "Hellscream 40mm",
                "Hellscream 40mm Drill",
                "Corvus Masterkey",
            ],
            "Ammunition": [
                "5.56 Frangible",
                "5.56 Hollowpoint",
                "5.56 Armor Piercing",
                "5.56 Overpressured",
                "5.56 High Velocity",
            ],
            "Magazine": [
                "40 Round Mag",
                "60 Round Mag",
            ],
            "Rear Grip": [
                "XRK Response Grip",
                "FSS Combat Grip",
                "Demo Cleanshot Grip",
            ],
        }, 
        // Kastov 762
        {
            "Muzzle": [
                "Eight-Point Flash Hider", 
                "TZL-90 V3", 
                "Cronen Dark KX30", 
                "Husher-65 Silencer", 
                "Polarfire-S", 
                "ZLR Talon 5", 
                "Echoline GS-X", 
                "Zulu-60", 
                "Kastovia DX90", 
                "Tempus GH50", 
                "TY-LR8", 
                "Lockshot KT85", 
                "Bore-490", 
                "Sakin Tread-40", 
                "GL Clear Breach", 
                "Ta Hul-Breach KL", 
            ],
            "Barrel": [
                "KAS-10 584mm Barrel", 
                "KAS-7 406mm", 
                "IG-K30 406mm", 
                "Kastovia 343", 
                "342mm Sakin KL", 
            ],
            "Laser": [
                "SZ 1mw PEQ", 
                "Schlager PEQ Box IV", 
                "Corio LAZ-44 V3", 
                "FSS OLE-V Laser", 
                "Canted Vibro-Dot 7", 
                "1mw Laser Box", 
                "Stovl DR Laser Box", 
                "Corvus PEQ Beam-5", 
                "FTAC Grimline Laser", 
                "Luminate-44", 
                "DXS Flash 90", 
            ],
            "Optic": [
                "Slimline Pro", 
                "SZ Mini", 
                "Cronen Mini Red Dot", 
                "Cronen Mini Pro", 
                "SZ Sigma-IV Optic", 
                "SZ Minitac-40", 
                "XRK On-Point Optic", 
                "DF105 Reflex Sight", 
                "Monocle CT90", 
                "Corvus SOL-76", 
                "SZ Recharge-DX", 
                "SZ SRO-7", 
                "Corio RE-X Pro", 
                "Corio Enforcer Optic", 
                "SZ Lonewolf Optic", 
                "Kazan-Holo", 
                "Corvus Downrange-00", 
                "SZ Holotherm", 
                "XTEN Angel-40", 
                "VLK 4.0 Optic", 
                "Schlager 4x", 
                "Forge Tac Delta 4", 
                "Cronen Zero-P Optic", 
                "SZ Bullseye Optic", 
                "SZ Aggressor-IR Optic", 
                "Schlager Night View", 
                "VX350 Thermal Optic", 
                "Teplo-OP3 Scope", 
                "DR582 Hybrid Sight", 
                "Hybrid Firepoint", 
                "SZ Vortex-90", 
                "BPZ40 Hybrid", 
                "ANGEL-40 4.8x", 
                "Thermo-Optic X9", 
                "Teplo Clear Shot", 
                "FTAC Charlie7", 
                "HMW-20 Optic", 
                "Luca Bandera Scope", 
                "Drexsom Prime-90", 
                "Ares Clear Shot", 
            ],
            "Stock": [
                "Ivanov Wood Stock", 
                "KSTV-RPK Factory", 
                "FT TAC-Elite Stock", 
                "Kastov-Rama", 
                "Prolite TL3 Stock", 
                "Markeev R7 Stock", 
                "Underbarrel", 
                "Edge-47 Grip", 
                "Demo Firm Grip", 
                "XTEN Gravedigger", 
                "FTAC Ripper 56", 
                "Demo Cleanshot 40", 
                "Demo IMP-44 Grip", 
                "FTAC Tiger Grip", 
                "FSS Sharkfin 90", 
                "Agent Grip", 
                "Bruen Sync Shot Grip", 
                "XTEN Drop Grip", 
                "Phase-3 Grip", 
                "Merc Foregrip", 
                "Lockgrip Precision-40", 
                "Hex-40 Grip", 
                "Schlager Tango", 
                "VX Pineapple", 
                "OP-X9 Foregrip", 
                "Operator Foregrip", 
                "TV Wrecker Grip", 
                "Bruen Tilt Grip", 
                "Cronen Grooveshot Grip", 
                "Bruen Warrior Grip", 
                "Bipod V9 Grip", 
                "Level Aim Bipod", 
                "Cornerstone Bipod", 
                "XTEN Stable Shot", 
                "KL40-M2", 
                "Corvus Masterkey", 
            ],
            "Ammunition": [
                "7.62 Frangible", 
                "7.62 Armor Piercing", 
                "7.62 Hollowpoint", 
                "7.62 Overpressured +P", 
                "7.62 High Velocity", 
            ],
            "Magazine": [
                "20 Round Mag", 
                "40 Round Mag", 
            ],
            "Rear Grip": [
                "Ivanov ST-70 Grip", 
                "Demo-X2 Grip", 
                "True-Tac Grip", 
            ],
        }, 
        // STB 556
        {}, 
        // Lachmann-556
        {}, 
        // M16
        {}, 
        // Kastov 545
        {}, 
        // Kastov-74u
        {}, 
        // M13B
        {}, 
        // Chimera
        {}, 
        // ISO Hemlock
        {}
    ],
    // Battle Rifle
    [
        // Lachmann-762
        {}, 
        // SO-14
        {}, 
        // TAQ-V
        {}, 
        // FTac Recon
        {}, 
        // Cronen Squall
        {}
    ],
    // Submachine Gun
    [
        // VEL 46
        {}, 
        // PDSW 528
        {}, 
        // Fennec 45
        {}, 
        // MX9
        {}, 
        // Lachmann Sub
        {}, 
        // Vaznev-9K
        {}, 
        // FSS Hurricane
        {}, 
        // Minibak
        {}, 
        // BAS-P
        {}
    ],
    // Shotgun
    [
        // Bryson 800
        {}, 
        // Expedite 12
        {}, 
        // Lockwood 300
        {}, 
        // Bryson 890
        {}, 
        // KV Broadside
        {}
    ],
    // Light Machine Gun
    [
        // SAKIN MG38
        {}, 
        // RAAL MG
        {}, 
        // HCR 56
        {}, 
        // 556 Icarus
        {}, 
        // RPK
        {}, 
        // RAPP H
        {}
    ],
    // Marksman Rifle
    [
        // EBR-14
        {}, 
        // SP-R 208
        {}, 
        // Lockwood Mk2
        {}, 
        // LM-S
        {}, 
        // SA-B 50
        {}, 
        // TAQ-M
        {}, 
        // Crossbow
        {}, 
        // Tempus Torrent
        {}
    ],
    // Sniper Rifle
    [
        // MCPR-300
        {}, 
        // Signal 50
        {}, 
        // LA-B 330
        {}, 
        // SP-X 80
        {}, 
        // Victus XMR
        {}, 
        // FJX Imperium
        {}
    ],
    // Handgun
    [
        // P890
        {}, 
        // .50 GS
        {}, 
        // X12
        {}, 
        // Basilisk
        {}, 
        // X13 Auto
        {}, 
        // FTAC Siege
        {}, 
        // GS Magna
        {}
    ]
];