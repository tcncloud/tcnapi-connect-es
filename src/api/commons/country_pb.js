// @generated by protoc-gen-es v1.2.1 with parameter "target=js+dts"
// @generated from file api/commons/country.proto (package api.commons, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * This enum list corresponds to the list of ISO 3166 country codes.
 * https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
 * Some of the countries listed in the above link are just aliases
 * and are ignored in this enum list.
 *
 * @generated from enum api.commons.Country
 */
export const Country = proto3.makeEnum(
  "api.commons.Country",
  [
    {no: 0, name: "COUNTRY_UNDEFINED", localName: "UNDEFINED"},
    {no: 4, name: "COUNTRY_AFGHANISTAN", localName: "AFGHANISTAN"},
    {no: 8, name: "COUNTRY_ALBANIA", localName: "ALBANIA"},
    {no: 12, name: "COUNTRY_ALGERIA", localName: "ALGERIA"},
    {no: 20, name: "COUNTRY_ANDORRA", localName: "ANDORRA"},
    {no: 24, name: "COUNTRY_ANGOLA", localName: "ANGOLA"},
    {no: 10, name: "COUNTRY_ANTARCTICA", localName: "ANTARCTICA"},
    {no: 32, name: "COUNTRY_ARGENTINA", localName: "ARGENTINA"},
    {no: 51, name: "COUNTRY_ARMENIA", localName: "ARMENIA"},
    {no: 533, name: "COUNTRY_ARUBA", localName: "ARUBA"},
    {no: 36, name: "COUNTRY_AUSTRALIA", localName: "AUSTRALIA"},
    {no: 40, name: "COUNTRY_AUSTRIA", localName: "AUSTRIA"},
    {no: 31, name: "COUNTRY_AZERBAIJAN", localName: "AZERBAIJAN"},
    {no: 48, name: "COUNTRY_BAHRAIN", localName: "BAHRAIN"},
    {no: 50, name: "COUNTRY_BANGLADESH", localName: "BANGLADESH"},
    {no: 112, name: "COUNTRY_BELARUS", localName: "BELARUS"},
    {no: 56, name: "COUNTRY_BELGUIM", localName: "BELGUIM"},
    {no: 84, name: "COUNTRY_BELIZE", localName: "BELIZE"},
    {no: 204, name: "COUNTRY_BENIN", localName: "BENIN"},
    {no: 60, name: "COUNTRY_BERMUDA", localName: "BERMUDA"},
    {no: 64, name: "COUNTRY_BHUTAN", localName: "BHUTAN"},
    {no: 68, name: "COUNTRY_BOLIVIA", localName: "BOLIVIA"},
    {no: 70, name: "COUNTRY_BOSNIA_AND_HERZEGOVINA", localName: "BOSNIA_AND_HERZEGOVINA"},
    {no: 72, name: "COUNTRY_BOTSWANA", localName: "BOTSWANA"},
    {no: 76, name: "COUNTRY_BRAZIL", localName: "BRAZIL"},
    {no: 96, name: "COUNTRY_BRUNEI_DARUSSALAM", localName: "BRUNEI_DARUSSALAM"},
    {no: 100, name: "COUNTRY_BULGARIA", localName: "BULGARIA"},
    {no: 854, name: "COUNTRY_BURKINA_FASO", localName: "BURKINA_FASO"},
    {no: 108, name: "COUNTRY_BURUNDI", localName: "BURUNDI"},
    {no: 116, name: "COUNTRY_CAMBODIA", localName: "CAMBODIA"},
    {no: 120, name: "COUNTRY_CAMEROON", localName: "CAMEROON"},
    {no: 140, name: "COUNTRY_CENTRAL_AFRICAN_REPUBLIC", localName: "CENTRAL_AFRICAN_REPUBLIC"},
    {no: 148, name: "COUNTRY_CHAD", localName: "CHAD"},
    {no: 152, name: "COUNTRY_CHILE", localName: "CHILE"},
    {no: 156, name: "COUNTRY_CHINA", localName: "CHINA"},
    {no: 170, name: "COUNTRY_COLOMBIA", localName: "COLOMBIA"},
    {no: 174, name: "COUNTRY_COMOROS", localName: "COMOROS"},
    {no: 180, name: "COUNTRY_CONGO_DEMOCRATIC_REPUBLIC", localName: "CONGO_DEMOCRATIC_REPUBLIC"},
    {no: 178, name: "COUNTRY_CONGO", localName: "CONGO"},
    {no: 184, name: "COUNTRY_COOK_ISLANDS", localName: "COOK_ISLANDS"},
    {no: 188, name: "COUNTRY_COSTA_RICA", localName: "COSTA_RICA"},
    {no: 191, name: "COUNTRY_CROATIA", localName: "CROATIA"},
    {no: 531, name: "COUNTRY_CURACAO", localName: "CURACAO"},
    {no: 196, name: "COUNTRY_CYPRUS", localName: "CYPRUS"},
    {no: 203, name: "COUNTRY_CZECHIA", localName: "CZECHIA"},
    {no: 208, name: "COUNTRY_DENMARK", localName: "DENMARK"},
    {no: 262, name: "COUNTRY_DJIBOUTI", localName: "DJIBOUTI"},
    {no: 218, name: "COUNTRY_ECUADOR", localName: "ECUADOR"},
    {no: 818, name: "COUNTRY_EGYPT", localName: "EGYPT"},
    {no: 222, name: "COUNTRY_EL_SALVADOR", localName: "EL_SALVADOR"},
    {no: 226, name: "COUNTRY_EQUATORIAL_GUINEA", localName: "EQUATORIAL_GUINEA"},
    {no: 232, name: "COUNTRY_ERITREA", localName: "ERITREA"},
    {no: 233, name: "COUNTRY_ESTONIA", localName: "ESTONIA"},
    {no: 748, name: "COUNTRY_ESWATINI", localName: "ESWATINI"},
    {no: 231, name: "COUNTRY_ETHIOPIA", localName: "ETHIOPIA"},
    {no: 238, name: "COUNTRY_FALKLAND_ISLANDS", localName: "FALKLAND_ISLANDS"},
    {no: 242, name: "COUNTRY_FIJI", localName: "FIJI"},
    {no: 246, name: "COUNTRY_FINLAND", localName: "FINLAND"},
    {no: 250, name: "COUNTRY_FRANCE", localName: "FRANCE"},
    {no: 254, name: "COUNTRY_FRENCH_GUIANA", localName: "FRENCH_GUIANA"},
    {no: 258, name: "COUNTRY_FRENCH_POLYNESIA", localName: "FRENCH_POLYNESIA"},
    {no: 266, name: "COUNTRY_GABON", localName: "GABON"},
    {no: 270, name: "COUNTRY_GAMBIA", localName: "GAMBIA"},
    {no: 268, name: "COUNTRY_GEORGIA", localName: "GEORGIA"},
    {no: 276, name: "COUNTRY_GERMANY", localName: "GERMANY"},
    {no: 288, name: "COUNTRY_GHANA", localName: "GHANA"},
    {no: 292, name: "COUNTRY_GIBRALTAR", localName: "GIBRALTAR"},
    {no: 300, name: "COUNTRY_GREECE", localName: "GREECE"},
    {no: 304, name: "COUNTRY_GREENLAND", localName: "GREENLAND"},
    {no: 312, name: "COUNTRY_GUADELOUPE", localName: "GUADELOUPE"},
    {no: 320, name: "COUNTRY_GUATEMALA", localName: "GUATEMALA"},
    {no: 324, name: "COUNTRY_GUINEA", localName: "GUINEA"},
    {no: 624, name: "COUNTRY_GUINEA_BISSAU", localName: "GUINEA_BISSAU"},
    {no: 328, name: "COUNTRY_GUYANA", localName: "GUYANA"},
    {no: 332, name: "COUNTRY_HAITI", localName: "HAITI"},
    {no: 340, name: "COUNTRY_HONDURAS", localName: "HONDURAS"},
    {no: 344, name: "COUNTRY_HONG_KONG", localName: "HONG_KONG"},
    {no: 348, name: "COUNTRY_HUNGARY", localName: "HUNGARY"},
    {no: 352, name: "COUNTRY_ICELAND", localName: "ICELAND"},
    {no: 356, name: "COUNTRY_INDIA", localName: "INDIA"},
    {no: 360, name: "COUNTRY_INDONESIA", localName: "INDONESIA"},
    {no: 368, name: "COUNTRY_IRAQ", localName: "IRAQ"},
    {no: 372, name: "COUNTRY_IRELAND", localName: "IRELAND"},
    {no: 376, name: "COUNTRY_ISRAEL", localName: "ISRAEL"},
    {no: 380, name: "COUNTRY_ITALY", localName: "ITALY"},
    {no: 392, name: "COUNTRY_JAPAN", localName: "JAPAN"},
    {no: 400, name: "COUNTRY_JORDAN", localName: "JORDAN"},
    {no: 398, name: "COUNTRY_KAZAKHSTAN", localName: "KAZAKHSTAN"},
    {no: 404, name: "COUNTRY_KENYA", localName: "KENYA"},
    {no: 410, name: "COUNTRY_KOREA_REPUBLIC", localName: "KOREA_REPUBLIC"},
    {no: 414, name: "COUNTRY_KUWAIT", localName: "KUWAIT"},
    {no: 417, name: "COUNTRY_KYRGYZSTAN", localName: "KYRGYZSTAN"},
    {no: 418, name: "COUNTRY_LAO_PEOPLES_DEMOCRATIC_REPUBLIC", localName: "LAO_PEOPLES_DEMOCRATIC_REPUBLIC"},
    {no: 428, name: "COUNTRY_LATVIA", localName: "LATVIA"},
    {no: 422, name: "COUNTRY_LEBANON", localName: "LEBANON"},
    {no: 426, name: "COUNTRY_LESOTHO", localName: "LESOTHO"},
    {no: 430, name: "COUNTRY_LIBERIA", localName: "LIBERIA"},
    {no: 434, name: "COUNTRY_LIBYA", localName: "LIBYA"},
    {no: 438, name: "COUNTRY_LIECHTENSTEIN", localName: "LIECHTENSTEIN"},
    {no: 440, name: "COUNTRY_LITHUANIA", localName: "LITHUANIA"},
    {no: 442, name: "COUNTRY_LUXEMBOURG", localName: "LUXEMBOURG"},
    {no: 807, name: "COUNTRY_NORTH_MACEDONIA", localName: "NORTH_MACEDONIA"},
    {no: 450, name: "COUNTRY_MADAGASCAR", localName: "MADAGASCAR"},
    {no: 454, name: "COUNTRY_MALAWI", localName: "MALAWI"},
    {no: 458, name: "COUNTRY_MALAYSIA", localName: "MALAYSIA"},
    {no: 462, name: "COUNTRY_MALDIVES", localName: "MALDIVES"},
    {no: 466, name: "COUNTRY_MALI", localName: "MALI"},
    {no: 470, name: "COUNTRY_MALTA", localName: "MALTA"},
    {no: 584, name: "COUNTRY_MARSHALL_ISLANDS", localName: "MARSHALL_ISLANDS"},
    {no: 474, name: "COUNTRY_MARTINIQUE", localName: "MARTINIQUE"},
    {no: 478, name: "COUNTRY_MAURITANIA", localName: "MAURITANIA"},
    {no: 480, name: "COUNTRY_MAURITIUS", localName: "MAURITIUS"},
    {no: 484, name: "COUNTRY_MEXICO", localName: "MEXICO"},
    {no: 583, name: "COUNTRY_MICRONESIA", localName: "MICRONESIA"},
    {no: 498, name: "COUNTRY_MOLDOVA", localName: "MOLDOVA"},
    {no: 492, name: "COUNTRY_MONACO", localName: "MONACO"},
    {no: 496, name: "COUNTRY_MONGOLLIA", localName: "MONGOLLIA"},
    {no: 499, name: "COUNTRY_MONTENEGRO", localName: "MONTENEGRO"},
    {no: 504, name: "COUNTRY_MOROCCO", localName: "MOROCCO"},
    {no: 508, name: "COUNTRY_MOZAMBIQUE", localName: "MOZAMBIQUE"},
    {no: 104, name: "COUNTRY_MYANMAR", localName: "MYANMAR"},
    {no: 516, name: "COUNTRY_NAMIBIA", localName: "NAMIBIA"},
    {no: 520, name: "COUNTRY_NAURU", localName: "NAURU"},
    {no: 524, name: "COUNTRY_NEPAL", localName: "NEPAL"},
    {no: 528, name: "COUNTRY_NETHERLANDS", localName: "NETHERLANDS"},
    {no: 540, name: "COUNTRY_NEW_CALEDONIA", localName: "NEW_CALEDONIA"},
    {no: 554, name: "COUNTRY_NEW_ZEALAND", localName: "NEW_ZEALAND"},
    {no: 558, name: "COUNTRY_NICARAGUA", localName: "NICARAGUA"},
    {no: 562, name: "COUNTRY_NIGER", localName: "NIGER"},
    {no: 566, name: "COUNTRY_NIGERIA", localName: "NIGERIA"},
    {no: 570, name: "COUNTRY_NIUE", localName: "NIUE"},
    {no: 578, name: "COUNTRY_NORWAY", localName: "NORWAY"},
    {no: 512, name: "COUNTRY_OMAN", localName: "OMAN"},
    {no: 586, name: "COUNTRY_PAKISTAN", localName: "PAKISTAN"},
    {no: 585, name: "COUNTRY_PALAU", localName: "PALAU"},
    {no: 275, name: "COUNTRY_PALESTINE", localName: "PALESTINE"},
    {no: 591, name: "COUNTRY_PANAMA", localName: "PANAMA"},
    {no: 598, name: "COUNTRY_PAPUA_NEW_GUINEA", localName: "PAPUA_NEW_GUINEA"},
    {no: 600, name: "COUNTRY_PARAGUAY", localName: "PARAGUAY"},
    {no: 604, name: "COUNTRY_PERU", localName: "PERU"},
    {no: 608, name: "COUNTRY_PHILIPPINES", localName: "PHILIPPINES"},
    {no: 616, name: "COUNTRY_POLAND", localName: "POLAND"},
    {no: 620, name: "COUNTRY_PORTUGAL", localName: "PORTUGAL"},
    {no: 634, name: "COUNTRY_QATAR", localName: "QATAR"},
    {no: 642, name: "COUNTRY_ROMANIA", localName: "ROMANIA"},
    {no: 643, name: "COUNTRY_RUSSIAN_FEDERATION", localName: "RUSSIAN_FEDERATION"},
    {no: 646, name: "COUNTRY_RWANDA", localName: "RWANDA"},
    {no: 654, name: "COUNTRY_SAINT_HELENA", localName: "SAINT_HELENA"},
    {no: 666, name: "COUNTRY_SAINT_PIERRE_AND_MIQUELON", localName: "SAINT_PIERRE_AND_MIQUELON"},
    {no: 882, name: "COUNTRY_SAMOA", localName: "SAMOA"},
    {no: 674, name: "COUNTRY_SAN_MARINO", localName: "SAN_MARINO"},
    {no: 682, name: "COUNTRY_SAUDI_ARABIA", localName: "SAUDI_ARABIA"},
    {no: 686, name: "COUNTRY_SENAGAL", localName: "SENAGAL"},
    {no: 688, name: "COUNTRY_SERBIA", localName: "SERBIA"},
    {no: 694, name: "COUNTRY_SIERRA_LEONE", localName: "SIERRA_LEONE"},
    {no: 702, name: "COUNTRY_SINGAPORE", localName: "SINGAPORE"},
    {no: 534, name: "COUNTRY_SINT_MAARTEN", localName: "SINT_MAARTEN"},
    {no: 703, name: "COUNTRY_SLOVAKIA", localName: "SLOVAKIA"},
    {no: 705, name: "COUNTRY_SLOVENIA", localName: "SLOVENIA"},
    {no: 90, name: "COUNTRY_SOLOMON_ISLANDS", localName: "SOLOMON_ISLANDS"},
    {no: 706, name: "COUNTRY_SOMALIA", localName: "SOMALIA"},
    {no: 710, name: "COUNTRY_SOUTH_AFRICA", localName: "SOUTH_AFRICA"},
    {no: 728, name: "COUNTRY_SOUTH_SUDAN", localName: "SOUTH_SUDAN"},
    {no: 724, name: "COUNTRY_SPAIN", localName: "SPAIN"},
    {no: 144, name: "COUNTRY_SRI_LANKA", localName: "SRI_LANKA"},
    {no: 729, name: "COUNTRY_SUDAN", localName: "SUDAN"},
    {no: 740, name: "COUNTRY_SURINAME", localName: "SURINAME"},
    {no: 752, name: "COUNTRY_SWEDEN", localName: "SWEDEN"},
    {no: 756, name: "COUNTRY_SWITZERLAND", localName: "SWITZERLAND"},
    {no: 760, name: "COUNTRY_SYRIAN_ARAB_REPUBLIC", localName: "SYRIAN_ARAB_REPUBLIC"},
    {no: 158, name: "COUNTRY_TAIWAN", localName: "TAIWAN"},
    {no: 762, name: "COUNTRY_TAJIKISTAN", localName: "TAJIKISTAN"},
    {no: 834, name: "COUNTRY_TANZANIA", localName: "TANZANIA"},
    {no: 764, name: "COUNTRY_THAILAND", localName: "THAILAND"},
    {no: 768, name: "COUNTRY_TOGO", localName: "TOGO"},
    {no: 772, name: "COUNTRY_TOKELAU", localName: "TOKELAU"},
    {no: 776, name: "COUNTRY_TONGA", localName: "TONGA"},
    {no: 788, name: "COUNTRY_TUNISIA", localName: "TUNISIA"},
    {no: 792, name: "COUNTRY_TURKEY", localName: "TURKEY"},
    {no: 795, name: "COUNTRY_TURKMENISTAN", localName: "TURKMENISTAN"},
    {no: 796, name: "COUNTRY_TURKS_AND_CAICOS_ISLANDS", localName: "TURKS_AND_CAICOS_ISLANDS"},
    {no: 798, name: "COUNTRY_TUVALU", localName: "TUVALU"},
    {no: 800, name: "COUNTRY_UGANDA", localName: "UGANDA"},
    {no: 804, name: "COUNTRY_UKRAINE", localName: "UKRAINE"},
    {no: 784, name: "COUNTRY_UNITED_ARAB_EMIRATES", localName: "UNITED_ARAB_EMIRATES"},
    {no: 826, name: "COUNTRY_UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND", localName: "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"},
    {no: 840, name: "COUNTRY_UNITED_STATES_OF_AMERICA", localName: "UNITED_STATES_OF_AMERICA"},
    {no: 858, name: "COUNTRY_URUGUAY", localName: "URUGUAY"},
    {no: 860, name: "COUNTRY_UZBEKISTAN", localName: "UZBEKISTAN"},
    {no: 548, name: "COUNTRY_VANUATU", localName: "VANUATU"},
    {no: 862, name: "COUNTRY_VENEZUELA", localName: "VENEZUELA"},
    {no: 704, name: "COUNTRY_VIET_NAM", localName: "VIET_NAM"},
    {no: 876, name: "COUNTRY_WALLIS_AND_FUTUNA", localName: "WALLIS_AND_FUTUNA"},
    {no: 887, name: "COUNTRY_YEMEN", localName: "YEMEN"},
    {no: 894, name: "COUNTRY_ZAMBIA", localName: "ZAMBIA"},
    {no: 716, name: "COUNTRY_ZIMBABWE", localName: "ZIMBABWE"},
    {no: 1000, name: "COUNTRY_GLOBAL_SIP", localName: "GLOBAL_SIP"},
  ],
);
