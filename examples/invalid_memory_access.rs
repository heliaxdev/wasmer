use anyhow::Result;
use wasmer::{imports, wat2wasm, Instance, Module, Store, Value};
use wasmer_compiler_singlepass::Singlepass;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Let's declare the Wasm module with the text representation.
    let wasm_bytes = wat2wasm(
        r#"
    (module
      (type $sum_t (func (param i32 i32) (result i32)))
      (func $sum_f (type $sum_t) (param $x i32) (param $y i32) (result i32)
        local.get $x
        local.get $y
        i32.add)
      (export "sum" (func $sum_f))
    )
    "#
        .as_bytes(),
    )?;

    let mut module: Option<Module> = None;

    for i in 0..2 {
        println!("Iteration {i}...");

        let compiler = Singlepass::default();
        let mut store = Store::new(compiler);
        let module = match &module {
            Some(module) => module.clone(),
            None => {
                module = Some(Module::new(&store, &wasm_bytes).unwrap());
                module.as_ref().unwrap().clone()
            }
        };
        let import_object = imports! {};

        println!("Instantiating module...");
        // Let's instantiate the Wasm module.
        let instance = Instance::new(&mut store, &module, &import_object)?;

        let sum = instance.exports.get_function("sum")?;

        println!("Calling `sum` function...");
        // Let's call the `sum` exported function. The parameters are a
        // slice of `Value`s. The results are a boxed slice of `Value`s.
        // let _results = sum.call(&mut store, 0_i32, 0_i32);

        if i == 1 {
            println!("The next call will segfault");
        }
        let _results = sum.call(&mut store, &[Value::I32(1), Value::I32(2)]);

        println!("Iteration {i} done.");
        println!();
    }
    Ok(())
}
