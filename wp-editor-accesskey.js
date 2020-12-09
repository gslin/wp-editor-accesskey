(() => {
    const mappings = {
        'qt_content_block': 'q',
        'qt_content_code': 'c',
        'qt_content_del': 'd',
        'qt_content_em': 'i',
        'qt_content_img': 'm',
        'qt_content_ins': 's',
        'qt_content_li': 'l',
        'qt_content_link': 'a',
        'qt_content_more': 't',
        'qt_content_ol': 'o',
        'qt_content_strong': 'b',
        'qt_content_ul': 'u',
    };

    let observer = new MutationObserver(() => {
        for (let k of Object.keys(mappings)) {
            let el = document.getElementById(k);
            if (!el) {
                continue;
            }

            el.setAttribute('accesskey', mappings[k]);
        };
    });

    let oel = document.getElementsByClassName('wrap');
    if (0 === oel.length) {
        return;
    }
    oel = oel[0];

    observer.observe(oel, {
        attributes: false,
        childList: true,
        subtree: true,
    });

    console.debug('wp-editor-accesskey initialized.');
})();
