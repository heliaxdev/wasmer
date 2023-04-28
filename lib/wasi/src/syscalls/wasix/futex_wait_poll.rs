use std::task::Waker;

use wasmer_wasix_types::wasi::WakerId;

use super::*;
use crate::{state::conv_waker_id, syscalls::*};

/// Polls to wait for a futex_wake operation to wake us.
///
/// Instead of going to sleep a waker will be registered that will
/// be woken when this futex is triggered.
///
/// Returns with EINVAL if the futex doesn't hold the expected value.
/// Returns false on timeout, and true in all other cases.
///
/// ## Parameters
///
/// * `futex` - Memory location that holds the value that will be checked
/// * `expected` - Expected value that should be currently held at the memory location
/// * `timeout` - Timeout should the futex not be triggered in the allocated time
//#[instrument(level = "trace", skip_all, fields(futex_idx = field::Empty, poller_idx = field::Empty, %expected, timeout = field::Empty, woken = field::Empty), err)]
pub fn futex_wait_poll<M: MemorySize + 'static>(
    ctx: FunctionEnvMut<'_, WasiEnv>,
    futex_ptr: WasmPtr<u32, M>,
    expected: u32,
    waker: WakerId,
    timeout: WasmPtr<OptionTimestamp, M>,
    ret_woken: WasmPtr<Bool, M>,
) -> Result<Errno, WasiError> {
    let waker = conv_waker_id(ctx.data().state(), waker);
    futex_wait_internal(ctx, futex_ptr, expected, timeout, ret_woken, Some(&waker))
}
