// FIX: Replaced placeholder content with a barrel file that imports and exports all Surah data.
import type { Surah } from '../types';
import { AL_FATIHAH } from './al-fatihah';
import { AL_BAQARAH } from './al-baqarah';
import { ALI_IMRAN } from './ali-imran';
import { AN_NISA } from './an-nisa';
import { AL_MAIDAH } from './al-maidah';
import { AL_ANAM } from './al-anam';
import { AL_ARAF } from './al-araf';
import { AL_ANFAL } from './al-anfal';
import { AT_TAWBAH } from './at-tawbah';
import { YUNUS } from './yunus';
import { HUD } from './hud';
import { YUSUF } from './yusuf';
import { AR_RAD } from './ar-rad';
import { IBRAHIM } from './ibrahim';
import { AL_HIJR } from './al-hijr';
import { AN_NAHL } from './an-nahl';
import { AL_ISRA } from './al-isra';
import { AL_KAHF } from './al-kahf';
import { MARYAM } from './maryam';
import { TAHA } from './taha';
import { AL_ANBYA } from './al-anbya';
import { AL_HAJJ } from './al-hajj';
import { AL_MUMINUN } from './al-muminun';
import { AN_NUR } from './an-nur';
import { AL_FURQAN } from './al-furqan';
import { ASH_SHUARA } from './ash-shuara';
import { AN_NAML } from './an-naml';
import { AL_QASAS } from './al-qasas';
import { AL_ANKABUT } from './al-ankabut';
import { AR_RUM } from './ar-rum';
import { LUQMAN } from './luqman';
import { AS_SAJDAH } from './as-sajdah';
import { AL_AHZAB } from './al-ahzab';
import { SABA } from './saba';
import { FATIR } from './fatir';
import { YA_SIN } from './ya-sin';
import { AS_SAFFAT } from './as-saffat';
import { SAD } from './sad';
import { AZ_ZUMAR } from './az-zumar';
import { GHAFIR } from './ghafir';
import { FUSSILAT } from './fussilat';
import { ASY_SYURA } from './ash-shuraa';
import { AZ_ZUKHRUF } from './az-zukhruf';
import { AD_DUKHAN } from './ad-dukhan';
import { AL_JATHIYAH } from './al-jathiyah';
import { AL_AHQAF } from './al-ahqaf';
import { MUHAMMAD } from './muhammad';
import { AL_FATH } from './al-fath';
import { AL_HUJURAT } from './al-hujurat';
import { QAF } from './qaf';
import { ADZ_DZARIYAT } from './adh-dhariyat';
import { AT_TUR } from './at-tur';
import { AN_NAJM } from './an-najm';
import { AL_QAMAR } from './al-qamar';
import { AR_RAHMAN } from './ar-rahman';
import { AL_WAQIAH } from './al-waqiah';
import { AL_HADID } from './al-hadid';
import { AL_MUJADILA } from './al-mujadila';
import { AL_HASHR } from './al-hashr';
import { AL_MUMTAHANAH } from './al-mumtahanah';
import { AS_SAF } from './as-saf';
import { AL_JUMUAH } from './al-jumuah';
import { AL_MUNAFIQUN } from './al-munafiqun';
import { AT_TAGHABUN } from './at-taghabun';
import { AT_TALAQ } from './at-talaq';
import { AT_TAHRIM } from './at-tahrim';
import { AL_MULK } from './al-mulk';
import { AL_QALAM } from './al-qalam';
import { AL_HAQQAH } from './al-haqqah';
import { AL_MAARIJ } from './al-maarij';
import { NUH } from './nuh';
import { AL_JINN } from './al-jinn';
import { AL_MUZZAMMIL } from './al-muzzammil';
import { AL_MUDDATSTSIR } from './al-muddaththir';
import { AL_QIYAMAH } from './al-qiyamah';
import { AL_INSAN } from './al-insan';
import { AL_MURSALAT } from './al-mursalat';
import { AN_NABA } from './an-naba';
import { AN_NAZIAT } from './an-naziat';
import { ABASA } from './abasa';
import { AT_TAKWIR } from './at-takwir';
import { AL_INFITAR } from './al-infitar';
import { AL_MUTAFFIFIN } from './al-mutaffifin';
import { AL_INSHIQAQ } from './al-inshiqaq';
import { AL_BURUJ } from './al-buruj';
import { AT_TARIQ } from './at-tariq';
import { AL_ALA } from './al-ala';
import { AL_GHASHIYAH } from './al-ghashiyah';
import { AL_FAJR } from './al-fajr';
import { AL_BALAD } from './al-balad';
import { ASH_SHAMS } from './ash-shams';
import { AL_LAYL } from './al-layl';
import { AD_DUHAA } from './ad-duhaa';
import { ASH_SHARH } from './ash-sharh';
import { AT_TIN } from './at-tin';
import { AL_ALAQ } from './al-alaq';
import { AL_QADR } from './al-qadr';
import { AL_BAYYINAH } from './al-bayyinah';
import { AZ_ZALZALAH } from './az-zalzalah';
import { AL_ADIYAT } from './al-adiyat';
import { AL_QARIAH } from './al-qariah';
import { AT_TAKATHUR } from './at-takathur';
import { AL_ASR } from './al-asr';
import { AL_HUMAZAH } from './al-humazah';
import { AL_FIL } from './al-fil';
import { QURAYSH } from './quraysh';
import { AL_MAUN } from './al-maun';
import { AL_KAUTSAR } from './al-kautsar';
import { AL_KAFIRUN } from './al-kafirun';
import { AN_NASR } from './an-nasr';
import { AL_LAHAB } from './al-masad';
import { AL_IKHLAS } from './al-ikhlas';
import { AL_FALAQ } from './al-falaq';
import { AN_NAS } from './an-nas';

export const surahs: Surah[] = [
  AL_FATIHAH,
  AL_BAQARAH,
  ALI_IMRAN,
  AN_NISA,
  AL_MAIDAH,
  AL_ANAM,
  AL_ARAF,
  AL_ANFAL,
  AT_TAWBAH,
  YUNUS,
  HUD,
  YUSUF,
  AR_RAD,
  IBRAHIM,
  AL_HIJR,
  AN_NAHL,
  AL_ISRA,
  AL_KAHF,
  MARYAM,
  TAHA,
  AL_ANBYA,
  AL_HAJJ,
  AL_MUMINUN,
  AN_NUR,
  AL_FURQAN,
  ASH_SHUARA,
  AN_NAML,
  AL_QASAS,
  AL_ANKABUT,
  AR_RUM,
  LUQMAN,
  AS_SAJDAH,
  AL_AHZAB,
  SABA,
  FATIR,
  YA_SIN,
  AS_SAFFAT,
  SAD,
  AZ_ZUMAR,
  GHAFIR,
  FUSSILAT,
  ASY_SYURA,
  AZ_ZUKHRUF,
  AD_DUKHAN,
  AL_JATHIYAH,
  AL_AHQAF,
  MUHAMMAD,
  AL_FATH,
  AL_HUJURAT,
  QAF,
  ADZ_DZARIYAT,
  AT_TUR,
  AN_NAJM,
  AL_QAMAR,
  AR_RAHMAN,
  AL_WAQIAH,
  AL_HADID,
  AL_MUJADILA,
  AL_HASHR,
  AL_MUMTAHANAH,
  AS_SAF,
  AL_JUMUAH,
  AL_MUNAFIQUN,
  AT_TAGHABUN,
  AT_TALAQ,
  AT_TAHRIM,
  AL_MULK,
  AL_QALAM,
  AL_HAQQAH,
  AL_MAARIJ,
  NUH,
  AL_JINN,
  AL_MUZZAMMIL,
  AL_MUDDATSTSIR,
  AL_QIYAMAH,
  AL_INSAN,
  AL_MURSALAT,
  AN_NABA,
  AN_NAZIAT,
  ABASA,
  AT_TAKWIR,
  AL_INFITAR,
  AL_MUTAFFIFIN,
  AL_INSHIQAQ,
  AL_BURUJ,
  AT_TARIQ,
  AL_ALA,
  AL_GHASHIYAH,
  AL_FAJR,
  AL_BALAD,
  ASH_SHAMS,
  AL_LAYL,
  AD_DUHAA,
  ASH_SHARH,
  AT_TIN,
  AL_ALAQ,
  AL_QADR,
  AL_BAYYINAH,
  AZ_ZALZALAH,
  AL_ADIYAT,
  AL_QARIAH,
  AT_TAKATHUR,
  AL_ASR,
  AL_HUMAZAH,
  AL_FIL,
  QURAYSH,
  AL_MAUN,
  AL_KAUTSAR,
  AL_KAFIRUN,
  AN_NASR,
  AL_LAHAB,
  AL_IKHLAS,
  AL_FALAQ,
  AN_NAS,
];