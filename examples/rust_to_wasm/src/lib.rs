struct Foo {
    var: i32,
}

impl Foo {
    fn method(&mut self, value: i32) -> i32 {
        self.var += value;
        println!("var = {}", self.var);
        self.var
    }
}

#[no_mangle]
extern "C" fn sum(tx_data_ptr: i32, tx_data_len: i32) -> i32 {
    let mut foo = Foo { var: 11 };
    let func_ptr = Foo::method;
    func_ptr(&mut foo, 12)
}
