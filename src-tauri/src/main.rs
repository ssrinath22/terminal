// // Prevents additional console window on Windows in release, DO NOT REMOVE!!
// #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use tauri::command;
// use std::process::Command;

// #[command]
// fn execute_shell_command(command: String) -> String {
//     println!("{}",command);

//     let echo_hello = Command::new("sh")
//         .arg("-c")
//         .arg(command)
//         .output()
//         .expect("failed to execute process");

//     let hello_1 = echo_hello.stdout;

//     // Convert the output from bytes to a String
//     let output_string = String::from_utf8(hello_1).expect("Invalid UTF-8 sequence");

//     // Return the output as a String
//     output_string
// }


// fn main() {
//   tauri::Builder::default()
//     .invoke_handler(tauri::generate_handler![execute_shell_command])
//     .run(tauri::generate_context!())
//     .expect("error while running tauri application");
// }
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::process::{Command, Stdio};
use std::io::{BufRead, BufReader};
use tauri::State;
use std::sync::Mutex;
use tokio::sync::mpsc::{self, Sender};

struct OutputChannel {
    sender: Mutex<Sender<String>>,
}

#[tauri::command]
async fn execute_command(command: String, state: State<'_, OutputChannel>) -> Result<String, String> {
    let sender = state.sender.lock().unwrap().clone();
    let mut child = Command::new(command)
        .stdout(Stdio::piped())
        .spawn()
        .map_err(|e| e.to_string())?;

    let stdout = child.stdout.take().ok_or("Failed to open stdout")?;
    let reader = BufReader::new(stdout);

    tauri::async_runtime::spawn(async move {
        for line in reader.lines() {
            if let Ok(line) = line {
                sender.send(line).await.unwrap();
            }
        }
    });

    Ok("Command executed".to_string())
}

fn main() {
    let (sender, _receiver) = mpsc::channel(100);

    tauri::Builder::default()
        .manage(OutputChannel {
            sender: Mutex::new(sender),
        })
        .invoke_handler(tauri::generate_handler![execute_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
