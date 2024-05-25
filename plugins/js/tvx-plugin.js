/*
 * TVX Plugin v0.0.75
 * (c) 2024 Benjamin Zachey
 */
(function(e, m) {
    var k = {
        NAME: "TVX Framework",
        SHORTCUT: "TVX",
        VERSION: "0.1.34",
        SUFFIX: null,
        DUMMY_DATE: null,
        TIME_OFFSET: 0,
        TIME_ZONE_OFFSET: 0,
        ANIMATION_DURATION: 300,
        ANIMATION_EASE: "easeOutQuad",
        AFK_DELAY: 8000,
        SCREEN_WIDTH: 1280,
        SCREEN_HEIGHT: 720,
        SCREEN_FACTOR: 1,
        ZOOM_FACTOR: 1,
        PLATFORM: null,
        ID: null,
        ANIMATE: 0,
        TRANSFORM: 0,
        INPUT: 0,
        REMOTE: 0,
        LAYOUT: null,
        SCALE: null,
        ZOOM: null,
        CENTER: 0,
        BACKGROUND: 0,
        LEAVE: 0,
        EXIT: 0,
        BACK: 0,
        VOLUME: 0,
        BUSY: 0,
        SPEED: 0,
        PLAYBACK: 0,
        FULLSCREEN: 0,
        SUSPEND: 0,
        SECURE: 0,
        CAPTION: 0,
        APP: null
    };
    var l = {
        COMMON: {
            IMAGE: {
                DEFAULT: "img/default.png"
            },
            ICON: {
                DEFAULT: "blank"
            },
            TEXT: {
                DEFAULT: ""
            },
            COLOR: {
                WHITE: "rgb(255,255,255)",
                WHITE_SOFT: "rgba(255,255,255,0.5)",
                BLACK: "rgb(0,0,0)",
                BLACK_SOFT: "rgba(0,0,0,0.5)",
                GRAY: "rgb(51,51,51)",
                GRAY_SOFT: "rgba(51,51,51,0.5)",
                RED: "rgb(201,48,44)",
                GREEN: "rgb(68,157,68)",
                YELLOW: "rgb(236,151,31)",
                BLUE: "rgb(49,176,213)",
                GLASS: "rgba(255,255,255,0.1)"
            },
            CSS: {
                CLASS_SELECTED: "selected",
                CLASS_TRIGGER: "trigger",
                CLASS_FOCUSED: "focused",
                CLASS_DISABLED: "disabled",
                CLASS_INVALIDATED: "invalidated",
                CLASS_HOVER: "hover",
                CLASS_ROOT: "tvx-root",
                CLASS_TOP_LAYER: "tvx-top-layer",
                CLASS_BOTTOM_LAYER: "tvx-bottom-layer",
                CLASS_FULLSCREEN: "tvx-fullscreen",
                CLASS_VIDEO: "tvx-video",
                CLASS_VIDEO_ON: "tvx-video-on",
                CLASS_CENTER_OFF: "tvx-center-off",
                CLASS_BACKGROUND_OFF: "tvx-background-off",
                CLASS_CLICK_THROUGH: "tvx-click-through",
                CLASS_CURSOR_OFF: "tvx-cursor-off",
                CLASS_IMMERSIVE: "tvx-immersive",
                CLASS_ROUNDED: "tvx-rounded",
                CLASS_FILLER: "tvx-filler",
                CLASS_FILLER_WIDTH_TOP: "tvx-filler-width-top",
                CLASS_FILLER_WIDTH_BOTTOM: "tvx-filler-width-bottom",
                CLASS_FILLER_WIDTH_CENTER: "tvx-filler-width-center",
                CLASS_FILLER_HEIGHT_LEFT: "tvx-filler-height-left",
                CLASS_FILLER_HEIGHT_RIGHT: "tvx-filler-height-right",
                CLASS_FILLER_HEIGHT_CENTER: "tvx-filler-height-center",
                CLASS_FILLER_FIT: "tvx-filler-fit",
                CLASS_FILLER_COVER: "tvx-filler-cover",
                CLASS_FILLER_SMART: "tvx-filler-smart",
                CLASS_ICON: "tvx-icon tvx-icon-{ICON}",
                CLASS_ICON_INLINE: "tvx-icon-inline tvx-icon-{ICON}",
                CLASS_TEXT: "tvx-text",
                CLASS_TEXT_INLINE: "tvx-text-inline"
            },
            HTML: {
                BREAK: "<br/>",
                SPACE: "&nbsp;",
                TAB: "&nbsp;&nbsp;&nbsp;",
                CANVAS: "<canvas class='{CLASS}' width='{WIDTH}' height='{HEIGHT}'></canvas>",
                IFRAME: "<iframe class='{CLASS}' frameborder='0' scrolling='no' allow='autoplay *;encrypted-media *;fullscreen *' src='{SRC}'></iframe>",
                ICON: "<i class='{CLASS}'></i>",
                ICON_STYLED: "<i class='{CLASS}' style='{STYLE}'></i>",
                TEXT: "<span class='{CLASS}'>{TEXT}</span>",
                TEXT_STYLED: "<span class='{CLASS}' style='{STYLE}'>{TEXT}</span>",
                TEXT_START: "<span class='{CLASS}'>",
                TEXT_START_STYLED: "<span class='{CLASS}' style='{STYLE}'>",
                TEXT_END: "</span>"
            }
        },
        LOGGER: {
            CSS: {
                CLASS_DEBUG: "tvx-debug",
                CLASS_INFO: "tvx-info",
                CLASS_WARN: "tvx-warn",
                CLASS_ERROR: "tvx-error"
            },
            HTML: {
                LINE: "<span class='{LEVEL}'>{MESSAGE}</span>"
            }
        },
        RENDERER: {
            CSS: {
                CLASS_TRANSFORM: "tvx-transform",
                CLASS_TRANSFORM_ZERO: "tvx-transform-zero",
                CLASS_TRANSFORM_3D: "tvx-transform-3d",
                CLASS_TRANSFORM_3D_ZERO: "tvx-transform-3d-zero"
            },
            STATE: {
                SHOW: {
                    visible: true
                },
                HIDE: {
                    visible: false
                },
                FADE_IN_FROM: {
                    opacity: 0
                },
                FADE_IN_TO: {
                    opacity: 1,
                    visible: true
                },
                FADE_OUT_FROM: {
                    opacity: 1
                },
                FADE_OUT_TO: {
                    opacity: 0,
                    visible: false
                }
            }
        },
        REMOTE: {
            CSS: {
                CLASS_BUTTON: "tvx-button",
                CLASS_SUBCONTROL_LEFT: "tvx-subcontrol-left",
                CLASS_SUBCONTROL_RIGHT: "tvx-subcontrol-right"
            }
        },
        APP: null
    };
    var a = new function() {
        var Q = /\\/g;
        var ad = /"/g;
        var S = /'/g;
        var az = /\n/g;
        var aw = /\r/g;
        var O = /\r\n/g;
        var au = /\t/g;
        var X = /\s/g;
        var aa = /-/g;
        var ab = /^[A-Za-z0-9._-]+$/;
        var al = /[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/;
        var at = /"(\\.|[^"\\])*"/g;
        var av = /^\s+|\s+$/g;
        var ax = /^#?[A-Za-z0-9]+$/;
        var ae = /\s{0,}>\s{0,}/g;
        var ag = /\s{0,}\/>/g;
        var af = /\s{0,}<\s{0,}/g;
        var ai = az;
        var ah = aw;
        var ak = /\s{2,}/g;
        var K = /&/g;
        var W = ad;
        var P = S;
        var ac = /</g;
        var U = />/g;
        var ao = /&quot;/g;
        var an = /&#39;/g;
        var am = /&lt;/g;
        var ar = /&gt;/g;
        var aq = /&amp;/g;
        var L = /\+/g;
        var N = /\//g;
        var M = /=/g;
        var R = /[^A-Za-z0-9\+\/\=]/g;
        var T = aa;
        var aj = /_/g;
        var aA = /,/g;
        var Y = /\./g;
        var V = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var Z = e.location.protocol === "https:";
        var ay = function(aB, aD) {
            if (aB && aD) {
                var aC = e.location.pathname;
                aC = aC.substring(0, aC.lastIndexOf("/"));
                return e.location.protocol + "//" + e.location.host + aC
            } else {
                if (aB) {
                    return e.location.protocol + "//" + e.location.host
                }
            }
            return e.location.protocol + "//"
        };
        var ap = function(aB) {
            return aB != null ? aB.replace(Q, "\\\\").replace(ad, '\\"').replace(az, "\\n") : ""
        };
        this.createVersion = function(aD) {
            if (this.isFullStr(aD)) {
                var aF = aD.split(".");
                if (aF.length == 3) {
                    var aC = this.strToNum(aF[0], -1);
                    var aB = this.strToNum(aF[1], -1);
                    var aE = this.strToNum(aF[2], -1);
                    if (aC >= 0 && aB >= 0 && aE >= 0) {
                        return {
                            major: aC,
                            minor: aB,
                            patch: aE
                        }
                    }
                }
            }
            return null
        }
        ;
        this.checkVersion = function(aE, aD) {
            var aC = this.createVersion(aD);
            if (aC != null) {
                var aB = this.createVersion(aE);
                if (aB != null) {
                    if (aB.major == aC.major) {
                        if (aB.minor == aC.minor) {
                            return aB.patch >= aC.patch
                        }
                        return aB.minor > aC.minor
                    }
                    return aB.major > aC.major
                }
                return false
            }
            return true
        }
        ;
        this.createKey = function(aF, aD) {
            if (aF == null) {
                aF = 4
            }
            if (aD == null) {
                aD = 10
            }
            var aC = "";
            for (var aE = 0; aE < aF; aE++) {
                var aB = 0;
                if (aD == 0) {
                    aB = Math.round(Math.random() * 9)
                } else {
                    if (aD == 1) {
                        aB = 10 + Math.round(Math.random() * 51)
                    } else {
                        if (aD == 2) {
                            aB = 10 + Math.round(Math.random() * 25)
                        } else {
                            if (aD == 3) {
                                aB = 36 + Math.round(Math.random() * 25)
                            } else {
                                aB = Math.round(Math.random() * 61)
                            }
                        }
                    }
                }
                if (aB >= 0 && aB <= 9) {
                    aC += "" + aB
                }
                if (aB >= 10 && aB <= 35) {
                    aC += String.fromCharCode(aB + 55)
                }
                if (aB >= 36 && aB <= 61) {
                    aC += String.fromCharCode(aB + 61)
                }
            }
            return aC
        }
        ;
        this.isFullStr = function(aB) {
            return aB != null && typeof aB == "string" && aB.length > 0
        }
        ;
        this.isBool = function(aB) {
            if (aB != null && typeof aB == "boolean") {
                return true
            }
            return this.isFullStr(aB)
        }
        ;
        this.isNum = function(aB) {
            if (aB != null && typeof aB == "number") {
                return true
            }
            return this.isFullStr(aB) && isFinite(aB)
        }
        ;
        this.isArray = function(aB) {
            if (aB != null) {
                return Array.isArray(aB)
            }
            return false
        }
        ;
        this.isEmpty = function(aC) {
            if (aC != null) {
                if (typeof aC == "string") {
                    return aC.length == 0
                }
                var aB;
                for (aB in aC) {
                    return false
                }
            }
            return true
        }
        ;
        this.isValid = function(aC, aB) {
            if (aC != null) {
                if (aB === true) {
                    if (typeof aC == "string") {
                        return aC.length > 0
                    }
                }
                return true
            }
            return false
        }
        ;
        this.isId = function(aB) {
            return this.isFullStr(aB) && ab.test(aB)
        }
        ;
        this.isJson = function(aB) {
            return this.isFullStr(aB) && !al.test(aB.replace(at, ""))
        }
        ;
        this.isHttpUrl = function(aB) {
            return this.isFullStr(aB) && (aB.indexOf("http://") == 0 || aB.indexOf("https://") == 0)
        }
        ;
        this.strValue = function(aB) {
            if (aB != null) {
                if (typeof aB == "string") {
                    return aB
                } else {
                    return "" + aB
                }
            }
            return null
        }
        ;
        this.strFullCheck = function(aC, aB) {
            return this.isFullStr(aC) ? aC : aB
        }
        ;
        this.strTrim = function(aB) {
            return this.isFullStr(aB) ? aB.replace(av, "") : ""
        }
        ;
        this.strClear = function(aB) {
            return this.isFullStr(aB) ? aB.replace(X, "") : ""
        }
        ;
        this.strFlatten = function(aB) {
            return this.isFullStr(aB) ? aB.replace(ai, " ").replace(ah, " ").replace(ak, " ") : ""
        }
        ;
        this.strTruncate = function(aB, aC) {
            return this.isFullStr(aB) && aC > 0 && aB.length > aC ? aB.substr(0, aC) + "..." : aB
        }
        ;
        this.strShuffle = function(aB) {
            return this.isFullStr(aB) ? aB.split("").sort(function() {
                return 0.5 - Math.random()
            }).join("") : ""
        }
        ;
        this.strReplace = function(aC, aD, aB) {
            if (this.isFullStr(aC) && this.isFullStr(aD)) {
                return aC.replace(aD, function() {
                    return aB != null ? aB : ""
                })
            }
            return aC
        }
        ;
        this.strReplaceMap = function(aC, aD) {
            if (this.isFullStr(aC) && aD != null) {
                for (var aB in aD) {
                    aC = this.strReplace(aC, aB, aD[aB])
                }
            }
            return aC
        }
        ;
        this.strToBool = function(aC, aB) {
            if (aC != null && typeof aC == "boolean") {
                return aC
            }
            return this.isFullStr(aC) ? aC == "true" : aB
        }
        ;
        this.strToNum = function(aC, aB) {
            if (aC != null && typeof aC == "number") {
                return aC
            }
            return this.isFullStr(aC) && isFinite(aC) ? aC * 1 : aB
        }
        ;
        this.strToAction = function(aB) {
            return this.isFullStr(aB) ? aB.toUpperCase().replace(aa, "_") : ""
        }
        ;
        this.strToJsonStr = function(aB) {
            return this.isFullStr(aB) ? ap(aB) : ""
        }
        ;
        this.strToUrlStr = function(aB) {
            return this.isFullStr(aB) ? encodeURIComponent(aB) : ""
        }
        ;
        this.strContainsToken = function(aD, aE, aB, aF) {
            if (this.isFullStr(aD) && this.isFullStr(aE)) {
                var aC = aD.indexOf(aE);
                if (aB == null) {
                    aB = 0
                }
                if (aF == null) {
                    aF = aD.length
                }
                return aC >= aB && aC < aF
            }
            return false
        }
        ;
        this.strCountToken = function(aE, aF, aC, aG) {
            var aB = 0;
            if (this.isFullStr(aE) && this.isFullStr(aF)) {
                var aD = 0;
                if (aC != null && aC >= 0) {
                    aD = aC
                }
                while (aD >= 0 && aD < aE.length) {
                    aD = aE.indexOf(aF, aD);
                    if (aD >= 0) {
                        aD += aF.length;
                        if (aG == null || aD < aG) {
                            aB++
                        }
                    }
                }
            }
            return aB
        }
        ;
        this.htmlTrim = function(aB) {
            return this.isFullStr(aB) ? this.strTrim(aB.replace(ae, ">").replace(ag, "/>").replace(af, "<").replace(ai, " ").replace(ah, " ").replace(ak, " ")) : ""
        }
        ;
        this.htmlEscape = function(aB) {
            return this.isFullStr(aB) ? aB.replace(K, "&amp;").replace(W, "&quot;").replace(P, "&#39;").replace(ac, "&lt;").replace(U, "&gt;") : ""
        }
        ;
        this.htmlUnescape = function(aB) {
            return this.isFullStr(aB) ? aB.replace(ao, '"').replace(an, "'").replace(am, "<").replace(ar, ">").replace(aq, "&") : ""
        }
        ;
        this.htmlAttrEscape = function(aB) {
            return this.isFullStr(aB) ? aB.replace(W, "&quot;").replace(P, "&#39;") : ""
        }
        ;
        this.htmlAttrUnescape = function(aB) {
            return this.isFullStr(aB) ? aB.replace(ao, '"').replace(an, "'") : ""
        }
        ;
        this.htmlTextEscape = function(aB) {
            return this.isFullStr(aB) ? this.htmlEscape(aB).replace(az, l.COMMON.HTML.BREAK).replace(au, l.COMMON.HTML.TAB) : ""
        }
        ;
        this.htmlCharacter = function(aB) {
            return this.isFullStr(aB) && ax.test(aB) ? "&" + aB + ";" : ""
        }
        ;
        this.base64Encode = function(aJ) {
            var aE = "";
            if (this.isFullStr(aJ)) {
                var aK, aF, aH;
                var aD, aI, aC, aG;
                var aB = 0;
                aJ = this.utf8Encode(aJ);
                while (aB < aJ.length) {
                    aK = aJ.charCodeAt(aB++);
                    aF = aJ.charCodeAt(aB++);
                    aH = aJ.charCodeAt(aB++);
                    aD = aK >> 2;
                    aI = ((aK & 3) << 4) | (aF >> 4);
                    aC = ((aF & 15) << 2) | (aH >> 6);
                    aG = aH & 63;
                    if (isNaN(aF)) {
                        aC = aG = 64
                    } else {
                        if (isNaN(aH)) {
                            aG = 64
                        }
                    }
                    aE += V.charAt(aD) + V.charAt(aI) + V.charAt(aC) + V.charAt(aG)
                }
            }
            return aE
        }
        ;
        this.base64EncodeUrl = function(aB) {
            return this.isFullStr(aB) ? this.base64Encode(aB).replace(L, "-").replace(N, "_").replace(M, ",") : ""
        }
        ;
        this.base64EncodeId = function(aB) {
            return this.isFullStr(aB) ? this.base64Encode(aB).replace(L, "-").replace(N, "_").replace(M, ".") : ""
        }
        ;
        this.base64Decode = function(aJ) {
            var aE = "";
            if (this.isFullStr(aJ)) {
                var aK, aF, aH;
                var aD, aI, aC, aG;
                var aB = 0;
                aJ = aJ.replace(R, "");
                while (aB < aJ.length) {
                    aD = V.indexOf(aJ.charAt(aB++));
                    aI = V.indexOf(aJ.charAt(aB++));
                    aC = V.indexOf(aJ.charAt(aB++));
                    aG = V.indexOf(aJ.charAt(aB++));
                    aK = (aD << 2) | (aI >> 4);
                    aF = ((aI & 15) << 4) | (aC >> 2);
                    aH = ((aC & 3) << 6) | aG;
                    aE += String.fromCharCode(aK);
                    if (aC != 64) {
                        aE += String.fromCharCode(aF)
                    }
                    if (aG != 64) {
                        aE += String.fromCharCode(aH)
                    }
                }
            }
            return this.utf8Decode(aE)
        }
        ;
        this.base64DecodeUrl = function(aB) {
            return this.isFullStr(aB) ? this.base64Decode(aB.replace(T, "+").replace(aj, "/").replace(aA, "=")) : ""
        }
        ;
        this.base64DecodeId = function(aB) {
            return this.isFullStr(aB) ? this.base64Decode(aB.replace(T, "+").replace(aj, "/").replace(Y, "=")) : ""
        }
        ;
        this.utf8Encode = function(aE) {
            var aC = "";
            if (this.isFullStr(aE)) {
                aE = aE.replace(O, "\n");
                for (var aB = 0; aB < aE.length; aB++) {
                    var aD = aE.charCodeAt(aB);
                    if (aD < 128) {
                        aC += String.fromCharCode(aD)
                    } else {
                        if ((aD > 127) && (aD < 2048)) {
                            aC += String.fromCharCode((aD >> 6) | 192);
                            aC += String.fromCharCode((aD & 63) | 128)
                        } else {
                            aC += String.fromCharCode((aD >> 12) | 224);
                            aC += String.fromCharCode(((aD >> 6) & 63) | 128);
                            aC += String.fromCharCode((aD & 63) | 128)
                        }
                    }
                }
            }
            return aC
        }
        ;
        this.utf8Decode = function(aF) {
            var aC = "";
            if (this.isFullStr(aF)) {
                var aG = 0;
                var aD, aE, aH, aB;
                aD = aE = aH = aB = 0;
                while (aG < aF.length) {
                    aD = aF.charCodeAt(aG);
                    if (aD < 128) {
                        aC += String.fromCharCode(aD);
                        aG++
                    } else {
                        if ((aD > 191) && (aD < 224)) {
                            aH = aF.charCodeAt(aG + 1);
                            aC += String.fromCharCode(((aD & 31) << 6) | (aH & 63));
                            aG += 2
                        } else {
                            aH = aF.charCodeAt(aG + 1);
                            aB = aF.charCodeAt(aG + 2);
                            aC += String.fromCharCode(((aD & 15) << 12) | ((aH & 63) << 6) | (aB & 63));
                            aG += 3
                        }
                    }
                }
            }
            return aC
        }
        ;
        this.createHash = function(aD, aC) {
            var aB = 0;
            if (this.isFullStr(aD)) {
                if (aC === true) {
                    for (var aE = aD.length; aE >= 0; aE--) {
                        aB = ((aB << 5) - aB) + aD.charCodeAt(aE);
                        aB &= aB
                    }
                } else {
                    for (var aE = 0; aE < aD.length; aE++) {
                        aB = ((aB << 5) - aB) + aD.charCodeAt(aE);
                        aB &= aB
                    }
                }
            }
            return aB
        }
        ;
        this.serialize = function(aB, aF) {
            if (aB === undefined) {
                return null
            }
            if (aB === null) {
                if (aF != null) {
                    return '"' + aF + '":null'
                } else {
                    return "null"
                }
            }
            var aG = null;
            var aD = typeof aB;
            if (Array.isArray(aB)) {
                aG = "[";
                var aE = 0;
                for (var aI = 0; aI < aB.length; aI++) {
                    var aC = this.serialize(aB[aI]);
                    if (aC != null) {
                        if (aE > 0) {
                            aG += ","
                        }
                        aG += aC;
                        aE++
                    }
                }
                aG += "]"
            } else {
                if (aD == "object") {
                    aG = "{";
                    var aE = 0;
                    for (var aH in aB) {
                        var aC = this.serialize(aB[aH], aH);
                        if (aC != null) {
                            if (aE > 0) {
                                aG += ","
                            }
                            aG += aC;
                            aE++
                        }
                    }
                    aG += "}"
                } else {
                    if (aD == "string") {
                        aG = '"' + ap(aB) + '"'
                    } else {
                        if (aD == "number" || aD == "boolean") {
                            aG = "" + aB
                        }
                    }
                }
            }
            if (aG != null) {
                if (aF != null) {
                    return '"' + aF + '":' + aG
                } else {
                    return aG
                }
            }
            return null
        }
        ;
        this.deserialize = function(aB) {
            try {
                if (e.JSON != null && typeof JSON.parse == "function") {
                    return this.isFullStr(aB) ? JSON.parse(aB) : null
                } else {
                    return this.isJson(aB) ? new Function("return " + aB)() : null
                }
            } catch (aC) {
                return null
            }
        }
        ;
        this.isSecureContext = function() {
            return Z
        }
        ;
        this.secureUrl = function(aB) {
            return this.isFullStr(aB) ? aB.replace("http://", "https://") : aB
        }
        ;
        this.getPrefixUrl = function(aB) {
            return ay(false, false) + this.strFullCheck(aB, "")
        }
        ;
        this.getHostUrl = function(aB) {
            return ay(true, false) + "/" + this.strFullCheck(aB, "")
        }
        ;
        this.getPathUrl = function(aB) {
            return ay(true, true) + "/" + this.strFullCheck(aB, "")
        }
        ;
        this.getAbsoluteUrl = function(aB) {
            if (this.isFullStr(aB) && !this.isHttpUrl(aB)) {
                if (aB.indexOf("/") == 0) {
                    return ay(true, false) + aB
                } else {
                    return ay(true, true) + "/" + aB
                }
            }
            return aB
        }
        ;
        this.getRootPath = function(aB, aF) {
            if (this.isFullStr(aB)) {
                var aE = e.location.pathname;
                var aD = aE.indexOf(aB);
                if (aD > 0) {
                    var aC = aE.substr(0, aD);
                    if (aF === true) {
                        if (aC.indexOf("/") == 0) {
                            aC = aC.substr(1)
                        }
                        if (aC.lastIndexOf("/") == aC.length - 1) {
                            aC = aC.substr(0, aC.length - 1)
                        }
                    } else {
                        if (aC.indexOf("/") != 0) {
                            aC = "/" + aC
                        }
                        if (aC.lastIndexOf("/") != aC.length - 1) {
                            aC += "/"
                        }
                    }
                    return aC
                }
            }
            return aF === true ? "" : "/"
        }
        ;
        this.exprEscape = function(aI, aH, aN, aO, aJ, aM, aE) {
            if (this.isFullStr(aI) && typeof aO == "function") {
                if (this.isFullStr(aH) && this.isFullStr(aN) && typeof aJ == "function") {
                    if (aI.indexOf(aH) >= 0 && aI.indexOf(aN) >= 0) {
                        var aB = "";
                        var aC = aH.length;
                        var aG = aN.length;
                        var aK = aI.length;
                        var aL = 0;
                        var aF = 0;
                        var aD = 0;
                        while (aF >= 0) {
                            aF = aI.indexOf(aH, aL);
                            if (aF >= 0) {
                                aD = aI.indexOf(aN, aF);
                                if (aD > 0) {
                                    if (aL < aF) {
                                        aB += aO(aI.substring(aL, aF), aE)
                                    }
                                    if (aF + aC < aD) {
                                        aB += aJ(aI.substring(aF + aC, aD), aE)
                                    }
                                    aL = aD + aG
                                } else {
                                    aL = aF;
                                    break
                                }
                            }
                        }
                        if (aL < aK) {
                            aB += aO(aI.substring(aL, aK), aE)
                        }
                        if (typeof aM == "function") {
                            aB += aM(aE)
                        }
                        return aB
                    }
                }
                return aO(aI, aE)
            }
            return ""
        }
    }
    ;
    var g = new function() {
        var P = "h:mm/ampm";
        var U = "h:mm:ss/ampm";
        var K = "mm/dd/yy";
        var N = "MM d, yyyy";
        var V = "D mm/dd";
        var L = "D mm/dd/yyyy";
        var R = "DD, MM d, yyyy";
        var M = ", ";
        var ac = ["Son", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var T = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ab = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var W = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var X = " AM";
        var ad = " PM";
        var Z = " day";
        var Y = " days";
        var S = " hr";
        var Q = " min";
        var O = " sec";
        var aa = function(af) {
            var ah = af % 10;
            var ag = af % 100;
            if (ah == 1 && ag != 11) {
                return "st"
            }
            if (ah == 2 && ag != 12) {
                return "nd"
            }
            if (ah == 3 && ag != 13) {
                return "rd"
            }
            return "th"
        };
        var ae = function(ah, ai, af) {
            if (ai.length == af) {
                for (var ag = 0; ag < af; ag++) {
                    ah[ag] = a.strTrim(ai[ag])
                }
            }
        };
        this.applyDictionary = function(aj) {
            if (aj != null) {
                P = aj.getValueForKey("format:time", P);
                U = aj.getValueForKey("format:long_time", U);
                K = aj.getValueForKey("format:date", K);
                N = aj.getValueForKey("format:long_date", N);
                V = aj.getValueForKey("format:day", V);
                L = aj.getValueForKey("format:long_day", L);
                R = aj.getValueForKey("format:full_day", R);
                M = aj.getValueForKey("format:separator", M);
                X = aj.getValueForKey("unit:am", X);
                ad = aj.getValueForKey("unit:pm", ad);
                Z = aj.getValueForKey("unit:day", Z);
                Y = aj.getValueForKey("unit:days", Y);
                S = aj.getValueForKey("unit:hours", S);
                Q = aj.getValueForKey("unit:minutes", Q);
                O = aj.getValueForKey("unit:seconds", O);
                var ai = aj.getValueForKey("list:day_names", "").split(",");
                var ag = aj.getValueForKey("list:day_long_names", "").split(",");
                var af = aj.getValueForKey("list:month_names", "").split(",");
                var ah = aj.getValueForKey("list:month_long_names", "").split(",");
                ae(ac, ai, ac.length);
                ae(T, ag, T.length);
                ae(ab, af, ab.length);
                ae(W, ah, W.length)
            }
        }
        ;
        this.getTimestamp = function() {
            return new Date().getTime()
        }
        ;
        this.getNow = function() {
            var af = new Date();
            if (k.DUMMY_DATE != null) {
                af = new Date(k.DUMMY_DATE.getFullYear(),k.DUMMY_DATE.getMonth(),k.DUMMY_DATE.getDate(),af.getHours(),af.getMinutes(),af.getSeconds())
            }
            if (k.TIME_OFFSET != null && k.TIME_OFFSET != 0) {
                if (k.TIME_ZONE_OFFSET != null && k.TIME_ZONE_OFFSET != 0) {
                    return new Date(af.getTime() + k.TIME_OFFSET + k.TIME_ZONE_OFFSET)
                } else {
                    return new Date(af.getTime() + k.TIME_OFFSET)
                }
            } else {
                if (k.TIME_ZONE_OFFSET != null && k.TIME_ZONE_OFFSET != 0) {
                    return new Date(af.getTime() + k.TIME_ZONE_OFFSET)
                }
            }
            return af
        }
        ;
        this.getFormatSeparator = function() {
            return M
        }
        ;
        this.getFormattedDateStr = function(aw, au, af, aq, at) {
            var ai = 0;
            var aj = 0;
            var ar = 0;
            var ak = 0;
            var am = 0;
            if (aw == null) {
                aw = new Date(af,aq,at)
            }
            if (typeof aw == "number") {
                aw = new Date(aw)
            }
            ai = aw.getDate();
            aj = aw.getDay();
            ar = aw.getMonth() + 1;
            ak = aw.getMonth();
            am = aw.getYear() + 1900;
            var ax = au.replace("ddd", ai + aa(ai)).replace("dd", (ai < 10 ? "0" : "") + ai).replace("mm", ((ar < 10) ? "0" : "") + ar).replace("yyyy", am).replace("d", ai).replace("m", ar).replace("yy", ("" + am).substring(2, 4));
            var ah = ax.indexOf("D");
            var ap = ax.indexOf("DD");
            var ao = ax.indexOf("M");
            var ag = ax.indexOf("MM");
            if (ap >= 0 && ao < 0) {
                return ax.replace("DD", T[aj])
            } else {
                if (ah >= 0 && ao < 0) {
                    return ax.replace("D", ac[aj])
                } else {
                    if (ag >= 0 && ah < 0) {
                        return ax.replace("MM", W[ak])
                    } else {
                        if (ao >= 0 && ah < 0) {
                            return ax.replace("M", ab[ak])
                        } else {
                            if (ah >= 0 && ao >= 0) {
                                var al = null;
                                var av = null;
                                var an = null;
                                if (ap >= 0) {
                                    al = ax.substring(0, ap);
                                    av = T[aj];
                                    an = ax.substring(ap + 2, ax.length)
                                } else {
                                    if (ah >= 0) {
                                        al = ax.substring(0, ah);
                                        av = ac[aj];
                                        an = ax.substring(ah + 1, ax.length)
                                    }
                                }
                                if (ah > ao) {
                                    if (al.indexOf("MM") >= 0) {
                                        al = al.replace("MM", W[ak])
                                    } else {
                                        if (al.indexOf("M") >= 0) {
                                            al = al.replace("M", ab[ak])
                                        }
                                    }
                                } else {
                                    if (an.indexOf("MM") >= 0) {
                                        an = an.replace("MM", W[ak])
                                    } else {
                                        if (an.indexOf("M") >= 0) {
                                            an = an.replace("M", ab[ak])
                                        }
                                    }
                                }
                                return al + av + an
                            }
                        }
                    }
                }
            }
            return ax
        }
        ;
        this.getDayStr = function(ah, ag, af, ai) {
            return this.getFormattedDateStr(ah, V, ag, af, ai)
        }
        ;
        this.getDayLongStr = function(ah, ag, af, ai) {
            return this.getFormattedDateStr(ah, L, ag, af, ai)
        }
        ;
        this.getDayFullStr = function(ah, ag, af, ai) {
            return this.getFormattedDateStr(ah, R, ag, af, ai)
        }
        ;
        this.getDateStr = function(ah, ag, af, ai) {
            return this.getFormattedDateStr(ah, K, ag, af, ai)
        }
        ;
        this.getDateLongStr = function(ah, ag, af, ai) {
            return this.getFormattedDateStr(ah, N, ag, af, ai)
        }
        ;
        this.getFormattedTimeStr = function(ah, an, ao, ai, aj) {
            var am = 0;
            var ak = 0;
            var af = 0;
            if (ah == null) {
                am = ao != null ? ao * 1 : 0;
                ak = ai != null ? ai * 1 : 0;
                af = aj != null ? aj * 1 : 0
            } else {
                if (typeof ah == "number") {
                    ah = new Date(ah)
                }
                am = ah.getHours();
                ak = ah.getMinutes();
                af = ah.getSeconds()
            }
            var al = null;
            var ag = an.indexOf("/ampm");
            if (ag > 0) {
                an = an.substr(0, ag);
                al = X;
                if (am > 12) {
                    al = ad;
                    am -= 12
                }
            }
            return an.replace("hh", (am < 10 ? "0" : "") + am).replace("mm", (ak < 10 ? "0" : "") + ak).replace("ss", (af < 10 ? "0" : "") + af).replace("h", am).replace("m", ak).replace("s", af) + (al != null ? al : "")
        }
        ;
        this.getTimeStr = function(ah, ai, af, ag) {
            return this.getFormattedTimeStr(ah, P, ai, af, ag)
        }
        ;
        this.getTimeLongStr = function(ah, ai, af, ag) {
            return this.getFormattedTimeStr(ah, U, ai, af, ag)
        }
        ;
        this.getRecordingStr = function(af) {
            if (typeof af == "number") {
                af = new Date(af)
            }
            return this.getDayLongStr(af) + M + this.getTimeStr(af)
        }
        ;
        this.getFormattedDurationStr = function(ag, aj) {
            var af = Math.floor(ag / 3600000);
            var ai = Math.floor((ag % 3600000) / 60000);
            var ah = Math.floor((ag % 60000) / 1000);
            aj = a.exprEscape(aj, "[", "]", function(ak) {
                return ak
            }, function(ak) {
                if (ak.indexOf("h") == 0 || ak.indexOf("H") == 0) {
                    return af > 0 ? ak : ""
                } else {
                    if (ak.indexOf("m") == 0 || ak.indexOf("M") == 0) {
                        return af > 0 || ai > 0 ? ak : ""
                    } else {
                        if (ak.indexOf("s") == 0 || ak.indexOf("S") == 0) {
                            return af > 0 || ai > 0 || ah > 0 ? ak : ""
                        }
                    }
                }
            });
            return aj.replace("H", "h").replace("M", (af > 0 ? "mm" : "m")).replace("S", (af > 0 || ai > 0 ? "ss" : "s")).replace("hh", (af < 10 ? "0" : "") + af).replace("mm", ((ai < 10) ? "0" : "") + ai).replace("ss", ((ah < 10) ? "0" : "") + ah).replace("h", af).replace("m", ai).replace("s", ah)
        }
        ;
        this.getDurationStr = function(ak, aw) {
            if (aw == null) {
                aw = "dhms"
            }
            var av = aw.indexOf("D") != -1;
            var an = aw.indexOf("H") != -1;
            var ar = aw.indexOf("M") != -1;
            var au = aw.indexOf("S") != -1;
            aw = aw.toLowerCase();
            var aq = aw.indexOf("d") != -1;
            var ai = aw.indexOf("h") != -1;
            var af = aw.indexOf("m") != -1;
            var ah = aw.indexOf("s") != -1;
            if (aw.indexOf("~") == 0) {
                if (ak < 60000) {
                    if (ah) {
                        aw = "s"
                    }
                } else {
                    if (ak < 3600000) {
                        if (af) {
                            aw = "m"
                        } else {
                            if (ah) {
                                aw = "s"
                            }
                        }
                    } else {
                        if (ak < 86400000) {
                            if (ai) {
                                aw = "h"
                            } else {
                                if (af) {
                                    aw = "m"
                                } else {
                                    if (ah) {
                                        aw = "s"
                                    }
                                }
                            }
                        } else {
                            if (aq) {
                                aw = "d"
                            } else {
                                if (ai) {
                                    aw = "h"
                                } else {
                                    if (af) {
                                        aw = "m"
                                    } else {
                                        if (ah) {
                                            aw = "s"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (aw == "d") {
                var ao = Math.round(ak / 86400000);
                return ao == 1 ? ao + Z : ao + Y
            }
            if (aw == "h") {
                return Math.round(ak / 3600000) + S
            }
            if (aw == "m") {
                return Math.round(ak / 60000) + Q
            }
            if (aw == "s") {
                return Math.round(ak / 1000) + O
            }
            var aj = ak;
            var at = ai || af || ah;
            var ao = aq ? (at ? Math.floor(aj / 86400000) : Math.ceil(aj / 86400000)) : 0;
            if (aq) {
                aj = ak % 86400000
            }
            at = af || ah;
            var ap = ai ? (at ? Math.floor(aj / 3600000) : Math.ceil(aj / 3600000)) : 0;
            if (ai) {
                aj = ak % 3600000
            }
            at = ah;
            var al = af ? (at ? Math.floor(aj / 60000) : Math.ceil(aj / 60000)) : 0;
            if (af) {
                aj = ak % 60000
            }
            var ag = ah ? Math.floor(aj / 1000) : 0;
            var am = "";
            if (aq && (ao > 0 || av)) {
                am += ao + (ao == 1 ? Z : Y)
            }
            if (ai && (ap > 0 || an)) {
                if (am.length > 0) {
                    am += " "
                }
                am += ap + S
            }
            if (af && (al > 0 || ar)) {
                if (am.length > 0) {
                    am += " "
                }
                am += al + Q
            }
            if (ah && (ag > 0 || au)) {
                if (am.length > 0) {
                    am += " "
                }
                am += ag + O
            }
            if (ah && am.length == 0) {
                return ag + O
            }
            if (af && am.length == 0) {
                return al + Q
            }
            if (ai && am.length == 0) {
                return ap + S
            }
            return am
        }
        ;
        this.getVideoStr = function(ah, ai) {
            if (ai == null) {
                ai = 3
            }
            var ag = ai > 2 ? Math.floor(ah / 3600000) : 0;
            var aj = ai > 1 ? Math.floor((ah % 3600000) / 60000) : 0;
            var af = ai > 0 ? Math.floor(ah % 60000 / 1000) : 0;
            if (ai > 2) {
                return (ag < 10 ? "0" : "") + ag + ":" + (aj < 10 ? "0" : "") + aj + ":" + (af < 10 ? "0" : "") + af
            } else {
                if (ai > 1) {
                    return (aj < 10 ? "0" : "") + aj + ":" + (af < 10 ? "0" : "") + af
                } else {
                    if (ai > 0) {
                        return (af < 10 ? "0" : "") + af
                    }
                }
            }
            return ""
        }
    }
    ;
    var H = new function() {
        this.toTimeStr = function(K) {
            return g.getTimeStr(K)
        }
        ;
        this.toTimeLongStr = function(K) {
            return g.getTimeLongStr(K)
        }
        ;
        this.toTimeDayStr = function(K) {
            return g.getFormattedDateStr(K, "D") + g.getFormatSeparator() + g.getTimeStr(K)
        }
        ;
        this.toTimeDayLongStr = function(K) {
            return g.getFormattedDateStr(K, "D") + g.getFormatSeparator() + g.getTimeLongStr(K)
        }
        ;
        this.toDayStr = function(K) {
            return g.getDayStr(K)
        }
        ;
        this.toDayLongStr = function(K) {
            return g.getDayLongStr(K)
        }
        ;
        this.toDayFullStr = function(K) {
            return g.getDayFullStr(K)
        }
        ;
        this.toDateStr = function(K) {
            return g.getDateStr(K)
        }
        ;
        this.toDateLongStr = function(K) {
            return g.getDateLongStr(K)
        }
        ;
        this.toRecordingStr = function(K) {
            return g.getRecordingStr(K)
        }
        ;
        this.toDayTimeStr = function(K) {
            return g.getDayStr(K) + g.getFormatSeparator() + g.getTimeStr(K)
        }
        ;
        this.toDayTimeLongStr = function(K) {
            return g.getDayLongStr(K) + g.getFormatSeparator() + g.getTimeStr(K)
        }
        ;
        this.toDayTimeFullStr = function(K) {
            return g.getDayFullStr(K) + g.getFormatSeparator() + g.getTimeStr(K)
        }
        ;
        this.toDateTimeStr = function(K) {
            return g.getDateStr(K) + g.getFormatSeparator() + g.getTimeStr(K)
        }
        ;
        this.toDateTimeLongStr = function(K) {
            return g.getDateLongStr(K) + g.getFormatSeparator() + g.getTimeStr(K)
        }
    }
    ;
    var F = new function() {
        this.foreach = function(P, L) {
            if (P != null && P.properties != null && typeof L == "function") {
                var N = P.properties;
                if (Array.isArray(N)) {
                    for (var O = 0; O < N.length; O++) {
                        var M = N[O];
                        if (M != null && M.key != null && M.value != null) {
                            if (L(M.key, M.value) === true) {
                                break
                            }
                        }
                    }
                } else {
                    for (var K in N) {
                        var M = N[K];
                        if (M != null) {
                            if (L(K, M) === true) {
                                break
                            }
                        }
                    }
                }
            }
        }
        ;
        this.getValue = function(P, L, K) {
            if (P != null && P.properties != null && a.isFullStr(L)) {
                var N = P.properties;
                if (Array.isArray(N)) {
                    for (var O = 0; O < N.length; O++) {
                        var M = N[O];
                        if (M != null && M.key == L && M.value != null) {
                            return M.value
                        }
                    }
                } else {
                    if (N[L] != null) {
                        return N[L]
                    }
                }
            }
            return K != null ? K : null
        }
        ;
        this.get = function(M, L, K) {
            return a.strValue(this.getValue(M, L, K))
        }
        ;
        this.getFullStr = function(M, L, K) {
            return a.strFullCheck(this.getValue(M, L), K)
        }
        ;
        this.getNum = function(M, L, K) {
            return a.strToNum(this.getValue(M, L), K)
        }
        ;
        this.getBool = function(M, L, K) {
            return a.strToBool(this.getValue(M, L), K)
        }
        ;
        this.has = function(M, L, K) {
            return a.isValid(this.getValue(M, L), K)
        }
        ;
        this.put = function(Q, M, L) {
            if (Q != null && Q.properties != null && a.isFullStr(M) && L != null) {
                var O = Q.properties;
                if (Array.isArray(O)) {
                    var K = false;
                    for (var P = 0; P < O.length; P++) {
                        var N = O[P];
                        if (N != null && N.key == M) {
                            K = true;
                            N.value = L;
                            break
                        }
                    }
                    if (!K) {
                        O.push({
                            key: M,
                            value: L
                        })
                    }
                } else {
                    O[M] = L
                }
            }
        }
        ;
        this.remove = function(O, K) {
            if (O != null && O.properties != null && a.isFullStr(K)) {
                var M = O.properties;
                if (Array.isArray(M)) {
                    for (var N = 0; N < M.length; N++) {
                        var L = M[N];
                        if (L != null && L.key == K) {
                            L.value = null;
                            break
                        }
                    }
                } else {
                    M[K] = null
                }
            }
        }
        ;
        this.clear = function(K) {
            if (K != null && K.properties != null) {
                K.properties = {}
            }
        }
        ;
        this.count = function(L) {
            var K = 0;
            this.foreach(L, function() {
                K++
            });
            return K
        }
        ;
        this.extend = function(M, K) {
            if (M != null && K != null) {
                if (M.properties != null && K.properties != null) {
                    var L = this;
                    this.foreach(K, function(O, N) {
                        L.put(M, O, N)
                    })
                } else {
                    if (K.properties != null) {
                        M.properties = K.properties
                    }
                }
            }
        }
    }
    ;
    var z = {
        STOPPED: 1,
        PLAYING: 2,
        PAUSED: 3
    };
    var f = {
        LEFT: 1,
        RIGHT: 2,
        UP: 3,
        DOWN: 4,
        EXECUTE: 5,
        EXIT: 6,
        BACK: 7,
        MENU: 10,
        GUIDE: 11,
        OPTIONS: 12,
        INFO: 13,
        CLEAR: 14,
        CHANNEL_LIST: 15,
        SETTINGS: 16,
        SEARCH: 17,
        PLAY: 30,
        PAUSE: 31,
        STOP: 32,
        NEXT_TRACK: 33,
        PREVIOUS_TRACK: 34,
        TOGGLE_PLAY_PAUSE: 35,
        FORWARD: 36,
        REWIND: 37,
        RECORD: 38,
        RESTART: 39,
        MUTE: 40,
        UNMUTE: 41,
        TOGGLE_MUTE: 42,
        CHANNEL_UP: 70,
        CHANNEL_DOWN: 71,
        VOLUME_UP: 72,
        VOLUME_DOWN: 73,
        RED: 74,
        GREEN: 75,
        YELLOW: 76,
        BLUE: 77,
        KEY_0: 80,
        KEY_1: 81,
        KEY_2: 82,
        KEY_3: 83,
        KEY_4: 84,
        KEY_5: 85,
        KEY_6: 86,
        KEY_7: 87,
        KEY_8: 88,
        KEY_9: 89,
        POWER: 99,
        SYSTEM: 100,
        CURSOR_ON: 200,
        CURSOR_OFF: 201,
        SCROLL_UP: 300,
        SCROLL_DOWN: 301,
        SWIPE_LEFT: 400,
        SWIPE_RIGHT: 401,
        SWIPE_UP: 402,
        SWIPE_DOWN: 403,
        SLEEP: 500,
        WAKE_UP: 501,
        CONNECTION_UP: 600,
        CONNECTION_DOWN: 601,
        DEBUG: 999,
        UNKNOWN: -1,
        actionToStr: function(K) {
            switch (K) {
            case this.LEFT:
                return "Left";
            case this.RIGHT:
                return "Right";
            case this.UP:
                return "Up";
            case this.DOWN:
                return "Down";
            case this.EXECUTE:
                return "Execute";
            case this.EXIT:
                return "Exit";
            case this.BACK:
                return "Back";
            case this.MENU:
                return "Menu";
            case this.GUIDE:
                return "Guide";
            case this.OPTIONS:
                return "Options";
            case this.INFO:
                return "Info";
            case this.CLEAR:
                return "Clear";
            case this.CHANNEL_LIST:
                return "Channel-List";
            case this.SETTINGS:
                return "Settings";
            case this.SEARCH:
                return "Search";
            case this.PLAY:
                return "Play";
            case this.PAUSE:
                return "Pause";
            case this.STOP:
                return "Stop";
            case this.NEXT_TRACK:
                return "Next-Track";
            case this.PREVIOUS_TRACK:
                return "Previous-Track";
            case this.FORWARD:
                return "Forward";
            case this.REWIND:
                return "Rewind";
            case this.RECORD:
                return "Record";
            case this.RESTART:
                return "Restart";
            case this.TOGGLE_PLAY_PAUSE:
                return "Toggle-Play-Pause";
            case this.MUTE:
                return "Mute";
            case this.UNMUTE:
                return "Unmute";
            case this.TOGGLE_MUTE:
                return "Toggle-Mute";
            case this.CHANNEL_UP:
                return "Channel-Up";
            case this.CHANNEL_DOWN:
                return "Channel-Down";
            case this.VOLUME_UP:
                return "Volume-Up";
            case this.VOLUME_DOWN:
                return "Volume-Down";
            case this.RED:
                return "Red";
            case this.GREEN:
                return "Green";
            case this.YELLOW:
                return "Yellow";
            case this.BLUE:
                return "Blue";
            case this.KEY_0:
                return "Key-0";
            case this.KEY_1:
                return "Key-1";
            case this.KEY_2:
                return "Key-2";
            case this.KEY_3:
                return "Key-3";
            case this.KEY_4:
                return "Key-4";
            case this.KEY_5:
                return "Key-5";
            case this.KEY_6:
                return "Key-6";
            case this.KEY_7:
                return "Key-7";
            case this.KEY_8:
                return "Key-8";
            case this.KEY_9:
                return "Key-9";
            case this.POWER:
                return "Power";
            case this.SYSTEM:
                return "System";
            case this.CURSOR_ON:
                return "Cursor-On";
            case this.CURSOR_OFF:
                return "Cursor-Off";
            case this.SCROLL_UP:
                return "Scroll-Up";
            case this.SCROLL_DOWN:
                return "Scroll-Down";
            case this.SWIPE_LEFT:
                return "Swipe-Left";
            case this.SWIPE_RIGHT:
                return "Swipe-Right";
            case this.SWIPE_UP:
                return "Swipe-Up";
            case this.SWIPE_DOWN:
                return "Swipe-Down";
            case this.SLEEP:
                return "Sleep";
            case this.WAKE_UP:
                return "Wake-Up";
            case this.CONNECTION_UP:
                return "Connection-Up";
            case this.CONNECTION_DOWN:
                return "Connection-Down";
            case this.DEBUG:
                return "Debug"
            }
            return "Unknown"
        },
        strToAction: function(L) {
            var K = this[a.strToAction(L)];
            return K != null ? K : this.UNKNOWN
        },
        isNavigationAction: function(K) {
            return K == this.LEFT || K == this.RIGHT || K == this.UP || K == this.DOWN || K == this.SCROLL_UP || K == this.SCROLL_DOWN || K == this.SWIPE_LEFT || K == this.SWIPE_RIGHT || K == this.SWIPE_UP || K == this.SWIPE_DOWN
        },
        isBaseAction: function(K) {
            return K == this.EXECUTE || K == this.BACK || this.isNavigationAction(K)
        },
        isVideoAction: function(K) {
            return K == this.PLAY || K == this.PAUSE || K == this.STOP || K == this.TOGGLE_PLAY_PAUSE || K == this.FORWARD || K == this.REWIND || K == this.RESTART
        },
        isChannelAction: function(K) {
            return K == this.CHANNEL_UP || K == this.CHANNEL_DOWN
        },
        isVolumeAction: function(K) {
            return K == this.VOLUME_UP || K == this.VOLUME_DOWN || K == this.MUTE || K == this.UNMUTE || K == this.TOGGLE_MUTE
        },
        isNumberAction: function(K) {
            return K == this.KEY_0 || K == this.KEY_1 || K == this.KEY_2 || K == this.KEY_3 || K == this.KEY_4 || K == this.KEY_5 || K == this.KEY_6 || K == this.KEY_7 || K == this.KEY_8 || K == this.KEY_9
        },
        isColorAction: function(K) {
            return K == this.RED || K == this.GREEN || K == this.YELLOW || K == this.BLUE
        },
        isSystemAction: function(K) {
            return K == this.SYSTEM || K == this.CURSOR_ON || K == this.CURSOR_OFF || K == this.SLEEP || K == this.WAKE_UP || K == this.CONNECTION_UP || K == this.CONNECTION_DOWN
        }
    };
    function J() {
        var K = "Thu, 01 Jan 1970 00:00:01 GMT";
        this.set = function(M, P, O) {
            if (a.isFullStr(M) && P != null) {
                var N = encodeURIComponent(P);
                if (O != null) {
                    var L = O;
                    if (typeof O == "number") {
                        L = new Date();
                        L.setTime(L.getTime() + O)
                    }
                    if (typeof L.toGMTString == "function") {
                        L = L.toGMTString()
                    }
                    N += ";expires=" + L + ";"
                }
                m.cookie = encodeURIComponent(M) + "=" + N
            }
        }
        ;
        this.get = function(L, Q) {
            if (a.isFullStr(L)) {
                var N = m.cookie.split(";");
                for (var P = 0; P < N.length; P++) {
                    var M = N[P];
                    var O = M.indexOf("=");
                    if (O > 0) {
                        if (L == decodeURIComponent(a.strTrim(M.substr(0, O)))) {
                            return decodeURIComponent(M.substr(O + 1))
                        }
                    }
                }
            }
            return Q != null ? Q : null
        }
        ;
        this.getFullStr = function(L, M) {
            return a.strFullCheck(this.get(L), M)
        }
        ;
        this.getNum = function(L, M) {
            return a.strToNum(this.get(L), M)
        }
        ;
        this.getBool = function(L, M) {
            return a.strToBool(this.get(L), M)
        }
        ;
        this.has = function(L, M) {
            return a.isValid(this.get(L), M)
        }
        ;
        this.foreach = function(R) {
            if (typeof R == "function") {
                var N = m.cookie.split(";");
                for (var P = 0; P < N.length; P++) {
                    var M = N[P];
                    var L = M.indexOf("=");
                    if (L > 0) {
                        var Q = decodeURIComponent(a.strTrim(M.substr(0, L)));
                        var O = decodeURIComponent(M.substr(L + 1));
                        if (R(Q, O) === true) {
                            break
                        }
                    }
                }
            }
        }
        ;
        this.remove = function(L) {
            if (a.isFullStr(L)) {
                this.set(L, "", K)
            }
        }
        ;
        this.clear = function() {
            var L = this;
            this.foreach(function(M) {
                L.set(M, "", K)
            })
        }
    }
    function d() {
        var Z = "exp:";
        var Y = false;
        var K = 0;
        var ae = null;
        var U = null;
        var R = null;
        var ag = new J();
        var ah = new o(50);
        var ak = null;
        var ab = function() {
            if (ak != null) {
                var am = ak;
                ak = null;
                if (am.length > 0) {
                    for (var al = 0; al < am.length; al++) {
                        am[al]()
                    }
                }
            }
        };
        var N = function(al) {
            if (ak == null) {
                ak = []
            }
            ak.push(al)
        };
        var M = function() {
            if (!Y) {
                Y = true;
                ab()
            }
        };
        var P = function(al, am) {
            if (am != null) {
                am *= 1;
                return am >= 0 && am < al
            }
            return false
        };
        var X = function() {
            if (K == 4 && U != null) {
                R = {};
                for (var am = 0; am < U.length; am++) {
                    var al = U.key(am);
                    if (al != null) {
                        R[al] = U.getItem(al)
                    }
                }
            }
        };
        var aj = function(am) {
            if (K == 2) {
                ae = am != null ? am : {}
            } else {
                if (K == 4 && U != null) {
                    R = am != null ? am : {};
                    U.clear();
                    if (am != null) {
                        for (var al in am) {
                            if (al != null) {
                                U.setItem(al, am[al])
                            }
                        }
                    }
                }
            }
        };
        var W = function() {
            if (K == 2) {
                return ae
            } else {
                if (K == 4) {
                    return R
                }
            }
            return null
        };
        var V = function() {
            if ((K == 2 || K == 4) && e.TVXStorageService != null && typeof TVXStorageService.pull == "function") {
                ah.stop();
                TVXStorageService.pull(function(am, al) {
                    if (K == 2 || K == 4) {
                        if (al != null) {
                            A.logger.error("Pull storage data failed: " + al)
                        }
                        aj(am);
                        M()
                    }
                });
                return true
            }
            return false
        };
        var L = function() {
            if (Y && (K == 2 || K == 4) && e.TVXStorageService != null && typeof TVXStorageService.push == "function") {
                ah.start(function() {
                    TVXStorageService.push(W(), function(al) {
                        if (al != null) {
                            A.logger.error("Push storage data failed: " + al)
                        }
                    })
                });
                return true
            }
            return false
        };
        var T = function() {
            if (Y && (K == 2 || K == 4) && e.TVXStorageService != null && typeof TVXStorageService.clear == "function") {
                ah.stop();
                TVXStorageService.clear(function(al) {
                    if (al != null) {
                        A.logger.error("Clear storage data failed: " + al)
                    }
                });
                return true
            }
            return false
        };
        var ad = function() {
            try {
                U = e.localStorage
            } catch (al) {
                A.logger.warn("Access to local storage failed: " + al);
                return false
            }
            return true
        };
        var O = function() {
            K = 1;
            ae = {};
            U = null;
            R = null;
            M()
        };
        var ac = function() {
            K = 2;
            ae = {};
            U = null;
            R = null;
            return V()
        };
        var aa = function() {
            K = 3;
            ae = null;
            R = null;
            var al = ad();
            if (al) {
                M()
            }
            return al
        };
        var S = function() {
            K = 4;
            ae = null;
            U = null;
            R = null;
            if (e.TVXStorageService != null) {
                var al = ad();
                if (al && U != null) {
                    if (U.length > 0) {
                        X();
                        M();
                        return true
                    } else {
                        return V()
                    }
                }
            }
            return false
        };
        var ai = function() {
            K = 5;
            ae = null;
            U = null;
            R = null;
            M()
        };
        var Q = function() {
            var an = [];
            var ao = g.getTimestamp();
            if (ae != null) {
                for (var al in ae) {
                    if (al != null && al.indexOf(Z) == 0) {
                        if (P(ao, ae[al])) {
                            an.push(al.substr(Z.length))
                        }
                    }
                }
                for (var am = 0; am < an.length; am++) {
                    delete ae[an[am]];
                    delete ae[Z + an[am]]
                }
            } else {
                if (U != null) {
                    for (var am = 0; am < U.length; am++) {
                        var al = U.key(am);
                        if (al != null && al.indexOf(Z) == 0) {
                            if (P(ao, U.getItem(al))) {
                                an.push(al.substr(Z.length))
                            }
                        }
                    }
                    for (var am = 0; am < an.length; am++) {
                        U.removeItem(an[am]);
                        U.removeItem(Z + an[am]);
                        if (R != null) {
                            delete R[an[am]];
                            delete R[Z + an[am]]
                        }
                    }
                }
            }
        };
        var af = function() {
            if (!S()) {
                if (!ac()) {
                    if (!aa()) {
                        O()
                    }
                }
            }
        };
        this.set = function(al, ao, an) {
            if (a.isFullStr(al) && ao != null) {
                var am = -1;
                if (an != null) {
                    if (typeof an == "number") {
                        am = new Date().getTime() + an
                    } else {
                        if (typeof an == "string") {
                            am = new Date(an).getTime()
                        } else {
                            if (typeof an.getTime == "function") {
                                am = an.getTime()
                            }
                        }
                    }
                }
                if (ae != null) {
                    ae[al] = ao;
                    if (am >= 0) {
                        ae[Z + al] = am
                    } else {
                        delete ae[Z + al]
                    }
                    L()
                } else {
                    if (U != null) {
                        U.setItem(al, ao);
                        if (R != null) {
                            R[al] = ao
                        }
                        if (am >= 0) {
                            U.setItem(Z + al, am);
                            if (R != null) {
                                R[Z + al] = am
                            }
                        } else {
                            U.removeItem(Z + al);
                            if (R != null) {
                                delete R[Z + al]
                            }
                        }
                        L()
                    } else {
                        ag.set(al, ao, an)
                    }
                }
            }
        }
        ;
        this.get = function(al, ao) {
            if (a.isFullStr(al)) {
                if (ae != null) {
                    var an = false;
                    var am = ae[Z + al];
                    if (am != null) {
                        if (P(g.getTimestamp(), am)) {
                            an = true;
                            delete ae[al];
                            delete ae[Z + al]
                        }
                    }
                    if (!an) {
                        var ap = ae[al];
                        if (ap != null) {
                            return ap
                        }
                    }
                } else {
                    if (U != null) {
                        var an = false;
                        var am = U.getItem(Z + al);
                        if (am != null) {
                            if (P(g.getTimestamp(), am)) {
                                an = true;
                                U.removeItem(al);
                                U.removeItem(Z + al);
                                if (R != null) {
                                    delete R[al];
                                    delete R[Z + al]
                                }
                            }
                        }
                        if (!an) {
                            var ap = U.getItem(al);
                            if (ap != null) {
                                return ap
                            }
                        }
                    } else {
                        return ag.get(al, ao)
                    }
                }
            }
            return ao != null ? ao : null
        }
        ;
        this.getFullStr = function(al, am) {
            return a.strFullCheck(this.get(al), am)
        }
        ;
        this.getNum = function(al, am) {
            return a.strToNum(this.get(al), am)
        }
        ;
        this.getBool = function(al, am) {
            return a.strToBool(this.get(al), am)
        }
        ;
        this.has = function(al, am) {
            return a.isValid(this.get(al), am)
        }
        ;
        this.foreach = function(an) {
            if (typeof an == "function") {
                if (ae != null) {
                    Q();
                    for (var al in ae) {
                        if (al != null && al.indexOf(Z) != 0) {
                            if (an(al, ae[al]) === true) {
                                break
                            }
                        }
                    }
                } else {
                    if (U != null) {
                        Q();
                        for (var am = 0; am < U.length; am++) {
                            var al = U.key(am);
                            if (al != null && al.indexOf(Z) != 0) {
                                if (an(al, U.getItem(al)) === true) {
                                    break
                                }
                            }
                        }
                    } else {
                        ag.foreach(an)
                    }
                }
            }
        }
        ;
        this.remove = function(al) {
            if (a.isFullStr(al)) {
                if (ae != null) {
                    delete ae[al];
                    delete ae[Z + al];
                    L()
                } else {
                    if (U != null) {
                        U.removeItem(al);
                        U.removeItem(Z + al);
                        if (R != null) {
                            delete R[al];
                            delete R[Z + al]
                        }
                        L()
                    } else {
                        ag.remove(al)
                    }
                }
            }
        }
        ;
        this.clear = function() {
            if (ae != null) {
                ae = {};
                T()
            } else {
                if (U != null) {
                    U.clear();
                    if (R != null) {
                        R = {}
                    }
                    T()
                } else {
                    ag.clear()
                }
            }
        }
        ;
        this.flush = function() {
            ah.finish()
        }
        ;
        this.getType = function() {
            if (ae != null) {
                return K == 2 ? "service" : "cache"
            } else {
                if (U != null) {
                    return K == 4 ? "hybrid" : "default"
                }
            }
            return "cookies"
        }
        ;
        this.setType = function(al) {
            Y = false;
            if (al == "cache") {
                O()
            } else {
                if (al == "service") {
                    if (!ac()) {
                        O()
                    }
                } else {
                    if (al == "default") {
                        if (!aa()) {
                            O()
                        }
                    } else {
                        if (al == "hybrid") {
                            if (!S()) {
                                O()
                            }
                        } else {
                            if (al == "cookies") {
                                ai()
                            } else {
                                M()
                            }
                        }
                    }
                }
            }
        }
        ;
        this.isReady = function() {
            return Y
        }
        ;
        this.onReady = function(al) {
            if (typeof al == "function") {
                if (!Y) {
                    N(al)
                } else {
                    al()
                }
            }
        }
        ;
        af()
    }
    function B(L) {
        var K = null;
        this.set = function(M, N) {
            if (a.isFullStr(M) && N != null) {
                if (K == null) {
                    K = {}
                }
                K[M] = N
            }
        }
        ;
        this.get = function(M, N) {
            if (K != null && a.isFullStr(M) && K[M] != null) {
                return K[M]
            }
            return N != null ? N : null
        }
        ;
        this.getFullStr = function(M, N) {
            return a.strFullCheck(this.get(M), N)
        }
        ;
        this.getNum = function(M, N) {
            return a.strToNum(this.get(M), N)
        }
        ;
        this.getBool = function(M, N) {
            return a.strToBool(this.get(M), N)
        }
        ;
        this.has = function(M, N) {
            return a.isValid(this.get(M), N)
        }
        ;
        this.foreach = function(N) {
            if (typeof N == "function") {
                if (K != null) {
                    for (var M in K) {
                        if (N(M, K[M]) === true) {
                            break
                        }
                    }
                }
            }
        }
        ;
        this.remove = function(M) {
            if (K != null && a.isFullStr(M)) {
                delete K[M]
            }
        }
        ;
        this.clear = function() {
            K = {}
        }
        ;
        this.create = function(Q) {
            var P = {};
            if (a.isFullStr(Q)) {
                var T = Q.indexOf("?");
                if (T >= 0) {
                    var O = Q.substr(T + 1).split("&");
                    for (var M = 0; M < O.length; M++) {
                        var R = O[M];
                        if (a.isFullStr(R)) {
                            var N = R.indexOf("=");
                            if (N > 0) {
                                var S = R.substr(0, N);
                                var U = R.substr(N + 1);
                                P[decodeURIComponent(S)] = decodeURIComponent(U)
                            } else {
                                P[decodeURIComponent(R)] = ""
                            }
                        }
                    }
                }
            }
            return P
        }
        ;
        this.build = function(P, O) {
            var Q = 0;
            var M = "";
            if (K != null) {
                for (var N in K) {
                    var R = a.strValue(K[N]);
                    if (Q > 0) {
                        M += (O != null ? O : "&")
                    }
                    if (a.isFullStr(R)) {
                        M += (P === false ? N : encodeURIComponent(N)) + "=" + (P === false ? R : encodeURIComponent(R))
                    } else {
                        M += (P === false ? N : encodeURIComponent(N))
                    }
                    Q++
                }
            }
            return M
        }
        ;
        if (L != null) {
            K = this.create(L)
        } else {
            K = this.create(m.URL)
        }
    }
    function C(K, L) {
        this.getValue = function(M) {
            if (a.isFullStr(M)) {
                if (K != null && K[M] != null) {
                    return K[M]
                }
                if (L != null && L[M] != null) {
                    return L[M]
                }
            }
            return null
        }
        ;
        this.get = function(M) {
            return a.strValue(this.getValue(M))
        }
        ;
        this.getFullStr = function(M) {
            return a.strFullCheck(this.get(M), null)
        }
        ;
        this.getNum = function(M) {
            return a.strToNum(this.getValue(M), 0)
        }
        ;
        this.getBool = function(M) {
            return a.strToBool(this.getValue(M), false)
        }
        ;
        this.has = function(M, N) {
            return a.isValid(this.get(M), N)
        }
    }
    function h() {
        var K = {};
        this.hasObserver = function(L) {
            return a.isFullStr(L) && K[L] != null
        }
        ;
        this.hasObservers = function() {
            var L;
            for (L in K) {
                return true
            }
            return false
        }
        ;
        this.addObserver = function(L, M) {
            if (a.isFullStr(L) && typeof M == "function") {
                K[L] = M
            }
        }
        ;
        this.removeObserver = function(L) {
            if (a.isFullStr(L)) {
                delete K[L]
            }
        }
        ;
        this.onEvent = function(L, M) {
            if (a.isFullStr(L)) {
                if (typeof M == "function") {
                    this.addObserver(L, M)
                } else {
                    this.removeObserver(L)
                }
            }
        }
        ;
        this.notifyObserver = function(L, M) {
            if (a.isFullStr(L) && K[L] != null) {
                K[L](M)
            }
        }
        ;
        this.notifyObservers = function(M) {
            for (var L in K) {
                K[L](M)
            }
        }
        ;
        this.clear = function() {
            K = {}
        }
    }
    function I() {
        var K = {};
        this.hasObserver = function(M, L) {
            return a.isFullStr(M) && a.isFullStr(L) && K[M] != null && K[M][L] != null
        }
        ;
        this.hasObservers = function(M) {
            if (a.isFullStr(M) && K[M] != null) {
                var L;
                for (L in K[M]) {
                    return true
                }
            }
            return false
        }
        ;
        this.addObserver = function(M, L, N) {
            if (a.isFullStr(M) && a.isFullStr(L) && typeof N == "function") {
                if (K[M] == null) {
                    K[M] = {}
                }
                K[M][L] = N
            }
        }
        ;
        this.removeObserver = function(M, L) {
            if (a.isFullStr(M) && a.isFullStr(L) && K[M] != null) {
                delete K[M][L];
                if (!this.hasObservers(M)) {
                    delete K[M]
                }
            }
        }
        ;
        this.onEvent = function(M, L, N) {
            if (a.isFullStr(M) && a.isFullStr(L)) {
                if (typeof N == "function") {
                    this.addObserver(M, L, N)
                } else {
                    this.removeObserver(M, L)
                }
            }
        }
        ;
        this.notifyObserver = function(M, L, N) {
            if (a.isFullStr(M) && a.isFullStr(L) && K[M] != null && K[M][L] != null) {
                K[M][L](N)
            }
        }
        ;
        this.notifyObservers = function(M, N) {
            if (a.isFullStr(M) && K[M] != null) {
                for (var L in K[M]) {
                    K[M][L](N)
                }
            }
        }
        ;
        this.clear = function(L) {
            if (a.isFullStr(L)) {
                if (K[L] != null) {
                    K[L] = {}
                }
            } else {
                K = {}
            }
        }
    }
    function x() {
        var L = null;
        var M = [];
        var K = null;
        var N = false;
        this.delegate = null;
        this.execute = function() {
            if (L != null) {
                clearTimeout(L);
                L = null
            }
            if (K != null) {
                if (typeof K.action == "function") {
                    K.action()
                } else {
                    if (this.delegate != null && typeof this.delegate.executeQueueAction == "function") {
                        this.delegate.executeQueueAction(K.action)
                    }
                }
                K = null;
                this.process()
            }
        }
        ;
        this.process = function() {
            if (K == null && M.length > 0) {
                K = M.shift();
                if (K.action === "stop" && K.delay == null) {
                    N = true;
                    K = null
                } else {
                    if (K.delay != null && K.delay > 0) {
                        var O = this;
                        L = setTimeout(function() {
                            L = null;
                            O.execute()
                        }, K.delay)
                    } else {
                        this.execute()
                    }
                }
            }
        }
        ;
        this.reset = function() {
            M = [];
            K = null;
            N = false;
            if (L != null) {
                clearTimeout(L);
                L = null
            }
        }
        ;
        this.push = function(O, P) {
            if (O != null) {
                if (O === "reset" && P == null) {
                    this.reset()
                } else {
                    if (O === "execute" && P == null) {
                        this.execute()
                    } else {
                        if (O === "clear" && P == null) {
                            M = []
                        } else {
                            if (O === "continue" && P == null) {
                                N = false
                            } else {
                                M.push({
                                    action: O,
                                    delay: P
                                })
                            }
                        }
                    }
                }
                if (!N) {
                    this.process()
                }
            }
        }
        ;
        this.isBusy = function() {
            return L != null
        }
    }
    function c(K, O) {
        var M = null;
        var N = [];
        var L = 0;
        this.size = K != null ? K : 0;
        this.delay = O != null ? O : 0;
        this.work = function() {
            if (M == null && this.delay > 0) {
                var P = this;
                M = setTimeout(function() {
                    M = null;
                    L = 0;
                    P.process()
                }, this.delay)
            }
        }
        ;
        this.process = function() {
            if (M == null && N.length > 0) {
                if (L < this.size || this.size <= 0 || this.delay <= 0) {
                    L++;
                    var P = N.shift();
                    P();
                    this.process()
                } else {
                    this.work()
                }
            }
        }
        ;
        this.reset = function() {
            N = [];
            L = 0;
            if (M != null) {
                clearTimeout(M);
                M = null
            }
        }
        ;
        this.execute = function(P) {
            if (typeof P == "function") {
                N.push(P);
                this.process()
            }
        }
        ;
        this.isBusy = function() {
            return M != null
        }
    }
    function o(N) {
        var M = null;
        var L = null;
        var K = false;
        this.delay = N != null ? N : 0;
        this.start = function(O) {
            var P = this;
            K = false;
            this.stop();
            L = O;
            if (this.delay > 0) {
                M = setTimeout(function() {
                    P.finish()
                }, this.delay)
            } else {
                P.finish()
            }
        }
        ;
        this.restart = function() {
            this.start(L)
        }
        ;
        this.stop = function() {
            if (M != null) {
                clearTimeout(M);
                M = null
            }
        }
        ;
        this.finish = function() {
            this.stop();
            if (!K) {
                K = true;
                if (typeof L == "function") {
                    L()
                }
            }
        }
        ;
        this.isBusy = function() {
            return M != null
        }
    }
    function E() {
        var M = 300;
        var N = 0;
        var K = 0;
        var L = null;
        this.click = function(O) {
            var P = g.getTimestamp();
            if (L === O && N > 0 && P - N <= M) {
                K++
            } else {
                K = 1
            }
            L = O;
            N = P;
            return K
        }
    }
    function j() {
        var K = "application/json";
        var P = "application/xml";
        var M = "text/plain";
        var S = "text/html";
        var R = "application/x-www-form-urlencoded";
        var N = function(V) {
            var U = null;
            try {
                U = new XMLHttpRequest()
            } catch (T) {
                if (V != null && typeof V.error == "function") {
                    V.error("Create XML HTTP request failed: " + T)
                }
            }
            return U
        };
        var Q = function(T) {
            if (T != null && typeof T.destroy == "function") {
                T.destroy()
            }
        };
        var O = function(X, Y, V) {
            var T = X.responseText;
            var W = true;
            if (T != null) {
                if (V == K) {
                    try {
                        if (e.JSON != null && typeof JSON.parse == "function") {
                            if (a.isFullStr(T)) {
                                T = JSON.parse(T)
                            } else {
                                W = false;
                                if (Y != null && typeof Y.error == "function") {
                                    Y.error("Validate JSON failed")
                                }
                            }
                        } else {
                            if (a.isJson(T)) {
                                T = new Function("return " + T)()
                            } else {
                                W = false;
                                if (Y != null && typeof Y.error == "function") {
                                    Y.error("Validate JSON failed")
                                }
                            }
                        }
                    } catch (U) {
                        W = false;
                        if (Y != null && typeof Y.error == "function") {
                            Y.error("Create JSON failed: " + U)
                        }
                    }
                } else {
                    if (V == P) {
                        T = X.responseXML
                    }
                }
            }
            if (W && Y != null && typeof Y.success == "function") {
                Y.success(T)
            }
        };
        var L = function(Z, W, Y, ag, T) {
            if (e.TVXAjaxService != null && typeof TVXAjaxService.executeRequest == "function" && TVXAjaxService.executeRequest(Z, W, Y, ag, T) === true) {
                return
            }
            var ac = N(ag);
            if (ac != null) {
                var ad = K;
                var X = false;
                var ae = false;
                var U = true;
                var af = null;
                if (T != null) {
                    X = T.isForm === true;
                    ae = T.withCredentials === true;
                    U = T.accurateHeaders !== false;
                    af = T.headers;
                    if (T.dataType != null) {
                        if (T.dataType == "json") {
                            ad = K
                        } else {
                            if (T.dataType == "xml") {
                                ad = P
                            } else {
                                if (T.dataType == "text") {
                                    ad = M
                                } else {
                                    if (T.dataType == "html") {
                                        ad = S
                                    } else {
                                        ad = null
                                    }
                                }
                            }
                        }
                    }
                }
                try {
                    if (ae) {
                        ac.withCredentials = true
                    }
                    ac.open(Z, W, true)
                } catch (ab) {
                    Q(ac);
                    ac = null;
                    if (ag != null && typeof ag.error == "function") {
                        ag.error("Open connection failed: " + ab)
                    }
                }
                if (ac != null) {
                    ac.onreadystatechange = function() {
                        if (ac != null) {
                            if (ac.readyState == 4) {
                                if ((ac.status >= 200 && ac.status < 300) || (ac.status == 0 && a.isFullStr(ac.responseText))) {
                                    O(ac, ag, ad)
                                } else {
                                    if (ag != null && typeof ag.error == "function") {
                                        var ah = a.strValue(ac.status);
                                        if (a.isFullStr(ac.statusText)) {
                                            ah += " " + ac.statusText
                                        }
                                        ag.error("Server responded with status: " + ah)
                                    }
                                }
                                Q(ac);
                                ac = null
                            }
                        }
                    }
                    ;
                    if (ad != null) {
                        if (Y != null) {
                            ac.setRequestHeader("Content-Type", !X && U ? ad : R)
                        }
                        if (U) {
                            ac.setRequestHeader("Accept", ad)
                        }
                    }
                    if (af != null) {
                        for (var aa in af) {
                            var V = af[aa];
                            if (V != null) {
                                ac.setRequestHeader(a.strValue(aa), a.strValue(V))
                            }
                        }
                    }
                    try {
                        ac.send(Y)
                    } catch (ab) {
                        Q(ac);
                        ac = null;
                        if (ag != null && typeof ag.error == "function") {
                            ag.error("Send data failed: " + ab)
                        }
                    }
                }
            }
        };
        this.get = function(T, V, U) {
            L("GET", T, null, V, U)
        }
        ;
        this.post = function(U, W, T, V) {
            L("POST", U, W, T, V)
        }
        ;
        this.put = function(U, W, T, V) {
            L("PUT", U, W, T, V)
        }
        ;
        this.del = function(T, V, U) {
            L("DELETE", T, null, V, U)
        }
    }
    var s = {
        OFF: 0,
        ERROR: 1,
        WARN: 2,
        INFO: 3,
        DEBUG: 4
    };
    function v() {
        var Q = [];
        var M = null;
        this.level = s.DEBUG;
        this.maxLines = 30;
        this.maxDebugLength = 116;
        this.maxInfoLength = -1;
        this.maxWarnLength = -1;
        this.maxErrorLength = -1;
        var O = function() {
            var R = new Date();
            var Y = R.getHours();
            var X = R.getMinutes();
            var V = R.getSeconds();
            var U = R.getMilliseconds();
            var T = R.getDate();
            var W = R.getMonth() + 1;
            var S = R.getFullYear();
            return S + "-" + ((W < 10) ? "0" : "") + W + "-" + ((T < 10) ? "0" : "") + T + " " + ((Y < 10) ? "0" : "") + Y + ":" + ((X < 10) ? "0" : "") + X + ":" + ((V < 10) ? "0" : "") + V + "." + ((U < 10) ? "00" : ((U < 100) ? "0" : "")) + U
        };
        var N = function(S, R) {
            var T = "";
            switch (S) {
            case s.DEBUG:
                T = l.LOGGER.CSS.CLASS_DEBUG;
                break;
            case s.INFO:
                T = l.LOGGER.CSS.CLASS_INFO;
                break;
            case s.WARN:
                T = l.LOGGER.CSS.CLASS_WARN;
                break;
            case s.ERROR:
                T = l.LOGGER.CSS.CLASS_ERROR;
                break
            }
            return a.strReplace(l.LOGGER.HTML.LINE.replace("{LEVEL}", T), "{MESSAGE}", a.htmlEscape(R))
        };
        var L = function(S, R) {
            var T = "";
            switch (S) {
            case s.DEBUG:
                T = "DEBUG";
                break;
            case s.INFO:
                T = "INFO";
                break;
            case s.WARN:
                T = "WARNING";
                break;
            case s.ERROR:
                T = "ERROR";
                break
            }
            return O() + " " + T + ": " + R
        };
        var K = function(T, S, U, R) {
            if (U > 0 && S.length > U) {
                S = S.substr(0, U) + "..."
            }
            Q.push(N(T, S));
            if (R > 0) {
                while (Q.length > R) {
                    Q.shift()
                }
            }
        };
        var P = function(S, R) {
            if (e.console != null) {
                switch (S) {
                case s.DEBUG:
                    console.log(R);
                    break;
                case s.INFO:
                    console.info(R);
                    break;
                case s.WARN:
                    console.warn(R);
                    break;
                case s.ERROR:
                    console.error(R);
                    break
                }
            }
        };
        this.registerControl = function(R, S) {
            M = R;
            if (S !== false) {
                this.print()
            }
        }
        ;
        this.unregisterControl = function(R) {
            if (M == R) {
                M = null
            }
        }
        ;
        this.print = function() {
            if (M != null && Q.length > 0) {
                var S = "";
                for (var R = 0; R < Q.length; R++) {
                    S += Q[R] + l.COMMON.HTML.BREAK
                }
                M.html(S)
            }
        }
        ;
        this.clear = function() {
            Q = [];
            this.print()
        }
        ;
        this.log = function(S, R) {
            if (S <= this.level) {
                var T = -1;
                switch (S) {
                case s.DEBUG:
                    T = this.maxDebugLength;
                    break;
                case s.INFO:
                    T = this.maxInfoLength;
                    break;
                case s.WARN:
                    T = this.maxWarnLength;
                    break;
                case s.ERROR:
                    T = this.maxErrorLength;
                    break
                }
                P(S, R);
                K(S, L(S, R), T, this.maxLines);
                this.print()
            }
        }
        ;
        this.debug = function(R) {
            this.log(s.DEBUG, R)
        }
        ;
        this.info = function(R) {
            this.log(s.INFO, R)
        }
        ;
        this.warn = function(R) {
            this.log(s.WARN, R)
        }
        ;
        this.error = function(R) {
            this.log(s.ERROR, R)
        }
    }
    function q() {
        var N = null;
        var Q = null;
        var P = 0;
        var S = null;
        var O = false;
        var M = {};
        var R = function(T, U) {
            M[T] = U;
            if (O) {
                U()
            }
        };
        var K = function(T) {
            delete M[T]
        };
        var L = function() {
            for (var T in M) {
                M[T]()
            }
        };
        this.onReady = function(T, U) {
            if (a.isFullStr(T)) {
                if (typeof U == "function") {
                    R(T, U)
                } else {
                    K(T)
                }
            }
        }
        ;
        this.init = function(T) {
            O = true;
            N = a.strFullCheck(T != null ? T.name : null, null);
            Q = a.strFullCheck(T != null ? T.version : null, null);
            P = 0;
            S = {};
            F.foreach(T, function(V, U) {
                if (a.isFullStr(V) && a.isFullStr(U)) {
                    S[V] = U;
                    P++
                }
            });
            L()
        }
        ;
        this.getName = function() {
            return N
        }
        ;
        this.getVersion = function() {
            return Q
        }
        ;
        this.getSize = function() {
            return P
        }
        ;
        this.isInitialized = function() {
            return O
        }
        ;
        this.getValueForKey = function(U, T) {
            if (S != null && a.isFullStr(U) && S[U] != null) {
                return S[U]
            }
            return T
        }
        ;
        this.getValueForExpr = function(U) {
            if (a.isFullStr(U)) {
                var T = U.indexOf("|");
                if (T > 0) {
                    return this.getValueForKey(U.substr(0, T), U.substr(T + 1))
                } else {
                    return this.getValueForKey(U, "")
                }
            }
            return ""
        }
        ;
        this.getData = function() {
            return {
                name: N,
                version: Q,
                size: P,
                properties: S
            }
        }
    }
    function i() {
        var M = null;
        var N = {};
        var L = null;
        var K = null;
        this.delay = 0;
        this.now = g.getNow();
        this.format = "time";
        this.isRunning = function() {
            return M != null
        }
        ;
        this.hasHook = function(O) {
            return a.isFullStr(O) && N[O] != null
        }
        ;
        this.hasHooks = function() {
            var O;
            for (O in N) {
                return true
            }
            return false
        }
        ;
        this.hasControl = function() {
            return L != null
        }
        ;
        this.clearHooks = function() {
            N = {}
        }
        ;
        this.addHook = function(O, P) {
            if (a.isFullStr(O) && typeof P == "function") {
                N[O] = P
            }
        }
        ;
        this.removeHook = function(O) {
            if (a.isFullStr(O)) {
                delete N[O]
            }
        }
        ;
        this.onTick = function(O, P) {
            if (a.isFullStr(O)) {
                if (typeof P == "function") {
                    this.addHook(O, P)
                } else {
                    this.removeHook(O)
                }
            }
        }
        ;
        this.registerControl = function(O) {
            L = O
        }
        ;
        this.unregisterControl = function(O) {
            if (L == O) {
                L = null
            }
        }
        ;
        this.update = function() {
            if (L != null) {
                var O = null;
                switch (this.format) {
                case "full":
                    O = H.toDayTimeFullStr(this.now);
                    break;
                case "date":
                    O = H.toDayTimeLongStr(this.now);
                    break;
                case "day":
                    O = H.toTimeDayStr(this.now);
                    break;
                case "time":
                    O = H.toTimeStr(this.now);
                    break;
                default:
                    O = "";
                    break
                }
                if (L.clockText != O) {
                    L.clockText = O;
                    L.html(O)
                }
            }
        }
        ;
        this.validate = function() {
            this.now = g.getNow()
        }
        ;
        this.process = function() {
            if (M != null) {
                this.validate();
                this.delay = K != null ? this.now.getTime() - K.getTime() : 0;
                K = this.now;
                this.update();
                for (var O in N) {
                    N[O](this)
                }
            }
        }
        ;
        this.start = function() {
            if (M == null) {
                var O = this;
                K = null;
                M = setInterval(function() {
                    O.process()
                }, 1000)
            }
        }
        ;
        this.stop = function() {
            if (M != null) {
                clearInterval(M);
                M = null;
                K = null
            }
        }
    }
    function u() {
        var K = {};
        this.load = function(M, L, O, N) {
            if (a.isFullStr(M)) {
                if (L != null && K[L] != null && K[L].url == M && K[L].data != null) {
                    if (O != null && typeof O.success == "function") {
                        O.success(K[L].data, true)
                    }
                } else {
                    A.ajax.get(M, {
                        success: function(P) {
                            if (L != null) {
                                K[L] = {
                                    url: M,
                                    data: P
                                }
                            }
                            if (O != null && typeof O.success == "function") {
                                O.success(P, false)
                            }
                        },
                        error: function(P) {
                            if (L != null) {
                                K[L] = {
                                    url: M,
                                    data: null
                                }
                            }
                            if (O != null && typeof O.error == "function") {
                                O.error(P)
                            }
                        }
                    }, N)
                }
            }
        }
        ;
        this.clearCache = function(L) {
            if (L != null) {
                K[L] = null
            }
        }
        ;
        this.clear = function() {
            K = {}
        }
    }
    var A = {};
    A.logger = new v();
    A.cookies = new J();
    A.storage = new d();
    A.urlParams = new B();
    A.ajax = new j();
    A.loader = new u();
    function D() {
        var W = {};
        var P = {};
        var T = {};
        var Q = {};
        var S = function(Y) {
            if (Y != null && Y.response != null) {
                return a.strToNum(Y.response.status, 0)
            }
            return 0
        };
        var X = function(Y) {
            if (Y != null && Y.response != null) {
                return Y.response.data
            }
            return null
        };
        var N = function(Z) {
            var Y = "";
            if (Z != null && Z.response != null) {
                if (a.isNum(Z.response.status)) {
                    Y += "" + Z.response.status
                }
                if (a.isFullStr(Z.response.text)) {
                    if (Y.length > 0) {
                        Y += " "
                    }
                    Y += Z.response.text
                }
                if (a.isFullStr(Z.response.message)) {
                    if (Y.length > 0) {
                        Y += ": "
                    }
                    Y += Z.response.message
                }
            }
            return Y.length > 0 ? Y : "Unknown error"
        };
        var V = function(Y, Z) {
            T[Y] = Z;
            for (var aa in W) {
                if (W[aa] != null) {
                    Z(W[aa])
                }
            }
        };
        var K = function(Y) {
            delete T[Y]
        };
        var M = function(Y) {
            for (var Z in T) {
                T[Z](Y)
            }
        };
        var O = function(Y, Z) {
            if (Y != null && typeof Z == "function") {
                Q[Y] = Z;
                for (var aa in P) {
                    if (P[aa] != null) {
                        Z(P[aa])
                    }
                }
            }
        };
        var U = function(Y) {
            if (Y != null) {
                delete Q[Y]
            }
        };
        var L = function(Y) {
            for (var Z in Q) {
                Q[Z](Y)
            }
        };
        var R = function(Y) {
            return Y != null && Y.indexOf("temp:") != 0
        };
        this.onReady = function(Y, Z) {
            if (a.isFullStr(Y)) {
                if (typeof Z == "function") {
                    V(Y, Z)
                } else {
                    K(Y)
                }
            }
        }
        ;
        this.onError = function(Y, Z) {
            if (a.isFullStr(Y)) {
                if (typeof Z == "function") {
                    O(Y, Z)
                } else {
                    U(Y)
                }
            }
        }
        ;
        this.onCompleted = function(Y, Z) {
            this.onReady(Y, Z);
            this.onError(Y, Z)
        }
        ;
        this.foreachEntry = function(Z) {
            if (typeof Z == "function") {
                for (var Y in W) {
                    if (W[Y] != null) {
                        if (Z(W[Y]) === true) {
                            break
                        }
                    }
                }
            }
        }
        ;
        this.foreachError = function(Z) {
            if (typeof Z == "function") {
                for (var Y in P) {
                    if (P[Y] != null) {
                        if (Z(P[Y]) === true) {
                            break
                        }
                    }
                }
            }
        }
        ;
        this.getData = function(Y) {
            return Y != null && W[Y] != null ? W[Y].data : null
        }
        ;
        this.getEntry = function(Y) {
            return Y != null ? W[Y] : null
        }
        ;
        this.setEntry = function(Z, Y) {
            if (Z != null && Y != null) {
                W[Z] = Y;
                P[Z] = null;
                M(Y)
            }
        }
        ;
        this.getError = function(Y) {
            return Y != null ? P[Y] : null
        }
        ;
        this.setError = function(Y, Z) {
            if (Y != null && Z != null) {
                W[Y] = null;
                P[Y] = Z;
                L(Z)
            }
        }
        ;
        this.shouldStoreData = function(Y) {
            return R(Y)
        }
        ;
        this.createData = function(Y, Z) {
            return Z
        }
        ;
        this.putData = function(Z, ab, Y, aa) {
            if (Z != null && ab != null) {
                A.ajax.put(Z, ab, {
                    success: function(ac) {
                        if (ac.response != null && ac.response.status == 200) {
                            if (Y != null && typeof Y.success == "function") {
                                Y.success(ac.response.data)
                            }
                        } else {
                            if (Y != null && typeof Y.error == "function") {
                                Y.error(N(ac), S(ac), X(ac))
                            }
                        }
                    },
                    error: function(ac) {
                        if (Y != null && typeof Y.error == "function") {
                            Y.error(ac, 0, null)
                        }
                    }
                }, aa)
            }
        }
        ;
        this.postData = function(Z, ab, Y, aa) {
            if (Z != null && ab != null) {
                A.ajax.post(Z, ab, {
                    success: function(ac) {
                        if (ac.response != null && ac.response.status == 200) {
                            if (Y != null && typeof Y.success == "function") {
                                Y.success(ac.response.data)
                            }
                        } else {
                            if (Y != null && typeof Y.error == "function") {
                                Y.error(N(ac), S(ac), X(ac))
                            }
                        }
                    },
                    error: function(ac) {
                        if (Y != null && typeof Y.error == "function") {
                            Y.error(ac, 0, null)
                        }
                    }
                }, aa)
            }
        }
        ;
        this.deleteData = function(Y, aa, Z) {
            if (Y != null) {
                A.ajax.del(Y, {
                    success: function(ab) {
                        if (ab.response != null && ab.response.status == 200) {
                            if (aa != null && typeof aa.success == "function") {
                                aa.success(ab.response.data)
                            }
                        } else {
                            if (aa != null && typeof aa.error == "function") {
                                aa.error(N(ab), S(ab), X(ab))
                            }
                        }
                    },
                    error: function(ab) {
                        if (aa != null && typeof aa.error == "function") {
                            aa.error(ab, 0, null)
                        }
                    }
                }, Z)
            }
        }
        ;
        this.loadData = function(ab, Z, ac, aa) {
            if (ab != null) {
                var Y = this;
                if (R(ab)) {
                    this.clearData(ab)
                }
                if (Z != null) {
                    A.ajax.get(Z, {
                        success: function(ag) {
                            var af = false;
                            if (ag.response != null && ag.response.status == 200 && ag.response.data != null) {
                                af = true;
                                ag = ag.response.data
                            }
                            if (!af && ag.response != null) {
                                var ad = {
                                    id: ab,
                                    error: N(ag),
                                    status: S(ag),
                                    reason: X(ag)
                                };
                                var ae = true;
                                if (ac != null && typeof ac.error == "function") {
                                    ae = ac.error(ad)
                                }
                                if (ae !== false && R(ab)) {
                                    Y.setError(ab, ad)
                                }
                                if (ac != null && typeof ac.completed == "function") {
                                    ac.completed(ad)
                                }
                            } else {
                                var ad = {
                                    id: ab,
                                    data: Y.createData(ab, ag)
                                };
                                var ae = true;
                                if (ac != null && typeof ac.success == "function") {
                                    ae = ac.success(ad)
                                }
                                if (ae !== false && R(ab)) {
                                    Y.setEntry(ab, ad)
                                }
                                if (ac != null && typeof ac.completed == "function") {
                                    ac.completed(ad)
                                }
                            }
                        },
                        error: function(af) {
                            var ad = {
                                id: ab,
                                error: af,
                                status: 0,
                                reason: null
                            };
                            var ae = true;
                            if (ac != null && typeof ac.error == "function") {
                                ae = ac.error(ad)
                            }
                            if (ae !== false && R(ab)) {
                                Y.setError(ab, ad)
                            }
                            if (ac != null && typeof ac.completed == "function") {
                                ac.completed(ad)
                            }
                        }
                    }, aa)
                }
            }
        }
        ;
        this.clearData = function(Y) {
            if (Y != null) {
                W[Y] = null;
                P[Y] = null
            }
        }
        ;
        this.clear = function() {
            W = {};
            P = {}
        }
    }
    function r() {
        var P = {};
        var S = {};
        var Z = {};
        var L = {};
        var K = function(ac) {
            if (ac != null) {
                try {
                    if (e.URL != null && typeof URL.createObjectURL == "function") {
                        return URL.createObjectURL(ac)
                    } else {
                        if (e.webkitURL != null && typeof webkitURL.createObjectURL == "function") {
                            return webkitURL.createObjectURL(ac)
                        }
                    }
                } catch (ab) {
                    A.logger.error("Create blob URL failed: " + ab)
                }
            }
            return null
        };
        var V = function(ab) {
            if (ab != null) {
                try {
                    if (e.URL != null && typeof URL.revokeObjectURL == "function") {
                        URL.revokeObjectURL(ab)
                    } else {
                        if (e.webkitURL != null && typeof webkitURL.revokeObjectURL == "function") {
                            webkitURL.revokeObjectURL(ab)
                        }
                    }
                } catch (ac) {
                    A.logger.error("Dispose blob URL failed: " + ac)
                }
            }
        };
        var aa = function(ad) {
            var ac = null;
            try {
                ac = new XMLHttpRequest()
            } catch (ab) {
                if (ad != null && typeof ad.error == "function") {
                    ad.error("Create XML HTTP request failed: " + ab)
                }
            }
            return ac
        };
        var R = function(ab) {
            if (ab != null && typeof ab.destroy == "function") {
                ab.destroy()
            }
        };
        var U = function(ab, ac) {
            if (ab.response != null) {
                if (ac != null && typeof ac.success == "function") {
                    ac.success(ab.response)
                }
            } else {
                if (ac != null && typeof ac.error == "function") {
                    ac.error("Load blob failed: Response is missing")
                }
            }
        };
        var M = function(af, ad, ae, al, ab) {
            var ai = aa(al);
            if (ai != null) {
                var aj = false;
                var ak = null;
                if (ab != null) {
                    aj = ab.withCredentials === true;
                    ak = ab.headers
                }
                try {
                    if (aj) {
                        ai.withCredentials = true
                    }
                    ai.responseType = "blob";
                    ai.open(af, ad, true)
                } catch (ah) {
                    R(ai);
                    ai = null;
                    if (al != null && typeof al.error == "function") {
                        al.error("Open connection failed: " + ah)
                    }
                }
                if (ai != null) {
                    ai.onreadystatechange = function() {
                        if (ai != null) {
                            if (ai.readyState == 4) {
                                if (ai.status >= 200 && ai.status < 300) {
                                    U(ai, al)
                                } else {
                                    if (al != null && typeof al.error == "function") {
                                        var am = a.strValue(ai.status);
                                        if (a.isFullStr(ai.statusText)) {
                                            am += " " + ai.statusText
                                        }
                                        al.error("Server responded with status: " + am)
                                    }
                                }
                                R(ai);
                                ai = null
                            }
                        }
                    }
                    ;
                    if (ak != null) {
                        for (var ag in ak) {
                            var ac = ak[ag];
                            if (ac != null) {
                                ai.setRequestHeader(a.strValue(ag), a.strValue(ac))
                            }
                        }
                    }
                    try {
                        ai.send(ae)
                    } catch (ah) {
                        R(ai);
                        ai = null;
                        if (al != null && typeof al.error == "function") {
                            al.error("Send data failed: " + ah)
                        }
                    }
                }
            }
        };
        var O = function(ab, ac, ag, ae, ah, ad, af) {
            if (ag != null) {
                ab.clearBlob(ag);
                if (ae != null) {
                    M(ac, ae, ah, {
                        success: function(aj) {
                            var ai = {
                                id: ag,
                                blob: aj,
                                url: K(aj)
                            };
                            if (ad != null && typeof ad.success == "function") {
                                ad.success(ai)
                            }
                            ab.setEntry(ag, ai);
                            if (ad != null && typeof ad.completed == "function") {
                                ad.completed(ai)
                            }
                        },
                        error: function(aj) {
                            var ai = {
                                id: ag,
                                error: aj,
                                status: 0,
                                reason: null
                            };
                            if (ad != null && typeof ad.error == "function") {
                                ad.error(ai)
                            }
                            ab.setError(ag, ai);
                            if (ad != null && typeof ad.completed == "function") {
                                ad.completed(ai)
                            }
                        }
                    }, af)
                }
            }
        };
        var N = function(ab, ac) {
            Z[ab] = ac;
            for (var ad in P) {
                if (P[ad] != null) {
                    ac(P[ad])
                }
            }
        };
        var Q = function(ab) {
            delete Z[ab]
        };
        var T = function(ab) {
            for (var ac in Z) {
                Z[ac](ab)
            }
        };
        var X = function(ab, ac) {
            if (ab != null && typeof ac == "function") {
                L[ab] = ac;
                for (var ad in S) {
                    if (S[ad] != null) {
                        ac(S[ad])
                    }
                }
            }
        };
        var W = function(ab) {
            if (ab != null) {
                delete L[ab]
            }
        };
        var Y = function(ab) {
            for (var ac in L) {
                L[ac](ab)
            }
        };
        this.onReady = function(ab, ac) {
            if (a.isFullStr(ab)) {
                if (typeof ac == "function") {
                    N(ab, ac)
                } else {
                    Q(ab)
                }
            }
        }
        ;
        this.onError = function(ab, ac) {
            if (a.isFullStr(ab)) {
                if (typeof ac == "function") {
                    X(ab, ac)
                } else {
                    W(ab)
                }
            }
        }
        ;
        this.onCompleted = function(ab, ac) {
            this.onReady(ab, ac);
            this.onError(ab, ac)
        }
        ;
        this.foreachEntry = function(ac) {
            if (typeof ac == "function") {
                for (var ab in P) {
                    if (P[ab] != null) {
                        if (ac(P[ab]) === true) {
                            break
                        }
                    }
                }
            }
        }
        ;
        this.foreachError = function(ac) {
            if (typeof ac == "function") {
                for (var ab in S) {
                    if (S[ab] != null) {
                        if (ac(S[ab]) === true) {
                            break
                        }
                    }
                }
            }
        }
        ;
        this.getBlob = function(ab) {
            return ab != null && P[ab] != null ? P[ab].blob : null
        }
        ;
        this.getUrl = function(ab) {
            return ab != null && P[ab] != null ? P[ab].url : null
        }
        ;
        this.getEntry = function(ab) {
            return ab != null ? P[ab] : null
        }
        ;
        this.setEntry = function(ac, ab) {
            if (ac != null && ab != null) {
                V(P[ac] != null ? P[ac].url : null);
                P[ac] = ab;
                S[ac] = null;
                T(ab)
            }
        }
        ;
        this.getError = function(ab) {
            return ab != null ? S[ab] : null
        }
        ;
        this.setError = function(ab, ac) {
            if (ab != null && ac != null) {
                V(P[ab] != null ? P[ab].url : null);
                P[ab] = null;
                S[ab] = ac;
                Y(ac)
            }
        }
        ;
        this.executeBlob = function(ae, ac, af, ab, ad) {
            O(this, "POST", ae, ac, af, ab, ad)
        }
        ;
        this.loadBlob = function(ad, ab, ae, ac) {
            O(this, "GET", ad, ab, null, ae, ac)
        }
        ;
        this.clearBlob = function(ab) {
            if (ab != null) {
                V(P[ab] != null ? P[ab].url : null);
                P[ab] = null;
                S[ab] = null
            }
        }
        ;
        this.clear = function() {
            for (var ab in P) {
                V(P[ab] != null ? P[ab].url : null)
            }
            P = {};
            S = {}
        }
    }
    function w(P) {
        var M = "srq";
        var L = 0;
        var K = {};
        var Q = 0;
        this.timeout = P != null ? P : 30000;
        var N = function(R, U) {
            L++;
            Q++;
            var T = M + L + "_" + g.getTimestamp();
            var S = {
                timeout: new o(R),
                callback: U
            };
            K[T] = S;
            S.timeout.start(function() {
                O(T, null, "Request timed out", "timeout")
            });
            return T
        };
        var O = function(U, V, R, S) {
            if (U != null) {
                var T = K[U];
                if (T != null) {
                    Q--;
                    T.timeout.stop();
                    delete K[U];
                    if (R != null) {
                        if (T.callback != null && typeof T.callback.error == "function") {
                            T.callback.error(R, S)
                        }
                    } else {
                        if (T.callback != null && typeof T.callback.success == "function") {
                            T.callback.success(V)
                        }
                    }
                }
            }
        };
        this.startRequest = function(R) {
            return N(this.timeout, R)
        }
        ;
        this.getRequestsCount = function() {
            return Q
        }
        ;
        this.isRequestPending = function(R) {
            return R != null && K[R] != null
        }
        ;
        this.handleData = function(R, S) {
            O(R, S != null ? S : null, null)
        }
        ;
        this.handleError = function(S, T, R) {
            O(S, null, T != null ? T : "Unknown error", R != null ? R : null)
        }
    }
    function b() {
        var N = 0;
        var M = null;
        var L = function() {
            if (M != null) {
                var P = M;
                M = null;
                if (P.length > 0) {
                    for (var O = 0; O < P.length; O++) {
                        P[O]()
                    }
                }
            }
        };
        var K = function(O) {
            if (M == null) {
                M = []
            }
            M.push(O)
        };
        this.isBusy = function() {
            return N > 0
        }
        ;
        this.start = function(O) {
            if (O === true) {
                N = 1
            } else {
                N++
            }
        }
        ;
        this.stop = function(O) {
            if (N > 0) {
                if (O === true) {
                    N = 0
                } else {
                    if (N > 0) {
                        N--
                    }
                }
                if (N == 0) {
                    L()
                }
            }
        }
        ;
        this.onReady = function(O) {
            if (typeof O == "function") {
                if (N > 0) {
                    K(O)
                } else {
                    O()
                }
            }
        }
    }
    function p(U) {
        var V = 4;
        var S = 256;
        var W = null;
        var T = null;
        var ad = function(an) {
            return a.isFullStr(an) && an.length >= V && an.length < S && an.length % 2 == 0
        };
        var ai = function(an) {
            return an & an
        };
        var L = function(an, ao) {
            return ai(((an << 5) - an) + ao)
        };
        var Y = function(an) {
            return an.length == 1 ? "0" + an : an
        };
        var af = function(ao, an) {
            if (an > 0) {
                while (ao < 0) {
                    ao += an
                }
                while (ao >= an) {
                    ao -= an
                }
            }
            return ao
        };
        var ab = function(ap, ao, an) {
            ap += 3;
            return ap + ao >= an ? 0 : ap
        };
        var O = function(an, ao) {
            an++;
            return an >= ao ? 0 : an
        };
        var ac = function(an, ao) {
            return ao ? -an : an
        };
        var aj = function(aq, ar, ap, an, ao) {
            return af(ar + ac(an, ao) * ae(aq, ap), S)
        };
        var Q = function(au, an, at, av, ao, ar, ap) {
            var aq = au != null && at != null ? au.indexOf(at) : -1;
            return aq >= 0 ? al(au, af(aq + ac(ar, ap) * (av + ae(an, ao)), au.length)) : at
        };
        var P = function(ao, an) {
            return an != null ? (ao != null ? ao + an : an) : ao
        };
        var al = function(an, ao) {
            return an != null && ao >= 0 && ao < an.length ? an.charAt(ao) : null
        };
        var ae = function(an, ao) {
            return an != null && ao >= 0 && ao < an.length ? an.charCodeAt(ao) : 0
        };
        var R = function(at, av, an, ar, ao, aq) {
            var au = al(at, ar);
            if (au != null) {
                var ap = Math.random() > 0.5 ? av.indexOf(au) : av.lastIndexOf(au);
                return ap >= 0 ? Y(aj(an, ap, ao, 1, aq).toString(16)) : null
            }
            return null
        };
        var M = function(at, an, ar, ao, aq) {
            var av = al(at, ar);
            var au = al(at, ar + 1);
            var ap = av != null && au != null ? parseInt(av + au, 16) : -1;
            return ap >= 0 ? aj(an, ap, ao, -1, aq) : -1
        };
        var ak = function(au, ay, ao) {
            var ax = null;
            if (a.isFullStr(au) && au.length % 2 == 0 && ad(ay) && ad(ao)) {
                var at = au.length;
                var av = ao.length;
                var ap = 0;
                var ar = 0;
                var aq = false;
                for (var an = 0; an < at; an += 2) {
                    var aw = al(ay, M(au, ao, an, ap + ar, aq));
                    if (aw != null) {
                        ax = P(ax, aw)
                    } else {
                        return null
                    }
                    ap = ab(ap, ar, av);
                    if (ap == 0) {
                        ar = O(ar, av)
                    }
                    aq = !aq
                }
            }
            return ax
        };
        var N = function(av, aq, ao) {
            var ay = null;
            if (a.isFullStr(av) && ad(aq) && ad(ao)) {
                var ax = av.length;
                var aw = ao.length;
                var ap = 0;
                var au = 0;
                var at = false;
                for (var an = 0; an < ax; an++) {
                    var ar = R(av, aq, ao, an, ap + au, at);
                    if (ar != null) {
                        ay = P(ay, ar)
                    } else {
                        return null
                    }
                    ap = ab(ap, au, aw);
                    if (ap == 0) {
                        au = O(au, aw)
                    }
                    at = !at
                }
            }
            return ay
        };
        var am = function(ao) {
            var an = ao < 0 ? -1 : 1;
            return an * ((ao * an) % S)
        };
        var ag = function(ar) {
            var ao = null;
            if (ad(ar)) {
                var aq = ar.length;
                var ap = aq / 2;
                for (var at = 0; at < ap; at++) {
                    var au = al(ar, at);
                    var an = al(ar, aq - 1 - at);
                    if (ao == null || ao.indexOf(au) < 0) {
                        ao = P(ao, au)
                    }
                    if (ao.indexOf(an) < 0) {
                        ao = P(ao, an)
                    }
                }
            }
            return ao
        };
        var K = function(aq, at, ar) {
            var ap = 0;
            if (aq != null && at != null && ar != null) {
                var au = aq.length;
                var an = ar.length;
                ap = au;
                for (var ao = 0; ao < an; ao++) {
                    ap = L(ap, ae(ar, ao))
                }
                for (var ao = 0; ao < au; ao++) {
                    if (at.indexOf(al(aq, ao)) < 0) {
                        ap = L(ap, ae(aq, ao))
                    }
                }
            }
            return am(ap)
        };
        var X = function(av, ay, ao, aw) {
            var aq = null;
            if (a.isFullStr(av) && ad(ay) && ad(ao)) {
                var az = K(av, ay, ao);
                var ax = av.length;
                var au = ao.length;
                var ap = 0;
                var at = 0;
                var ar = false;
                for (var an = 0; an < ax; an++) {
                    aq = P(aq, Q(ay, ao, al(av, an), az, ap + at, aw, ar));
                    ap = ab(ap, at, au);
                    if (ap == 0) {
                        at = O(at, au)
                    }
                    ar = !ar
                }
            }
            return aq
        };
        var ah = function() {
            return N(a.strShuffle(U), U, U)
        };
        var Z = function(an, ao) {
            return ak(an, ak(ao, U, U), U)
        };
        var aa = function() {
            if (T == null) {
                T = ag(U)
            }
            return T
        };
        this.createSteam = function() {
            W = ah();
            return W
        }
        ;
        this.resolveToken = function(an) {
            return Z(an, W)
        }
        ;
        this.transformString = function(an) {
            return X(an, aa(), U, 1)
        }
        ;
        this.normalizeString = function(an) {
            return X(an, aa(), U, -1)
        }
    }
    var n = new function() {
        var Y = 16;
        var Z = 32;
        var K = "tvx:device_id";
        var M = /^[a-z-]+_[A-Za-z0-9]+_[0-9]+([0-9#])*$/;
        var V = new p("Ue!m2K(vI$Ekn@uMgGoHCA9V,%DkT(a*OYhHyLI.s!FCFnr3b34.)cP=r&fi1ftc??wz[N~/45'A&-dsP/YW]-Jj~ed]xpl#DWBZ%_8N705+BJSVT,zlhqv_L[b7U$;EQMt0*+QqmgO9Sw'G=o8;6xpK)RRXZuaij6X1@#y2");
        var Q = new p("k%hy.nLI1&4rN[D9YAPVCu(*&5F)'aC$=frs,wocT48qpRpXt[Gx$BQZU@B,9N;oL%j*J~hXbW)-#q#z7+0uMgHm3fEHcdK@iIG!?nP!/Y.3vFb~2eUz(sk-O/W?AtJ_VT_8]=+K;DmS6Q1iSx60]jaevER'l7y5ZlOdM2wg");
        var ab = new p("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
        var W = new p(a.strShuffle("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"));
        var aa = new p("tuNiBAmqXwPd-aUIRFHn2YpVQ9gkD7zWC4jMGycJ8v65SrZ0.hO1eLfKboxEl3sT");
        var R = function(af, ae) {
            return af != null && ae >= 0 && ae < af.length ? af.charAt(ae) : "0"
        };
        var T = function(ae) {
            return ae.indexOf("-") == 0 ? "0" + ae.substr(1) : ae
        };
        var ac = function(af, ai, ae) {
            var ag = 0;
            for (var ah = af.length; ah < ae; ah++) {
                af += R(ai, ag++)
            }
            return af
        };
        var S = function(ae) {
            return ac(T("" + a.createHash(ae)), T("" + a.createHash(ae, true)), Y)
        };
        var ad = function(ae) {
            return a.isFullStr(ae) && M.test(ae)
        };
        var U = function(ae) {
            if (a.isFullStr(ae) && ae.length < Z) {
                return ac(ae + "#", T("" + a.createHash(ae)) + T("" + a.createHash(ae, true)), Z)
            }
            return ae
        };
        var P = function(ae) {
            return a.isFullStr(ae) ? a.base64DecodeId(aa.normalizeString(ae)) : null
        };
        var N = function(ae) {
            return a.isFullStr(ae) ? aa.transformString(a.base64EncodeId(U(ae))) : null
        };
        var O = function() {
            A.storage.remove(K)
        };
        var L = function(af) {
            var ae = A.storage.getFullStr(K, null);
            if (!ad(P(ae))) {
                ae = null
            }
            if (ae == null && af != null && af.info != null && af.info.platform != null) {
                ae = N(af.info.platform + "_" + a.createKey(16) + "_" + g.getTimestamp());
                A.storage.set(K, ae)
            }
            return ae
        };
        var X = function(ae) {
            if (ae != null && ae.info != null && ae.info.platform != null && ae.info.system != null) {
                if (ae.info.system.macAddress != null) {
                    return N(ae.info.platform + "_" + ae.info.system.macAddress)
                } else {
                    if (ae.info.system.deviceId != null) {
                        return N(ae.info.platform + "_" + ae.info.system.deviceId)
                    } else {
                        if (ae.info.id != null) {
                            return N(ae.info.platform + "_" + ae.info.id)
                        }
                    }
                }
            }
            return L(ae)
        };
        this.checkOrigin = function(ae) {
            if (a.isFullStr(ae)) {
                return ae == "null" || ae == "http://msx.benzac.de" || ae == "https://msx.benzac.de" || ae == "ms-appx://52357benzac.de.mediastationx" || ae == "http://localhost" || ae.indexOf("http://localhost:") == 0 || ae.indexOf("file://") == 0
            }
            return false
        }
        ;
        this.transformUrl = function(ae) {
            return V.transformString(ae)
        }
        ;
        this.transformString = function(ae) {
            return Q.transformString(ae)
        }
        ;
        this.normalizeString = function(ae) {
            return Q.normalizeString(ae)
        }
        ;
        this.createHashKey = function(ae, af) {
            if (af == "local") {
                return W.transformString(S(ae))
            }
            return ab.transformString(S(ae))
        }
        ;
        this.clearDeviceId = function() {
            O()
        }
        ;
        this.getDeviceId = function(ae) {
            return X(ae)
        }
    }
    ;
    var t = new function() {
        var N = new b();
        var X = null;
        var U = false;
        var Q = null;
        var T = function(aa) {
            if (X != null) {
                var Y = X;
                X = null;
                if (Y.length > 0) {
                    for (var Z = 0; Z < Y.length; Z++) {
                        Y[Z](aa)
                    }
                }
            }
        };
        var M = function(Y) {
            if (X == null) {
                X = []
            }
            X.push(Y)
        };
        var R = function(Z, Y) {
            if (a.isFullStr(Y)) {
                if (a.isFullStr(Z)) {
                    return Y == Z
                }
                return false
            }
            return true
        };
        var O = function(Y) {
            return Y != null && Y.info != null && Y.info.framework != null ? a.strFullCheck(Y.info.framework.name, null) : null
        };
        var P = function(Y) {
            return Y != null && Y.info != null && Y.info.framework != null ? a.strFullCheck(Y.info.framework.version, null) : null
        };
        var L = function(Y) {
            return Y != null && Y.info != null && Y.info.application != null ? a.strFullCheck(Y.info.application.name, null) : null
        };
        var S = function(Y) {
            return Y != null && Y.info != null && Y.info.application != null ? a.strFullCheck(Y.info.application.version, null) : null
        };
        var K = function(Y) {
            return Y != null && Y.info != null && Y.info.content != null ? a.strFullCheck(Y.info.content.name, null) : null
        };
        var W = function(Y) {
            return Y != null && Y.info != null && Y.info.content != null ? a.strFullCheck(Y.info.content.version, null) : null
        };
        var V = function() {
            N.start();
            N.start();
            e.addEventListener("load", function() {
                N.stop()
            });
            A.storage.onReady(function() {
                N.stop()
            })
        };
        this.createCanvas = function(aa, Z, Y) {
            return a.strReplace(l.COMMON.HTML.CANVAS.replace("{WIDTH}", a.strToNum(Z, k.SCREEN_WIDTH)).replace("{HEIGHT}", a.strToNum(Y, k.SCREEN_HEIGHT)), "{CLASS}", a.htmlAttrEscape(aa))
        }
        ;
        this.createIFrame = function(Y, Z) {
            return a.strReplace(a.strReplace(l.COMMON.HTML.IFRAME, "{CLASS}", a.htmlAttrEscape(Y)), "{SRC}", a.htmlAttrEscape(a.strFullCheck(Z, "about:blank")))
        }
        ;
        this.isReady = function() {
            return !N.isBusy()
        }
        ;
        this.onReady = function(Y) {
            N.onReady(Y)
        }
        ;
        this.startInitService = function() {
            N.start()
        }
        ;
        this.stopInitService = function() {
            N.stop()
        }
        ;
        this.areSettingsValidated = function() {
            return U
        }
        ;
        this.invalidateSettings = function() {
            U = false;
            Q = null
        }
        ;
        this.validateSettings = function(ag) {
            U = true;
            Q = ag;
            var ao = null;
            var ab = null;
            var ar = null;
            var at = null;
            var ai = null;
            var aB = null;
            var aA = null;
            var ap = null;
            var aw = null;
            var ac = null;
            var Y = null;
            var ae = null;
            var ax = null;
            var aj = null;
            var ah = null;
            var al = null;
            var au = null;
            var ay = null;
            var aa = null;
            var aq = null;
            var Z = null;
            var am = null;
            var ak = null;
            var an = null;
            var af = null;
            var ad = null;
            var az = null;
            var av = null;
            if (ag != null && ag.info != null) {
                aA = ag.info.platform;
                ap = ag.info.id;
                if (ag.info.time != null) {
                    ao = ag.info.time.offset;
                    ab = ag.info.time.zoneOffset
                }
                if (ag.info.screen != null) {
                    ar = ag.info.screen.width;
                    at = ag.info.screen.height;
                    ai = ag.info.screen.factor;
                    aB = ag.info.screen.zoomFactor
                }
                if (ag.info.framework != null && ag.info.framework.settings != null) {
                    aw = ag.info.framework.settings.animate;
                    ac = ag.info.framework.settings.transform;
                    Y = ag.info.framework.settings.input;
                    ae = ag.info.framework.settings.remote;
                    ax = ag.info.framework.settings.layout;
                    aj = ag.info.framework.settings.scale;
                    ah = ag.info.framework.settings.zoom;
                    al = ag.info.framework.settings.center;
                    au = ag.info.framework.settings.background;
                    ay = ag.info.framework.settings.leave;
                    aa = ag.info.framework.settings.exit;
                    aq = ag.info.framework.settings.back;
                    Z = ag.info.framework.settings.volume;
                    am = ag.info.framework.settings.busy;
                    ak = ag.info.framework.settings.speed;
                    an = ag.info.framework.settings.playback;
                    af = ag.info.framework.settings.fullscreen;
                    ad = ag.info.framework.settings.suspend;
                    az = ag.info.framework.settings.secure;
                    av = ag.info.framework.settings.caption
                }
            }
            k.TIME_OFFSET = a.strToNum(ao, k.TIME_OFFSET);
            k.TIME_ZONE_OFFSET = a.strToNum(ab, k.TIME_ZONE_OFFSET);
            k.SCREEN_WIDTH = a.strToNum(ar, k.SCREEN_WIDTH);
            k.SCREEN_HEIGHT = a.strToNum(at, k.SCREEN_HEIGHT);
            k.SCREEN_FACTOR = a.strToNum(ai, k.SCREEN_FACTOR);
            k.ZOOM_FACTOR = a.strToNum(aB, k.ZOOM_FACTOR);
            k.PLATFORM = a.strFullCheck(aA, k.PLATFORM);
            k.ID = a.strFullCheck(ap, k.ID);
            k.ANIMATE = a.strToNum(aw, k.ANIMATE);
            k.TRANSFORM = a.strToNum(ac, k.TRANSFORM);
            k.INPUT = a.strToNum(Y, k.INPUT);
            k.REMOTE = a.strToNum(ae, k.REMOTE);
            k.LAYOUT = a.strFullCheck(ax, k.LAYOUT);
            k.SCALE = a.strFullCheck(aj, k.SCALE);
            k.ZOOM = a.strFullCheck(ah, k.ZOOM);
            k.CENTER = a.strToNum(al, k.CENTER);
            k.BACKGROUND = a.strToNum(au, k.BACKGROUND);
            k.LEAVE = a.strToNum(ay, k.LEAVE);
            k.EXIT = a.strToNum(aa, k.EXIT);
            k.BACK = a.strToNum(aq, k.BACK);
            k.VOLUME = a.strToNum(Z, k.VOLUME);
            k.BUSY = a.strToNum(am, k.BUSY);
            k.SPEED = a.strToNum(ak, k.SPEED);
            k.PLAYBACK = a.strToNum(an, k.PLAYBACK);
            k.FULLSCREEN = a.strToNum(af, k.FULLSCREEN);
            k.SUSPEND = a.strToNum(ad, k.SUSPEND);
            k.SECURE = a.strToNum(az, k.SECURE);
            k.CAPTION = a.strToNum(av, k.CAPTION);
            T(ag)
        }
        ;
        this.onValidatedSettings = function(Y) {
            if (typeof Y == "function") {
                if (U) {
                    Y(Q)
                } else {
                    M(Y)
                }
            }
        }
        ;
        this.handleSettingsEvent = function(Z) {
            if (Z != null && a.isFullStr(Z.event) && Z.event.indexOf("settings:") == 0) {
                var Y = Z.event.substr(9);
                if (Y == "animate") {
                    k.ANIMATE = a.strToNum(Z.value, k.ANIMATE)
                } else {
                    if (Y == "transform") {
                        k.TRANSFORM = a.strToNum(Z.value, k.TRANSFORM)
                    } else {
                        if (Y == "input") {
                            k.INPUT = a.strToNum(Z.value, k.INPUT)
                        } else {
                            if (Y == "remote") {
                                k.REMOTE = a.strToNum(Z.value, k.REMOTE)
                            } else {
                                if (Y == "layout") {
                                    k.LAYOUT = a.strToNum(Z.value, k.LAYOUT)
                                } else {
                                    if (Y == "scale") {
                                        k.SCALE = a.strFullCheck(Z.value, k.SCALE)
                                    } else {
                                        if (Y == "zoom") {
                                            k.ZOOM = a.strFullCheck(Z.value, k.ZOOM)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ;
        this.getFrameworkInfo = function(Y) {
            return a.strFullCheck(O(Y), "-") + " " + a.strFullCheck(P(Y), "-")
        }
        ;
        this.getApplicationInfo = function(Y) {
            return a.strFullCheck(L(Y), "-") + " " + a.strFullCheck(S(Y), "-")
        }
        ;
        this.getContentInfo = function(Y) {
            return a.strFullCheck(K(Y), "-") + " " + a.strFullCheck(W(Y), "-")
        }
        ;
        this.checkFramework = function(aa, Z, Y) {
            return a.checkVersion(P(aa), Z) && R(O(aa), Y)
        }
        ;
        this.checkApplication = function(aa, Z, Y) {
            return a.checkVersion(S(aa), Z) && R(L(aa), Y)
        }
        ;
        this.checkContent = function(aa, Z, Y) {
            return a.checkVersion(W(aa), Z) && R(K(aa), Y)
        }
        ;
        this.isSameContentState = function(Z, Y) {
            return Z != null && Y != null && Z.start === Y.start && Z.restored === Y.restored && Z.menuId === Y.menuId && Z.menuFlag === Y.menuFlag && Z.menuFocus === Y.menuFocus && Z.menuIndex === Y.menuIndex && Z.menuSize === Y.menuSize && Z.contentId === Y.contentId && Z.contentFlag === Y.contentFlag && Z.contentFocus === Y.contentFocus && Z.contentIndex === Y.contentIndex && Z.contentSize === Y.contentSize && Z.contentVisible === Y.contentVisible && Z.panelId === Y.panelId && Z.panelFlag === Y.panelFlag && Z.panelFocus === Y.panelFocus && Z.panelIndex === Y.panelIndex && Z.panelSize === Y.panelSize && Z.panelVisible === Y.panelVisible && Z.videoVisible === Y.videoVisible && Z.videoActive === Y.videoActive && Z.playerVisible === Y.playerVisible && Z.slideshowVisible === Y.slideshowVisible && Z.volumeVisible === Y.volumeVisible && Z.logVisible === Y.logVisible
        }
        ;
        this.createChangedContentState = function(Z, Y) {
            return Y != null ? {
                init: Y.init,
                initChanged: Z == null || Z.init !== Y.init,
                start: Y.start,
                startChanged: Z == null || Z.start !== Y.start,
                restored: Y.restored,
                restoredChanged: Z == null || Z.restored !== Y.restored,
                menuId: Y.menuId,
                menuIdChanged: Z == null || Z.menuId !== Y.menuId,
                menuFlag: Y.menuFlag,
                menuFlagChanged: Z == null || Z.menuFlag !== Y.menuFlag,
                menuFocus: Y.menuFocus,
                menuFocusChanged: Z == null || Z.menuFocus !== Y.menuFocus,
                menuIndex: Y.menuIndex,
                menuIndexChanged: Z == null || Z.menuIndex !== Y.menuIndex,
                menuSize: Y.menuSize,
                menuSizeChanged: Z == null || Z.menuSize !== Y.menuSize,
                contentId: Y.contentId,
                contentIdChanged: Z == null || Z.contentId !== Y.contentId,
                contentFlag: Y.contentFlag,
                contentFlagChanged: Z == null || Z.contentFlag !== Y.contentFlag,
                contentFocus: Y.contentFocus,
                contentFocusChanged: Z == null || Z.contentFocus !== Y.contentFocus,
                contentIndex: Y.contentIndex,
                contentIndexChanged: Z == null || Z.contentIndex !== Y.contentIndex,
                contentSize: Y.contentSize,
                contentSizeChanged: Z == null || Z.contentSize !== Y.contentSize,
                contentVisible: Y.contentVisible,
                contentVisibleChanged: Z == null || Z.contentVisible !== Y.contentVisible,
                panelId: Y.panelId,
                panelIdChanged: Z == null || Z.panelId !== Y.panelId,
                panelFlag: Y.panelFlag,
                panelFlagChanged: Z == null || Z.panelFlag !== Y.panelFlag,
                panelFocus: Y.panelFocus,
                panelFocusChanged: Z == null || Z.panelFocus !== Y.panelFocus,
                panelIndex: Y.panelIndex,
                panelIndexChanged: Z == null || Z.panelIndex !== Y.panelIndex,
                panelSize: Y.panelSize,
                panelSizeChanged: Z == null || Z.panelSize !== Y.panelSize,
                panelVisible: Y.panelVisible,
                panelVisibleChanged: Z == null || Z.panelVisible !== Y.panelVisible,
                videoVisible: Y.videoVisible,
                videoVisibleChanged: Z == null || Z.videoVisible !== Y.videoVisible,
                videoActive: Y.videoActive,
                videoActiveChanged: Z == null || Z.videoActive !== Y.videoActive,
                playerVisible: Y.playerVisible,
                playerVisibleChanged: Z == null || Z.playerVisible !== Y.playerVisible,
                slideshowVisible: Y.slideshowVisible,
                slideshowVisibleChanged: Z == null || Z.slideshowVisible !== Y.slideshowVisible,
                volumeVisible: Y.volumeVisible,
                volumeVisibleChanged: Z == null || Z.volumeVisible !== Y.volumeVisible,
                logVisible: Y.logVisible,
                logVisibleChanged: Z == null || Z.logVisible !== Y.logVisible
            } : Z
        }
        ;
        V()
    }
    ;
    var G = new function() {
        var a0 = "videoPlugin";
        var aZ = "vrq";
        var aW = 100;
        var ah = 30000;
        var aN = new p("VnckdhvbF'sOhm)XlK1t]ETl]+K8q-tDgevE3N;7Zm[u#V1/W)U-_@_@,A4(B#zGF~8JHfJr?=D2*n9WC7&0i/a+2S,Qky5&..Nx!p(wUoLRIdos?HBLZ;T'CRb=eqGi3yc5$*Q%~P6MYjrj6P40aISO$!AXYwMzu%[x9gpf");
        var aU = null;
        var ac = false;
        var a1 = null;
        var ao = false;
        var U = false;
        var K = false;
        var Y = false;
        var S = null;
        var aH = new i();
        var af = new o(1000);
        var aM = new o(1000);
        var aQ = false;
        var aj = {
            state: 0,
            position: 0,
            duration: 0,
            speed: 1,
            ended: false,
            volume: 100,
            muted: false,
            width: k.SCREEN_WIDTH,
            height: k.SCREEN_HEIGHT
        };
        var av = function(bc) {
            return (bc != null && bc.webkitSupportsFullscreen === true) || m.fullscreenEnabled === true || m.msFullscreenEnabled === true || m.mozFullScreenEnabled === true || m.webkitFullscreenEnabled === true
        };
        var X = function(bc) {
            return (bc != null && bc.webkitDisplayingFullscreen === true) || m.fullScreenElement != null || m.msFullscreenElement != null || m.mozFullScreen === true || m.webkitIsFullScreen === true
        };
        var al = function(bc) {
            if (bc != null && av(bc)) {
                try {
                    if (typeof bc.webkitEnterFullScreen == "function") {
                        bc.webkitEnterFullScreen();
                        return true
                    } else {
                        if (typeof bc.requestFullscreen == "function") {
                            bc.requestFullscreen();
                            return true
                        } else {
                            if (typeof bc.msRequestFullscreen == "function") {
                                bc.msRequestFullscreen();
                                return true
                            } else {
                                if (typeof bc.mozRequestFullScreen == "function") {
                                    bc.mozRequestFullScreen();
                                    return true
                                } else {
                                    if (typeof bc.webkitRequestFullscreen == "function") {
                                        bc.webkitRequestFullscreen();
                                        return true
                                    }
                                }
                            }
                        }
                    }
                } catch (bd) {
                    aF("Request fullscreen failed", bd)
                }
            }
            return false
        };
        var aX = function(bc) {
            if (X(bc)) {
                try {
                    if (bc != null && typeof bc.webkitExitFullScreen == "function") {
                        bc.webkitExitFullScreen();
                        return true
                    } else {
                        if (typeof m.exitFullscreen == "function") {
                            m.exitFullscreen();
                            return true
                        } else {
                            if (typeof m.msExitFullscreen == "function") {
                                m.msExitFullscreen();
                                return true
                            } else {
                                if (typeof m.mozCancelFullScreen == "function") {
                                    m.mozCancelFullScreen();
                                    return true
                                } else {
                                    if (typeof m.webkitExitFullscreen == "function") {
                                        m.webkitExitFullscreen();
                                        return true
                                    }
                                }
                            }
                        }
                    }
                } catch (bd) {
                    aF("Exit fullscreen failed", bd)
                }
            }
            return false
        };
        var aJ = function(bc) {
            aU = new p(bc)
        };
        var aw = function(bc) {
            if (ao) {
                if (bc == "local") {
                    return aU != null ? aU.createSteam() : null
                }
                return aN.createSteam()
            }
            return null
        };
        var aE = function(bc, bd) {
            if (ao) {
                if (bd == "local") {
                    return aU != null ? aU.resolveToken(bc) : null
                }
                return aN.resolveToken(bc)
            }
            return null
        };
        var R = function(bc, bd) {
            if (ao) {
                if (bd == "local") {
                    return aU != null ? aU.transformString(bc) : null
                } else {
                    if (bd == "global") {
                        return aN.transformString(bc)
                    } else {
                        if (bd == "shared") {
                            return n.transformString(aU != null ? aU.transformString(bc) : bc)
                        }
                    }
                }
                return aN.transformString(aU != null ? aU.transformString(bc) : bc)
            }
            return null
        };
        var aK = function(bc, bd) {
            if (ao) {
                if (bd == "local") {
                    return aU != null ? aU.normalizeString(bc) : null
                } else {
                    if (bd == "global") {
                        return aN.normalizeString(bc)
                    } else {
                        if (bd == "shared") {
                            return aU != null ? aU.normalizeString(n.normalizeString(bc)) : n.normalizeString(bc)
                        }
                    }
                }
                return aU != null ? aU.normalizeString(aN.normalizeString(bc)) : aN.normalizeString(bc)
            }
            return null
        };
        var aV = function(bc) {
            if (a.isNum(bc)) {
                bc = a.strToNum(bc, 0);
                if (isFinite(bc)) {
                    return bc
                }
            }
            return 0
        };
        var Q = function() {
            if (aj.position == 0 || aj.duration == 0) {
                try {
                    var bc = false;
                    if (aj.position == 0) {
                        aj.position = aV(S.getPosition());
                        bc = aj.position > 0
                    }
                    if (aj.duration == 0) {
                        aj.duration = aV(S.getDuration());
                        bc = aj.duration > 0
                    }
                    if (aj.position > 0 && aj.duration > 0) {
                        aA()
                    }
                    if (bc) {
                        P()
                    }
                } catch (bd) {
                    aF("Start failed", bd);
                    aA()
                }
            } else {
                aA()
            }
        };
        var aA = function() {
            ac = true;
            aD()
        };
        var aR = function() {
            aD();
            if (ao && !ac && S != null && typeof S.getPosition == "function" && typeof S.getDuration == "function") {
                a1 = setInterval(Q, aW)
            }
        };
        var aD = function() {
            if (a1 != null) {
                clearInterval(a1);
                a1 = null
            }
        };
        var aS = 0;
        var aB = {};
        var ae = function(be) {
            aS++;
            var bc = aZ + aS + "_" + g.getTimestamp();
            var bd = {
                timeout: new o(ah),
                callback: be
            };
            aB[bc] = bd;
            bd.timeout.start(function() {
                a5(bc, {
                    error: "Request timed out"
                })
            });
            return bc
        };
        var a5 = function(bc, be) {
            if (bc != null) {
                var bd = aB[bc];
                if (bd != null) {
                    bd.timeout.stop();
                    delete aB[bc];
                    V(bd.callback, be)
                }
            }
        };
        var V = function(be, bc) {
            if (typeof be == "function") {
                try {
                    be(bc)
                } catch (bd) {
                    aF("Callback error", bd)
                }
            }
        };
        var O = new h();
        var aI = new o(500);
        var an = null;
        var ak = null;
        var M = function(bc) {
            if (bc != null) {
                if (t.isSameContentState(an, bc)) {
                    if (!t.isSameContentState(ak, bc)) {
                        if (ak == null) {
                            bc.init = true
                        }
                        ak = t.createChangedContentState(ak, bc);
                        O.notifyObservers(ak)
                    }
                } else {
                    an = bc
                }
            }
            au()
        };
        var aT = function() {
            if (ao) {
                ag("info:content", function(bc) {
                    M(bc.info != null && bc.info.content != null ? bc.info.content.state : null)
                })
            } else {
                au()
            }
        };
        var au = function(bc) {
            if (O.hasObservers()) {
                if (a.isFullStr(bc) && ak != null) {
                    O.notifyObserver(bc, ak)
                }
                aI.start(aT)
            } else {
                an = null;
                ak = null;
                aI.stop()
            }
        };
        var P = function() {
            Z(aj)
        };
        var ai = function() {
            aH.addHook(a0, N)
        };
        var bb = function() {
            if (aj.state == z.STOPPED) {
                aH.stop()
            } else {
                aH.start()
            }
        };
        var W = function(bc, bd) {
            if (a.isFullStr(bc)) {
                Z({
                    action: bc,
                    data: bd != null ? bd : null
                })
            }
        };
        var ar = function(bd, bc) {
            if (a.isFullStr(bd)) {
                if (bc !== false) {
                    W("logger:debug:" + bd)
                }
            }
        };
        var a7 = function(bd, bc, be) {
            if (a.isFullStr(bd)) {
                if (bc !== false) {
                    W("logger:success:" + bd, {
                        show: be !== false
                    })
                } else {
                    if (be !== false) {
                        W("success:" + bd)
                    }
                }
            }
        };
        var ba = function(bd, bc, be) {
            if (a.isFullStr(bd)) {
                if (bc !== false) {
                    W("logger:info:" + bd, {
                        show: be !== false
                    })
                } else {
                    if (be !== false) {
                        W("info:" + bd)
                    }
                }
            }
        };
        var a3 = function(bd, bc, be) {
            if (a.isFullStr(bd)) {
                if (bc !== false) {
                    W("logger:warn:" + bd, {
                        show: be !== false
                    })
                } else {
                    if (be !== false) {
                        W("warn:" + bd)
                    }
                }
            }
        };
        var a8 = function(bd, bc, be) {
            if (a.isFullStr(bd)) {
                if (bc !== false) {
                    W("logger:error:" + bd, {
                        show: be !== false
                    })
                } else {
                    if (be !== false) {
                        W("error:" + bd)
                    }
                }
            }
        };
        var ad = function(bc, bd) {
            if (a.isFullStr(bc) && bd != null) {
                if (typeof bd == "object") {
                    W(bc + ":data", bd)
                } else {
                    W(bc + ":" + bd)
                }
            }
        };
        var aG = function(bc) {
            ad("menu", bc)
        };
        var aP = function(bc) {
            ad("content", bc)
        };
        var ax = function(bc) {
            ad("panel", bc)
        };
        var ag = function(bc, be, bd) {
            if (a.isFullStr(bc)) {
                if (bd == null) {
                    bd = {}
                }
                bd.requestId = ae(be);
                bd.dataId = bc;
                W("player:commit:" + bc, bd)
            } else {
                V(be, {
                    error: "Data ID is invalid: '" + bc + "'"
                })
            }
        };
        var aF = function(bc, bd) {
            if (bc != null && bd != null) {
                if (bd.name != null && bd.message != null) {
                    a8("Plugin: " + bc + ": " + bd.name + ": " + bd.message)
                } else {
                    a8("Plugin: " + bc + ": " + bd)
                }
                if (S != null && typeof S.onError == "function") {
                    try {
                        S.onError(bc, bd)
                    } catch (be) {}
                }
            }
        };
        var am = function(bc) {
            if (aj.state != z.PLAYING || bc === true) {
                aj.state = z.PLAYING;
                if (ao && S != null && typeof S.play == "function") {
                    try {
                        S.play()
                    } catch (bd) {
                        aF("Play failed", bd)
                    }
                }
            }
        };
        var a4 = function(bc) {
            if (aj.state != z.PAUSED || bc === true) {
                aj.state = z.PAUSED;
                if (ao && S != null && typeof S.pause == "function") {
                    try {
                        S.pause()
                    } catch (bd) {
                        aF("Pause failed", bd)
                    }
                }
            }
        };
        var ab = function(bc) {
            if (aj.state != z.STOPPED || bc === true) {
                aj.state = z.STOPPED;
                if (ao && S != null && typeof S.stop == "function") {
                    try {
                        S.stop()
                    } catch (bd) {
                        aF("Stop failed", bd)
                    }
                }
            }
        };
        var aq = function(bc, bd) {
            if (bc == z.PLAYING) {
                am(bd)
            } else {
                if (bc == z.PAUSED) {
                    a4(bd)
                } else {
                    if (bc == z.STOPPED) {
                        ab(bd)
                    }
                }
            }
        };
        var N = function() {
            if (ao && S != null && !af.isBusy() && typeof S.getUpdateData == "function") {
                try {
                    var bd = S.getUpdateData();
                    if (bd != null) {
                        var be = false;
                        if (a.isNum(bd.state)) {
                            be = true;
                            aj.state = a.strToNum(bd.state, aj.state)
                        }
                        if (a.isNum(bd.position)) {
                            be = true;
                            aj.position = a.strToNum(bd.position, aj.position);
                            if (!isFinite(aj.position)) {
                                aj.position = 0
                            }
                        }
                        if (a.isNum(bd.duration)) {
                            be = true;
                            aj.duration = a.strToNum(bd.duration, aj.duration);
                            if (!isFinite(aj.duration)) {
                                aj.duration = 0
                            }
                        }
                        if (a.isNum(bd.speed)) {
                            be = true;
                            aj.speed = a.strToNum(bd.speed, aj.speed)
                        }
                        if (a.isBool(bd.ended)) {
                            be = true;
                            aj.ended = a.strToBool(bd.ended, aj.ended)
                        }
                        if (a.isNum(bd.volume)) {
                            be = true;
                            aj.volume = a.strToNum(bd.volume, aj.volume)
                        }
                        if (a.isBool(bd.muted)) {
                            be = true;
                            aj.muted = a.strToBool(bd.muted, aj.muted)
                        }
                        if (be) {
                            P();
                            bb()
                        }
                    }
                } catch (bc) {
                    aF("Update failed", bc)
                }
            }
        };
        var a6 = function(be, bc) {
            Y = false;
            if (aj.position != be || be == 0 || bc === true) {
                aj.position = be;
                if (ao && S != null && typeof S.setPosition == "function") {
                    try {
                        S.setPosition(be);
                        if (!Y) {
                            af.start()
                        }
                    } catch (bd) {
                        aF("Set position failed", bd)
                    }
                }
            }
        };
        var ay = function(bc, be) {
            if (aj.volume != bc || be === true) {
                aj.volume = bc;
                if (ao && S != null && typeof S.setVolume == "function") {
                    try {
                        S.setVolume(bc)
                    } catch (bd) {
                        aF("Set volume failed", bd)
                    }
                }
            }
        };
        var T = function(bc, bd) {
            if (aj.muted != bc || bd === true) {
                aj.muted = bc;
                if (ao && S != null && typeof S.setMuted == "function") {
                    try {
                        S.setMuted(bc)
                    } catch (be) {
                        aF("Set muted failed", be)
                    }
                }
            }
        };
        var at = function(bc, bd) {
            if (aj.speed != bc || bd === true) {
                aj.speed = bc;
                if (ao && S != null && typeof S.setSpeed == "function") {
                    try {
                        S.setSpeed(bc)
                    } catch (be) {
                        aF("Set speed failed", be)
                    }
                }
            }
        };
        var aC = function(bd, bc, be) {
            if (aj.width != bd || aj.height != bc || be === true) {
                aj.width = bd;
                aj.height = bc;
                if (ao && S != null && typeof S.setSize == "function") {
                    try {
                        S.setSize(bd, bc)
                    } catch (bf) {
                        aF("Set size failed", bf)
                    }
                }
            }
        };
        var aa = function(bc, bd) {
            W("response:" + bc, bd)
        };
        var aL = function(bc, bd) {
            a5(bc, bd)
        };
        var a2 = function(bd, bc, bf) {
            if (typeof S.handleRequest == "function") {
                try {
                    S.handleRequest(bc, bf, function(bg) {
                        aa(bd, bg)
                    })
                } catch (be) {
                    aF("Handle request failed", be);
                    aa(bd)
                }
            } else {
                aa(bd)
            }
        };
        var az = function(bd) {
            if (ao && bd != null && S != null) {
                if (typeof S.handleEvent == "function") {
                    try {
                        S.handleEvent(bd)
                    } catch (bc) {
                        aF("Handle event failed", bc)
                    }
                }
            }
        };
        var L = function(bg) {
            if (ao && bg != null && S != null) {
                if (a.isFullStr(bg.requestId) && a.isFullStr(bg.dataId)) {
                    a2(bg.requestId, bg.dataId, bg.data)
                } else {
                    if (bg.data != null && a.isFullStr(bg.data.requestId) && a.isFullStr(bg.data.dataId)) {
                        var bd = {};
                        var bf = bg.data.dataId;
                        var bc = bf.indexOf(":");
                        if (bc > 0) {
                            bf = bf.substr(0, bc)
                        }
                        bd[bf] = bg[bf] != null ? bg[bf] : null;
                        bd.error = a.strFullCheck(bg.error, null);
                        aL(bg.data.requestId, bd)
                    } else {
                        if (typeof S.handleData == "function") {
                            try {
                                S.handleData(bg)
                            } catch (be) {
                                aF("Handle data failed", be)
                            }
                        }
                    }
                }
            }
        };
        var aY = function(bc) {
            if (!K || bc === true) {
                K = true;
                if (S != null && typeof S.init == "function") {
                    try {
                        S.init()
                    } catch (bd) {
                        aF("Call init failed", bd)
                    }
                }
            }
        };
        var aO = function(bc) {
            if (!ao || bc === true) {
                ao = true;
                if (S != null && typeof S.ready == "function") {
                    try {
                        S.ready()
                    } catch (bd) {
                        aF("Call ready failed", bd)
                    }
                }
            }
        };
        var ap = function() {
            ao = false;
            e.addEventListener("message", function(bc) {
                if (n.checkOrigin(bc.origin)) {
                    a9(bc.data)
                }
            }, false);
            W("plugin:init")
        };
        var a9 = function(bc) {
            if (K && bc != null && bc.type === a0) {
                if (bc.init === 1 && ao) {
                    return
                }
                if (a.isNum(bc.state)) {
                    aq(a.strToNum(bc.state, aj.state))
                }
                if (a.isNum(bc.position)) {
                    a6(a.strToNum(bc.position, aj.position))
                }
                if (a.isNum(bc.speed)) {
                    at(a.strToNum(bc.speed, aj.speed))
                }
                if (a.isNum(bc.volume)) {
                    T(false);
                    ay(a.strToNum(bc.volume, aj.volume))
                }
                if (a.isBool(bc.muted)) {
                    T(a.strToBool(bc.muted, aj.muted))
                }
                if (a.isNum(bc.width) && a.isNum(bc.height)) {
                    aC(a.strToNum(bc.width, aj.width), a.strToNum(bc.height, aj.height))
                }
                if (bc.init === 1) {
                    aO()
                } else {
                    if (bc.data != null) {
                        if (a.isFullStr(bc.data.event)) {
                            az(bc.data)
                        } else {
                            L(bc.data)
                        }
                    }
                }
            }
        };
        var Z = function(bd) {
            if (e.parent != null && bd != null) {
                bd.type = a0;
                bd.sender = "plugin";
                bd.target = "app";
                try {
                    e.parent.postMessage(bd, "*")
                } catch (bc) {
                    if (e.console != null) {
                        console.error("Post message failed", bc)
                    }
                }
            }
        };
        this.setupPlayer = function(bc) {
            S = bc;
            if (K) {
                aY(true)
            }
            if (ao) {
                aO(true)
            }
        }
        ;
        this.setSeekDelay = function(bc) {
            af.delay = a.strToNum(bc, af.delay)
        }
        ;
        this.getSeekDelay = function() {
            return af.delay
        }
        ;
        this.setLoadingDelay = function(bc) {
            aM.delay = a.strToNum(bc, aM.delay)
        }
        ;
        this.getLoadingDelay = function() {
            return aM.delay
        }
        ;
        this.isFullscreenEnabled = function(bc) {
            return av(bc)
        }
        ;
        this.isFullscreenActive = function(bc) {
            return X(bc)
        }
        ;
        this.requestFullscreen = function(bc) {
            return al(bc)
        }
        ;
        this.exitFullscreen = function(bc) {
            return aX(bc)
        }
        ;
        this.setState = function(bc, bd) {
            if (ao) {
                aj.state = a.strToNum(bc, aj.state);
                if (bd === true) {
                    P()
                }
                bb()
            }
        }
        ;
        this.getState = function() {
            return aj.state
        }
        ;
        this.applyState = function() {
            if (ao) {
                aq(aj.state, true)
            }
        }
        ;
        this.setPosition = function(bd, bc) {
            if (ao) {
                Y = true;
                aj.position = a.strToNum(bd, aj.position);
                if (!isFinite(aj.position)) {
                    aj.position = 0
                }
                af.stop();
                if (bc === true) {
                    P();
                    bb()
                }
            }
        }
        ;
        this.getPosition = function() {
            return aj.position
        }
        ;
        this.applyPosition = function() {
            if (ao) {
                a6(aj.position, true)
            }
        }
        ;
        this.setDuration = function(bc, bd) {
            if (ao) {
                aj.duration = a.strToNum(bc, aj.duration);
                if (!isFinite(aj.duration)) {
                    aj.duration = 0
                }
                if (bd === true) {
                    P();
                    bb()
                }
            }
        }
        ;
        this.getDuration = function() {
            return aj.duration
        }
        ;
        this.setSpeed = function(bc, bd) {
            if (ao) {
                aj.speed = a.strToNum(bc, aj.speed);
                if (bd === true) {
                    P();
                    bb()
                }
            }
        }
        ;
        this.getSpeed = function() {
            return aj.speed
        }
        ;
        this.applySpeed = function() {
            if (ao) {
                at(aj.speed, true)
            }
        }
        ;
        this.setEnded = function(bc, bd) {
            if (ao) {
                aj.ended = a.strToBool(bc, aj.ended);
                if (bd === true) {
                    P();
                    bb()
                }
            }
        }
        ;
        this.hasEnded = function() {
            return aj.ended
        }
        ;
        this.setVolume = function(bd, bc) {
            if (ao) {
                aj.volume = a.strToNum(bd, aj.volume);
                if (bc === true) {
                    P();
                    bb()
                }
            }
        }
        ;
        this.getVolume = function() {
            return aj.volume
        }
        ;
        this.setMuted = function(bc, bd) {
            if (ao) {
                aj.muted = a.strToBool(bc, aj.muted);
                if (bd === true) {
                    P();
                    bb()
                }
            }
        }
        ;
        this.isMuted = function() {
            return aj.muted
        }
        ;
        this.applyVolume = function() {
            if (ao) {
                ay(aj.volume, true);
                T(aj.muted, true)
            }
        }
        ;
        this.getWidth = function() {
            return aj.width
        }
        ;
        this.getHeight = function() {
            return aj.height
        }
        ;
        this.applySize = function() {
            if (ao) {
                aC(aj.width, aj.height, true)
            }
        }
        ;
        this.executeAction = function(bc, bd) {
            if (ao) {
                W(bc, bd)
            }
        }
        ;
        this.debug = function(bd, bc) {
            if (ao) {
                ar(bd, bc)
            }
        }
        ;
        this.success = function(bd, bc, be) {
            if (ao) {
                a7(bd, bc, be)
            }
        }
        ;
        this.info = function(bd, bc, be) {
            if (ao) {
                ba(bd, bc, be)
            }
        }
        ;
        this.warn = function(bd, bc, be) {
            if (ao) {
                a3(bd, bc, be)
            }
        }
        ;
        this.error = function(bd, bc, be) {
            if (ao) {
                a8(bd, bc, be)
            }
        }
        ;
        this.showMenu = function(bc) {
            if (ao) {
                aG(bc)
            }
        }
        ;
        this.showContent = function(bc) {
            if (ao) {
                aP(bc)
            }
        }
        ;
        this.showPanel = function(bc) {
            if (ao) {
                ax(bc)
            }
        }
        ;
        this.showPlayer = function(bc) {
            if (ao) {
                if (a.isFullStr(bc)) {
                    W("player:show:" + bc)
                } else {
                    W("player:show")
                }
            }
        }
        ;
        this.showAction = function() {
            if (ao) {
                W("player:action")
            }
        }
        ;
        this.hidePlayer = function() {
            if (ao) {
                W("player:hide")
            }
        }
        ;
        this.setupContentLabel = function(bc) {
            if (ao) {
                W("player:label:content:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupExtensionLabel = function(bc) {
            if (ao) {
                W("player:label:extension:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupPositionLabel = function(bc) {
            if (ao) {
                W("player:label:position:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupDurationLabel = function(bc) {
            if (ao) {
                W("player:label:duration:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupSpeedLabel = function(bc) {
            if (ao) {
                W("player:label:speed:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupInfoHeadline = function(bc) {
            if (ao) {
                W("player:info:headline:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupInfoText = function(bc) {
            if (ao) {
                W("player:info:text:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupInfoImage = function(bc) {
            if (ao) {
                W("player:info:image:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupInfoOverlay = function(bc) {
            if (ao) {
                W("player:info:overlay:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupInfoSize = function(bc) {
            if (ao) {
                W("player:info:size:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.enableInfoRound = function() {
            if (ao) {
                W("player:info:round:enable")
            }
        }
        ;
        this.disableInfoRound = function() {
            if (ao) {
                W("player:info:round:disable")
            }
        }
        ;
        this.setupControlAction = function(bc) {
            if (ao) {
                W("player:control:action:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupButton = function(bc, bd) {
            if (ao && a.isId(bc)) {
                W("player:button:" + bc + ":setup", bd)
            }
        }
        ;
        this.enableButton = function(bc) {
            if (ao && a.isId(bc)) {
                W("player:button:" + bc + ":enable")
            }
        }
        ;
        this.disableButton = function(bc) {
            if (ao && a.isId(bc)) {
                W("player:button:" + bc + ":disable")
            }
        }
        ;
        this.resetButton = function(bc) {
            if (ao && a.isId(bc)) {
                W("player:button:" + bc + ":reset")
            }
        }
        ;
        this.focusButton = function(bc) {
            if (ao && a.isId(bc)) {
                W("player:button:" + bc + ":focus")
            }
        }
        ;
        this.setupProgressPosition = function(bc) {
            if (ao) {
                W("player:progress:position:" + a.strToNum(bc, -1))
            }
        }
        ;
        this.setupProgressDuration = function(bc) {
            if (ao) {
                W("player:progress:duration:" + a.strToNum(bc, -1))
            }
        }
        ;
        this.setupProgressColor = function(bc) {
            if (ao) {
                W("player:progress:color:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupProgressType = function(bc) {
            if (ao) {
                W("player:progress:type:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.enableProgressMarker = function() {
            if (ao) {
                W("player:progress:marker:enable")
            }
        }
        ;
        this.disableProgressMarker = function() {
            if (ao) {
                W("player:progress:marker:disable")
            }
        }
        ;
        this.invalidateProgressMarker = function() {
            if (ao) {
                W("player:progress:marker:invalidate")
            }
        }
        ;
        this.setupBackground = function(bc) {
            if (ao) {
                W("player:background:" + a.strFullCheck(bc, "default"))
            }
        }
        ;
        this.setupTrigger = function(bc, bd, be) {
            if (ao && a.isFullStr(bc) && a.isFullStr(bd)) {
                if (be === true) {
                    W("trigger:" + bc + ":shot:" + bd)
                } else {
                    W("trigger:" + bc + ":" + bd)
                }
            }
        }
        ;
        this.clearTrigger = function(bc) {
            if (ao && a.isFullStr(bc)) {
                W("trigger:" + bc + ":none")
            }
        }
        ;
        this.refreshPlayer = function() {
            if (ao) {
                W("player:refresh")
            }
        }
        ;
        this.resetPlayer = function() {
            if (ao) {
                W("player:reset")
            }
        }
        ;
        this.cancelResume = function() {
            if (ao) {
                W("resume:cancel")
            }
        }
        ;
        this.requestData = function(bc, be, bd) {
            if (ao) {
                ag(bc, be, bd)
            } else {
                V(be, {
                    error: "Plugin not ready"
                })
            }
        }
        ;
        this.requestInteractionResponse = function(bc, be, bd) {
            if (a.isFullStr(bc)) {
                this.requestData("response:request:interaction:" + bc, be, bd != null ? {
                    requestData: bd
                } : null)
            } else {
                V(be, {
                    error: "Data ID is invalid: '" + bc + "'"
                })
            }
        }
        ;
        this.validateSettings = function(bc) {
            t.invalidateSettings();
            this.requestData("info", function(bd) {
                t.validateSettings(bd);
                V(bc, bd)
            })
        }
        ;
        this.onValidatedSettings = function(bc) {
            if (!t.areSettingsValidated() && !aQ) {
                aQ = true;
                this.validateSettings(function() {
                    aQ = false
                })
            }
            t.onValidatedSettings(bc)
        }
        ;
        this.triggerEvent = function(bc, bd) {
            if (ao && a.isFullStr(bc)) {
                W("event:" + bc, bd)
            }
        }
        ;
        this.setupSteam = function(bc) {
            aJ(bc)
        }
        ;
        this.createSteam = function(bc) {
            return aw(bc)
        }
        ;
        this.resolveToken = function(bc, bd) {
            return aE(bc, bd)
        }
        ;
        this.transformString = function(bc, bd) {
            return R(bc, bd)
        }
        ;
        this.normalizeString = function(bc, bd) {
            return aK(bc, bd)
        }
        ;
        this.transformStringAsync = function(be, bf, bd) {
            var bc = R(be, bf);
            if (a.isFullStr(bc)) {
                this.requestData("string:transform:" + bc, function(bg) {
                    V(bd, {
                        string: a.strFullCheck(bg.string, null)
                    })
                })
            } else {
                V(bd, {
                    string: null
                })
            }
        }
        ;
        this.normalizeStringAsync = function(bd, be, bc) {
            if (a.isFullStr(bd)) {
                this.requestData("string:normalize:" + bd, function(bf) {
                    V(bc, {
                        string: aK(bf.string, be)
                    })
                })
            } else {
                V(bc, {
                    string: null
                })
            }
        }
        ;
        this.transformUrl = function(bc) {
            return n.transformUrl(bc)
        }
        ;
        this.createHashKey = function(bc, bd) {
            return n.createHashKey(bc, bd)
        }
        ;
        this.clearDeviceId = function() {
            n.clearDeviceId()
        }
        ;
        this.getDeviceId = function(bc) {
            return n.getDeviceId(bc)
        }
        ;
        this.requestDeviceId = function(bc) {
            this.requestData("info:extended", function(bd) {
                if (bd.error != null) {
                    V(bc, {
                        error: bd.error
                    })
                } else {
                    V(bc, {
                        deviceId: n.getDeviceId(bd)
                    })
                }
            })
        }
        ;
        this.hasContentObservers = function() {
            return O.hasObservers()
        }
        ;
        this.addContentObserver = function(bc, bd) {
            O.addObserver(bc, bd);
            au(bc)
        }
        ;
        this.removeContentObserver = function(bc) {
            O.removeObserver(bc);
            au()
        }
        ;
        this.clearContentObservers = function() {
            O.clear();
            au()
        }
        ;
        this.init = function() {
            if (!K) {
                ap();
                ai();
                aY()
            }
        }
        ;
        this.commit = function() {
            if (ao) {
                P();
                bb()
            }
        }
        ;
        this.isInitialized = function() {
            return K
        }
        ;
        this.isReady = function() {
            return ao
        }
        ;
        this.startPlayback = function(bc) {
            if (ao) {
                aq(z.PLAYING, true);
                P();
                bb();
                if (bc === true) {
                    aR()
                }
            }
        }
        ;
        this.stopPlayback = function() {
            if (ao) {
                this.setEnded(true, true);
                aD()
            }
        }
        ;
        this.cancelPlayback = function() {
            if (ao) {
                W("player:eject")
            }
        }
        ;
        this.startLoading = function(bc) {
            if (ao) {
                if (U) {
                    W("player:busy:start:player")
                } else {
                    if (!aM.isBusy() || bc !== false) {
                        aM.start(function() {
                            U = true;
                            W("player:busy:start:player")
                        })
                    }
                }
            }
        }
        ;
        this.stopLoading = function() {
            if (ao) {
                aM.stop();
                if (U) {
                    U = false;
                    W("player:busy:stop:player")
                }
            }
        }
        ;
        this.executeHandler = function(bc, be) {
            if (typeof bc == "function") {
                try {
                    if (be != null) {
                        V(be, bc())
                    } else {
                        bc()
                    }
                } catch (bd) {
                    aF("Execute handler failed", bd);
                    if (be != null) {
                        V(be, null)
                    }
                }
            }
        }
    }
    ;
    var y = new function() {
        var N = "interactionPlugin";
        var ar = "irq";
        var ah = 10;
        var aK = 30000;
        var Z = new p("j3RZ!=Y$M5TZ#JPem'P1i(Tf?X3WcGlyCqNeXRbp02HL]I~r!IfO(pvxQ7At%9yq.5=)wm@0o?Js[sUbUH416uhd;_S/Qr,w7vW]jBgND;GazhCL+D%z~8ni+n-B_E-KK42tl[OAV@*E.Ya6$V,&kF)o&Mg98#'ucx/dk*SF");
        var S = null;
        var R = false;
        var au = new o(1000);
        var aC = false;
        var aj = false;
        var ad = null;
        var aB = false;
        var aG = null;
        var aa = function(aO) {
            S = new p(aO)
        };
        var ak = function(aO) {
            if (aC) {
                if (aO == "local") {
                    return S != null ? S.createSteam() : null
                }
                return Z.createSteam()
            }
            return null
        };
        var L = function(aO, aP) {
            if (aC) {
                if (aP == "local") {
                    return S != null ? S.resolveToken(aO) : null
                }
                return Z.resolveToken(aO)
            }
            return null
        };
        var av = function(aO, aP) {
            if (aC) {
                if (aP == "local") {
                    return S != null ? S.transformString(aO) : null
                } else {
                    if (aP == "global") {
                        return Z.transformString(aO)
                    } else {
                        if (aP == "shared") {
                            return n.transformString(S != null ? S.transformString(aO) : aO)
                        }
                    }
                }
                return Z.transformString(S != null ? S.transformString(aO) : aO)
            }
            return null
        };
        var Y = function(aO, aP) {
            if (aC) {
                if (aP == "local") {
                    return S != null ? S.normalizeString(aO) : null
                } else {
                    if (aP == "global") {
                        return Z.normalizeString(aO)
                    } else {
                        if (aP == "shared") {
                            return S != null ? S.normalizeString(n.normalizeString(aO)) : n.normalizeString(aO)
                        }
                    }
                }
                return S != null ? S.normalizeString(Z.normalizeString(aO)) : Z.normalizeString(aO)
            }
            return null
        };
        var aL = 0;
        var aF = {};
        var am = function(aQ) {
            aL++;
            var aO = ar + aL + "_" + g.getTimestamp();
            var aP = {
                timeout: new o(aK),
                callback: aQ
            };
            aF[aO] = aP;
            aP.timeout.start(function() {
                ao(aO, {
                    error: "Request timed out"
                })
            });
            return aO
        };
        var ao = function(aO, aQ) {
            if (aO != null) {
                var aP = aF[aO];
                if (aP != null) {
                    aP.timeout.stop();
                    delete aF[aO];
                    V(aP.callback, aQ)
                }
            }
        };
        var V = function(aQ, aO) {
            if (typeof aQ == "function") {
                try {
                    aQ(aO)
                } catch (aP) {
                    af("Callback error", aP)
                }
            }
        };
        var aJ = new h();
        var ae = new o(500);
        var ap = null;
        var ax = null;
        var ab = function(aO) {
            if (aO != null) {
                if (t.isSameContentState(ap, aO)) {
                    if (!t.isSameContentState(ax, aO)) {
                        if (ax == null) {
                            aO.init = true
                        }
                        ax = t.createChangedContentState(ax, aO);
                        aJ.notifyObservers(ax)
                    }
                } else {
                    ap = aO
                }
            }
            ac()
        };
        var aA = function() {
            if (aC) {
                al("info:content", function(aO) {
                    ab(aO.info != null && aO.info.content != null ? aO.info.content.state : null)
                })
            } else {
                ac()
            }
        };
        var ac = function(aO) {
            if (aJ.hasObservers()) {
                if (a.isFullStr(aO) && ax != null) {
                    aJ.notifyObserver(aO, ax)
                }
                ae.start(aA)
            } else {
                ap = null;
                ax = null;
                ae.stop()
            }
        };
        var T = function(aO, aP) {
            if (a.isFullStr(aO)) {
                W({
                    action: aO,
                    data: aP != null ? aP : null
                })
            }
        };
        var aw = function(aP, aO) {
            if (a.isFullStr(aP)) {
                if (aO !== false) {
                    T("logger:debug:" + aP)
                }
            }
        };
        var at = function(aP, aO, aQ) {
            if (a.isFullStr(aP)) {
                if (aO !== false) {
                    T("logger:success:" + aP, {
                        show: aQ !== false
                    })
                } else {
                    if (aQ !== false) {
                        T("success:" + aP)
                    }
                }
            }
        };
        var aN = function(aP, aO, aQ) {
            if (a.isFullStr(aP)) {
                if (aO !== false) {
                    T("logger:info:" + aP, {
                        show: aQ !== false
                    })
                } else {
                    if (aQ !== false) {
                        T("info:" + aP)
                    }
                }
            }
        };
        var ag = function(aP, aO, aQ) {
            if (a.isFullStr(aP)) {
                if (aO !== false) {
                    T("logger:warn:" + aP, {
                        show: aQ !== false
                    })
                } else {
                    if (aQ !== false) {
                        T("warn:" + aP)
                    }
                }
            }
        };
        var an = function(aP, aO, aQ) {
            if (a.isFullStr(aP)) {
                if (aO !== false) {
                    T("logger:error:" + aP, {
                        show: aQ !== false
                    })
                } else {
                    if (aQ !== false) {
                        T("error:" + aP)
                    }
                }
            }
        };
        var P = function(aO, aP) {
            if (a.isFullStr(aO) && aP != null) {
                if (typeof aP == "object") {
                    T(aO + ":data", aP)
                } else {
                    T(aO + ":" + aP)
                }
            }
        };
        var aE = function(aO) {
            P("menu", aO)
        };
        var X = function(aO) {
            P("content", aO)
        };
        var U = function(aO) {
            P("panel", aO)
        };
        var al = function(aO, aQ, aP) {
            if (a.isFullStr(aO)) {
                if (aP == null) {
                    aP = {}
                }
                aP.requestId = am(aQ);
                aP.dataId = aO;
                T("interaction:commit:" + aO, aP)
            } else {
                V(aQ, {
                    error: "Data ID is invalid: '" + aO + "'"
                })
            }
        };
        var af = function(aO, aP) {
            if (aO != null && aP != null) {
                if (aP.name != null && aP.message != null) {
                    an("Interaction: " + aO + ": " + aP.name + ": " + aP.message)
                } else {
                    an("Interaction: " + aO + ": " + aP)
                }
                if (ad != null && typeof ad.onError == "function") {
                    try {
                        ad.onError(aO, aP)
                    } catch (aQ) {}
                }
            }
        };
        var az = function(aO, aP) {
            T("response:" + aO, aP)
        };
        var ai = function(aO, aP) {
            ao(aO, aP)
        };
        var K = function(aP, aO, aR) {
            if (typeof ad.handleRequest == "function") {
                try {
                    ad.handleRequest(aO, aR, function(aS) {
                        az(aP, aS)
                    })
                } catch (aQ) {
                    af("Handle request failed", aQ);
                    az(aP)
                }
            } else {
                az(aP)
            }
        };
        var aM = function(aP) {
            if (aC && aP != null && ad != null) {
                if (typeof ad.handleEvent == "function") {
                    try {
                        ad.handleEvent(aP)
                    } catch (aO) {
                        af("Handle event failed", aO)
                    }
                }
            }
        };
        var aq = function(aS) {
            if (aC && aS != null && ad != null) {
                if (a.isFullStr(aS.requestId) && a.isFullStr(aS.dataId)) {
                    K(aS.requestId, aS.dataId, aS.data)
                } else {
                    if (aS.data != null && a.isFullStr(aS.data.requestId) && a.isFullStr(aS.data.dataId)) {
                        var aP = {};
                        var aR = aS.data.dataId;
                        var aO = aR.indexOf(":");
                        if (aO > 0) {
                            aR = aR.substr(0, aO)
                        }
                        aP[aR] = aS[aR] != null ? aS[aR] : null;
                        aP.error = a.strFullCheck(aS.error, null);
                        ai(aS.data.requestId, aP)
                    } else {
                        if (typeof ad.handleData == "function") {
                            try {
                                ad.handleData(aS)
                            } catch (aQ) {
                                af("Handle data failed", aQ)
                            }
                        }
                    }
                }
            }
        };
        var aH = function(aO) {
            aG = aO != null && aO.length > 0 ? aO : null
        };
        var Q = function() {
            if (aG != null && aG.length > 0) {
                for (var aO = 0; aO < aG.length; aO++) {
                    aq(aG[aO])
                }
            }
            aG = null
        };
        var aI = function(aO) {
            if (aC && aO != null) {
                if (aG == null) {
                    aG = []
                }
                if (aG.length >= ah) {
                    aG.shift()
                }
                aG.push(aO)
            }
        };
        var O = function(aO) {
            if (!aj || aO === true) {
                aj = true;
                if (ad != null && typeof ad.init == "function") {
                    try {
                        ad.init()
                    } catch (aP) {
                        af("Call init failed", aP)
                    }
                }
            }
        };
        var aD = function(aO) {
            if (!aC || aO === true) {
                aC = true;
                if (ad != null && typeof ad.ready == "function") {
                    try {
                        ad.ready()
                    } catch (aP) {
                        af("Call ready failed", aP)
                    }
                }
                if (ad != null) {
                    Q()
                }
            }
        };
        var ay = function() {
            aC = false;
            e.addEventListener("message", function(aO) {
                if (n.checkOrigin(aO.origin)) {
                    M(aO.data)
                }
            }, false);
            T("interaction:init")
        };
        var M = function(aO) {
            if (aj && aO != null && aO.type === N) {
                if (aO.init === 1 && aC) {
                    return
                }
                if (aO.init === 1) {
                    aH(aO.data);
                    aD()
                } else {
                    if (aO.data != null) {
                        if (a.isFullStr(aO.data.event)) {
                            aM(aO.data)
                        } else {
                            if (ad != null) {
                                aq(aO.data)
                            } else {
                                aI(aO.data)
                            }
                        }
                    }
                }
            }
        };
        var W = function(aP) {
            if (e.parent != null && aP != null) {
                aP.type = N;
                aP.sender = "plugin";
                aP.target = "app";
                try {
                    e.parent.postMessage(aP, "*")
                } catch (aO) {
                    if (e.console != null) {
                        console.error("Post message failed", aO)
                    }
                }
            }
        };
        this.setupHandler = function(aO) {
            ad = aO;
            if (aj) {
                O(true)
            }
            if (aC) {
                aD(true)
            }
        }
        ;
        this.setLoadingDelay = function(aO) {
            au.delay = a.strToNum(aO, au.delay)
        }
        ;
        this.getLoadingDelay = function() {
            return au.delay
        }
        ;
        this.executeAction = function(aO, aP) {
            if (aC) {
                T(aO, aP)
            }
        }
        ;
        this.debug = function(aP, aO) {
            if (aC) {
                aw(aP, aO)
            }
        }
        ;
        this.success = function(aP, aO, aQ) {
            if (aC) {
                at(aP, aO, aQ)
            }
        }
        ;
        this.info = function(aP, aO, aQ) {
            if (aC) {
                aN(aP, aO, aQ)
            }
        }
        ;
        this.warn = function(aP, aO, aQ) {
            if (aC) {
                ag(aP, aO, aQ)
            }
        }
        ;
        this.error = function(aP, aO, aQ) {
            if (aC) {
                an(aP, aO, aQ)
            }
        }
        ;
        this.showMenu = function(aO) {
            if (aC) {
                aE(aO)
            }
        }
        ;
        this.showContent = function(aO) {
            if (aC) {
                X(aO)
            }
        }
        ;
        this.showPanel = function(aO) {
            if (aC) {
                U(aO)
            }
        }
        ;
        this.requestData = function(aO, aQ, aP) {
            if (aC) {
                al(aO, aQ, aP)
            } else {
                V(aQ, {
                    error: "Plugin not ready"
                })
            }
        }
        ;
        this.requestPlayerResponse = function(aO, aQ, aP) {
            if (a.isFullStr(aO)) {
                this.requestData("response:request:player:" + aO, aQ, aP != null ? {
                    requestData: aP
                } : null)
            } else {
                V(aQ, {
                    error: "Data ID is invalid: '" + aO + "'"
                })
            }
        }
        ;
        this.validateSettings = function(aO) {
            t.invalidateSettings();
            this.requestData("info", function(aP) {
                t.validateSettings(aP);
                V(aO, aP)
            })
        }
        ;
        this.onValidatedSettings = function(aO) {
            if (!t.areSettingsValidated() && !aB) {
                aB = true;
                this.validateSettings(function() {
                    aB = false
                })
            }
            t.onValidatedSettings(aO)
        }
        ;
        this.triggerEvent = function(aO, aP) {
            if (aC && a.isFullStr(aO)) {
                T("event:" + aO, aP)
            }
        }
        ;
        this.setupSteam = function(aO) {
            aa(aO)
        }
        ;
        this.createSteam = function(aO) {
            return ak(aO)
        }
        ;
        this.resolveToken = function(aO, aP) {
            return L(aO, aP)
        }
        ;
        this.transformString = function(aO, aP) {
            return av(aO, aP)
        }
        ;
        this.normalizeString = function(aO, aP) {
            return Y(aO, aP)
        }
        ;
        this.transformStringAsync = function(aQ, aR, aP) {
            var aO = av(aQ, aR);
            if (a.isFullStr(aO)) {
                this.requestData("string:transform:" + aO, function(aS) {
                    V(aP, {
                        string: a.strFullCheck(aS.string, null)
                    })
                })
            } else {
                V(aP, {
                    string: null
                })
            }
        }
        ;
        this.normalizeStringAsync = function(aP, aQ, aO) {
            if (a.isFullStr(aP)) {
                this.requestData("string:normalize:" + aP, function(aR) {
                    V(aO, {
                        string: Y(aR.string, aQ)
                    })
                })
            } else {
                V(aO, {
                    string: null
                })
            }
        }
        ;
        this.transformUrl = function(aO) {
            return n.transformUrl(aO)
        }
        ;
        this.createHashKey = function(aO, aP) {
            return n.createHashKey(aO, aP)
        }
        ;
        this.clearDeviceId = function() {
            n.clearDeviceId()
        }
        ;
        this.getDeviceId = function(aO) {
            return n.getDeviceId(aO)
        }
        ;
        this.requestDeviceId = function(aO) {
            this.requestData("info:extended", function(aP) {
                if (aP.error != null) {
                    V(aO, {
                        error: aP.error
                    })
                } else {
                    V(aO, {
                        deviceId: n.getDeviceId(aP)
                    })
                }
            })
        }
        ;
        this.hasContentObservers = function() {
            return aJ.hasObservers()
        }
        ;
        this.addContentObserver = function(aO, aP) {
            aJ.addObserver(aO, aP);
            ac(aO)
        }
        ;
        this.removeContentObserver = function(aO) {
            aJ.removeObserver(aO);
            ac()
        }
        ;
        this.clearContentObservers = function() {
            aJ.clear();
            ac()
        }
        ;
        this.init = function() {
            if (!aj) {
                ay();
                O()
            }
        }
        ;
        this.isInitialized = function() {
            return aj
        }
        ;
        this.isReady = function() {
            return aC
        }
        ;
        this.startLoading = function(aO) {
            if (aC) {
                if (R) {
                    T("interaction:busy:start:interaction")
                } else {
                    if (!au.isBusy() || aO !== false) {
                        au.start(function() {
                            R = true;
                            T("interaction:busy:start:interaction")
                        })
                    }
                }
            }
        }
        ;
        this.stopLoading = function() {
            if (aC) {
                au.stop();
                if (R) {
                    R = false;
                    T("interaction:busy:stop:interaction")
                }
            }
        }
        ;
        this.executeHandler = function(aO, aQ) {
            if (typeof aO == "function") {
                try {
                    if (aQ != null) {
                        V(aQ, aO())
                    } else {
                        aO()
                    }
                } catch (aP) {
                    af("Execute handler failed", aP);
                    if (aQ != null) {
                        V(aQ, null)
                    }
                }
            }
        }
    }
    ;
    e.TVXSettings = k;
    e.TVXStyles = l;
    e.TVXTools = a;
    e.TVXDateTools = g;
    e.TVXDateFormatter = H;
    e.TVXPropertyTools = F;
    e.TVXVideoState = z;
    e.TVXAction = f;
    e.TVXCookies = J;
    e.TVXStorage = d;
    e.TVXUrlParams = B;
    e.TVXOptions = C;
    e.TVXObservers = h;
    e.TVXEventObservers = I;
    e.TVXQueue = x;
    e.TVXWorker = c;
    e.TVXDelay = o;
    e.TVXClick = E;
    e.TVXAjax = j;
    e.TVXLogLevel = s;
    e.TVXLogger = v;
    e.TVXDictionary = q;
    e.TVXClock = i;
    e.TVXDataLoader = u;
    e.TVXServices = A;
    e.TVXDataService = D;
    e.TVXBlobService = r;
    e.TVXRequestService = w;
    e.TVXBusyService = b;
    e.TVXPluginTools = t;
    e.TVXVideoPlugin = G;
    e.TVXInteractionPlugin = y
}
)(window, document);
