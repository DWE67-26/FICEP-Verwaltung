// --- Das Standard-Daten-Grundgerüst inklusive System 3 & 4 (wird im LocalStorage abgelegt) ---
const defaultHyperthermData = {
  system_1: [
    {
      ampere: "30A",
      komponenten: {
        Schutzkappe: { artnr: "220747", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220194", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220754", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220193", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220180", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220192", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "50A",
      komponenten: {
        Schutzkappe: { artnr: "220747", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220555", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220754", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220554", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220553", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220552", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "80A",
      komponenten: {
        Schutzkappe: { artnr: "220747", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220189", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220756", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220188", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220179", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220187", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "130A",
      komponenten: {
        Schutzkappe: { artnr: "220747", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220183", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220756", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220182", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220179", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220181", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "200A",
      komponenten: {
        Schutzkappe: { artnr: "220637", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220761", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220757", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220354", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220353", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220352", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "260A",
      komponenten: {
        Schutzkappe: { artnr: "220637", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220764", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220760", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220439", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220436", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220435", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
  ],
  system_2: [
    {
      ampere: "45A",
      komponenten: {
        Schutzkappe: { artnr: "220747", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220202", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220755", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220201", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220180", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220308", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "80A",
      komponenten: {
        Schutzkappe: { artnr: "220747", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220338", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220755", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220337", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220179", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220339", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "130A",
      komponenten: {
        Schutzkappe: { artnr: "220747", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220198", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220756", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220197", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220179", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220307", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "200A",
      komponenten: {
        Schutzkappe: { artnr: "220637", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220762", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220758", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220343", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220342", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220307", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "260A",
      komponenten: {
        Schutzkappe: { artnr: "220637", bestand: 0, bestellen: 0 },
        Schutzschild: { artnr: "220763", bestand: 0, bestellen: 0 },
        "Düsen Brennerkappe": { artnr: "220758", bestand: 0, bestellen: 0 },
        Düse: { artnr: "220406", bestand: 0, bestellen: 0 },
        Wirbelring: { artnr: "220405", bestand: 0, bestellen: 0 },
        Elektrode: { artnr: "220307", bestand: 0, bestellen: 0 },
        Wasserrohr: { artnr: "220340", bestand: 0, bestellen: 0 },
      },
    },
  ],
  system_3: [
    {
      ampere: "8,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KTFST08000HPLMKCMS15",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KTFS080R05SS10M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "10,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KTFST10000HPLMKCMS15",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KTFS100R05SS12M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "12,5",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1250HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM125R5WN16M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "14,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1400HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM140R5WN16M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "15,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1500HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM150R5WN20M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "16,5",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1650HPGMKCPM45 ",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM165R5WN20M ", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "17,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1700HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM170R5WN20M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "18,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1800HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM180R5WN20M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "20,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2000HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM200R5WN25M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "22,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2200HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM220R5WN25M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "23,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2300HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM230R5WN25M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "25,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2500HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM250R5WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "26,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2600HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM260R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "28,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2800HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM280R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "28,2",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2818HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM280R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "30,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM3000HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM300R5WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "32,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM3200HPGMKC7315",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM320R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "38,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM3800HPGMKC7315",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM380R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
  ],
  system_4: [
    {
      ampere: "8,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KTFST08000HPLMKCMS15",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KTFS080R05SS10M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "10,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KTFST10000HPLMKCMS15",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KTFS100R05SS12M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "12,5",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1250HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM125R5WN16M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "14,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1400HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM140R5WN16M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "15,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1500HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM150R5WN20M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "16,5",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1650HPGMKCPM45 ",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM165R5WN20M ", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "17,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1700HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM170R5WN20M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "18,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM1800HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM180R5WN20M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "20,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2000HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM200R5WN25M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "22,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2200HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM220R5WN25M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "23,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2300HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM230R5WN25M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "25,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2500HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM250R5WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "26,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2600HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM260R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "28,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2800HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM280R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "28,2",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM2818HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM280R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "30,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM3000HPGMKCPM45",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM300R5WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "32,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM3200HPGMKC7315",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM320R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
    {
      ampere: "38,0",
      komponenten: {
        Bohrspitzen: {
          artnr: "KE-KSEM3800HPGMKC7315",
          bestand: 0,
          bestellen: 0,
        },
        Bohrkörper: { artnr: "KE-KSEM380R3WN32M", bestand: 0, bestellen: 0 },
      },
    },
  ],
  system_5: [
    {
      ampere: "8,0",
      komponenten: {
        Fräser: {
          artnr: "KE-RUDC0800B3BN-KCPM15",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "25,0",
      komponenten: {
        Fräser: {
          artnr: "KE-25Y03R035M12SWP05",
          bestand: 0,
          bestellen: 0,
        },
        Wendeplatten: {
          artnr: "KE-WPMT05X315ZZERGPKC522M",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "K63,0",
      komponenten: {
        Fräser: {
          artnr: "KE-25Y03R035M12SWP05",
          bestand: 0,
          bestellen: 0,
        },
        "Wendeplatte SEHT PTT35": {
          artnr: "Karcher 4215981110",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "63,0",
      komponenten: {
        Fräser: {
          artnr: "KE-KSSM88D063Z05SN10",
          bestand: 0,
          bestellen: 0,
        },
        Wendeschneidplatten: {
          artnr: "SNPJ10T308SNGD KCPM40",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "Scribing",
      komponenten: {
        Wendeplatten: {
          artnr: "NO-CGX1242TIN",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
  ],
  system_6: [
    {
      ampere: "2000x1000",
      komponenten: {
        "1,5_stahl_blank": {
          artnr: "Stahl DC01",
          dicke: 1.5,
          material: "Stahl",
          oberflaeche: "Blank",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "2500x1250",
      komponenten: {
        "1,5_stahl_blank": {
          artnr: "Stahl DC01",
          dicke: 1.5,
          material: "Stahl",
          oberflaeche: "Tränenblech",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "3000x1500",
      komponenten: {
        "3,0_stahl_blank": {
          artnr: "Stahl DC01",
          dicke: 3.0,
          material: "Stahl",
          oberflaeche: "Blank",
          bestand: 0,
          bestellen: 0,
        },
        "3,0_v4a_blank": {
          artnr: "V4A 1.4571",
          dicke: 3.0,
          material: "Edelstahl",
          oberflaeche: "Blank",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "4000x2000",
      komponenten: {
        "4,0_stahl_blank": {
          artnr: "Stahl DC01",
          dicke: 4.0,
          material: "Stahl",
          oberflaeche: "Blank",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "6000x2000",
      komponenten: {
        "10,0_stahl_blank": {
          artnr: "Stahl DC01",
          dicke: 10.0,
          material: "Stahl",
          oberflaeche: "Blank",
          bestand: 0,
          bestellen: 0,
        },
        "15,0_stahl_blank": {
          artnr: "Stahl DC01",
          dicke: 15.0,
          material: "Stahl",
          oberflaeche: "Blank",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
    {
      ampere: "6000x2500",
      komponenten: {
        "15,0_stahl_blank": {
          artnr: "Stahl DC01",
          dicke: 15.0,
          material: "Stahl",
          oberflaeche: "Blank",
          bestand: 0,
          bestellen: 0,
        },
      },
    },
  ],
};
// Vordefinierte Optionen für das Blechsystem im Adminbereich
const BLECH_OPTIONEN = {
  materialien: ["Stahl", "Edelstahl", "Aluminium", "Mangan", "Corten"],
  oberflaechen: [
    "Blank",
    "Verzinkt",
    "Einseitig foliert",
    "Einseitig geschliffen",
    "Tränenblech",
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Hamburger Menü Logik ---
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".nav-link");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
      navToggle.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
      }
    });
  }
  // Aktiven Link markieren
  const currentPath = window.location.pathname.split("/").pop();
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (
      (currentPath === "" || currentPath === "index.html") &&
      linkPath === "index.html"
    ) {
      link.classList.add("active");
    } else if (currentPath === linkPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  // --- 2. LocalStorage Initialisierung & Tabellen-Logik ---
  const systemSelect = document.getElementById("system-select");
  const ampereSelect = document.getElementById("ampere-select");
  const tableBody = document.getElementById("table-body");

  const sendEmailBtn = document.getElementById("send-email-btn");
  const sendStockBtn = document.getElementById("send-stock-btn");

  // Falls das Master-Objekt noch nicht existiert, jetzt anlegen
  if (!localStorage.getItem("hypertherm_master_data")) {
    localStorage.setItem(
      "hypertherm_master_data",
      JSON.stringify(defaultHyperthermData),
    );
  }
  function getMasterData() {
    return JSON.parse(localStorage.getItem("hypertherm_master_data"));
  }
  function saveMasterData(data) {
    localStorage.setItem("hypertherm_master_data", JSON.stringify(data));
  }
  // ==========================================================================
  // HIER REINKOPIEREN: Blech-Filter dynamisch aus BLECH_OPTIONEN befüllen
  // ==========================================================================
  const mainMatSelect = document.getElementById("material-select");
  const mainObfSelect = document.getElementById("oberflaeche-select");

  if (mainMatSelect) {
    mainMatSelect.innerHTML = '<option value="ALLE">ALLE Materialien</option>';
    BLECH_OPTIONEN.materialien.forEach((m) => {
      const opt = document.createElement("option");
      opt.value = m;
      opt.textContent = m;
      mainMatSelect.appendChild(opt);
    });
  }

  if (mainObfSelect) {
    mainObfSelect.innerHTML = '<option value="ALLE">ALLE Oberflächen</option>';
    BLECH_OPTIONEN.oberflaechen.forEach((o) => {
      const opt = document.createElement("option");
      opt.value = o;
      opt.textContent = o;
      mainObfSelect.appendChild(opt);
    });
  }
  // ==========================================================================
  if (systemSelect && ampereSelect && tableBody) {
    function updateAmpereOptions() {
      const hyperthermData = getMasterData();
      const selectedSystem = systemSelect.value;
      const dataSet = hyperthermData[selectedSystem];
      ampereSelect.innerHTML = "";
      dataSet.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.ampere;
        option.textContent = item.ampere;
        ampereSelect.appendChild(option);
      });
      renderTable();
    }

    function isNullBestandExportActive() {
      return localStorage.getItem("null_bestand_filter_active") === "true";
    }

    function renderTable() {
      const hyperthermData = getMasterData();
      const system = systemSelect.value;
      const ampere = ampereSelect.value;
      if (!ampere) return;

      const selectedData = hyperthermData[system].find(
        (item) => item.ampere === ampere,
      );
      tableBody.innerHTML = "";

      // Prüfen, ob wir uns im Blechsystem befinden
      const isBlechSystem = system === "system_6";

      // KORREKTUR: Greift die Spaltenüberschriften jetzt sicher über die neuen Klassen gegeneinander ab
      const thMaterial = document.querySelector(".th-blech-material");
      const thOberflaeche = document.querySelector(".th-blech-oberflaeche");

      // Nur schalten, wenn die Elemente auf der aktuellen Seite überhaupt existieren
      if (thMaterial) thMaterial.style.display = isBlechSystem ? "" : "none";
      if (thOberflaeche)
        thOberflaeche.style.display = isBlechSystem ? "" : "none";

      if (selectedData) {
        // Werte der Filter auslesen
        const filterMat =
          document.getElementById("material-select")?.value || "ALLE";
        const filterObf =
          document.getElementById("oberflaeche-select")?.value || "ALLE";

        Object.entries(selectedData.komponenten).forEach(([key, info]) => {
          // Filter nur beim Blechsystem anwenden
          if (isBlechSystem) {
            if (filterMat !== "ALLE" && info.material !== filterMat) return;
            if (filterObf !== "ALLE" && info.oberflaeche !== filterObf) return;
          }

          // NEU: Dicke/Name sicher aus den Objekteigenschaften oder via Fallback auslesen
          const anzeigeName = isBlechSystem
            ? `${info.dicke || key.split("_")[0]} mm`
            : key;

          let stockColor = "#28a745";
          if (info.bestand >= 0 && info.bestand <= 2) stockColor = "#ff4d4d";
          else if (info.bestand >= 3 && info.bestand <= 4)
            stockColor = "#ffc107";

          const tr = document.createElement("tr");

          // Inhalt befüllen: Die Daten-Zellen steuern sich synchron zum System
          tr.innerHTML = `
            <td><strong>${anzeigeName}</strong></td>
            <td><code>${info.artnr}</code></td>
            <td style="display: ${isBlechSystem ? "" : "none"}"><span class="badge-material">${info.material || ""}</span></td>
            <td style="display: ${isBlechSystem ? "" : "none"}"><span class="badge-oberflaeche">${info.oberflaeche || ""}</span></td>
            <td>
                <div class="counter-group">
                    <button class="count-btn" onclick="changeValue('${system}', '${ampere}', '${key}', 'bestand', -1)">-</button>
                    <span class="count-value" style="color: ${stockColor}; font-weight: bold;">${info.bestand}</span>
                    <button class="count-btn" onclick="changeValue('${system}', '${ampere}', '${key}', 'bestand', 1)">+</button>
                </div>
            </td>
            <td>
                <div class="counter-group">
                    <button class="count-btn" onclick="changeValue('${system}', '${ampere}', '${key}', 'bestellen', -1)">-</button>
                    <span class="count-value">${info.bestellen}</span>
                    <button class="count-btn" onclick="changeValue('${system}', '${ampere}', '${key}', 'bestellen', 1)">+</button>
                </div>
            </td>
        `;
          tableBody.appendChild(tr);
        });
      }
    }

    // Vergiss nicht, die Event-Listener im DOMContentLoaded zu registrieren:
    document
      .getElementById("material-select")
      ?.addEventListener("change", renderTable);
    document
      .getElementById("oberflaeche-select")
      ?.addEventListener("change", renderTable);

    // Globale Wertänderung im LocalStorage
    window.changeValue = function (system, ampere, compName, field, change) {
      const data = getMasterData();
      const systemData = data[system];
      const ampereRow = systemData.find((item) => item.ampere === ampere);

      if (ampereRow && ampereRow.komponenten[compName]) {
        let currentVal = ampereRow.komponenten[compName][field] || 0;
        currentVal += change;
        if (currentVal < 0) currentVal = 0;

        ampereRow.komponenten[compName][field] = currentVal;
        saveMasterData(data);
        renderTable();
      }
    };

    systemSelect.addEventListener("change", updateAmpereOptions);
    ampereSelect.addEventListener("change", renderTable);

    updateAmpereOptions();

    // Text Padding Hilfsfunktion für die E-Mail Ausrichtung
    const pad = (str, width) => {
      str = String(str);
      return str.length >= width ? str : str + " ".repeat(width - str.length);
    };

    // --- BUTTON 1: E-Mail für BESTELLUNGEN (nur Mengen > 0) ---
    if (sendEmailBtn) {
      sendEmailBtn.addEventListener("click", () => {
        const hyperthermData = getMasterData();
        let orderItems = [];

        // Definierte Spaltenbreiten für eine saubere Text-Tabelle
        const widthSystem = 20; // Format / Ampere
        const widthName = 15; // Dicke / Komponente
        const widthArtNr = 25; // Bezeichnung
        const widthMat = 15; // Material
        const widthObf = 25; // Oberfläche

        Object.entries(hyperthermData).forEach(([systemKey, systemData]) => {
          const isBlechSystem = systemKey === "system_6";

          systemData.forEach((row) => {
            const ampere = row.ampere; // Format bei Blech
            Object.entries(row.komponenten).forEach(([name, info]) => {
              if (info.bestellen > 0) {
                const colSystem = pad(`${ampere}`, widthSystem);

                // Dicke sauber formatieren, falls es das Blechsystem ist
                const anzeigeName = isBlechSystem
                  ? name.split("_")[0] + " mm"
                  : name;
                const colName = pad(anzeigeName, widthName);
                const colArt = pad(`${info.artnr}`, widthArtNr);

                // Zusatzfelder für Blech berücksichtigen
                const colMat = pad(
                  isBlechSystem ? info.material || "Stahl" : "-",
                  widthMat,
                );
                const colObf = pad(
                  isBlechSystem ? info.oberflaeche || "Standard" : "-",
                  widthObf,
                );

                const colMenge = `${info.bestellen}x`;

                orderItems.push(
                  `${colSystem}${colName}${colArt}${colMat}${colObf}${colMenge}`,
                );
              }
            });
          });
        });

        if (orderItems.length === 0) {
          alert("Es wurden keine Artikel zur Bestellung ausgewählt.");
          return;
        }

        const emailEmpfaenger = "bestellung@ihre-firma.de";
        const betreff = "Komponenten- und Blechbestellung";

        let textKoerper =
          "Hallo,\n\nhiermit bestelle ich folgende Materialien/Komponenten:\n\n";
        textKoerper +=
          pad("FORMAT/AMPERE", widthSystem) +
          pad("DICKE/TYP", widthName) +
          pad("BEZEICHNUNG/ART-NR", widthArtNr) +
          pad("MATERIAL", widthMat) +
          pad("OBERFLÄCHE", widthObf) +
          "MENGE\n";
        textKoerper +=
          "=".repeat(
            widthSystem + widthName + widthArtNr + widthMat + widthObf + 10,
          ) + "\n";
        textKoerper += orderItems.join("\n");
        textKoerper += "\n\nMit freundlichen Grüßen";

        window.location.href = `mailto:${emailEmpfaenger}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(textKoerper)}`;
      });
    }

    // --- BUTTON 2: E-Mail für BESTANDSÜBERSICHT ---
    if (sendStockBtn) {
      sendStockBtn.addEventListener("click", () => {
        const hyperthermData = getMasterData();
        const selectedSystemKey = systemSelect.value;

        if (!selectedSystemKey || !hyperthermData[selectedSystemKey]) {
          alert("Es wurde kein gültiges System ausgewählt.");
          return;
        }

        const isBlechSystem = selectedSystemKey === "system_6";

        // Spaltenbreiten festlegen
        const widthAmpere = 20; // Format / Ampere
        const widthName = 15; // Dicke / Komponente
        const widthArtNr = 25; // Bezeichnung
        const widthMat = 15; // Material
        const widthObf = 25; // Oberfläche

        const emailEmpfaenger = "lager@ihre-firma.de";
        const systemNameClean = selectedSystemKey
          .replace("_", " ")
          .toUpperCase();
        const zeigeAlle = isNullBestandExportActive();

        const betreff = `Bestandsübersicht - ${systemNameClean}`;
        let zusatzText = zeigeAlle
          ? "(Vollständige Liste inklusive Null-Bestände)"
          : "(Artikel ohne Bestand wurden automatisch ausgeblendet)";

        let textKoerper = `Hallo,\n\nanbei die Übersicht der aktuellen Bestände im Lager für ${systemNameClean} ${zusatzText}:\n\n`;

        textKoerper += `=== ${systemNameClean} ===\n`;
        textKoerper +=
          pad(isBlechSystem ? "FORMAT" : "AMPERE / GRÖSSE", widthAmpere) +
          pad(isBlechSystem ? "DICKE" : "KOMPONENTE", widthName) +
          pad(isBlechSystem ? "BEZEICHNUNG" : "ARTIKELNUMMER", widthArtNr) +
          pad("MATERIAL", widthMat) +
          pad("OBERFLÄCHE", widthObf) +
          "BESTAND\n";
        textKoerper +=
          "-".repeat(
            widthAmpere + widthName + widthArtNr + widthMat + widthObf + 12,
          ) + "\n";

        let systemItems = [];
        const systemData = hyperthermData[selectedSystemKey];

        systemData.forEach((row) => {
          const ampere = row.ampere;
          Object.entries(row.komponenten).forEach(([name, info]) => {
            if (!zeigeAlle && info.bestand === 0) {
              return;
            }

            const colAmpere = pad(ampere, widthAmpere);
            const anzeigeName = isBlechSystem
              ? name.split("_")[0] + " mm"
              : name;
            const colName = pad(anzeigeName, widthName);
            const colArt = pad(info.artnr, widthArtNr);

            const colMat = pad(
              isBlechSystem ? info.material || "Stahl" : "-",
              widthMat,
            );
            const colObf = pad(
              isBlechSystem ? info.oberflaeche || "Standard" : "-",
              widthObf,
            );

            const colMenge = `${info.bestand}x`;

            systemItems.push(
              `${colAmpere}${colName}${colArt}${colMat}${colObf}${colMenge}`,
            );
          });
        });

        if (systemItems.length === 0) {
          alert(
            "In diesem System haben aktuell alle Komponenten einen Bestand von 0 und der Filter blendet diese aus.",
          );
          return;
        }

        textKoerper += systemItems.join("\n");
        textKoerper += "\n\nMit freundlichen Grüßen";

        window.location.href = `mailto:${emailEmpfaenger}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(textKoerper)}`;
      });
    }
  }

  // ==========================================================================
  // ADMINISTRATIVER BEREICH (Läuft völlig unabhängig auf admin.html)
  // ==========================================================================

  const adminSystemSelect = document.getElementById("admin-system-select");
  const adminAmpereSelect = document.getElementById("admin-ampere-select");
  const adminExistCompSelect = document.getElementById(
    "admin-exist-comp-select",
  );
  const adminCompNameInput = document.getElementById("admin-comp-name");
  const adminCompArtNrInput = document.getElementById("admin-comp-artnr");

  const addComponentBtn = document.getElementById("add-component-btn");
  const deleteComponentBtn = document.getElementById("delete-component-btn");

  // ==========================================================================
  // SYSTEM-MANAGER LOGIK
  // ==========================================================================
  const sysActionSelect = document.getElementById("admin-sys-action");
  const sysTargetSelect = document.getElementById("admin-sys-target-select");
  const sysNameInput = document.getElementById("admin-sys-name-input");
  const executeSysBtn = document.getElementById("execute-sys-action-btn");

  const sysSelectContainer = document.getElementById(
    "admin-sys-select-container",
  );
  const sysNameContainer = document.getElementById("admin-sys-name-container");

  if (sysActionSelect && sysNameInput && executeSysBtn) {
    function updateSystemManagerDropdowns() {
      if (!sysTargetSelect) return;
      const data = getMasterData();
      sysTargetSelect.innerHTML = "";

      Object.keys(data).forEach((sysKey) => {
        const option = document.createElement("option");
        option.value = sysKey;
        option.textContent = sysKey.replace("_", " ").toUpperCase();
        sysTargetSelect.appendChild(option);
      });

      if (typeof updateAdminAmpereOptions === "function" && adminSystemSelect) {
        const currentSelection = adminSystemSelect.value;
        adminSystemSelect.innerHTML = "";
        Object.keys(data).forEach((sysKey) => {
          const option = document.createElement("option");
          option.value = sysKey;
          option.textContent = sysKey.replace("_", " ").toUpperCase();
          adminSystemSelect.appendChild(option);
        });
        if (data[currentSelection]) {
          adminSystemSelect.value = currentSelection;
        } else {
          updateAdminAmpereOptions();
        }
      }
    }

    sysActionSelect.addEventListener("change", () => {
      const action = sysActionSelect.value;
      if (action === "ADD") {
        sysSelectContainer.style.display = "none";
        sysNameContainer.style.display = "block";
      } else if (action === "RENAME") {
        sysSelectContainer.style.display = "block";
        sysNameContainer.style.display = "block";
      } else if (action === "DELETE") {
        sysSelectContainer.style.display = "block";
        sysNameContainer.style.display = "none";
      }
    });

    executeSysBtn.addEventListener("click", () => {
      const action = sysActionSelect.value;
      const rawName = sysNameInput.value.trim().toLowerCase();
      const cleanName = rawName.replace(/[^a-z0-9_]/g, "");
      const data = getMasterData();

      if (action === "ADD") {
        if (!cleanName) {
          alert("Bitte gib einen gültigen Systemnamen ein.");
          return;
        }
        if (data[cleanName]) {
          alert("Dieses System existiert bereits.");
          return;
        }
        data[cleanName] = [];
        saveMasterData(data);
        alert(`System "${cleanName}" wurde erfolgreich angelegt!`);
      } else if (action === "RENAME") {
        const targetSys = sysTargetSelect.value;
        if (!cleanName) {
          alert("Bitte gib einen neuen Namen ein.");
          return;
        }
        if (data[cleanName]) {
          alert("Der gewählte Name existiert bereits.");
          return;
        }
        data[cleanName] = data[targetSys];
        delete data[targetSys];
        saveMasterData(data);
        alert(
          `System wurde erfolgreich von "${targetSys}" in "${cleanName}" umbenannt!`,
        );
      } else if (action === "DELETE") {
        const targetSys = sysTargetSelect.value;
        if (
          confirm(
            `Möchtest du das System "${targetSys}" wirklich unwiderruflich löschen?`,
          )
        ) {
          delete data[targetSys];
          saveMasterData(data);
          alert(`System "${targetSys}" wurde gelöscht.`);
        }
      }

      sysNameInput.value = "";
      updateSystemManagerDropdowns();
    });

    updateSystemManagerDropdowns();
  }
  // ==========================================================================
  // BEREICH: GRÖSSEN / AMPERE MANAGER (NEU)
  // ==========================================================================
  const addAmpereBtn = document.getElementById("add-ampere-btn");
  const deleteAmpereBtn = document.getElementById("delete-ampere-btn");
  const newAmpereInput = document.getElementById("admin-new-ampere");

  if (adminSystemSelect) {
    // A: Neue Ampere-Stufe / Größe hinzufügen
    if (addAmpereBtn && newAmpereInput) {
      addAmpereBtn.addEventListener("click", () => {
        const system = adminSystemSelect.value;
        const newAmpere = newAmpereInput.value.trim();

        if (newAmpere === "") {
          alert(
            "Bitte gib einen Wert für die neue Ampere-Stufe oder Größe ein.",
          );
          return;
        }

        const data = getMasterData();
        const systemData = data[system] || [];

        // Prüfen ob die Stufe bereits existiert
        const existiertBereits = systemData.some(
          (item) => item.ampere === newAmpere,
        );
        if (existiertBereits) {
          alert(
            "Diese Ampere-Stufe / Größe existiert bereits in diesem System.",
          );
          return;
        }

        // Neue leere Zeile pushen
        systemData.push({
          ampere: newAmpere,
          komponenten: {},
        });

        data[system] = systemData;
        saveMasterData(data);
        alert(
          `Größe "${newAmpere}" wurde erfolgreich zu ${system.toUpperCase()} hinzugefügt!`,
        );
        newAmpereInput.value = "";
        updateAdminAmpereOptions();
      });
    }

    // B: Ampere-Stufe / Größe löschen (Nur wenn keine Komponenten enthalten sind)
    if (deleteAmpereBtn) {
      deleteAmpereBtn.addEventListener("click", () => {
        const system = adminSystemSelect.value;
        const ampere = adminAmpereSelect.value;

        if (!ampere) {
          alert("Keine Ampere-Stufe / Größe zum Löschen ausgewählt.");
          return;
        }

        const data = getMasterData();
        const systemData = data[system] || [];
        const index = systemData.findIndex((item) => item.ampere === ampere);

        if (index !== -1) {
          const row = systemData[index];
          // Sicherheitsprüfung: Sind noch Komponenten enthalten?
          if (row.komponenten && Object.keys(row.komponenten).length > 0) {
            alert(
              `Löschen verweigert: Die Größe "${ampere}" enthält noch aktive Komponenten. Lösche zuerst alle Komponenten dieser Größe.`,
            );
            return;
          }

          if (
            confirm(
              `Möchtest du die leere Größe "${ampere}" wirklich aus dem System entfernen?`,
            )
          ) {
            systemData.splice(index, 1);
            data[system] = systemData;
            saveMasterData(data);
            alert(`Größe "${ampere}" wurde erfolgreich entfernt.`);
            updateAdminAmpereOptions();
          }
        }
      });
    }
  }

  const nullBestandToggleAdmin = document.getElementById("null-bestand-toggle");
  if (nullBestandToggleAdmin) {
    const filterAktiv =
      localStorage.getItem("null_bestand_filter_active") === "true";
    nullBestandToggleAdmin.checked = filterAktiv;
    nullBestandToggleAdmin.addEventListener("change", (e) => {
      localStorage.setItem("null_bestand_filter_active", e.target.checked);
    });
  }

  if (adminSystemSelect && adminAmpereSelect && adminExistCompSelect) {
    const adminCompMaterialInput = document.getElementById(
      "admin-comp-material",
    );
    const adminCompOberflaecheInput = document.getElementById(
      "admin-comp-oberflaeche",
    );
    const blechSpezifikationenContainer = document.getElementById(
      "admin-blech-spezifikationen-container",
    );

    function toggleBlechFields() {
      const isBlech = adminSystemSelect.value === "system_6";

      const standardContainer = document.getElementById(
        "admin-standard-spezifikationen-container",
      );
      const blechContainer = document.getElementById(
        "admin-blech-spezifikationen-container",
      );

      if (standardContainer)
        standardContainer.style.display = isBlech ? "none" : "block";
      if (blechContainer) {
        blechContainer.style.display = isBlech ? "block" : "none";

        // Dynamisch die Dropdowns initialisieren, falls sie noch leer sind
        if (isBlech) {
          const matSelect = document.getElementById("admin-comp-material");
          const obfSelect = document.getElementById("admin-comp-oberflaeche");

          if (
            matSelect &&
            matSelect.tagName === "SELECT" &&
            matSelect.options.length <= 1
          ) {
            matSelect.innerHTML =
              '<option value="">-- Material wählen --</option>';
            BLECH_OPTIONEN.materialien.forEach((m) => {
              const opt = document.createElement("option");
              opt.value = m;
              opt.textContent = m;
              matSelect.appendChild(opt);
            });
          }

          if (
            obfSelect &&
            obfSelect.tagName === "SELECT" &&
            obfSelect.options.length <= 1
          ) {
            obfSelect.innerHTML =
              '<option value="">-- Oberfläche wählen --</option>';
            BLECH_OPTIONEN.oberflaechen.forEach((o) => {
              const opt = document.createElement("option");
              opt.value = o;
              opt.textContent = o;
              obfSelect.appendChild(opt);
            });
          }
        }
      }

      if (!isBlech) {
        fillInputs("", "", "", "", "");
      }
    }

    function updateAdminAmpereOptions() {
      toggleBlechFields();
      const hyperthermData = getMasterData();
      const selectedSystem = adminSystemSelect.value;
      const dataSet = hyperthermData[selectedSystem] || [];

      adminAmpereSelect.innerHTML = "";
      dataSet.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.ampere;
        option.textContent = item.ampere;
        adminAmpereSelect.appendChild(option);
      });

      updateExistCompOptions();
    }

    // KORREKTUR: Korrekte Array-Anzeige für Blechnamen im Dropdown
    function updateExistCompOptions() {
      const hyperthermData = getMasterData();
      const system = adminSystemSelect.value;
      const ampere = adminAmpereSelect.value;

      adminExistCompSelect.innerHTML = "";

      const defaultOption = document.createElement("option");
      defaultOption.value = "_NEU_";
      defaultOption.textContent =
        system === "system_6"
          ? "-- Neues Blech anlegen --"
          : "-- Neue Komponente anlegen --";
      adminExistCompSelect.appendChild(defaultOption);

      if (!ampere || !hyperthermData[system]) {
        fillInputs("", "", "", "", "");
        return;
      }

      const ampereRow = hyperthermData[system].find(
        (item) => item.ampere === ampere,
      );

      if (ampereRow && ampereRow.komponenten) {
        Object.entries(ampereRow.komponenten).forEach(([name, info]) => {
          const option = document.createElement("option");
          option.value = name;
          const displayName =
            system === "system_6"
              ? `${name.split("_")[0]} mm (${info.artnr})`
              : `${name} (Nr: ${info.artnr})`;
          option.textContent = displayName;
          adminExistCompSelect.appendChild(option);
        });
      }

      handleCompSelection();
    }

    // KORREKTUR: Dicke wird nun sauber gesplittet und befüllt
    function handleCompSelection() {
      const hyperthermData = getMasterData();
      const system = adminSystemSelect.value;
      const ampere = adminAmpereSelect.value;
      const selectedComp = adminExistCompSelect.value;

      if (selectedComp === "_NEU_") {
        fillInputs("", "", "", "", "");
      } else {
        const ampereRow = hyperthermData[system].find(
          (item) => item.ampere === ampere,
        );
        if (ampereRow && ampereRow.komponenten[selectedComp]) {
          const comp = ampereRow.komponenten[selectedComp];
          const dicke = system === "system_6" ? comp.dicke || "" : "";

          fillInputs(
            system === "system_6" ? "" : selectedComp,
            comp.artnr || "",
            comp.material || "",
            comp.oberflaeche || "",
            dicke,
          );
        }
      }
    }

    function fillInputs(name, artnr, material, oberflaeche, dicke) {
      if (adminCompNameInput) adminCompNameInput.value = name;

      // Werte in die Dropdowns oder Textfelder setzen
      const matSelect = document.getElementById("admin-comp-material");
      const obfSelect = document.getElementById("admin-comp-oberflaeche");
      if (matSelect) matSelect.value = material;
      if (obfSelect) obfSelect.value = oberflaeche;

      const dickeInput = document.getElementById("admin-comp-dicke");
      if (dickeInput) dickeInput.value = dicke;

      if (adminCompArtNrInput) adminCompArtNrInput.value = artnr;
      const adminBlechArtNrInput = document.getElementById("admin-blech-artnr");
      if (adminBlechArtNrInput) adminBlechArtNrInput.value = artnr;
    }

    adminSystemSelect.addEventListener("change", updateAdminAmpereOptions);
    adminAmpereSelect.addEventListener("change", updateExistCompOptions);
    adminExistCompSelect.addEventListener("change", handleCompSelection);

    updateAdminAmpereOptions();

    if (addComponentBtn) {
      addComponentBtn.addEventListener("click", () => {
        const system = adminSystemSelect.value;
        const ampere = adminAmpereSelect.value;
        const selectedCompBefore = adminExistCompSelect.value;

        let compName = "";
        let compArtNr = "";
        let compMaterial = "";
        let compOberflaeche = "";
        let dickeNum = 0;

        if (system === "system_6") {
          const dickeInput = document.getElementById("admin-comp-dicke");
          const dickeRaw = dickeInput
            ? dickeInput.value.trim().replace(",", ".")
            : "";
          dickeNum = parseFloat(dickeRaw);

          compMaterial = adminCompMaterialInput
            ? adminCompMaterialInput.value.trim()
            : "";
          compOberflaeche = adminCompOberflaecheInput
            ? adminCompOberflaecheInput.value.trim()
            : "";

          // Liest die Artikelnummer aus dem spezifischen Blech-Feld aus
          const adminBlechArtNrInput =
            document.getElementById("admin-blech-artnr");
          compArtNr = adminBlechArtNrInput
            ? adminBlechArtNrInput.value.trim()
            : "";

          // FEHLERPRÜFUNG
          if (
            isNaN(dickeNum) ||
            dickeNum <= 0 ||
            compMaterial === "" ||
            compOberflaeche === "" ||
            compArtNr === ""
          ) {
            alert(
              "Bitte fülle alle Eigenschaften (Dicke, Material, Oberfläche) und die Artikelnummer aus!",
            );
            return;
          }

          const cleanMat = compMaterial.toLowerCase().replace(/[^a-z0-9]/g, "");
          const cleanObf = compOberflaeche
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
          compName = `${dickeRaw}_${cleanMat}_${cleanObf}`;
        } else {
          compName = adminCompNameInput.value.trim();
          compArtNr = adminCompArtNrInput.value.trim(); // Liest aus dem Standard-Feld aus

          if (compName === "" || compArtNr === "") {
            alert(
              "Bitte fülle sowohl den Namen als auch die Artikelnummer/Bezeichnung aus.",
            );
            return;
          }
        }

        const data = getMasterData();
        const ampereRow = data[system].find((item) => item.ampere === ampere);

        if (ampereRow) {
          if (
            selectedCompBefore !== "_NEU_" &&
            selectedCompBefore !== compName
          ) {
            delete ampereRow.komponenten[selectedCompBefore];
          }

          const alterBestand =
            selectedCompBefore !== "_NEU_" &&
            ampereRow.komponenten[selectedCompBefore]
              ? ampereRow.komponenten[selectedCompBefore].bestand
              : 0;
          const alteBestellung =
            selectedCompBefore !== "_NEU_" &&
            ampereRow.komponenten[selectedCompBefore]
              ? ampereRow.komponenten[selectedCompBefore].bestellen
              : 0;

          ampereRow.komponenten[compName] = {
            artnr: compArtNr,
            bestand: alterBestand,
            bestellen: alteBestellung,
          };

          if (system === "system_6") {
            ampereRow.komponenten[compName].dicke = dickeNum;
            ampereRow.komponenten[compName].material = compMaterial;
            ampereRow.komponenten[compName].oberflaeche = compOberflaeche;
          }

          saveMasterData(data);
          alert(`Erfolgreich gespeichert unter dem Schlüssel: "${compName}"`);
          updateExistCompOptions();
        }
      });
    }

    if (deleteComponentBtn) {
      deleteComponentBtn.addEventListener("click", () => {
        const system = adminSystemSelect.value;
        const ampere = adminAmpereSelect.value;
        const selectedComp = adminExistCompSelect.value;

        let compName = "";
        if (system === "system_6") {
          compName = selectedComp;
        } else {
          compName = adminCompNameInput.value.trim();
        }

        if (!compName || compName === "_NEU_") {
          alert("Bitte wähle einen gültigen Eintrag zum Löschen aus.");
          return;
        }

        const data = getMasterData();
        const ampereRow = data[system].find((item) => item.ampere === ampere);

        if (ampereRow && ampereRow.komponenten[compName]) {
          const anzeigeName =
            system === "system_6" ? compName.split("_")[0] + " mm" : compName;
          if (
            confirm(
              `Möchtest du den Eintrag "${anzeigeName}" wirklich aus ${system.toUpperCase()} (${ampere}) löschen?`,
            )
          ) {
            delete ampereRow.komponenten[compName];
            saveMasterData(data);
            alert(`"${anzeigeName}" wurde erfolgreich entfernt.`);
            updateExistCompOptions();
          }
        } else {
          alert(`Fehler: Kein Eintrag mit dem Namen "${compName}" gefunden.`);
        }
      });
    }
  }

  const resetOrdersBtn = document.getElementById("reset-orders-btn");
  if (resetOrdersBtn) {
    resetOrdersBtn.addEventListener("click", () => {
      if (
        confirm(
          "Möchtest du wirklich alle eingetragenen Bestellwerte auf 0 zurücksetzen?",
        )
      ) {
        const data = getMasterData();
        Object.entries(data).forEach(([systemKey, systemData]) => {
          systemData.forEach((row) => {
            Object.entries(row.komponenten).forEach(([name, info]) => {
              info.bestellen = 0;
            });
          });
        });
        saveMasterData(data);
        alert("Alle Bestellwerte wurden erfolgreich auf 0 zurückgesetzt!");
      }
    });
  }

  const exportBackupBtn = document.getElementById("export-backup-btn");
  if (exportBackupBtn) {
    exportBackupBtn.addEventListener("click", () => {
      const dataStr = localStorage.getItem("hypertherm_master_data");
      if (!dataStr) {
        alert("Keine Daten zum Sichern vorhanden.");
        return;
      }
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const datum = new Date().toISOString().slice(0, 10);
      a.download = `hypertherm_lager_backup_${datum}.json`;
      a.href = url;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  // --- BUTTON 5: BACKUP EINSPIELEN (IMPORT - KORRIGIERT) ---
  const importBackupBtn = document.getElementById("import-backup-btn");
  if (importBackupBtn) {
    importBackupBtn.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";

      input.addEventListener("change", (e) => {
        const files = e.target.files;
        // KORREKTUR: Prüfen ob ein Dateiobjekt existiert und gezielt das erste Element (Blob) greifen
        if (!files || files.length === 0) return;
        const targetFile = files[0];

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const importedData = JSON.parse(event.target.result);
            if (importedData.system_1 || importedData.system_6) {
              if (confirm("Möchtest du dieses Backup wirklich einspielen?")) {
                localStorage.setItem(
                  "hypertherm_master_data",
                  JSON.stringify(importedData),
                );
                alert("Backup erfolgreich wiederhergestellt!");
                if (typeof updateAdminAmpereOptions === "function")
                  updateAdminAmpereOptions();
              }
            } else {
              alert("Fehler: Ungültiges Backup-Format.");
            }
          } catch (err) {
            alert("Fehler beim Lesen der Datei.");
          }
        };
        // Führt den FileReader nun fehlerfrei mit dem echten Blob-Objekt aus
        reader.readAsText(targetFile);
      });
      input.click();
    });
  }
});
