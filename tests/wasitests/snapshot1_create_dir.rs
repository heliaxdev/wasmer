// !!! THIS IS A GENERATED FILE !!!
// ANY MANUAL EDITS MAY BE OVERWRITTEN AT ANY TIME
// Files autogenerated with cargo build.

#[test]
fn test_snapshot1_create_dir() {
    assert_wasi_output!(
        "../wasi_test_resources/snapshot1/create_dir.wasm",
        "snapshot1_create_dir",
        vec![std::path::PathBuf::from("."),],
        vec![],
        vec![],
        "../wasi_test_resources/create_dir.out"
    );
}