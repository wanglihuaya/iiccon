import { Cell, VirtualList } from "@nutui/nutui-react-taro";
import { Image, View } from "@tarojs/components";

import { getTestData1 } from "@/services";
import Taro, { useReachBottom } from "@tarojs/taro";
import { useCallback, useEffect, useState } from "react";
import "./index.less";

const myIconNineList = [
  {
    type: "material-symbols",
    iconesNine: [
      "air",
      "air-rounded",
      "architecture",
      "architecture-rounded",
      "avg-pace",
      "avg-pace-rounded",
      "avg-time",
      "avg-time-outline",
      "avg-time-outline-rounded",
    ],
  },
  {
    type: "material-symbols-light",
    iconesNine: [
      "123",
      "360",
      "10k",
      "10mp",
      "30fps-sharp",
      "1x-mobiledata-badge",
      "6-ft-apart",
      "60fps-select",
      "acute",
    ],
  },
  {
    type: "ic",
    iconesNine: [
      "baseline-123",
      "baseline-3d-rotation",
      "baseline-abc",
      "baseline-accessibility",
      "baseline-accessibility-new",
      "baseline-accessible",
      "baseline-accessible-forward",
      "baseline-account-balance",
      "baseline-account-balance-wallet",
    ],
  },
  {
    type: "mdi",
    iconesNine: [
      "access-point",
      "access-point-check",
      "access-point-minus",
      "access-point-network",
      "access-point-network-off",
      "access-point-off",
      "access-point-plus",
      "access-point-remove",
      "adjust",
    ],
  },
  {
    type: "ph",
    iconesNine: [
      "address-book",
      "address-book-bold",
      "address-book-duotone",
      "address-book-fill",
      "address-book-light",
      "address-book-thin",
      "air-traffic-control",
      "air-traffic-control-bold",
      "air-traffic-control-duotone",
    ],
  },
  {
    type: "solar",
    iconesNine: [
      "alt-arrow-down-bold",
      "alt-arrow-down-bold-duotone",
      "alt-arrow-down-broken",
      "alt-arrow-down-line-duotone",
      "alt-arrow-down-linear",
      "alt-arrow-down-outline",
      "alt-arrow-left-bold",
      "alt-arrow-left-bold-duotone",
      "alt-arrow-left-broken",
    ],
  },
  {
    type: "tabler",
    iconesNine: [
      "12-hours",
      "123",
      "24-hours",
      "2fa",
      "360",
      "360-view",
      "3d-cube-sphere",
      "3d-cube-sphere-off",
      "3d-rotate",
    ],
  },
  {
    type: "ri",
    iconesNine: [
      "arrow-down-circle-fill",
      "arrow-down-circle-line",
      "arrow-down-double-fill",
      "arrow-down-double-line",
      "arrow-down-fill",
      "arrow-down-line",
      "arrow-down-s-fill",
      "arrow-down-s-line",
      "arrow-drop-down-fill",
    ],
  },
  {
    type: "bi",
    iconesNine: [
      "0-circle",
      "0-circle-fill",
      "0-square",
      "0-square-fill",
      "1-circle",
      "1-circle-fill",
      "1-square",
      "1-square-fill",
      "123",
    ],
  },
  {
    type: "carbon",
    iconesNine: [
      "add",
      "add-alt",
      "add-comment",
      "add-filled",
      "add-large",
      "align-box-bottom-center",
      "align-box-bottom-left",
      "align-box-bottom-right",
      "align-box-middle-center",
    ],
  },
  {
    type: "iconamoon",
    iconesNine: [
      "arrow-bottom-left-1",
      "arrow-bottom-left-1-bold",
      "arrow-bottom-left-1-fill",
      "arrow-bottom-left-1-light",
      "arrow-bottom-left-1-thin",
      "arrow-bottom-left-2",
      "arrow-bottom-left-2-bold",
      "arrow-bottom-left-2-fill",
      "arrow-bottom-left-2-light",
    ],
  },
  {
    type: "ion",
    iconesNine: [
      "accessibility",
      "accessibility-outline",
      "accessibility-sharp",
      "add",
      "add-circle",
      "add-circle-outline",
      "add-circle-sharp",
      "add-outline",
      "add-sharp",
    ],
  },
  { type: "uil", iconesNine: ["exit", "home-alt"] },
  {
    type: "tdesign",
    iconesNine: [
      "activity",
      "add",
      "add-and-subtract",
      "add-circle",
      "add-rectangle",
      "address-book",
      "adjustment",
      "airplay-wave",
      "alarm",
    ],
  },
  {
    type: "teenyicons",
    iconesNine: [
      "360-outline",
      "360-solid",
      "ab-testing-outline",
      "ab-testing-solid",
      "add-outline",
      "add-small-outline",
      "add-small-solid",
      "add-solid",
      "address-book-outline",
    ],
  },
  {
    type: "mingcute",
    iconesNine: [
      "align-arrow-down-fill",
      "align-arrow-down-line",
      "align-arrow-left-fill",
      "align-arrow-left-line",
      "align-arrow-right-fill",
      "align-arrow-right-line",
      "align-arrow-up-fill",
      "align-arrow-up-line",
      "arrow-down-circle-fill",
    ],
  },
  {
    type: "clarity",
    iconesNine: [
      "analytics-line",
      "analytics-outline-alerted",
      "analytics-outline-badged",
      "analytics-solid",
      "analytics-solid-alerted",
      "analytics-solid-badged",
      "axis-chart-line",
      "axis-chart-outline-alerted",
      "axis-chart-outline-badged",
    ],
  },
  {
    type: "iconoir",
    iconesNine: [
      "1st-medal",
      "2x2-cell",
      "360-view",
      "3d-add-hole",
      "3d-arc",
      "3d-arc-center-pt",
      "3d-bridge",
      "3d-center-box",
      "3d-draft-face",
    ],
  },
  {
    type: "majesticons",
    iconesNine: [
      "add-column",
      "add-column-line",
      "add-row",
      "add-row-line",
      "airplane",
      "airplane-flight-2",
      "airplane-flight-2-line",
      "airplane-line",
      "alert-circle",
    ],
  },
  {
    type: "zondicons",
    iconesNine: [
      "add-outline",
      "add-solid",
      "adjust",
      "airplane",
      "album",
      "align-center",
      "align-justified",
      "align-left",
      "align-right",
    ],
  },
  {
    type: "ant-design",
    iconesNine: [
      "account-book-filled",
      "account-book-outlined",
      "account-book-twotone",
      "aim-outlined",
      "alert-filled",
      "alert-outlined",
      "alert-twotone",
      "alibaba-outlined",
      "align-center-outlined",
    ],
  },
  {
    type: "bx",
    iconesNine: [
      "abacus",
      "accessibility",
      "add-to-queue",
      "adjust",
      "alarm",
      "alarm-add",
      "alarm-exclamation",
      "alarm-off",
      "alarm-snooze",
    ],
  },
  {
    type: "bxs",
    iconesNine: [
      "add-to-queue",
      "adjust",
      "adjust-alt",
      "alarm",
      "alarm-add",
      "alarm-exclamation",
      "alarm-off",
      "alarm-snooze",
      "album",
    ],
  },
  {
    type: "gg",
    iconesNine: [
      "abstract",
      "add",
      "add-r",
      "adidas",
      "airplane",
      "alarm",
      "album",
      "align-bottom",
      "align-center",
    ],
  },
  {
    type: "octicon",
    iconesNine: [
      "accessibility-16",
      "accessibility-inset-16",
      "alert-16",
      "alert-24",
      "alert-fill-12",
      "alert-fill-16",
      "alert-fill-24",
      "apps-16",
      "archive-16",
    ],
  },
  {
    type: "cil",
    iconesNine: [
      "3d",
      "4k",
      "account-logout",
      "action-redo",
      "action-undo",
      "address-book",
      "airplane-mode",
      "airplane-mode-off",
      "airplay",
    ],
  },
  {
    type: "lucide",
    iconesNine: [
      "accessibility",
      "activity",
      "activity-square",
      "air-vent",
      "airplay",
      "alarm-check",
      "alarm-clock",
      "alarm-clock-off",
      "alarm-minus",
    ],
  },
  {
    type: "basil",
    iconesNine: [
      "adobe-after-effects-outline",
      "adobe-after-effects-solid",
      "adobe-experince-design-outline",
      "adobe-experince-design-solid",
      "adobe-illustrator-outline",
      "adobe-illustrator-solid",
      "adobe-indesign-outline",
      "adobe-indesign-solid",
      "adobe-lightroom-outline",
    ],
  },
  {
    type: "pixelarticons",
    iconesNine: [
      "4g",
      "4k",
      "4k-box",
      "5g",
      "ab-testing",
      "ac",
      "add-box",
      "add-box-multiple",
      "add-col",
    ],
  },
  {
    type: "system-uicons",
    iconesNine: [
      "airplay",
      "alarm-clock",
      "align-horizontal",
      "align-vertical",
      "angle",
      "archive",
      "arrow-bottom-left",
      "arrow-bottom-right",
      "arrow-down",
    ],
  },
  {
    type: "ci",
    iconesNine: [
      "arrow-circle-down",
      "arrow-circle-down-left",
      "arrow-circle-down-right",
      "arrow-circle-left",
      "arrow-circle-right",
      "arrow-circle-up",
      "arrow-circle-up-left",
      "arrow-circle-up-right",
      "arrow-down-left-lg",
    ],
  },
  {
    type: "akar-icons",
    iconesNine: [
      "air",
      "airplay-audio",
      "airplay-video",
      "airpods",
      "alarm",
      "align-bottom",
      "align-horizontal-center",
      "align-left",
      "align-right",
    ],
  },
  {
    type: "memory",
    iconesNine: [
      "account",
      "account-box",
      "alert",
      "alert-box",
      "alert-box-fill",
      "alert-circle",
      "alert-circle-fill",
      "alert-rhombus",
      "alert-rhombus-fill",
    ],
  },
  {
    type: "typcn",
    iconesNine: [
      "adjust-brightness",
      "adjust-contrast",
      "anchor",
      "anchor-outline",
      "archive",
      "arrow-back",
      "arrow-back-outline",
      "arrow-down",
      "arrow-down-outline",
    ],
  },
  {
    type: "radix-icons",
    iconesNine: [
      "accessibility",
      "activity-log",
      "align-baseline",
      "align-bottom",
      "align-center-horizontally",
      "align-center-vertically",
      "align-left",
      "align-right",
      "align-top",
    ],
  },
  {
    type: "ep",
    iconesNine: [
      "add-location",
      "aim",
      "alarm-clock",
      "apple",
      "arrow-down",
      "arrow-down-bold",
      "arrow-left",
      "arrow-left-bold",
      "arrow-right",
    ],
  },
  {
    type: "circum",
    iconesNine: [
      "airport-sign-1",
      "alarm-off",
      "alarm-on",
      "align-bottom",
      "align-center-h",
      "align-center-v",
      "align-left",
      "align-right",
      "align-top",
    ],
  },
  {
    type: "mdi-light",
    iconesNine: [
      "account",
      "account-alert",
      "alarm",
      "alarm-panel",
      "alarm-plus",
      "alert",
      "alert-circle",
      "alert-octagon",
      "arrange-bring-forward",
    ],
  },
  {
    type: "fe",
    iconesNine: [
      "activity",
      "add-cart",
      "align-bottom",
      "align-center",
      "align-left",
      "align-right",
      "align-top",
      "align-vertically",
      "angry",
    ],
  },
  {
    type: "eos-icons",
    iconesNine: [
      "3d-print",
      "abstract",
      "abstract-incomplete",
      "abstract-instance",
      "abstract-instance-outlined",
      "abstract-outlined",
      "action-chains",
      "action-chains-outlined",
      "activate-subscriptions",
    ],
  },
  {
    type: "charm",
    iconesNine: [
      "anchor",
      "apps",
      "apps-minus",
      "apps-plus",
      "archive",
      "arrow-down",
      "arrow-down-left",
      "arrow-down-right",
      "arrow-left",
    ],
  },
  {
    type: "prime",
    iconesNine: [
      "align-center",
      "align-justify",
      "align-left",
      "align-right",
      "android",
      "angle-double-down",
      "angle-double-left",
      "angle-double-right",
      "angle-double-up",
    ],
  },
  {
    type: "humbleicons",
    iconesNine: [
      "activity",
      "adjustments",
      "aid",
      "align-objects-bottom",
      "align-objects-center",
      "align-objects-left",
      "align-objects-middle",
      "align-objects-right",
      "align-objects-top",
    ],
  },
  {
    type: "uiw",
    iconesNine: [
      "adobe",
      "alipay",
      "aliwangwang",
      "android",
      "android-o",
      "apple",
      "appstore",
      "appstore-o",
      "area-chart",
    ],
  },
  { type: "uim", iconesNine: ["entry", "exit", "sign-in", "square-shape"] },
  {
    type: "uit",
    iconesNine: [
      "angle-double-down",
      "angle-double-left",
      "angle-double-right",
      "angle-up",
      "arrow-circle-down",
      "arrow-circle-left",
      "arrow-circle-right",
      "arrow-circle-up",
      "arrow-down-left",
    ],
  },
  {
    type: "uis",
    iconesNine: [
      "angle-double-down",
      "angle-double-left",
      "angle-double-right",
      "angle-double-up",
      "angle-down",
      "angle-left",
      "angle-right",
      "angle-right-b",
      "angle-up",
    ],
  },
  {
    type: "maki",
    iconesNine: [
      "aerialway",
      "airfield",
      "airport",
      "alcohol-shop",
      "american-football",
      "amusement-park",
      "animal-shelter",
      "aquarium",
      "arrow",
    ],
  },
  {
    type: "gridicons",
    iconesNine: [
      "add",
      "add-image",
      "add-outline",
      "align-center",
      "align-image-center",
      "align-image-left",
      "align-image-none",
      "align-image-right",
      "align-justify",
    ],
  },
  {
    type: "mi",
    iconesNine: [
      "add",
      "archive",
      "arrow-down",
      "arrow-left",
      "arrow-left-down",
      "arrow-left-up",
      "arrow-right",
      "arrow-right-down",
      "arrow-right-up",
    ],
  },
  {
    type: "quill",
    iconesNine: [
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "chevron-down",
      "chevron-left",
      "chevron-right",
      "chevron-up",
      "inline-down",
    ],
  },
  {
    type: "gala",
    iconesNine: [
      "add",
      "airplay",
      "apple",
      "bag",
      "bell",
      "book",
      "brochure",
      "calendar",
      "chart",
    ],
  },
  {
    type: "fluent",
    iconesNine: [
      "access-time-20-filled",
      "access-time-20-regular",
      "access-time-24-filled",
      "access-time-24-regular",
      "accessibility-16-filled",
      "accessibility-16-regular",
      "accessibility-20-filled",
      "accessibility-20-regular",
      "accessibility-24-filled",
    ],
  },
  {
    type: "icon-park-outline",
    iconesNine: [
      "ad-product",
      "api-app",
      "app-switch",
      "application-one",
      "association",
      "asterisk",
      "badge",
      "benz",
      "blocks-and-arrows",
    ],
  },
  {
    type: "icon-park-solid",
    iconesNine: [
      "app-switch",
      "application-one",
      "asterisk",
      "badge",
      "benz",
      "blocks-and-arrows",
      "category-management",
      "circle-five-line",
      "circle-four",
    ],
  },
  {
    type: "icon-park-twotone",
    iconesNine: [
      "app-switch",
      "application-one",
      "asterisk",
      "badge",
      "benz",
      "blocks-and-arrows",
      "category-management",
      "circle-five-line",
      "circle-four",
    ],
  },
  {
    type: "icon-park",
    iconesNine: [
      "ad-product",
      "api-app",
      "app-switch",
      "application-one",
      "association",
      "asterisk",
      "badge",
      "benz",
      "blocks-and-arrows",
    ],
  },
  {
    type: "vscode-icons",
    iconesNine: [
      "default-file",
      "default-folder",
      "default-folder-opened",
      "default-root-folder",
      "default-root-folder-opened",
      "file-type-access",
      "file-type-access2",
      "file-type-actionscript",
      "file-type-actionscript2",
    ],
  },
  {
    type: "jam",
    iconesNine: [
      "500px",
      "accessibility",
      "activity",
      "airbnb",
      "alarm-clock",
      "alarm-clock-f",
      "alert",
      "alert-f",
      "alien",
    ],
  },
  {
    type: "heroicons",
    iconesNine: [
      "academic-cap",
      "academic-cap-20-solid",
      "academic-cap-solid",
      "adjustments-horizontal",
      "adjustments-horizontal-20-solid",
      "adjustments-horizontal-solid",
      "adjustments-vertical",
      "adjustments-vertical-20-solid",
      "adjustments-vertical-solid",
    ],
  },
  {
    type: "codicon",
    iconesNine: [
      "account",
      "activate-breakpoints",
      "add",
      "archive",
      "arrow-both",
      "arrow-circle-down",
      "arrow-circle-left",
      "arrow-circle-right",
      "arrow-circle-up",
    ],
  },
  {
    type: "pajamas",
    iconesNine: [
      "abuse",
      "accessibility",
      "account",
      "admin",
      "api",
      "appearance",
      "applications",
      "approval",
      "approval-solid",
    ],
  },
  {
    type: "pepicons-pop",
    iconesNine: [
      "airplane",
      "airplane-circle",
      "airplane-circle-filled",
      "airplane-circle-off",
      "airplane-off",
      "alarm",
      "alarm-circle",
      "alarm-circle-filled",
      "alarm-circle-off",
    ],
  },
  {
    type: "pepicons-print",
    iconesNine: [
      "airplane",
      "airplane-circle",
      "airplane-circle-filled",
      "airplane-circle-off",
      "airplane-off",
      "alarm",
      "alarm-circle",
      "alarm-circle-filled",
      "alarm-circle-off",
    ],
  },
  {
    type: "pepicons-pencil",
    iconesNine: [
      "airplane",
      "airplane-circle",
      "airplane-circle-filled",
      "airplane-circle-off",
      "airplane-off",
      "alarm",
      "alarm-circle",
      "alarm-circle-filled",
      "alarm-circle-off",
    ],
  },
  {
    type: "bytesize",
    iconesNine: [
      "activity",
      "alert",
      "archive",
      "arrow-bottom",
      "arrow-left",
      "arrow-right",
      "arrow-top",
      "backwards",
      "bag",
    ],
  },
  {
    type: "ei",
    iconesNine: [
      "archive",
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "bell",
      "calendar",
      "camera",
      "cart",
    ],
  },
  {
    type: "streamline",
    iconesNine: [
      "computer-battery-empty-1-phone-mobile-charge-device-electricity-empty-power-battery",
      "computer-battery-full-1-phone-mobile-charge-device-electricity-power-battery-full",
      "computer-battery-low-1-phone-mobile-charge-device-electricity-power-battery-low",
      "computer-battery-medium-1-phone-mobile-charge-medium-device-electricity-power-battery",
      "computer-chip-1-computer-device-chip-electronics-cpu-microprocessor",
      "computer-chip-2-core-microprocessor-device-electronics-chip-computer",
      "computer-connection-bluetooth-bluetooth-internet-server-network-wireless",
      "computer-connection-cable-split-cables-cable-split-device-computer-electronics-cords-cord-splitter",
      "computer-connection-network-network-server-internet-ethernet",
    ],
  },
  {
    type: "guidance",
    iconesNine: [
      "access-for-hearing-loss",
      "access-to-low-vision",
      "assistive-listening-device",
      "audio-description",
      "braille",
      "children-must-be-supervised",
      "closed-captioning",
      "crutch",
      "electric-wheelchair",
    ],
  },
  {
    type: "fa6-solid",
    iconesNine: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    type: "fa6-regular",
    iconesNine: [
      "calendar-days",
      "calendar-xmark",
      "circle-check",
      "circle-dot",
      "circle-down",
      "circle-left",
      "circle-pause",
      "circle-play",
      "circle-question",
    ],
  },
  {
    type: "ooui",
    iconesNine: [
      "add",
      "alert",
      "align-center",
      "align-left",
      "align-right",
      "arrow-next-ltr",
      "arrow-next-rtl",
      "arrow-previous-ltr",
      "arrow-previous-rtl",
    ],
  },
  {
    type: "nimbus",
    iconesNine: [
      "accordion",
      "align-center",
      "align-left",
      "align-right",
      "apps",
      "archive",
      "arrow-left",
      "arrow-right",
      "arrows-horizontal",
    ],
  },
  {
    type: "formkit",
    iconesNine: [
      "add",
      "amex",
      "android",
      "apple",
      "arrowdown",
      "arrowleft",
      "arrowright",
      "arrowup",
      "avatarman",
    ],
  },
  {
    type: "line-md",
    iconesNine: [
      "account",
      "account-add",
      "account-alert",
      "account-delete",
      "account-remove",
      "account-small",
    ],
  },
  {
    type: "svg-spinners",
    iconesNine: [
      "12-dots-scale-rotate",
      "180-ring",
      "180-ring-with-bg",
      "270-ring",
      "270-ring-with-bg",
      "3-dots-bounce",
      "3-dots-fade",
      "3-dots-move",
      "3-dots-rotate",
    ],
  },
  {
    type: "openmoji",
    iconesNine: [
      "1st-place-medal",
      "2nd-place-medal",
      "3rd-place-medal",
      "admission-tickets",
      "american-football",
      "artist-palette",
      "badminton",
      "balloon",
      "baseball",
    ],
  },
  {
    type: "twemoji",
    iconesNine: [
      "1st-place-medal",
      "2nd-place-medal",
      "3rd-place-medal",
      "admission-tickets",
      "american-football",
      "artist-palette",
      "badminton",
      "balloon",
      "baseball",
    ],
  },
  {
    type: "noto",
    iconesNine: [
      "1st-place-medal",
      "2nd-place-medal",
      "3rd-place-medal",
      "admission-tickets",
      "american-football",
      "artist-palette",
      "badminton",
      "balloon",
      "baseball",
    ],
  },
  {
    type: "fluent-emoji",
    iconesNine: [
      "1st-place-medal",
      "2nd-place-medal",
      "3rd-place-medal",
      "admission-tickets",
      "american-football",
      "artist-palette",
      "badminton",
      "balloon",
      "baseball",
    ],
  },
  {
    type: "fluent-emoji-flat",
    iconesNine: [
      "1st-place-medal",
      "2nd-place-medal",
      "3rd-place-medal",
      "admission-tickets",
      "american-football",
      "artist-palette",
      "badminton",
      "balloon",
      "baseball",
    ],
  },
  {
    type: "fluent-emoji-high-contrast",
    iconesNine: [
      "1st-place-medal",
      "2nd-place-medal",
      "3rd-place-medal",
      "admission-tickets",
      "american-football",
      "artist-palette",
      "badminton",
      "balloon",
      "baseball",
    ],
  },
  {
    type: "noto-v1",
    iconesNine: [
      "dark-skin-tone",
      "light-skin-tone",
      "medium-dark-skin-tone",
      "medium-light-skin-tone",
      "medium-skin-tone",
    ],
  },
  {
    type: "emojione",
    iconesNine: [
      "1st-place-medal",
      "2nd-place-medal",
      "3rd-place-medal",
      "admission-tickets",
      "american-football",
      "artist-palette",
      "badminton",
      "balloon",
      "baseball",
    ],
  },
  {
    type: "emojione-monotone",
    iconesNine: [
      "1st-place-medal",
      "2nd-place-medal",
      "3rd-place-medal",
      "admission-tickets",
      "american-football",
      "artist-palette",
      "badminton",
      "balloon",
      "baseball",
    ],
  },
  {
    type: "emojione-v1",
    iconesNine: [
      "admission-tickets",
      "american-football",
      "artist-palette",
      "balloon",
      "baseball",
      "basketball",
      "black-rosette",
      "bowling",
      "carp-streamer",
    ],
  },
  {
    type: "fxemoji",
    iconesNine: [
      "chineseflag",
      "franceflag",
      "greatbritainflag",
      "italianflag",
      "japanflag",
      "koreaflag",
      "regionalindicatorb",
      "regionalindicatorc",
      "regionalindicatore",
    ],
  },
  {
    type: "streamline-emojis",
    iconesNine: [
      "american-football",
      "artist-palette",
      "baseball",
      "basketball",
      "bowling",
      "circus-tent",
      "direct-hit",
      "fishing-pole",
      "flag-in-hole",
    ],
  },
  {
    type: "bxl",
    iconesNine: [
      "500px",
      "99designs",
      "adobe",
      "airbnb",
      "algolia",
      "amazon",
      "android",
      "angular",
      "apple",
    ],
  },
  {
    type: "logos",
    iconesNine: [
      "100tb",
      "500px",
      "active-campaign",
      "active-campaign-icon",
      "adobe-after-effects",
      "adobe-animate",
      "adobe-dreamweaver",
      "adobe-illustrator",
      "adobe-incopy",
    ],
  },
  {
    type: "simple-icons",
    iconesNine: [
      "1001tracklists",
      "1password",
      "3m",
      "42",
      "4chan",
      "4d",
      "500px",
      "abbott",
      "abbrobotstudio",
    ],
  },
  {
    type: "cib",
    iconesNine: [
      "500px",
      "500px-5",
      "about-me",
      "abstract",
      "acm",
      "addthis",
      "adguard",
      "adobe",
      "adobe-acrobat-reader",
    ],
  },
  {
    type: "fa6-brands",
    iconesNine: [
      "42-group",
      "500px",
      "accusoft",
      "adn",
      "adversal",
      "affiliatetheme",
      "airbnb",
      "algolia",
      "amazon",
    ],
  },
  {
    type: "nonicons",
    iconesNine: [
      "angular-16",
      "babel-16",
      "c-16",
      "c-plusplus-16",
      "c-sharp-16",
      "capacitor-16",
      "class-16",
      "constant-16",
      "css-16",
    ],
  },
  {
    type: "arcticons",
    iconesNine: [
      "0h-h1",
      "104ua",
      "1111",
      "1112-delivery",
      "17track",
      "180",
      "1822-direkt",
      "1822tan",
      "1945airforce",
    ],
  },
  {
    type: "file-icons",
    iconesNine: [
      "1c",
      "1c-alt",
      "3d-model",
      "3ds-max",
      "4d",
      "a",
      "abap",
      "abif",
      "acre",
    ],
  },
  {
    type: "devicon",
    iconesNine: [
      "3dsmax",
      "aarch64",
      "adonisjs",
      "adonisjs-wordmark",
      "aftereffects",
      "akka",
      "akka-wordmark",
      "algolia",
      "algolia-wordmark",
    ],
  },
  {
    type: "devicon-plain",
    iconesNine: [
      "3dsmax",
      "aarch64",
      "aftereffects",
      "akka",
      "akka-wordmark",
      "amazonwebservices-wordmark",
      "android",
      "android-wordmark",
      "androidstudio",
    ],
  },
  {
    type: "skill-icons",
    iconesNine: [
      "ableton-dark",
      "ableton-light",
      "activitypub-dark",
      "activitypub-light",
      "actix-dark",
      "actix-light",
      "adonis",
      "aftereffects",
      "aiscript-dark",
    ],
  },
  {
    type: "brandico",
    iconesNine: [
      "amex",
      "bandcamp",
      "blogger",
      "blogger-rect",
      "box",
      "box-rect",
      "codepen",
      "deviantart",
      "diigo",
    ],
  },
  {
    type: "entypo-social",
    iconesNine: [
      "500px",
      "500px-with-circle",
      "basecamp",
      "behance",
      "creative-cloud",
      "dribbble",
      "dribbble-with-circle",
      "dropbox",
      "evernote",
    ],
  },
  {
    type: "cryptocurrency",
    iconesNine: [
      "0xbtc",
      "1inch",
      "2give",
      "aave",
      "abt",
      "act",
      "actn",
      "ada",
      "add",
    ],
  },
  {
    type: "cryptocurrency-color",
    iconesNine: [
      "0xbtc",
      "1inch",
      "2give",
      "aave",
      "abt",
      "act",
      "actn",
      "ada",
      "add",
    ],
  },
  {
    type: "flag",
    iconesNine: [
      "ac-1x1",
      "ac-4x3",
      "ad-1x1",
      "ad-4x3",
      "ae-1x1",
      "ae-4x3",
      "af-1x1",
      "af-4x3",
      "ag-1x1",
    ],
  },
  {
    type: "circle-flags",
    iconesNine: [
      "ac",
      "ad",
      "ae",
      "af",
      "af-emirate",
      "afar",
      "ag",
      "ai",
      "al",
    ],
  },
  {
    type: "flagpack",
    iconesNine: ["ad", "ae", "af", "ag", "ai", "al", "am", "ao", "aq"],
  },
  {
    type: "cif",
    iconesNine: ["ad", "ae", "af", "ag", "al", "am", "ao", "ar", "at"],
  },
  {
    type: "gis",
    iconesNine: [
      "360",
      "arrow",
      "arrow-o",
      "azimuth",
      "bbox",
      "bbox-alt",
      "bicycle",
      "bookmark-poi",
      "bookmark-poi-b",
    ],
  },
  {
    type: "map",
    iconesNine: [
      "abseiling",
      "accounting",
      "airport",
      "amusement-park",
      "aquarium",
      "archery",
      "art-gallery",
      "assistive-listening-system",
      "atm",
    ],
  },
  {
    type: "geo",
    iconesNine: [
      "turf-along",
      "turf-bbox-polygon",
      "turf-bezier",
      "turf-buffer",
      "turf-center",
      "turf-centroid",
      "turf-concave",
      "turf-convex",
      "turf-destination",
    ],
  },
  {
    type: "game-icons",
    iconesNine: [
      "3d-glasses",
      "3d-hammer",
      "3d-meeple",
      "3d-stairs",
      "abacus",
      "abbot-meeple",
      "abdominal-armor",
      "abstract-001",
      "abstract-002",
    ],
  },
  {
    type: "fad",
    iconesNine: [
      "adr",
      "adsr",
      "ahdsr",
      "ar",
      "armrecording",
      "arpchord",
      "arpdown",
      "arpdownandup",
      "arpdownup",
    ],
  },
  {
    type: "academicons",
    iconesNine: [
      "academia",
      "academia-square",
      "acclaim",
      "acclaim-square",
      "acm",
      "acm-square",
      "acmdl",
      "acmdl-square",
      "ads",
    ],
  },
  {
    type: "wi",
    iconesNine: [
      "alien",
      "barometer",
      "celsius",
      "cloud",
      "cloud-down",
      "cloud-refresh",
      "cloud-up",
      "cloudy",
      "cloudy-gusts",
    ],
  },
  {
    type: "healthicons",
    iconesNine: [
      "blood-a-n",
      "blood-a-n-negative",
      "blood-a-n-outline",
      "blood-a-p",
      "blood-a-p-negative",
      "blood-a-p-outline",
      "blood-ab-n",
      "blood-ab-n-negative",
      "blood-ab-n-outline",
    ],
  },
  {
    type: "medical-icon",
    iconesNine: [
      "accessibility",
      "administration",
      "alternative-complementary",
      "ambulance",
      "anesthesia",
      "billing",
      "cardiology",
      "care-staff-area",
      "cath-lab",
    ],
  },
  {
    type: "covid",
    iconesNine: [
      "covid-19-virus-4",
      "covid-19-virus-pandemic-1",
      "covid-19-virus-pandemic-2",
      "covid-19-virus-pandemic-3",
      "covid19-virus-1",
      "covid19-virus-2",
      "covid19-virus-3",
      "covid19-virus-bat",
      "covid19-virus-heal-1",
    ],
  },
  {
    type: "la",
    iconesNine: ["braille", "deaf", "sign-language", "universal-access"],
  },
  {
    type: "eva",
    iconesNine: [
      "activity-fill",
      "activity-outline",
      "alert-circle-fill",
      "alert-circle-outline",
      "alert-triangle-fill",
      "alert-triangle-outline",
      "archive-fill",
      "archive-outline",
      "arrow-back-fill",
    ],
  },
  {
    type: "dashicons",
    iconesNine: [
      "admin-appearance",
      "admin-collapse",
      "admin-comments",
      "admin-customizer",
      "admin-generic",
      "admin-home",
      "admin-links",
      "admin-media",
      "admin-multisite",
    ],
  },
  {
    type: "flat-color-icons",
    iconesNine: [
      "about",
      "accept-database",
      "add-column",
      "add-database",
      "add-image",
      "add-row",
      "address-book",
      "advance",
      "advertising",
    ],
  },
  {
    type: "entypo",
    iconesNine: [
      "add-to-list",
      "add-user",
      "address",
      "adjust",
      "air",
      "aircraft",
      "aircraft-landing",
      "aircraft-take-off",
      "align-bottom",
    ],
  },
  {
    type: "foundation",
    iconesNine: [
      "address-book",
      "alert",
      "align-center",
      "align-justify",
      "align-left",
      "align-right",
      "anchor",
      "annotate",
      "archive",
    ],
  },
  {
    type: "raphael",
    iconesNine: [
      "500px",
      "acw",
      "alarm",
      "android",
      "anonymous",
      "apple",
      "apps",
      "arrowalt",
      "arrowdown",
    ],
  },
  {
    type: "icons8",
    iconesNine: [
      "add-shopping-cart",
      "add-user",
      "adventures",
      "advertising",
      "airport",
      "align-center",
      "align-justify",
      "align-left",
      "align-right",
    ],
  },
  {
    type: "iwwa",
    iconesNine: [
      "add",
      "add-15m",
      "add-1d",
      "add-1m",
      "add-1w",
      "add-1y",
      "alarm",
      "alarm-o",
      "alert",
    ],
  },
  {
    type: "heroicons-outline",
    iconesNine: [
      "academic-cap",
      "adjustments",
      "annotation",
      "archive",
      "arrow-circle-down",
      "arrow-circle-left",
      "arrow-circle-right",
      "arrow-circle-up",
      "arrow-down",
    ],
  },
  {
    type: "heroicons-solid",
    iconesNine: [
      "academic-cap",
      "adjustments",
      "annotation",
      "archive",
      "arrow-circle-down",
      "arrow-circle-left",
      "arrow-circle-right",
      "arrow-circle-up",
      "arrow-down",
    ],
  },
  {
    type: "fa-solid",
    iconesNine: [
      "blender-phone",
      "crown",
      "dumpster-fire",
      "network-wired",
      "signature",
      "skull",
      "vr-cardboard",
    ],
  },
  { type: "fa-regular", iconesNine: ["closed-captioning", "question-circle"] },
  {
    type: "fa-brands",
    iconesNine: [
      "500px",
      "accusoft",
      "adn",
      "adversal",
      "affiliatetheme",
      "airbnb",
      "algolia",
      "amazon",
      "amilia",
    ],
  },
  {
    type: "fa",
    iconesNine: [
      "500px",
      "address-book",
      "address-book-o",
      "address-card",
      "address-card-o",
      "adjust",
      "adn",
      "align-center",
      "align-justify",
    ],
  },
  {
    type: "fluent-mdl2",
    iconesNine: [
      "accept",
      "accept-medium",
      "access-logo",
      "accessibilty-checker",
      "account-activity",
      "account-browser",
      "account-management",
      "accounts",
      "action-center",
    ],
  },
  {
    type: "fontisto",
    iconesNine: [
      "american-sign-language-interpreting",
      "audio-description",
      "blind",
      "braille",
      "deaf",
      "if-question-circle",
      "low-vision",
      "tty",
      "universal-acces",
    ],
  },
  {
    type: "icomoon-free",
    iconesNine: [
      "500px",
      "accessibility",
      "address-book",
      "aid-kit",
      "airplane",
      "alarm",
      "amazon",
      "android",
      "angry",
    ],
  },
  {
    type: "subway",
    iconesNine: [
      "add",
      "add-1",
      "add-playlist",
      "admin",
      "admin-1",
      "admin-2",
      "airplane-mode",
      "alam",
      "at",
    ],
  },
  {
    type: "oi",
    iconesNine: [
      "account-login",
      "account-logout",
      "action-redo",
      "action-undo",
      "align-center",
      "align-left",
      "align-right",
      "aperture",
      "arrow-bottom",
    ],
  },
  {
    type: "wpf",
    iconesNine: [
      "2f-swipe-down",
      "2f-swipe-right",
      "add-image",
      "add-user",
      "administrator",
      "airplane-takeoff",
      "alarm-clock",
      "align-center",
      "align-justify",
    ],
  },
  {
    type: "simple-line-icons",
    iconesNine: [
      "action-redo",
      "action-undo",
      "anchor",
      "arrow-down",
      "arrow-down-circle",
      "arrow-left",
      "arrow-left-circle",
      "arrow-right",
      "arrow-right-circle",
    ],
  },
  {
    type: "et",
    iconesNine: [
      "adjustments",
      "alarmclock",
      "anchor",
      "aperture",
      "attachments",
      "bargraph",
      "basket",
      "beaker",
      "bike",
    ],
  },
  {
    type: "el",
    iconesNine: [
      "address-book",
      "address-book-alt",
      "adjust",
      "adjust-alt",
      "adult",
      "align-center",
      "align-justify",
      "align-left",
      "align-right",
    ],
  },
  {
    type: "vaadin",
    iconesNine: [
      "abacus",
      "absolute-position",
      "academy-cap",
      "accessibility",
      "accordion-menu",
      "add-dock",
      "adjust",
      "adobe-flash",
      "airplane",
    ],
  },
  {
    type: "grommet-icons",
    iconesNine: [
      "accessibility",
      "achievement",
      "action",
      "actions",
      "ad",
      "add",
      "add-circle",
      "aed",
      "aggregate",
    ],
  },
  { type: "whh", iconesNine: ["0", "1", "2", "3", "4", "5", "6", "7", "8"] },
  {
    type: "si-glyph",
    iconesNine: [
      "abacus",
      "adjustment-horizon",
      "adjustment-vertical",
      "air-balloon",
      "airplane",
      "airplane-2",
      "alarm-clock",
      "alien",
      "aligh-left",
    ],
  },
  {
    type: "zmdi",
    iconesNine: [
      "3d-rotation",
      "500px",
      "8tracks",
      "account",
      "account-add",
      "account-box",
      "account-box-mail",
      "account-box-o",
      "account-box-phone",
    ],
  },
  { type: "ls", iconesNine: ["0", "1", "2", "3", "4", "5", "6", "7", "8"] },
  {
    type: "bpmn",
    iconesNine: [
      "ad-hoc-marker",
      "business-rule",
      "business-rule-task",
      "call-activity",
      "compensation-marker",
      "conditional-flow",
      "connection",
      "connection-multi",
      "data-input",
    ],
  },
  {
    type: "flat-ui",
    iconesNine: [
      "android",
      "android1",
      "app-store",
      "arrow",
      "art",
      "bag",
      "basket",
      "book",
      "bowling",
    ],
  },
  {
    type: "vs",
    iconesNine: [
      "0-square",
      "1-square",
      "2-square",
      "3-square",
      "4-square",
      "5-square",
      "6-square",
      "7-square",
      "8-square",
    ],
  },
  {
    type: "topcoat",
    iconesNine: [
      "alert",
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "attachment",
      "audio",
      "audiooff",
      "back",
    ],
  },
  {
    type: "il",
    iconesNine: [
      "add-user",
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "attachment",
      "basket",
      "behance",
      "bell",
    ],
  },
  {
    type: "websymbol",
    iconesNine: [
      "archive",
      "arrows-cw",
      "attach",
      "attention",
      "block",
      "cancel",
      "cancel-circle",
      "chat",
      "clock",
    ],
  },
  {
    type: "fontelico",
    iconesNine: [
      "chrome",
      "crown",
      "crown-minus",
      "crown-plus",
      "emo-angry",
      "emo-beer",
      "emo-coffee",
      "emo-cry",
      "emo-devil",
    ],
  },
  {
    type: "ps",
    iconesNine: [
      "30-80",
      "40-105",
      "50-120",
      "60-140",
      "70-160",
      "95-200",
      "aim",
      "aim-alt",
      "airplane",
    ],
  },
  {
    type: "feather",
    iconesNine: [
      "activity",
      "airplay",
      "alert-circle",
      "alert-octagon",
      "alert-triangle",
      "align-center",
      "align-justify",
      "align-left",
      "align-right",
    ],
  },
  {
    type: "mono-icons",
    iconesNine: [
      "add",
      "archive",
      "arrow-down",
      "arrow-left",
      "arrow-left-down",
      "arrow-left-up",
      "arrow-right",
      "arrow-right-down",
      "arrow-right-up",
    ],
  },
  {
    type: "pepicons",
    iconesNine: [
      "airplane",
      "airplane-print",
      "alarm",
      "alarm-print",
      "angle-down",
      "angle-down-print",
      "angle-left",
      "angle-left-print",
      "angle-right",
    ],
  },
];

function Index() {
  const [iconTypes, setIconTypes] = useState([]);
  const [nowList, setNowList] = useState([]);
  const [allList, setAllList] = useState([]);

  const [list, setsourceData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(() => {
    const datas = [];
    const pageSize = 90;
    for (let i = 10; i < pageSize; i++) {
      // 从 nowList 中取出数据
      const item = allList[i];
      if (item) {
        datas.push(item);
      }
    }
    console.log("123132", [...list, ...datas]);
    setsourceData([...list, ...datas]);
  }, []);

  useEffect(() => {
    getData();
    console.log("allList", allList);
    console.log("isLoading", isLoading);
  }, [getData, isLoading, pageNo]);

  const itemRender = (item: any, index: number) => {
    return (
      <View key={index}>
        <View className="text-2xl">{item.type}</View>
        <View className="text-xs text-[#666]">{item.number} types</View>
        {item?.list?.map((item1, index1) => {
          return (
            <View
              key={index1 + index}
              onClick={() => {
                Taro.navigateTo({
                  url: `/pages/icones/index?type=${item1.name}&author=${item1?.author?.name}&license=${item1?.license?.title}&total=${item1?.total}`,
                });
              }}
            >
              <Cell
                className="border-2 border-[#e2e2e2] border-solid"
                title={item1.name}
                description={
                  <>
                    <View>{item1?.author?.name}</View>
                    <View>{item1?.license?.title}</View>
                    <View>{item1?.total} icones</View>
                  </>
                }
                extra={
                  <View className="flex flex-wrap gap-2 w-[180px]">
                    {/* iconNine 中的 item1.name */}
                    {iconNineList(item1.name)?.map((item2, index2) => {
                      if (item1.name && item2) {
                        return (
                          <Image
                            key={index2 + "iconNine"}
                            lazyLoad
                            fadeIn
                            className="w-[40px] h-[40px]"
                            src={`https://api.commands.top/api/collection/${item1.name}/${item2}`}
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                  </View>
                }
              />
            </View>
          );
        })}
      </View>
    );
  };

  const onScroll = () => {
    if (pageNo > 50 || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setPageNo(pageNo + 1);
      setIsLoading(false);
    }, 30);
  };

  const init = async () => {
    const nowIconList: any = [];
    try {
      const res1 = await getTestData1();
      if (res1.length > 0) {
        const allType = Array.from(
          new Set(
            Object.keys(res1).map((item) => {
              return res1[item].category;
            })
          )
        );
        // 将所有的 icon 分类
        allType.forEach((item) => {
          const _list = Object.keys(res1).filter((item1) => {
            return res1[item1].category === item;
          });
          let icones: any = [];
          _list.forEach((item1) => {
            icones.push({
              name: item1,
              license: res1[item1].license,
              author: res1[item1].author,
              total: res1[item1].total,
              category: res1[item1].category,
              samples: res1[item1].samples,
            });
          });
          nowIconList.push({
            type: item,
            list: icones,
            number: _list.length,
          });
        });
        // console.log(nowIconList.map((_item: any) => _item.list).flat());
        setIconTypes(nowIconList);
        const _allList = nowIconList.map((_item: any) => _item.list).flat();
        console.log("_allList", _allList);
        // 将nowIconList中的 list 展开
        setAllList(_allList);
        setIsLoading(false);
      }

      // 获取 res1 所有的 key
      // const setList = Object.keys(res1).slice(0, 5);
      // const requests = Object.keys(res1).map(async (item) => {
      //   const res2: any = await getTestData2(item);
      //   let iconesNine = [];
      //   if (res2?.uncategorized?.length > 0) {
      //     iconesNine = res2.uncategorized.slice(0, 9);
      //   } else if (
      //     res2?.categories &&
      //     Object.keys(res2?.categories)?.length > 0
      //   ) {
      //     iconesNine = res2?.categories[Object.keys(res2?.categories)[0]].slice(
      //       0,
      //       9
      //     );
      //   }
      //   return {
      //     type: item,
      //     iconesNine,
      //   };
      // });

      // Promise.all(requests).then((resAll) => {
      //   // taro 自动复制
      //   Taro.setClipboardData({
      //     data: JSON.stringify(resAll),
      //   });
      //   setIconNine(resAll);
      // });
    } catch (error) {}
  };

  useEffect(() => {
    init();
    setIsLoading(false);
  }, []);

  useReachBottom(() => {
    console.log("到底了");
    const _nowList = nowList.concat(
      iconTypes.slice(nowList.length, nowList.length + 10)
    );
    setNowList(_nowList);
    console.log(_nowList.length);
  });

  const iconNineList = (typeName: string) => {
    return myIconNineList?.find((item) => item.type === typeName)?.iconesNine;
  };

  return (
    <View className="mb-32 p-4">
      <VirtualList
        itemHeight={50}
        list={list}
        itemRender={itemRender}
        onScroll={onScroll}
      />
    </View>
  );
}

export default Index;
