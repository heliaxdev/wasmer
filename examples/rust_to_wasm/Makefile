cargo := $(env) cargo

all:
	$(cargo) build --release --target wasm32-unknown-unknown && \
	cp "./target/wasm32-unknown-unknown/release/rust_to_wasm.wasm" ../rust_to_wasm.wasm

.PHONY : all
