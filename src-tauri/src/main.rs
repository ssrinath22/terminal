// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::command;
use std::process::Command;

#[command]
fn execute_shell_command(command: String) -> String {
    let echo_hello = Command::new("sh")
        .arg("-c")
        .arg(command)
        .output()
        .expect("failed to execute process");

    let hello_1 = echo_hello.stdout;

    // Convert the output from bytes to a String
    let output_string = String::from_utf8(hello_1).expect("Invalid UTF-8 sequence");

    // Return the output as a String
    output_string
}


fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![execute_shell_command])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
