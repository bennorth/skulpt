var $builtinmodule = function(name){
    var mod = {};
    var inBrowser = (typeof window != "undefined") && (typeof window.navigator != "undefined");

    function open_tab(url) {
        Sk.builtin.pyCheckType("url", "string", Sk.builtin.checkString(url));
        if (!inBrowser) {
            return Sk.builtin.bool.false$;
        }

        url = url.$jsstr();
        window.open(url, "_blank");

        return Sk.builtin.bool.true$;
    }

    mod.open = new Sk.builtin.func(function open(url) {
        Sk.builtin.pyCheckArgsLen("open", arguments.length + 1, 1, 3);
        return open_tab(url);
    });

    mod.open_new = new Sk.builtin.func(function open_new(url) {
        Sk.builtin.pyCheckArgsLen("open_new", arguments.length + 1, 1, 1);
        return open_tab(url);
    });

    mod.open_new_tab = new Sk.builtin.func(function open_new_tab(url) {
        Sk.builtin.pyCheckArgsLen("open_new_tab", arguments.length + 1, 1, 1);
        return open_tab(url);
    });

    return mod;
};
