const kpmpMembers = [
    {
        short: 'umneptune',
        institution: "0: University of Michigan",
        entityId: "https://shibboleth.umich.edu/idp/shibboleth"
    },
    {
        short: 'columbiacure',
        institution: '01: Columbia University',
        entityId: 'urn:mace:incommon:columbia.edu'
    },
    {
        short: "nyuneptune",
        institution: "01: NYUMC",
        entityId: "urn:mace:incommon:nyu.edu"
    },
    {
        short: "jhopneptune",
        institution: "02: Johns-Hopkins",
        entityId: "urn:mace:incommon:johnshopkins.edu"
    },
    {
        short: "dukecure",
        institution: "04: Duke Children’s Hospital Medical Center",
        entityId: "urn:mace:incommon:duke.edu"
    },
    {
        short: 'cchmccure',
        institution: "05: Cincinnati Children's Hospital Medical Center",
        entityId: "https://access.research.cchmc.org/fed/idp"
    },
    {
        short: "texastechcure",
        institution: "07: Texas Tech University Health Sciences Center",
        entityId: "https://msidp.ttuhsc.edu/adfs/services/trust"

    },
    {
        short: "emroycure",
        institution: "08: Emroy University",
        entityId: "https://login.emory.edu/idp/shibboleth"
    },
    {
        short: "umncure",
        institution: "11: University of Minnesota Children’s Hospital",
        entityId: "urn:mace:incommon:umn.edu"
    },
    {
        short: "nationwidecure",
        institution: "14: Nationwide Children's Hospital",
        entityId: "https://sso.nationwidechildrens.org/idp"
    },
    {
        short: "wisconsincure",
        institution: "17: University of Wisconsin, Madison",
        entityId: "https://login.wisc.edu/idp/shibboleth"
    },
    {
        short: "ohsucure",
        institution: "18: Oregon Health and Science University",
        entityId: "https://idp.ohsu.edu/idp/shibboleth"
    },
    {
        short: "uabchildcure",
        institution: "19: University of Alabama, Birmingham, Children’s of Alabama",
        entityId: "urn:mace:incommon:uab.edu"
    },
    {
        short: "caseneptune",
        institution: "20: Case Western Reserve University",
        entityId: "urn:mace:incommon:case.edu"
    },
    {
        short: "wustlcure",
        institution: "22: Washington University/ St. Louis School of Medicine",
        entityId: "https://login.wustl.edu/idp/shibboleth"
    },
    {
        short: "uclaneptune",
        institution: "22: Harbor - UCLA",
        entityId: "urn:mace:incommon:ucla.edu"
    },
    {
        short: "miamicure",
        institution: "24: University of Miami (Pediatric)",
        entityId: "https://caneid.miami.edu/idp/shibboleth"
    },
    {
        short: "mayoadultneptune",
        institution: "24: Mayo Clinic",
        entityId: "http://login.mayo.edu/adfs/services/trust"
    },
    {
        short: "ukycure",
        institution: "25: University of Kentucky",
        entityId: "https://ukidp.uky.edu/idp/shibboleth"
    },
    {
        short: "virginiacure",
        institution: "26: University of Virginia",
        entityId: "urn:mace:incommon:virginia.edu"
    },
    {
        short: "miamiadultneptune",
        institution: "26: University of Miami",
        entityId: "https://caneid.miami.edu/idp/shibboleth"
    },
    {
        short: "ecucure",
        institution: "27: East Carolina University",
        entityId: "https://sso.ecu.edu/idp/shibboleth"
    },
    {
        short: "oucure",
        institution: "28: University of Oklahoma Health Sciences Center",
        entityId: "https://shib.ou.edu/idp/shibboleth"
    },
    {
        short: "upennneptune",
        institution: "28: University of Pennsylvania",
        entityId: "https://idp.pennkey.upenn.edu/idp/shibboleth"
    },
    {
        short: "ucdenvercure",
        institution: "29: University of Colorado-Children’s Colorado",
        entityId: "https://idcs-6dfbdd810afa4d509f6cfc191d612acd.identity.oraclecloud.com:443/fed"
    },
    {
        short: 'uwneptune',
        institution: '29: University of Washington',
        entityId: 'urn:mace:incommon:washington.edu'
    },
    {
        short: "mayochildcure",
        institution: "31: Mayo Clinic (Pediatric)",
        entityId: "http://login.mayo.edu/adfs/services/trust"
    },
    {
        short: 'columbianeptune',
        institution: '31: Columbia University',
        entityId: 'urn:mace:incommon:columbia.edu'
    },
    {
        short: "templeneptune",
        institution: "32: Temple University",
        entityId: "https://fim.temple.edu/idp/shibboleth"
    },
    {
        short: "upenncure",
        institution: "33: University of Pennsylvania",
        entityId: "https://idp.pennkey.upenn.edu/idp/shibboleth"
    },
    {
        short: "emroyneptune",
        institution: "33: Emroy University",
        entityId: "https://login.emory.edu/idp/shibboleth"
    },
    {
        short: "cwrucure",
        institution: "34: Case Western University",
        entityId: "urn:mace:incommon:case.edu"
    },
    {
        short: "wfuneptune",
        institution: "34: Wake Forest",
        entityId: "https://webauth.wfunet.wfu.edu/saml/saml2/idp/metadata.php"
    },
    {
        short: "jhopcure",
        institution: "36: Johns Hopkins University",
        entityId: "urn:mace:incommon:johnshopkins.edu"
    },
    {
        short: "stanfordneptune",
        institution: "36: Stanford University",
        entityId: "urn:mace:incommon:stanford.edu"
    },
    {
        short: "mayoadultcure",
        institution: "37: Mayo Clinic (Adult)",
        entityId: "http://login.mayo.edu/adfs/services/trust"
    },
    {
        short: "umnneptune",
        institution: "37: University of Minnesota",
        entityId: "urn:mace:incommon:umn.edu"
    },
    {
        short: "dukeneptune",
        institution: "39: Duke Universiy",
        entityId: "urn:mace:incommon:duke.edu"
    },
    {
        short: "nyucure",
        institution: "40: New York University",
        entityId: "urn:mace:incommon:nyu.edu"
    },
    {
        short: "utsouthneptune",
        institution: "40: University of Texas Southwestern",
        entityId: "https://shib2.swmed.edu/idp/shibboleth"
    },
    {
        short: "stanfordcure",
        institution: "43: Stanford University",
        entityId: "urn:mace:incommon:stanford.edu"
    },
    {
        short: "kumcneptune",
        institution: "43: Kansas University Medical Center",
        entityId: "https://cas.kumc.edu/idp/shibboleth"
    },
    {
        short: "muscneptune",
        institution: "44: Medical University of South Carolina",
        entityId: "https://shibbolethidp.musc.edu/idp/shibboleth"
    },
    {
        short: "miamiadultcure",
        institution: "45: University of Miami (Adult)",
        entityId: "https://caneid.miami.edu/idp/shibboleth"
    },
    {
        short: "osuneptune",
        institution: "45: Ohio State University",
        entityId: "urn:mace:incommon:osu.edu"
    },
    {
        short: 'umcure',
        institution: '46: University of Michigan',
        entityId: 'https://shibboleth.umich.edu/idp/shibboleth'
    },
    {
        short: "ucsfneptune",
        institution: "46: University of California at San Francisco",
        entityId: "urn:mace:incommon:ucsf.edu"
    },
    {
        short: 'chopcure',
        institution: "47: Children's Hospital of Philadelphia",
        entityId: "https://idp.chop.edu/idp/shibboleth"
    },
    {
        short: 'uwcure',
        institution: '50: University of Washington',
        entityId: 'urn:mace:incommon:washington.edu'
    },
    {
        short: "templecure",
        institution: "53: Temple University",
        entityId: "https://fim.temple.edu/idp/shibboleth"
    },
    {
        short: "utsouthcure",
        institution: "55: UT Southwestern",
        entityId: "https://shib2.swmed.edu/idp/shibboleth"
    },
    {
        short: "uabcure",
        institution: "58: University of Alabama at Birmingham",
        entityId: "urn:mace:incommon:uab.edu"
    },
    {
        short: "vcucure",
        institution: "59: Virginia Commonwealth University",
        entityId: "https://shibboleth.vcu.edu/idp/shibboleth"
    },
    {
        short: "vucure",
        institution: "60: Vanderbilt University",
        entityId: "https://sso-login.vanderbilt.edu"
    },
    {
        short: "unmcure",
        institution: "63: University of New Mexico Health Sciences Center",
        entityId: "https://unmpidp.unm.edu/idp/shibboleth"
    },
    {
        short: "chidrensnationalcure",
        institution: "67: Children’s National Medical Center",
        entityId: "http://fs.childrensnational.org/adfs/services/trust"
    },
    {
        short: "osucure",
        institution: "69: Ohio State University",
        entityId: "urn:mace:incommon:osu.edu"
    },
    {
        short: "musccure",
        institution: "70: Medical University of South Carolina (MUSC – adults only)",
        entityId: "https://shibbolethidp.musc.edu/idp/shibboleth"
    },
    {
        short: "northwesterncure",
        institution: "71: Northwestern University",
        entityId: "urn:mace:incommon:northwestern.edu"
    },
    {
        short: "ucdenverneptune",
        institution: "148: Children's Hospital Colorado Anschutz",
        entityId: "https://idcs-6dfbdd810afa4d509f6cfc191d612acd.identity.oraclecloud.com:443/fed"
    },
    {
        short: "columbiadiabetes",
        institution: "401: Columbia University",
        entityId: "urn:mace:incommon:columbia.edu"
    },
    {
        short: "upenndiabetes",
        institution: "433: University of Pennsylvania",
        entityId: "https://idp.pennkey.upenn.edu/idp/shibboleth"
    },
    {
        short: "uabdiabetes",
        institution: "458: University of Alabama at Birmingham",
        entityId: "urn:mace:incommon:uab.edu"
    },
    {
        short: "vcudiabetes",
        institution: "459: Virginia Commonwealth University",
        entityId: "https://shibboleth.vcu.edu/idp/shibboleth"
    },
    {
        short: "osudiabetes",
        institution: "469: Ohio State University",
        entityId: "urn:mace:incommon:osu.edu"
    }

].sort(function (a, b) {
    if (a.institution < b.institution) return -1;
    if (a.institution > b.institution) return 1;
    return 0;
});

function idpOption(member) {
    return '<li class="idp-option" id="' + member.short + '"><div class="idp-option-text">' + member.institution + '</div></li>';
}

// TODO(cspital) refactor this to be more flexible
function getShibbolethParams() {
    const specParams = ['policy=', 'returnIDParam=', 'isPassive='];
    const url = window.location.search.substr(1);
    const result = {};
    if (!url) {
        return result;
    }
    let target = url.split('return=');
    if (target.length !== 2) {
        return result;
    }
    target = target[1];
    for (let maybe in specParams) {
        const extra = target.split(specParams[maybe], 1);
        if (extra.length) {
            target = extra[0];
        }
    }
    if (target.charAt(target.length - 1) === '&') {
        target = target.substring(0, target.length - 1);
    }
    target = decodeURIComponent(target);
    result['return'] = target;
    return result;
}

const params = Object.freeze(getShibbolethParams());

function setCookie(key, value, days) {
    if (!value) return;
    const exp = new Date();
    const shift = days || 365;
    exp.setTime(exp.getTime() + shift * 24 * 60 * 60 * 1000);
    expires = 'expires=' + exp.toUTCString() + ';';
    document.cookie = key + '=' + value + ';' + expires;
}

function deleteCookie(key) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 365 * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + exp.toUTCString();
    document.cookie = key + '=;' + expires + ';';
}

function getCookie(key) {
    const name = key + '=';
    const decoded = document.cookie;
    const all = decoded.split(';');
    for (let i = 0; i < all.length; i++) {
        let c = all[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

const baseUrl = 'https://welcome.kpmp.org/Shibboleth.sso/Login?';

function getRedirectUri(homebase) {
    const url = baseUrl;
    const entity = 'entityID=' + homebase.entityId;

    let target = '';
    if (params.return) {
        target = params.return + '&';
    } else {
        console.warn("KPMP wasn't told where to redirect back to, defaulting.");
        // TODO(cspital) figure out a sane fallback if there is no target
        // target = '&target=/';
        target = 'https://welcome.kpmp.org/Shibboleth.sso/Login?' + '&SAMLDS=1&target=%2F&';
    }

    let extra = '';
    if (homebase.extra) {
        extra = '&' + encodeURIComponent(homebase.extra);
    }

    return target + entity + extra;
}

$('#idp-dropdown-btn').click(function () {
    setTimeout(function () { $('#idp-search').focus() }, 0);
});

$(document).on('click', '.idp-option', function (e) {
    let recv = e.target;
    if (recv.nodeName === 'DIV' && recv.classList.contains('idp-option-text')) {
        recv = recv.parentNode;
    }
    const id = recv.id;
    const member = kpmpMembers.filter(function (m) { return m.short === id })[0];
    const btn = $('#idp-dropdown-instr');
    btn.text(member.institution);
    btn.data('short', id);
});

$('#idp-search').on('input', function (e) {
    const value = e.target.value.toLowerCase().trim();
    if (!value) {
        for (let idp in ALL_IDPS) {
            $(ALL_IDPS[idp]).show();
        }
        return;
    }

    for (let idp in ALL_IDPS) {
        const elem = $(ALL_IDPS[idp]);
        const inner = elem.text().toLowerCase().trim();
        if (inner.indexOf(value) === -1) {
            elem.hide();
        } else {
            elem.show();
        }
    }
});

$('#idp-select-btn').click(function (e) {
    const remember = $('#remember-me-check')[0];
    const short = $('#idp-dropdown-instr').data('short');
    if (!short) {
        return;
    }

    let homebase = kpmpMembers.filter(function (m) { return m.short === short });
    if (!homebase.length) {
        return;
    }

    homebase = homebase[0];
    if (remember.checked) {
        setCookie('homebase', homebase.short);
    } else {
        deleteCookie('homebase');
    }

    const target = getRedirectUri(homebase);
    window.location.href = target;
});

let ALL_IDPS
$(function () {
    const idps = kpmpMembers.map(idpOption);
    $('#idp-list').html(idps);
    $('#idp-search').val('');
    ALL_IDPS = $('.idp-option');

    const short = getCookie('homebase');
    if (short) {
        $('#remember-me-check')[0].checked = true;

        let homebase = kpmpMembers.filter(function (m) { return m.short === short });
        if (homebase.length) {
            homebase = homebase[0];
            const btn = $('#idp-dropdown-instr');
            btn.text(homebase.institution);
            btn.data('short', homebase.short);
        } else {
            deleteCookie('homebase');
        }
    }
});
