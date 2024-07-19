const kpmpMembers = [
    {
        short: 'lsuhsc',
        institution: "Louisiana State University Health Sciences Center - New Orleans",
        entityId: "https://sso.lsuhsc.edu/idp"
    },
    {
        short: 'ucla',
        institution: "University of California, Los Angeles",
        entityId: "urn:mace:incommon:ucla.edu"
    },
    {
        short: 'einsteinmed',
        institution: "Albert Einstein College of Medicine",
        entityId: "https://vbushib.einsteinmed.org/idp/"
    },
    {
        short: 'msu',
        institution: "Michigan State University",
        entityId: "urn:mace:incommon:msu.edu"
    },
    {
        short: 'childrensmercy',
        institution: "Children's Mercy Kansas City",
        entityId: "https://iam.research.childrensmercy.org/idp/shibboleth"
    },
    {
        short: 'nih',
        institution: "National Institutes of Health (NIH)",
        entityId: "urn:mace:incommon:nih.gov"
    },
    {
        short: 'case',
        institution: "Case Western Reserve University",
        entityId: "urn:mace:incommon:case.edu"
    },
    {
        short: 'warsaw',
        institution: "Medical University of Warsaw",
        entityId: "https://edugain.wum.edu.pl/idp/shibboleth"
    },
    {
        short: 'rush',
        institution: "Rush University Medical Center",
        entityId: "https://shibboleth.rush.edu/idp/shibboleth"
    },
    {
        short: 'vanderbilt',
        institution: "Vanderbilt University",
        entityId: "https://sso-login.vanderbilt.edu"
    },
    {
        short: 'pitt',
        institution: "University of Pittsburgh",
        entityId: "https://passport.pitt.edu/idp/shibboleth"
    },
    {
        short: 'uconn',
        institution: "University of Connecticut",
        entityId: "https://shibboleth.uconn.edu/idp/shibboleth"
    },
    {
        short: 'mcw',
        institution: "Medical College of Wisconsin",
        entityId: "https://shib.mcw.edu/idp/shibboleth"
    },
    {
        short: 'uiowa',
        institution: "University of Iowa",
        entityId: "urn:mace:incommon:uiowa.edu"
    },
    {
        short: 'unc',
        institution: "University of North Carolina at Chapel Hill",
        entityId: "urn:mace:incommon:unc.edu"
    },
    {
        short: 'baylor',
        institution: "Baylor University",
        entityId: "https://shibboleth-2.baylor.edu/idp/shibboleth"
    },
    {
        short: 'iu',
        institution: "Indiana University",
        entityId: "https://idp.login.iu.edu/idp/shibboleth"
    },
    {
        short: 'umich',
        institution: "University of Michigan",
        entityId: "https://shibboleth.umich.edu/idp/shibboleth"
    },
    {
        short: 'utoronto',
        institution: "University of Toronto",
        entityId: "https://idpz.utorauth.utoronto.ca/shibboleth"
    },
    {
        short: 'gaslini',
        institution: "IRCCS Istituto Giannina Gaslini - Genova",
        entityId: "https://idp-gaslini.irccs.garr.it/idp/shibboleth"
    },
    {
        short: 'columbia',
        institution: 'Columbia University',
        entityId: 'urn:mace:incommon:columbia.edu'
    },
    {
        short: "nyumc",
        institution: "NYUMC",
        entityId: "urn:mace:incommon:nyu.edu"
    },
    {
        short: "jhop",
        institution: "Johns Hopkins",
        entityId: "urn:mace:incommon:johnshopkins.edu"
    },
    {
        short: "duke",
        institution: "Duke University",
        entityId: "urn:mace:incommon:duke.edu"
    },
    {
        short: 'cchmc',
        institution: "Cincinnati Children's Hospital Medical Center",
        entityId: "https://access.research.cchmc.org/fed/idp"
    },
    {
        short: "texastech",
        institution: "Texas Tech University Health Sciences Center",
        entityId: "https://msidp.ttuhsc.edu/adfs/services/trust"

    },
    {
        short: "Emory",
        institution: "Emory University",
        entityId: "https://login.emory.edu/idp/shibboleth"
    },
    {
        short: "nationwide",
        institution: "Nationwide Children's Hospital",
        entityId: "https://sso.nationwidechildrens.org/idp"
    },
    {
        short: "wisconsin",
        institution: "University of Wisconsin, Madison",
        entityId: "https://login.wisc.edu/idp/shibboleth"
    },
    {
        short: "ohsu",
        institution: "Oregon Health and Science University",
        entityId: "https://idp.ohsu.edu/idp/shibboleth"
    },
    {
        short: "uab",
        institution: "University of Alabama at Birmingham",
        entityId: "urn:mace:incommon:uab.edu"
    },
    {
        short: "wustl",
        institution: "Washington University/ St. Louis School of Medicine",
        entityId: "https://login.wustl.edu/idp/shibboleth"
    },
    {
        short: "ucla",
        institution: "Harbor - UCLA",
        entityId: "urn:mace:incommon:ucla.edu"
    },
    {
        short: "mayo",
        institution: "Mayo Clinic",
        entityId: "http://login.mayo.edu/adfs/services/trust"
    },
    {
        short: "uky",
        institution: "University of Kentucky",
        entityId: "https://ukidp.uky.edu/idp/shibboleth"
    },
    {
        short: "virginia",
        institution: "University of Virginia",
        entityId: "urn:mace:incommon:virginia.edu"
    },
    {
        short: "miami",
        institution: "University of Miami",
        entityId: "https://caneid.miami.edu/idp/shibboleth"
    },
    {
        short: "ecu",
        institution: "East Carolina University",
        entityId: "https://sso.ecu.edu/idp/shibboleth"
    },
    {
        short: "ou",
        institution: "University of Oklahoma",
        entityId: "https://shib.ou.edu/idp/shibboleth"
    },
    {
        short: "upenn",
        institution: "University of Pennsylvania",
        entityId: "https://idp.pennkey.upenn.edu/idp/shibboleth"
    },
    {
        short: "uoc",
        institution: "University of Colorado",
        entityId: "https://idcs-6dfbdd810afa4d509f6cfc191d612acd.identity.oraclecloud.com:443/fed"
    },
    {
        short: 'uw',
        institution: 'University of Washington',
        entityId: 'urn:mace:incommon:washington.edu'
    },
    {
        short: "temple",
        institution: "Temple University",
        entityId: "https://fim.temple.edu/idp/shibboleth"
    },
    {
        short: "wfu",
        institution: "Wake Forest",
        entityId: "https://webauth.wfunet.wfu.edu/saml/saml2/idp/metadata.php"
    },
    {
        short: "stanford",
        institution: "Stanford University",
        entityId: "urn:mace:incommon:stanford.edu"
    },
    {
        short: "umn",
        institution: "University of Minnesota",
        entityId: "urn:mace:incommon:umn.edu"
    },
    {
        short: "umontreal",
        institution: "Université de Montréal",
        entityId: "https://shibboleth.umontreal.ca/idp/shibboleth"
    },
    {
        short: "utsouth",
        institution: "University of Texas Southwestern",
        entityId: "https://shib2.swmed.edu/idp/shibboleth"
    },
    {
        short: "kumc",
        institution: "Kansas University Medical Center",
        entityId: "https://cas.kumc.edu/idp/shibboleth"
    },
    {
        short: "musc",
        institution: "Medical University of South Carolina",
        entityId: "https://shibbolethidp.musc.edu/idp/shibboleth"
    },
    {
        short: "ucsf",
        institution: "University of California at San Francisco",
        entityId: "urn:mace:incommon:ucsf.edu"
    },
    {
        short: 'chop',
        institution: "Children's Hospital of Philadelphia",
        entityId: "https://idp.chop.edu/idp/shibboleth"
    },
    {
        short: "vcu",
        institution: "Virginia Commonwealth University",
        entityId: "https://shibboleth.vcu.edu/idp/shibboleth"
    },
    {
        short: "vu",
        institution: "Vanderbilt University",
        entityId: "https://sso-login.vanderbilt.edu"
    },
    {
        short: "unm",
        institution: "University of New Mexico Health Sciences Center",
        entityId: "https://unmpidp.unm.edu/idp/shibboleth"
    },
    {
        short: "chidrensnational",
        institution: "Children’s National Medical Center",
        entityId: "http://fs.childrensnational.org/adfs/services/trust"
    },
    {
        short: "osu",
        institution: "Ohio State University",
        entityId: "urn:mace:incommon:osu.edu"
    },
    {
        short: "northwestern",
        institution: "Northwestern University",
        entityId: "urn:mace:incommon:northwestern.edu"
    },

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

const baseUrl = 'https://upload.miktmc.org/Shibboleth.sso/Login?';

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
        target = 'https://upload.miktmc.org/Shibboleth.sso/Login?' + '&SAMLDS=1&target=%2F&';
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

$('#google-btn').click(function (e) {
    const cirrusGoogleUrls = {
        "upload.miktmc.org": "https://apps.cirrusidentity.com/console/ds/s/r1dyvtf5?idpentityid=https%3A%2F%2Fgoogle.cirrusidentity.com%2Fgateway&origParams=eyJlbnRpdHlJRCI6Imh0dHBzOi8vdXBsb2FkLm1pa3RtYy5vcmcvc2hpYmJvbGV0aCIsImNhY2hlIjoibm9uZSIsImlkIjoiaW5kZXgifQ%3D%3D",
        "qa-upload.miktmc.org": "https://apps.cirrusidentity.com/console/ds/s/qfk839dl?idpentityid=https%3A%2F%2Fgoogle.cirrusidentity.com%2Fgateway&origParams=eyJlbnRpdHlJRCI6Imh0dHBzOi8vcWEtdXBsb2FkLm1pa3RtYy5vcmcvc2hpYmJvbGV0aCIsImNhY2hlIjoibm9uZSIsImlkIjoiaW5kZXgifQ%3D%3D",
        "dev-upload.mikmc.org": "https://apps.cirrusidentity.com/console/ds/s/vpn86rdu?idpentityid=https%3A%2F%2Fgoogle.cirrusidentity.com%2Fgateway&origParams=eyJlbnRpdHlJRCI6Imh0dHBzOi8vZGV2LXVwbG9hZC5taWt0bWMub3JnL3NoaWJib2xldGgiLCJjYWNoZSI6Im5vbmUiLCJpZCI6ImluZGV4In0%3D"
    }
    let target = '';
    let url = new URL(params.return);
    if (params.return && cirrusGoogleUrls[url.hostname]) {
        target = cirrusGoogleUrls[url.hostname]
    } else {
        target = cirrusGoogleUrls["https://qa-upload.miktmc.org/"]
    }
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
