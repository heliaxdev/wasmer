(function() {var implementors = {};
implementors["wasmer_emscripten"] = [{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_emscripten/env/struct.EmAddrInfo.html\" title=\"struct wasmer_emscripten::env::EmAddrInfo\">EmAddrInfo</a>","synthetic":false,"types":["wasmer_emscripten::env::EmAddrInfo"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_emscripten/env/struct.EmSockAddr.html\" title=\"struct wasmer_emscripten::env::EmSockAddr\">EmSockAddr</a>","synthetic":false,"types":["wasmer_emscripten::env::EmSockAddr"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, Ty&gt; <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_emscripten/ptr/struct.WasmPtr.html\" title=\"struct wasmer_emscripten::ptr::WasmPtr\">WasmPtr</a>&lt;T, Ty&gt;","synthetic":false,"types":["wasmer_emscripten::ptr::WasmPtr"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_emscripten/syscalls/unix/struct.EmPollFd.html\" title=\"struct wasmer_emscripten::syscalls::unix::EmPollFd\">EmPollFd</a>","synthetic":false,"types":["wasmer_emscripten::syscalls::unix::EmPollFd"]}];
implementors["wasmer_runtime_core"] = [];
implementors["wasmer_wasi"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, Ty&gt; <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/ptr/struct.WasmPtr.html\" title=\"struct wasmer_wasi::ptr::WasmPtr\">WasmPtr</a>&lt;T, Ty&gt;","synthetic":false,"types":["wasmer_wasi::ptr::WasmPtr"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_ciovec_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_ciovec_t\">__wasi_ciovec_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_ciovec_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_dirent_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_dirent_t\">__wasi_dirent_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_dirent_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_event_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_event_t\">__wasi_event_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_event_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_prestat_u_dir_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_prestat_u_dir_t\">__wasi_prestat_u_dir_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_prestat_u_dir_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"union\" href=\"wasmer_wasi/syscalls/types/union.__wasi_prestat_u.html\" title=\"union wasmer_wasi::syscalls::types::__wasi_prestat_u\">__wasi_prestat_u</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_prestat_u"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_prestat_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_prestat_t\">__wasi_prestat_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_prestat_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_fdstat_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_fdstat_t\">__wasi_fdstat_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_fdstat_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_filestat_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_filestat_t\">__wasi_filestat_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_filestat_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_iovec_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_iovec_t\">__wasi_iovec_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_iovec_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/struct.__wasi_subscription_t.html\" title=\"struct wasmer_wasi::syscalls::types::__wasi_subscription_t\">__wasi_subscription_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::__wasi_subscription_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/snapshot0/struct.__wasi_subscription_t.html\" title=\"struct wasmer_wasi::syscalls::types::snapshot0::__wasi_subscription_t\">__wasi_subscription_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::snapshot0::__wasi_subscription_t"]},{"text":"impl <a class=\"trait\" href=\"wasmer_runtime_core/types/trait.ValueType.html\" title=\"trait wasmer_runtime_core::types::ValueType\">ValueType</a> for <a class=\"struct\" href=\"wasmer_wasi/syscalls/types/snapshot0/struct.__wasi_filestat_t.html\" title=\"struct wasmer_wasi::syscalls::types::snapshot0::__wasi_filestat_t\">__wasi_filestat_t</a>","synthetic":false,"types":["wasmer_wasi::syscalls::types::snapshot0::__wasi_filestat_t"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()